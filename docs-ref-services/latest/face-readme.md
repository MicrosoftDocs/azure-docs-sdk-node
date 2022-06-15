---
title: Face API 
description: The Azure Face service client library for Node.js
author: PatrickFarley
ms.author: pafarley
ms.date: 06/21/2021
ms.topic: reference
ms.prod: azure
ms.technology:
ms.devlang: javascript
ms.service: 
---

# Azure Face API

> [!IMPORTANT]
> Face service access is limited based on eligibility and usage criteria in order to support our Responsible AI principles. Face service is only available to Microsoft managed customers and partners. Use the [Face Recognition intake form](https://aka.ms/facerecognition) to apply for access.


> [!IMPORTANT]
> The following Face attributes have been categorized as **sensitive attributes**: `age`, `gender`, `emotion`, `smile`, `hair`, `facial hair`, `makeup`. New Face customers won't be able to use these attributes unless they get approved for a corresponding scenario through the [Face Recognition Limited Access Review](https://aka.ms/facerecognition) form. Existing customers will have access to **sensitive attributes** until June 21, 2023, after which they must also request access.

The Azure Face service provides AI algorithms that detect, recognize, and analyze human faces in images.

## Setting up

### Create a new Node.js application

In a console window (such as cmd, PowerShell, or Bash), create a new directory for your app, and navigate to it.

```console
mkdir myapp && cd myapp
```

Run the `npm init` command to create a node application with a `package.json` file.

```console
npm init
```

### Install the client library

Navigate to your project directory and run the following command to install the `ms-rest-azure` and `azure-cognitiveservices-face` NPM packages:

```console
npm install @azure/cognitiveservices-face @azure/ms-rest-js
```

Your app's `package.json` file will be updated with the dependencies.

## Next Steps

Go to the Face service [Overview](/azure/cognitive-services/face/overview) or follow a [quickstart](/azure/cognitive-services/face/quickstarts/client-libraries) to get started.
