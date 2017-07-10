---
title: Azure Key Vault modules for Node.js
description: Reference for Azure Key Vault modules for Node.js
keywords: Azure,SDK,API,Key Vault, Node.js
author: tomarcher
ms.author: tarcher
manager: douge
ms.date: 07/07/2017
ms.topic: article
ms.prod: azure
ms.technology: azure
ms.devlang: nodejs
ms.service: Key Vault
---

# Azure Key Vault modules for Node.js

## Overview
Azure Key Vault helps safeguard cryptographic keys and secrets used by cloud applications and services. By using Key Vault, you can encrypt keys and secrets (such as authentication keys, storage account keys, data encryption keys, .PFX files, and passwords) by using keys that are protected by hardware security modules (HSMs). For added assurance, you can import or generate keys in HSMs. If you choose to do this, Microsoft processes your keys in FIPS 140-2 Level 2 validated HSMs (hardware and firmware).

Key Vault streamlines the key management process and enables you to maintain control of keys that access and encrypt your data. Developers can create keys for development and testing in minutes, and then seamlessly migrate them to production keys. Security administrators can grant (and revoke) permission to keys, as needed.

## Install the modules with npm

Use npm to install the Azure Key Vault modules for Node.js

### Management
```bash
npm install azure-arm-keyvault
```

## Example

## Samples

|  Web Apps |   |
|---|---|
| [Getting started with Key Vault in Node.js](https://azure.microsoft.com/en-us/resources/samples/key-vault-node-getting-started/)  | This sample demonstrates how to create and manage a keyvault and interact with it in Node.js. We will also write an app that consumes information from the key vault. |
| [Manage Azure resources and resource groups with Node.js](https://azure.microsoft.com/en-us/resources/samples/resource-manager-node-resources-and-groups/) | This sample explains how to manage your resources and resource groups in Azure using the Azure SDK for Node.js. |
| [Integrating Azure AD into a NodeJS web application](https://azure.microsoft.com/en-us/resources/samples/active-directory-node-webapp-openidconnect/) | This Node.js app will give you with a quick and easy way to set up a Web application in node.js with Express using OpenID Connect. The sample server included in the download is designed to run on any platform. |

Explore more [sample Node.js code](https://azure.microsoft.com/en-us/resources/samples/?platform=nodejs) you can use in your apps.
