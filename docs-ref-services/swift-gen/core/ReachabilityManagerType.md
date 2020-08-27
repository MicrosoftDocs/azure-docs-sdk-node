# ReachabilityManagerType

<dl>
<dt><code>!os(watchOS)</code></dt>
<dd>

The `ReachabilityManagerType` describes entities that listen for reachability changes of hosts
and addresses for both WWAN and WiFi network interfaces.

``` swift
public protocol ReachabilityManagerType
```

They can be used to determine background information about why a network operation failed, or to retry
network requests when a connection is established. It should not be used to prevent a user from initiating
a network request, as it's possible that an initial request may be required to establish reachability.

</dd>
</dl>

## Requirements

## networkReachabilityStatus

<dl>
<dt><code>!os(watchOS)</code></dt>
<dd>

The current network reachability status.

``` swift
var networkReachabilityStatus:​ NetworkReachabilityStatus
```

</dd>
</dl>

## registerListener(\_:​)

<dl>
<dt><code>!os(watchOS)</code></dt>
<dd>

Sets a closure executed when the network reachability status changes.

``` swift
func registerListener(_ listener:​ @escaping ReachabilityStatusListener)
```

</dd>
</dl>

## startListening()

<dl>
<dt><code>!os(watchOS)</code></dt>
<dd>

Starts listening for changes in network reachability status.

``` swift
@discardableResult func startListening() -> Bool
```

### Returns

`true` if listening was started successfully, `false` otherwise.

</dd>
</dl>

## stopListening()

<dl>
<dt><code>!os(watchOS)</code></dt>
<dd>

Stops listening for changes in network reachability status.

``` swift
func stopListening()
```

</dd>
</dl>
