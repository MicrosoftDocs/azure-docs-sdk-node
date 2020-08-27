# RangeOptions

Options for working on a subset of data for a blob.

``` swift
public struct RangeOptions:​ Codable, Equatable
```

## Inheritance

`Codable`, `Equatable`

## Initializers

### `init(offsetBytes:​lengthInBytes:​calculateMD5:​calculateCRC64:​)`

Initialize a `RangeOptions` structure.

``` swift
public init(offsetBytes:​ Int = 0, lengthInBytes:​ Int? = nil, calculateMD5:​ Bool? = nil, calculateCRC64:​ Bool? = nil)
```

#### Parameters

  - offsetBytes:​ - offsetBytes:​ Start of byte range to use for downloading a section of the blob. Must be set if length is provided.
  - lengthInBytes:​ - lengthInBytes:​ Number of bytes to read from the stream. Should be specified for optimal performance.
  - calculateMD5:​ - calculateMD5:​ When set to true, the service returns the MD5 hash for the range as long as the range is less than or equal to 4 MB in size.
  - calculateCRC64:​ - calculateCRC64:​ When set to true, the service returns the CRC64 hash for the range as long as the range is less than or equal to 4 MB in size.

## Properties

### `offsetBytes`

Start of byte range to use for downloading a section of the blob.
Must be set if length is provided.

``` swift
let offsetBytes:​ Int
```

### `lengthInBytes`

Number of bytes to read from the stream. Should be specified
for optimal performance.

``` swift
let lengthInBytes:​ Int?
```

### `calculateMD5`

When set to true, the service returns the MD5 hash for the range
as long as the range is less than or equal to 4 MB in size.

``` swift
let calculateMD5:​ Bool?
```

### `calculateCRC64`

When set to true, the service returns the CRC64 hash for the range
as long as the range is less than or equal to 4 MB in size.

``` swift
let calculateCRC64:​ Bool?
```
