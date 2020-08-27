# PipelineClient

Base class for all pipeline-based service clients.

``` swift
open class PipelineClient
```

## Initializers

### `init(baseUrl:​transport:​policies:​logger:​options:​)`

``` swift
public init(baseUrl:​ URL, transport:​ HTTPTransportStage, policies:​ [PipelineStage], logger:​ ClientLogger, options:​ AzureClientOptions)
```

## Properties

### `baseUrl`

``` swift
var baseUrl:​ URL
```

### `logger`

``` swift
var logger:​ ClientLogger
```

### `commonOptions`

``` swift
var commonOptions:​ AzureClientOptions
```

## Methods

### `url(forTemplate:​withKwargs:​)`

``` swift
public func url(forTemplate templateIn:​ String, withKwargs kwargs:​ [String:​ String]? = nil) -> URL?
```

### `request(_:​context:​completionHandler:​)`

``` swift
public func request(_ request:​ HTTPRequest, context:​ PipelineContext?, completionHandler:​ @escaping HTTPResultHandler<Data?>)
```
