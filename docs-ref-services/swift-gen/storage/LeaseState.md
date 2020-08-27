# LeaseState

The state of a lease on a blob or container.

``` swift
public enum LeaseState
```

## Inheritance

`Codable`, `String`

## Enumeration Cases

### `available`

The lease is unlocked and can be acquired.

``` swift
case available
```

### `leased`

The lease is locked.

``` swift
case leased
```

### `expired`

The lease duration has expired.

``` swift
case expired
```

### `breaking`

The lease has been broken, but will continue to be locked until the break period has expired.

``` swift
case breaking
```

### `broken`

The lease has been broken, and the break period has expired.

``` swift
case broken
```
