# StorageBlobClientDelegate

``` swift
public protocol StorageBlobClientDelegate:​ AnyObject
```

## Inheritance

`AnyObject`

## Requirements

## blobClient(\_:​didUpdateTransfer:​withState:​andProgress:​)

A blob transfer's state and/or progress have changed.

``` swift
func blobClient(_ client:​ StorageBlobClient, didUpdateTransfer transfer:​ BlobTransfer, withState state:​ TransferState, andProgress progress:​ TransferProgress)
```

### Parameters

  - client:​ - client:​ The `StorageBlobClient` associated with the transfer.
  - transfer:​ - transfer:​ The `BlobTransfer` that has changed.
  - state:​ - state:​ The `TransferState` of the blob transfer.
  - progress:​ - progress:​ The `TransferProgress` of the blob transfer.

## blobClient(\_:​didCompleteTransfer:​)

A blob transfer has finished.

``` swift
func blobClient(_ client:​ StorageBlobClient, didCompleteTransfer transfer:​ BlobTransfer)
```

### Parameters

  - client:​ - client:​ The `StorageBlobClient` associated with the transfer.
  - transfer:​ - transfer:​ The `BlobTransfer` that has completed.

## blobClient(\_:​didFailTransfer:​withError:​)

A blob transfer has failed.

``` swift
func blobClient(_ client:​ StorageBlobClient, didFailTransfer transfer:​ BlobTransfer, withError error:​ Error)
```

### Parameters

  - client:​ - client:​ The `StorageBlobClient` associated with the transfer.
  - transfer:​ - transfer:​ The `BlobTransfer` that failed.
  - error:​ - error:​ The `Error` associated with the failure.
