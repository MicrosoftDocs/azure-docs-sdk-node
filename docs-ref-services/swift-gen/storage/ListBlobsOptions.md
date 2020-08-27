# ListBlobsOptions

User-configurable options for the `StorageBlobClient.listBlobs` operation.

``` swift
public struct ListBlobsOptions:​ AzureOptions
```

## Inheritance

`AzureOptions`

## Initializers

### `init(clientRequestId:​cancellationToken:​prefix:​delimiter:​maxResults:​include:​timeoutInSeconds:​)`

Initialize a `ListBlobsOptions` structure.

``` swift
public init(clientRequestId:​ String? = nil, cancellationToken:​ CancellationToken? = nil, prefix:​ String? = nil, delimiter:​ String? = nil, maxResults:​ Int? = nil, include:​ [ListBlobsInclude]? = nil, timeoutInSeconds:​ Int? = nil)
```

#### Parameters

  - clientRequestId:​ - clientRequestId:​ A client-generated, opaque value with 1KB character limit that is recorded in analytics logs.
  - cancellationToken:​ - cancellationToken:​ A token used to make a best-effort attempt at canceling a request.
  - prefix:​ - prefix:​ Return only blobs whose names begin with the specified prefix.
  - delimiter:​ - delimiter:​ Operation returns a BlobPrefix element in the response body that acts as a placeholder for all blobs whose names begin with the same substring up to the appearance of the delimiter character. The delimiter may be a single charcter or a string.
  - maxResults:​ - maxResults:​ Maximum number of containers to return, up to 5000.
  - include:​ - include:​ One or more datasets to include in the response.
  - timeoutInSeconds:​ - timeoutInSeconds:​ Request timeout in seconds.

## Properties

### `clientRequestId`

A client-generated, opaque value with 1KB character limit that is recorded in analytics logs.

``` swift
let clientRequestId:​ String?
```

### `cancellationToken`

A token used to make a best-effort attempt at canceling a request.

``` swift
let cancellationToken:​ CancellationToken?
```

### `prefix`

Return only blobs whose names begin with the specified prefix.

``` swift
let prefix:​ String?
```

### `delimiter`

Operation returns a BlobPrefix element in the response body that acts as a placeholder for all
blobs whose names begin with the same substring up to the appearance of the delimiter character.
The delimiter may be a single charcter or a string.

``` swift
let delimiter:​ String?
```

### `maxResults`

Maximum number of containers to return, up to 5000.

``` swift
let maxResults:​ Int?
```

### `include`

One or more datasets to include in the response.

``` swift
let include:​ [ListBlobsInclude]?
```

### `timeoutInSeconds`

Request timeout in seconds.

``` swift
let timeoutInSeconds:​ Int?
```
