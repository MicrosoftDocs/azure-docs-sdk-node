# DefaultStorageSASTokenCache

A `TokenCache` that stores tokens in a simple in-memory dictionary and which stores only a single token for a given
URL, regardless of the permissions associated with the token.

``` swift
public class DefaultStorageSASTokenCache:​ StorageSASTokenCache
```

## Inheritance

[`StorageSASTokenCache`](docs/storage/StorageSASTokenCache)

## Initializers

### `init()`

Initialize a `DefaultTokenCache`.

``` swift
public init()
```

## Methods

### `getToken(forUrl:​withPermissions:​)`

Get a token from the cache for a given URL, granting the given permissions.

``` swift
public func getToken(forUrl url:​ URL, withPermissions _:​ StorageSASTokenPermissions) -> StorageSASToken?
```

#### Parameters

  - forUrl:​ - forUrl:​ The URL the token must grant access to.
  - withPermissions:​ - withPermissions:​ The permissions the returned token must contain, at minimum.

### `add(token:​forUrl:​)`

Add a token to the cache which grants access to the given URL.

``` swift
public func add(token:​ StorageSASToken, forUrl url:​ URL)
```

#### Parameters

  - token:​ - token:​ The token to cache.
  - forUrl:​ - forUrl:​ The URL the token grants access to.

### `removeToken(forUrl:​)`

Remove the token granting access to the given URL from the cache.

``` swift
public func removeToken(forUrl url:​ URL)
```

#### Parameters

  - forUrl:​ - forUrl:​ The URL the token grants access to.

### `removeAll()`

Remove all tokens from the cache.

``` swift
public func removeAll()
```
