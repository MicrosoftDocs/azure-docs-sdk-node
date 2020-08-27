# CancellationToken

``` swift
public final class CancellationToken:​ Codable, Equatable
```

## Inheritance

`Codable`, `Equatable`

## Initializers

### `init(timeoutInSeconds:​)`

``` swift
public init(timeoutInSeconds:​ Double? = nil)
```

## Properties

### `isCanceled`

``` swift
var isCanceled:​ Bool
```

### `isStarted`

``` swift
var isStarted:​ Bool
```

### `timeoutInSeconds`

``` swift
var timeoutInSeconds:​ Double?
```

## Methods

### `cancel()`

``` swift
public func cancel()
```

### `==(lhs:​rhs:​)`

``` swift
public static func ==(lhs:​ CancellationToken, rhs:​ CancellationToken) -> Bool
```

### `start()`

Start the cancellation token countdown. If the countdown is already running, this return immediately.

``` swift
public func start()
```
