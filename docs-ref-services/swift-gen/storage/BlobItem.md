# BlobItem

Structure containing data about a blob or blob snapshot.

``` swift
public struct BlobItem:​ XMLModel
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

### `name`

The name of the blob or snapshot.

``` swift
let name:​ String
```

### `deleted`

Indicates if the blob or snapshot is soft-deleted.

``` swift
let deleted:​ Bool?
```

### `snapshot`

The date this snapshot was created.

``` swift
let snapshot:​ Date?
```

### `metadata`

The blob or snapshot's associated metadata.

``` swift
let metadata:​ [String:​ String]?
```

### `properties`

Properties applied to the blob or snapshot.

``` swift
let properties:​ BlobProperties?
```

## Methods

### `xmlMap()`

:​nodoc:​

``` swift
public static func xmlMap() -> XMLMap
```
