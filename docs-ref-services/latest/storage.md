---
title: Azure Storage SDK for JavaScript
description: Reference for Azure Storage SDK for JavaScript
ms.date: 08/01/2024
ms.topic: reference
ms.devlang: javascript
ms.service: storage
---
# Azure Storage Library for JavaScript

[Azure Storage](/azure/storage) is a Microsoft managed service providing cloud storage that is highly available, secure, durable, scalable, and redundant. The following libraries in JavaScript make it easy to consume Azure Storage service.

## Client Packages (12.X.X)

|Service| NPM package| Examples|Getting Started Guide|
|---|---|---|--|
|**Storage Blob**|[@azure/storage-blob](https://www.npmjs.com/package/@azure/storage-blob)|[storage-blob-typescript-examples](/samples/azure/azure-sdk-for-js/storage-blob-typescript/)<br> [storage-blob-JavaScript-examples](/samples/azure/azure-sdk-for-js/storage-blob-JavaScript/)|Read and write objects and files from [Azure Storage Blob](/azure/storage/storage-nodejs-how-to-use-blob-storage)|
|**Storage Files**|[@azure/storage-file-share](https://www.npmjs.com/package/@azure/storage-file-share)|[storage-file-share-typescript-examples](/samples/azure/azure-sdk-for-js/storage-file-share-typescript/)<br> [storage-file-share-javascript-examples](/samples/azure/azure-sdk-for-js/storage-file-share-javascript/)||
|**Storage Queue**|[@azure/storage-queue](https://www.npmjs.com/package/@azure/storage-queue)|[storage-queue-typescript-examples](/samples/azure/azure-sdk-for-js/storage-queue-typescript/)<br> [storage-queue-JavaScript-examples](/samples/azure/azure-sdk-for-js/storage-queue-JavaScript/)|Send and receive messages between cloud-connected applications with <br>[Azure Storage Queue](/azure/storage/queues/storage-quickstart-queues-nodejs)|
|**Storage Table**|[azure-storage](https://www.npmjs.com/package/azure-storage)<br>(Legacy)| - |Read and write large structured data with [Azure Storage Table](/azure/storage/storage-nodejs-how-to-use-table-storage)|
|**Data Table**|[@azure/data-table](https://www.npmjs.com/package/@azure/data-tables)|[data-table-typescript-examples](/samples/azure/azure-sdk-for-js/data-tables-typescript/)<br> [data-table-JavaScript-examples](/samples/azure/azure-sdk-for-js/data-tables-javascript/)|Read and write large structured data with [Azure Storage Table](/azure/storage/storage-nodejs-how-to-use-table-storage)|
|||||

Install the npm module with `npm install` followed by the `package-name`. For example,
```bash
npm install @azure/storage-blob
```
and look at the examples from the links provided in the table above.

Read more about the client packages here - [Azure Storage Client Libraries For JavaScript](https://github.com/Azure/azure-sdk-for-js/tree/master/sdk/storage/).

Find more getting started guides at [Browse code samples](https://azure.microsoft.com/resources/samples/)

## Management Package

### Install the npm module 

Install the Azure storage management npm module

```bash
npm install @azure/arm-storage
```

### Example

Examples for using this module in Node.js as well as browser applications can be found in the [README for the module](https://www.npmjs.com/package/@azure/arm-storage)

## Known issues

This section details known issues for the Azure Storage client libraries for JavaScript.

### InvalidHeaderValue error message when using beta version of SDK

In rare scenarios, applications that have upgraded to the latest beta or generally available version of the SDK can receive an `InvalidHeaderValue` error message. This issue can occur when using any of the Storage libraries. The error message looks similar to the following sample:

```console
HTTP/1.1 400 The value for one of the HTTP headers is not in the correct format.
Content-Length: 328
Content-Type: application/xml
Server: Microsoft-HTTPAPI/2.0
x-ms-request-id: <REMOVED>
Date: Fri, 19 May 2023 17:10:33 GMT
 
<?xml version="1.0" encoding="utf-8"?><Error><Code>InvalidHeaderValue</Code><Message>The value for one of the HTTP headers is not in the correct format.
RequestId:<REMOVED>
Time:2023-05-19T17:10:34.2972651Z</Message><HeaderName>x-ms-version</HeaderName><HeaderValue>yyyy-mm-dd</HeaderValue></Error> 
```

If you've upgraded to the latest beta or generally available version of the SDK and you experience this error, it's recommended that you downgrade to the previous generally available version of the SDK to see if the issue resolves. If the issue persists, or if the recommendation is not feasible, [open a support ticket](https://ms.portal.azure.com/#create/Microsoft.Support) to explore further options.