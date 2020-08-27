# StorageSASTokenPermissions

Permissions granted by a Storage shared access signature token.

``` swift
public struct StorageSASTokenPermissions
```

## Properties

### `blob`

Permissions that apply to blob-level operations.

``` swift
let blob:​ Set<StorageSASTokenBlobPermissions>
```

### `container`

Permissions that apply to container-level operations.

``` swift
let container:​ Set<StorageSASTokenContainerPermissions>
```

### `all`

A `SASTokenPermissions` object containing all blob- and container-level permissions.

``` swift
let all:​ Self
```

## Methods

### `permits(other:​)`

Whether this `SASTokenPermissions`'s permissions are a superset of another.

``` swift
public func permits(other:​ Self) -> Bool
```

#### Parameters

  - other:​ - other:​ The other `SASTokenPermissions` to compare.
