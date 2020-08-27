# PipelineContext

``` swift
public class PipelineContext
```

## Initializers

### `init()`

Create an empty `PipelineContext`.

``` swift
public init()
```

## Methods

### `of(keyValues:​)`

Create a `PipelineContext` from a simple dictionary of key-value pairs.

``` swift
public static func of(keyValues:​ [AnyHashable:​ AnyObject]) -> PipelineContext
```

#### Parameters

  - keyValues:​ - keyValues:​ `Dictionary` of key-value pairs. Value must be cast to `AnyObject`.

#### Returns

`PipelineContext` representing the provided dictionary.

### `add(value:​forKey:​)`

Adds a value to the `PipelineContext`.

``` swift
public func add(value:​ AnyObject, forKey key:​ AnyHashable)
```

#### Parameters

  - value:​ - value:​ Object to be added, as `AnyObject`.
  - key:​ - key:​ String key with which to store the object.

### `add(value:​forKey:​)`

Adds a value to the `PipelineContext`.

``` swift
public func add(value:​ AnyObject, forKey key:​ ContextKey)
```

#### Parameters

  - value:​ - value:​ Object to be added, as `AnyObject`.
  - key:​ - key:​ `ContextKey` with which to store the object.

### `value(forKey:​)`

Retrieves a keyed value from the `PipelineContext`.

``` swift
public func value(forKey key:​ AnyHashable) -> AnyObject?
```

#### Parameters

  - key:​ - key:​ Raw string key to retrieve.

#### Returns

Value for the given property key, if found, as `AnyObject`.

### `value(forKey:​)`

Retrieves a keyed value from the `PipelineContext`.

``` swift
public func value(forKey key:​ ContextKey) -> AnyObject?
```

#### Parameters

  - key:​ - key:​ `ContextKey` to retrieve.

#### Returns

Value for the given property key, if found, as `AnyObject`.

### `toDict()`

Convert the `PipelineContext` linked list into a simple dictionary.

``` swift
public func toDict() -> [AnyHashable:​ AnyObject?]
```

#### Returns

`Dictionary` representation of the `PipelineContext`.

### `add(cancellationToken:​applying:​)`

Add a `CancellationToken` while applying smart defaulting logic. If the client transport options
specify a timeout, this will be used to automatically create `CancellationToken`s for each call,
even when a token is not specified. If the client call options contain a `CancellationToken` with
no timeout the default timeout will be applied, if specified in `AzureClientOptions`.

``` swift
public func add(cancellationToken:​ CancellationToken?, applying clientOptions:​ AzureClientOptions)
```

#### Parameters

  - cancellationToken:​ - cancellationToken:​ Optional `CancellationToken` object.
  - clientOptions:​ - clientOptions:​ `AzureClientOptions` for the client generating the request.
