# BearerTokenCredentialPolicy

``` swift
public class BearerTokenCredentialPolicy:​ Authenticating
```

## Inheritance

[`Authenticating`](docs/core/Authenticating)

## Initializers

### `init(credential:​scopes:​)`

``` swift
public init(credential:​ TokenCredential, scopes:​ [String])
```

## Properties

### `next`

``` swift
var next:​ PipelineStage?
```

## Methods

### `authenticate(request:​completionHandler:​)`

Authenticates an HTTP `PipelineRequest` with an OAuth token.

``` swift
public func authenticate(request:​ PipelineRequest, completionHandler:​ @escaping OnRequestCompletionHandler)
```

#### Parameters

  - request:​ - request:​ A `PipelineRequest` object.
  - completionHandler:​ - completionHandler:​ A completion handler that forwards the modified pipeline request.
