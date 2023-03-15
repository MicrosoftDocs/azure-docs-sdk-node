---
title: Azure Key Vault modules for JavaScript
description: Reference for Azure Key Vault modules for JavaScript
author: barclayn
ms.author: barclayn
manager: mbaldwin
ms.date: 07/18/2017
ms.topic: reference
ms.technology: azure
ms.devlang: nodejs
ms.service: key-vault
---

# Azure Key Vault modules for JavaScript

The Azure Key Vault libraries for JavaScript offer a convenient interface for making calls to Azure Key Vault. For more information about Azure Key Vault, see [Introduction to Azure Key Vault](https://docs.microsoft.com/azure/key-vault/general/overview).

## Libraries for data access

The latest version of the Azure Key Vault library is version 4.x.x. Microsoft recommends using version 4.x.x for new applications.

### Version 4.x.x

The version 4.x.x libraries for JavaScript are part of the Azure SDK for JavaScript. The source code for the Key Vault libraries for JavaScript is available on [GitHub](https://github.com/Azure/azure-sdk-for-js/tree/master/sdk/keyvault).

Use the following version 4.x.x libraries to work with certificates, keys, and secrets:

| Library | Reference | Package | Source |
|----------------------------------------|-------------------------------------------------------------|-----------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------|
|    keyvault-certificates    |      [Reference](https://docs.microsoft.com/javascript/api/@azure/keyvault-certificates/?view=azure-node-latest)       |    [npm](https://www.npmjs.com/package/@azure/keyvault-certificates)    |    [GitHub](https://github.com/Azure/azure-sdk-for-js/tree/master/sdk/keyvault/keyvault-certificates)    |
|    keyvault-keys    |     [Reference](https://docs.microsoft.com/javascript/api/@azure/keyvault-keys/?view=azure-node-latest)    |    [npm](https://www.npmjs.com/package/@azure/keyvault-keys)      |     [GitHub](https://github.com/Azure/azure-sdk-for-js/tree/master/sdk/keyvault/keyvault-keys)|
|    keyvault-secrets   |    [Reference](https://docs.microsoft.com/javascript/api/@azure/keyvault-secrets/?view=azure-node-latest)    |    [npm](https://www.npmjs.com/package/@azure/keyvault-secrets)    |    [GitHub](https://github.com/Azure/azure-sdk-for-js/tree/master/sdk/keyvault/keyvault-secrets)    |

## Libraries for resource management

Use the following library to work with the Azure Key Vault resource provider:

| Library | Reference | Package | Source |
|--------------------------------------|---------------------------------------------------------------|-------------------------------------------------------------------------------|-------------------------------------------------------------------------------|
|    arm-keyvault    |    [Reference](https://docs.microsoft.com/javascript/api/@azure/arm-keyvault/?view=azure-node-latest)    |    [npm](https://www.npmjs.com/package/@azure/arm-keyvault)    |    [GitHub](https://github.com/Azure/azure-sdk-for-js/tree/master/sdk/keyvault/arm-keyvault)    |