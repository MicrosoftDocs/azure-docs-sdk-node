# PipelineStage

Protocol for implementing pipeline stages.

``` swift
public protocol PipelineStage
```

## Requirements

## next

``` swift
var next:​ PipelineStage?
```

## on(request:​completionHandler:​)

Request modification hook.

``` swift
func on(request:​ PipelineRequest, completionHandler:​ @escaping OnRequestCompletionHandler)
```

### Parameters

  - request:​ - request:​ The `PipelineRequest` input.
  - completionHandler:​ - completionHandler:​ A completion handler which forwards the modified request.

## on(response:​completionHandler:​)

Response modification hook.

``` swift
func on(response:​ PipelineResponse, completionHandler:​ @escaping OnResponseCompletionHandler)
```

### Parameters

  - response:​ - response:​ The `PipelineResponse` input.
  - completionHandler:​ - completionHandler:​ A completion handler which forwards the modified response.

## on(error:​pipelineResponse:​completionHandler:​)

Response error hook.

``` swift
func on(error:​ AzureError, pipelineResponse:​ PipelineResponse, completionHandler:​ @escaping OnErrorCompletionHandler)
```

### Parameters

  - error:​ - error:​ The `PipelineError` input.
  - pipelineResponse:​ - pipelineResponse:​ The `PipelineResponse` object.
  - completionHandler:​ - completionHandler:​ A completion handler which forwards the error along with a boolean that indicates whether the exception was handled or not.

## process(request:​completionHandler:​)

Executes the policy method.

``` swift
func process(request pipelineRequest:​ PipelineRequest, completionHandler:​ @escaping PipelineStageResultHandler)
```

### Parameters

  - pipelineRequest:​ - pipelineRequest:​ The `PipelineRequest` input.
  - completionHandler:​ - completionHandler:​ A `PipelineStageResultHandler` completion handler.
