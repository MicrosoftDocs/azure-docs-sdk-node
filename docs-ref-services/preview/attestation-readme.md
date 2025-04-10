---
title: Azure Attestation client library for JavaScript
keywords: Azure, javascript, SDK, API, @azure/attestation,
ms.date: 06/16/2021
ms.topic: reference
ms.devlang: javascript
ms.service: attestation
---
# Azure Attestation client library for JavaScript - version 1.0.0-beta.4 


The Microsoft Azure Attestation (MAA) service is a unified solution for remotely verifying the trustworthiness of a platform and integrity of the binaries running inside it. The service supports attestation of the platforms backed by Trusted Platform Modules (TPMs) alongside the ability to attest to the state of Trusted Execution Environments (TEEs) such as Intel(tm) Software Guard Extensions (SGX) enclaves and Virtualization-based Security (VBS) enclaves.

Attestation is a process for demonstrating that software binaries were properly instantiated on a trusted platform. Remote relying parties can then gain confidence that only such intended software is running on trusted hardware. Azure Attestation is a unified customer-facing service and framework for attestation.

Azure Attestation enables cutting-edge security paradigms such as Azure Confidential computing and Intelligent Edge protection. Customers have been requesting the ability to independently verify the location of a machine, the posture of a virtual machine (VM) on that machine, and the environment within which enclaves are running on that VM. Azure Attestation will empower these and many additional customer requests.

Azure Attestation receives evidence from compute entities, turns them into a set of claims, validates them against configurable policies, and produces cryptographic proofs for claims-based applications (for example, relying parties and auditing authorities).

