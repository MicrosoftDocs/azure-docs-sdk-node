# HeadersPolicy

``` swift
public class HeadersPolicy:​ PipelineStage
```

## Inheritance

[`PipelineStage`](docs/core/PipelineStage)

## Initializers

### `init(addingHeaders:​)`

``` swift
public init(addingHeaders headers:​ HTTPHeaders)
```

## Properties

### `next`

``` swift
var next:​ PipelineStage?
```

## Methods

### `on(request:​completionHandler:​)`

``` swift
public func on(request:​ PipelineRequest, completionHandler:​ @escaping OnRequestCompletionHandler)
```
