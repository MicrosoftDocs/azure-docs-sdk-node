# BlobDownloader

An object that contains details about a download operation.

``` swift
public protocol BlobDownloader
```

## Requirements

## delegate

The `BlobDownloadDelegate` to inform about download events.

``` swift
var delegate:​ BlobDownloadDelegate?
```

## downloadSource

Location in Blob Storage of the file to download.

``` swift
var downloadSource:​ URL
```

## downloadDestination

Location on the device of the file being downloaded.

``` swift
var downloadDestination:​ URL
```

## blobProperties

Properties applied to the source blob.

``` swift
var blobProperties:​ BlobProperties?
```

## requestedSize

Size, in bytes, of the portion of the source blob being downloaded. If the `DownloadBlobOptions.range` option
was not used, this will be the same as the total size of the blob.

``` swift
var requestedSize:​ Int?
```

## totalSize

Total size, in bytes, of the source blob.

``` swift
var totalSize:​ Int
```

## progress

The total bytes downloaded.

``` swift
var progress:​ Int
```

## isComplete

Indicates if the download is complete.

``` swift
var isComplete:​ Bool
```

## isEncrypted

Indicates if the download is encrypted.

``` swift
var isEncrypted:​ Bool
```
