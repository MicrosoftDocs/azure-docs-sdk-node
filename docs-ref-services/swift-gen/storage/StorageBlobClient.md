# StorageBlobClient

A StorageBlobClient represents a Client to the Azure Storage Blob service allowing you to manipulate blobs within
storage containers.

``` swift
public final class StorageBlobClient:​ PipelineClient
```

## Inheritance

`PageableClient`, `PipelineClient`, `TransferDelegate`

## Initializers

### `init(credential:​endpoint:​withOptions:​)`

<dl>
<dt><code>canImport(AzureIdentity)</code></dt>
<dd>

Create a Storage blob data client.

``` swift
public convenience init(credential:​ MSALCredential, endpoint:​ URL, withOptions options:​ StorageBlobClientOptions = StorageBlobClientOptions()) throws
```

#### Parameters

  - credential:​ - credential:​ A `MSALCredential` object used to retrieve authentication tokens.
  - endpoint:​ - endpoint:​ The URL for the storage account's blob storage endpoint.
  - options:​ - options:​ Options used to configure the client.

</dd>
</dl>

### `init(credential:​endpoint:​withOptions:​)`

Create a Storage blob data client.

``` swift
public convenience init(credential:​ StorageSASCredential, endpoint:​ URL, withOptions options:​ StorageBlobClientOptions = StorageBlobClientOptions()) throws
```

#### Parameters

  - credential:​ - credential:​ A `StorageSASCredential` object used to retrieve authentication tokens.
  - endpoint:​ - endpoint:​ The URL for the storage account's blob storage endpoint.
  - options:​ - options:​ Options used to configure the client.

### `init(credential:​withOptions:​)`

Create a Storage blob data client.

``` swift
public convenience init(credential:​ StorageSharedKeyCredential, withOptions options:​ StorageBlobClientOptions = StorageBlobClientOptions()) throws
```

#### Parameters

  - credential:​ - credential:​ A `StorageSharedKeyCredential` object used to retrieve the account's blob storage endpoint and access key. **WARNING**:​ Shared keys are inherently insecure in end-user facing applications such as mobile and desktop apps. Shared keys provide full access to an entire storage account and should not be shared with end users. Since mobile and desktop apps are inherently end-user facing, it's highly recommended that storage account shared key credentials not be used in production for such applications.
  - options:​ - options:​ Options used to configure the client.

### `init(connectionString:​withOptions:​)`

Create an anonymous Storage blob data client.

``` swift
public convenience init(connectionString:​ String, withOptions options:​ StorageBlobClientOptions = StorageBlobClientOptions()) throws
```

#### Parameters

  - connectionString:​ - connectionString:​ A Storage SAS or Shared Key connection string used to retrieve the account's blob storage endpoint and authentication tokens. **WARNING**:​ Connection strings are inherently insecure in end-user facing applications such as mobile and desktop apps. Connection strings should be treated as secrets and should not be shared with end users, and cannot be rotated once compiled into an application. Since mobile and desktop apps are inherently end-user facing, it's highly recommended that connection strings not be used in production for such applications.
  - options:​ - options:​ Options used to configure the client.

### `init(endpoint:​withOptions:​)`

Create a Storage blob data client.

``` swift
public convenience init(endpoint:​ URL, withOptions options:​ StorageBlobClientOptions = StorageBlobClientOptions()) throws
```

#### Parameters

  - endpoint:​ - endpoint:​ The URL for the storage account's blob storage endpoint.
  - options:​ - options:​ Options used to configure the client.

## Properties

### `transfers`

Retrieve all managed transfers created by this client.

``` swift
var transfers:​ TransferCollection
```

### `downloads`

Retrieve all managed downloads created by this client.

``` swift
var downloads:​ TransferCollection
```

### `uploads`

Retrieve all managed uploads created by this client.

``` swift
var uploads:​ TransferCollection
```

### `maxConcurrentTransfers`

The global maximum number of managed transfers that will be executed concurrently by all `StorageBlobClient`
instances. The default value is `maxConcurrentTransfersDefaultValue`. To allow this value to be determined
dynamically based on current system conditions, set it to `maxConcurrentTransfersDynamicValue`.

``` swift
var maxConcurrentTransfers:​ Int
```

### `maxConcurrentTransfersDefaultValue`

The default value of `maxConcurrentTransfers`.

``` swift
let maxConcurrentTransfersDefaultValue = 4
```

### `maxConcurrentTransfersDynamicValue`

Set `maxConcurrentTransfers` equal to this value to allow the maximum number of managed transfers to be
determined dynamically based on current system conditions.

