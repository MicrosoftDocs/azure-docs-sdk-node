---
title: Azure for Java developers Microsoft Docs
description: Java SDK and API Reference for Azure
keywords: Azure Java, Azure Java API Reference, Azure Java class library, Azure SDK
author: routlaw
manager: douge
ms.assetid: 7b92e776-959b-4632-8b1d-047ce1417616
ms.service: Azure
ms.devlang: java
ms.topic: reference
ms.technology: Azure
ms.date: 3/06/2016
---

# Azure libraries for Java

Azure libraries help you consume Azure services in your Java apps using native interfaces. Each library is independent and can be used separately from the others another.

| | | | |
|:-------------:|:----------:|:----:|:---:|
| [Azure Storage](#azure-storage) | [SQL Database](#sql-database)  | [Redis Cache](#redis-cache)   | [DocumentDB](#documentdb) |
| [Service Bus](#servicebus)  | [Azure Active Directory](#azuread) | [Key Vault](#keyvault)  | [Event Hub](#eventhub)
| [IoT Service](#iotservice) | [IoT Device](#iotdevice) | [Data Lake](#datalake)  | [AppInsights](#appinsights) | 
| [Batch](#batch) | [Manage Azure resources](#management) |

## Install with Maven

Add a dependency entry in your `pom.xml` to import a library into your [Maven](https://maven.apache.org) project.

For example, to include the latest version of the [Azure management libraries for Java](#management):

```XML
<dependency>
    <groupId>com.microsoft.azure</groupId>
    <artifactId>azure</artifactId>
    <version>1.0.0</version>
</dependency>
```

Other Java build tools like Gradle are supported but the install steps are not provided in this article. Review the documentation for your build tool on how to consume Maven imports.

## Azure service libraries

Integrate Azure services to add functionality to your apps using these libraries. Learn more about building apps with Azure services at the [Java developer center](https://azure.microsoft.com/develop/java).

<a name="azure-storage"></a>

### [Azure Storage](https://docs.microsoft.com/azure/storage/storage-introduction)  

Data storage and messaging for your applications.

```XML
<dependency>
    <groupId>com.microsoft.azure</groupId>
    <artifactId>azure-storage</artifactId>
    <version>5.2.0</version>
</dependency>
```   

[Samples](https://github.com/Azure/azure-storage-java/tree/master/microsoft-azure-storage-samples/src/com/microsoft/azure/storage) | [Reference](https://docs.microsoft.com/java/api/overview/azure/storage) | [GitHub](https://github.com/Azure/azure-storage-java)  | [Release Notes](https://github.com/Azure/azure-storage-java/blob/master/ChangeLog.txt)

<a name="sql-database"></a>

### [SQL Database](https://docs.microsoft.com/azure/sql-database/sql-database-technical-overview)

JDBC driver for Azure SQL Database.

```XML
<dependency>
    <groupId>com.microsoft.sqlserver</groupId>
    <artifactId>mssql-jdbc</artifactId>
    <version>6.1.0.jre8</version>
</dependency>
```

[Samples](https://docs.microsoft.com/sql/connect/jdbc/step-3-proof-of-concept-connecting-to-sql-using-java) | [Reference](https://docs.microsoft.com/java/api/overview/azure/sql) | [GitHub](https://github.com/Microsoft/mssql-jdbc)  | [Release Notes](https://github.com/Microsoft/mssql-jdbc/blob/master/CHANGELOG.md)

<a name="redis-cache"></a>

### [Redis Cache](https://azure.microsoft.com/services/cache/)

Low-latency, high-performance key-value store.

```XML
<dependency>
    <groupId>redis.clients</groupId>
    <artifactId>jedis</artifactId>
    <version>2.9.0</version>
    <type>jar</type>
    <scope>compile</scope>
</dependency>
```   

[Samples](https://docs.microsoft.com/azure/redis-cache/cache-java-get-started) | [Reference](http://xetorthio.github.io/jedis)  | [GitHub](https://github.com/xetorthio/jedis)  | [Release Notes](https://github.com/xetorthio/jedis/releases)  

<a name="documentdb"></a>

### [CosmosDB](https://docs.microsoft.com/azure/documentdb/documentdb-introduction)

Scalable NoSQL database with JSON documents and a SQL or JavaScript query syntax.   

```XML
<dependency>
    <groupId>com.microsoft.azure</groupId>
    <artifactId>azure-documentdb</artifactId>
    <version>1.11.0</version>
</dependency>
```

[Samples](https://docs.microsoft.com/azure/documentdb/documentdb-java-application) | [Reference](http://azure.github.io/azure-documentdb-java/) | [GitHub](https://github.com/Azure/azure-documentdb-java)   | [Release Notes](https://github.com/Azure/azure-documentdb-java/blob/master/changelog.md)

<a name="servicebus"></a>

### [Service Bus](https://docs.microsoft.com/azure/service-bus-messaging/service-bus-fundamentals-hybrid-solutions)

Java Message Service (JMS) support through [AMQP](https://en.wikipedia.org/wiki/Advanced_Message_Queuing_Protocol) to connect your applications.

```XML
<dependency>
  <groupId>org.apache.qpid</groupId>
  <artifactId>qpid-jms-client</artifactId>
  <version>0.23.0</version>
</dependency>
```

[Reference](http://docs.oracle.com/javaee/7/api/javax/jms/package-summary.html) | [Sample](https://github.com/apache/qpid-jms/tree/0.20.0/qpid-jms-examples) | [GitHub](https://github.com/apache/qpid-jms) | [Release Notes](https://qpid.apache.org/releases/index.html)   

<a name="azuread"></a>

### [Azure Active Directory](https://docs.microsoft.com/azure/active-directory/active-directory-whatis)   

Identity management and secure sign-in for your applications.

```XML
<dependency>
    <groupId>com.microsoft.azure</groupId>
    <artifactId>adal4j</artifactId>
    <version>1.2.0</version>
</dependency>
```
   
[Samples](https://github.com/Azure-Samples?utf8=%E2%9C%93&q=active%20directory%20&type=&language=java) | [Reference](https://docs.microsoft.com/java/api/overview/azure/activedirectory) | [GitHub](https://github.com/AzureAD/azure-activedirectory-library-for-java) | [Release Notes](https://github.com/AzureAD/azure-activedirectory-library-for-javaT-)
 
<a name="keyvault"></a>

### [Key Vault](https://docs.microsoft.com/azure/key-vault) 

Safely access keys and secrets from your applications. 

```XML
<dependency>
    <groupId>com.microsoft.azure</groupId>
    <artifactId>azure-keyvault</artifactId>
    <version>1.0.0</version>
</dependency>
```

[Samples](https://github.com/Azure-Samples/key-vault-java-manage-key-vaults) | [Reference](https://docs.microsoft.com/java/api/overview/azure/keyvault) | [GitHub](https://github.com/Azure/azure-keyvault-java) | [Release Notes](https://github.com/Azure/azure-keyvault-java) 

<a name="eventhub"></a>

### [Event Hub](https://docs.microsoft.com/azure/event-hubs/event-hubs-what-is-event-hubs) 
   
High-throughput event and telemetry handling for your instrumentation or IoT scenarios.

```XML
<dependency> 
    <groupId>com.microsoft.azure</groupId> 
    <artifactId>azure-eventhubs</artifactId> 
    <version>0.14.0</version> 
</dependency>   
```

[Samples](https://github.com/Azure/azure-event-hubs/tree/master/samples#java) | [Reference](https://docs.microsoft.com/java/api/overview/azure/eventhub) | [GitHub](https://github.com/azure/azure-event-hubs-java)  | [Release Notes](https://github.com/Azure/azure-event-hubs-java)

<a name="iotservice"></a> 

### [IoT Service](https://docs.microsoft.com/azure/iot-hub/)

Manage identities, send messages, and get feedback from devices registered with your IoT hub.

```XML
<dependency>
    <groupId>com.microsoft.azure.sdk.iot</groupId>
    <artifactId>iot-service-client</artifactId>
    <version>1.4.20</version>
</dependency>
```   
   
[Samples](https://github.com/Azure/azure-iot-sdk-java/tree/master/service/iot-service-samples) | [Reference](https://docs.microsoft.com/java/api/overview/azure/iot) | [GitHub](https://github.com/Azure/azure-iot-sdk-java) | [Release Notes](https://github.com/Azure/azure-iot-sdk-java/blob/master/readme.md)

<a name="iotdevice"></a> 

### [IoT Device](https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide)

Send a message to an IoT hub from your device.  

```XML
<dependency>
    <groupId>com.microsoft.azure.sdk.iot</groupId>
    <artifactId>iot-device-client</artifactId>
    <version>1.1.27</version>
</dependency>
```  

[Samples](https://github.com/Azure/azure-iot-sdk-java/tree/master/device/iot-device-samples) | [Reference](https://docs.microsoft.com/java/api/overview/azure/iot) | [GitHub](https://github.com/Azure/azure-iot-sdk-java) | [Release Notes](https://github.com/Azure/azure-iot-sdk-java/blob/master/readme.md)

<a name="datalake"></a> 

### [Data Lake Store](https://docs.microsoft.com/azure/data-lake-store/data-lake-store-overview)   
   
Capture data of any size and shape into a single location for performing analytics.    

```XML
<dependency>
   <groupId>com.microsoft.azure</groupId>
   <artifactId>azure-data-lake-store-sdk</artifactId>
   <version>2.1.5</version>
</dependency>
```   

[Samples](https://github.com/Azure-Samples/data-lake-store-java-upload-download-get-started) | [Reference](https://docs.microsoft.com/java/api/overview/azure/datalakestore) | [GitHub](https://github.com/Azure/azure-data-lake-store-java) | [Release Notes](https://github.com/Azure/azure-data-lake-store-java/blob/master/CHANGES.md)

<a name="appinsights"></a> 

### [AppInsights](https://docs.microsoft.com/azure/application-insights/app-insights-overview)

Track usage, add telemetry, and monitor your web apps.

```XML
<dependency>
    <groupId>com.microsoft.azure</groupId>
    <artifactId>applicationinsights-web</artifactId>
    <version>1.0.7</version>
</dependency>
```

[Samples](https://docs.microsoft.com/azure/application-insights/app-insights-java-get-started) | [Reference](https://docs.microsoft.com/java/api/overview/azure/appinsights) | [GitHub](https://github.com/Microsoft/ApplicationInsights-Java) | [Release Notes](https://github.com/Microsoft/ApplicationInsights-Java#to-upgrade-to-the-latest-sdk)

<a name="batch"></a>

### [Batch](https://docs.microsoft.com/azure/batch)

Run large-scale parallel and high-performance computing applications efficiently in the cloud.

```XML
<dependency>
    <groupId>com.microsoft.azure</groupId>
    <artifactId>azure-batch</artifactId>
    <version>2.0.0</version>
</dependency>
```

[Samples](https://github.com/azure/azure-batch-samples) | [Reference](https://docs.microsoft.com/java/api/overview/azure/batch) | [GitHub](https://github.com/azure/azure-batch-sdk-for-java) | [Release Notes](https://github.com/Azure/azure-batch-sdk-for-java/blob/master/README.md)

<a name="management"></a> 

## Manage Azure resources

Create, update, and delete Azure resources from your application code.

```XML
<dependency>
    <groupId>com.microsoft.azure</groupId>
    <artifactId>azure</artifactId>
    <version>1.0.0</version>
</dependency>
```

[Samples](https://github.com/Azure/azure-sdk-for-java#sample-code) | [Reference](https://docs.microsoft.com/java/api/overview/azure/) | [GitHub](https://github.com/Azure/azure-sdk-for-java) | [Release Notes](java-sdk-azure-release-notes.md)