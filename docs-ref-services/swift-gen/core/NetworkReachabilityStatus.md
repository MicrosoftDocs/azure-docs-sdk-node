# NetworkReachabilityStatus

<dl>
<dt><code>!os(watchOS)</code></dt>
<dd>

Defines the various states of network reachability.

``` swift
public enum NetworkReachabilityStatus
```

  - unknown:​      It is unknown whether the network is reachable.

  - notReachable:​ The network is not reachable.

  - reachable:​    The network is reachable.

</dd>
</dl>

## Enumeration Cases

### `unknown`

<dl>
<dt><code>!os(watchOS)</code></dt>
<dd>

``` swift
case unknown
```

</dd>
</dl>

### `notReachable`

<dl>
<dt><code>!os(watchOS)</code></dt>
<dd>

``` swift
case notReachable
```

</dd>
</dl>

### `reachable`

<dl>
<dt><code>!os(watchOS)</code></dt>
<dd>

``` swift
case reachable(:​ ConnectionType)
```

</dd>
</dl>
