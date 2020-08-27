# XMLMetadata

Class containing metadata needed to translate an XML payload into the desired
JSON payload.

``` swift
public struct XMLMetadata
```

## Initializers

### `init(jsonName:​jsonType:​attributes:​)`

``` swift
public init(jsonName:​ String, jsonType:​ ElementToJsonStrategy = .property, attributes:​ AttributeToJsonStrategy = .ignored)
```

## Properties

### `jsonName`

``` swift
let jsonName:​ String
```

### `jsonType`

``` swift
let jsonType:​ ElementToJsonStrategy
```

### `attributeStrategy`

``` swift
let attributeStrategy:​ AttributeToJsonStrategy
```
