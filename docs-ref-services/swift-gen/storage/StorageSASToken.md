# StorageSASToken

A structure representing a Storage shared access signature token.

``` swift
public struct StorageSASToken
```

## Initializers

### `init(sasToken:​blobEndpoint:​queueEndpoint:​fileEndpoint:​tableEndpoint:​)`

Initialize a SAS token object.

``` swift
public init(sasToken:​ String, blobEndpoint:​ String? = nil, queueEndpoint:​ String? = nil, fileEndpoint:​ String? = nil, tableEndpoint:​ String? = nil)
```

#### Parameters

  - sasToken:​ - sasToken:​ The SAS token string.
  - blobEndpoint:​ - blobEndpoint:​ The blob endpoint this token applies to.
  - queueEndpoint:​ - queueEndpoint:​ The queue endpoint this token applies to.
  - fileEndpoint:​ - fileEndpoint:​ The file endpoint this token applies to.
  - tableEndpoint:​ - tableEndpoint:​ The table endpoint this token applies to.

## Properties

### `sasToken`

The SAS token string.

``` swift
let sasToken:​ String
```

### `blobEndpoint`

The blob endpoint this token applies to.

``` swift
let blobEndpoint:​ String?
```

### `queueEndpoint`

The queue endpoint this token applies to

``` swift
let queueEndpoint:​ String?
```

### `fileEndpoint`

The file endpoint this token applies to.

``` swift
let fileEndpoint:​ String?
```

### `tableEndpoint`

The table endpoint this token applies to.

``` swift
let tableEndpoint:​ String?
```

### `validAt`

The date at which this token becomes valid.

``` swift
let validAt:​ Date?
```

### `expiredAt`

The date at which this token expires.

``` swift
let expiredAt:​ Date?
```

### `permissions`

Permissions granted by this token.

``` swift
let permissions:​ StorageSASTokenPermissions
```

### `valid`

Whether this token is currently valid.

``` swift
var valid:​ Bool
```
