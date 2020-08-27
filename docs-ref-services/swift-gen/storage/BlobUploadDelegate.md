# BlobUploadDelegate

A delegate to receive notifications about state changes from `BlobUploader` objects.

``` swift
public protocol BlobUploadDelegate:​ AnyObject
```

## Inheritance

`AnyObject`

## Requirements

## uploader(\_:​didUpdateWithProgress:​)

An upload's progress has updated.

``` swift
func uploader(_:​ BlobUploader, didUpdateWithProgress:​ TransferProgress)
```

## uploader(\_:​didFailWithError:​)

An upload has failed.

``` swift
func uploader(_:​ BlobUploader, didFailWithError:​ Error)
```

## uploaderDidComplete(\_:​)

An upload has completed.

``` swift
func uploaderDidComplete(_:​ BlobUploader)
```
