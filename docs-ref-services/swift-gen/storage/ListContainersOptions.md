# ListContainersOptions

User-configurable options for the `StorageBlobClient.listContainers` operation.

``` swift
public struct ListContainersOptions:​ AzureOptions
```

## Inheritance

`AzureOptions`

## Initializers

### `init(clientRequestId:​cancellationToken:​prefix:​include:​maxResults:​timeoutInSeconds:​)`

Initialize a `ListContainersOptions` structure.

``` swift
public init(clientRequestId:​ String? = nil, cancellationToken:​ CancellationToken? = nil, prefix:​ String? = nil, include:​ [ListContainersInclude]? = nil, maxResults:​ Int? = nil, timeoutInSeconds:​ Int? = nil)
```

#### Parameters

  - clientRequestId:​ - clientRequestId:​ A client-generated, opaque value with 1KB character limit that is recorded in analytics logs.
  - cancellationToken:​ - cancellationToken:​ A token used to make a best-effort attempt at canceling a request.
  - prefix:​ - prefix:​ Return only containers whose names begin with the specified prefix.
  - include:​ - include:​ One or more datasets to include in the response.
  - maxResults:​ - maxResults:​ Maximum number of containers to return, up to 5000.
  - timeoutInSeconds:​ - timeoutInSeconds:​ Request timeout in seconds.

## Properties

### `clientRequestId`

A client-generated, opaque value with 1KB character limit that is recorded in analytics logs.

``` swift
let clientRequestId:​ String?
```

### `cancellationToken`

A token used to make a best-effort attempt at canceling a request.

``` swift
let cancellationToken:​ CancellationToken?
```

### `prefix`

Return only containers whose names begin with the specified prefix.

``` swift
let prefix:​ String?
```

### `include`

One or more datasets to include in the response.

``` swift
let include:​ [ListContainersInclude]?
```

### `maxResults`

Maximum number of containers to return, up to 5000.

``` swift
let maxResults:​ Int?
```

### `timeoutInSeconds`

Request timeout in seconds.

``` swift
let timeoutInSeconds:​ Int?
```
