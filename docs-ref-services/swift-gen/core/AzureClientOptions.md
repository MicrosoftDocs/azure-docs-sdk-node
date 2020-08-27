# AzureClientOptions

Protocol for baseline options for individual service clients.

``` swift
public protocol AzureClientOptions
```

## Requirements

## apiVersion

The API version of the service to invoke.

``` swift
var apiVersion:​ String
```

## logger

The `ClientLogger` to be used by the service client.

``` swift
var logger:​ ClientLogger
```

## telemetryOptions

Options for configuring telemetry sent by the service client.

``` swift
var telemetryOptions:​ TelemetryOptions
```

## transportOptions

Global transport options

``` swift
var transportOptions:​ TransportOptions
```
