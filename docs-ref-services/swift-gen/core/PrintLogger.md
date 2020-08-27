# PrintLogger

``` swift
public class PrintLogger:​ ClientLogger
```

## Inheritance

[`ClientLogger`](docs/core/ClientLogger)

## Initializers

### `init(tag:​level:​)`

``` swift
public init(tag:​ String, level:​ ClientLogLevel = .info)
```

## Properties

### `level`

``` swift
var level:​ ClientLogLevel
```

## Methods

### `log(_:​atLevel:​)`

``` swift
public func log(_ message:​ () -> String?, atLevel messageLevel:​ ClientLogLevel)
```
