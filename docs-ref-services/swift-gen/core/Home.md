# Types

  - [ClientLogLevel](ClientLogLevel)
  - [ClientLoggers](ClientLoggers)
  - [NullClientLogger](NullClientLogger)
  - [PrintLogger](PrintLogger)
  - [NSLogger](NSLogger)
  - [OSLogger](OSLogger)
  - [CancellationToken](CancellationToken)
  - [PagedCodingKeys](PagedCodingKeys):​
    Defines the property keys used to conform to the Azure paging design.
  - [PagedCollection](PagedCollection):​
    A collection that fetches paged results in a lazy fashion.
  - [PagedCollection.PagedItemSyncIterator](PagedCollection_PagedItemSyncIterator)
  - [MatchCondition](MatchCondition):​
    An enum to describe match conditions.
  - [ElementToJsonStrategy](ElementToJsonStrategy)
  - [AttributeToJsonStrategy](AttributeToJsonStrategy)
  - [XMLMetadata](XMLMetadata):​
    Class containing metadata needed to translate an XML payload into the desired
    JSON payload.
  - [XMLMap](XMLMap):​
    A map of XML document path keys and metadata needed to convert an XML
    payload into a JSON payload.
  - [AzureError](AzureError)
  - [PipelineClient](PipelineClient):​
    Base class for all pipeline-based service clients.
  - [ContextKey](ContextKey)
  - [PipelineContext](PipelineContext)
  - [PipelineRequest](PipelineRequest)
  - [PipelineResponse](PipelineResponse)
  - [AddDatePolicy](AddDatePolicy)
  - [AccessToken](AccessToken)
  - [AnonymousAccessPolicy](AnonymousAccessPolicy)
  - [BearerTokenCredentialPolicy](BearerTokenCredentialPolicy)
  - [ContentDecodePolicy](ContentDecodePolicy)
  - [HeadersPolicy](HeadersPolicy)
  - [HeadersValidationPolicy](HeadersValidationPolicy)
  - [LoggingPolicy](LoggingPolicy)
  - [CurlFormattedRequestLoggingPolicy](CurlFormattedRequestLoggingPolicy)
  - [NormalizeETagPolicy](NormalizeETagPolicy)
  - [RequestIdPolicy](RequestIdPolicy)
  - [UserAgentPolicy](UserAgentPolicy)
  - [HTTPHeader](HTTPHeader):​
    Common HTTP headers.
  - [HTTPMethod](HTTPMethod)
  - [HTTPRequest](HTTPRequest)
  - [HTTPResponse](HTTPResponse)
  - [TelemetryOptions](TelemetryOptions):​
    Options for configuring telemetry sent by the service client.
  - [TransportOptions](TransportOptions)
  - [URLHTTPResponse](URLHTTPResponse)
  - [URLSessionTransport](URLSessionTransport)
  - [DeviceProviders](DeviceProviders)
  - [ApplicationUtil](ApplicationUtil)
  - [Date.Format](Date_Format)
  - [CryptoAlgorithm](CryptoAlgorithm):​
    Crypto HMAC algorithms and digest lengths
  - [KeychainUtil](KeychainUtil)
  - [ReachabilityManager](ReachabilityManager)
  - [ConnectionType](ConnectionType):​
    Defines the various connection types detected by reachability flags.
  - [NetworkReachabilityStatus](NetworkReachabilityStatus):​
    Defines the various states of network reachability.

# Protocols

  - [AzureTask](AzureTask):​
    A handle for an asynchronous operation that can be canceled.
  - [ClientLogger](ClientLogger)
  - [PageableClient](PageableClient):​
    Protocol which allows clients to customize how they work with Paged Collections.
  - [XMLModel](XMLModel):​
    Protocol that ensures all XML models have  a method that returns metadata
    necessary to convert an XML payload to a JSON payload.
  - [AzureClientOptions](AzureClientOptions):​
    Protocol for baseline options for individual service clients.
  - [AzureOptions](AzureOptions):​
    Protocol for baseline options for individual client API calls.
  - [PipelineContextSupporting](PipelineContextSupporting)
  - [PipelineStage](PipelineStage):​
    Protocol for implementing pipeline stages.
  - [AzureCredential](AzureCredential)
  - [TokenCredential](TokenCredential)
  - [Authenticating](Authenticating)
  - [DataStringConvertible](DataStringConvertible)
  - [HTTPTransportStage](HTTPTransportStage)
  - [BundleInfoProvider](BundleInfoProvider)
  - [LocaleInfoProvider](LocaleInfoProvider)
  - [PlatformInfoProvider](PlatformInfoProvider)
  - [Copyable](Copyable)
  - [ReachabilityManagerType](ReachabilityManagerType):​
    The `ReachabilityManagerType` describes entities that listen for reachability changes of hosts
    and addresses for both WWAN and WiFi network interfaces.

# Operators

  - [==(lhs:​rhs:​)](==\(lhs:​rhs:​\)):​
    Returns whether the two network reachability status values are equal.

# Global Typealiases

  - [Continuation](Continuation)
  - [ResultHandler](ResultHandler)
  - [HTTPResultHandler](HTTPResultHandler)
  - [PipelineStageResultHandler](PipelineStageResultHandler)
  - [OnRequestCompletionHandler](OnRequestCompletionHandler)
  - [OnResponseCompletionHandler](OnResponseCompletionHandler)
  - [OnErrorCompletionHandler](OnErrorCompletionHandler)
  - [TokenCompletionHandler](TokenCompletionHandler)
  - [HTTPHeaders](HTTPHeaders):​
    A dictionary of `HTTPHeader` values.
  - [ReachabilityStatusListener](ReachabilityStatusListener):​
    A closure executed when the network reachability status changes. The closure takes a single argument:​ the
    network reachability status.
  - [QueryParameter](QueryParameter)
