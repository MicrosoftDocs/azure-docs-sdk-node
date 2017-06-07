---
title: Azure management libraries for Java release notes | Microsoft Docs
description: See what's new and watch for breaking changes in the Azure management libraries for Java
keywords: Azure,  Java, API, reference,  notes,  updates, deprecate
author: routlaw
manager: douge
ms.assetid: 1f128cf9-f747-4344-84e1-f9964709deb8
ms.service: Azure
ms.devlang: java
ms.topic: reference
ms.technology: Azure
ms.date: 3/06/2016
---

# Release Notes 

## April 14, 2017 - 1.0.0

This release of the Azure management libraries for Java is the first "Generally Availble" release. Some parts of the library are still in Preview, see the table below for the current state of the libraries:


Service or feature | Available as GA | Available as Preview  | Coming soon |
---------|---------|---------|---------|
Compute  | Virtual machines and VM extensions, Virtual machine scale sets, managed disks   |  |  Azure container services ,Azure container registry  |
Storage   |  Storage accounts       |         |   Encryption      |
SQL Database  | Databases, firewalls, elastic pools        |         |         |
Networking    |  Virtual networks , network interfaces , IP addresses ,routing tables, network security groups , DNS, Traffic manager  |    Load balancers, Application gateways     |         |
More services    |  Resource Manager, Key Vault, Redis,  CDN, Batch       |  App service - Web apps, Functions, Service Bus    | Monitor, Graph RBAC, DocumentDB ,Scheduler        |
Fundamentals     |   Authentication - core      |  Async methods       |         |

Preview features are marked with the @Beta annotation at the class, interface or method level in the libraries. 
Preview features can be modified in any way, or even removed, in the future.

### Import with Maven

```XML
<dependency>
    <groupId>com.microsoft.azure</groupId>
    <artifactId>azure</artifactId>
    <version>1.0.0</version>
</dependency>
```

### Get help and give feedback

Check out the [Stack Overflow](http://stackoverflow.com/questions/tagged/azure-java-sdk) community for help using the libraries in your own code. If you encounter any bugs or have suggestions to improve these libraries, please file issues via [GitHub](https://github.com/Azure/azure-sdk-for-java/issues).

### Migrate from previous releases

[Migrate from 1.0.0-beta5](https://github.com/Azure/azure-sdk-for-java/blob/master/notes/prepare-for-1.0.0.md)    


