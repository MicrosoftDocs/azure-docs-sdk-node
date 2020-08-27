# HTTPResponse

``` swift
public class HTTPResponse:​ DataStringConvertible
```

## Inheritance

[`DataStringConvertible`](docs/core/DataStringConvertible)

## Initializers

### `init(request:​statusCode:​blockSize:​)`

``` swift
public init(request:​ HTTPRequest?, statusCode:​ Int?, blockSize:​ Int = 4096)
```

## Properties

### `httpRequest`

``` swift
var httpRequest:​ HTTPRequest?
```

### `statusCode`

``` swift
var statusCode:​ Int?
```

### `headers`

``` swift
var headers
```

### `blockSize`

``` swift
var blockSize:​ Int
```

### `data`

``` swift
var data:​ Data?
```

### `statusMessage`

``` swift
var statusMessage:​ String?
```
