# StorageSASTokenResultHandler

A result handler to call when you have completed the process of acquiring a SAS token. Call the handler with an
account-level shared access signature connection string, or a container- or blob-level shared access signature URI.
If the process failed, call the handler with the error instead.

``` swift
public typealias StorageSASTokenResultHandler = (Result<String, Error>) -> Void
```
