---
title: Azure Storage modules for JavaScript
description: Reference for Azure Storage modules for JavaScript
author: craigshoemaker
ms.author: cshoe
manager: routlaw
ms.date: 07/18/2017
ms.topic: article
ms.prod: azure
ms.technology: azure
ms.devlang: javascript
ms.service: storage
---

# Azure Storage libraries for JavaScript

[Azure Storage](https://docs.microsoft.com/azure/storage/) is a Microsoft-managed service providing cloud storage that is highly available, secure, durable, scalable, and redundant. The following libraries in JavaScript make it easy to consume Microsoft Azure Storage service.

## Client Packages

|Service| NPM package| Examples|Getting Started Guide|
|---|---|---|--|--|
|**Storage Blob**|[@azure/storage-blob](https://www.npmjs.com/package/@azure/storage-blob)|[storage-blob-typescript-examples](https://docs.microsoft.com/samples/azure/azure-sdk-for-js/storage-blob-typescript/)<br> [storage-blob-javascript-examples](https://docs.microsoft.com/samples/azure/azure-sdk-for-js/storage-blob-javascript/)|Read and write objects and files from [Azure Storage Blob](https://docs.microsoft.com/azure/storage/storage-nodejs-how-to-use-blob-storage)|
|**Storage File Share**|[@azure/storage-file-share](https://www.npmjs.com/package/@azure/storage-file-share)|[storage-file-share-typescript-examples](https://docs.microsoft.com/samples/azure/azure-sdk-for-js/storage-file-share-typescript/)<br> [storage-file-share-javascript-examples](https://docs.microsoft.com/samples/azure/azure-sdk-for-js/storage-file-share-javascript/)|#ToBeAdded|
|**Storage File Datalake**|[@azure/storage-file-datalake](https://www.npmjs.com/package/@azure/storage-file-datalake)|[storage-file-datalake-typescript-examples](https://docs.microsoft.com/samples/azure/azure-sdk-for-js/storage-file-datalake-typescript/)<br> [storage-file-datalake-javascript-examples](https://docs.microsoft.com/samples/azure/azure-sdk-for-js/storage-file-datalake-javascript/)|#ToBeAdded|
|**Storage Queue**|[@azure/storage-queue](https://www.npmjs.com/package/@azure/storage-queue)|[storage-queue-typescript-examples](https://docs.microsoft.com/samples/azure/azure-sdk-for-js/storage-queue-typescript/)<br> [storage-queue-javascript-examples](https://docs.microsoft.com/samples/azure/azure-sdk-for-js/storage-queue-javascript/)|Send and receive messages between cloud-connected applications with <br>#ToBeAdded|
|**Storage Table**|[azure-storage](https://www.npmjs.com/package/azure-storage)<br>(Legacy)|#ToBeAdded|#ToBeAdded|Read and write large structured data with [Azure Table storage](https://docs.microsoft.com/azure/storage/storage-nodejs-how-to-use-table-storage)|
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
npm install azure-arm-storage
```

### Example

This example list the storage accounts.

```javascript
const msRestAzure = require('ms-rest-azure');
const storageManagementClient = require('azure-arm-storage');

const subscriptionId = 'your-subscription-id';

msRestAzure
  .interactiveLogin()
  .then(credentials => {
    const client = new storageManagementClient(
      credentials,
      subscriptionId
    );
    return client.storageAccounts.list();
  })
  .then(accounts => console.dir(accounts, { depth: null, colors: true }))
  .catch(err => console.log(err));
```
