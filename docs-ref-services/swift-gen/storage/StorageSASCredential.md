# StorageSASCredential

A Storage shared access signature credential object.

``` swift
public class StorageSASCredential:​ AzureCredential
```

## Inheritance

`AzureCredential`

## Initializers

### `init(tokenProvider:​tokenCache:​)`

Create a shared access signature credential from an closure that returns an account-level shared access
signature connection string, or a container- or blob-level shared access signature URI.

``` swift
public init(tokenProvider:​ @escaping StorageSASTokenProvider, tokenCache:​ StorageSASTokenCache? = DefaultStorageSASTokenCache())
```

#### Parameters

  - tokenProvider:​ - tokenProvider:​ A closure that generates an account-level shared access signature connection string, or a container- or blob-level shared access signature URI. The closure is called with the Blob Service URL to authenticate, the permissions required for the operation, and a result handler that you must call to provide the generated SAS token. The SAS token will be cached until it expires if a `tokenCache` is provided.
  - tokenCache:​ - tokenCache:​ A `TokenCache` object that this `StorageSASCredential` will use to cache tokens that are returned from the `tokenProvider`.

### `init(staticCredential:​)`

Create a shared access signature credential from a static account-level shared access signature connection
string, or a container- or blob-level shared access signature URI.

``` swift
public init(staticCredential:​ String)
```

#### Parameters

  - staticCredential:​ - staticCredential:​ An account-level shared access signature connection string, or a container- or blob-level shared access signature URI. **WARNING**:​ Static credentials are inherently insecure in end-user facing applications such as mobile and desktop apps. Static credentials should be treated as secrets and should not be shared with end users, and cannot be rotated once compiled into an application. Since mobile and desktop apps are inherently end-user facing, it's highly recommended that static credentials not be used in production for such applications.

## Properties

### `tokenCache`

``` swift
let tokenCache:​ StorageSASTokenCache?
```

## Methods

### `validate()`

:​nodoc:​

``` swift
public func validate() throws
```
