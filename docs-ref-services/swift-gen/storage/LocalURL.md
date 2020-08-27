# LocalURL

Structure encapsulating a base-relative local filesystem URL.

``` swift
public struct LocalURL
```

## Initializers

### `init(fromAbsoluteUrl:​)`

Create a `LocalURL` from an existing absolute URL.

``` swift
public init(fromAbsoluteUrl absoluteUrl:​ URL)
```

### `init(fromDirectory:​)`

Create a `LocalURL` for a well-known directory.

``` swift
public init(fromDirectory directory:​ KnownDirectory)
```

### `init(fromDirectory:​)`

Create a `LocalURL` for a well-known directory.

``` swift
public init(fromDirectory directory:​ FileManager.SearchPathDirectory)
```

### `init(basedOn:​forBlob:​inContainer:​)`

Create a `LocalURL` for a location on the local device in which to store a blob downloaded from a container,
based on a provided base directory.

``` swift
public init(basedOn baseUrl:​ URL, forBlob name:​ String, inContainer container:​ String)
```

### `init(inDirectory:​forBlob:​inContainer:​)`

Create a `LocalURL` for a location on the local device in which to store a blob downloaded from a container,
within a well-known directory.

``` swift
public init(inDirectory directory:​ KnownDirectory, forBlob name:​ String, inContainer container:​ String)
```

### `init(inDirectory:​forBlob:​inContainer:​)`

Create a `LocalURL` for a location on the local device in which to store a blob downloaded from a container,
within a well-known directory.

``` swift
public init(inDirectory directory:​ FileManager.SearchPathDirectory, forBlob name:​ String, inContainer container:​ String)
```

## Properties

### `resolvedUrl`

The absolute URL resolved from this `LocalURL` instance. Resolution is performed by replacing the well-known
directory placeholder (if present) with the current, resolved path to the well-known directory, and then
appending the path components.

``` swift
var resolvedUrl:​ URL?
```

## Methods

### `pathComponents(forBlob:​inContainer:​)`

Retrieve the directory and filename components for a blob within a container. Returns a tuple of (`dirName`,
`fileName`), where `dirName` is the string up to, but not including, the final '/', and `fileName` is the
component following the final '/'.

``` swift
public static func pathComponents(forBlob name:​ String, inContainer container:​ String) -> (dirName:​ String, fileName:​ String)
```

#### Parameters

  - name:​ - name:​ The name of the blob.
  - container:​ - container:​ The name of the container

#### Returns

A tuple of (`dirName`, `fileName`)

### `appendPathComponent(_:​)`

Append the given path component to this `LocalURL`.

``` swift
public mutating func appendPathComponent(_ pathComponent:​ String)
```

### `appendPathComponents(forBlob:​inContainer:​)`

Append the directory and filename components for a blob within a container to this `LocalURL`.

``` swift
public mutating func appendPathComponents(forBlob name:​ String, inContainer container:​ String)
```
