---
title: Azure Key Vault modules for JavaScript
description: Reference for Azure Key Vault modules for JavaScript
author: barclayn
ms.author: barclayn
manager: mbaldwin
ms.date: 07/18/2017
ms.topic: article
ms.prod: azure
ms.technology: azure
ms.devlang: nodejs
ms.service: Key Vault
---

# Azure Key Vault modules for JavaScript

Azure Key Vault helps safeguard cryptographic keys and secrets used by cloud applications and services. By using Key Vault, you can encrypt keys and secrets (such as authentication keys, storage account keys, data encryption keys, .PFX files, and passwords) by using keys that are protected by hardware security modules (HSMs). For added assurance, you can import or generate keys in HSMs. If you choose to do this, Microsoft processes your keys in FIPS 140-2 Level 2 validated HSMs (hardware and firmware).

Key Vault streamlines the key management process and enables you to maintain control of keys that access and encrypt your data. Developers can create keys for development and testing in minutes, and then seamlessly migrate them to production keys. Security administrators can grant (and revoke) permission to keys, as needed.

## Management Package

### Install the npm module 

Install the Azure Key Vault npm module

```bash
npm install @azure/arm-keyvault
```

### Example

Examples for using this module in Node.js as well as browser applications can be found in the [README for the module](https://www.npmjs.com/package/@azure/arm-keyvault)

## Samples

- [Getting started with Key Vault in JavaScript](https://azure.microsoft.com/resources/samples/key-vault-node-getting-started/)
- [Manage Azure resources and resource groups with JavaScript](https://azure.microsoft.com/resources/samples/resource-manager-node-resources-and-groups/) 
- [Integrating Azure AD into a NodeJS web application](https://azure.microsoft.com/resources/samples/active-directory-node-webapp-openidconnect/) 

For more code samples that use various Azure packages, explore the [JavaScript samples](https://docs.microsoft.com/en-us/samples/browse/?languages=javascript).
