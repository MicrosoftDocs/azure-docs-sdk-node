# PipelineResponse

``` swift
public final class PipelineResponse:​ Copyable, PipelineContextSupporting
```

## Inheritance

[`PipelineContextSupporting`](docs/core/PipelineContextSupporting), [`Copyable`](docs/core/Copyable)

## Initializers

### `init(copy:​)`

``` swift
public required convenience init(copy:​ PipelineResponse)
```

### `init(request:​responseCode:​headers:​body:​logger:​)`

``` swift
public convenience init(request:​ PipelineRequest, responseCode:​ Int = 200, headers:​ HTTPHeaders = HTTPHeaders(), body:​ String? = nil, logger:​ ClientLogger = ClientLoggers.none)
```

## Properties

### `httpRequest`

``` swift
var httpRequest:​ HTTPRequest
```

### `httpResponse`

``` swift
var httpResponse:​ HTTPResponse?
```

### `logger`

``` swift
var logger:​ ClientLogger
```

### `context`

``` swift
var context:​ PipelineContext?
```
