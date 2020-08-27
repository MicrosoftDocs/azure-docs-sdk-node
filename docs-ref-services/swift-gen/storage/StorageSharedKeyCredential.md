# StorageSharedKeyCredential

A Storage account shared key credential object.

``` swift
public struct StorageSharedKeyCredential:​ AzureCredential
```

**WARNING**:​ Shared keys are inherently insecure in end-user facing applications such as mobile and desktop apps.
Shared keys provide full access to an entire storage account and should not be shared with end users. Since mobile
and desktop apps are inherently end-user facing, it's highly recommended that storage account shared key credentials
not be used in production for such applications.

## Inheritance

`AzureCredential`

## Initializers

### `init(connectionString:​)`

Create a shared key credential from a storage account connection string.

``` swift
public init(connectionString:​ String)
```

**WARNING**:​ Shared keys are inherently insecure in end-user facing applications such as mobile and desktop
apps. Shared keys provide full access to an entire storage account and should not be shared with end users.
Since mobile and desktop apps are inherently end-user facing, it's highly recommended that storage account
shared key credentials not be used in production for such applications.

#### Parameters

  - connectionString:​ - connectionString:​ The storage account connection string.

### `init(accountName:​accessKey:​endpointProtocol:​endpointSuffix:​)`

Create a shared key credential from a storage account name and access key.

``` swift
public init(accountName:​ String, accessKey:​ String, endpointProtocol:​ String = "https", endpointSuffix:​ String = "core.windows.net")
```

**WARNING**:​ Shared keys are inherently insecure in end-user facing applications such as mobile and desktop
apps. Shared keys provide full access to an entire storage account and should not be shared with end users.
Since mobile and desktop apps are inherently end-user facing, it's highly recommended that storage account
shared key credentials not be used in production for such applications.

#### Parameters

  - accountName:​ - accountName:​ The storage account name.
  - accessKey:​ - accessKey:​ The storage account access key.
  - endpointProtocol:​ - endpointProtocol:​ The storage account endpoint protocol.
  - endpointSuffix:​ - endpointSuffix:​ The storage account endpoint suffix.

## Methods

### `validate()`

:​nodoc:​

``` swift
public func validate() throws
```
