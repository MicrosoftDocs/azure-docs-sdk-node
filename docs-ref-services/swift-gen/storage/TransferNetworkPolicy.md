# TransferNetworkPolicy

Describes the network conditions required for certain transfer behavior.

``` swift
public struct TransferNetworkPolicy
```

## Initializers

### `init(transferOn:​autoResumeOn:​)`

``` swift
public init(transferOn:​ NetworkType, autoResumeOn:​ NetworkType)
```

## Properties

### `transferOn`

Permit transfers only on permitted values of `NetworkType`.

``` swift
let transferOn:​ NetworkType
```

### `autoResumeOn`

Auto-resume transfers only on listed values of `NetworkType`.

``` swift
let autoResumeOn:​ NetworkType
```

## Methods

### `shouldTransfer(withStatus:​)`

Method to determine whether a transfer should proceed

``` swift
public func shouldTransfer(withStatus status:​ NetworkType) -> Bool
```
