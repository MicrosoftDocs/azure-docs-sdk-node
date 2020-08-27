# ListBlobsOptions.ListBlobsInclude

Datasets which may be included as part of the call response.

``` swift
public enum ListBlobsInclude
```

## Inheritance

`String`

## Enumeration Cases

### `snapshots`

Include blob snapshots in the response.

``` swift
case snapshots
```

### `metadata`

Include the blobs' metadata in the response.

``` swift
case metadata
```

### `uncommittedblobs`

Include blobs for which blocks have been uploaded, but which have not been committed, in the response.

``` swift
case uncommittedblobs
```

### `copy`

Include metadata related to any current or previous Copy Blob operation in the response.

``` swift
case copy
```

### `deleted`

Include soft-deleted blobs in the response.

``` swift
case deleted
```
