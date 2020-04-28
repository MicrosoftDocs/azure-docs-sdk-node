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
ms.service: key-vault
---

# Azure Key Vault modules for JavaScript

The Azure Key Vault libraries for JavaScript offer a convenient interface for making calls to Azure Key Vault. For more information about Azure Key Vault, see [Introduction to Azure Key Vault](https://docs.microsoft.com/en-us/azure/key-vault/general/overview).

## Libraries for data access

The latest version of the Azure Key Vault library is version 4.x. Microsoft recommends using version 4.x for new applications.

If you cannot update existing applications to version 4.x, then Microsoft recommends using version 1.x.

### Version 4.x

The version 4.x libraries for JavaScript are part of the Azure SDK for JavaScript. The source code for the Key Vault libraries for JavaScript is available on [GitHub](https://github.com/Azure/azure-sdk-for-js/tree/master/sdk/keyvault).

Use the following version 4.x libraries to work with certificates, keys, and secrets:

| Library | Reference | Package | Source |
|----------------------------------------|-------------------------------------------------------------|-----------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------|
|    keyvault-certificates    |      [Reference](https://docs.microsoft.com/en-us/javascript/api/@azure/keyvault-certificates/?view=azure-node-latest)       |    [npm](https://www.npmjs.com/package/@azure/keyvault-certificates)    |    [GitHub](https://github.com/Azure/azure-sdk-for-js/tree/master/sdk/keyvault/keyvault-certificates)    |
|    keyvault-keys    |     [Reference](https://docs.microsoft.com/en-us/javascript/api/@azure/keyvault-keys/?view=azure-node-latest)    |    [npm](https://www.npmjs.com/package/@azure/keyvault-keys)      |     [GitHub](https://github.com/Azure/azure-sdk-for-js/tree/master/sdk/keyvault/keyvault-keys)|
|    keyvault-secrets   |    [Reference](https://docs.microsoft.com/en-us/javascript/api/@azure/keyvault-secrets/?view=azure-node-latest)    |    [npm](https://www.npmjs.com/package/@azure/keyvault-secrets)    |    [GitHub](https://github.com/Azure/azure-sdk-for-js/tree/master/sdk/keyvault/keyvault-secrets)    |

### Version 1.x

The source code for the Azure Key Vault libraries for .NET is available on [GitHub](https://github.com/Azure/azure-sdk-for-net/tree/master/sdk/keyvault).

Use the following version 1.x libraries to work with certificates, keys, and secrets:

| Library | Reference | Package | Source |
|--------------------------------------|---------------------------------------------------------------|-------------------------------------------------------------------------------|-------------------------------------------------------------------------------|
|    arm-keyvault-profile-2019-03-01-hybrid    |    |    [npm](https://www.npmjs.com/package/@azure/arm-keyvault-profile-2019-03-01-hybrid)    |    [GitHub](https://github.com/Azure/azure-sdk-for-js/tree/master/sdk/keyvault/arm-keyvault-profile-2019-03-01-hybrid)    |
|    arm-keyvault    |    [Reference](https://docs.microsoft.com/en-us/javascript/api/@azure/arm-keyvault/?view=azure-node-latest)    |    [npm](https://www.npmjs.com/package/@azure/arm-keyvault)    |    [GitHub](https://github.com/Azure/azure-sdk-for-js/tree/master/sdk/keyvault/arm-keyvault)    |