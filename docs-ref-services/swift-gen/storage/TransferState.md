# TransferState

The state of a transfer.

``` swift
public enum TransferState
```

## Inheritance

`Int16`

## Enumeration Cases

### `pending`

The transfer has not been started by the transfer management engine.

``` swift
case pending
```

### `inProgress`

The transfer is currently in progress.

``` swift
case inProgress
```

### `paused`

The transfer is paused.

``` swift
case paused
```

### `complete`

The transfer completed successfully.

``` swift
case complete
```

### `failed`

The transfer failed. This failure may or may not be retryable.

``` swift
case failed
```

### `canceled`

The transfer was explicitly canceled.

``` swift
case canceled
```

### `deleted`

The record of the transfer no longer exists.

``` swift
case deleted
```

## Properties

### `label`

A string representation of the transfer state.

``` swift
var label:​ String
```

### `resumable`

Indicates whether the transfer is currently in a state that can be resumed.

``` swift
var resumable:​ Bool
```

### `active`

Indicates whether the transfer is currently in an active state.

``` swift
var active:​ Bool
```
