# ModifiedAccessConditions

Options for accessing a blob based on its modification date and/or eTag. If specified, the operation will be
performed only if all the specified conditions are met.

``` swift
public struct ModifiedAccessConditions:​ Codable, Equatable
```

## Inheritance

`Codable`, `Equatable`

## Initializers

### `init(ifModifiedSince:​ifUnmodifiedSince:​ifMatch:​ifNoneMatch:​)`

Initialize a `ModifiedAccessConditions` structure.

``` swift
public init(ifModifiedSince:​ Date? = nil, ifUnmodifiedSince:​ Date? = nil, ifMatch:​ String? = nil, ifNoneMatch:​ String? = nil)
```

#### Parameters

  - ifModifiedSince:​ - ifModifiedSince:​ Perform the operation only if the blob has been modified since the specified date.
  - ifUnmodifiedSince:​ - ifUnmodifiedSince:​ Perform the operation only if the blob has not been modified since the specified date.
  - ifMatch:​ - ifMatch:​ Perform the operation only if the blob's `eTag` matches the value specified.
  - ifNoneMatch:​ - ifNoneMatch:​ Perform the operation only if the blob's `eTag` does not match the value specified.

## Properties

### `ifModifiedSince`

Perform the operation only if the blob has been modified since the specified date.

``` swift
let ifModifiedSince:​ Date?
```

### `ifUnmodifiedSince`

Perform the operation only if the blob has not been modified since the specified date.

``` swift
let ifUnmodifiedSince:​ Date?
```

### `ifMatch`

Perform the operation only if the blob's `eTag` matches the value specified.

``` swift
var ifMatch:​ String?
```

### `ifNoneMatch`

Perform the operation only if the blob's `eTag` does not match the value specified.

``` swift
let ifNoneMatch:​ String?
```
