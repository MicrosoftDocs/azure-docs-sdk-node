# XMLModel

Protocol that ensures all XML models have  a method that returns metadata
necessary to convert an XML payload to a JSON payload.

``` swift
public protocol XMLModel
```

## Requirements

## xmlMap()

``` swift
static func xmlMap() -> XMLMap
```

## asXmlString(encoding:​)

``` swift
func asXmlString(encoding:​ String.Encoding) throws -> String
```
