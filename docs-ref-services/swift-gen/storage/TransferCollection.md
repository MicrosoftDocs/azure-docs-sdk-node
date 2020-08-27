# TransferCollection

``` swift
public struct TransferCollection
```

## Properties

### `items`

Get all transfers in this `TransferCollection`.

``` swift
let items:​ [BlobTransfer]
```

## Methods

### `cancelAll()`

Cancel all currently active transfers in this `TransferCollection`.

``` swift
public func cancelAll()
```

### `removeAll()`

Remove all transfers in this `TransferCollection` from the database. All currently active transfers will be
canceled.

``` swift
public func removeAll()
```

### `pauseAll()`

Pause all currently active transfers in this `TransferCollection`.

``` swift
public func pauseAll()
```

### `resumeAll(progressHandler:​)`

Resume all currently paused transfers in this `TransferCollection`.

``` swift
public func resumeAll(progressHandler:​ ((BlobTransfer) -> Void)? = nil)
```

### `filterWhere(containerName:​blobName:​localUrl:​state:​)`

Get all transfers in this `TransferCollection` that match all of the provided filter values.

``` swift
public func filterWhere(containerName:​ String? = nil, blobName:​ String? = nil, localUrl:​ LocalURL? = nil, state:​ TransferState? = nil) -> TransferCollection
```

#### Parameters

  - containerName:​ - containerName:​ The name of the blob container involved in the transfer. For downloads this is the source container, whereas for uploads this is the destination container.
  - blobName:​ - blobName:​ The name of the blob involved in the transfer. For downloads this is the source blob, whereas for uploads this is the destination blob.
  - localUrl:​ - localUrl:​ The `LocalURL` involved in the transfer. For downloads this is the destination, whereas for uploads this is the source.
  - state:​ - state:​ The current state of the transfer.

### `firstWith(containerName:​blobName:​localUrl:​state:​)`

Get the first transfer in this `TransferCollection` that matches all of the provided filter values.

``` swift
public func firstWith(containerName:​ String? = nil, blobName:​ String? = nil, localUrl:​ LocalURL? = nil, state:​ TransferState? = nil) -> BlobTransfer?
```

#### Parameters

  - containerName:​ - containerName:​ The name of the blob container involved in the transfer. For downloads this is the source container, whereas for uploads this is the destination container.
  - blobName:​ - blobName:​ The name of the blob involved in the transfer. For downloads this is the source blob, whereas for uploads this is the destination blob.
  - localUrl:​ - localUrl:​ The `LocalURL` involved in the transfer. For downloads this is the destination, whereas for uploads this is the source.
  - state:​ - state:​ The current state of the transfer.
