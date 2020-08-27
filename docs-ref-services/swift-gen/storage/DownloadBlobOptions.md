# DownloadBlobOptions

User-configurable options for the `StorageBlobClient.download` and `StorageBlobClient.rawDownload` operations.

``` swift
public struct DownloadBlobOptions:​ AzureOptions, Codable, Equatable
```

## Inheritance

`AzureOptions`, `Codable`, `Equatable`

## Initializers

### `init(clientRequestId:​cancellationToken:​range:​leaseId:​snapshot:​leaseAccessConditions:​modifiedAccessConditions:​encryptionOptions:​customerProvidedEncryptionKey:​encoding:​timeoutInSeconds:​)`

Initialize a `DownloadBlobOptions` structure.

``` swift
public init(clientRequestId:​ String? = nil, cancellationToken:​ CancellationToken? = nil, range:​ RangeOptions? = nil, leaseId:​ String? = nil, snapshot:​ String? = nil, leaseAccessConditions:​ LeaseAccessConditions? = nil, modifiedAccessConditions:​ ModifiedAccessConditions? = nil, encryptionOptions:​ EncryptionOptions? = nil, customerProvidedEncryptionKey:​ CustomerProvidedEncryptionKey? = nil, encoding:​ String? = nil, timeoutInSeconds:​ Int? = nil)
```

#### Parameters

  - clientRequestId:​ - clientRequestId:​ A client-generated, opaque value with 1KB character limit that is recorded in analytics logs.
  - cancellationToken:​ - cancellationToken:​ A token used to make a best-effort attempt at canceling a request.
  - range:​ - range:​ Options for working on a subset of data for a blob.
  - leaseId:​ - leaseId:​ Required if the blob has an active lease. If specified, download only succeeds if the blob's lease is active and matches this ID.
  - snapshot:​ - snapshot:​ A snapshot version for the blob being downloaded.
  - leaseAccessConditions:​ - leaseAccessConditions:​   - The blob's lease is currently active.
      - The specified lease ID matches that of the blob.
  - modifiedAccessConditions:​ - modifiedAccessConditions:​ Options for accessing a blob based on its modification date and/or eTag. If specified, the operation will be performed only if all the specified conditions are met.
  - encryptionOptions:​ - encryptionOptions:​ Blob encryption options.
  - customerProvidedEncryptionKey:​ - customerProvidedEncryptionKey:​ Encrypts the data on the service-side with the given key. Use of customer-provided keys must be done over HTTPS. As the encryption key itself is provided in the request, a secure connection must be established to transfer the key.
  - encoding:​ - encoding:​ Encoding with which to decode the downloaded bytes. If nil, no decoding occurs.
  - timeoutInSeconds:​ - timeoutInSeconds:​ The timeout parameter is expressed in seconds. This method may make multiple calls to the Azure service and the timeout will apply to each call individually.

## Properties

### `clientRequestId`

A client-generated, opaque value with 1KB character limit that is recorded in analytics logs.

``` swift
let clientRequestId:​ String?
```

### `cancellationToken`

A token used to make a best-effort attempt at canceling a request.

``` swift
let cancellationToken:​ CancellationToken?
```

### `range`

Options for working on a subset of data for a blob.

``` swift
let range:​ RangeOptions?
```

### `leaseId`

Required if the blob has an active lease. If specified, download only
succeeds if the blob's lease is active and matches this ID.

``` swift
let leaseId:​ String?
```

### `snapshot`

A snapshot version for the blob being downloaded.

``` swift
let snapshot:​ String?
```

### `leaseAccessConditions`

Options for accessing a blob based on the condition of a lease. If specified, the operation will be performed
only if both of the following conditions are met:​

``` swift
let leaseAccessConditions:​ LeaseAccessConditions?
```

  - The blob's lease is currently active.

  - The specified lease ID matches that of the blob.

### `modifiedAccessConditions`

Options for accessing a blob based on its modification date and/or eTag. If specified, the operation will be
performed only if all the specified conditions are met.

``` swift
var modifiedAccessConditions:​ ModifiedAccessConditions?
```

### `encryptionOptions`

Blob encryption options.

``` swift
let encryptionOptions:​ EncryptionOptions?
```

### `customerProvidedEncryptionKey`

Encrypts the data on the service-side with the given key.
Use of customer-provided keys must be done over HTTPS.
As the encryption key itself is provided in the request,
a secure connection must be established to transfer the key.

``` swift
let customerProvidedEncryptionKey:​ CustomerProvidedEncryptionKey?
```

### `encoding`

Encoding with which to decode the downloaded bytes. If nil, no decoding occurs.

``` swift
let encoding:​ String?
```

### `timeoutInSeconds`

The timeout parameter is expressed in seconds. This method may make
multiple calls to the Azure service and the timeout will apply to
each call individually.

``` swift
let timeoutInSeconds:​ Int?
```
