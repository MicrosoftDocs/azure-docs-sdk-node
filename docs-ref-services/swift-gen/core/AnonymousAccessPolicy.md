# AnonymousAccessPolicy

``` swift
public class AnonymousAccessPolicy:​ Authenticating
```

## Inheritance

[`Authenticating`](docs/core/Authenticating)

## Initializers

### `init()`

``` swift
public init()
```

## Properties

### `next`

``` swift
var next:​ PipelineStage?
```

## Methods

### `authenticate(request:​completionHandler:​)`

``` swift
public func authenticate(request:​ PipelineRequest, completionHandler:​ @escaping OnRequestCompletionHandler)
```
