# HTTPRequest

``` swift
public class HTTPRequest:​ DataStringConvertible
```

## Inheritance

[`DataStringConvertible`](docs/core/DataStringConvertible)

## Initializers

### `init(method:​url:​headers:​data:​)`

``` swift
public convenience init(method:​ HTTPMethod, url:​ String, headers:​ HTTPHeaders, data:​ Data? = nil) throws
```

### `init(method:​url:​headers:​data:​)`

``` swift
public init(method:​ HTTPMethod, url:​ URL, headers:​ HTTPHeaders, data:​ Data? = nil) throws
```

## Properties

### `httpMethod`

``` swift
let httpMethod:​ HTTPMethod
```

### `url`

``` swift
var url:​ URL
```

### `headers`

``` swift
var headers:​ HTTPHeaders
```

### `data`

``` swift
var data:​ Data?
```
