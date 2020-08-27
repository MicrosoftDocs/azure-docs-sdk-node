# StorageSASTokenContainerPermissions

Permissions that apply to container-level operations.

``` swift
public enum StorageSASTokenContainerPermissions
```

## Inheritance

`Character`

## Enumeration Cases

### `read`

``` swift
case read
```

### `add`

``` swift
case add
```

### `create`

``` swift
case create
```

### `write`

``` swift
case write
```

### `tags`

``` swift
case tags
```

### `delete`

``` swift
case delete
```

### `list`

``` swift
case list
```

## Properties

### `all`

A set containing all container-level permissions.

``` swift
let all:​ Set<Self> = [.read, .add, .create, .write, .tags, .delete, .list]
```
