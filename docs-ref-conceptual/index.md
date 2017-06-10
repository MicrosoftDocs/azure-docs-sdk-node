---
title: Azure libraries for Node.js
description: Overview of the Azure management and service libraries for Node.js
keywords: Azure, Node.js, SDK, API
author: tomarcher
ms.author: tarcher
manager: douge
ms.date: 06/10/2017
ms.topic: article
ms.prod: azure
ms.technology: azure
ms.devlang: node
ms.service: multiple
ms.assetid: 
---

# Azure libraries for Node.js

The Azure libraries for Node.js help you manage Azure resources and connect to services from your application code. The libraries are available as [npm packages](node-sdk-azure-install.md) for use in your Node.js projects. 

## Manage Azure resources

Create and manage Azure resources from your Node.js applications using the [Azure management libraries for Node.js](node-sdk-azure-get-started.md). Use these libraries to build your own Azure automation tools and services. 

For example, to log in (authenticate), create a client, and list all VM images, you could write the following code:

	```javascript
	var msRestAzure = require('ms-rest-azure');
	var computeManagementClient = require('azure-arm-compute');
	
	// Interactive Login - provides a url, and a code that needs to be copied and pasted in a browser.  
	// If successful, the user will receive a DeviceTokenCredentials object. 
	msRestAzure.interactiveLogin(function(err, credentials) {
		var client = new computeManagementClient(credentials, 'your-subscription-id');

		client.virtualMachineImages.list('westus', 
	                                     'MicrosoftWindowsServer', 
	                                     'WindowsServer', 
	                                     '2012-R2-Datacenter', 
	                                     function(err, result, request, response) {
		if (err) console.log(err);
			console.log(result);
		});
	});
	```

Review the [Node.js library installation instructions](node-sdk-azure-install.md) for a full list of the libraries, and how to import them into your projects. 

The [get started article](node-sdk-azure-get-started.md) explains how to set up your authentication and run sample code against your Azure subscription. 

## Connect to Azure services

In addition to using Node.js libraries to create and manage resources within Azure, you can also use Node.js libraries to connect to, and use those resources in your apps. For example, you could update a table in an SQL Database, or store files in Azure Storage. 

Select the library you need for a particular service from the [list of Node.js ibraries](node-sdk-azure-install.md), and visit the [Node.js developer center](https://azure.microsoft.com/develop/nodejs/) for tutorials and sample code.

For example, the following JavaScript illustrates how to list the contents of every blob in an Azure storage container:

	```javascript
	blobSvc.listBlobsSegmented('mycontainer', 
	                           null, 
	                           function(error, result, response) {
	  if(!error) { 
	      // result.entries contains the entries
	      // If all blobs were not returned, result.continuationToken 
	      // has the continuation token.
	  }
	});
	```

## Sample code and reference

The following samples cover common automation tasks with the Azure management libraries for Node.js, and have ready-to-use code for your own apps:

- [Virtual machines](node-sdk-azure-virtual-machine-samples.md)
- [Web Apps](node-sdk-azure-web-apps-samples.md)
- [SQL database](node-sdk-azure-sql-database-samples.md)

A [reference](https://docs.microsoft.com/node/api) is available for all packages in both the service and management libraries. New features, breaking changes, and migration instructions from previous versions are available in the [release notes](node-sdk-azure-release-notes.md).