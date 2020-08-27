# StorageSASTokenProvider

A closure that is called when a SAS token is needed to authenticate a request. The closure is called with the
URL of the request requiring authentication, the permissions needed to complete the operation, and a
`StorageSASTokenResultHandler` which you must call to provide the SAS token that will be used to authenticate the
request, or an error if the token cannot be provided.

``` swift
public typealias StorageSASTokenProvider = (URL, StorageSASTokenPermissions, @escaping StorageSASTokenResultHandler)
    -> Void
```
