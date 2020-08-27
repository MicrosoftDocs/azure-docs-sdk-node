# EncryptionOptions

Blob encryption options.

``` swift
public struct EncryptionOptions:​ Codable, Equatable
```

## Inheritance

`Codable`, `Equatable`

## Initializers

### `init(key:​keyResolver:​required:​)`

Initialize an `EncryptionOptions` structure.

``` swift
public init(key:​ Data? = nil, keyResolver:​ [String:​ Data]? = nil, required:​ Bool = false)
```

#### Parameters

  - key:​ - key:​ Actual key data in bytes.
  - keyResolver:​ - keyResolver:​ Dictionary mapping resources to keys.
  - required:​ - required:​ Specify whether encryption is required.

## Properties

### `key`

Actual key data in bytes.

``` swift
let key:​ Data?
```

### `keyResolver`

Dictionary mapping resources to keys.

``` swift
let keyResolver:​ [String:​ Data]?
```

### `required`

Specify whether encryption is required.

``` swift
let required:​ Bool
```