``` swift
let maxConcurrentTransfersDynamicValue = OperationQueue.defaultMaxConcurrentOperationCount
```

### `options`

Options provided to configure this `StorageBlobClient`.

``` swift
let options:​ StorageBlobClientOptions
```

### `delegate`

The `StorageBlobClientDelegate` to inform about events from transfers created by this `StorageBlobClient`.

``` swift
var delegate:​ StorageBlobClientDelegate?
```

### `allowHeaders`

Header values that are permitted to be logged from StorageBlobClient API calls.

``` swift
let allowHeaders:​ [String] = LoggingPolicy.defaultAllowHeaders + [
        HTTPHeader.acceptRanges.rawValue,
        HTTPHeader.accessControlAllowOrigin.rawValue,
        HTTPHeader.apiVersion.rawValue,
        HTTPHeader.clientRequestId.rawValue,
        HTTPHeader.contentDisposition.rawValue,
        HTTPHeader.contentEncoding.rawValue,
        HTTPHeader.contentLanguage.rawValue,
        HTTPHeader.contentMD5.rawValue,
        HTTPHeader.contentRange.rawValue,
        HTTPHeader.range.rawValue,
        HTTPHeader.returnClientRequestId.rawValue,
        HTTPHeader.vary.rawValue,
        HTTPHeader.xmsDate.rawValue,
        StorageHTTPHeader.accessTier.rawValue,
        StorageHTTPHeader.accessTierChangeTime.rawValue,
        StorageHTTPHeader.accessTierInferred.rawValue,
        StorageHTTPHeader.accountKind.rawValue,
        StorageHTTPHeader.archiveStatus.rawValue,
        StorageHTTPHeader.blobAppendOffset.rawValue,
        StorageHTTPHeader.blobCacheControl.rawValue,
        StorageHTTPHeader.blobCommittedBlockCount.rawValue,
        StorageHTTPHeader.blobConditionAppendpos.rawValue,
        StorageHTTPHeader.blobConditionMaxsize.rawValue,
        StorageHTTPHeader.blobContentDisposition.rawValue,
        StorageHTTPHeader.blobContentEncoding.rawValue,
        StorageHTTPHeader.blobContentLanguage.rawValue,
        StorageHTTPHeader.blobContentLength.rawValue,
        StorageHTTPHeader.blobContentMD5.rawValue,
        StorageHTTPHeader.blobContentType.rawValue,
        StorageHTTPHeader.blobPublicAccess.rawValue,
        StorageHTTPHeader.blobSequenceNumber.rawValue,
        StorageHTTPHeader.blobType.rawValue,
        StorageHTTPHeader.contentCRC64.rawValue,
        StorageHTTPHeader.copyAction.rawValue,
        StorageHTTPHeader.copyCompletionTime.rawValue,
        StorageHTTPHeader.copyDestinationSnapshot.rawValue,
        StorageHTTPHeader.copyId.rawValue,
        StorageHTTPHeader.copyProgress.rawValue,
        StorageHTTPHeader.copyStatus.rawValue,
        StorageHTTPHeader.creationTime.rawValue,
        StorageHTTPHeader.defaultEncryptionScope.rawValue,
        StorageHTTPHeader.deleteSnapshots.rawValue,
        StorageHTTPHeader.deleteTypePermanent.rawValue,
        StorageHTTPHeader.denyEncryptionScopeOverride.rawValue,
        StorageHTTPHeader.encryptionAlgorithm.rawValue,
        StorageHTTPHeader.encryptionKeySHA256.rawValue,
        StorageHTTPHeader.errorCode.rawValue,
        StorageHTTPHeader.hasImmutabilityPolicy.rawValue,
        StorageHTTPHeader.hasLegalHold.rawValue,
        StorageHTTPHeader.ifSequenceNumberEq.rawValue,
        StorageHTTPHeader.ifSequenceNumberLe.rawValue,
        StorageHTTPHeader.ifSequenceNumberLt.rawValue,
        StorageHTTPHeader.incrementalCopy.rawValue,
        StorageHTTPHeader.leaseAction.rawValue,
        StorageHTTPHeader.leaseBreakPeriod.rawValue,
        StorageHTTPHeader.leaseDuration.rawValue,
        StorageHTTPHeader.leaseId.rawValue,
        StorageHTTPHeader.leaseState.rawValue,
        StorageHTTPHeader.leaseStatus.rawValue,
        StorageHTTPHeader.leaseTime.rawValue,
        StorageHTTPHeader.pageWrite.rawValue,
        StorageHTTPHeader.proposedLeaseId.rawValue,
        StorageHTTPHeader.xmsRange.rawValue,
        StorageHTTPHeader.rangeGetContentMD5.rawValue,
        StorageHTTPHeader.rehydratePriority.rawValue,
        StorageHTTPHeader.requestId.rawValue,
        StorageHTTPHeader.requestServerEncrypted.rawValue,
        StorageHTTPHeader.sequenceNumberAction.rawValue,
        StorageHTTPHeader.serverEncrypted.rawValue,
        StorageHTTPHeader.skuName.rawValue,
        StorageHTTPHeader.snapshot.rawValue,
        StorageHTTPHeader.sourceContentMd5.rawValue,
        StorageHTTPHeader.sourceIfMatch.rawValue,
        StorageHTTPHeader.sourceIfModifiedSince.rawValue,
        StorageHTTPHeader.sourceIfNoneMatch.rawValue,
        StorageHTTPHeader.sourceIfUnmodifiedSince.rawValue,
        StorageHTTPHeader.sourceRange.rawValue,
        StorageHTTPHeader.tagCount.rawValue
    ]
```

