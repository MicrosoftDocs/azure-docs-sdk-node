# StorageBlobClientOptions

User-configurable options for the `StorageBlobClient`.

``` swift
public struct StorageBlobClientOptions:​ AzureClientOptions
```

## Inheritance

`AzureClientOptions`

## Initializers

### `init(apiVersion:​logger:​telemetryOptions:​restorationId:​maxChunkSizeInBytes:​transportOptions:​downloadNetworkPolicy:​uploadNetworkPolicy:​)`

Initialize a `StorageBlobClientOptions` structure.

``` swift
public init(apiVersion:​ StorageBlobClient.ApiVersion = .latest, logger:​ ClientLogger = ClientLoggers.default(tag:​ "StorageBlobClient"), telemetryOptions:​ TelemetryOptions = TelemetryOptions(), restorationId:​ String = DeviceProviders.appBundleInfo.identifier ?? "AzureStorageBlob", maxChunkSizeInBytes:​ Int = 4 * 1024 * 1024 - 1, transportOptions:​ TransportOptions? = nil, downloadNetworkPolicy:​ TransferNetworkPolicy? = nil, uploadNetworkPolicy:​ TransferNetworkPolicy? = nil)
```

#### Parameters

  - apiVersion:​ - apiVersion:​ The API version of the Azure Storage Blob service to invoke.
  - logger:​ - logger:​ The `ClientLogger` to be used by this `StorageBlobClient`.
  - telemetryOptions:​ - telemetryOptions:​ Options for configuring telemetry sent by this `StorageBlobClient`.
  - restorationId:​ - restorationId:​ An identifier used to associate this client with transfers it creates. When a transfer is reloaded from disk (e.g. after an application crash), it can only be resumed once a client with the same `restorationId` has been initialized. If your application only uses a single `StorageBlobClient`, it is recommended to use a value unique to your application (e.g. "MyApplication"). If your application uses multiple clients with different configurations, use a value unique to both your application and the configuration (e.g. "MyApplication.userClient").
  - maxChunkSizeInBytes:​ - maxChunkSizeInBytes:​ The maximum size of a single chunk in a blob upload or download. Must be less than 4MB if enabling MD5 or CRC64 hashing.
  - downloadNetworkPolicy:​ - downloadNetworkPolicy:​ The `TransferNetworkPolicy` to use for managed downloads.
  - uploadNetworkPolicy:​ - uploadNetworkPolicy:​ The `TransferNetworkPolicy` to use for managed uploads.

## Properties

### `apiVersion`

The API version of the Azure Storage Blob service to invoke.

``` swift
let apiVersion:​ String
```

### `logger`

The `ClientLogger` to be used by this `StorageBlobClient`.

``` swift
let logger:​ ClientLogger
```

### `telemetryOptions`

Options for configuring telemetry sent by this `StorageBlobClient`.

``` swift
let telemetryOptions:​ TelemetryOptions
```

### `transportOptions`

Global transport options

``` swift
let transportOptions:​ TransportOptions
```

### `restorationId`

An identifier used to associate this client with transfers it creates. When a transfer is reloaded from disk
(e.g. after an application crash), it can only be resumed once a client with the same `restorationId` has been
initialized. If your application only uses a single `StorageBlobClient`, it is recommended to use a value unique
to your application (e.g. "MyApplication"). If your application uses multiple clients with different
configurations, use a value unique to both your application and the configuration (e.g.
"MyApplication.userClient").

``` swift
let restorationId:​ String
```

### `maxChunkSizeInBytes`

The maximum size of a single chunk in a blob upload or download.

``` swift
let maxChunkSizeInBytes:​ Int
```

### `downloadNetworkPolicy`

The `TransferNetworkPolicy` to use for managed downloads.

``` swift
let downloadNetworkPolicy:​ TransferNetworkPolicy
```

### `uploadNetworkPolicy`

The `TransferNetworkPolicy` to use for managed uploads.

``` swift
let uploadNetworkPolicy:​ TransferNetworkPolicy
```
