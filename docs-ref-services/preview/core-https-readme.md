---
title: Azure Core HTTP client library for JavaScript
keywords: Azure, javascript, SDK, API, @azure/core-https,
ms.date: 02/05/2021
ms.topic: reference
ms.devlang: javascript
ms.service: azure
---
# Azure Core HTTP client library for JavaScript - version 1.0.0-beta.1 
 (Experimental)

This is the core HTTP pipeline for Azure SDK JavaScript libraries which work in the browser and Node.js. This library is primarily intended to be used in code generated by [AutoRest](https://github.com/Azure/Autorest) and [`autorest.typescript`](https://github.com/Azure/autorest.typescript).

## Getting started

### Requirements

- [Node.js](https://nodejs.org) version > 8.x

### Installation

This package is primarily used in generated code and not meant to be consumed directly by end users.

## Key concepts

### PipelineRequest

A `PipelineRequest` describes all the information necessary to make a request to an HTTP REST endpoint.

### PipelineResponse

A `PipelineResponse` describes the HTTP response (body, headers, and status code) from a REST endpoint that was returned after making an HTTP request.

### SendRequest

A `SendRequest` method is a method that given a `PipelineRequest` can asynchronously return a `PipelineResponse`.

```ts
export type SendRequest = (request: PipelineRequest) => Promise<PipelineResponse>;
```

### HttpsClient

An `HttpsClient` is any object that satisfies the following interface to implement a `SendRequest` method:

```ts
export interface HttpsClient {
  /**
   * The method that makes the request and returns a response.
   */
  sendRequest: SendRequest;
}
```

`HttpsClient`s are expected to actually make the HTTP request to a server endpoint, using some platform-specific mechanism for doing so.

### Pipeline Policies

A `PipelinePolicy` is a simple object that implements the following interface:

```ts
export interface PipelinePolicy {
  /**
   * The policy name. Must be a unique string in the pipeline.
   */
  name: string;
  /**
   * The main method to implement that manipulates a request/response.
   * @param request The request being performed.
   * @param next The next policy in the pipeline. Must be called to continue the pipeline.
   */
  sendRequest(request: PipelineRequest, next: SendRequest): Promise<PipelineResponse>;
}
```

It is similar in shape to `HttpsClient`, but includes a policy name as well as a slightly modified `SendRequest` signature that allows it to conditionally call the next policy in the pipeline.

One can view the role of policies as that of `middleware`, a concept that is familiar to NodeJS developers who have worked with frameworks such as [Express](https://expressjs.com/).

The `sendRequest` implementation can both transform the outgoing request as well as the incoming response:

```ts
const customPolicy = {
  name: "My wonderful policy",
  async sendRequest(request: PipelineRequest, next: SendRequest): Promise<PipelineResponse> {
    // Change the outgoing request by adding a new header
    request.headers.set("X-Cool-Header", 42);
    const result = await next(request);
    if (response.status === 403) {
      // Do something special if this policy sees Forbidden
    }
    return result;
  }
};
```

Most policies only concern themselves with either the request or the response, but there are some exceptions such as the [LogPolicy](https://github.com/Azure/azure-sdk-for-js/blob/@azure/core-https_1.0.0-beta.1/sdk/core/core-https/src/policies/logPolicy.ts) which logs information from each.

### Pipelines

A `Pipeline` is an object that manages a set of `PipelinePolicy` objects. Its main function is to ensure that policies are executed in a consistent and predictable order.

You can think of policies being applied like a stack (first-in/last-out.) The first `PipelinePolicy` is able to modify the `PipelineRequest` before any other policies, and it is also the last to modify the `PipelineResponse`, making it the closest to the caller. The final policy is the last able to modify the outgoing request, and the first to handle the response, making it the closest to the network.

A `Pipeline` satisfies the following interface:

```ts
export interface Pipeline {
  addPolicy(policy: PipelinePolicy, options?: AddPolicyOptions): void;
  removePolicy(options: { name?: string; phase?: PipelinePhase }): PipelinePolicy[];
  sendRequest(httpsClient: HttpsClient, request: PipelineRequest): Promise<PipelineResponse>;
  getOrderedPolicies(): PipelinePolicy[];
  clone(): Pipeline;
}
```

As you can see it allows for policies to be added or removed and it is loosely coupled with `HttpsClient` to perform the real request to the server endpoint.

One important concept for `Pipeline`s is that they group policies into ordered phases:

1. Serialize Phase
2. Policies not in a phase
3. Deserialize Phase
4. Retry Phase

Phases occur in the above order, with serialization policies being applied first and retry policies being applied last. Most custom policies fall into the second bucket and are not given a phase name.

When adding a policy to the pipeline you can specify not only what phase a policy is in, but also if it has any dependencies:

```ts
export interface AddPolicyOptions {
  beforePolicies?: string[];
  afterPolicies?: string[];
  afterPhase?: PipelinePhase;
  phase?: PipelinePhase;
}
```

`beforePolicies` are policies that the new policy must execute before and `afterPolicies` are policies that the new policy must happen after. Similarly, `afterPhase` means the policy must only execute after the specified phase has occurred.

This syntax allows custom policy authors to express any necessary relationships between their own policies and the built-in policies provided by `@azure/core-https` when creating a pipeline using `createPipelineFromOptions`.

Implementers are also able to remove policies by name or phase, in the case that they wish to modify an existing `Pipeline` without having to create a new one using `createEmptyPipeline`. The `clone` method is particularly useful when recreating a `Pipeline` without modifying the original.

After all other constraints have been satisfied, policies are applied in the order which they were added.

## Examples

Examples can be found in the `samples` folder.

## Next steps

You can build and run the tests locally by executing `rushx test`. Explore the `test` folder to see advanced usage and behavior of the public classes.

## Troubleshooting

If you run into issues while using this library, please feel free to [file an issue](https://github.com/Azure/azure-sdk-for-js/issues/new).

## Contributing

If you'd like to contribute to this library, please read the [contributing guide](https://github.com/Azure/azure-sdk-for-js/blob/@azure/core-https_1.0.0-beta.1/CONTRIBUTING.md) to learn more about how to build and test the code.



