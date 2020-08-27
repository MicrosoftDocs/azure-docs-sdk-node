# PipelineContextSupporting

``` swift
public protocol PipelineContextSupporting
```

## Requirements

## context

``` swift
var context:​ PipelineContext?
```

## add(value:​forKey:​)

``` swift
mutating func add(value:​ AnyObject, forKey key:​ AnyHashable)
```

## add(value:​forKey:​)

``` swift
mutating func add(value:​ AnyObject, forKey key:​ ContextKey)
```

## value(forKey:​)

``` swift
func value(forKey key:​ AnyHashable) -> AnyObject?
```

## value(forKey:​)

``` swift
func value(forKey key:​ ContextKey) -> AnyObject?
```
