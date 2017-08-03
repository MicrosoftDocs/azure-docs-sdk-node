# Package azure-arm-insights
## Classes
| Class Name | Description |
|---|---|
| @azure-arm-insights.ServiceDiagnosticSettingsOperations |Class representing a ServiceDiagnosticSettingsOperations.|
| @azure-arm-insights.LogProfiles |Class representing a LogProfiles.|
| @azure-arm-insights.AutoscaleSettings |Class representing a AutoscaleSettings.|
| @azure-arm-insights.AlertRules |Class representing a AlertRules.|
| @azure-arm-insights.AlertRuleIncidents |Class representing a AlertRuleIncidents.|
| @azure-arm-insights.WebhookNotification |Webhook notification of an autoscale event.|
| @azure-arm-insights.TimeWindow |A specific date-time for the profile.|
| @azure-arm-insights.ThresholdRuleCondition |A rule condition based on a metric crossing a threshold.|
| @azure-arm-insights.ServiceDiagnosticSettingsResource |Description of a service diagnostic setting|
| @azure-arm-insights.ScaleRule |A rule that provide the triggers and parameters for the scaling action.|
| @azure-arm-insights.ScaleCapacity |The number of instances that can be used during this profile.|
| @azure-arm-insights.ScaleAction |The parameters for the scaling action.|
| @azure-arm-insights.RuleWebhookAction |Specifies the action to post to service when the rule condition is evaluated. The discriminator is always RuleWebhookAction in this case.|
| @azure-arm-insights.RuleMetricDataSource |A rule metric data source. The discriminator value is always RuleMetricDataSource in this case.|
| @azure-arm-insights.RuleManagementEventDataSource |A rule management event data source. The discriminator fields is always RuleManagementEventDataSource in this case.|
| @azure-arm-insights.RuleManagementEventClaimsDataSource |The claims for a rule management event data source.|
| @azure-arm-insights.RuleEmailAction |Specifies the action to send email when the rule condition is evaluated. The discriminator is always RuleEmailAction in this case.|
| @azure-arm-insights.RuleDataSource |The resource from which the rule collects its data.|
| @azure-arm-insights.RuleCondition |The condition that results in the alert rule being activated.|
| @azure-arm-insights.RuleAction |The action that is performed when the alert rule becomes active, and when an alert condition is resolved.|
| @azure-arm-insights.RetentionPolicy |Specifies the retention policy for the log.|
| @azure-arm-insights.Resource |An azure resource object|
| @azure-arm-insights.RecurrentSchedule |The scheduling constraints for when the profile begins.|
| @azure-arm-insights.Recurrence |The repeating times at which this profile begins. This element is not used if the FixedDate element is used.|
| @azure-arm-insights.MetricTrigger |The trigger that results in a scaling action.|
| @azure-arm-insights.MetricSettings |Part of MultiTenantDiagnosticSettings. Specifies the settings for a particular metric.|
| @azure-arm-insights.ManagementEventRuleCondition |A management event rule condition.|
| @azure-arm-insights.ManagementEventAggregationCondition |How the data that is collected should be combined over time.|
| @azure-arm-insights.LogSettings |Part of MultiTenantDiagnosticSettings. Specifies the settings for a particular log.|
| @azure-arm-insights.LogProfileResource |The log profile resource.|
| @azure-arm-insights.LogProfileCollection |Represents a collection of log profiles.|
| @azure-arm-insights.LocationThresholdRuleCondition |A rule condition based on a certain number of locations failing.|
| @azure-arm-insights.IncidentListResult |The List incidents operation response.|
| @azure-arm-insights.Incident |An alert incident indicates the activation status of an alert rule.|
| @azure-arm-insights.EmailNotification |Email notification of an autoscale event.|
| @azure-arm-insights.AutoscaleSettingResourceCollection |Represents a collection of autoscale setting resources.|
| @azure-arm-insights.AutoscaleSettingResource |The autoscale setting resource.|
| @azure-arm-insights.AutoscaleProfile |Autoscale profile.|
| @azure-arm-insights.AutoscaleNotification |Autoscale notification.|
| @azure-arm-insights.AlertRuleResourceCollection |Represents a collection of alert rule resources.|
| @azure-arm-insights.AlertRuleResource |The alert rule resource.|
| @azure-arm-insights.InsightsManagementClient |Class representing a InsightsManagementClient.|
