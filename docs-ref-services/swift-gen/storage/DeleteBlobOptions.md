# DeleteBlobOptions

User-configurable options for the `StorageBlobClient.delete` operation.

``` swift
public struct DeleteBlobOptions:​ AzureOptions
```

## Inheritance

`AzureOptions`

## Initializers

### `init(clientRequestId:​cancellationToken:​deleteSnapshots:​snapshot:​timeoutInSeconds:​)`

Initialize a DeleteBlobOptions\` structure.

``` swift
public init(clientRequestId:​ String? = nil, cancellationToken:​ CancellationToken? = nil, deleteSnapshots:​ DeleteBlobSnapshot? = nil, snapshot:​ Date? = nil, timeoutInSeconds:​ Int? = nil)
```

#### Parameters

  - clientRequestId:​ - clientRequestId:​ A client-generated, opaque value with 1KB character limit that is recorded in analytics logs.
  - cancellationToken:​ - cancellationToken:​ A token used to make a best-effort attempt at canceling a request.
  - deleteSnapshots:​ - deleteSnapshots:​ `DeleteBlobSnapshot` value to specify how snapshots should be handled.
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

### `deleteSnapshots`

Specify how blob snapshots should be handled. Required if the blob has associated snapshots.

``` swift
let deleteSnapshots:​ DeleteBlobSnapshot?
```

### `snapshot`

A `Date` specifying the snapshot you wish to delete.

``` swift
let snapshot:​ Date?
```

### `timeoutInSeconds`

Request timeout in seconds.

``` swift
let timeoutInSeconds:​ Int?
```
