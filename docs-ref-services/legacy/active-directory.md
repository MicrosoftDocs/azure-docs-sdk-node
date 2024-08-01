---
title: Azure Active Directory SDK for JavaScript
description: Reference for Azure Active Directory SDK for JavaScript
ms.date: 08/01/2024
ms.topic: reference
ms.devlang: javascript
ms.service: activedirectory
ms.technology: azure
manager: mtillman
---
# Azure Active Directory modules for Node.js

## Overview

> [!IMPORTANT]
> Use [Microsoft Graph](https://graph.microsoft.io/) instead of Azure AD Graph API to access Azure Active Directory resources. Our development efforts are now concentrated on Microsoft Graph and no further enhancements are planned for Azure AD Graph API. For more information, see [Migrate Azure AD Graph apps to Microsoft Graph](https://docs.microsoft.com/graph/migrate-azure-ad-graph-overview).

The [Azure Active Directory Authentication Library (ADAL) for Node.js](https://www.npmjs.com/package/adal-node) enables Node.js applications to authenticate to Azure AD in order to access AAD protected web resources.

## Client package

### Install the npm modules

Use npm to install the Azure storage client or management modules.

```bash
npm install adal-node
```   

### Example

This example from the [client credentials sample](https://github.com/MSOpenTech/azure-activedirectory-library-for-nodejs/blob/master/sample/client-credentials-sample.js) illustrates server-to-server authentication via client credentials.

```Node.js
const adal = require('adal-node').AuthenticationContext;

const authorityHostUrl = 'https://login.windows.net';
const tenant = 'your-tenant-id';
const authorityUrl = authorityHostUrl + '/' + tenant;
const clientId = 'your-client-id';
const clientSecret = 'your-client-secret';
const resource = 'your-app-id-uri';

const context = new adal(authorityUrl);

context.acquireTokenWithClientCredentials(
  resource,
  clientId,
  clientSecret,
  (err, tokenResponse) => {
    if (err) {
      console.log(`Token generation failed due to ${err}`);
    } else {
      console.dir(tokenResponse, { depth: null, colors: true });
    }
  }
);
```

## Samples

| **Azure Active Directory** | **Description** |
|---|---|
| Securing a web API with Azure AD | A NodeJS web API that is secured using Azure AD and OAuth 2.0 access tokens. |
| Integrating Azure AD into a NodeJS web application | A NodeJS web application that authenticates Azure AD users with OpenID Connect. |

For more code samples that use various Azure packages, explore the [Node.JS samples](https://azure.microsoft.com/resources/samples/?platform=nodejs).