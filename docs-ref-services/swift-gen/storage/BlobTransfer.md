# BlobTransfer

A blob transfer operation.

``` swift
public class BlobTransfer:​ NSManagedObject, Transfer
```

## Inheritance

`NSManagedObject`, [`Transfer`](docs/storage/Transfer)

## Properties

### `incompleteBlocks`

The number of blocks remaining to be transfered.

``` swift
var incompleteBlocks:​ Int64
```

### `progress`

The current progress of the transfer, calculated as the number of completed blocks divided by the total number
of blocks that comprise the blob transfer.

``` swift
var progress:​ TransferProgress
```

### `debugString`

A debug representation of the transfer.

``` swift
var debugString:​ String
```

### `state`

The current state of the transfer.

``` swift
var state:​ TransferState
```

### `sourceUrl`

The source of the transfer. For uploads, this is the absolute local path on the device of the file being
uploaded. For downloads, this is the URL of the blob being downloaded.

``` swift
var sourceUrl:​ URL?
```

### `destinationUrl`

The destination of the transfer. For uploads, this is the blob URL where the file is being uploaded. For
downloads, this is the absolute local path on the device to which the blob is being downloaded.

``` swift
var destinationUrl:​ URL?
```

### `transferType`

The type of the transfer.

``` swift
var transferType:​ TransferType
```

### `clientRestorationId`

An identifier used to associate this transfer with the client that created it. When a transfer is reloaded from
disk (e.g. after an application crash), it can only be resumed once a client with the same `restorationId` has
been initialized. Attempting to resume it without previously initializing such a client will cause the transfer
to transition to the `failed` state.

``` swift
var clientRestorationId:​ String
```

### `error`

The error that was encountered during the transfer, if any.

``` swift
var error:​ Error?
```

### `id`

The unique identifier for this transfer operation.

``` swift
var id:​ UUID
```

### `rawState`

:​nodoc:​ Internal representation of the state.

``` swift
var rawState:​ Int16
```
