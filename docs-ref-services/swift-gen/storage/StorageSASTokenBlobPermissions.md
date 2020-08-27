# StorageSASTokenBlobPermissions

Permissions that apply to blob-level operations.

``` swift
public enum StorageSASTokenBlobPermissions
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

### `deleteVersion`

``` swift
case deleteVersion
```

## Properties

### `all`

A set containing all blob-level permissions.

``` swift
let all:​ Set<Self> = [.read, .add, .create, .write, .tags, .delete, .deleteVersion]
```
