# Types

  - [StorageSASCredential](docs/storage/StorageSASCredential):​
    A Storage shared access signature credential object.
  - [StorageSASToken](docs/storage/StorageSASToken):​
    A structure representing a Storage shared access signature token.
  - [StorageSASTokenBlobPermissions](docs/storage/StorageSASTokenBlobPermissions):​
    Permissions that apply to blob-level operations.
  - [StorageSASTokenContainerPermissions](docs/storage/StorageSASTokenContainerPermissions):​
    Permissions that apply to container-level operations.
  - [StorageSASTokenPermissions](docs/storage/StorageSASTokenPermissions):​
    Permissions granted by a Storage shared access signature token.
  - [DefaultStorageSASTokenCache](docs/storage/DefaultStorageSASTokenCache):​
    A `TokenCache` that stores tokens in a simple in-memory dictionary and which stores only a single token for a given
    URL, regardless of the permissions associated with the token.
  - [StorageSharedKeyCredential](docs/storage/StorageSharedKeyCredential):​
    A Storage account shared key credential object.
  - [BlobTransfer](docs/storage/BlobTransfer):​
    A blob transfer operation.
  - [LocalURL](docs/storage/LocalURL):​
    Structure encapsulating a base-relative local filesystem URL.
  - [LocalURL.KnownDirectory](docs/storage/LocalURL_KnownDirectory):​
    Well-known directories that are not part of the existing `FileManager.SearchPathDirectory` enum.
  - [NetworkType](docs/storage/NetworkType):​
    Describes the type of network connection
  - [NetworkProperties](docs/storage/NetworkProperties):​
    Describes the known properties of the network
  - [TransferNetworkPolicy](docs/storage/TransferNetworkPolicy):​
    Describes the network conditions required for certain transfer behavior.
  - [TransferCollection](docs/storage/TransferCollection)
  - [BlobItem](docs/storage/BlobItem):​
    Structure containing data about a blob or blob snapshot.
  - [BlobProperties](docs/storage/BlobProperties):​
    Structure containing properties of a blob or blob snapshot.
  - [ContainerItem](docs/storage/ContainerItem):​
    Structure containing data about a blob container.
  - [ContainerProperties](docs/storage/ContainerProperties):​
    Structure containing properties of a blob container.
  - [AccessTier](docs/storage/AccessTier):​
    The access tier of a blob.
  - [BlobType](docs/storage/BlobType):​
    The type of a blob.
  - [CopyStatus](docs/storage/CopyStatus):​
    Status of a blob copy operation.
  - [LeaseDuration](docs/storage/LeaseDuration):​
    The duration of a lease on a blob or container.
  - [LeaseState](docs/storage/LeaseState):​
    The state of a lease on a blob or container.
  - [LeaseStatus](docs/storage/LeaseStatus):​
    The status of a lease on a blob or container.
  - [ListContainersOptions](docs/storage/ListContainersOptions):​
    User-configurable options for the `StorageBlobClient.listContainers` operation.
  - [ListContainersOptions.ListContainersInclude](docs/storage/ListContainersOptions_ListContainersInclude):​
    Datasets which may be included as part of the call response.
  - [ListBlobsOptions](docs/storage/ListBlobsOptions):​
    User-configurable options for the `StorageBlobClient.listBlobs` operation.
  - [ListBlobsOptions.ListBlobsInclude](docs/storage/ListBlobsOptions_ListBlobsInclude):​
    Datasets which may be included as part of the call response.
  - [DeleteBlobOptions](docs/storage/DeleteBlobOptions):​
    User-configurable options for the `StorageBlobClient.delete` operation.
  - [DeleteBlobOptions.DeleteBlobSnapshot](docs/storage/DeleteBlobOptions_DeleteBlobSnapshot):​
    This header should be specified only for a request against the base blob resource.
    If this header is specified on a request to delete an individual snapshot, the Blob
    service returns status code 400 (Bad Request).
    If this header is not specified on the request and the blob has associated snapshots,
    the Blob service returns status code 409 (Conflict).
  - [DownloadBlobOptions](docs/storage/DownloadBlobOptions):​
    User-configurable options for the `StorageBlobClient.download` and `StorageBlobClient.rawDownload` operations.
  - [UploadBlobOptions](docs/storage/UploadBlobOptions):​
    User-configurable options for the `StorageBlobClient.upload` and `StorageBlobClient.rawUpload` operations.
  - [StorageBlobClientOptions](docs/storage/StorageBlobClientOptions):​
    User-configurable options for the `StorageBlobClient`.
  - [LeaseAccessConditions](docs/storage/LeaseAccessConditions):​
    Options for accessing a blob based on the condition of a lease. If specified, the operation will be performed only
    if both of the following conditions are met:​
  - [ModifiedAccessConditions](docs/storage/ModifiedAccessConditions):​
    Options for accessing a blob based on its modification date and/or eTag. If specified, the operation will be
    performed only if all the specified conditions are met.
  - [RangeOptions](docs/storage/RangeOptions):​
    Options for working on a subset of data for a blob.
  - [EncryptionOptions](docs/storage/EncryptionOptions):​
    Blob encryption options.
  - [CustomerProvidedEncryptionKey](docs/storage/CustomerProvidedEncryptionKey):​
    All data in Azure Storage is encrypted at-rest using an account-level encryption key.
    In versions 2018-06-17 and newer, you can manage the key used to encrypt blob contents
    and application metadata per-blob by providing an AES-256 encryption key in requests to the storage service.
  - [StorageBlobClient](docs/storage/StorageBlobClient):​
    A StorageBlobClient represents a Client to the Azure Storage Blob service allowing you to manipulate blobs within
    storage containers.
  - [StorageBlobClient.ApiVersion](docs/storage/StorageBlobClient_ApiVersion):​
    API version of the Azure Storage Blob service to invoke. Defaults to the latest.
  - [TransferState](docs/storage/TransferState):​
    The state of a transfer.
  - [TransferType](docs/storage/TransferType):​
    The type of a transfer.
  - [TransferProgress](docs/storage/TransferProgress):​
    Data structure representing the progress of a blob transfer.
  - [StorageHTTPHeader](docs/storage/StorageHTTPHeader):​
    Storage service-specific HTTP headers.

