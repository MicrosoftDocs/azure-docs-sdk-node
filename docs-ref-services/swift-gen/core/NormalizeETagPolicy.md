# NormalizeETagPolicy

``` swift
public class NormalizeETagPolicy:​ PipelineStage
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

### `on(response:​completionHandler:​)`

``` swift
public func on(response:​ PipelineResponse, completionHandler:​ @escaping OnResponseCompletionHandler)
```
