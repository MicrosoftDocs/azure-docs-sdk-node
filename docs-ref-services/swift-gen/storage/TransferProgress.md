# TransferProgress

Data structure representing the progress of a blob transfer.

``` swift
public struct TransferProgress
```

## Properties

### `bytes`

Completed bytes.

``` swift
let bytes:​ Int
```

### `totalBytes`

Total bytes to transfer.

``` swift
let totalBytes:​ Int
```

### `asPercent`

Percentage of the transfer that is complete, as an Int between 0 and 100.

``` swift
var asPercent:​ Int
```

### `asFloat`

Percentage of the transfer that is complete, as a Float between 0 and 1.

``` swift
var asFloat:​ Float
```