### `allowQueryParams`

Query string parameter values that are permitted to be logged from StorageBlobClient API calls.

``` swift
let allowQueryParams:​ [String] = [
        "blockid",
        "blocklisttype",
        "comp",
        "copyid",
        "delimiter",
        "include",
        "marker",
        "maxresults",
        "prefix",
        "prevsnapshot",
        "restype",
        "rscc",
        "rscd",
        "rsce",
        "rscl",
        "rsct",
        "se",
        "si",
        "sip",
        "ske",
        "skoid",
        "sks",
        "skt",
        "sktid",
        "skv",
        "snapshot",
        "sp",
        "spr",
        "sr",
        "srt",
        "ss",
        "st",
        "sv"
    ]
```

## Methods

### `continuationUrl(forRequestUrl:​withContinuationToken:​)`

:​nodoc:​

``` swift
public func continuationUrl(forRequestUrl requestUrl:​ URL, withContinuationToken token:​ String) -> URL?
```

### `transfer(_:​didUpdateWithState:​andProgress:​)`

:​nodoc:​

``` swift
public func transfer(_ transfer:​ Transfer, didUpdateWithState state:​ TransferState, andProgress _:​ TransferProgress?)
```

### `transfer(_:​didFailWithError:​)`

:​nodoc:​

``` swift
public func transfer(_ transfer:​ Transfer, didFailWithError error:​ Error)
```

### `transferDidComplete(_:​)`

:​nodoc:​

``` swift
public func transferDidComplete(_ transfer:​ Transfer)
```

### `endpoint(forAccount:​withProtocol:​withSuffix:​)`

Construct a URL for a storage account's blob storage endpoint from its account name.

``` swift
public static func endpoint(forAccount accountName:​ String, withProtocol endpointProtocol:​ String = "https", withSuffix endpointSuffix:​ String = "core.windows.net") -> String
```

#### Parameters

  - accountName:​ - accountName:​ The storage account name.
  - endpointProtocol:​ - endpointProtocol:​ The storage account endpoint protocol.
  - endpointSuffix:​ - endpointSuffix:​ The storage account endpoint suffix.

### `listContainers(withOptions:​completionHandler:​)`

List storage containers in a storage account.

``` swift
public func listContainers(withOptions options:​ ListContainersOptions? = nil, completionHandler:​ @escaping HTTPResultHandler<PagedCollection<ContainerItem>>)
```

#### Parameters

  - options:​ - options:​ A `ListContainersOptions` object to control the list operation.
  - completionHandler:​ - completionHandler:​ A completion handler that receives a `PagedCollection` of `ContainerItem` objects on success.

### `listBlobs(inContainer:​withOptions:​completionHandler:​)`

List blobs within a storage container.

``` swift
public func listBlobs(inContainer container:​ String, withOptions options:​ ListBlobsOptions? = nil, completionHandler:​ @escaping HTTPResultHandler<PagedCollection<BlobItem>>)
```

#### Parameters

  - container:​ - container:​ The container name containing the blobs to list.
  - options:​ - options:​ A `ListBlobsOptions` object to control the list operation.
  - completionHandler:​ - completionHandler:​ A completion handler that receives a `PagedCollection` of `BlobItem` objects on success.

### `delete(blob:​inContainer:​withOptions:​completionHandler:​)`

Delete a blob within a storage container.

``` swift
public func delete(blob:​ String, inContainer container:​ String, withOptions options:​ DeleteBlobOptions? = nil, completionHandler:​ @escaping HTTPResultHandler<Void>)
```

