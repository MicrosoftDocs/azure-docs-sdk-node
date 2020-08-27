# URLSessionTransport

``` swift
public class URLSessionTransport:​ HTTPTransportStage
```

## Inheritance

[`HTTPTransportStage`](docs/core/HTTPTransportStage)

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

### `open()`

``` swift
public func open()
```

### `close()`

``` swift
public func close()
```

### `process(request:​completionHandler:​)`

``` swift
public func process(request pipelineRequest:​ PipelineRequest, completionHandler:​ @escaping PipelineStageResultHandler)
```
