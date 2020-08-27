# BlobUploader

An object that contains details about an upload operation.

``` swift
public protocol BlobUploader
```

## Requirements

## delegate

The `BlobUploadDelegate` to inform about upload events.

``` swift
var delegate:​ BlobUploadDelegate?
```

## uploadSource

Location on the device of the file being uploaded.

``` swift
var uploadSource:​ URL
```

## uploadDestination

Location in Blob Storage to upload the file to.

``` swift
var uploadDestination:​ URL
```

## blobProperties

Properties applied to the destination blob.

``` swift
var blobProperties:​ BlobProperties?
```

## fileSize

Size, in bytes, of the file being uploaded.

``` swift
var fileSize:​ Int
```

## progress

The total bytes uploaded.

``` swift
var progress:​ Int
```

## isComplete

Indicates if the upload is complete.

``` swift
var isComplete:​ Bool
```

## isEncrypted

Indicates if the upload is encrypted.

``` swift
var isEncrypted:​ Bool
```
