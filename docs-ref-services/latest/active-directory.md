---
title: Azure Active Directory SDK for JavaScript
description: Reference for Azure Active Directory SDK for JavaScript
author: xirzec
ms.author: jeffish
ms.data: 07/04/2023
ms.topic: reference
ms.devlang: javascript
ms.service: activedirectory
ms.date: 06/15/2022
---
# Azure Active Directory modules for Node.js

## Overview

> [!IMPORTANT]
> [ADAL is being deprecated](https://techcommunity.microsoft.com/t5/azure-active-directory-identity/update-your-applications-to-use-microsoft-authentication-library/ba-p/1257363). We recommend that you use the [Microsoft Authentication Library (MSAL)](https://docs.microsoft.com/azure/active-directory/develop/reference-v2-libraries) and the [Microsoft Graph API](https://docs.microsoft.com/graph/overview) in your application development instead.
>
> For more info, see these resources:
> - Code samples for your platform - [Microsoft identity platform code samples](https://docs.microsoft.com/azure/active-directory/develop/sample-v2-code). 
> - Migration guidance - [Migrate to MSAL.js](https://docs.microsoft.com/azure/active-directory/develop/msal-compare-msal-js-and-adal-js) and [Migrate Azure AD Graph apps to Microsoft Graph](https://docs.microsoft.com/graph/migrate-azure-ad-graph-overview).

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

## Other samples

For more code samples that use various Azure packages, explore the [Node.js samples](https://docs.microsoft.com/samples/browse/?products=azure&terms=node.js).