# Protocols

  - [StorageSASTokenCache](docs/storage/StorageSASTokenCache):​
    A cache that a `StorageSASCredential` can use to cache tokens that are returned from its `tokenProvider`.
  - [StorageBlobClientDelegate](docs/storage/StorageBlobClientDelegate)
  - [BlobDownloadDelegate](docs/storage/BlobDownloadDelegate):​
    A delegate to receive notifications about state changes from `BlobDownloader` objects.
  - [BlobDownloader](docs/storage/BlobDownloader):​
    An object that contains details about a download operation.
  - [BlobUploadDelegate](docs/storage/BlobUploadDelegate):​
    A delegate to receive notifications about state changes from `BlobUploader` objects.
  - [BlobUploader](docs/storage/BlobUploader):​
    An object that contains details about an upload operation.
  - [Transfer](docs/storage/Transfer):​
    Object that contains information about a transfer operation.

# Global Typealiases

  - [StorageSASTokenResultHandler](docs/storage/StorageSASTokenResultHandler):​
    A result handler to call when you have completed the process of acquiring a SAS token. Call the handler with an
    account-level shared access signature connection string, or a container- or blob-level shared access signature URI.
    If the process failed, call the handler with the error instead.
  - [StorageSASTokenProvider](docs/storage/StorageSASTokenProvider):​
    A closure that is called when a SAS token is needed to authenticate a request. The closure is called with the
    URL of the request requiring authentication, the permissions needed to complete the operation, and a
    `StorageSASTokenResultHandler` which you must call to provide the SAS token that will be used to authenticate the
    request, or an error if the token cannot be provided.
