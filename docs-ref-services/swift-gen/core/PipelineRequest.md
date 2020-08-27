# PipelineRequest

``` swift
public final class PipelineRequest:​ PipelineContextSupporting
```

## Inheritance

[`PipelineContextSupporting`](docs/core/PipelineContextSupporting)

## Initializers

### `init(request:​logger:​)`

``` swift
public convenience init(request:​ HTTPRequest, logger:​ ClientLogger)
```

### `init(request:​logger:​context:​)`

``` swift
public init(request:​ HTTPRequest, logger:​ ClientLogger, context:​ PipelineContext?)
```

### `init(method:​url:​headers:​body:​context:​logger:​)`

``` swift
public convenience init(method:​ HTTPMethod = .get, url:​ String = "http:​//www.example.com", headers:​ HTTPHeaders = HTTPHeaders(), body:​ String? = nil, context:​ PipelineContext? = nil, logger:​ ClientLogger = ClientLoggers.none)
```

## Properties

### `httpRequest`

``` swift
var httpRequest:​ HTTPRequest
```

### `logger`

``` swift
var logger:​ ClientLogger
```

### `context`

``` swift
var context:​ PipelineContext?
```