For a more complete view of Azure libraries, see the [azure sdk typescript release](https://aka.ms/azsdk/js/all).

> NOTE: This is a preview SDK for the Microsoft Azure Attestation service. It provides all the essential functionality to access the Azure Attestation service, it should be considered 'as-is" and is subject to changes in the future which may break compatibility with previous versions.

  [Source code][source_code] | [Package (NPM)][Attestation_npm] | [API reference documentation][API_reference] | [Product documentation](https://docs.microsoft.com/azure/attestation/)

## Getting started

### Currently supported environments

- Node.js version 8.x.x or higher

### Prerequisites

- An Azure subscription.  To use Azure services, including the Microsoft Azure Attestation service, you'll need a subscription.  If you do not have an existing Azure account, you may sign up for a [free trial][azure_sub] or use your [Visual Studio Subscription](https://visualstudio.microsoft.com/subscriptions/) benefits when you [create an account](https://account.windowsazure.com/Home/Index).
- An existing Azure Attestation Instance, or you can use the "shared provider" available in each Azure region. If you need to create an Azure Attestation service instance, you can use the Azure Portal or [Azure CLI][azure_cli].

### Install the @azure/attestation package

Install the Microsoft Azure Attestation client library for JavaScript with [NPM][Attestation_npm]:

```Powershell
npm install @azure/attestation
```

### Authenticate the client

In order to interact with the Microsoft Azure Attestation service, you'll need to create an instance of the [Attestation Client][attestation_client] or [Attestation Administration Client][attestation_admin_client] class. You need a **attestation instance url**, which you may see as "DNS Name" in the portal,
 and **client secret credentials (client id, client secret, tenant id)** to instantiate a client object.

Client secret credential authentication is being used in this getting started section but you can find more ways to authenticate with [Azure identity][azure_identity]. To use the [DefaultAzureCredential][DefaultAzureCredential] provider shown below,
or other credential providers provided with the Azure SDK, you should install the Azure.Identity package:

```Powershell
npm install @azure/identity
```

#### Create/Get credentials

Use the [Azure CLI][azure_cli] snippet below to create/get client secret credentials.

- Create a service principal and configure its access to Azure resources:

    ```Powershell
    az ad sp create-for-rbac -n <your-application-name> --skip-assignment
    ```

    Output:

    ```json
    {
        "appId": "generated-app-ID",
        "displayName": "dummy-app-name",
        "name": "http://dummy-app-name",
        "password": "random-password",
        "tenant": "tenant-ID"
    }
    ```

- Take note of the service principal objectId

    ```Powershell
    az ad sp show --id <appId> --query objectId
    ```

    Output:

    ```Powershell
    "<your-service-principal-object-id>"
    ```

- Use the returned credentials above to set  **AZURE_CLIENT_ID** (appId), **AZURE_CLIENT_SECRET** (password), and **AZURE_TENANT_ID** (tenant) environment variables. The following example shows a way to do this in Powershell:

```Powershell
    $Env:AZURE_CLIENT_ID="generated-app-ID"
    $Env:AZURE_CLIENT_SECRET="random-password"
    $Env:AZURE_TENANT_ID="tenant-ID"
```

For more information about the Azure Identity APIs and how to use them, see [Azure Identity client library](https://github.com/Azure/azure-sdk-for-js/tree/@azure/attestation_1.0.0-beta.4/sdk/identity/identity)

## Key concepts

There are four major families of functionality provided in this preview SDK:

- [SGX and TPM enclave attestation.](#attestation)
- [MAA Attestation Token signing certificate discovery and validation.](#attestation-token-signing-certificate-discovery-and-validation)  
- [Attestation Policy management.](#policy-management)
- [Attestation policy management certificate management](#policy-management-certificate-management) (yes, policy management management).

The Microsoft Azure Attestation service runs in two separate modes: "Isolated" and "AAD". When the service is running in "Isolated" mode, the customer needs to
provide additional information beyond their authentication credentials to verify that they are authorized to modify the state of an attestation instance.

Finally, each region in which the Microsoft Azure Attestation service is available supports a "shared" instance, which
can be used to attest SGX enclaves which only need verification against the azure baseline (there are no policies applied to the shared instance). TPM attestation is not available in the shared instance.
While the shared instance requires AAD authentication, it does not have any RBAC policies - any customer with a valid AAD bearer token can attest using the shared instance.

### Attestation

SGX or TPM attestation is the process of validating evidence collected from
a trusted execution environment to ensure that it meets both the Azure baseline for that environment and customer defined policies applied to that environment.

### Attestation service token signing certificate discovery and validation

One of the core operational guarantees of the Azure Attestation Service is that the service operates "operationally out of the TCB". In other words, there is no way that a Microsoft operator could tamper with the operation of the service, or corrupt data sent from the client. To ensure this guarantee, the core of the attestation service runs in an Intel(tm) SGX enclave.

To allow customers to verify that operations were actually performed inside the enclave, most responses from the Attestation Service are encoded in a [JSON Web Token][json_web_token], which is signed by a key held within the attestation service's enclave.

This token will be signed by a signing certificate issued by the MAA service for the specified instance.

If the MAA service instance is running in a region where the service runs in an SGX enclave, then
the certificate issued by the server can be verified using the [oe_verify_attestation_certificate API](https://openenclave.github.io/openenclave/api/enclave_8h_a3b75c5638360adca181a0d945b45ad86.html).

The [`AttestationResponse`][attestation_response] object contains two main attributes: `token` and `value`. The `token` attribute contains the complete token returned by the attestation service, the `value` attribute contains the body of the JSON Web Token response.

### Policy Management

Each attestation service instance has a policy applied to it which defines additional criteria which the customer has defined.

For more information on attestation policies, see [Attestation Policy](https://docs.microsoft.com/azure/attestation/author-sign-policy)

### Policy Management certificate management

When an attestation instance is running in "Isolated" mode, the customer who created the instance will have provided
a policy management certificate at the time the instance is created. All policy modification operations require that the customer sign
the policy data with one of the existing policy management certificates. The Policy Management Certificate Management APIs enable
clients to "roll" the policy management certificates.

### Isolated Mode and AAD Mode

Each Microsoft Azure Attestation service instance operates in either "AAD" mode or "Isolated" mode. When an MAA instance is operating in AAD mode, it means that the customer which created the attestation instance allows Azure Active Directory and Azure Role Based Access control policies to verify access to the attestation instance.  

### *AttestationType*

The Microsoft Azure Attestation service supports attesting different types of evidence depending on the environment.
Currently, MAA supports the following Trusted Execution environments:

- OpenEnclave - An Intel(tm) Processor running code in an SGX Enclave where the attestation evidence was collected using the OpenEnclave [`oe_get_report`](https://openenclave.io/apidocs/v0.14/enclave_8h_aefcb89c91a9078d595e255bd7901ac71.html#aefcb89c91a9078d595e255bd7901ac71) or [`oe_get_evidence`](https://openenclave.io/apidocs/v0.14/attester_8h_a7d197e42468636e95a6ab97b8e74c451.html#a7d197e42468636e95a6ab97b8e74c451) API.
- SgxEnclave - An Intel(tm) Processor running code in an SGX Enclave where the attestation evidence was collected using the Intel SGX SDK.
- Tpm - A Virtualization Based Security environment where the Trusted Platform Module of the processor is used to provide the attestation evidence.

### Runtime Data and Inittime Data

RuntimeData refers to data which is presented to the Intel SGX Quote generation logic or the `oe_get_report`/`oe_get_evidence` APIs. If the caller to the attest API provided a `runtime_data` attribute, The Azure Attestation service will validate that the first 32 bytes of the `report_data` field in the SGX Quote/OE Report/OE Evidence matches the SHA256 hash of the `runtime_data`.

InitTime data refers to data which is used to configure the SGX enclave being attested.

> Note that InitTime data is not supported on Azure [DCsv2-Series](https://docs.microsoft.com/azure/virtual-machines/dcv2-series) virtual machines.

### Additional concepts

## Examples

- [Create an attestation client instance](#create-client-instance)
- [Attest an SGX enclave](#attest-sgx-enclave)
- [Get attestation policy](#get-attestation-policy)
- [Retrieve token validation certificates](#retrieve-token-certificates)
- [Create an attestation client instance](#create-client-instance)

### Create client instance

Creates an instance of the Attestation Client at uri `endpoint`.

```ts
<FILL THIS IN>
```

### Get attestation policy

The `getPolicy` method retrieves the attestation policy from the service.
Attestation Policies are instanced on a per-attestation type basis, the `AttestationType` parameter defines the type to retrieve.

```js
    const policyResult = await adminClient.getPolicy(attestationType);

    // The text policy document is available in the `policyResult.value`
    // property.

    // The actual attestation token returned by the MAA service is available
    // in `policyResult.token`.
```

### Set an attestation policy for a specified attestation type

If the attestation service instance is running in Isolated mode, the set_policy API needs to provide a signing certificate (and private key) which can be used to validate that the caller is authorized to modify policy on the attestation instance. If the service instance is running in AAD mode, then the signing certificate and key are optional.

Under the covers, the setPolicy APIs create a [JSON Web Token][json_web_token] based on the policy document and signing information which is sent to the attestation service.

```js
<FILL THIS IN>
```

If the service instance is running in AAD mode, the call to setPolicy can be
simplified:

```js
<FILL THIS IN>
```

Clients need to be able to verify that the attestation policy document was not modified before the policy document was received by the attestation service's enclave.

There are two properties provided in the [PolicyResult][attestation_policy_result] that can be used to verify that the service received the policy document:

- [`policy_signer`][attestation_policy_result_parameters] - if the `setPolicy` call included a signing certificate, this will be the certificate provided at the time of the `setPolicy` call. If no policy signer was set, this will be null.
- [`policy_token_hash`][attestation_policy_result_parameters] - this is the hash of the [JSON Web Signature][json_web_token] sent to the service for the setPolicy API.

To verify the hash, clients can generate an attestation token and verify the hash generated from that token:

```js
    const expectedPolicy = AttestationToken.create(
      { 
          body: new StoredAttestationPolicy(minimalPolicy).serialize(), 
          signer: signer
      });

    // Use your favorite SHA256 hash generator function to create a hash of the
    // stringized JWS. The tests in this package use `KJUR.crypto.Util.hashString(buffer, "sha256")`
    // from the `jsrsasign` library, but any crypto library will
    // work.
    const expectedHash = generateSha256Hash(expectedPolicy.serialize());

    // The hash returned in expectedHash will match the value in 
    // `setResult.value.policy_token_hash.
```

### Attest SGX Enclave

Use the [`attest_sgx`][attest_sgx] method to attest an SGX enclave.

One of the core challenges customers have interacting with encrypted environments is how to ensure that you can securely communicate with the code running in the environment ("enclave code").

One solution to this problem is what is known as "Secure Key Release", which is a pattern that enables secure communication with enclave code.

To implement the "Secure Key Release" pattern, the enclave code generates an ephemeral asymmetric key. It then serializes the public portion of the key to some format (possibly a JSON Web Key, or PEM, or some other serialization format).

The enclave code then calculates the SHA256 value of the public key and passes it as an input to code which generates an SGX Quote (for OpenEnclave, that would be the [oe_get_evidence](https://openenclave.io/apidocs/v0.14/attester_8h_a7d197e42468636e95a6ab97b8e74c451.html#a7d197e42468636e95a6ab97b8e74c451) or  [oe_get_report](https://openenclave.io/apidocs/v0.14/enclave_8h_aefcb89c91a9078d595e255bd7901ac71.html#aefcb89c91a9078d595e255bd7901ac71)).

The client then sends the SGX quote and the serialized key to the attestation service. The attestation service will validate the quote and ensure that the hash of the key is present in the quote and will issue an "Attestation Token".

The client can then send that Attestation Token (which contains the serialized key) to a 3rd party "relying party". The relying party then validates that the attestation token was created by the attestation service, and thus the serialized key can be used to encrypt some data held by the "relying party" to send to the service.

This example shows one common pattern of calling into the attestation service to retrieve an attestation token associated with a request.

This example assumes that you have an existing `AttestationClient` object which is configured with the base URI for your endpoint. It also assumes that you have an SGX Quote (`quote`) generated from within the SGX enclave you are attesting, and "Runtime Data" (`binaryRuntimeData`) which is referenced in the SGX Quote.

```ts
    const attestationResult = await client.attestOpenEnclave(
      quote, 
      {
        runTimeData: new AttestationData(binaryRuntimeData, false),
      });
```

If the `isJson` parameter to the `AttestationData` constructor is not provided,
the code will attempt to determine if binaryRuntimeData is JSON or not by attempting
to parse the data.

Additional information on how to perform attestation token validation can be found in the [MAA Service Attestation Sample](https://github.com/Azure-Samples/microsoft-azure-attestation).

### Retrieve Token Certificates

Use `get_signing_certificates` to retrieve the certificates which can be used to validate the token returned from the attestation service.

```ts
<FILL THIS IN>
```

## Troubleshooting

Most Attestation service operations will raise exceptions defined in [Azure Core](https://github.com/Azure/azure-sdk-for-js/blob/@azure/attestation_1.0.0-beta.4/sdk/core/README.md). The attestation service APIs will throw a `HttpResponseError` on failure with helpful error codes. Many of these errors are recoverable.

```ts
<Fill this in>
```

### Logging

Enabling logging may help uncover useful information about failures. In order to see a log of HTTP requests and responses, set the `AZURE_LOG_LEVEL` environment variable to `info`. Alternatively, logging can be enabled at runtime by calling `setLogLevel` in the `@azure/logger`:

```javascript
import { setLogLevel } from "@azure/logger";

setLogLevel("info");
```

For more detailed instructions on how to enable logs, you can look at the [@azure/logger package docs](https://github.com/Azure/azure-sdk-for-js/tree/@azure/attestation_1.0.0-beta.4/sdk/core/logger).

Additional troubleshooting information for the MAA service can be found [here](https://docs.microsoft.com/azure/attestation/troubleshoot-guide)

## Next steps

For more information about the Microsoft Azure Attestation service, please see our [documentation page](https://docs.microsoft.com/azure/attestation/).

## Contributing

This project welcomes contributions and suggestions. Most contributions require you to agree to a Contributor License Agreement (CLA) declaring that you have the right to, and actually do, grant us the rights to use your contribution. For details, visit [the Contributor License Agreement site](https://cla.microsoft.com).

When you submit a pull request, a CLA-bot will automatically determine whether you need to provide a CLA and decorate the PR appropriately (e.g., label, comment). Simply follow the instructions provided by the bot. You will only need to do this once across all repos using our CLA.

This project has adopted the [Microsoft Open Source Code of Conduct][microsoft_code_of_conduct]. For more information see the Code of Conduct FAQ or contact <opencode@microsoft.com> with any additional questions or comments.

See [CONTRIBUTING.md][contributing] for details on building, testing, and contributing to these libraries.

## Provide Feedback

If you encounter any bugs or have suggestions, please file an issue in the
[Issues](https://github.com/Azure/azure-sdk-for-js/issues)
section of the project.

<!-- LINKS -->
[source_code]: https://github.com/Azure/azure-sdk-for-js/tree/@azure/attestation_1.0.0-beta.4/sdk/attestation/attestation
[azure_identity]: https://azuresdkdocs.blob.core.windows.net/$web/javascript/azure-identity/2.0.0-beta.3/index.html
[DefaultAzureCredential]: https://azuresdkdocs.blob.core.windows.net/$web/javascript/azure-identity/2.0.0-beta.3/classes/defaultazurecredential.html
[attestation_policy_result]:https://azuresdkdocs.blob.core.windows.net/$web/javascript/azure-attestation/1.0.0-beta.2/interfaces/policyresult.html
[attestation_client]: https://azuresdkdocs.blob.core.windows.net/$web/javascript/azure-attestation/1.0.0-beta.2/classes/attestationclient.html
[attestation_admin_client]: https://azuresdkdocs.blob.core.windows.net/$web/javascript/azure-attestation/1.0.0-beta.2/classes/attestationclient.html
[attestation_response]: https://azuresdkdocs.blob.core.windows.net/$web/javascript/azure-attestation/1.0.0-beta.2/interfaces/attestationresponse.html
[attestation_policy_result_parameters]: https://www.microsoft.com/
[attest_sgx]: https://azuresdkdocs.blob.core.windows.net/$web/javascript/azure-attestation/1.0.0-beta.2/classes/attestation.html#attestsgxenclave
[attestation_npm]: https://www.npmjs.com/package/@azure/attestation
[API_reference]:https://azuresdkdocs.blob.core.windows.net/$web/javascript/azure-attestation/1.0.0-beta.2/index.html
[style-guide-msft]: https://docs.microsoft.com/style-guide/capitalization
[style-guide-cloud]: https://aka.ms/azsdk/cloud-style-guide
[microsoft_code_of_conduct]: https://opensource.microsoft.com/codeofconduct/
[azure_cli]: https://docs.microsoft.com/cli/azure
[azure_sub]: https://azure.microsoft.com/free/
[code_of_conduct]: https://opensource.microsoft.com/codeofconduct/
[json_web_token]: https://tools.ietf.org/html/rfc7519
[JWK]: https://tools.ietf.org/html/rfc7517
[base64url_encoding]: https://tools.ietf.org/html/rfc4648#section-5
[contributing]: https://github.com/Azure/azure-sdk-for-js/blob/@azure/attestation_1.0.0-beta.4/CONTRIBUTING.md
[coc_faq]: https://opensource.microsoft.com/codeofconduct/faq/

## Related projects

- [Microsoft Azure SDK for Javascript](https://github.com/Azure/azure-sdk-for-js)



