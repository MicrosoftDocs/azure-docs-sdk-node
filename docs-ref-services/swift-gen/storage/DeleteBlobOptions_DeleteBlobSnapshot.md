# DeleteBlobOptions.DeleteBlobSnapshot

This header should be specified only for a request against the base blob resource.
If this header is specified on a request to delete an individual snapshot, the Blob
service returns status code 400 (Bad Request).
If this header is not specified on the request and the blob has associated snapshots,
the Blob service returns status code 409 (Conflict).

``` swift
public enum DeleteBlobSnapshot
```

## Inheritance

`String`

## Enumeration Cases

### `include`

Delete the base blob and all of its snapshots.

``` swift
case include
```

### `only`

Delete only the blob's snapshots and not the blob itself.

``` swift
case only
```
