# LeaseAccessConditions

Options for accessing a blob based on the condition of a lease. If specified, the operation will be performed only
if both of the following conditions are met:​

``` swift
public struct LeaseAccessConditions:​ Codable, Equatable
```

  - The blob's lease is currently active.

  - The specified lease ID matches that of the blob.

## Inheritance

`Codable`, `Equatable`

## Initializers

### `init(leaseId:​)`

Initialize a `LeaseAccessConditions` structure.

``` swift
public init(leaseId:​ String)
```

#### Parameters

  - leaseId:​ - leaseId:​ The lease ID which must match that of the blob.

## Properties

### `leaseId`

The lease ID which must match that of the blob.

``` swift
let leaseId:​ String
```
