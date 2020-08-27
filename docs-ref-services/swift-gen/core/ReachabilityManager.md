# ReachabilityManager

<dl>
<dt><code>!os(watchOS)</code></dt>
<dd>

``` swift
public class ReachabilityManager:​ ReachabilityManagerType
```

</dd>
</dl>

## Inheritance

[`ReachabilityManagerType`](docs/core/ReachabilityManagerType)

## Initializers

### `init?(host:​)`

<dl>
<dt><code>!os(watchOS)</code></dt>
<dd>

Creates a `Reachability` instance with the specified host.

``` swift
public convenience init?(host:​ String)
```

#### Parameters

  - host:​ - host:​ The host used to evaluate network reachability.

#### Returns

The new `Reachability` instance.

</dd>
</dl>

### `init?()`

<dl>
<dt><code>!os(watchOS)</code></dt>
<dd>

Creates a `Reachability` instance that monitors the address 0.0.0.0.

``` swift
public convenience init?()
```

ReachabilityManager treats the 0.0.0.0 address as a special token that causes it to monitor the
general routing status of the device, both IPv4 and IPv6.

#### Returns

The new `Reachability` instance.

</dd>
</dl>

## Properties

### `networkReachabilityStatus`

<dl>
<dt><code>!os(watchOS)</code></dt>
<dd>

``` swift
var networkReachabilityStatus:​ NetworkReachabilityStatus
```

</dd>
</dl>

## Methods

### `registerListener(_:​)`

<dl>
<dt><code>!os(watchOS)</code></dt>
<dd>

``` swift
public func registerListener(_ listener:​ @escaping ReachabilityStatusListener)
```

</dd>
</dl>

### `startListening()`

<dl>
<dt><code>!os(watchOS)</code></dt>
<dd>

``` swift
@discardableResult public func startListening() -> Bool
```

</dd>
</dl>

### `stopListening()`

<dl>
<dt><code>!os(watchOS)</code></dt>
<dd>

``` swift
public func stopListening()
```

</dd>
</dl>
