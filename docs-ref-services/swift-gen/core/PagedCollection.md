# PagedCollection

A collection that fetches paged results in a lazy fashion.

``` swift
public class PagedCollection<SingleElement:​ Codable>
```

## Nested Type Aliases

### `Element`

``` swift
public typealias Element = [SingleElement]
```

## Initializers

### `init(client:​request:​context:​data:​codingKeys:​decoder:​)`

\<\#Description\#\>

``` swift
public init(client:​ PageableClient, request:​ HTTPRequest, context:​ PipelineContext, data:​ Data?, codingKeys:​ PagedCodingKeys? = nil, decoder:​ JSONDecoder? = nil) throws
```

#### Parameters

  - client:​ - client:​ The `PageableClient` used to make calls for follow-up pages.
  - request:​ - request:​ The original `HTTPRequest` used to make the call.
  - context:​ - context:​ A `PipelineContext` object that will be used for follow-up page requests.
  - data:​ - data:​ The `Data` corresponding to the first page results.
  - codingKeys:​ - codingKeys:​ An optional set of `PagedCodingKeys` used to decode the paged results.
  - decoder:​ - decoder:​ An optional `JSONDecoder` for decoding special types.

#### Throws

`AzureErrors.sdk` thrown if no data is returned from the server.

## Properties

### `items`

Returns the current running list of items.

``` swift
var items:​ Element?
```

### `pageItems`

Returns the subset of items that corresponds to the current page.

``` swift
var pageItems:​ Element?
```

### `underestimatedCount`

Returns the count of items that have been retrieved so far. There may
be additional results, not yet fetched.

``` swift
var underestimatedCount:​ Int
```

### `isExhausted`

Returns true if there are no more results to fetch.

``` swift
var isExhausted:​ Bool
```

### `syncIterator`

Returns a iterator to retrieve paged items one at a time.

``` swift
var syncIterator:​ PagedItemSyncIterator
```

## Methods

### `nextPage(completionHandler:​)`

Retrieves the next page of results asynchronously.

``` swift
public func nextPage(completionHandler:​ @escaping Continuation<Element>)
```

### `nextItem(completionHandler:​)`

Retrieves the next item in the collection, automatically fetching new pages when needed.

``` swift
public func nextItem(completionHandler:​ @escaping Continuation<SingleElement>)
```

### `forEachPage(progressHandler:​)`

``` swift
public func forEachPage(progressHandler:​ @escaping (Element) -> Bool)
```

### `forEachItem(progressHandler:​)`

``` swift
public func forEachItem(progressHandler:​ @escaping (SingleElement) -> Bool)
```
