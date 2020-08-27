# PageableClient

Protocol which allows clients to customize how they work with Paged Collections.

``` swift
public protocol PageableClient:​ PipelineClient
```

## Inheritance

[`PipelineClient`](docs/core/PipelineClient)

## Requirements

## continuationUrl(forRequestUrl:​withContinuationToken:​)

``` swift
func continuationUrl(forRequestUrl requestUrl:​ URL, withContinuationToken token:​ String) -> URL?
```
