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

## Prepare your environemnt

Create a new project in an empty directory and install the following npm modules:

```bash
cd azure-node-quickstart
npm init -y
npm install --save azure ms-rest-azure azure-arm-compute azure-arm-website azure-storage
```

## Set up authentication

Your Node.js applications need read and create permissions in your Azure subscription to run the sample code in this guide. Create a service principal and configure your application to run with its credentials. Service principals are a non-interactive account associated with your identity to which you grant only the privileges your app needs to run.

[Create a service principal using the Azure CLI 2.0](https://docs.microsoft.com/cli/azure/create-an-azure-service-principal-azure-cli) and capture the output. You'll need to provide a [secure password](https://docs.microsoft.com/azure/active-directory/active-directory-passwords-policy) in the password argument instead of `MY_SECURE_PASSWORD`.

```azurecli-interactive
az ad sp create-for-rbac --name AzureNodeTest --password "MY_SECURE_PASSWORD"
```

```json
{
  "appId": "a487e0c1-82af-47d9-9a0b-af184eb87646d",
  "displayName": "AzureNodeTest",
  "name": "http://AzureNodeTest",
  "password": password,
  "tenant": ""
}
```

Export the values for  *appId*, *password* and *tenant* as environment variables.

```bash
export AZURE_ID a487e0c1-82af-47d9-9a0b-af184eb87646d
export AZURE_PASS password
export AZURE_TENANT XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
```

Get the ID for your subscription with [az account show](https://docs.microsoft.com/cli/azure/account#show)

```azurecli-interactive
az account show
```

```json
{
   "environmentName": "AzureCloud",
   "id": "306943934-0323-4ae4d-a42b-f6613d1664ac",
   "isDefault": true
}
```

Export the subscription ID as an environment variable

```bash
export AZURE_SUB = 3069ff33-0398-4a99-a42b-f6613d1664ac
```

## Create a new virtual machine

Create a new file *createVM.js* in the current directory with the following code.

```javascript
'use strict';

const MsRest = require('ms-rest-azure');
const ComputeManagementClient = require('azure-arm-compute');
const NetworkManagementClient = require('azure-arm-network');

MsRest.loginWithServicePrincipalSecret(
    process.env.AZURE_ID, process.env.AZURE_PASS, process.env.AZURE_TENANT, (err, credentials) => {
        
        const networkClient = new NetworkManagementClient(credentials, process.env.AZURE_SUB);
        const computeClient = new ComputeManagementClient(credentials, process.env.AZURE_SUB);

        let nicParameters = {
            location: "eastus",
            ipConfigurations: [
                {
                    name: "vmnetinterface",
                    privateIPAllocationMethod: 'Dynamic',
                }
            ]
        };

        const vnetParameters = {
            location: "eastus",
            addressSpace: {
                addressPrefixes: ['10.0.0.0/16']
            },
            dhcpOptions: {
                dnsServers: ['10.1.1.1', '10.1.2.4']
            },
            subnets: [{ name: "mynodesubnet", addressPrefix: '10.0.0.0/24' }],
        };

        let vmParameters = {
            location: "eastus",
            osProfile: {
                computerName: "newLinuxVM",
                adminUsername: "testadmin",
            },
            hardwareProfile: {
                vmSize: 'Basic_A1'
            },
            networkProfile: {
                networkInterfaces: [
                    {
                        id: vmNetworkInterface.id,
                        primary: true
                    }
                ]
            },
            storageProfile: {
                imageReference: {
                    publisher: 'Canonical',
                    offer: 'UbuntuServer',
                    sku: '16.04-LTS',
                    version: 'latest'
                },
            }
        };

        networkClient.virtualNetworks.createOrUpdate("myResourceGroup", "mynodevnet", vnetParameters)
            .then(function (vnetwork) {
                networkClient.subnets.get("myResourceGroup", "mynodevnet", "mynodesubnet")
                    .then(function (subnetinfo) {
                        nicParameters.ipConfigurations[0].subnet = subnetInfo;
                        networkClient.networkInterfaces.createOrUpdate("myResourceGroup", "vmnetinterface", nicParameters)
                            .then(function (vmNetworkInterface) {
                                vmParameters.networkProfile.networkInterfaces[0].id = vmNetworkInterface.id;
                                computeClient.virtualMachines.createOrUpdate("myResourceGroup", "newLinuxVM", vmParameters, (err, data) => {
                                    if (err) return console.log(err);
                                    console.log("Created newLinuxVM");
                                });
                            });
                    })
            })
    });

```


## Deploy a web app from a Docker Hub image

## Write a blob to Azure Storage

## Clean up resources

## Samples and reference

## Get help and give feedback


