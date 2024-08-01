---
title: Azure Storage SDK for JavaScript
description: Reference for Azure Storage SDK for JavaScript
ms.date: 08/01/2024
ms.topic: reference
ms.devlang: javascript
ms.service: storage
ms.technology: azure
manager: twolley
---
# Azure Storage Library for JavaScript

[Azure Storage](https://docs.microsoft.com/azure/storage/) is a Microsoft managed service providing cloud storage that is highly available, secure, durable, scalable, and redundant. The following libraries in JavaScript make it easy to consume Azure Storage service.

## Client Packages (12.X.X)

|Service| NPM package| Examples|Getting Started Guide|
|---|---|---|--|
|**Storage Blob**|[@azure/storage-blob](https://www.npmjs.com/package/@azure/storage-blob)|[storage-blob-typescript-examples](https://docs.microsoft.com/samples/azure/azure-sdk-for-js/storage-blob-typescript/)<br> [storage-blob-JavaScript-examples](https://docs.microsoft.com/samples/azure/azure-sdk-for-js/storage-blob-JavaScript/)|Read and write objects and files from [Azure Storage Blob](https://docs.microsoft.com/azure/storage/storage-nodejs-how-to-use-blob-storage)|
|**Storage Files**|[@azure/storage-file-share](https://www.npmjs.com/package/@azure/storage-file-share)|[storage-file-share-typescript-examples](https://docs.microsoft.com/samples/azure/azure-sdk-for-js/storage-file-share-typescript/)<br> [storage-file-share-javascript-examples](https://docs.microsoft.com/samples/azure/azure-sdk-for-js/storage-file-share-javascript/)||
|**Storage Queue**|[@azure/storage-queue](https://www.npmjs.com/package/@azure/storage-queue)|[storage-queue-typescript-examples](https://docs.microsoft.com/samples/azure/azure-sdk-for-js/storage-queue-typescript/)<br> [storage-queue-JavaScript-examples](https://docs.microsoft.com/samples/azure/azure-sdk-for-js/storage-queue-JavaScript/)|Send and receive messages between cloud-connected applications with <br>[Azure Storage Queue](https://docs.microsoft.com/azure/storage/queues/storage-quickstart-queues-nodejs)|
|||||

## Client Packages (2.X.X)
|Service| NPM package| Examples|Getting Started Guide|
|---|---|---|--|
|**Storage Table**|[azure-storage](https://www.npmjs.com/package/azure-storage)<br>(Legacy)| - |Read and write large structured data with [Azure Storage Table](https://docs.microsoft.com/azure/storage/storage-nodejs-how-to-use-table-storage)|
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