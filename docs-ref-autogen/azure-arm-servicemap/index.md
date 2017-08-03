# Package azure-arm-servicemap
## Classes
| Class Name | Description |
|---|---|
| @azure-arm-servicemap.ServicemapManagementClient |Initializes a new instance of the ServicemapManagementClient class.|
| @azure-arm-servicemap.ServiceMap |Class representing a ServiceMap.|
| @azure-arm-servicemap.Summaries |Class representing a Summaries.|
| @azure-arm-servicemap.Processes |Class representing a Processes.|
| @azure-arm-servicemap.Ports |Class representing a Ports.|
| @azure-arm-servicemap.Maps |Class representing a Maps.|
| @azure-arm-servicemap.Machines |Class representing a Machines.|
| @azure-arm-servicemap.MachineGroups |Class representing a MachineGroups.|
| @azure-arm-servicemap.ClientGroups |Class representing a ClientGroups.|
| @azure-arm-servicemap.VirtualMachineConfiguration |Describes the virtualizaton-related configuration of a machine.|
| @azure-arm-servicemap.Timezone |Describes a timezone.|
| @azure-arm-servicemap.SummaryProperties |Base for all summaries.|
| @azure-arm-servicemap.Summary |Base for all resource summaries.|
| @azure-arm-servicemap.SingleMachineDependencyMapRequest |Specifies the computation of a single server dependency map. A single server dependency map includes all direct dependencies of a given machine.|
| @azure-arm-servicemap.ResourceReference |Represents a reference to another resource.|
| @azure-arm-servicemap.Resource |Resource model definition.|
| @azure-arm-servicemap.RelationshipProperties |Relationship properties.|
| @azure-arm-servicemap.Relationship |A typed relationship between two entities.|
| @azure-arm-servicemap.ProcessUser |Describes the user under which a process is running.|
| @azure-arm-servicemap.ProcessReference |Reference to a process.|
| @azure-arm-servicemap.ProcessDetails |Describes process metadata.|
| @azure-arm-servicemap.ProcessCollection |Collection of Process resources.|
| @azure-arm-servicemap.Process |A process resource represents a process running on a machine. The process may be actively *monitored*, i.e., a Dependency Agent is running on its machine, or *discovered*, i.e., its existence was inferred by observing the data stream from monitored machines. A process resource represents a pool of actual operating system resources that share command lines and metadata. As the process pool evolves over time, prior versions of the process resource are preserved and available for access. A process is live during an interval of time, if that process is executing during (parts) of that interval|
| @azure-arm-servicemap.PortReference |Reference to a port.|
| @azure-arm-servicemap.PortCollection |Collection of Port resources.|
| @azure-arm-servicemap.Port |A port resource represents a server port on a machine. The port may be actively *monitored*, i.e., a Dependency Agent is running on its machine, or *discovered*, i.e., its existence was inferred by observing the data stream from monitored machines. A port is live during an interval of time, if that port had associated activity during (parts) of that interval.|
| @azure-arm-servicemap.OperatingSystemConfiguration |Describes the configuration of the operating system of a machine.|
| @azure-arm-servicemap.NetworkConfiguration |Describes the network configuration of a machine.|
| @azure-arm-servicemap.MapResponse |Specified the contents of a map response.|
| @azure-arm-servicemap.MapRequest |Specifies the contents of request to generate a map.|
| @azure-arm-servicemap.MapNodes |The nodes (entities) of a map.|
| @azure-arm-servicemap.MapEdges |The edges (relationships) of a map.|
| @azure-arm-servicemap.Map |A map of resources and relationships between them.|
| @azure-arm-servicemap.MachinesSummary |A summary of the machines in the workspace.|
| @azure-arm-servicemap.MachineResourcesConfiguration |Describes the resources of a machine.|
| @azure-arm-servicemap.MachineReferenceWithHints |A machine reference with a hint of the machine's name and operating system.|
| @azure-arm-servicemap.MachineReference |Reference to a machine.|
| @azure-arm-servicemap.MachineGroupMapRequest |Specifies the computation of a machine group dependency map. A machine group dependency map includes all direct dependencies of a group of machines.|
| @azure-arm-servicemap.MachineGroupCollection |Collection of Machine Group resources.|
| @azure-arm-servicemap.MachineGroup |A user-defined logical grouping of machines.|
| @azure-arm-servicemap.MachineCountsByOperatingSystem |Machines by operating system.|
| @azure-arm-servicemap.MachineCollection |Collection of Machine resources.|
| @azure-arm-servicemap.Machine |A machine resource represents a discovered computer system. It can be *monitored*, i.e., a Dependency Agent is running on it, or *discovered*, i.e., its existence was inferred by observing the data stream from monitored machines. As machines change, prior versions of the machine resource are preserved and available for access. A machine is live during an interval of time, if either its Dependency Agent has reported data during (parts) of that interval, or a Dependency agent running on other machines has reported activity associated with the machine.|
| @azure-arm-servicemap.Liveness |Specifies the contents of a check liveness response.|
| @azure-arm-servicemap.Ipv6NetworkInterface |Describes an IPv6 network interface.|
| @azure-arm-servicemap.Ipv4NetworkInterface |Describes an IPv4 network interface.|
| @azure-arm-servicemap.HypervisorConfiguration |Describes the hypervisor configuration of a machine.|
| @azure-arm-servicemap.ErrorResponse |An error response from the API.|
| @azure-arm-servicemap.ErrorModel |Error details.|
| @azure-arm-servicemap.CoreResource |Marker resource for the core Service Map resources|
| @azure-arm-servicemap.ConnectionCollection |Collection of Connection resources.|
| @azure-arm-servicemap.Connection |A network connection.|
| @azure-arm-servicemap.ClientGroupMembersCount |Specifies the number of members in a client group.|
| @azure-arm-servicemap.ClientGroupMembersCollection |Collection of ClientGroupMember resources.|
| @azure-arm-servicemap.ClientGroupMember |Represents a member of a client group|
| @azure-arm-servicemap.ClientGroup |Represents a collection of clients of a resource. A client group can represent the clients of a port, process, or a machine.|
| @azure-arm-servicemap.AgentConfiguration |Describes the configuration of the Dependency Agent installed on a machine.|
| @azure-arm-servicemap.Acceptor |A process accepting on a port.|
