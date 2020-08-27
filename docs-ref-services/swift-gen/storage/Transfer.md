# Transfer

Object that contains information about a transfer operation.

``` swift
public protocol Transfer:​ AzureTask, AnyObject
```

## Inheritance

`AnyObject`, `AzureTask`

## Requirements

## id

The unique identifier for this transfer operation.

``` swift
var id:​ UUID
```

## state

The current state of the transfer.

``` swift
var state:​ TransferState
```

## debugString

A debug representation of the transfer.

``` swift
var debugString:​ String
```

## clientRestorationId

An identifier used to associate this transfer with the client that created it. When a transfer is reloaded from
disk (e.g. after an application crash), it can only be resumed once a client with the same `restorationId` has
been initialized. Attempting to resume it without previously initializing such a client will cause the transfer
to transition to the `failed` state.

``` swift
var clientRestorationId:​ String
```

## rawState

:​nodoc:​ Internal representation of the state.

``` swift
var rawState:​ Int16
```

## cancel()

Cancel this transfer.

``` swift
func cancel()
```

## remove()

Remove this transfer from the database. If it is currently active it will be canceled.

``` swift
func remove()
```

## pause()

Pause this transfer if it is currently active.

``` swift
func pause()
```

## resume()

Resume this transfer if it is currently paused, or retry this transfer if it has failed.

``` swift
func resume()
```
