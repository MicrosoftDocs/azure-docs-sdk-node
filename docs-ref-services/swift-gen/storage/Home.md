# Types

  - [StorageSASCredential](StorageSASCredential):​
    A Storage shared access signature credential object.
  - [StorageSASToken](StorageSASToken):​
    A structure representing a Storage shared access signature token.
  - [StorageSASTokenBlobPermissions](StorageSASTokenBlobPermissions):​
    Permissions that apply to blob-level operations.
  - [StorageSASTokenContainerPermissions](StorageSASTokenContainerPermissions):​
    Permissions that apply to container-level operations.
  - [StorageSASTokenPermissions](StorageSASTokenPermissions):​
    Permissions granted by a Storage shared access signature token.
  - [DefaultStorageSASTokenCache](DefaultStorageSASTokenCache):​
    A `TokenCache` that stores tokens in a simple in-memory dictionary and which stores only a single token for a given
    URL, regardless of the permissions associated with the token.
  - [StorageSharedKeyCredential](StorageSharedKeyCredential):​
    A Storage account shared key credential object.
  - [BlobTransfer](BlobTransfer):​
    A blob transfer operation.
  - [LocalURL](LocalURL):​
    Structure encapsulating a base-relative local filesystem URL.
  - [LocalURL.KnownDirectory](LocalURL_KnownDirectory):​
    Well-known directories that are not part of the existing `FileManager.SearchPathDirectory` enum.
  - [NetworkType](NetworkType):​
    Describes the type of network connection
  - [NetworkProperties](NetworkProperties):​
    Describes the known properties of the network
  - [TransferNetworkPolicy](TransferNetworkPolicy):​
    Describes the network conditions required for certain transfer behavior.
  - [TransferCollection](TransferCollection)
  - [BlobItem](BlobItem):​
    Structure containing data about a blob or blob snapshot.
  - [BlobProperties](BlobProperties):​
    Structure containing properties of a blob or blob snapshot.
  - [ContainerItem](ContainerItem):​
    Structure containing data about a blob container.
  - [ContainerProperties](ContainerProperties):​
    Structure containing properties of a blob container.
  - [AccessTier](AccessTier):​
    The access tier of a blob.
  - [BlobType](BlobType):​
    The type of a blob.
  - [CopyStatus](CopyStatus):​
    Status of a blob copy operation.
  - [LeaseDuration](LeaseDuration):​
    The duration of a lease on a blob or container.
  - [LeaseState](LeaseState):​
    The state of a lease on a blob or container.
  - [LeaseStatus](LeaseStatus):​
    The status of a lease on a blob or container.
  - [ListContainersOptions](ListContainersOptions):​
    User-configurable options for the `StorageBlobClient.listContainers` operation.
  - [ListContainersOptions.ListContainersInclude](ListContainersOptions_ListContainersInclude):​
    Datasets which may be included as part of the call response.
  - [ListBlobsOptions](ListBlobsOptions):​
    User-configurable options for the `StorageBlobClient.listBlobs` operation.
  - [ListBlobsOptions.ListBlobsInclude](ListBlobsOptions_ListBlobsInclude):​
    Datasets which may be included as part of the call response.
  - [DeleteBlobOptions](DeleteBlobOptions):​
    User-configurable options for the `StorageBlobClient.delete` operation.
  - [DeleteBlobOptions.DeleteBlobSnapshot](DeleteBlobOptions_DeleteBlobSnapshot):​
    This header should be specified only for a request against the base blob resource.
    If this header is specified on a request to delete an individual snapshot, the Blob
    service returns status code 400 (Bad Request).
    If this header is not specified on the request and the blob has associated snapshots,
    the Blob service returns status code 409 (Conflict).
  - [DownloadBlobOptions](DownloadBlobOptions):​
    User-configurable options for the `StorageBlobClient.download` and `StorageBlobClient.rawDownload` operations.
  - [UploadBlobOptions](UploadBlobOptions):​
    User-configurable options for the `StorageBlobClient.upload` and `StorageBlobClient.rawUpload` operations.
  - [StorageBlobClientOptions](StorageBlobClientOptions):​
    User-configurable options for the `StorageBlobClient`.
  - [LeaseAccessConditions](LeaseAccessConditions):​
    Options for accessing a blob based on the condition of a lease. If specified, the operation will be performed only
    if both of the following conditions are met:​
  - [ModifiedAccessConditions](ModifiedAccessConditions):​
    Options for accessing a blob based on its modification date and/or eTag. If specified, the operation will be
    performed only if all the specified conditions are met.
  - [RangeOptions](RangeOptions):​
    Options for working on a subset of data for a blob.
  - [EncryptionOptions](EncryptionOptions):​
    Blob encryption options.
  - [CustomerProvidedEncryptionKey](CustomerProvidedEncryptionKey):​
    All data in Azure Storage is encrypted at-rest using an account-level encryption key.
    In versions 2018-06-17 and newer, you can manage the key used to encrypt blob contents
    and application metadata per-blob by providing an AES-256 encryption key in requests to the storage service.
  - [StorageBlobClient](StorageBlobClient):​
    A StorageBlobClient represents a Client to the Azure Storage Blob service allowing you to manipulate blobs within
    storage containers.
  - [StorageBlobClient.ApiVersion](StorageBlobClient_ApiVersion):​
    API version of the Azure Storage Blob service to invoke. Defaults to the latest.
  - [TransferState](TransferState):​
    The state of a transfer.
  - [TransferType](TransferType):​
    The type of a transfer.
  - [TransferProgress](TransferProgress):​
    Data structure representing the progress of a blob transfer.
  - [StorageHTTPHeader](StorageHTTPHeader):​
    Storage service-specific HTTP headers.

# Protocols

  - [StorageSASTokenCache](StorageSASTokenCache):​
    A cache that a `StorageSASCredential` can use to cache tokens that are returned from its `tokenProvider`.
  - [StorageBlobClientDelegate](StorageBlobClientDelegate)
  - [BlobDownloadDelegate](BlobDownloadDelegate):​
    A delegate to receive notifications about state changes from `BlobDownloader` objects.
  - [BlobDownloader](BlobDownloader):​
    An object that contains details about a download operation.
  - [BlobUploadDelegate](BlobUploadDelegate):​
    A delegate to receive notifications about state changes from `BlobUploader` objects.
  - [BlobUploader](BlobUploader):​
    An object that contains details about an upload operation.
  - [Transfer](Transfer):​
    Object that contains information about a transfer operation.

# Global Typealiases

  - [StorageSASTokenResultHandler](StorageSASTokenResultHandler):​
    A result handler to call when you have completed the process of acquiring a SAS token. Call the handler with an
    account-level shared access signature connection string, or a container- or blob-level shared access signature URI.
    If the process failed, call the handler with the error instead.
  - [StorageSASTokenProvider](StorageSASTokenProvider):​
    A closure that is called when a SAS token is needed to authenticate a request. The closure is called with the
    URL of the request requiring authentication, the permissions needed to complete the operation, and a
    `StorageSASTokenResultHandler` which you must call to provide the SAS token that will be used to authenticate the
    request, or an error if the token cannot be provided.
