# CopyStatus

Status of a blob copy operation.

``` swift
public enum CopyStatus
```

## Inheritance

`Codable`, `String`

## Enumeration Cases

### `pending`

Copy is in progress.

``` swift
case pending
```

### `success`

Copy completed successfully.

``` swift
case success
```

### `aborted`

Copy was ended by Abort Copy Blob.

``` swift
case aborted
```

### `failed`

Copy failed.

``` swift
case failed
```
