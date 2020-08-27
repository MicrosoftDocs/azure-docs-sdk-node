# StorageSASTokenCache

A cache that a `StorageSASCredential` can use to cache tokens that are returned from its `tokenProvider`.

``` swift
public protocol StorageSASTokenCache
```

## Requirements

## getToken(forUrl:​withPermissions:​)

Get a token from the cache for a given URL, granting the given permissions.

``` swift
func getToken(forUrl:​ URL, withPermissions:​ StorageSASTokenPermissions) -> StorageSASToken?
```

### Parameters

  - forUrl:​ - forUrl:​ The URL the token must grant access to.
  - withPermissions:​ - withPermissions:​ The permissions the returned token must contain, at minimum.

## add(token:​forUrl:​)

Add a token to the cache which grants access to the given URL.

``` swift
func add(token:​ StorageSASToken, forUrl:​ URL)
```

### Parameters

  - token:​ - token:​ The token to cache.
  - forUrl:​ - forUrl:​ The URL the token grants access to.

## removeToken(forUrl:​)

Remove the token granting access to the given URL from the cache.

``` swift
func removeToken(forUrl:​ URL)
```

### Parameters

  - forUrl:​ - forUrl:​ The URL the token grants access to.

## removeAll()

Remove all tokens from the cache.

``` swift
func removeAll()
```
