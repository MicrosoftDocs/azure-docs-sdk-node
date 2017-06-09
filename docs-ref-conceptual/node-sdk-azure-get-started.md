---
title: Get started with the Azure libraries for Node.js
description: Get started with basic use of the Azure libraries for Node.js with your own Azure subscription.
keywords: Azure, Node, SDK, API, get-started, node.js
author: tomarcher
manager: douge
ms.author: tarcher
ms.date: 06/07/2017
ms.topic: get-started-article
ms.prod: azure
ms.technology: azure
ms.devlang: node
ms.service: multiple
---

# Get started with the Azure libraries for Node.js

This guide walks you through installing some Azure Node.js packages, authenticating to Azure with a service principal, and running sample code that creates resources in your Azure subscription and connects to Azure cloud services.

## Prerequisites

- An Azure account. If you don't have one , [get a free trial](https://azure.microsoft.com/free/)
- [Node.js](https://nodejs.org)
- [Azure CLI 2.0](https://docs.microsoft.com/cli/azure/install-az-cli2) or use [Azure Cloud Shell](https://docs.microsoft.coms/azure/cloud-shell/quickstart)

The [Azure Cloud Shell](https://docs.microsoft.coms/azure/cloud-shell/quickstart) (in public preview) is a web-based shell that is preconfigured to simplify using Azure tools. With Cloud Shell, you always have the most up-to-date version of the tools available and you don’t have to install, update or separately log in. Click the **Try It** button at the top right of an Azure CLI code block to launch the Cloud Shell. Then, use the **Copy** button to copy and paste the sample code into the Cloud Shell.

You can also open the Cloud Shell from the Azure portal by clicking the ![Cloud Shell](cs-button.png) button on the top navigation. 

## Set up authentication

Your Node.js applications need read and create permissions in your Azure subscription to run the sample code in this guide. Create a service principal and configure your application to run with its credentials. Service principals are a non-interactive account associated with your identity to which you grant only the privileges your app needs to run.

[Create a service principal using the Azure CLI 2.0](/cli/azure/create-an-azure-service-principal-azure-cli) and capture the output. You'll need to provide a [secure password](https://docs.microsoft.com/azure/active-directory/active-directory-passwords-policy) in the password argument instead of `MY_SECURE_PASSWORD`.

```azurecli-interactive
az ad sp create-for-rbac --name AzureNodeTest --password "MY_SECURE_PASSWORD"
```

```json
{
  "appId": "a487e0c1-82af-47d9-9a0b-af184eb87646d",
  "displayName": "AzureNodeTest",
  "name": "http://AzureNodeTest",
  "password": password,
  "tenant": "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX"
}
```

Create a new file *nodeAzureTest.js* in a new directory with the following code, updating the parameters passed to `loginWIthServicePrincipalSecret` with the values from the CLI output.

```javascript
const Azure = require('azure');
const MsRest = require('ms-rest-azure');

MsRest.loginWithServicePrincipalSecret(
  'http://AzureNodeTest',
  'password',
  'a487e0c1-82af-47d9-9a0b-af184eb87646d',
  (err, credentials) => { }
);
```

## Install Azure packages

## Create a new virtual machine

## Deploy a web app from a Docker Hub image

## Connect to Azure SQL Database

## Write a new blob to Azure Storage

## Clean up resources

## Samples and reference

## Get help and give feedback


