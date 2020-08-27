# BlobDownloadDelegate

A delegate to receive notifications about state changes from `BlobDownloader` objects.

``` swift
public protocol BlobDownloadDelegate:​ AnyObject
```

## Inheritance

`AnyObject`

## Requirements

## downloader(\_:​didUpdateWithProgress:​)

A download's progress has updated.

``` swift
func downloader(_:​ BlobDownloader, didUpdateWithProgress:​ TransferProgress)
```

## downloader(\_:​didFailWithError:​)

A download has failed.

``` swift
func downloader(_:​ BlobDownloader, didFailWithError:​ Error)
```

## downloaderDidComplete(\_:​)

A download has completed.

``` swift
func downloaderDidComplete(_:​ BlobDownloader)
```
