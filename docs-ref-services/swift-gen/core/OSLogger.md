# OSLogger

``` swift
@available(macOS 10.12, iOS 10.0, watchOS 3.0, tvOS 10.0, *) public class OSLogger:​ ClientLogger
```

## Inheritance

[`ClientLogger`](docs/core/ClientLogger)

## Initializers

### `init(withLogger:​level:​)`

``` swift
public init(withLogger osLogger:​ OSLog, level:​ ClientLogLevel = .info)
```

### `init(subsystem:​category:​level:​)`

``` swift
public init(subsystem:​ String = "com.azure", category:​ String, level:​ ClientLogLevel = .info)
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
