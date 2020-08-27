# RequestIdPolicy

``` swift
public class RequestIdPolicy:​ PipelineStage
```

## Inheritance

[`PipelineStage`](docs/core/PipelineStage)

## Initializers

### `init()`

``` swift
public init()
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
