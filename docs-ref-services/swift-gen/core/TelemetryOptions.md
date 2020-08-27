# TelemetryOptions

Options for configuring telemetry sent by the service client.

``` swift
public struct TelemetryOptions
```

## Initializers

### `init(telemetryDisabled:​applicationId:​)`

Initialize a `TelemetryOptions` structure.

``` swift
public init(telemetryDisabled:​ Bool = false, applicationId:​ String? = nil)
```

#### Parameters

  - telemetryDisabled:​ - telemetryDisabled:​ Whether platform information will be omitted from the user agent string sent by the service client.
  - applicationId:​ - applicationId:​ An optional user-specified application ID included in the user agent string sent by the service client.

## Properties

### `telemetryDisabled`

Whether platform information will be omitted from the user agent string sent by the service client.

``` swift
let telemetryDisabled:​ Bool
```

### `applicationId`

An optional user-specified application ID included in the user agent string sent by the service client.

``` swift
let applicationId:​ String?
```
