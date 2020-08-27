# Types

  - [ClientLogLevel](docs/core/ClientLogLevel)
  - [ClientLoggers](docs/core/ClientLoggers)
  - [NullClientLogger](docs/core/NullClientLogger)
  - [PrintLogger](docs/core/PrintLogger)
  - [NSLogger](docs/core/NSLogger)
  - [OSLogger](docs/core/OSLogger)
  - [CancellationToken](docs/core/CancellationToken)
  - [PagedCodingKeys](docs/core/PagedCodingKeys):​
    Defines the property keys used to conform to the Azure paging design.
  - [PagedCollection](docs/core/PagedCollection):​
    A collection that fetches paged results in a lazy fashion.
  - [PagedCollection.PagedItemSyncIterator](docs/core/PagedCollection_PagedItemSyncIterator)
  - [MatchCondition](docs/core/MatchCondition):​
    An enum to describe match conditions.
  - [ElementToJsonStrategy](docs/core/ElementToJsonStrategy)
  - [AttributeToJsonStrategy](docs/core/AttributeToJsonStrategy)
  - [XMLMetadata](docs/core/XMLMetadata):​
    Class containing metadata needed to translate an XML payload into the desired
    JSON payload.
  - [XMLMap](docs/core/XMLMap):​
    A map of XML document path keys and metadata needed to convert an XML
    payload into a JSON payload.
  - [AzureError](docs/core/AzureError)
  - [PipelineClient](docs/core/PipelineClient):​
    Base class for all pipeline-based service clients.
  - [ContextKey](docs/core/ContextKey)
  - [PipelineContext](docs/core/PipelineContext)
  - [PipelineRequest](docs/core/PipelineRequest)
  - [PipelineResponse](docs/core/PipelineResponse)
  - [AddDatePolicy](docs/core/AddDatePolicy)
  - [AccessToken](docs/core/AccessToken)
  - [AnonymousAccessPolicy](docs/core/AnonymousAccessPolicy)
  - [BearerTokenCredentialPolicy](docs/core/BearerTokenCredentialPolicy)
  - [ContentDecodePolicy](docs/core/ContentDecodePolicy)
  - [HeadersPolicy](docs/core/HeadersPolicy)
  - [HeadersValidationPolicy](docs/core/HeadersValidationPolicy)
  - [LoggingPolicy](docs/core/LoggingPolicy)
  - [CurlFormattedRequestLoggingPolicy](docs/core/CurlFormattedRequestLoggingPolicy)
  - [NormalizeETagPolicy](docs/core/NormalizeETagPolicy)
  - [RequestIdPolicy](docs/core/RequestIdPolicy)
  - [UserAgentPolicy](docs/core/UserAgentPolicy)
  - [HTTPHeader](docs/core/HTTPHeader):​
    Common HTTP headers.
  - [HTTPMethod](docs/core/HTTPMethod)
  - [HTTPRequest](docs/core/HTTPRequest)
  - [HTTPResponse](docs/core/HTTPResponse)
  - [TelemetryOptions](docs/core/TelemetryOptions):​
    Options for configuring telemetry sent by the service client.
  - [TransportOptions](docs/core/TransportOptions)
  - [URLHTTPResponse](docs/core/URLHTTPResponse)
  - [URLSessionTransport](docs/core/URLSessionTransport)
  - [DeviceProviders](docs/core/DeviceProviders)
  - [ApplicationUtil](docs/core/ApplicationUtil)
  - [Date.Format](docs/core/Date_Format)
  - [CryptoAlgorithm](docs/core/CryptoAlgorithm):​
    Crypto HMAC algorithms and digest lengths
  - [KeychainUtil](docs/core/KeychainUtil)
  - [ReachabilityManager](docs/core/ReachabilityManager)
  - [ConnectionType](docs/core/ConnectionType):​
    Defines the various connection types detected by reachability flags.
  - [NetworkReachabilityStatus](docs/core/NetworkReachabilityStatus):​
    Defines the various states of network reachability.

# Protocols

  - [AzureTask](docs/core/AzureTask):​
    A handle for an asynchronous operation that can be canceled.
  - [ClientLogger](docs/core/ClientLogger)
  - [PageableClient](docs/core/PageableClient):​
    Protocol which allows clients to customize how they work with Paged Collections.
  - [XMLModel](docs/core/XMLModel):​
    Protocol that ensures all XML models have  a method that returns metadata
    necessary to convert an XML payload to a JSON payload.
  - [AzureClientOptions](docs/core/AzureClientOptions):​
    Protocol for baseline options for individual service clients.
  - [AzureOptions](docs/core/AzureOptions):​
    Protocol for baseline options for individual client API calls.
  - [PipelineContextSupporting](docs/core/PipelineContextSupporting)
  - [PipelineStage](docs/core/PipelineStage):​
    Protocol for implementing pipeline stages.
  - [AzureCredential](docs/core/AzureCredential)
  - [TokenCredential](docs/core/TokenCredential)
  - [Authenticating](docs/core/Authenticating)
  - [DataStringConvertible](docs/core/DataStringConvertible)
  - [HTTPTransportStage](docs/core/HTTPTransportStage)
  - [BundleInfoProvider](docs/core/BundleInfoProvider)
  - [LocaleInfoProvider](docs/core/LocaleInfoProvider)
  - [PlatformInfoProvider](docs/core/PlatformInfoProvider)
  - [Copyable](docs/core/Copyable)
  - [ReachabilityManagerType](docs/core/ReachabilityManagerType):​
    The `ReachabilityManagerType` describes entities that listen for reachability changes of hosts
    and addresses for both WWAN and WiFi network interfaces.

# Operators

  - [==(lhs:​rhs:​)](docs/core/==\(lhs:​rhs:​\)):​
    Returns whether the two network reachability status values are equal.

# Global Typealiases

  - [Continuation](docs/core/Continuation)
  - [ResultHandler](docs/core/ResultHandler)
  - [HTTPResultHandler](docs/core/HTTPResultHandler)
  - [PipelineStageResultHandler](docs/core/PipelineStageResultHandler)
  - [OnRequestCompletionHandler](docs/core/OnRequestCompletionHandler)
  - [OnResponseCompletionHandler](docs/core/OnResponseCompletionHandler)
  - [OnErrorCompletionHandler](docs/core/OnErrorCompletionHandler)
  - [TokenCompletionHandler](docs/core/TokenCompletionHandler)
  - [HTTPHeaders](docs/core/HTTPHeaders):​
    A dictionary of `HTTPHeader` values.
  - [ReachabilityStatusListener](docs/core/ReachabilityStatusListener):​
    A closure executed when the network reachability status changes. The closure takes a single argument:​ the
    network reachability status.
  - [QueryParameter](docs/core/QueryParameter)