#### Parameters

  - blob:​ - blob:​ The blob name to delete.
  - container:​ - container:​ The container name containing the blob to delete.
  - options:​ - options:​ A `DeleteBlobOptions` object to control the delete operation.
  - completionHandler:​ - completionHandler:​ A completion handler to notify about success or failure.

### `rawDownload(blob:​fromContainer:​toFile:​withOptions:​completionHandler:​)`

Download a blob from a storage container.

``` swift
public func rawDownload(blob:​ String, fromContainer container:​ String, toFile destinationUrl:​ LocalURL, withOptions options:​ DownloadBlobOptions = DownloadBlobOptions(), completionHandler:​ @escaping HTTPResultHandler<BlobDownloader>) throws
```

This method will execute a raw HTTP GET in order to download a single blob to the destination. It is
**STRONGLY** recommended that you use the `download()` method instead - that method will manage the transfer in
the face of changing network conditions, and is able to transfer multiple blocks in parallel.

#### Parameters

  - blob:​ - blob:​ The name of the blob.
  - container:​ - container:​ The name of the container.
  - destinationUrl:​ - destinationUrl:​ The URL to a file path on this device.
  - options:​ - options:​ A `DownloadBlobOptions` object to control the download operation.
  - completionHandler:​ - completionHandler:​ A completion handler that receives a `BlobDownloader` object on success.

### `rawUpload(file:​toContainer:​asBlob:​properties:​withOptions:​completionHandler:​)`

Upload a blob to a storage container.

``` swift
public func rawUpload(file sourceUrl:​ LocalURL, toContainer container:​ String, asBlob blob:​ String, properties:​ BlobProperties? = nil, withOptions options:​ UploadBlobOptions = UploadBlobOptions(), completionHandler:​ @escaping HTTPResultHandler<BlobUploader>) throws
```

This method will execute a raw HTTP PUT in order to upload a single file to the destination. It is **STRONGLY**
recommended that you use the `upload()` method instead - that method will manage the transfer in the face of
changing network conditions, and is able to transfer multiple blocks in parallel.

#### Parameters

  - sourceUrl:​ - sourceUrl:​ The URL to a file on this device
  - container:​ - container:​ The name of the container.
  - blob:​ - blob:​ The name of the blob.
  - properties:​ - properties:​ Properties to set on the resulting blob.
  - options:​ - options:​ An `UploadBlobOptions` object to control the upload operation.
  - completionHandler:​ - completionHandler:​ A completion handler that receives a `BlobUploader` object on success.

### `download(blob:​fromContainer:​toFile:​withOptions:​progressHandler:​)`

Create a managed download to reliably download a blob from a storage container.

``` swift
@discardableResult public func download(blob:​ String, fromContainer container:​ String, toFile destinationUrl:​ LocalURL, withOptions options:​ DownloadBlobOptions = DownloadBlobOptions(), progressHandler:​ ((BlobTransfer) -> Void)? = nil) throws -> BlobTransfer?
```

This method performs a managed download, during which the client will reliably manage the transfer of the blob
from the cloud service to this device. When called, the download will be queued and a `BlobTransfer` object will
be returned that allows you to control the download. This client's `transferDelegate` will be notified about
state changes for all managed uploads and downloads the client creates.

#### Parameters

  - blob:​ - blob:​ The name of the blob.
  - container:​ - container:​ The name of the container.
  - destinationUrl:​ - destinationUrl:​ The URL to a file path on this device.
  - options:​ - options:​ A `DownloadBlobOptions` object to control the download operation.

### `upload(file:​toContainer:​asBlob:​properties:​withOptions:​progressHandler:​)`

Create a managed upload to reliably upload a file to a storage container.

``` swift
@discardableResult public func upload(file sourceUrl:​ LocalURL, toContainer container:​ String, asBlob blob:​ String, properties:​ BlobProperties, withOptions options:​ UploadBlobOptions = UploadBlobOptions(), progressHandler:​ ((BlobTransfer) -> Void)? = nil) throws -> BlobTransfer?
```

This method performs a managed upload, during which the client will reliably manage the transfer of the blob
from this device to the cloud service. When called, the upload will be queued and a `BlobTransfer` object will
be returned that allows you to control the upload. This client's `transferDelegate` will be notified about state
changes for all managed uploads and downloads the client creates.

#### Parameters

  - sourceUrl:​ - sourceUrl:​ The URL to a file on this device.
  - container:​ - container:​ The name of the container.
  - blob:​ - blob:​ The name of the blob.
  - properties:​ - properties:​ Properties to set on the resulting blob.
  - options:​ - options:​ An `UploadBlobOptions` object to control the upload operation.
