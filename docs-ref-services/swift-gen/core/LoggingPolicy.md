# LoggingPolicy

``` swift
public class LoggingPolicy:​ PipelineStage
```

## Inheritance

[`PipelineStage`](docs/core/PipelineStage)

## Initializers

### `init(allowHeaders:​allowQueryParams:​)`

``` swift
public init(allowHeaders:​ [String] = LoggingPolicy.defaultAllowHeaders, allowQueryParams:​ [String] = [])
```

## Properties

### `defaultAllowHeaders`

``` swift
let defaultAllowHeaders:​ [String] = [
        HTTPHeader.accept.rawValue,
        HTTPHeader.cacheControl.rawValue,
        HTTPHeader.clientRequestId.rawValue,
        HTTPHeader.connection.rawValue,
        HTTPHeader.contentLength.rawValue,
        HTTPHeader.contentType.rawValue,
        HTTPHeader.date.rawValue,
        HTTPHeader.etag.rawValue,
        HTTPHeader.expires.rawValue,
        HTTPHeader.ifMatch.rawValue,
        HTTPHeader.ifModifiedSince.rawValue,
        HTTPHeader.ifNoneMatch.rawValue,
        HTTPHeader.ifUnmodifiedSince.rawValue,
        HTTPHeader.lastModified.rawValue,
        HTTPHeader.pragma.rawValue,
        HTTPHeader.requestId.rawValue,
        HTTPHeader.retryAfter.rawValue,
        HTTPHeader.returnClientRequestId.rawValue,
        HTTPHeader.server.rawValue,
        HTTPHeader.traceparent.rawValue,
        HTTPHeader.transferEncoding.rawValue,
        HTTPHeader.userAgent.rawValue
    ]
```

### `next`

``` swift
var next:​ PipelineStage?
```

## Methods

### `on(request:​completionHandler:​)`

``` swift
public func on(request:​ PipelineRequest, completionHandler:​ @escaping OnRequestCompletionHandler)
```

### `on(response:​completionHandler:​)`

``` swift
public func on(response:​ PipelineResponse, completionHandler:​ @escaping OnResponseCompletionHandler)
```

### `on(error:​pipelineResponse:​completionHandler:​)`

``` swift
public func on(error:​ AzureError, pipelineResponse:​ PipelineResponse, completionHandler:​ @escaping OnErrorCompletionHandler)
```
