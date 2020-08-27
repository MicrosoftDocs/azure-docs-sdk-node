# ContainerItem

Structure containing data about a blob container.

``` swift
public struct ContainerItem:​ Codable, XMLModel
```

## Inheritance

`Codable`, `XMLModel`

## Properties

### `name`

The blob container's name.

``` swift
let name:​ String
```

### `properties`

Properties applied to the blob container.

``` swift
let properties:​ ContainerProperties?
```

## Methods

### `xmlMap()`

:​nodoc:​

``` swift
public static func xmlMap() -> XMLMap
```
