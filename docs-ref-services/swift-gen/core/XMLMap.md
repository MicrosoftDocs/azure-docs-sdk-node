# XMLMap

A map of XML document path keys and metadata needed to convert an XML
payload into a JSON payload.

``` swift
public class XMLMap:​ Sequence, IteratorProtocol
```

## Inheritance

`IteratorProtocol`, `Sequence`

## Nested Type Aliases

### `Element`

``` swift
public typealias Element = (String, XMLMetadata)
```

## Initializers

### `init(_:​)`

Initialize directly with paths and values

``` swift
public init(_ existingValues:​ [String:​ XMLMetadata])
```

### `init(withPagedCodingKeys:​innerType:​)`

Generate XML map for PagedCollection types.

``` swift
public init(withPagedCodingKeys codingKeys:​ PagedCodingKeys, innerType:​ XMLModel.Type)
```

## Methods

### `next()`

``` swift
public func next() -> (String, XMLMetadata)?
```
