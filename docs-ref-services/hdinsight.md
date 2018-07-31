---
title: Azure HDInsight Modules for Node.js
description: Reference for Azure HDInsight Modules for Node.js
author: mumian
ms.author: jgao
manager: cgronlun
ms.date: 07/18/2017
ms.topic: article
ms.prod: azure
ms.technology: azure
ms.devlang: nodejs
ms.service: HDInsight
uid: azure.nodejs.sdk.landingpage.services.hdinsight





---

# Azure HDInsight Modules for Node.js

Azure HDInsight is a cloud distribution of the Hadoop components from the Hortonworks Data Platform (HDP). Apache Hadoop was the original open-source framework for distributed processing and analysis of big data sets on clusters of computers.

HDInsight makes Hadoop technologies easier to use, with:
- Less setup and configuration. See Provision Hadoop clusters in HDInsight.
- High availability and reliability. See HDInsight availability and reliability.
- Security and governance through integration with Active Directory. See Domain-joined clusters.
- Dynamic scaling without interrupting jobs
- Component updates and current versions. See Hadoop components and versions on HDInsight.
- Integration with other Azure services, including Web apps and SQL Database

The Hadoop technology stack includes related software and utilities, including Apache Hive, HBase, Spark, Kafka, and many others. 

## Management package

### Install the npm modules

Use npm to install the Azure HDInsight modules for Node.js

```bash
npm install azure-arm-hdinsight
```

```bash
azure-arm-hdinsight-jobs
```

### Example 

This example creates an HD Insight client and then lists all of the available clusters. 

```javascript
const msRestAzure = require('ms-rest-azure');
const HDInsightManagementClient = require('azure-arm-hdinsight');

const subscriptionId = 'my-subscription-id';

msRestAzure.interactiveLogin().then(credentials => {
    const client = HDInsightManagementClient.createHDInsightManagementClient(
        credentials
    );

    credentials.subscriptionId = subscriptionId;

    client.clusters.list((err, result) => {
        console.log(result);
    });
});
```

## Samples

Explore more [sample Node.js code](https://azure.microsoft.com/resources/samples/?platform=nodejs) you can use in your apps.
