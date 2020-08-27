# AzureOptions

Protocol for baseline options for individual client API calls.

``` swift
public protocol AzureOptions
```

## Requirements

## clientRequestId

A client-generated, opaque value with 1KB character limit that is recorded in analytics logs.
Highly recommended for correlating client-side activites with requests received by the server.

``` swift
var clientRequestId:​ String?
```

## cancellationToken

A token used to make a best-effort attempt at canceling a request.

``` swift
var cancellationToken:​ CancellationToken?
```
