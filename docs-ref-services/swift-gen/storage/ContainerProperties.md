# ContainerProperties

Structure containing properties of a blob container.

``` swift
public struct ContainerProperties:​ XMLModel
```

## Inheritance

`Codable`, `XMLModel`

## Initializers

### `init(from:​)`

:​nodoc:​

``` swift
public init(from decoder:​ Decoder) throws
```

## Properties

### `lastModified`

The date the container was last modified.

``` swift
let lastModified:​ Date
```

### `eTag`

The entity tag for the container.

``` swift
let eTag:​ String
```

### `leaseStatus`

The lease status of the container.

``` swift
let leaseStatus:​ LeaseStatus
```

### `leaseState`

The lease state of the container.

``` swift
let leaseState:​ LeaseState
```

### `leaseDuration`

Specifies whether the lease on a container is of infinite or fixed duration.

``` swift
let leaseDuration:​ LeaseDuration?
```

### `hasImmutabilityPolicy`

Indicates whether the container has an immutability policy set on it.

``` swift
let hasImmutabilityPolicy:​ Bool?
```

### `hasLegalHold`

Indicates whether the container has a legal hold.

``` swift
let hasLegalHold:​ Bool?
```

## Methods

### `xmlMap()`

:​nodoc:​

``` swift
public static func xmlMap() -> XMLMap
```
