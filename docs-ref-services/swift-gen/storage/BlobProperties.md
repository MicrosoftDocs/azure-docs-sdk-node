# BlobProperties

Structure containing properties of a blob or blob snapshot.

``` swift
public struct BlobProperties:​ XMLModel, Codable, Equatable
```

## Inheritance

`Codable`, `Equatable`, `XMLModel`

## Initializers

### `init(contentType:​contentDisposition:​contentEncoding:​contentLanguage:​contentMD5:​contentCRC64:​cacheControl:​accessTier:​)`

Initialize a `BlobProperties` structure.

``` swift
public init(contentType:​ String? = nil, contentDisposition:​ String? = nil, contentEncoding:​ String? = nil, contentLanguage:​ String? = nil, contentMD5:​ String? = nil, contentCRC64:​ String? = nil, cacheControl:​ String? = nil, accessTier:​ AccessTier? = nil)
```

#### Parameters

  - contentType:​ - contentType:​ The content type specified for the blob.
  - contentDisposition:​ - contentDisposition:​ The value of the blob's Content-Disposition request header.
  - contentEncoding:​ - contentEncoding:​ The value of the blob's Content-Encoding request header.
  - contentLanguage:​ - contentLanguage:​ The value of the blob's Content-Language request header.
  - contentMD5:​ - contentMD5:​ The value of the blob's Content-MD5 request header.
  - contentCRC64:​ - contentCRC64:​ The value of the blob's x-ms-content-crc64 request header.
  - cacheControl:​ - cacheControl:​ The value of the blob's Cache-Control request header.
  - accessTier:​ - accessTier:​ The access tier of the blob.

### `init(from:​)`

:​nodoc:​

``` swift
public init(from decoder:​ Decoder) throws
```

## Properties

### `creationTime`

The date that the blob was created.

``` swift
let creationTime:​ Date?
```

### `lastModified`

The date that the blob was last modified.

``` swift
let lastModified:​ Date?
```

### `eTag`

The entity tag for the blob.

``` swift
let eTag:​ String?
```

### `contentLength`

The size of the blob in bytes.

``` swift
var contentLength:​ Int?
```

### `contentType`

The content type specified for the blob.

``` swift
let contentType:​ String?
```

### `contentDisposition`

The value of the blob's Content-Disposition request header, if previously set.

``` swift
let contentDisposition:​ String?
```

### `contentEncoding`

The value of the blob's Content-Encoding request header, if previously set.

``` swift
let contentEncoding:​ String?
```

### `contentLanguage`

The value of the blob's Content-Language request header, if previously set.

``` swift
let contentLanguage:​ String?
```

### `contentMD5`

The value of the blob's Content-MD5 request header, if previously set.

``` swift
let contentMD5:​ String?
```

### `contentCRC64`

The value of the blob's x-ms-content-crc64 request header, if previously set.

``` swift
let contentCRC64:​ String?
```

### `cacheControl`

The value of the blob's Cache-Control request header, if previously set.

``` swift
let cacheControl:​ String?
```

### `sequenceNumber`

The current sequence number for a page blob. This value is nil for block or append blobs.

``` swift
let sequenceNumber:​ Int?
```

### `blobType`

The type of the blob.

``` swift
let blobType:​ BlobType?
```

### `accessTier`

The access tier of the blob.

``` swift
let accessTier:​ AccessTier?
```

### `leaseStatus`

The lease status of the blob.

``` swift
let leaseStatus:​ LeaseStatus?
```

### `leaseState`

The lease state of the blob.

``` swift
let leaseState:​ LeaseState?
```

### `leaseDuration`

Specifies whether the lease on a blob is of infinite or fixed duration.

``` swift
let leaseDuration:​ LeaseDuration?
```

### `copyId`

String identifier for the last attempted Copy Blob operation where this blob was the destination blob.

``` swift
let copyId:​ String?
```

### `copyStatus`

Status of the copy operation identified by `copyId`.

``` swift
let copyStatus:​ CopyStatus?
```

### `copySource`

The URL of the source blob used in the copy operation identified by `copyId`.

``` swift
let copySource:​ URL?
```

### `copyProgress`

Contains the number of bytes copied and the total bytes in the source blob, for the copy operation identified by
`copyId`.

``` swift
let copyProgress:​ String?
```

### `copyCompletionTime`

Completion time of the copy operation identified by `copyId`.

``` swift
let copyCompletionTime:​ Date?
```

### `copyStatusDescription`

Describes the cause of a fatal or non-fatal copy operation failure encounted in the copy operation identified by
`copyId`.

``` swift
let copyStatusDescription:​ String?
```

### `serverEncrypted`

Indicates whether the blob data and application metadata are completely encrypted.

``` swift
let serverEncrypted:​ Bool?
```

### `incrementalCopy`

Indicates whether the blob is an incremental copy blob.

``` swift
let incrementalCopy:​ Bool?
```

### `accessTierInferred`

If the access tier is not explicitly set on the blob, indicates whether the access tier is inferred based on the
blob's content length.

``` swift
let accessTierInferred:​ Bool?
```

### `accessTierChangeTime`

The date that the access tier was last changed on the blob.

``` swift
let accessTierChangeTime:​ Date?
```

### `deletedTime`

The date that the blob was soft-deleted.

``` swift
let deletedTime:​ Date?
```

### `remainingRetentionDays`

The number of days remaining in the blob's time-based retention policy.

``` swift
let remainingRetentionDays:​ Int?
```

## Methods

### `xmlMap()`

:​nodoc:​

``` swift
public static func xmlMap() -> XMLMap
```
