# HeadersValidationPolicy

``` swift
public class HeadersValidationPolicy:​ PipelineStage
```

## Inheritance

[`PipelineStage`](docs/core/PipelineStage)

## Initializers

### `init(validatingHeaders:​)`

``` swift
public init(validatingHeaders headers:​ [String])
```

## Properties

### `next`

``` swift
var next:​ PipelineStage?
```

## Methods

### `on(response:​completionHandler:​)`

``` swift
public func on(response pipelineResponse:​ PipelineResponse, completionHandler:​ @escaping OnResponseCompletionHandler)
```
