// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  limitedParseDouble as __limitedParseDouble,
  parseEpochTimestamp as __parseEpochTimestamp,
  serializeFloat as __serializeFloat,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  BatchCreatePartitionCommandInput,
  BatchCreatePartitionCommandOutput,
} from "../commands/BatchCreatePartitionCommand";
import {
  BatchDeleteConnectionCommandInput,
  BatchDeleteConnectionCommandOutput,
} from "../commands/BatchDeleteConnectionCommand";
import {
  BatchDeletePartitionCommandInput,
  BatchDeletePartitionCommandOutput,
} from "../commands/BatchDeletePartitionCommand";
import { BatchDeleteTableCommandInput, BatchDeleteTableCommandOutput } from "../commands/BatchDeleteTableCommand";
import {
  BatchDeleteTableVersionCommandInput,
  BatchDeleteTableVersionCommandOutput,
} from "../commands/BatchDeleteTableVersionCommand";
import { BatchGetBlueprintsCommandInput, BatchGetBlueprintsCommandOutput } from "../commands/BatchGetBlueprintsCommand";
import { BatchGetCrawlersCommandInput, BatchGetCrawlersCommandOutput } from "../commands/BatchGetCrawlersCommand";
import {
  BatchGetCustomEntityTypesCommandInput,
  BatchGetCustomEntityTypesCommandOutput,
} from "../commands/BatchGetCustomEntityTypesCommand";
import {
  BatchGetDevEndpointsCommandInput,
  BatchGetDevEndpointsCommandOutput,
} from "../commands/BatchGetDevEndpointsCommand";
import { BatchGetJobsCommandInput, BatchGetJobsCommandOutput } from "../commands/BatchGetJobsCommand";
import { BatchGetPartitionCommandInput, BatchGetPartitionCommandOutput } from "../commands/BatchGetPartitionCommand";
import { BatchGetTriggersCommandInput, BatchGetTriggersCommandOutput } from "../commands/BatchGetTriggersCommand";
import { BatchGetWorkflowsCommandInput, BatchGetWorkflowsCommandOutput } from "../commands/BatchGetWorkflowsCommand";
import { BatchStopJobRunCommandInput, BatchStopJobRunCommandOutput } from "../commands/BatchStopJobRunCommand";
import {
  BatchUpdatePartitionCommandInput,
  BatchUpdatePartitionCommandOutput,
} from "../commands/BatchUpdatePartitionCommand";
import { CancelMLTaskRunCommandInput, CancelMLTaskRunCommandOutput } from "../commands/CancelMLTaskRunCommand";
import { CancelStatementCommandInput, CancelStatementCommandOutput } from "../commands/CancelStatementCommand";
import {
  CheckSchemaVersionValidityCommandInput,
  CheckSchemaVersionValidityCommandOutput,
} from "../commands/CheckSchemaVersionValidityCommand";
import { CreateBlueprintCommandInput, CreateBlueprintCommandOutput } from "../commands/CreateBlueprintCommand";
import { CreateClassifierCommandInput, CreateClassifierCommandOutput } from "../commands/CreateClassifierCommand";
import { CreateConnectionCommandInput, CreateConnectionCommandOutput } from "../commands/CreateConnectionCommand";
import { CreateCrawlerCommandInput, CreateCrawlerCommandOutput } from "../commands/CreateCrawlerCommand";
import {
  CreateCustomEntityTypeCommandInput,
  CreateCustomEntityTypeCommandOutput,
} from "../commands/CreateCustomEntityTypeCommand";
import { CreateDatabaseCommandInput, CreateDatabaseCommandOutput } from "../commands/CreateDatabaseCommand";
import { CreateDevEndpointCommandInput, CreateDevEndpointCommandOutput } from "../commands/CreateDevEndpointCommand";
import { CreateJobCommandInput, CreateJobCommandOutput } from "../commands/CreateJobCommand";
import { CreateMLTransformCommandInput, CreateMLTransformCommandOutput } from "../commands/CreateMLTransformCommand";
import { CreatePartitionCommandInput, CreatePartitionCommandOutput } from "../commands/CreatePartitionCommand";
import {
  CreatePartitionIndexCommandInput,
  CreatePartitionIndexCommandOutput,
} from "../commands/CreatePartitionIndexCommand";
import { CreateRegistryCommandInput, CreateRegistryCommandOutput } from "../commands/CreateRegistryCommand";
import { CreateSchemaCommandInput, CreateSchemaCommandOutput } from "../commands/CreateSchemaCommand";
import { CreateScriptCommandInput, CreateScriptCommandOutput } from "../commands/CreateScriptCommand";
import {
  CreateSecurityConfigurationCommandInput,
  CreateSecurityConfigurationCommandOutput,
} from "../commands/CreateSecurityConfigurationCommand";
import { CreateSessionCommandInput, CreateSessionCommandOutput } from "../commands/CreateSessionCommand";
import { CreateTableCommandInput, CreateTableCommandOutput } from "../commands/CreateTableCommand";
import { CreateTriggerCommandInput, CreateTriggerCommandOutput } from "../commands/CreateTriggerCommand";
import {
  CreateUserDefinedFunctionCommandInput,
  CreateUserDefinedFunctionCommandOutput,
} from "../commands/CreateUserDefinedFunctionCommand";
import { CreateWorkflowCommandInput, CreateWorkflowCommandOutput } from "../commands/CreateWorkflowCommand";
import { DeleteBlueprintCommandInput, DeleteBlueprintCommandOutput } from "../commands/DeleteBlueprintCommand";
import { DeleteClassifierCommandInput, DeleteClassifierCommandOutput } from "../commands/DeleteClassifierCommand";
import {
  DeleteColumnStatisticsForPartitionCommandInput,
  DeleteColumnStatisticsForPartitionCommandOutput,
} from "../commands/DeleteColumnStatisticsForPartitionCommand";
import {
  DeleteColumnStatisticsForTableCommandInput,
  DeleteColumnStatisticsForTableCommandOutput,
} from "../commands/DeleteColumnStatisticsForTableCommand";
import { DeleteConnectionCommandInput, DeleteConnectionCommandOutput } from "../commands/DeleteConnectionCommand";
import { DeleteCrawlerCommandInput, DeleteCrawlerCommandOutput } from "../commands/DeleteCrawlerCommand";
import {
  DeleteCustomEntityTypeCommandInput,
  DeleteCustomEntityTypeCommandOutput,
} from "../commands/DeleteCustomEntityTypeCommand";
import { DeleteDatabaseCommandInput, DeleteDatabaseCommandOutput } from "../commands/DeleteDatabaseCommand";
import { DeleteDevEndpointCommandInput, DeleteDevEndpointCommandOutput } from "../commands/DeleteDevEndpointCommand";
import { DeleteJobCommandInput, DeleteJobCommandOutput } from "../commands/DeleteJobCommand";
import { DeleteMLTransformCommandInput, DeleteMLTransformCommandOutput } from "../commands/DeleteMLTransformCommand";
import { DeletePartitionCommandInput, DeletePartitionCommandOutput } from "../commands/DeletePartitionCommand";
import {
  DeletePartitionIndexCommandInput,
  DeletePartitionIndexCommandOutput,
} from "../commands/DeletePartitionIndexCommand";
import { DeleteRegistryCommandInput, DeleteRegistryCommandOutput } from "../commands/DeleteRegistryCommand";
import {
  DeleteResourcePolicyCommandInput,
  DeleteResourcePolicyCommandOutput,
} from "../commands/DeleteResourcePolicyCommand";
import { DeleteSchemaCommandInput, DeleteSchemaCommandOutput } from "../commands/DeleteSchemaCommand";
import {
  DeleteSchemaVersionsCommandInput,
  DeleteSchemaVersionsCommandOutput,
} from "../commands/DeleteSchemaVersionsCommand";
import {
  DeleteSecurityConfigurationCommandInput,
  DeleteSecurityConfigurationCommandOutput,
} from "../commands/DeleteSecurityConfigurationCommand";
import { DeleteSessionCommandInput, DeleteSessionCommandOutput } from "../commands/DeleteSessionCommand";
import { DeleteTableCommandInput, DeleteTableCommandOutput } from "../commands/DeleteTableCommand";
import { DeleteTableVersionCommandInput, DeleteTableVersionCommandOutput } from "../commands/DeleteTableVersionCommand";
import { DeleteTriggerCommandInput, DeleteTriggerCommandOutput } from "../commands/DeleteTriggerCommand";
import {
  DeleteUserDefinedFunctionCommandInput,
  DeleteUserDefinedFunctionCommandOutput,
} from "../commands/DeleteUserDefinedFunctionCommand";
import { DeleteWorkflowCommandInput, DeleteWorkflowCommandOutput } from "../commands/DeleteWorkflowCommand";
import { GetBlueprintCommandInput, GetBlueprintCommandOutput } from "../commands/GetBlueprintCommand";
import { GetBlueprintRunCommandInput, GetBlueprintRunCommandOutput } from "../commands/GetBlueprintRunCommand";
import { GetBlueprintRunsCommandInput, GetBlueprintRunsCommandOutput } from "../commands/GetBlueprintRunsCommand";
import {
  GetCatalogImportStatusCommandInput,
  GetCatalogImportStatusCommandOutput,
} from "../commands/GetCatalogImportStatusCommand";
import { GetClassifierCommandInput, GetClassifierCommandOutput } from "../commands/GetClassifierCommand";
import { GetClassifiersCommandInput, GetClassifiersCommandOutput } from "../commands/GetClassifiersCommand";
import {
  GetColumnStatisticsForPartitionCommandInput,
  GetColumnStatisticsForPartitionCommandOutput,
} from "../commands/GetColumnStatisticsForPartitionCommand";
import {
  GetColumnStatisticsForTableCommandInput,
  GetColumnStatisticsForTableCommandOutput,
} from "../commands/GetColumnStatisticsForTableCommand";
import { GetConnectionCommandInput, GetConnectionCommandOutput } from "../commands/GetConnectionCommand";
import { GetConnectionsCommandInput, GetConnectionsCommandOutput } from "../commands/GetConnectionsCommand";
import { GetCrawlerCommandInput, GetCrawlerCommandOutput } from "../commands/GetCrawlerCommand";
import { GetCrawlerMetricsCommandInput, GetCrawlerMetricsCommandOutput } from "../commands/GetCrawlerMetricsCommand";
import { GetCrawlersCommandInput, GetCrawlersCommandOutput } from "../commands/GetCrawlersCommand";
import {
  GetCustomEntityTypeCommandInput,
  GetCustomEntityTypeCommandOutput,
} from "../commands/GetCustomEntityTypeCommand";
import { GetDatabaseCommandInput, GetDatabaseCommandOutput } from "../commands/GetDatabaseCommand";
import { GetDatabasesCommandInput, GetDatabasesCommandOutput } from "../commands/GetDatabasesCommand";
import {
  GetDataCatalogEncryptionSettingsCommandInput,
  GetDataCatalogEncryptionSettingsCommandOutput,
} from "../commands/GetDataCatalogEncryptionSettingsCommand";
import { GetDataflowGraphCommandInput, GetDataflowGraphCommandOutput } from "../commands/GetDataflowGraphCommand";
import { GetDevEndpointCommandInput, GetDevEndpointCommandOutput } from "../commands/GetDevEndpointCommand";
import { GetDevEndpointsCommandInput, GetDevEndpointsCommandOutput } from "../commands/GetDevEndpointsCommand";
import { GetJobBookmarkCommandInput, GetJobBookmarkCommandOutput } from "../commands/GetJobBookmarkCommand";
import { GetJobCommandInput, GetJobCommandOutput } from "../commands/GetJobCommand";
import { GetJobRunCommandInput, GetJobRunCommandOutput } from "../commands/GetJobRunCommand";
import { GetJobRunsCommandInput, GetJobRunsCommandOutput } from "../commands/GetJobRunsCommand";
import { GetJobsCommandInput, GetJobsCommandOutput } from "../commands/GetJobsCommand";
import { GetMappingCommandInput, GetMappingCommandOutput } from "../commands/GetMappingCommand";
import { GetMLTaskRunCommandInput, GetMLTaskRunCommandOutput } from "../commands/GetMLTaskRunCommand";
import { GetMLTaskRunsCommandInput, GetMLTaskRunsCommandOutput } from "../commands/GetMLTaskRunsCommand";
import { GetMLTransformCommandInput, GetMLTransformCommandOutput } from "../commands/GetMLTransformCommand";
import { GetMLTransformsCommandInput, GetMLTransformsCommandOutput } from "../commands/GetMLTransformsCommand";
import { GetPartitionCommandInput, GetPartitionCommandOutput } from "../commands/GetPartitionCommand";
import {
  GetPartitionIndexesCommandInput,
  GetPartitionIndexesCommandOutput,
} from "../commands/GetPartitionIndexesCommand";
import { GetPartitionsCommandInput, GetPartitionsCommandOutput } from "../commands/GetPartitionsCommand";
import { GetPlanCommandInput, GetPlanCommandOutput } from "../commands/GetPlanCommand";
import { GetRegistryCommandInput, GetRegistryCommandOutput } from "../commands/GetRegistryCommand";
import {
  GetResourcePoliciesCommandInput,
  GetResourcePoliciesCommandOutput,
} from "../commands/GetResourcePoliciesCommand";
import { GetResourcePolicyCommandInput, GetResourcePolicyCommandOutput } from "../commands/GetResourcePolicyCommand";
import {
  GetSchemaByDefinitionCommandInput,
  GetSchemaByDefinitionCommandOutput,
} from "../commands/GetSchemaByDefinitionCommand";
import { GetSchemaCommandInput, GetSchemaCommandOutput } from "../commands/GetSchemaCommand";
import { GetSchemaVersionCommandInput, GetSchemaVersionCommandOutput } from "../commands/GetSchemaVersionCommand";
import {
  GetSchemaVersionsDiffCommandInput,
  GetSchemaVersionsDiffCommandOutput,
} from "../commands/GetSchemaVersionsDiffCommand";
import {
  GetSecurityConfigurationCommandInput,
  GetSecurityConfigurationCommandOutput,
} from "../commands/GetSecurityConfigurationCommand";
import {
  GetSecurityConfigurationsCommandInput,
  GetSecurityConfigurationsCommandOutput,
} from "../commands/GetSecurityConfigurationsCommand";
import { GetSessionCommandInput, GetSessionCommandOutput } from "../commands/GetSessionCommand";
import { GetStatementCommandInput, GetStatementCommandOutput } from "../commands/GetStatementCommand";
import { GetTableCommandInput, GetTableCommandOutput } from "../commands/GetTableCommand";
import { GetTablesCommandInput, GetTablesCommandOutput } from "../commands/GetTablesCommand";
import { GetTableVersionCommandInput, GetTableVersionCommandOutput } from "../commands/GetTableVersionCommand";
import { GetTableVersionsCommandInput, GetTableVersionsCommandOutput } from "../commands/GetTableVersionsCommand";
import { GetTagsCommandInput, GetTagsCommandOutput } from "../commands/GetTagsCommand";
import { GetTriggerCommandInput, GetTriggerCommandOutput } from "../commands/GetTriggerCommand";
import { GetTriggersCommandInput, GetTriggersCommandOutput } from "../commands/GetTriggersCommand";
import {
  GetUnfilteredPartitionMetadataCommandInput,
  GetUnfilteredPartitionMetadataCommandOutput,
} from "../commands/GetUnfilteredPartitionMetadataCommand";
import {
  GetUnfilteredPartitionsMetadataCommandInput,
  GetUnfilteredPartitionsMetadataCommandOutput,
} from "../commands/GetUnfilteredPartitionsMetadataCommand";
import {
  GetUnfilteredTableMetadataCommandInput,
  GetUnfilteredTableMetadataCommandOutput,
} from "../commands/GetUnfilteredTableMetadataCommand";
import {
  GetUserDefinedFunctionCommandInput,
  GetUserDefinedFunctionCommandOutput,
} from "../commands/GetUserDefinedFunctionCommand";
import {
  GetUserDefinedFunctionsCommandInput,
  GetUserDefinedFunctionsCommandOutput,
} from "../commands/GetUserDefinedFunctionsCommand";
import { GetWorkflowCommandInput, GetWorkflowCommandOutput } from "../commands/GetWorkflowCommand";
import { GetWorkflowRunCommandInput, GetWorkflowRunCommandOutput } from "../commands/GetWorkflowRunCommand";
import {
  GetWorkflowRunPropertiesCommandInput,
  GetWorkflowRunPropertiesCommandOutput,
} from "../commands/GetWorkflowRunPropertiesCommand";
import { GetWorkflowRunsCommandInput, GetWorkflowRunsCommandOutput } from "../commands/GetWorkflowRunsCommand";
import {
  ImportCatalogToGlueCommandInput,
  ImportCatalogToGlueCommandOutput,
} from "../commands/ImportCatalogToGlueCommand";
import { ListBlueprintsCommandInput, ListBlueprintsCommandOutput } from "../commands/ListBlueprintsCommand";
import { ListCrawlersCommandInput, ListCrawlersCommandOutput } from "../commands/ListCrawlersCommand";
import { ListCrawlsCommandInput, ListCrawlsCommandOutput } from "../commands/ListCrawlsCommand";
import {
  ListCustomEntityTypesCommandInput,
  ListCustomEntityTypesCommandOutput,
} from "../commands/ListCustomEntityTypesCommand";
import { ListDevEndpointsCommandInput, ListDevEndpointsCommandOutput } from "../commands/ListDevEndpointsCommand";
import { ListJobsCommandInput, ListJobsCommandOutput } from "../commands/ListJobsCommand";
import { ListMLTransformsCommandInput, ListMLTransformsCommandOutput } from "../commands/ListMLTransformsCommand";
import { ListRegistriesCommandInput, ListRegistriesCommandOutput } from "../commands/ListRegistriesCommand";
import { ListSchemasCommandInput, ListSchemasCommandOutput } from "../commands/ListSchemasCommand";
import { ListSchemaVersionsCommandInput, ListSchemaVersionsCommandOutput } from "../commands/ListSchemaVersionsCommand";
import { ListSessionsCommandInput, ListSessionsCommandOutput } from "../commands/ListSessionsCommand";
import { ListStatementsCommandInput, ListStatementsCommandOutput } from "../commands/ListStatementsCommand";
import { ListTriggersCommandInput, ListTriggersCommandOutput } from "../commands/ListTriggersCommand";
import { ListWorkflowsCommandInput, ListWorkflowsCommandOutput } from "../commands/ListWorkflowsCommand";
import {
  PutDataCatalogEncryptionSettingsCommandInput,
  PutDataCatalogEncryptionSettingsCommandOutput,
} from "../commands/PutDataCatalogEncryptionSettingsCommand";
import { PutResourcePolicyCommandInput, PutResourcePolicyCommandOutput } from "../commands/PutResourcePolicyCommand";
import {
  PutSchemaVersionMetadataCommandInput,
  PutSchemaVersionMetadataCommandOutput,
} from "../commands/PutSchemaVersionMetadataCommand";
import {
  PutWorkflowRunPropertiesCommandInput,
  PutWorkflowRunPropertiesCommandOutput,
} from "../commands/PutWorkflowRunPropertiesCommand";
import {
  QuerySchemaVersionMetadataCommandInput,
  QuerySchemaVersionMetadataCommandOutput,
} from "../commands/QuerySchemaVersionMetadataCommand";
import {
  RegisterSchemaVersionCommandInput,
  RegisterSchemaVersionCommandOutput,
} from "../commands/RegisterSchemaVersionCommand";
import {
  RemoveSchemaVersionMetadataCommandInput,
  RemoveSchemaVersionMetadataCommandOutput,
} from "../commands/RemoveSchemaVersionMetadataCommand";
import { ResetJobBookmarkCommandInput, ResetJobBookmarkCommandOutput } from "../commands/ResetJobBookmarkCommand";
import { ResumeWorkflowRunCommandInput, ResumeWorkflowRunCommandOutput } from "../commands/ResumeWorkflowRunCommand";
import { RunStatementCommandInput, RunStatementCommandOutput } from "../commands/RunStatementCommand";
import { SearchTablesCommandInput, SearchTablesCommandOutput } from "../commands/SearchTablesCommand";
import { StartBlueprintRunCommandInput, StartBlueprintRunCommandOutput } from "../commands/StartBlueprintRunCommand";
import { StartCrawlerCommandInput, StartCrawlerCommandOutput } from "../commands/StartCrawlerCommand";
import {
  StartCrawlerScheduleCommandInput,
  StartCrawlerScheduleCommandOutput,
} from "../commands/StartCrawlerScheduleCommand";
import {
  StartExportLabelsTaskRunCommandInput,
  StartExportLabelsTaskRunCommandOutput,
} from "../commands/StartExportLabelsTaskRunCommand";
import {
  StartImportLabelsTaskRunCommandInput,
  StartImportLabelsTaskRunCommandOutput,
} from "../commands/StartImportLabelsTaskRunCommand";
import { StartJobRunCommandInput, StartJobRunCommandOutput } from "../commands/StartJobRunCommand";
import {
  StartMLEvaluationTaskRunCommandInput,
  StartMLEvaluationTaskRunCommandOutput,
} from "../commands/StartMLEvaluationTaskRunCommand";
import {
  StartMLLabelingSetGenerationTaskRunCommandInput,
  StartMLLabelingSetGenerationTaskRunCommandOutput,
} from "../commands/StartMLLabelingSetGenerationTaskRunCommand";
import { StartTriggerCommandInput, StartTriggerCommandOutput } from "../commands/StartTriggerCommand";
import { StartWorkflowRunCommandInput, StartWorkflowRunCommandOutput } from "../commands/StartWorkflowRunCommand";
import { StopCrawlerCommandInput, StopCrawlerCommandOutput } from "../commands/StopCrawlerCommand";
import {
  StopCrawlerScheduleCommandInput,
  StopCrawlerScheduleCommandOutput,
} from "../commands/StopCrawlerScheduleCommand";
import { StopSessionCommandInput, StopSessionCommandOutput } from "../commands/StopSessionCommand";
import { StopTriggerCommandInput, StopTriggerCommandOutput } from "../commands/StopTriggerCommand";
import { StopWorkflowRunCommandInput, StopWorkflowRunCommandOutput } from "../commands/StopWorkflowRunCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateBlueprintCommandInput, UpdateBlueprintCommandOutput } from "../commands/UpdateBlueprintCommand";
import { UpdateClassifierCommandInput, UpdateClassifierCommandOutput } from "../commands/UpdateClassifierCommand";
import {
  UpdateColumnStatisticsForPartitionCommandInput,
  UpdateColumnStatisticsForPartitionCommandOutput,
} from "../commands/UpdateColumnStatisticsForPartitionCommand";
import {
  UpdateColumnStatisticsForTableCommandInput,
  UpdateColumnStatisticsForTableCommandOutput,
} from "../commands/UpdateColumnStatisticsForTableCommand";
import { UpdateConnectionCommandInput, UpdateConnectionCommandOutput } from "../commands/UpdateConnectionCommand";
import { UpdateCrawlerCommandInput, UpdateCrawlerCommandOutput } from "../commands/UpdateCrawlerCommand";
import {
  UpdateCrawlerScheduleCommandInput,
  UpdateCrawlerScheduleCommandOutput,
} from "../commands/UpdateCrawlerScheduleCommand";
import { UpdateDatabaseCommandInput, UpdateDatabaseCommandOutput } from "../commands/UpdateDatabaseCommand";
import { UpdateDevEndpointCommandInput, UpdateDevEndpointCommandOutput } from "../commands/UpdateDevEndpointCommand";
import { UpdateJobCommandInput, UpdateJobCommandOutput } from "../commands/UpdateJobCommand";
import { UpdateMLTransformCommandInput, UpdateMLTransformCommandOutput } from "../commands/UpdateMLTransformCommand";
import { UpdatePartitionCommandInput, UpdatePartitionCommandOutput } from "../commands/UpdatePartitionCommand";
import { UpdateRegistryCommandInput, UpdateRegistryCommandOutput } from "../commands/UpdateRegistryCommand";
import { UpdateSchemaCommandInput, UpdateSchemaCommandOutput } from "../commands/UpdateSchemaCommand";
import { UpdateTableCommandInput, UpdateTableCommandOutput } from "../commands/UpdateTableCommand";
import { UpdateTriggerCommandInput, UpdateTriggerCommandOutput } from "../commands/UpdateTriggerCommand";
import {
  UpdateUserDefinedFunctionCommandInput,
  UpdateUserDefinedFunctionCommandOutput,
} from "../commands/UpdateUserDefinedFunctionCommand";
import { UpdateWorkflowCommandInput, UpdateWorkflowCommandOutput } from "../commands/UpdateWorkflowCommand";
import { GlueServiceException as __BaseException } from "../models/GlueServiceException";
import {
  AccessDeniedException,
  Action,
  Aggregate,
  AggregateOperation,
  AlreadyExistsException,
  AthenaConnectorSource,
  AuditContext,
  BasicCatalogTarget,
  BatchCreatePartitionRequest,
  BatchCreatePartitionResponse,
  BatchDeleteConnectionRequest,
  BatchDeleteConnectionResponse,
  BatchDeletePartitionRequest,
  BatchDeletePartitionResponse,
  BatchDeleteTableRequest,
  BatchDeleteTableResponse,
  BatchDeleteTableVersionRequest,
  BatchDeleteTableVersionResponse,
  BatchGetBlueprintsRequest,
  BatchGetBlueprintsResponse,
  BatchGetCrawlersRequest,
  BatchGetCrawlersResponse,
  BatchGetCustomEntityTypesRequest,
  BatchGetCustomEntityTypesResponse,
  BatchGetDevEndpointsRequest,
  BatchGetDevEndpointsResponse,
  BatchGetJobsRequest,
  BatchGetPartitionRequest,
  BatchGetPartitionResponse,
  BatchGetTriggersRequest,
  BatchGetTriggersResponse,
  BatchGetWorkflowsRequest,
  BatchGetWorkflowsResponse,
  BatchStopJobRunError,
  BatchStopJobRunRequest,
  BatchStopJobRunResponse,
  BatchStopJobRunSuccessfulSubmission,
  BatchUpdatePartitionFailureEntry,
  BatchUpdatePartitionRequest,
  BatchUpdatePartitionRequestEntry,
  BatchUpdatePartitionResponse,
  Blueprint,
  BlueprintDetails,
  CancelMLTaskRunRequest,
  CancelMLTaskRunResponse,
  CancelStatementRequest,
  CancelStatementResponse,
  CatalogKafkaSource,
  CatalogKinesisSource,
  CatalogSchemaChangePolicy,
  CatalogSource,
  CatalogTarget,
  CheckSchemaVersionValidityInput,
  CheckSchemaVersionValidityResponse,
  CloudWatchEncryption,
  CodeGenEdge,
  CodeGenNode,
  CodeGenNodeArg,
  Column,
  ConcurrentModificationException,
  Condition,
  ConnectionInput,
  ConnectionPropertyKey,
  ConnectionsList,
  Crawl,
  Crawler,
  CrawlerNodeDetails,
  CrawlerTargets,
  CreateBlueprintRequest,
  CreateBlueprintResponse,
  CreateClassifierRequest,
  CreateClassifierResponse,
  CreateConnectionRequest,
  CreateConnectionResponse,
  CreateCrawlerRequest,
  CreateCrawlerResponse,
  CreateCsvClassifierRequest,
  CreateCustomEntityTypeRequest,
  CreateCustomEntityTypeResponse,
  CreateDatabaseRequest,
  CreateDatabaseResponse,
  CreateDevEndpointRequest,
  CreateDevEndpointResponse,
  CreateGrokClassifierRequest,
  CreateJobResponse,
  CreateJsonClassifierRequest,
  CreateMLTransformRequest,
  CreateMLTransformResponse,
  CreatePartitionIndexRequest,
  CreatePartitionIndexResponse,
  CreatePartitionRequest,
  CreatePartitionResponse,
  CreateRegistryInput,
  CreateRegistryResponse,
  CreateSchemaInput,
  CreateSchemaResponse,
  CreateScriptRequest,
  CreateScriptResponse,
  CreateSecurityConfigurationRequest,
  CreateSecurityConfigurationResponse,
  CreateSessionRequest,
  CreateSessionResponse,
  CreateTableRequest,
  CreateTableResponse,
  CreateTriggerRequest,
  CreateTriggerResponse,
  CreateUserDefinedFunctionRequest,
  CreateUserDefinedFunctionResponse,
  CreateWorkflowRequest,
  CreateWorkflowResponse,
  CreateXMLClassifierRequest,
  CustomCode,
  CustomEntityType,
  DatabaseIdentifier,
  DatabaseInput,
  DataLakePrincipal,
  Datatype,
  DeleteBlueprintRequest,
  DeleteBlueprintResponse,
  DeleteClassifierRequest,
  DeltaTarget,
  DevEndpoint,
  DirectKafkaSource,
  DirectKinesisSource,
  DirectSchemaChangePolicy,
  DropDuplicates,
  DropFields,
  DropNullFields,
  DynamoDBCatalogSource,
  DynamoDBTarget,
  Edge,
  EncryptionConfiguration,
  EntityNotFoundException,
  ErrorDetail,
  EventBatchingCondition,
  ExecutionProperty,
  FillMissingValues,
  Filter,
  FilterExpression,
  FilterValue,
  FindMatchesParameters,
  GlueEncryptionException,
  GlueRecordType,
  GlueSchema,
  GlueStudioSchemaColumn,
  GlueTable,
  GovernedCatalogSource,
  GovernedCatalogTarget,
  IdempotentParameterMismatchException,
  IllegalSessionStateException,
  InternalServiceException,
  InvalidInputException,
  InvalidStateException,
  JDBCConnectorOptions,
  JDBCConnectorSource,
  JDBCConnectorTarget,
  JDBCDataType,
  JdbcTarget,
  JobBookmarksEncryption,
  JobCommand,
  JobNodeDetails,
  JobRun,
  Join,
  JoinColumn,
  KafkaStreamingSourceOptions,
  KinesisStreamingSourceOptions,
  LakeFormationConfiguration,
  LastActiveDefinition,
  LastCrawlInfo,
  LineageConfiguration,
  Merge,
  MicrosoftSQLServerCatalogSource,
  MicrosoftSQLServerCatalogTarget,
  MLUserDataEncryption,
  MongoDBTarget,
  MySQLCatalogSource,
  MySQLCatalogTarget,
  Node,
  NotificationProperty,
  NullCheckBoxList,
  NullValueField,
  OperationTimeoutException,
  OracleSQLCatalogSource,
  OracleSQLCatalogTarget,
  Order,
  Partition,
  PartitionError,
  PartitionIndex,
  PartitionInput,
  PartitionValueList,
  Permission,
  PhysicalConnectionRequirements,
  PIIDetection,
  PostgreSQLCatalogSource,
  PostgreSQLCatalogTarget,
  Predecessor,
  Predicate,
  PrincipalPermissions,
  RecrawlPolicy,
  RedshiftSource,
  RedshiftTarget,
  RegistryId,
  RelationalCatalogSource,
  RenameField,
  ResourceNotReadyException,
  ResourceNumberLimitExceededException,
  ResourceUri,
  S3CatalogSource,
  S3CatalogTarget,
  S3CsvSource,
  S3DirectSourceAdditionalOptions,
  S3DirectTarget,
  S3Encryption,
  S3GlueParquetTarget,
  S3JsonSource,
  S3ParquetSource,
  S3SourceAdditionalOptions,
  S3Target,
  Schedule,
  SchemaChangePolicy,
  SchemaId,
  SchemaReference,
  SelectFields,
  SelectFromCollection,
  SerDeInfo,
  Session,
  SessionCommand,
  SkewedInfo,
  SparkConnectorSource,
  SparkConnectorTarget,
  SparkSQL,
  Spigot,
  SplitFields,
  SqlAlias,
  StartingEventBatchCondition,
  StorageDescriptor,
  StreamingDataPreviewOptions,
  TableError,
  TableIdentifier,
  TableInput,
  TableVersionError,
  TransformEncryption,
  TransformParameters,
  Trigger,
  TriggerNodeDetails,
  Union,
  UpsertRedshiftTargetOptions,
  UserDefinedFunctionInput,
  ValidationException,
  Workflow,
  WorkflowGraph,
  WorkflowRun,
  WorkflowRunStatistics,
} from "../models/models_0";
import {
  BackfillError,
  BinaryColumnStatisticsData,
  BlueprintRun,
  BooleanColumnStatisticsData,
  CatalogEntry,
  CatalogImportStatus,
  Classifier,
  ColumnError,
  ColumnImportance,
  ColumnRowFilter,
  ColumnStatistics,
  ColumnStatisticsData,
  ConditionCheckFailureException,
  ConflictException,
  ConfusionMatrix,
  Connection,
  ConnectionPasswordEncryption,
  CrawlerHistory,
  CrawlerMetrics,
  CrawlerRunningException,
  CrawlsFilter,
  CsvClassifier,
  Database,
  DataCatalogEncryptionSettings,
  DateColumnStatisticsData,
  DecimalColumnStatisticsData,
  DecimalNumber,
  DeleteClassifierResponse,
  DeleteColumnStatisticsForPartitionRequest,
  DeleteColumnStatisticsForPartitionResponse,
  DeleteColumnStatisticsForTableRequest,
  DeleteColumnStatisticsForTableResponse,
  DeleteConnectionRequest,
  DeleteConnectionResponse,
  DeleteCrawlerRequest,
  DeleteCrawlerResponse,
  DeleteCustomEntityTypeRequest,
  DeleteCustomEntityTypeResponse,
  DeleteDatabaseRequest,
  DeleteDatabaseResponse,
  DeleteDevEndpointRequest,
  DeleteDevEndpointResponse,
  DeleteJobRequest,
  DeleteJobResponse,
  DeleteMLTransformRequest,
  DeleteMLTransformResponse,
  DeletePartitionIndexRequest,
  DeletePartitionIndexResponse,
  DeletePartitionRequest,
  DeletePartitionResponse,
  DeleteRegistryInput,
  DeleteRegistryResponse,
  DeleteResourcePolicyRequest,
  DeleteResourcePolicyResponse,
  DeleteSchemaInput,
  DeleteSchemaResponse,
  DeleteSchemaVersionsInput,
  DeleteSchemaVersionsResponse,
  DeleteSecurityConfigurationRequest,
  DeleteSecurityConfigurationResponse,
  DeleteSessionRequest,
  DeleteSessionResponse,
  DeleteTableRequest,
  DeleteTableResponse,
  DeleteTableVersionRequest,
  DeleteTableVersionResponse,
  DeleteTriggerRequest,
  DeleteTriggerResponse,
  DeleteUserDefinedFunctionRequest,
  DeleteUserDefinedFunctionResponse,
  DeleteWorkflowRequest,
  DeleteWorkflowResponse,
  DoubleColumnStatisticsData,
  EncryptionAtRest,
  ErrorDetails,
  EvaluationMetrics,
  ExportLabelsTaskRunProperties,
  FindMatchesMetrics,
  FindMatchesTaskRunProperties,
  GetBlueprintRequest,
  GetBlueprintResponse,
  GetBlueprintRunRequest,
  GetBlueprintRunResponse,
  GetBlueprintRunsRequest,
  GetBlueprintRunsResponse,
  GetCatalogImportStatusRequest,
  GetCatalogImportStatusResponse,
  GetClassifierRequest,
  GetClassifierResponse,
  GetClassifiersRequest,
  GetClassifiersResponse,
  GetColumnStatisticsForPartitionRequest,
  GetColumnStatisticsForPartitionResponse,
  GetColumnStatisticsForTableRequest,
  GetColumnStatisticsForTableResponse,
  GetConnectionRequest,
  GetConnectionResponse,
  GetConnectionsFilter,
  GetConnectionsRequest,
  GetConnectionsResponse,
  GetCrawlerMetricsRequest,
  GetCrawlerMetricsResponse,
  GetCrawlerRequest,
  GetCrawlerResponse,
  GetCrawlersRequest,
  GetCrawlersResponse,
  GetCustomEntityTypeRequest,
  GetCustomEntityTypeResponse,
  GetDatabaseRequest,
  GetDatabaseResponse,
  GetDatabasesRequest,
  GetDatabasesResponse,
  GetDataCatalogEncryptionSettingsRequest,
  GetDataCatalogEncryptionSettingsResponse,
  GetDataflowGraphRequest,
  GetDataflowGraphResponse,
  GetDevEndpointRequest,
  GetDevEndpointResponse,
  GetDevEndpointsRequest,
  GetDevEndpointsResponse,
  GetJobBookmarkRequest,
  GetJobBookmarkResponse,
  GetJobRequest,
  GetJobRunRequest,
  GetJobRunResponse,
  GetJobRunsRequest,
  GetJobRunsResponse,
  GetJobsRequest,
  GetMappingRequest,
  GetMappingResponse,
  GetMLTaskRunRequest,
  GetMLTaskRunResponse,
  GetMLTaskRunsRequest,
  GetMLTaskRunsResponse,
  GetMLTransformRequest,
  GetMLTransformResponse,
  GetMLTransformsRequest,
  GetMLTransformsResponse,
  GetPartitionIndexesRequest,
  GetPartitionIndexesResponse,
  GetPartitionRequest,
  GetPartitionResponse,
  GetPartitionsRequest,
  GetPartitionsResponse,
  GetPlanRequest,
  GetPlanResponse,
  GetRegistryInput,
  GetRegistryResponse,
  GetResourcePoliciesRequest,
  GetResourcePoliciesResponse,
  GetResourcePolicyRequest,
  GetResourcePolicyResponse,
  GetSchemaByDefinitionInput,
  GetSchemaByDefinitionResponse,
  GetSchemaInput,
  GetSchemaResponse,
  GetSchemaVersionInput,
  GetSchemaVersionResponse,
  GetSchemaVersionsDiffInput,
  GetSchemaVersionsDiffResponse,
  GetSecurityConfigurationRequest,
  GetSecurityConfigurationResponse,
  GetSecurityConfigurationsRequest,
  GetSecurityConfigurationsResponse,
  GetSessionRequest,
  GetSessionResponse,
  GetStatementRequest,
  GetStatementResponse,
  GetTableRequest,
  GetTableResponse,
  GetTablesRequest,
  GetTablesResponse,
  GetTableVersionRequest,
  GetTableVersionResponse,
  GetTableVersionsRequest,
  GetTableVersionsResponse,
  GetTagsRequest,
  GetTagsResponse,
  GetTriggerRequest,
  GetTriggerResponse,
  GetTriggersRequest,
  GetTriggersResponse,
  GetUnfilteredPartitionMetadataRequest,
  GetUnfilteredPartitionMetadataResponse,
  GetUnfilteredPartitionsMetadataRequest,
  GetUnfilteredPartitionsMetadataResponse,
  GetUnfilteredTableMetadataRequest,
  GetUnfilteredTableMetadataResponse,
  GetUserDefinedFunctionRequest,
  GetUserDefinedFunctionResponse,
  GetUserDefinedFunctionsRequest,
  GetUserDefinedFunctionsResponse,
  GetWorkflowRequest,
  GetWorkflowResponse,
  GetWorkflowRunPropertiesRequest,
  GetWorkflowRunPropertiesResponse,
  GetWorkflowRunRequest,
  GetWorkflowRunResponse,
  GetWorkflowRunsRequest,
  GetWorkflowRunsResponse,
  GluePolicy,
  GrokClassifier,
  ImportCatalogToGlueRequest,
  ImportCatalogToGlueResponse,
  ImportLabelsTaskRunProperties,
  JobBookmarkEntry,
  JsonClassifier,
  KeySchemaElement,
  LabelingSetGenerationTaskRunProperties,
  ListBlueprintsRequest,
  ListBlueprintsResponse,
  ListCrawlersRequest,
  ListCrawlersResponse,
  ListCrawlsRequest,
  ListCrawlsResponse,
  ListCustomEntityTypesRequest,
  ListCustomEntityTypesResponse,
  ListDevEndpointsRequest,
  ListDevEndpointsResponse,
  ListJobsRequest,
  ListJobsResponse,
  ListMLTransformsRequest,
  ListMLTransformsResponse,
  ListRegistriesInput,
  ListRegistriesResponse,
  ListSchemasInput,
  ListSchemasResponse,
  ListSchemaVersionsInput,
  ListSchemaVersionsResponse,
  ListSessionsRequest,
  ListSessionsResponse,
  ListStatementsRequest,
  ListStatementsResponse,
  ListTriggersRequest,
  ListTriggersResponse,
  ListWorkflowsRequest,
  ListWorkflowsResponse,
  Location,
  LongColumnStatisticsData,
  MappingEntry,
  MetadataInfo,
  MetadataKeyValuePair,
  MLTransform,
  OtherMetadataValueListItem,
  PartitionIndexDescriptor,
  PermissionType,
  PermissionTypeMismatchException,
  PutDataCatalogEncryptionSettingsRequest,
  PutDataCatalogEncryptionSettingsResponse,
  PutResourcePolicyRequest,
  PutResourcePolicyResponse,
  PutSchemaVersionMetadataInput,
  PutSchemaVersionMetadataResponse,
  PutWorkflowRunPropertiesRequest,
  PutWorkflowRunPropertiesResponse,
  QuerySchemaVersionMetadataInput,
  QuerySchemaVersionMetadataResponse,
  RegistryListItem,
  SchedulerTransitioningException,
  SchemaColumn,
  SchemaListItem,
  SchemaVersionErrorItem,
  SchemaVersionListItem,
  SchemaVersionNumber,
  SecurityConfiguration,
  Segment,
  Statement,
  StatementOutput,
  StatementOutputData,
  StringColumnStatisticsData,
  Table,
  TableVersion,
  TaskRun,
  TaskRunFilterCriteria,
  TaskRunProperties,
  TaskRunSortCriteria,
  TransformFilterCriteria,
  TransformSortCriteria,
  UnfilteredPartition,
  UserDefinedFunction,
  XMLClassifier,
} from "../models/models_1";
import {
  ApplyMapping,
  BatchGetJobsResponse,
  CodeGenConfigurationNode,
  ColumnStatisticsError,
  ConcurrentRunsExceededException,
  CrawlerNotRunningException,
  CrawlerStoppingException,
  CreateJobRequest,
  DevEndpointCustomLibraries,
  GetJobResponse,
  GetJobsResponse,
  IllegalBlueprintStateException,
  IllegalWorkflowStateException,
  Job,
  JobUpdate,
  Mapping,
  MLTransformNotReadyException,
  NoScheduleException,
  PropertyPredicate,
  RegisterSchemaVersionInput,
  RegisterSchemaVersionResponse,
  RemoveSchemaVersionMetadataInput,
  RemoveSchemaVersionMetadataResponse,
  ResetJobBookmarkRequest,
  ResetJobBookmarkResponse,
  ResumeWorkflowRunRequest,
  ResumeWorkflowRunResponse,
  RunStatementRequest,
  RunStatementResponse,
  SchedulerNotRunningException,
  SchedulerRunningException,
  SearchTablesRequest,
  SearchTablesResponse,
  SortCriterion,
  StartBlueprintRunRequest,
  StartBlueprintRunResponse,
  StartCrawlerRequest,
  StartCrawlerResponse,
  StartCrawlerScheduleRequest,
  StartCrawlerScheduleResponse,
  StartExportLabelsTaskRunRequest,
  StartExportLabelsTaskRunResponse,
  StartImportLabelsTaskRunRequest,
  StartImportLabelsTaskRunResponse,
  StartJobRunRequest,
  StartJobRunResponse,
  StartMLEvaluationTaskRunRequest,
  StartMLEvaluationTaskRunResponse,
  StartMLLabelingSetGenerationTaskRunRequest,
  StartMLLabelingSetGenerationTaskRunResponse,
  StartTriggerRequest,
  StartTriggerResponse,
  StartWorkflowRunRequest,
  StartWorkflowRunResponse,
  StopCrawlerRequest,
  StopCrawlerResponse,
  StopCrawlerScheduleRequest,
  StopCrawlerScheduleResponse,
  StopSessionRequest,
  StopSessionResponse,
  StopTriggerRequest,
  StopTriggerResponse,
  StopWorkflowRunRequest,
  StopWorkflowRunResponse,
  TagResourceRequest,
  TagResourceResponse,
  TriggerUpdate,
  UntagResourceRequest,
  UntagResourceResponse,
  UpdateBlueprintRequest,
  UpdateBlueprintResponse,
  UpdateClassifierRequest,
  UpdateClassifierResponse,
  UpdateColumnStatisticsForPartitionRequest,
  UpdateColumnStatisticsForPartitionResponse,
  UpdateColumnStatisticsForTableRequest,
  UpdateColumnStatisticsForTableResponse,
  UpdateConnectionRequest,
  UpdateConnectionResponse,
  UpdateCrawlerRequest,
  UpdateCrawlerResponse,
  UpdateCrawlerScheduleRequest,
  UpdateCrawlerScheduleResponse,
  UpdateCsvClassifierRequest,
  UpdateDatabaseRequest,
  UpdateDatabaseResponse,
  UpdateDevEndpointRequest,
  UpdateDevEndpointResponse,
  UpdateGrokClassifierRequest,
  UpdateJobRequest,
  UpdateJobResponse,
  UpdateJsonClassifierRequest,
  UpdateMLTransformRequest,
  UpdateMLTransformResponse,
  UpdatePartitionRequest,
  UpdatePartitionResponse,
  UpdateRegistryInput,
  UpdateRegistryResponse,
  UpdateSchemaInput,
  UpdateSchemaResponse,
  UpdateTableRequest,
  UpdateTableResponse,
  UpdateTriggerRequest,
  UpdateTriggerResponse,
  UpdateUserDefinedFunctionRequest,
  UpdateUserDefinedFunctionResponse,
  UpdateWorkflowRequest,
  UpdateWorkflowResponse,
  UpdateXMLClassifierRequest,
  VersionMismatchException,
} from "../models/models_2";

export const serializeAws_json1_1BatchCreatePartitionCommand = async (
  input: BatchCreatePartitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.BatchCreatePartition",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1BatchCreatePartitionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1BatchDeleteConnectionCommand = async (
  input: BatchDeleteConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.BatchDeleteConnection",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1BatchDeleteConnectionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1BatchDeletePartitionCommand = async (
  input: BatchDeletePartitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.BatchDeletePartition",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1BatchDeletePartitionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1BatchDeleteTableCommand = async (
  input: BatchDeleteTableCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.BatchDeleteTable",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1BatchDeleteTableRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1BatchDeleteTableVersionCommand = async (
  input: BatchDeleteTableVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.BatchDeleteTableVersion",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1BatchDeleteTableVersionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1BatchGetBlueprintsCommand = async (
  input: BatchGetBlueprintsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.BatchGetBlueprints",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1BatchGetBlueprintsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1BatchGetCrawlersCommand = async (
  input: BatchGetCrawlersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.BatchGetCrawlers",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1BatchGetCrawlersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1BatchGetCustomEntityTypesCommand = async (
  input: BatchGetCustomEntityTypesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.BatchGetCustomEntityTypes",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1BatchGetCustomEntityTypesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1BatchGetDevEndpointsCommand = async (
  input: BatchGetDevEndpointsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.BatchGetDevEndpoints",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1BatchGetDevEndpointsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1BatchGetJobsCommand = async (
  input: BatchGetJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.BatchGetJobs",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1BatchGetJobsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1BatchGetPartitionCommand = async (
  input: BatchGetPartitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.BatchGetPartition",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1BatchGetPartitionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1BatchGetTriggersCommand = async (
  input: BatchGetTriggersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.BatchGetTriggers",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1BatchGetTriggersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1BatchGetWorkflowsCommand = async (
  input: BatchGetWorkflowsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.BatchGetWorkflows",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1BatchGetWorkflowsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1BatchStopJobRunCommand = async (
  input: BatchStopJobRunCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.BatchStopJobRun",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1BatchStopJobRunRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1BatchUpdatePartitionCommand = async (
  input: BatchUpdatePartitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.BatchUpdatePartition",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1BatchUpdatePartitionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CancelMLTaskRunCommand = async (
  input: CancelMLTaskRunCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.CancelMLTaskRun",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CancelMLTaskRunRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CancelStatementCommand = async (
  input: CancelStatementCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.CancelStatement",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CancelStatementRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CheckSchemaVersionValidityCommand = async (
  input: CheckSchemaVersionValidityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.CheckSchemaVersionValidity",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CheckSchemaVersionValidityInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateBlueprintCommand = async (
  input: CreateBlueprintCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.CreateBlueprint",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateBlueprintRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateClassifierCommand = async (
  input: CreateClassifierCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.CreateClassifier",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateClassifierRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateConnectionCommand = async (
  input: CreateConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.CreateConnection",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateConnectionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateCrawlerCommand = async (
  input: CreateCrawlerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.CreateCrawler",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateCrawlerRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateCustomEntityTypeCommand = async (
  input: CreateCustomEntityTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.CreateCustomEntityType",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateCustomEntityTypeRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateDatabaseCommand = async (
  input: CreateDatabaseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.CreateDatabase",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateDatabaseRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateDevEndpointCommand = async (
  input: CreateDevEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.CreateDevEndpoint",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateDevEndpointRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateJobCommand = async (
  input: CreateJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.CreateJob",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateMLTransformCommand = async (
  input: CreateMLTransformCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.CreateMLTransform",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateMLTransformRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreatePartitionCommand = async (
  input: CreatePartitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.CreatePartition",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreatePartitionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreatePartitionIndexCommand = async (
  input: CreatePartitionIndexCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.CreatePartitionIndex",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreatePartitionIndexRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateRegistryCommand = async (
  input: CreateRegistryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.CreateRegistry",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateRegistryInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateSchemaCommand = async (
  input: CreateSchemaCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.CreateSchema",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateSchemaInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateScriptCommand = async (
  input: CreateScriptCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.CreateScript",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateScriptRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateSecurityConfigurationCommand = async (
  input: CreateSecurityConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.CreateSecurityConfiguration",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateSecurityConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateSessionCommand = async (
  input: CreateSessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.CreateSession",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateSessionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateTableCommand = async (
  input: CreateTableCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.CreateTable",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateTableRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateTriggerCommand = async (
  input: CreateTriggerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.CreateTrigger",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateTriggerRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateUserDefinedFunctionCommand = async (
  input: CreateUserDefinedFunctionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.CreateUserDefinedFunction",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateUserDefinedFunctionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateWorkflowCommand = async (
  input: CreateWorkflowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.CreateWorkflow",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateWorkflowRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteBlueprintCommand = async (
  input: DeleteBlueprintCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.DeleteBlueprint",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteBlueprintRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteClassifierCommand = async (
  input: DeleteClassifierCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.DeleteClassifier",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteClassifierRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteColumnStatisticsForPartitionCommand = async (
  input: DeleteColumnStatisticsForPartitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.DeleteColumnStatisticsForPartition",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteColumnStatisticsForPartitionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteColumnStatisticsForTableCommand = async (
  input: DeleteColumnStatisticsForTableCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.DeleteColumnStatisticsForTable",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteColumnStatisticsForTableRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteConnectionCommand = async (
  input: DeleteConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.DeleteConnection",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteConnectionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteCrawlerCommand = async (
  input: DeleteCrawlerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.DeleteCrawler",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteCrawlerRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteCustomEntityTypeCommand = async (
  input: DeleteCustomEntityTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.DeleteCustomEntityType",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteCustomEntityTypeRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteDatabaseCommand = async (
  input: DeleteDatabaseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.DeleteDatabase",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteDatabaseRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteDevEndpointCommand = async (
  input: DeleteDevEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.DeleteDevEndpoint",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteDevEndpointRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteJobCommand = async (
  input: DeleteJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.DeleteJob",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteMLTransformCommand = async (
  input: DeleteMLTransformCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.DeleteMLTransform",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteMLTransformRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeletePartitionCommand = async (
  input: DeletePartitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.DeletePartition",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeletePartitionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeletePartitionIndexCommand = async (
  input: DeletePartitionIndexCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.DeletePartitionIndex",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeletePartitionIndexRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteRegistryCommand = async (
  input: DeleteRegistryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.DeleteRegistry",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteRegistryInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteResourcePolicyCommand = async (
  input: DeleteResourcePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.DeleteResourcePolicy",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteResourcePolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteSchemaCommand = async (
  input: DeleteSchemaCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.DeleteSchema",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteSchemaInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteSchemaVersionsCommand = async (
  input: DeleteSchemaVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.DeleteSchemaVersions",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteSchemaVersionsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteSecurityConfigurationCommand = async (
  input: DeleteSecurityConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.DeleteSecurityConfiguration",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteSecurityConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteSessionCommand = async (
  input: DeleteSessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.DeleteSession",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteSessionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteTableCommand = async (
  input: DeleteTableCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.DeleteTable",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteTableRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteTableVersionCommand = async (
  input: DeleteTableVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.DeleteTableVersion",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteTableVersionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteTriggerCommand = async (
  input: DeleteTriggerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.DeleteTrigger",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteTriggerRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteUserDefinedFunctionCommand = async (
  input: DeleteUserDefinedFunctionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.DeleteUserDefinedFunction",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteUserDefinedFunctionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteWorkflowCommand = async (
  input: DeleteWorkflowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.DeleteWorkflow",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteWorkflowRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetBlueprintCommand = async (
  input: GetBlueprintCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.GetBlueprint",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetBlueprintRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetBlueprintRunCommand = async (
  input: GetBlueprintRunCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.GetBlueprintRun",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetBlueprintRunRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetBlueprintRunsCommand = async (
  input: GetBlueprintRunsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.GetBlueprintRuns",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetBlueprintRunsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetCatalogImportStatusCommand = async (
  input: GetCatalogImportStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.GetCatalogImportStatus",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetCatalogImportStatusRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetClassifierCommand = async (
  input: GetClassifierCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.GetClassifier",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetClassifierRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetClassifiersCommand = async (
  input: GetClassifiersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.GetClassifiers",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetClassifiersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetColumnStatisticsForPartitionCommand = async (
  input: GetColumnStatisticsForPartitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.GetColumnStatisticsForPartition",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetColumnStatisticsForPartitionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetColumnStatisticsForTableCommand = async (
  input: GetColumnStatisticsForTableCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.GetColumnStatisticsForTable",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetColumnStatisticsForTableRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetConnectionCommand = async (
  input: GetConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.GetConnection",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetConnectionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetConnectionsCommand = async (
  input: GetConnectionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.GetConnections",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetConnectionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetCrawlerCommand = async (
  input: GetCrawlerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.GetCrawler",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetCrawlerRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetCrawlerMetricsCommand = async (
  input: GetCrawlerMetricsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.GetCrawlerMetrics",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetCrawlerMetricsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetCrawlersCommand = async (
  input: GetCrawlersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.GetCrawlers",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetCrawlersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetCustomEntityTypeCommand = async (
  input: GetCustomEntityTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.GetCustomEntityType",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetCustomEntityTypeRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetDatabaseCommand = async (
  input: GetDatabaseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.GetDatabase",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetDatabaseRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetDatabasesCommand = async (
  input: GetDatabasesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.GetDatabases",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetDatabasesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetDataCatalogEncryptionSettingsCommand = async (
  input: GetDataCatalogEncryptionSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.GetDataCatalogEncryptionSettings",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetDataCatalogEncryptionSettingsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetDataflowGraphCommand = async (
  input: GetDataflowGraphCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.GetDataflowGraph",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetDataflowGraphRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetDevEndpointCommand = async (
  input: GetDevEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.GetDevEndpoint",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetDevEndpointRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetDevEndpointsCommand = async (
  input: GetDevEndpointsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.GetDevEndpoints",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetDevEndpointsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetJobCommand = async (
  input: GetJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.GetJob",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetJobBookmarkCommand = async (
  input: GetJobBookmarkCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.GetJobBookmark",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetJobBookmarkRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetJobRunCommand = async (
  input: GetJobRunCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.GetJobRun",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetJobRunRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetJobRunsCommand = async (
  input: GetJobRunsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.GetJobRuns",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetJobRunsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetJobsCommand = async (
  input: GetJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.GetJobs",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetJobsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetMappingCommand = async (
  input: GetMappingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.GetMapping",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetMappingRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetMLTaskRunCommand = async (
  input: GetMLTaskRunCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.GetMLTaskRun",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetMLTaskRunRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetMLTaskRunsCommand = async (
  input: GetMLTaskRunsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.GetMLTaskRuns",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetMLTaskRunsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetMLTransformCommand = async (
  input: GetMLTransformCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.GetMLTransform",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetMLTransformRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetMLTransformsCommand = async (
  input: GetMLTransformsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.GetMLTransforms",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetMLTransformsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetPartitionCommand = async (
  input: GetPartitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.GetPartition",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetPartitionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetPartitionIndexesCommand = async (
  input: GetPartitionIndexesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.GetPartitionIndexes",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetPartitionIndexesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetPartitionsCommand = async (
  input: GetPartitionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.GetPartitions",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetPartitionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetPlanCommand = async (
  input: GetPlanCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.GetPlan",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetPlanRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetRegistryCommand = async (
  input: GetRegistryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.GetRegistry",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetRegistryInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetResourcePoliciesCommand = async (
  input: GetResourcePoliciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.GetResourcePolicies",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetResourcePoliciesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetResourcePolicyCommand = async (
  input: GetResourcePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.GetResourcePolicy",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetResourcePolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetSchemaCommand = async (
  input: GetSchemaCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.GetSchema",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetSchemaInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetSchemaByDefinitionCommand = async (
  input: GetSchemaByDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.GetSchemaByDefinition",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetSchemaByDefinitionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetSchemaVersionCommand = async (
  input: GetSchemaVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.GetSchemaVersion",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetSchemaVersionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetSchemaVersionsDiffCommand = async (
  input: GetSchemaVersionsDiffCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.GetSchemaVersionsDiff",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetSchemaVersionsDiffInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetSecurityConfigurationCommand = async (
  input: GetSecurityConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.GetSecurityConfiguration",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetSecurityConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetSecurityConfigurationsCommand = async (
  input: GetSecurityConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.GetSecurityConfigurations",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetSecurityConfigurationsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetSessionCommand = async (
  input: GetSessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.GetSession",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetSessionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetStatementCommand = async (
  input: GetStatementCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.GetStatement",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetStatementRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetTableCommand = async (
  input: GetTableCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.GetTable",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetTableRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetTablesCommand = async (
  input: GetTablesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.GetTables",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetTablesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetTableVersionCommand = async (
  input: GetTableVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.GetTableVersion",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetTableVersionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetTableVersionsCommand = async (
  input: GetTableVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.GetTableVersions",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetTableVersionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetTagsCommand = async (
  input: GetTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.GetTags",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetTagsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetTriggerCommand = async (
  input: GetTriggerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.GetTrigger",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetTriggerRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetTriggersCommand = async (
  input: GetTriggersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.GetTriggers",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetTriggersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetUnfilteredPartitionMetadataCommand = async (
  input: GetUnfilteredPartitionMetadataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.GetUnfilteredPartitionMetadata",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetUnfilteredPartitionMetadataRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetUnfilteredPartitionsMetadataCommand = async (
  input: GetUnfilteredPartitionsMetadataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.GetUnfilteredPartitionsMetadata",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetUnfilteredPartitionsMetadataRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetUnfilteredTableMetadataCommand = async (
  input: GetUnfilteredTableMetadataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.GetUnfilteredTableMetadata",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetUnfilteredTableMetadataRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetUserDefinedFunctionCommand = async (
  input: GetUserDefinedFunctionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.GetUserDefinedFunction",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetUserDefinedFunctionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetUserDefinedFunctionsCommand = async (
  input: GetUserDefinedFunctionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.GetUserDefinedFunctions",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetUserDefinedFunctionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetWorkflowCommand = async (
  input: GetWorkflowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.GetWorkflow",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetWorkflowRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetWorkflowRunCommand = async (
  input: GetWorkflowRunCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.GetWorkflowRun",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetWorkflowRunRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetWorkflowRunPropertiesCommand = async (
  input: GetWorkflowRunPropertiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.GetWorkflowRunProperties",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetWorkflowRunPropertiesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetWorkflowRunsCommand = async (
  input: GetWorkflowRunsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.GetWorkflowRuns",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetWorkflowRunsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ImportCatalogToGlueCommand = async (
  input: ImportCatalogToGlueCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.ImportCatalogToGlue",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ImportCatalogToGlueRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListBlueprintsCommand = async (
  input: ListBlueprintsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.ListBlueprints",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListBlueprintsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListCrawlersCommand = async (
  input: ListCrawlersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.ListCrawlers",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListCrawlersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListCrawlsCommand = async (
  input: ListCrawlsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.ListCrawls",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListCrawlsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListCustomEntityTypesCommand = async (
  input: ListCustomEntityTypesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.ListCustomEntityTypes",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListCustomEntityTypesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListDevEndpointsCommand = async (
  input: ListDevEndpointsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.ListDevEndpoints",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListDevEndpointsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListJobsCommand = async (
  input: ListJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.ListJobs",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListJobsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListMLTransformsCommand = async (
  input: ListMLTransformsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.ListMLTransforms",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListMLTransformsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListRegistriesCommand = async (
  input: ListRegistriesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.ListRegistries",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListRegistriesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListSchemasCommand = async (
  input: ListSchemasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.ListSchemas",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListSchemasInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListSchemaVersionsCommand = async (
  input: ListSchemaVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.ListSchemaVersions",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListSchemaVersionsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListSessionsCommand = async (
  input: ListSessionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.ListSessions",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListSessionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListStatementsCommand = async (
  input: ListStatementsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.ListStatements",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListStatementsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListTriggersCommand = async (
  input: ListTriggersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.ListTriggers",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListTriggersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListWorkflowsCommand = async (
  input: ListWorkflowsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.ListWorkflows",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListWorkflowsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutDataCatalogEncryptionSettingsCommand = async (
  input: PutDataCatalogEncryptionSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.PutDataCatalogEncryptionSettings",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutDataCatalogEncryptionSettingsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutResourcePolicyCommand = async (
  input: PutResourcePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.PutResourcePolicy",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutResourcePolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutSchemaVersionMetadataCommand = async (
  input: PutSchemaVersionMetadataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.PutSchemaVersionMetadata",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutSchemaVersionMetadataInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutWorkflowRunPropertiesCommand = async (
  input: PutWorkflowRunPropertiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.PutWorkflowRunProperties",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutWorkflowRunPropertiesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1QuerySchemaVersionMetadataCommand = async (
  input: QuerySchemaVersionMetadataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.QuerySchemaVersionMetadata",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1QuerySchemaVersionMetadataInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RegisterSchemaVersionCommand = async (
  input: RegisterSchemaVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.RegisterSchemaVersion",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1RegisterSchemaVersionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RemoveSchemaVersionMetadataCommand = async (
  input: RemoveSchemaVersionMetadataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.RemoveSchemaVersionMetadata",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1RemoveSchemaVersionMetadataInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ResetJobBookmarkCommand = async (
  input: ResetJobBookmarkCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.ResetJobBookmark",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ResetJobBookmarkRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ResumeWorkflowRunCommand = async (
  input: ResumeWorkflowRunCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.ResumeWorkflowRun",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ResumeWorkflowRunRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RunStatementCommand = async (
  input: RunStatementCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.RunStatement",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1RunStatementRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1SearchTablesCommand = async (
  input: SearchTablesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.SearchTables",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1SearchTablesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StartBlueprintRunCommand = async (
  input: StartBlueprintRunCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.StartBlueprintRun",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StartBlueprintRunRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StartCrawlerCommand = async (
  input: StartCrawlerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.StartCrawler",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StartCrawlerRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StartCrawlerScheduleCommand = async (
  input: StartCrawlerScheduleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.StartCrawlerSchedule",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StartCrawlerScheduleRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StartExportLabelsTaskRunCommand = async (
  input: StartExportLabelsTaskRunCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.StartExportLabelsTaskRun",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StartExportLabelsTaskRunRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StartImportLabelsTaskRunCommand = async (
  input: StartImportLabelsTaskRunCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.StartImportLabelsTaskRun",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StartImportLabelsTaskRunRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StartJobRunCommand = async (
  input: StartJobRunCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.StartJobRun",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StartJobRunRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StartMLEvaluationTaskRunCommand = async (
  input: StartMLEvaluationTaskRunCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.StartMLEvaluationTaskRun",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StartMLEvaluationTaskRunRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StartMLLabelingSetGenerationTaskRunCommand = async (
  input: StartMLLabelingSetGenerationTaskRunCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.StartMLLabelingSetGenerationTaskRun",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StartMLLabelingSetGenerationTaskRunRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StartTriggerCommand = async (
  input: StartTriggerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.StartTrigger",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StartTriggerRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StartWorkflowRunCommand = async (
  input: StartWorkflowRunCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.StartWorkflowRun",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StartWorkflowRunRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StopCrawlerCommand = async (
  input: StopCrawlerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.StopCrawler",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StopCrawlerRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StopCrawlerScheduleCommand = async (
  input: StopCrawlerScheduleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.StopCrawlerSchedule",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StopCrawlerScheduleRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StopSessionCommand = async (
  input: StopSessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.StopSession",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StopSessionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StopTriggerCommand = async (
  input: StopTriggerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.StopTrigger",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StopTriggerRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StopWorkflowRunCommand = async (
  input: StopWorkflowRunCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.StopWorkflowRun",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StopWorkflowRunRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.TagResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1TagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.UntagResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UntagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateBlueprintCommand = async (
  input: UpdateBlueprintCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.UpdateBlueprint",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateBlueprintRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateClassifierCommand = async (
  input: UpdateClassifierCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.UpdateClassifier",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateClassifierRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateColumnStatisticsForPartitionCommand = async (
  input: UpdateColumnStatisticsForPartitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.UpdateColumnStatisticsForPartition",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateColumnStatisticsForPartitionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateColumnStatisticsForTableCommand = async (
  input: UpdateColumnStatisticsForTableCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.UpdateColumnStatisticsForTable",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateColumnStatisticsForTableRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateConnectionCommand = async (
  input: UpdateConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.UpdateConnection",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateConnectionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateCrawlerCommand = async (
  input: UpdateCrawlerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.UpdateCrawler",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateCrawlerRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateCrawlerScheduleCommand = async (
  input: UpdateCrawlerScheduleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.UpdateCrawlerSchedule",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateCrawlerScheduleRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateDatabaseCommand = async (
  input: UpdateDatabaseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.UpdateDatabase",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateDatabaseRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateDevEndpointCommand = async (
  input: UpdateDevEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.UpdateDevEndpoint",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateDevEndpointRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateJobCommand = async (
  input: UpdateJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.UpdateJob",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateMLTransformCommand = async (
  input: UpdateMLTransformCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.UpdateMLTransform",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateMLTransformRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdatePartitionCommand = async (
  input: UpdatePartitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.UpdatePartition",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdatePartitionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateRegistryCommand = async (
  input: UpdateRegistryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.UpdateRegistry",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateRegistryInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateSchemaCommand = async (
  input: UpdateSchemaCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.UpdateSchema",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateSchemaInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateTableCommand = async (
  input: UpdateTableCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.UpdateTable",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateTableRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateTriggerCommand = async (
  input: UpdateTriggerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.UpdateTrigger",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateTriggerRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateUserDefinedFunctionCommand = async (
  input: UpdateUserDefinedFunctionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.UpdateUserDefinedFunction",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateUserDefinedFunctionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateWorkflowCommand = async (
  input: UpdateWorkflowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSGlue.UpdateWorkflow",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateWorkflowRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1BatchCreatePartitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchCreatePartitionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1BatchCreatePartitionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1BatchCreatePartitionResponse(data, context);
  const response: BatchCreatePartitionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1BatchCreatePartitionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchCreatePartitionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazonaws.glue#AlreadyExistsException":
      throw await deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "GlueEncryptionException":
    case "com.amazonaws.glue#GlueEncryptionException":
      throw await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    case "ResourceNumberLimitExceededException":
    case "com.amazonaws.glue#ResourceNumberLimitExceededException":
      throw await deserializeAws_json1_1ResourceNumberLimitExceededExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1BatchDeleteConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDeleteConnectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1BatchDeleteConnectionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1BatchDeleteConnectionResponse(data, context);
  const response: BatchDeleteConnectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1BatchDeleteConnectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDeleteConnectionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1BatchDeletePartitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDeletePartitionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1BatchDeletePartitionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1BatchDeletePartitionResponse(data, context);
  const response: BatchDeletePartitionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1BatchDeletePartitionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDeletePartitionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1BatchDeleteTableCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDeleteTableCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1BatchDeleteTableCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1BatchDeleteTableResponse(data, context);
  const response: BatchDeleteTableCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1BatchDeleteTableCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDeleteTableCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "GlueEncryptionException":
    case "com.amazonaws.glue#GlueEncryptionException":
      throw await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    case "ResourceNotReadyException":
    case "com.amazonaws.glue#ResourceNotReadyException":
      throw await deserializeAws_json1_1ResourceNotReadyExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1BatchDeleteTableVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDeleteTableVersionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1BatchDeleteTableVersionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1BatchDeleteTableVersionResponse(data, context);
  const response: BatchDeleteTableVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1BatchDeleteTableVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDeleteTableVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1BatchGetBlueprintsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetBlueprintsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1BatchGetBlueprintsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1BatchGetBlueprintsResponse(data, context);
  const response: BatchGetBlueprintsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1BatchGetBlueprintsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetBlueprintsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1BatchGetCrawlersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetCrawlersCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1BatchGetCrawlersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1BatchGetCrawlersResponse(data, context);
  const response: BatchGetCrawlersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1BatchGetCrawlersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetCrawlersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1BatchGetCustomEntityTypesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetCustomEntityTypesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1BatchGetCustomEntityTypesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1BatchGetCustomEntityTypesResponse(data, context);
  const response: BatchGetCustomEntityTypesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1BatchGetCustomEntityTypesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetCustomEntityTypesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1BatchGetDevEndpointsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetDevEndpointsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1BatchGetDevEndpointsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1BatchGetDevEndpointsResponse(data, context);
  const response: BatchGetDevEndpointsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1BatchGetDevEndpointsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetDevEndpointsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.glue#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1BatchGetJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetJobsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1BatchGetJobsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1BatchGetJobsResponse(data, context);
  const response: BatchGetJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1BatchGetJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1BatchGetPartitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetPartitionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1BatchGetPartitionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1BatchGetPartitionResponse(data, context);
  const response: BatchGetPartitionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1BatchGetPartitionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetPartitionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "GlueEncryptionException":
    case "com.amazonaws.glue#GlueEncryptionException":
      throw await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "InvalidStateException":
    case "com.amazonaws.glue#InvalidStateException":
      throw await deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1BatchGetTriggersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetTriggersCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1BatchGetTriggersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1BatchGetTriggersResponse(data, context);
  const response: BatchGetTriggersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1BatchGetTriggersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetTriggersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1BatchGetWorkflowsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetWorkflowsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1BatchGetWorkflowsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1BatchGetWorkflowsResponse(data, context);
  const response: BatchGetWorkflowsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1BatchGetWorkflowsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetWorkflowsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1BatchStopJobRunCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchStopJobRunCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1BatchStopJobRunCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1BatchStopJobRunResponse(data, context);
  const response: BatchStopJobRunCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1BatchStopJobRunCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchStopJobRunCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1BatchUpdatePartitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchUpdatePartitionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1BatchUpdatePartitionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1BatchUpdatePartitionResponse(data, context);
  const response: BatchUpdatePartitionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1BatchUpdatePartitionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchUpdatePartitionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "GlueEncryptionException":
    case "com.amazonaws.glue#GlueEncryptionException":
      throw await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1CancelMLTaskRunCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelMLTaskRunCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CancelMLTaskRunCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CancelMLTaskRunResponse(data, context);
  const response: CancelMLTaskRunCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CancelMLTaskRunCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelMLTaskRunCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1CancelStatementCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelStatementCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CancelStatementCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CancelStatementResponse(data, context);
  const response: CancelStatementCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CancelStatementCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelStatementCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.glue#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "IllegalSessionStateException":
    case "com.amazonaws.glue#IllegalSessionStateException":
      throw await deserializeAws_json1_1IllegalSessionStateExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1CheckSchemaVersionValidityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CheckSchemaVersionValidityCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CheckSchemaVersionValidityCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CheckSchemaVersionValidityResponse(data, context);
  const response: CheckSchemaVersionValidityCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CheckSchemaVersionValidityCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CheckSchemaVersionValidityCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.glue#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1CreateBlueprintCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBlueprintCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateBlueprintCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateBlueprintResponse(data, context);
  const response: CreateBlueprintCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateBlueprintCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBlueprintCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazonaws.glue#AlreadyExistsException":
      throw await deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    case "ResourceNumberLimitExceededException":
    case "com.amazonaws.glue#ResourceNumberLimitExceededException":
      throw await deserializeAws_json1_1ResourceNumberLimitExceededExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1CreateClassifierCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateClassifierCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateClassifierCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateClassifierResponse(data, context);
  const response: CreateClassifierCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateClassifierCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateClassifierCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazonaws.glue#AlreadyExistsException":
      throw await deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1CreateConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConnectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateConnectionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateConnectionResponse(data, context);
  const response: CreateConnectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateConnectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConnectionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazonaws.glue#AlreadyExistsException":
      throw await deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context);
    case "GlueEncryptionException":
    case "com.amazonaws.glue#GlueEncryptionException":
      throw await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    case "ResourceNumberLimitExceededException":
    case "com.amazonaws.glue#ResourceNumberLimitExceededException":
      throw await deserializeAws_json1_1ResourceNumberLimitExceededExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1CreateCrawlerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCrawlerCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateCrawlerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateCrawlerResponse(data, context);
  const response: CreateCrawlerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateCrawlerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCrawlerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazonaws.glue#AlreadyExistsException":
      throw await deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    case "ResourceNumberLimitExceededException":
    case "com.amazonaws.glue#ResourceNumberLimitExceededException":
      throw await deserializeAws_json1_1ResourceNumberLimitExceededExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1CreateCustomEntityTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCustomEntityTypeCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateCustomEntityTypeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateCustomEntityTypeResponse(data, context);
  const response: CreateCustomEntityTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateCustomEntityTypeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCustomEntityTypeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.glue#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AlreadyExistsException":
    case "com.amazonaws.glue#AlreadyExistsException":
      throw await deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context);
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.glue#IdempotentParameterMismatchException":
      throw await deserializeAws_json1_1IdempotentParameterMismatchExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    case "ResourceNumberLimitExceededException":
    case "com.amazonaws.glue#ResourceNumberLimitExceededException":
      throw await deserializeAws_json1_1ResourceNumberLimitExceededExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1CreateDatabaseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDatabaseCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateDatabaseCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateDatabaseResponse(data, context);
  const response: CreateDatabaseCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateDatabaseCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDatabaseCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazonaws.glue#AlreadyExistsException":
      throw await deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.glue#ConcurrentModificationException":
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "GlueEncryptionException":
    case "com.amazonaws.glue#GlueEncryptionException":
      throw await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    case "ResourceNumberLimitExceededException":
    case "com.amazonaws.glue#ResourceNumberLimitExceededException":
      throw await deserializeAws_json1_1ResourceNumberLimitExceededExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1CreateDevEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDevEndpointCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateDevEndpointCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateDevEndpointResponse(data, context);
  const response: CreateDevEndpointCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateDevEndpointCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDevEndpointCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.glue#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AlreadyExistsException":
    case "com.amazonaws.glue#AlreadyExistsException":
      throw await deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context);
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.glue#IdempotentParameterMismatchException":
      throw await deserializeAws_json1_1IdempotentParameterMismatchExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    case "ResourceNumberLimitExceededException":
    case "com.amazonaws.glue#ResourceNumberLimitExceededException":
      throw await deserializeAws_json1_1ResourceNumberLimitExceededExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.glue#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1CreateJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateJobResponse(data, context);
  const response: CreateJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazonaws.glue#AlreadyExistsException":
      throw await deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.glue#ConcurrentModificationException":
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.glue#IdempotentParameterMismatchException":
      throw await deserializeAws_json1_1IdempotentParameterMismatchExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    case "ResourceNumberLimitExceededException":
    case "com.amazonaws.glue#ResourceNumberLimitExceededException":
      throw await deserializeAws_json1_1ResourceNumberLimitExceededExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1CreateMLTransformCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMLTransformCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateMLTransformCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateMLTransformResponse(data, context);
  const response: CreateMLTransformCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateMLTransformCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMLTransformCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.glue#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AlreadyExistsException":
    case "com.amazonaws.glue#AlreadyExistsException":
      throw await deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context);
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.glue#IdempotentParameterMismatchException":
      throw await deserializeAws_json1_1IdempotentParameterMismatchExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    case "ResourceNumberLimitExceededException":
    case "com.amazonaws.glue#ResourceNumberLimitExceededException":
      throw await deserializeAws_json1_1ResourceNumberLimitExceededExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1CreatePartitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePartitionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreatePartitionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreatePartitionResponse(data, context);
  const response: CreatePartitionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreatePartitionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePartitionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazonaws.glue#AlreadyExistsException":
      throw await deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "GlueEncryptionException":
    case "com.amazonaws.glue#GlueEncryptionException":
      throw await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    case "ResourceNumberLimitExceededException":
    case "com.amazonaws.glue#ResourceNumberLimitExceededException":
      throw await deserializeAws_json1_1ResourceNumberLimitExceededExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1CreatePartitionIndexCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePartitionIndexCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreatePartitionIndexCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreatePartitionIndexResponse(data, context);
  const response: CreatePartitionIndexCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreatePartitionIndexCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePartitionIndexCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazonaws.glue#AlreadyExistsException":
      throw await deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "GlueEncryptionException":
    case "com.amazonaws.glue#GlueEncryptionException":
      throw await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    case "ResourceNumberLimitExceededException":
    case "com.amazonaws.glue#ResourceNumberLimitExceededException":
      throw await deserializeAws_json1_1ResourceNumberLimitExceededExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1CreateRegistryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRegistryCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateRegistryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateRegistryResponse(data, context);
  const response: CreateRegistryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateRegistryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRegistryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.glue#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AlreadyExistsException":
    case "com.amazonaws.glue#AlreadyExistsException":
      throw await deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.glue#ConcurrentModificationException":
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ResourceNumberLimitExceededException":
    case "com.amazonaws.glue#ResourceNumberLimitExceededException":
      throw await deserializeAws_json1_1ResourceNumberLimitExceededExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1CreateSchemaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSchemaCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateSchemaCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateSchemaResponse(data, context);
  const response: CreateSchemaCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateSchemaCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSchemaCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.glue#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AlreadyExistsException":
    case "com.amazonaws.glue#AlreadyExistsException":
      throw await deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.glue#ConcurrentModificationException":
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ResourceNumberLimitExceededException":
    case "com.amazonaws.glue#ResourceNumberLimitExceededException":
      throw await deserializeAws_json1_1ResourceNumberLimitExceededExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1CreateScriptCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateScriptCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateScriptCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateScriptResponse(data, context);
  const response: CreateScriptCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateScriptCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateScriptCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1CreateSecurityConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSecurityConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateSecurityConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateSecurityConfigurationResponse(data, context);
  const response: CreateSecurityConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateSecurityConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSecurityConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazonaws.glue#AlreadyExistsException":
      throw await deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    case "ResourceNumberLimitExceededException":
    case "com.amazonaws.glue#ResourceNumberLimitExceededException":
      throw await deserializeAws_json1_1ResourceNumberLimitExceededExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1CreateSessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSessionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateSessionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateSessionResponse(data, context);
  const response: CreateSessionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateSessionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSessionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.glue#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AlreadyExistsException":
    case "com.amazonaws.glue#AlreadyExistsException":
      throw await deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context);
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.glue#IdempotentParameterMismatchException":
      throw await deserializeAws_json1_1IdempotentParameterMismatchExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    case "ResourceNumberLimitExceededException":
    case "com.amazonaws.glue#ResourceNumberLimitExceededException":
      throw await deserializeAws_json1_1ResourceNumberLimitExceededExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.glue#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1CreateTableCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTableCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateTableCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateTableResponse(data, context);
  const response: CreateTableCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateTableCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTableCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazonaws.glue#AlreadyExistsException":
      throw await deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.glue#ConcurrentModificationException":
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "GlueEncryptionException":
    case "com.amazonaws.glue#GlueEncryptionException":
      throw await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    case "ResourceNotReadyException":
    case "com.amazonaws.glue#ResourceNotReadyException":
      throw await deserializeAws_json1_1ResourceNotReadyExceptionResponse(parsedOutput, context);
    case "ResourceNumberLimitExceededException":
    case "com.amazonaws.glue#ResourceNumberLimitExceededException":
      throw await deserializeAws_json1_1ResourceNumberLimitExceededExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1CreateTriggerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTriggerCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateTriggerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateTriggerResponse(data, context);
  const response: CreateTriggerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateTriggerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTriggerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazonaws.glue#AlreadyExistsException":
      throw await deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.glue#ConcurrentModificationException":
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.glue#IdempotentParameterMismatchException":
      throw await deserializeAws_json1_1IdempotentParameterMismatchExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    case "ResourceNumberLimitExceededException":
    case "com.amazonaws.glue#ResourceNumberLimitExceededException":
      throw await deserializeAws_json1_1ResourceNumberLimitExceededExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1CreateUserDefinedFunctionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUserDefinedFunctionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateUserDefinedFunctionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateUserDefinedFunctionResponse(data, context);
  const response: CreateUserDefinedFunctionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateUserDefinedFunctionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUserDefinedFunctionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazonaws.glue#AlreadyExistsException":
      throw await deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "GlueEncryptionException":
    case "com.amazonaws.glue#GlueEncryptionException":
      throw await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    case "ResourceNumberLimitExceededException":
    case "com.amazonaws.glue#ResourceNumberLimitExceededException":
      throw await deserializeAws_json1_1ResourceNumberLimitExceededExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1CreateWorkflowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWorkflowCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateWorkflowCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateWorkflowResponse(data, context);
  const response: CreateWorkflowCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateWorkflowCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWorkflowCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazonaws.glue#AlreadyExistsException":
      throw await deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.glue#ConcurrentModificationException":
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    case "ResourceNumberLimitExceededException":
    case "com.amazonaws.glue#ResourceNumberLimitExceededException":
      throw await deserializeAws_json1_1ResourceNumberLimitExceededExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1DeleteBlueprintCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBlueprintCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteBlueprintCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteBlueprintResponse(data, context);
  const response: DeleteBlueprintCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteBlueprintCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBlueprintCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1DeleteClassifierCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteClassifierCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteClassifierCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteClassifierResponse(data, context);
  const response: DeleteClassifierCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteClassifierCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteClassifierCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1DeleteColumnStatisticsForPartitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteColumnStatisticsForPartitionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteColumnStatisticsForPartitionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteColumnStatisticsForPartitionResponse(data, context);
  const response: DeleteColumnStatisticsForPartitionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteColumnStatisticsForPartitionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteColumnStatisticsForPartitionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "GlueEncryptionException":
    case "com.amazonaws.glue#GlueEncryptionException":
      throw await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1DeleteColumnStatisticsForTableCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteColumnStatisticsForTableCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteColumnStatisticsForTableCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteColumnStatisticsForTableResponse(data, context);
  const response: DeleteColumnStatisticsForTableCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteColumnStatisticsForTableCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteColumnStatisticsForTableCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "GlueEncryptionException":
    case "com.amazonaws.glue#GlueEncryptionException":
      throw await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1DeleteConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConnectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteConnectionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteConnectionResponse(data, context);
  const response: DeleteConnectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteConnectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConnectionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1DeleteCrawlerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCrawlerCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteCrawlerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteCrawlerResponse(data, context);
  const response: DeleteCrawlerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteCrawlerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCrawlerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CrawlerRunningException":
    case "com.amazonaws.glue#CrawlerRunningException":
      throw await deserializeAws_json1_1CrawlerRunningExceptionResponse(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    case "SchedulerTransitioningException":
    case "com.amazonaws.glue#SchedulerTransitioningException":
      throw await deserializeAws_json1_1SchedulerTransitioningExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1DeleteCustomEntityTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCustomEntityTypeCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteCustomEntityTypeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteCustomEntityTypeResponse(data, context);
  const response: DeleteCustomEntityTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteCustomEntityTypeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCustomEntityTypeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.glue#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1DeleteDatabaseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDatabaseCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteDatabaseCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteDatabaseResponse(data, context);
  const response: DeleteDatabaseCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteDatabaseCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDatabaseCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.glue#ConcurrentModificationException":
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1DeleteDevEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDevEndpointCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteDevEndpointCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteDevEndpointResponse(data, context);
  const response: DeleteDevEndpointCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteDevEndpointCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDevEndpointCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1DeleteJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteJobResponse(data, context);
  const response: DeleteJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1DeleteMLTransformCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMLTransformCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteMLTransformCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteMLTransformResponse(data, context);
  const response: DeleteMLTransformCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteMLTransformCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMLTransformCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1DeletePartitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePartitionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeletePartitionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeletePartitionResponse(data, context);
  const response: DeletePartitionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeletePartitionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePartitionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1DeletePartitionIndexCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePartitionIndexCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeletePartitionIndexCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeletePartitionIndexResponse(data, context);
  const response: DeletePartitionIndexCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeletePartitionIndexCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePartitionIndexCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.glue#ConflictException":
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "GlueEncryptionException":
    case "com.amazonaws.glue#GlueEncryptionException":
      throw await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1DeleteRegistryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRegistryCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteRegistryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteRegistryResponse(data, context);
  const response: DeleteRegistryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteRegistryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRegistryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.glue#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.glue#ConcurrentModificationException":
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1DeleteResourcePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResourcePolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteResourcePolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteResourcePolicyResponse(data, context);
  const response: DeleteResourcePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteResourcePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResourcePolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConditionCheckFailureException":
    case "com.amazonaws.glue#ConditionCheckFailureException":
      throw await deserializeAws_json1_1ConditionCheckFailureExceptionResponse(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1DeleteSchemaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSchemaCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteSchemaCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteSchemaResponse(data, context);
  const response: DeleteSchemaCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteSchemaCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSchemaCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.glue#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.glue#ConcurrentModificationException":
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1DeleteSchemaVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSchemaVersionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteSchemaVersionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteSchemaVersionsResponse(data, context);
  const response: DeleteSchemaVersionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteSchemaVersionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSchemaVersionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.glue#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.glue#ConcurrentModificationException":
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1DeleteSecurityConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSecurityConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteSecurityConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteSecurityConfigurationResponse(data, context);
  const response: DeleteSecurityConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteSecurityConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSecurityConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1DeleteSessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSessionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteSessionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteSessionResponse(data, context);
  const response: DeleteSessionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteSessionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSessionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.glue#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.glue#ConcurrentModificationException":
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "IllegalSessionStateException":
    case "com.amazonaws.glue#IllegalSessionStateException":
      throw await deserializeAws_json1_1IllegalSessionStateExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1DeleteTableCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTableCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteTableCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteTableResponse(data, context);
  const response: DeleteTableCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteTableCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTableCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.glue#ConcurrentModificationException":
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    case "ResourceNotReadyException":
    case "com.amazonaws.glue#ResourceNotReadyException":
      throw await deserializeAws_json1_1ResourceNotReadyExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1DeleteTableVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTableVersionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteTableVersionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteTableVersionResponse(data, context);
  const response: DeleteTableVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteTableVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTableVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1DeleteTriggerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTriggerCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteTriggerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteTriggerResponse(data, context);
  const response: DeleteTriggerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteTriggerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTriggerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.glue#ConcurrentModificationException":
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1DeleteUserDefinedFunctionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUserDefinedFunctionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteUserDefinedFunctionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteUserDefinedFunctionResponse(data, context);
  const response: DeleteUserDefinedFunctionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteUserDefinedFunctionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUserDefinedFunctionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1DeleteWorkflowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWorkflowCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteWorkflowCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteWorkflowResponse(data, context);
  const response: DeleteWorkflowCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteWorkflowCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWorkflowCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.glue#ConcurrentModificationException":
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1GetBlueprintCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBlueprintCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetBlueprintCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetBlueprintResponse(data, context);
  const response: GetBlueprintCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetBlueprintCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBlueprintCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1GetBlueprintRunCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBlueprintRunCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetBlueprintRunCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetBlueprintRunResponse(data, context);
  const response: GetBlueprintRunCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetBlueprintRunCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBlueprintRunCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1GetBlueprintRunsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBlueprintRunsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetBlueprintRunsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetBlueprintRunsResponse(data, context);
  const response: GetBlueprintRunsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetBlueprintRunsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBlueprintRunsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1GetCatalogImportStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCatalogImportStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetCatalogImportStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetCatalogImportStatusResponse(data, context);
  const response: GetCatalogImportStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetCatalogImportStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCatalogImportStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1GetClassifierCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetClassifierCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetClassifierCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetClassifierResponse(data, context);
  const response: GetClassifierCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetClassifierCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetClassifierCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1GetClassifiersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetClassifiersCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetClassifiersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetClassifiersResponse(data, context);
  const response: GetClassifiersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetClassifiersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetClassifiersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1GetColumnStatisticsForPartitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetColumnStatisticsForPartitionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetColumnStatisticsForPartitionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetColumnStatisticsForPartitionResponse(data, context);
  const response: GetColumnStatisticsForPartitionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetColumnStatisticsForPartitionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetColumnStatisticsForPartitionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "GlueEncryptionException":
    case "com.amazonaws.glue#GlueEncryptionException":
      throw await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1GetColumnStatisticsForTableCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetColumnStatisticsForTableCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetColumnStatisticsForTableCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetColumnStatisticsForTableResponse(data, context);
  const response: GetColumnStatisticsForTableCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetColumnStatisticsForTableCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetColumnStatisticsForTableCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "GlueEncryptionException":
    case "com.amazonaws.glue#GlueEncryptionException":
      throw await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1GetConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConnectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetConnectionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetConnectionResponse(data, context);
  const response: GetConnectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetConnectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConnectionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "GlueEncryptionException":
    case "com.amazonaws.glue#GlueEncryptionException":
      throw await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1GetConnectionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConnectionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetConnectionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetConnectionsResponse(data, context);
  const response: GetConnectionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetConnectionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConnectionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "GlueEncryptionException":
    case "com.amazonaws.glue#GlueEncryptionException":
      throw await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1GetCrawlerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCrawlerCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetCrawlerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetCrawlerResponse(data, context);
  const response: GetCrawlerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetCrawlerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCrawlerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1GetCrawlerMetricsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCrawlerMetricsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetCrawlerMetricsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetCrawlerMetricsResponse(data, context);
  const response: GetCrawlerMetricsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetCrawlerMetricsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCrawlerMetricsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1GetCrawlersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCrawlersCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetCrawlersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetCrawlersResponse(data, context);
  const response: GetCrawlersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetCrawlersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCrawlersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1GetCustomEntityTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCustomEntityTypeCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetCustomEntityTypeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetCustomEntityTypeResponse(data, context);
  const response: GetCustomEntityTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetCustomEntityTypeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCustomEntityTypeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.glue#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1GetDatabaseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDatabaseCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetDatabaseCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetDatabaseResponse(data, context);
  const response: GetDatabaseCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetDatabaseCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDatabaseCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "GlueEncryptionException":
    case "com.amazonaws.glue#GlueEncryptionException":
      throw await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1GetDatabasesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDatabasesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetDatabasesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetDatabasesResponse(data, context);
  const response: GetDatabasesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetDatabasesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDatabasesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "GlueEncryptionException":
    case "com.amazonaws.glue#GlueEncryptionException":
      throw await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1GetDataCatalogEncryptionSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDataCatalogEncryptionSettingsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetDataCatalogEncryptionSettingsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetDataCatalogEncryptionSettingsResponse(data, context);
  const response: GetDataCatalogEncryptionSettingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetDataCatalogEncryptionSettingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDataCatalogEncryptionSettingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1GetDataflowGraphCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDataflowGraphCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetDataflowGraphCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetDataflowGraphResponse(data, context);
  const response: GetDataflowGraphCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetDataflowGraphCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDataflowGraphCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1GetDevEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDevEndpointCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetDevEndpointCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetDevEndpointResponse(data, context);
  const response: GetDevEndpointCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetDevEndpointCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDevEndpointCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1GetDevEndpointsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDevEndpointsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetDevEndpointsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetDevEndpointsResponse(data, context);
  const response: GetDevEndpointsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetDevEndpointsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDevEndpointsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1GetJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetJobResponse(data, context);
  const response: GetJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1GetJobBookmarkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetJobBookmarkCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetJobBookmarkCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetJobBookmarkResponse(data, context);
  const response: GetJobBookmarkCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetJobBookmarkCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetJobBookmarkCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.glue#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1GetJobRunCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetJobRunCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetJobRunCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetJobRunResponse(data, context);
  const response: GetJobRunCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetJobRunCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetJobRunCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1GetJobRunsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetJobRunsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetJobRunsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetJobRunsResponse(data, context);
  const response: GetJobRunsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetJobRunsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetJobRunsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1GetJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetJobsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetJobsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetJobsResponse(data, context);
  const response: GetJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1GetMappingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMappingCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetMappingCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetMappingResponse(data, context);
  const response: GetMappingCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetMappingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMappingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1GetMLTaskRunCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMLTaskRunCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetMLTaskRunCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetMLTaskRunResponse(data, context);
  const response: GetMLTaskRunCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetMLTaskRunCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMLTaskRunCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1GetMLTaskRunsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMLTaskRunsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetMLTaskRunsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetMLTaskRunsResponse(data, context);
  const response: GetMLTaskRunsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetMLTaskRunsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMLTaskRunsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1GetMLTransformCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMLTransformCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetMLTransformCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetMLTransformResponse(data, context);
  const response: GetMLTransformCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetMLTransformCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMLTransformCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1GetMLTransformsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMLTransformsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetMLTransformsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetMLTransformsResponse(data, context);
  const response: GetMLTransformsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetMLTransformsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMLTransformsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1GetPartitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPartitionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetPartitionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetPartitionResponse(data, context);
  const response: GetPartitionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetPartitionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPartitionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "GlueEncryptionException":
    case "com.amazonaws.glue#GlueEncryptionException":
      throw await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1GetPartitionIndexesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPartitionIndexesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetPartitionIndexesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetPartitionIndexesResponse(data, context);
  const response: GetPartitionIndexesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetPartitionIndexesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPartitionIndexesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.glue#ConflictException":
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1GetPartitionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPartitionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetPartitionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetPartitionsResponse(data, context);
  const response: GetPartitionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetPartitionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPartitionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "GlueEncryptionException":
    case "com.amazonaws.glue#GlueEncryptionException":
      throw await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "InvalidStateException":
    case "com.amazonaws.glue#InvalidStateException":
      throw await deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    case "ResourceNotReadyException":
    case "com.amazonaws.glue#ResourceNotReadyException":
      throw await deserializeAws_json1_1ResourceNotReadyExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1GetPlanCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPlanCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetPlanCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetPlanResponse(data, context);
  const response: GetPlanCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetPlanCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPlanCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1GetRegistryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRegistryCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetRegistryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetRegistryResponse(data, context);
  const response: GetRegistryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetRegistryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRegistryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.glue#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1GetResourcePoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourcePoliciesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetResourcePoliciesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetResourcePoliciesResponse(data, context);
  const response: GetResourcePoliciesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetResourcePoliciesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourcePoliciesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "GlueEncryptionException":
    case "com.amazonaws.glue#GlueEncryptionException":
      throw await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1GetResourcePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourcePolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetResourcePolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetResourcePolicyResponse(data, context);
  const response: GetResourcePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetResourcePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourcePolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1GetSchemaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSchemaCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetSchemaCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetSchemaResponse(data, context);
  const response: GetSchemaCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetSchemaCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSchemaCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.glue#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1GetSchemaByDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSchemaByDefinitionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetSchemaByDefinitionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetSchemaByDefinitionResponse(data, context);
  const response: GetSchemaByDefinitionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetSchemaByDefinitionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSchemaByDefinitionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.glue#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1GetSchemaVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSchemaVersionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetSchemaVersionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetSchemaVersionResponse(data, context);
  const response: GetSchemaVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetSchemaVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSchemaVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.glue#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1GetSchemaVersionsDiffCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSchemaVersionsDiffCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetSchemaVersionsDiffCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetSchemaVersionsDiffResponse(data, context);
  const response: GetSchemaVersionsDiffCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetSchemaVersionsDiffCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSchemaVersionsDiffCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.glue#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1GetSecurityConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSecurityConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetSecurityConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetSecurityConfigurationResponse(data, context);
  const response: GetSecurityConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetSecurityConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSecurityConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1GetSecurityConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSecurityConfigurationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetSecurityConfigurationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetSecurityConfigurationsResponse(data, context);
  const response: GetSecurityConfigurationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetSecurityConfigurationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSecurityConfigurationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1GetSessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSessionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetSessionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetSessionResponse(data, context);
  const response: GetSessionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetSessionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSessionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.glue#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1GetStatementCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetStatementCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetStatementCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetStatementResponse(data, context);
  const response: GetStatementCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetStatementCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetStatementCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.glue#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "IllegalSessionStateException":
    case "com.amazonaws.glue#IllegalSessionStateException":
      throw await deserializeAws_json1_1IllegalSessionStateExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1GetTableCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTableCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetTableCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetTableResponse(data, context);
  const response: GetTableCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetTableCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTableCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "GlueEncryptionException":
    case "com.amazonaws.glue#GlueEncryptionException":
      throw await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    case "ResourceNotReadyException":
    case "com.amazonaws.glue#ResourceNotReadyException":
      throw await deserializeAws_json1_1ResourceNotReadyExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1GetTablesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTablesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetTablesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetTablesResponse(data, context);
  const response: GetTablesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetTablesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTablesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "GlueEncryptionException":
    case "com.amazonaws.glue#GlueEncryptionException":
      throw await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1GetTableVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTableVersionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetTableVersionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetTableVersionResponse(data, context);
  const response: GetTableVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetTableVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTableVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "GlueEncryptionException":
    case "com.amazonaws.glue#GlueEncryptionException":
      throw await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1GetTableVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTableVersionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetTableVersionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetTableVersionsResponse(data, context);
  const response: GetTableVersionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetTableVersionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTableVersionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "GlueEncryptionException":
    case "com.amazonaws.glue#GlueEncryptionException":
      throw await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1GetTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTagsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetTagsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetTagsResponse(data, context);
  const response: GetTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetTagsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTagsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1GetTriggerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTriggerCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetTriggerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetTriggerResponse(data, context);
  const response: GetTriggerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetTriggerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTriggerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1GetTriggersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTriggersCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetTriggersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetTriggersResponse(data, context);
  const response: GetTriggersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetTriggersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTriggersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1GetUnfilteredPartitionMetadataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUnfilteredPartitionMetadataCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetUnfilteredPartitionMetadataCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetUnfilteredPartitionMetadataResponse(data, context);
  const response: GetUnfilteredPartitionMetadataCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetUnfilteredPartitionMetadataCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUnfilteredPartitionMetadataCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "GlueEncryptionException":
    case "com.amazonaws.glue#GlueEncryptionException":
      throw await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    case "PermissionTypeMismatchException":
    case "com.amazonaws.glue#PermissionTypeMismatchException":
      throw await deserializeAws_json1_1PermissionTypeMismatchExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1GetUnfilteredPartitionsMetadataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUnfilteredPartitionsMetadataCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetUnfilteredPartitionsMetadataCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetUnfilteredPartitionsMetadataResponse(data, context);
  const response: GetUnfilteredPartitionsMetadataCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetUnfilteredPartitionsMetadataCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUnfilteredPartitionsMetadataCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "GlueEncryptionException":
    case "com.amazonaws.glue#GlueEncryptionException":
      throw await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    case "PermissionTypeMismatchException":
    case "com.amazonaws.glue#PermissionTypeMismatchException":
      throw await deserializeAws_json1_1PermissionTypeMismatchExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1GetUnfilteredTableMetadataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUnfilteredTableMetadataCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetUnfilteredTableMetadataCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetUnfilteredTableMetadataResponse(data, context);
  const response: GetUnfilteredTableMetadataCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetUnfilteredTableMetadataCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUnfilteredTableMetadataCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "GlueEncryptionException":
    case "com.amazonaws.glue#GlueEncryptionException":
      throw await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    case "PermissionTypeMismatchException":
    case "com.amazonaws.glue#PermissionTypeMismatchException":
      throw await deserializeAws_json1_1PermissionTypeMismatchExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1GetUserDefinedFunctionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUserDefinedFunctionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetUserDefinedFunctionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetUserDefinedFunctionResponse(data, context);
  const response: GetUserDefinedFunctionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetUserDefinedFunctionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUserDefinedFunctionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "GlueEncryptionException":
    case "com.amazonaws.glue#GlueEncryptionException":
      throw await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1GetUserDefinedFunctionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUserDefinedFunctionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetUserDefinedFunctionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetUserDefinedFunctionsResponse(data, context);
  const response: GetUserDefinedFunctionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetUserDefinedFunctionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUserDefinedFunctionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "GlueEncryptionException":
    case "com.amazonaws.glue#GlueEncryptionException":
      throw await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1GetWorkflowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWorkflowCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetWorkflowCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetWorkflowResponse(data, context);
  const response: GetWorkflowCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetWorkflowCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWorkflowCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1GetWorkflowRunCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWorkflowRunCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetWorkflowRunCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetWorkflowRunResponse(data, context);
  const response: GetWorkflowRunCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetWorkflowRunCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWorkflowRunCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1GetWorkflowRunPropertiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWorkflowRunPropertiesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetWorkflowRunPropertiesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetWorkflowRunPropertiesResponse(data, context);
  const response: GetWorkflowRunPropertiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetWorkflowRunPropertiesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWorkflowRunPropertiesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1GetWorkflowRunsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWorkflowRunsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetWorkflowRunsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetWorkflowRunsResponse(data, context);
  const response: GetWorkflowRunsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetWorkflowRunsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWorkflowRunsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1ImportCatalogToGlueCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportCatalogToGlueCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ImportCatalogToGlueCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ImportCatalogToGlueResponse(data, context);
  const response: ImportCatalogToGlueCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ImportCatalogToGlueCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportCatalogToGlueCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1ListBlueprintsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBlueprintsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListBlueprintsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListBlueprintsResponse(data, context);
  const response: ListBlueprintsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListBlueprintsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBlueprintsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1ListCrawlersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCrawlersCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListCrawlersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListCrawlersResponse(data, context);
  const response: ListCrawlersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListCrawlersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCrawlersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1ListCrawlsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCrawlsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListCrawlsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListCrawlsResponse(data, context);
  const response: ListCrawlsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListCrawlsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCrawlsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1ListCustomEntityTypesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCustomEntityTypesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListCustomEntityTypesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListCustomEntityTypesResponse(data, context);
  const response: ListCustomEntityTypesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListCustomEntityTypesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCustomEntityTypesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1ListDevEndpointsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDevEndpointsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListDevEndpointsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListDevEndpointsResponse(data, context);
  const response: ListDevEndpointsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListDevEndpointsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDevEndpointsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1ListJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJobsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListJobsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListJobsResponse(data, context);
  const response: ListJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1ListMLTransformsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMLTransformsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListMLTransformsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListMLTransformsResponse(data, context);
  const response: ListMLTransformsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListMLTransformsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMLTransformsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1ListRegistriesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRegistriesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListRegistriesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListRegistriesResponse(data, context);
  const response: ListRegistriesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListRegistriesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRegistriesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.glue#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1ListSchemasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSchemasCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListSchemasCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListSchemasResponse(data, context);
  const response: ListSchemasCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListSchemasCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSchemasCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.glue#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1ListSchemaVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSchemaVersionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListSchemaVersionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListSchemaVersionsResponse(data, context);
  const response: ListSchemaVersionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListSchemaVersionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSchemaVersionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.glue#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1ListSessionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSessionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListSessionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListSessionsResponse(data, context);
  const response: ListSessionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListSessionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSessionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.glue#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1ListStatementsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStatementsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListStatementsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListStatementsResponse(data, context);
  const response: ListStatementsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListStatementsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStatementsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.glue#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "IllegalSessionStateException":
    case "com.amazonaws.glue#IllegalSessionStateException":
      throw await deserializeAws_json1_1IllegalSessionStateExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1ListTriggersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTriggersCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListTriggersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTriggersResponse(data, context);
  const response: ListTriggersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListTriggersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTriggersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1ListWorkflowsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWorkflowsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListWorkflowsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListWorkflowsResponse(data, context);
  const response: ListWorkflowsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListWorkflowsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWorkflowsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1PutDataCatalogEncryptionSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutDataCatalogEncryptionSettingsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PutDataCatalogEncryptionSettingsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutDataCatalogEncryptionSettingsResponse(data, context);
  const response: PutDataCatalogEncryptionSettingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutDataCatalogEncryptionSettingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutDataCatalogEncryptionSettingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1PutResourcePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutResourcePolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PutResourcePolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutResourcePolicyResponse(data, context);
  const response: PutResourcePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutResourcePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutResourcePolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConditionCheckFailureException":
    case "com.amazonaws.glue#ConditionCheckFailureException":
      throw await deserializeAws_json1_1ConditionCheckFailureExceptionResponse(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1PutSchemaVersionMetadataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutSchemaVersionMetadataCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PutSchemaVersionMetadataCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutSchemaVersionMetadataResponse(data, context);
  const response: PutSchemaVersionMetadataCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutSchemaVersionMetadataCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutSchemaVersionMetadataCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.glue#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AlreadyExistsException":
    case "com.amazonaws.glue#AlreadyExistsException":
      throw await deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ResourceNumberLimitExceededException":
    case "com.amazonaws.glue#ResourceNumberLimitExceededException":
      throw await deserializeAws_json1_1ResourceNumberLimitExceededExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1PutWorkflowRunPropertiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutWorkflowRunPropertiesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PutWorkflowRunPropertiesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutWorkflowRunPropertiesResponse(data, context);
  const response: PutWorkflowRunPropertiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutWorkflowRunPropertiesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutWorkflowRunPropertiesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazonaws.glue#AlreadyExistsException":
      throw await deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.glue#ConcurrentModificationException":
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    case "ResourceNumberLimitExceededException":
    case "com.amazonaws.glue#ResourceNumberLimitExceededException":
      throw await deserializeAws_json1_1ResourceNumberLimitExceededExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1QuerySchemaVersionMetadataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<QuerySchemaVersionMetadataCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1QuerySchemaVersionMetadataCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1QuerySchemaVersionMetadataResponse(data, context);
  const response: QuerySchemaVersionMetadataCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1QuerySchemaVersionMetadataCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<QuerySchemaVersionMetadataCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.glue#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1RegisterSchemaVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterSchemaVersionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1RegisterSchemaVersionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RegisterSchemaVersionResponse(data, context);
  const response: RegisterSchemaVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RegisterSchemaVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterSchemaVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.glue#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.glue#ConcurrentModificationException":
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ResourceNumberLimitExceededException":
    case "com.amazonaws.glue#ResourceNumberLimitExceededException":
      throw await deserializeAws_json1_1ResourceNumberLimitExceededExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1RemoveSchemaVersionMetadataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveSchemaVersionMetadataCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1RemoveSchemaVersionMetadataCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RemoveSchemaVersionMetadataResponse(data, context);
  const response: RemoveSchemaVersionMetadataCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RemoveSchemaVersionMetadataCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveSchemaVersionMetadataCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.glue#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1ResetJobBookmarkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResetJobBookmarkCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ResetJobBookmarkCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ResetJobBookmarkResponse(data, context);
  const response: ResetJobBookmarkCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ResetJobBookmarkCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResetJobBookmarkCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1ResumeWorkflowRunCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResumeWorkflowRunCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ResumeWorkflowRunCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ResumeWorkflowRunResponse(data, context);
  const response: ResumeWorkflowRunCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ResumeWorkflowRunCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResumeWorkflowRunCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentRunsExceededException":
    case "com.amazonaws.glue#ConcurrentRunsExceededException":
      throw await deserializeAws_json1_1ConcurrentRunsExceededExceptionResponse(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "IllegalWorkflowStateException":
    case "com.amazonaws.glue#IllegalWorkflowStateException":
      throw await deserializeAws_json1_1IllegalWorkflowStateExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1RunStatementCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RunStatementCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1RunStatementCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RunStatementResponse(data, context);
  const response: RunStatementCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RunStatementCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RunStatementCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.glue#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "IllegalSessionStateException":
    case "com.amazonaws.glue#IllegalSessionStateException":
      throw await deserializeAws_json1_1IllegalSessionStateExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    case "ResourceNumberLimitExceededException":
    case "com.amazonaws.glue#ResourceNumberLimitExceededException":
      throw await deserializeAws_json1_1ResourceNumberLimitExceededExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.glue#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1SearchTablesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchTablesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1SearchTablesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1SearchTablesResponse(data, context);
  const response: SearchTablesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1SearchTablesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchTablesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1StartBlueprintRunCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartBlueprintRunCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StartBlueprintRunCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartBlueprintRunResponse(data, context);
  const response: StartBlueprintRunCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StartBlueprintRunCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartBlueprintRunCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "IllegalBlueprintStateException":
    case "com.amazonaws.glue#IllegalBlueprintStateException":
      throw await deserializeAws_json1_1IllegalBlueprintStateExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    case "ResourceNumberLimitExceededException":
    case "com.amazonaws.glue#ResourceNumberLimitExceededException":
      throw await deserializeAws_json1_1ResourceNumberLimitExceededExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1StartCrawlerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartCrawlerCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StartCrawlerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartCrawlerResponse(data, context);
  const response: StartCrawlerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StartCrawlerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartCrawlerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CrawlerRunningException":
    case "com.amazonaws.glue#CrawlerRunningException":
      throw await deserializeAws_json1_1CrawlerRunningExceptionResponse(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1StartCrawlerScheduleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartCrawlerScheduleCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StartCrawlerScheduleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartCrawlerScheduleResponse(data, context);
  const response: StartCrawlerScheduleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StartCrawlerScheduleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartCrawlerScheduleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "NoScheduleException":
    case "com.amazonaws.glue#NoScheduleException":
      throw await deserializeAws_json1_1NoScheduleExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    case "SchedulerRunningException":
    case "com.amazonaws.glue#SchedulerRunningException":
      throw await deserializeAws_json1_1SchedulerRunningExceptionResponse(parsedOutput, context);
    case "SchedulerTransitioningException":
    case "com.amazonaws.glue#SchedulerTransitioningException":
      throw await deserializeAws_json1_1SchedulerTransitioningExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1StartExportLabelsTaskRunCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartExportLabelsTaskRunCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StartExportLabelsTaskRunCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartExportLabelsTaskRunResponse(data, context);
  const response: StartExportLabelsTaskRunCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StartExportLabelsTaskRunCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartExportLabelsTaskRunCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1StartImportLabelsTaskRunCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartImportLabelsTaskRunCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StartImportLabelsTaskRunCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartImportLabelsTaskRunResponse(data, context);
  const response: StartImportLabelsTaskRunCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StartImportLabelsTaskRunCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartImportLabelsTaskRunCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    case "ResourceNumberLimitExceededException":
    case "com.amazonaws.glue#ResourceNumberLimitExceededException":
      throw await deserializeAws_json1_1ResourceNumberLimitExceededExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1StartJobRunCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartJobRunCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StartJobRunCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartJobRunResponse(data, context);
  const response: StartJobRunCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StartJobRunCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartJobRunCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentRunsExceededException":
    case "com.amazonaws.glue#ConcurrentRunsExceededException":
      throw await deserializeAws_json1_1ConcurrentRunsExceededExceptionResponse(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    case "ResourceNumberLimitExceededException":
    case "com.amazonaws.glue#ResourceNumberLimitExceededException":
      throw await deserializeAws_json1_1ResourceNumberLimitExceededExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1StartMLEvaluationTaskRunCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartMLEvaluationTaskRunCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StartMLEvaluationTaskRunCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartMLEvaluationTaskRunResponse(data, context);
  const response: StartMLEvaluationTaskRunCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StartMLEvaluationTaskRunCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartMLEvaluationTaskRunCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentRunsExceededException":
    case "com.amazonaws.glue#ConcurrentRunsExceededException":
      throw await deserializeAws_json1_1ConcurrentRunsExceededExceptionResponse(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "MLTransformNotReadyException":
    case "com.amazonaws.glue#MLTransformNotReadyException":
      throw await deserializeAws_json1_1MLTransformNotReadyExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1StartMLLabelingSetGenerationTaskRunCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartMLLabelingSetGenerationTaskRunCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StartMLLabelingSetGenerationTaskRunCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartMLLabelingSetGenerationTaskRunResponse(data, context);
  const response: StartMLLabelingSetGenerationTaskRunCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StartMLLabelingSetGenerationTaskRunCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartMLLabelingSetGenerationTaskRunCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentRunsExceededException":
    case "com.amazonaws.glue#ConcurrentRunsExceededException":
      throw await deserializeAws_json1_1ConcurrentRunsExceededExceptionResponse(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1StartTriggerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartTriggerCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StartTriggerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartTriggerResponse(data, context);
  const response: StartTriggerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StartTriggerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartTriggerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentRunsExceededException":
    case "com.amazonaws.glue#ConcurrentRunsExceededException":
      throw await deserializeAws_json1_1ConcurrentRunsExceededExceptionResponse(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    case "ResourceNumberLimitExceededException":
    case "com.amazonaws.glue#ResourceNumberLimitExceededException":
      throw await deserializeAws_json1_1ResourceNumberLimitExceededExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1StartWorkflowRunCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartWorkflowRunCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StartWorkflowRunCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartWorkflowRunResponse(data, context);
  const response: StartWorkflowRunCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StartWorkflowRunCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartWorkflowRunCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentRunsExceededException":
    case "com.amazonaws.glue#ConcurrentRunsExceededException":
      throw await deserializeAws_json1_1ConcurrentRunsExceededExceptionResponse(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    case "ResourceNumberLimitExceededException":
    case "com.amazonaws.glue#ResourceNumberLimitExceededException":
      throw await deserializeAws_json1_1ResourceNumberLimitExceededExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1StopCrawlerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopCrawlerCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StopCrawlerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StopCrawlerResponse(data, context);
  const response: StopCrawlerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StopCrawlerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopCrawlerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CrawlerNotRunningException":
    case "com.amazonaws.glue#CrawlerNotRunningException":
      throw await deserializeAws_json1_1CrawlerNotRunningExceptionResponse(parsedOutput, context);
    case "CrawlerStoppingException":
    case "com.amazonaws.glue#CrawlerStoppingException":
      throw await deserializeAws_json1_1CrawlerStoppingExceptionResponse(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1StopCrawlerScheduleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopCrawlerScheduleCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StopCrawlerScheduleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StopCrawlerScheduleResponse(data, context);
  const response: StopCrawlerScheduleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StopCrawlerScheduleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopCrawlerScheduleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    case "SchedulerNotRunningException":
    case "com.amazonaws.glue#SchedulerNotRunningException":
      throw await deserializeAws_json1_1SchedulerNotRunningExceptionResponse(parsedOutput, context);
    case "SchedulerTransitioningException":
    case "com.amazonaws.glue#SchedulerTransitioningException":
      throw await deserializeAws_json1_1SchedulerTransitioningExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1StopSessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopSessionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StopSessionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StopSessionResponse(data, context);
  const response: StopSessionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StopSessionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopSessionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.glue#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.glue#ConcurrentModificationException":
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "IllegalSessionStateException":
    case "com.amazonaws.glue#IllegalSessionStateException":
      throw await deserializeAws_json1_1IllegalSessionStateExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1StopTriggerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopTriggerCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StopTriggerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StopTriggerResponse(data, context);
  const response: StopTriggerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StopTriggerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopTriggerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.glue#ConcurrentModificationException":
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1StopWorkflowRunCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopWorkflowRunCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StopWorkflowRunCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StopWorkflowRunResponse(data, context);
  const response: StopWorkflowRunCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StopWorkflowRunCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopWorkflowRunCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "IllegalWorkflowStateException":
    case "com.amazonaws.glue#IllegalWorkflowStateException":
      throw await deserializeAws_json1_1IllegalWorkflowStateExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1TagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1TagResourceResponse(data, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UntagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UntagResourceResponse(data, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1UpdateBlueprintCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBlueprintCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateBlueprintCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateBlueprintResponse(data, context);
  const response: UpdateBlueprintCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateBlueprintCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBlueprintCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.glue#ConcurrentModificationException":
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "IllegalBlueprintStateException":
    case "com.amazonaws.glue#IllegalBlueprintStateException":
      throw await deserializeAws_json1_1IllegalBlueprintStateExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1UpdateClassifierCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateClassifierCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateClassifierCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateClassifierResponse(data, context);
  const response: UpdateClassifierCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateClassifierCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateClassifierCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    case "VersionMismatchException":
    case "com.amazonaws.glue#VersionMismatchException":
      throw await deserializeAws_json1_1VersionMismatchExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1UpdateColumnStatisticsForPartitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateColumnStatisticsForPartitionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateColumnStatisticsForPartitionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateColumnStatisticsForPartitionResponse(data, context);
  const response: UpdateColumnStatisticsForPartitionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateColumnStatisticsForPartitionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateColumnStatisticsForPartitionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "GlueEncryptionException":
    case "com.amazonaws.glue#GlueEncryptionException":
      throw await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1UpdateColumnStatisticsForTableCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateColumnStatisticsForTableCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateColumnStatisticsForTableCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateColumnStatisticsForTableResponse(data, context);
  const response: UpdateColumnStatisticsForTableCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateColumnStatisticsForTableCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateColumnStatisticsForTableCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "GlueEncryptionException":
    case "com.amazonaws.glue#GlueEncryptionException":
      throw await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1UpdateConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConnectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateConnectionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateConnectionResponse(data, context);
  const response: UpdateConnectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateConnectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConnectionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "GlueEncryptionException":
    case "com.amazonaws.glue#GlueEncryptionException":
      throw await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1UpdateCrawlerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCrawlerCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateCrawlerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateCrawlerResponse(data, context);
  const response: UpdateCrawlerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateCrawlerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCrawlerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CrawlerRunningException":
    case "com.amazonaws.glue#CrawlerRunningException":
      throw await deserializeAws_json1_1CrawlerRunningExceptionResponse(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    case "VersionMismatchException":
    case "com.amazonaws.glue#VersionMismatchException":
      throw await deserializeAws_json1_1VersionMismatchExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1UpdateCrawlerScheduleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCrawlerScheduleCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateCrawlerScheduleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateCrawlerScheduleResponse(data, context);
  const response: UpdateCrawlerScheduleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateCrawlerScheduleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCrawlerScheduleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    case "SchedulerTransitioningException":
    case "com.amazonaws.glue#SchedulerTransitioningException":
      throw await deserializeAws_json1_1SchedulerTransitioningExceptionResponse(parsedOutput, context);
    case "VersionMismatchException":
    case "com.amazonaws.glue#VersionMismatchException":
      throw await deserializeAws_json1_1VersionMismatchExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1UpdateDatabaseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDatabaseCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateDatabaseCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateDatabaseResponse(data, context);
  const response: UpdateDatabaseCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateDatabaseCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDatabaseCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.glue#ConcurrentModificationException":
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "GlueEncryptionException":
    case "com.amazonaws.glue#GlueEncryptionException":
      throw await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1UpdateDevEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDevEndpointCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateDevEndpointCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateDevEndpointResponse(data, context);
  const response: UpdateDevEndpointCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateDevEndpointCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDevEndpointCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.glue#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1UpdateJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateJobResponse(data, context);
  const response: UpdateJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.glue#ConcurrentModificationException":
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1UpdateMLTransformCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMLTransformCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateMLTransformCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateMLTransformResponse(data, context);
  const response: UpdateMLTransformCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateMLTransformCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMLTransformCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.glue#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1UpdatePartitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePartitionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdatePartitionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdatePartitionResponse(data, context);
  const response: UpdatePartitionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdatePartitionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePartitionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "GlueEncryptionException":
    case "com.amazonaws.glue#GlueEncryptionException":
      throw await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1UpdateRegistryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRegistryCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateRegistryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateRegistryResponse(data, context);
  const response: UpdateRegistryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateRegistryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRegistryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.glue#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.glue#ConcurrentModificationException":
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1UpdateSchemaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSchemaCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateSchemaCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateSchemaResponse(data, context);
  const response: UpdateSchemaCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateSchemaCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSchemaCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.glue#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.glue#ConcurrentModificationException":
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1UpdateTableCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTableCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateTableCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateTableResponse(data, context);
  const response: UpdateTableCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateTableCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTableCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.glue#ConcurrentModificationException":
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "GlueEncryptionException":
    case "com.amazonaws.glue#GlueEncryptionException":
      throw await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    case "ResourceNotReadyException":
    case "com.amazonaws.glue#ResourceNotReadyException":
      throw await deserializeAws_json1_1ResourceNotReadyExceptionResponse(parsedOutput, context);
    case "ResourceNumberLimitExceededException":
    case "com.amazonaws.glue#ResourceNumberLimitExceededException":
      throw await deserializeAws_json1_1ResourceNumberLimitExceededExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1UpdateTriggerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTriggerCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateTriggerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateTriggerResponse(data, context);
  const response: UpdateTriggerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateTriggerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTriggerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.glue#ConcurrentModificationException":
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1UpdateUserDefinedFunctionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUserDefinedFunctionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateUserDefinedFunctionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateUserDefinedFunctionResponse(data, context);
  const response: UpdateUserDefinedFunctionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateUserDefinedFunctionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUserDefinedFunctionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "GlueEncryptionException":
    case "com.amazonaws.glue#GlueEncryptionException":
      throw await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1UpdateWorkflowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateWorkflowCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateWorkflowCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateWorkflowResponse(data, context);
  const response: UpdateWorkflowCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateWorkflowCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateWorkflowCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.glue#ConcurrentModificationException":
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.glue#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.glue#InternalServiceException":
      throw await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.glue#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.glue#OperationTimeoutException":
      throw await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

const deserializeAws_json1_1AccessDeniedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1AccessDeniedException(body, context);
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1AlreadyExistsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1AlreadyExistsException(body, context);
  const exception = new AlreadyExistsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ConcurrentModificationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConcurrentModificationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ConcurrentModificationException(body, context);
  const exception = new ConcurrentModificationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ConcurrentRunsExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConcurrentRunsExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ConcurrentRunsExceededException(body, context);
  const exception = new ConcurrentRunsExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ConditionCheckFailureExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConditionCheckFailureException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ConditionCheckFailureException(body, context);
  const exception = new ConditionCheckFailureException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ConflictExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConflictException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ConflictException(body, context);
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1CrawlerNotRunningExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CrawlerNotRunningException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1CrawlerNotRunningException(body, context);
  const exception = new CrawlerNotRunningException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1CrawlerRunningExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CrawlerRunningException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1CrawlerRunningException(body, context);
  const exception = new CrawlerRunningException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1CrawlerStoppingExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CrawlerStoppingException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1CrawlerStoppingException(body, context);
  const exception = new CrawlerStoppingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1EntityNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EntityNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1EntityNotFoundException(body, context);
  const exception = new EntityNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1GlueEncryptionExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<GlueEncryptionException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1GlueEncryptionException(body, context);
  const exception = new GlueEncryptionException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1IdempotentParameterMismatchExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IdempotentParameterMismatchException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1IdempotentParameterMismatchException(body, context);
  const exception = new IdempotentParameterMismatchException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1IllegalBlueprintStateExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IllegalBlueprintStateException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1IllegalBlueprintStateException(body, context);
  const exception = new IllegalBlueprintStateException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1IllegalSessionStateExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IllegalSessionStateException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1IllegalSessionStateException(body, context);
  const exception = new IllegalSessionStateException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1IllegalWorkflowStateExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IllegalWorkflowStateException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1IllegalWorkflowStateException(body, context);
  const exception = new IllegalWorkflowStateException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InternalServiceExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServiceException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InternalServiceException(body, context);
  const exception = new InternalServiceException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidInputExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidInputException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidInputException(body, context);
  const exception = new InvalidInputException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidStateExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidStateException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidStateException(body, context);
  const exception = new InvalidStateException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1MLTransformNotReadyExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MLTransformNotReadyException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1MLTransformNotReadyException(body, context);
  const exception = new MLTransformNotReadyException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1NoScheduleExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NoScheduleException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1NoScheduleException(body, context);
  const exception = new NoScheduleException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1OperationTimeoutExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OperationTimeoutException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1OperationTimeoutException(body, context);
  const exception = new OperationTimeoutException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1PermissionTypeMismatchExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PermissionTypeMismatchException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1PermissionTypeMismatchException(body, context);
  const exception = new PermissionTypeMismatchException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ResourceNotReadyExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotReadyException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceNotReadyException(body, context);
  const exception = new ResourceNotReadyException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ResourceNumberLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNumberLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceNumberLimitExceededException(body, context);
  const exception = new ResourceNumberLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1SchedulerNotRunningExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SchedulerNotRunningException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1SchedulerNotRunningException(body, context);
  const exception = new SchedulerNotRunningException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1SchedulerRunningExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SchedulerRunningException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1SchedulerRunningException(body, context);
  const exception = new SchedulerRunningException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1SchedulerTransitioningExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SchedulerTransitioningException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1SchedulerTransitioningException(body, context);
  const exception = new SchedulerTransitioningException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ValidationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ValidationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ValidationException(body, context);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1VersionMismatchExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<VersionMismatchException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1VersionMismatchException(body, context);
  const exception = new VersionMismatchException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const serializeAws_json1_1Action = (input: Action, context: __SerdeContext): any => {
  return {
    ...(input.Arguments != null && { Arguments: serializeAws_json1_1GenericMap(input.Arguments, context) }),
    ...(input.CrawlerName != null && { CrawlerName: input.CrawlerName }),
    ...(input.JobName != null && { JobName: input.JobName }),
    ...(input.NotificationProperty != null && {
      NotificationProperty: serializeAws_json1_1NotificationProperty(input.NotificationProperty, context),
    }),
    ...(input.SecurityConfiguration != null && { SecurityConfiguration: input.SecurityConfiguration }),
    ...(input.Timeout != null && { Timeout: input.Timeout }),
  };
};

const serializeAws_json1_1ActionList = (input: Action[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1Action(entry, context);
    });
};

const serializeAws_json1_1AdditionalOptions = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const serializeAws_json1_1AdditionalPlanOptionsMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const serializeAws_json1_1Aggregate = (input: Aggregate, context: __SerdeContext): any => {
  return {
    ...(input.Aggs != null && { Aggs: serializeAws_json1_1AggregateOperations(input.Aggs, context) }),
    ...(input.Groups != null && { Groups: serializeAws_json1_1GlueStudioPathList(input.Groups, context) }),
    ...(input.Inputs != null && { Inputs: serializeAws_json1_1OneInput(input.Inputs, context) }),
    ...(input.Name != null && { Name: input.Name }),
  };
};

const serializeAws_json1_1AggregateOperation = (input: AggregateOperation, context: __SerdeContext): any => {
  return {
    ...(input.AggFunc != null && { AggFunc: input.AggFunc }),
    ...(input.Column != null && { Column: serializeAws_json1_1EnclosedInStringProperties(input.Column, context) }),
  };
};

const serializeAws_json1_1AggregateOperations = (input: AggregateOperation[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1AggregateOperation(entry, context);
    });
};

const serializeAws_json1_1ApplyMapping = (input: ApplyMapping, context: __SerdeContext): any => {
  return {
    ...(input.Inputs != null && { Inputs: serializeAws_json1_1OneInput(input.Inputs, context) }),
    ...(input.Mapping != null && { Mapping: serializeAws_json1_1Mappings(input.Mapping, context) }),
    ...(input.Name != null && { Name: input.Name }),
  };
};

const serializeAws_json1_1AthenaConnectorSource = (input: AthenaConnectorSource, context: __SerdeContext): any => {
  return {
    ...(input.ConnectionName != null && { ConnectionName: input.ConnectionName }),
    ...(input.ConnectionTable != null && { ConnectionTable: input.ConnectionTable }),
    ...(input.ConnectionType != null && { ConnectionType: input.ConnectionType }),
    ...(input.ConnectorName != null && { ConnectorName: input.ConnectorName }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.OutputSchemas != null && {
      OutputSchemas: serializeAws_json1_1GlueSchemas(input.OutputSchemas, context),
    }),
    ...(input.SchemaName != null && { SchemaName: input.SchemaName }),
  };
};

const serializeAws_json1_1AuditColumnNamesList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1AuditContext = (input: AuditContext, context: __SerdeContext): any => {
  return {
    ...(input.AdditionalAuditContext != null && { AdditionalAuditContext: input.AdditionalAuditContext }),
    ...(input.AllColumnsRequested != null && { AllColumnsRequested: input.AllColumnsRequested }),
    ...(input.RequestedColumns != null && {
      RequestedColumns: serializeAws_json1_1AuditColumnNamesList(input.RequestedColumns, context),
    }),
  };
};

const serializeAws_json1_1BasicCatalogTarget = (input: BasicCatalogTarget, context: __SerdeContext): any => {
  return {
    ...(input.Database != null && { Database: input.Database }),
    ...(input.Inputs != null && { Inputs: serializeAws_json1_1OneInput(input.Inputs, context) }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Table != null && { Table: input.Table }),
  };
};

const serializeAws_json1_1BatchCreatePartitionRequest = (
  input: BatchCreatePartitionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CatalogId != null && { CatalogId: input.CatalogId }),
    ...(input.DatabaseName != null && { DatabaseName: input.DatabaseName }),
    ...(input.PartitionInputList != null && {
      PartitionInputList: serializeAws_json1_1PartitionInputList(input.PartitionInputList, context),
    }),
    ...(input.TableName != null && { TableName: input.TableName }),
  };
};

const serializeAws_json1_1BatchDeleteConnectionRequest = (
  input: BatchDeleteConnectionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CatalogId != null && { CatalogId: input.CatalogId }),
    ...(input.ConnectionNameList != null && {
      ConnectionNameList: serializeAws_json1_1DeleteConnectionNameList(input.ConnectionNameList, context),
    }),
  };
};

const serializeAws_json1_1BatchDeletePartitionRequest = (
  input: BatchDeletePartitionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CatalogId != null && { CatalogId: input.CatalogId }),
    ...(input.DatabaseName != null && { DatabaseName: input.DatabaseName }),
    ...(input.PartitionsToDelete != null && {
      PartitionsToDelete: serializeAws_json1_1BatchDeletePartitionValueList(input.PartitionsToDelete, context),
    }),
    ...(input.TableName != null && { TableName: input.TableName }),
  };
};

const serializeAws_json1_1BatchDeletePartitionValueList = (
  input: PartitionValueList[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1PartitionValueList(entry, context);
    });
};

const serializeAws_json1_1BatchDeleteTableNameList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1BatchDeleteTableRequest = (input: BatchDeleteTableRequest, context: __SerdeContext): any => {
  return {
    ...(input.CatalogId != null && { CatalogId: input.CatalogId }),
    ...(input.DatabaseName != null && { DatabaseName: input.DatabaseName }),
    ...(input.TablesToDelete != null && {
      TablesToDelete: serializeAws_json1_1BatchDeleteTableNameList(input.TablesToDelete, context),
    }),
    ...(input.TransactionId != null && { TransactionId: input.TransactionId }),
  };
};

const serializeAws_json1_1BatchDeleteTableVersionList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1BatchDeleteTableVersionRequest = (
  input: BatchDeleteTableVersionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CatalogId != null && { CatalogId: input.CatalogId }),
    ...(input.DatabaseName != null && { DatabaseName: input.DatabaseName }),
    ...(input.TableName != null && { TableName: input.TableName }),
    ...(input.VersionIds != null && {
      VersionIds: serializeAws_json1_1BatchDeleteTableVersionList(input.VersionIds, context),
    }),
  };
};

const serializeAws_json1_1BatchGetBlueprintNames = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1BatchGetBlueprintsRequest = (
  input: BatchGetBlueprintsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.IncludeBlueprint != null && { IncludeBlueprint: input.IncludeBlueprint }),
    ...(input.IncludeParameterSpec != null && { IncludeParameterSpec: input.IncludeParameterSpec }),
    ...(input.Names != null && { Names: serializeAws_json1_1BatchGetBlueprintNames(input.Names, context) }),
  };
};

const serializeAws_json1_1BatchGetCrawlersRequest = (input: BatchGetCrawlersRequest, context: __SerdeContext): any => {
  return {
    ...(input.CrawlerNames != null && {
      CrawlerNames: serializeAws_json1_1CrawlerNameList(input.CrawlerNames, context),
    }),
  };
};

const serializeAws_json1_1BatchGetCustomEntityTypesRequest = (
  input: BatchGetCustomEntityTypesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Names != null && { Names: serializeAws_json1_1CustomEntityTypeNames(input.Names, context) }),
  };
};

const serializeAws_json1_1BatchGetDevEndpointsRequest = (
  input: BatchGetDevEndpointsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DevEndpointNames != null && {
      DevEndpointNames: serializeAws_json1_1DevEndpointNames(input.DevEndpointNames, context),
    }),
  };
};

const serializeAws_json1_1BatchGetJobsRequest = (input: BatchGetJobsRequest, context: __SerdeContext): any => {
  return {
    ...(input.JobNames != null && { JobNames: serializeAws_json1_1JobNameList(input.JobNames, context) }),
  };
};

const serializeAws_json1_1BatchGetPartitionRequest = (
  input: BatchGetPartitionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CatalogId != null && { CatalogId: input.CatalogId }),
    ...(input.DatabaseName != null && { DatabaseName: input.DatabaseName }),
    ...(input.PartitionsToGet != null && {
      PartitionsToGet: serializeAws_json1_1BatchGetPartitionValueList(input.PartitionsToGet, context),
    }),
    ...(input.TableName != null && { TableName: input.TableName }),
  };
};

const serializeAws_json1_1BatchGetPartitionValueList = (input: PartitionValueList[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1PartitionValueList(entry, context);
    });
};

const serializeAws_json1_1BatchGetTriggersRequest = (input: BatchGetTriggersRequest, context: __SerdeContext): any => {
  return {
    ...(input.TriggerNames != null && {
      TriggerNames: serializeAws_json1_1TriggerNameList(input.TriggerNames, context),
    }),
  };
};

const serializeAws_json1_1BatchGetWorkflowsRequest = (
  input: BatchGetWorkflowsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.IncludeGraph != null && { IncludeGraph: input.IncludeGraph }),
    ...(input.Names != null && { Names: serializeAws_json1_1WorkflowNames(input.Names, context) }),
  };
};

const serializeAws_json1_1BatchStopJobRunJobRunIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1BatchStopJobRunRequest = (input: BatchStopJobRunRequest, context: __SerdeContext): any => {
  return {
    ...(input.JobName != null && { JobName: input.JobName }),
    ...(input.JobRunIds != null && {
      JobRunIds: serializeAws_json1_1BatchStopJobRunJobRunIdList(input.JobRunIds, context),
    }),
  };
};

const serializeAws_json1_1BatchUpdatePartitionRequest = (
  input: BatchUpdatePartitionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CatalogId != null && { CatalogId: input.CatalogId }),
    ...(input.DatabaseName != null && { DatabaseName: input.DatabaseName }),
    ...(input.Entries != null && {
      Entries: serializeAws_json1_1BatchUpdatePartitionRequestEntryList(input.Entries, context),
    }),
    ...(input.TableName != null && { TableName: input.TableName }),
  };
};

const serializeAws_json1_1BatchUpdatePartitionRequestEntry = (
  input: BatchUpdatePartitionRequestEntry,
  context: __SerdeContext
): any => {
  return {
    ...(input.PartitionInput != null && {
      PartitionInput: serializeAws_json1_1PartitionInput(input.PartitionInput, context),
    }),
    ...(input.PartitionValueList != null && {
      PartitionValueList: serializeAws_json1_1BoundedPartitionValueList(input.PartitionValueList, context),
    }),
  };
};

const serializeAws_json1_1BatchUpdatePartitionRequestEntryList = (
  input: BatchUpdatePartitionRequestEntry[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1BatchUpdatePartitionRequestEntry(entry, context);
    });
};

const serializeAws_json1_1BinaryColumnStatisticsData = (
  input: BinaryColumnStatisticsData,
  context: __SerdeContext
): any => {
  return {
    ...(input.AverageLength != null && { AverageLength: __serializeFloat(input.AverageLength) }),
    ...(input.MaximumLength != null && { MaximumLength: input.MaximumLength }),
    ...(input.NumberOfNulls != null && { NumberOfNulls: input.NumberOfNulls }),
  };
};

const serializeAws_json1_1BooleanColumnStatisticsData = (
  input: BooleanColumnStatisticsData,
  context: __SerdeContext
): any => {
  return {
    ...(input.NumberOfFalses != null && { NumberOfFalses: input.NumberOfFalses }),
    ...(input.NumberOfNulls != null && { NumberOfNulls: input.NumberOfNulls }),
    ...(input.NumberOfTrues != null && { NumberOfTrues: input.NumberOfTrues }),
  };
};

const serializeAws_json1_1BoundedPartitionValueList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1CancelMLTaskRunRequest = (input: CancelMLTaskRunRequest, context: __SerdeContext): any => {
  return {
    ...(input.TaskRunId != null && { TaskRunId: input.TaskRunId }),
    ...(input.TransformId != null && { TransformId: input.TransformId }),
  };
};

const serializeAws_json1_1CancelStatementRequest = (input: CancelStatementRequest, context: __SerdeContext): any => {
  return {
    ...(input.Id != null && { Id: input.Id }),
    ...(input.RequestOrigin != null && { RequestOrigin: input.RequestOrigin }),
    ...(input.SessionId != null && { SessionId: input.SessionId }),
  };
};

const serializeAws_json1_1CatalogEntries = (input: CatalogEntry[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1CatalogEntry(entry, context);
    });
};

const serializeAws_json1_1CatalogEntry = (input: CatalogEntry, context: __SerdeContext): any => {
  return {
    ...(input.DatabaseName != null && { DatabaseName: input.DatabaseName }),
    ...(input.TableName != null && { TableName: input.TableName }),
  };
};

const serializeAws_json1_1CatalogKafkaSource = (input: CatalogKafkaSource, context: __SerdeContext): any => {
  return {
    ...(input.DataPreviewOptions != null && {
      DataPreviewOptions: serializeAws_json1_1StreamingDataPreviewOptions(input.DataPreviewOptions, context),
    }),
    ...(input.Database != null && { Database: input.Database }),
    ...(input.DetectSchema != null && { DetectSchema: input.DetectSchema }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.StreamingOptions != null && {
      StreamingOptions: serializeAws_json1_1KafkaStreamingSourceOptions(input.StreamingOptions, context),
    }),
    ...(input.Table != null && { Table: input.Table }),
    ...(input.WindowSize != null && { WindowSize: input.WindowSize }),
  };
};

const serializeAws_json1_1CatalogKinesisSource = (input: CatalogKinesisSource, context: __SerdeContext): any => {
  return {
    ...(input.DataPreviewOptions != null && {
      DataPreviewOptions: serializeAws_json1_1StreamingDataPreviewOptions(input.DataPreviewOptions, context),
    }),
    ...(input.Database != null && { Database: input.Database }),
    ...(input.DetectSchema != null && { DetectSchema: input.DetectSchema }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.StreamingOptions != null && {
      StreamingOptions: serializeAws_json1_1KinesisStreamingSourceOptions(input.StreamingOptions, context),
    }),
    ...(input.Table != null && { Table: input.Table }),
    ...(input.WindowSize != null && { WindowSize: input.WindowSize }),
  };
};

const serializeAws_json1_1CatalogSchemaChangePolicy = (
  input: CatalogSchemaChangePolicy,
  context: __SerdeContext
): any => {
  return {
    ...(input.EnableUpdateCatalog != null && { EnableUpdateCatalog: input.EnableUpdateCatalog }),
    ...(input.UpdateBehavior != null && { UpdateBehavior: input.UpdateBehavior }),
  };
};

const serializeAws_json1_1CatalogSource = (input: CatalogSource, context: __SerdeContext): any => {
  return {
    ...(input.Database != null && { Database: input.Database }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Table != null && { Table: input.Table }),
  };
};

const serializeAws_json1_1CatalogTablesList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1CatalogTarget = (input: CatalogTarget, context: __SerdeContext): any => {
  return {
    ...(input.ConnectionName != null && { ConnectionName: input.ConnectionName }),
    ...(input.DatabaseName != null && { DatabaseName: input.DatabaseName }),
    ...(input.Tables != null && { Tables: serializeAws_json1_1CatalogTablesList(input.Tables, context) }),
  };
};

const serializeAws_json1_1CatalogTargetList = (input: CatalogTarget[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1CatalogTarget(entry, context);
    });
};

const serializeAws_json1_1CheckSchemaVersionValidityInput = (
  input: CheckSchemaVersionValidityInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.DataFormat != null && { DataFormat: input.DataFormat }),
    ...(input.SchemaDefinition != null && { SchemaDefinition: input.SchemaDefinition }),
  };
};

const serializeAws_json1_1ClassifierNameList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1CloudWatchEncryption = (input: CloudWatchEncryption, context: __SerdeContext): any => {
  return {
    ...(input.CloudWatchEncryptionMode != null && { CloudWatchEncryptionMode: input.CloudWatchEncryptionMode }),
    ...(input.KmsKeyArn != null && { KmsKeyArn: input.KmsKeyArn }),
  };
};

const serializeAws_json1_1CodeGenConfigurationNode = (
  input: CodeGenConfigurationNode,
  context: __SerdeContext
): any => {
  return {
    ...(input.Aggregate != null && { Aggregate: serializeAws_json1_1Aggregate(input.Aggregate, context) }),
    ...(input.ApplyMapping != null && { ApplyMapping: serializeAws_json1_1ApplyMapping(input.ApplyMapping, context) }),
    ...(input.AthenaConnectorSource != null && {
      AthenaConnectorSource: serializeAws_json1_1AthenaConnectorSource(input.AthenaConnectorSource, context),
    }),
    ...(input.CatalogKafkaSource != null && {
      CatalogKafkaSource: serializeAws_json1_1CatalogKafkaSource(input.CatalogKafkaSource, context),
    }),
    ...(input.CatalogKinesisSource != null && {
      CatalogKinesisSource: serializeAws_json1_1CatalogKinesisSource(input.CatalogKinesisSource, context),
    }),
    ...(input.CatalogSource != null && {
      CatalogSource: serializeAws_json1_1CatalogSource(input.CatalogSource, context),
    }),
    ...(input.CatalogTarget != null && {
      CatalogTarget: serializeAws_json1_1BasicCatalogTarget(input.CatalogTarget, context),
    }),
    ...(input.CustomCode != null && { CustomCode: serializeAws_json1_1CustomCode(input.CustomCode, context) }),
    ...(input.DirectKafkaSource != null && {
      DirectKafkaSource: serializeAws_json1_1DirectKafkaSource(input.DirectKafkaSource, context),
    }),
    ...(input.DirectKinesisSource != null && {
      DirectKinesisSource: serializeAws_json1_1DirectKinesisSource(input.DirectKinesisSource, context),
    }),
    ...(input.DropDuplicates != null && {
      DropDuplicates: serializeAws_json1_1DropDuplicates(input.DropDuplicates, context),
    }),
    ...(input.DropFields != null && { DropFields: serializeAws_json1_1DropFields(input.DropFields, context) }),
    ...(input.DropNullFields != null && {
      DropNullFields: serializeAws_json1_1DropNullFields(input.DropNullFields, context),
    }),
    ...(input.DynamoDBCatalogSource != null && {
      DynamoDBCatalogSource: serializeAws_json1_1DynamoDBCatalogSource(input.DynamoDBCatalogSource, context),
    }),
    ...(input.FillMissingValues != null && {
      FillMissingValues: serializeAws_json1_1FillMissingValues(input.FillMissingValues, context),
    }),
    ...(input.Filter != null && { Filter: serializeAws_json1_1Filter(input.Filter, context) }),
    ...(input.GovernedCatalogSource != null && {
      GovernedCatalogSource: serializeAws_json1_1GovernedCatalogSource(input.GovernedCatalogSource, context),
    }),
    ...(input.GovernedCatalogTarget != null && {
      GovernedCatalogTarget: serializeAws_json1_1GovernedCatalogTarget(input.GovernedCatalogTarget, context),
    }),
    ...(input.JDBCConnectorSource != null && {
      JDBCConnectorSource: serializeAws_json1_1JDBCConnectorSource(input.JDBCConnectorSource, context),
    }),
    ...(input.JDBCConnectorTarget != null && {
      JDBCConnectorTarget: serializeAws_json1_1JDBCConnectorTarget(input.JDBCConnectorTarget, context),
    }),
    ...(input.Join != null && { Join: serializeAws_json1_1Join(input.Join, context) }),
    ...(input.Merge != null && { Merge: serializeAws_json1_1Merge(input.Merge, context) }),
    ...(input.MicrosoftSQLServerCatalogSource != null && {
      MicrosoftSQLServerCatalogSource: serializeAws_json1_1MicrosoftSQLServerCatalogSource(
        input.MicrosoftSQLServerCatalogSource,
        context
      ),
    }),
    ...(input.MicrosoftSQLServerCatalogTarget != null && {
      MicrosoftSQLServerCatalogTarget: serializeAws_json1_1MicrosoftSQLServerCatalogTarget(
        input.MicrosoftSQLServerCatalogTarget,
        context
      ),
    }),
    ...(input.MySQLCatalogSource != null && {
      MySQLCatalogSource: serializeAws_json1_1MySQLCatalogSource(input.MySQLCatalogSource, context),
    }),
    ...(input.MySQLCatalogTarget != null && {
      MySQLCatalogTarget: serializeAws_json1_1MySQLCatalogTarget(input.MySQLCatalogTarget, context),
    }),
    ...(input.OracleSQLCatalogSource != null && {
      OracleSQLCatalogSource: serializeAws_json1_1OracleSQLCatalogSource(input.OracleSQLCatalogSource, context),
    }),
    ...(input.OracleSQLCatalogTarget != null && {
      OracleSQLCatalogTarget: serializeAws_json1_1OracleSQLCatalogTarget(input.OracleSQLCatalogTarget, context),
    }),
    ...(input.PIIDetection != null && { PIIDetection: serializeAws_json1_1PIIDetection(input.PIIDetection, context) }),
    ...(input.PostgreSQLCatalogSource != null && {
      PostgreSQLCatalogSource: serializeAws_json1_1PostgreSQLCatalogSource(input.PostgreSQLCatalogSource, context),
    }),
    ...(input.PostgreSQLCatalogTarget != null && {
      PostgreSQLCatalogTarget: serializeAws_json1_1PostgreSQLCatalogTarget(input.PostgreSQLCatalogTarget, context),
    }),
    ...(input.RedshiftSource != null && {
      RedshiftSource: serializeAws_json1_1RedshiftSource(input.RedshiftSource, context),
    }),
    ...(input.RedshiftTarget != null && {
      RedshiftTarget: serializeAws_json1_1RedshiftTarget(input.RedshiftTarget, context),
    }),
    ...(input.RelationalCatalogSource != null && {
      RelationalCatalogSource: serializeAws_json1_1RelationalCatalogSource(input.RelationalCatalogSource, context),
    }),
    ...(input.RenameField != null && { RenameField: serializeAws_json1_1RenameField(input.RenameField, context) }),
    ...(input.S3CatalogSource != null && {
      S3CatalogSource: serializeAws_json1_1S3CatalogSource(input.S3CatalogSource, context),
    }),
    ...(input.S3CatalogTarget != null && {
      S3CatalogTarget: serializeAws_json1_1S3CatalogTarget(input.S3CatalogTarget, context),
    }),
    ...(input.S3CsvSource != null && { S3CsvSource: serializeAws_json1_1S3CsvSource(input.S3CsvSource, context) }),
    ...(input.S3DirectTarget != null && {
      S3DirectTarget: serializeAws_json1_1S3DirectTarget(input.S3DirectTarget, context),
    }),
    ...(input.S3GlueParquetTarget != null && {
      S3GlueParquetTarget: serializeAws_json1_1S3GlueParquetTarget(input.S3GlueParquetTarget, context),
    }),
    ...(input.S3JsonSource != null && { S3JsonSource: serializeAws_json1_1S3JsonSource(input.S3JsonSource, context) }),
    ...(input.S3ParquetSource != null && {
      S3ParquetSource: serializeAws_json1_1S3ParquetSource(input.S3ParquetSource, context),
    }),
    ...(input.SelectFields != null && { SelectFields: serializeAws_json1_1SelectFields(input.SelectFields, context) }),
    ...(input.SelectFromCollection != null && {
      SelectFromCollection: serializeAws_json1_1SelectFromCollection(input.SelectFromCollection, context),
    }),
    ...(input.SparkConnectorSource != null && {
      SparkConnectorSource: serializeAws_json1_1SparkConnectorSource(input.SparkConnectorSource, context),
    }),
    ...(input.SparkConnectorTarget != null && {
      SparkConnectorTarget: serializeAws_json1_1SparkConnectorTarget(input.SparkConnectorTarget, context),
    }),
    ...(input.SparkSQL != null && { SparkSQL: serializeAws_json1_1SparkSQL(input.SparkSQL, context) }),
    ...(input.Spigot != null && { Spigot: serializeAws_json1_1Spigot(input.Spigot, context) }),
    ...(input.SplitFields != null && { SplitFields: serializeAws_json1_1SplitFields(input.SplitFields, context) }),
    ...(input.Union != null && { Union: serializeAws_json1_1Union(input.Union, context) }),
  };
};

const serializeAws_json1_1CodeGenConfigurationNodes = (
  input: Record<string, CodeGenConfigurationNode>,
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: serializeAws_json1_1CodeGenConfigurationNode(value, context),
    };
  }, {});
};

const serializeAws_json1_1CodeGenEdge = (input: CodeGenEdge, context: __SerdeContext): any => {
  return {
    ...(input.Source != null && { Source: input.Source }),
    ...(input.Target != null && { Target: input.Target }),
    ...(input.TargetParameter != null && { TargetParameter: input.TargetParameter }),
  };
};

const serializeAws_json1_1CodeGenNode = (input: CodeGenNode, context: __SerdeContext): any => {
  return {
    ...(input.Args != null && { Args: serializeAws_json1_1CodeGenNodeArgs(input.Args, context) }),
    ...(input.Id != null && { Id: input.Id }),
    ...(input.LineNumber != null && { LineNumber: input.LineNumber }),
    ...(input.NodeType != null && { NodeType: input.NodeType }),
  };
};

const serializeAws_json1_1CodeGenNodeArg = (input: CodeGenNodeArg, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Param != null && { Param: input.Param }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

const serializeAws_json1_1CodeGenNodeArgs = (input: CodeGenNodeArg[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1CodeGenNodeArg(entry, context);
    });
};

const serializeAws_json1_1Column = (input: Column, context: __SerdeContext): any => {
  return {
    ...(input.Comment != null && { Comment: input.Comment }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Parameters != null && { Parameters: serializeAws_json1_1ParametersMap(input.Parameters, context) }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

const serializeAws_json1_1ColumnList = (input: Column[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1Column(entry, context);
    });
};

const serializeAws_json1_1ColumnStatistics = (input: ColumnStatistics, context: __SerdeContext): any => {
  return {
    ...(input.AnalyzedTime != null && { AnalyzedTime: Math.round(input.AnalyzedTime.getTime() / 1000) }),
    ...(input.ColumnName != null && { ColumnName: input.ColumnName }),
    ...(input.ColumnType != null && { ColumnType: input.ColumnType }),
    ...(input.StatisticsData != null && {
      StatisticsData: serializeAws_json1_1ColumnStatisticsData(input.StatisticsData, context),
    }),
  };
};

const serializeAws_json1_1ColumnStatisticsData = (input: ColumnStatisticsData, context: __SerdeContext): any => {
  return {
    ...(input.BinaryColumnStatisticsData != null && {
      BinaryColumnStatisticsData: serializeAws_json1_1BinaryColumnStatisticsData(
        input.BinaryColumnStatisticsData,
        context
      ),
    }),
    ...(input.BooleanColumnStatisticsData != null && {
      BooleanColumnStatisticsData: serializeAws_json1_1BooleanColumnStatisticsData(
        input.BooleanColumnStatisticsData,
        context
      ),
    }),
    ...(input.DateColumnStatisticsData != null && {
      DateColumnStatisticsData: serializeAws_json1_1DateColumnStatisticsData(input.DateColumnStatisticsData, context),
    }),
    ...(input.DecimalColumnStatisticsData != null && {
      DecimalColumnStatisticsData: serializeAws_json1_1DecimalColumnStatisticsData(
        input.DecimalColumnStatisticsData,
        context
      ),
    }),
    ...(input.DoubleColumnStatisticsData != null && {
      DoubleColumnStatisticsData: serializeAws_json1_1DoubleColumnStatisticsData(
        input.DoubleColumnStatisticsData,
        context
      ),
    }),
    ...(input.LongColumnStatisticsData != null && {
      LongColumnStatisticsData: serializeAws_json1_1LongColumnStatisticsData(input.LongColumnStatisticsData, context),
    }),
    ...(input.StringColumnStatisticsData != null && {
      StringColumnStatisticsData: serializeAws_json1_1StringColumnStatisticsData(
        input.StringColumnStatisticsData,
        context
      ),
    }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

const serializeAws_json1_1ColumnValueStringList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1Condition = (input: Condition, context: __SerdeContext): any => {
  return {
    ...(input.CrawlState != null && { CrawlState: input.CrawlState }),
    ...(input.CrawlerName != null && { CrawlerName: input.CrawlerName }),
    ...(input.JobName != null && { JobName: input.JobName }),
    ...(input.LogicalOperator != null && { LogicalOperator: input.LogicalOperator }),
    ...(input.State != null && { State: input.State }),
  };
};

const serializeAws_json1_1ConditionList = (input: Condition[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1Condition(entry, context);
    });
};

const serializeAws_json1_1ConnectionInput = (input: ConnectionInput, context: __SerdeContext): any => {
  return {
    ...(input.ConnectionProperties != null && {
      ConnectionProperties: serializeAws_json1_1ConnectionProperties(input.ConnectionProperties, context),
    }),
    ...(input.ConnectionType != null && { ConnectionType: input.ConnectionType }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.MatchCriteria != null && {
      MatchCriteria: serializeAws_json1_1MatchCriteria(input.MatchCriteria, context),
    }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.PhysicalConnectionRequirements != null && {
      PhysicalConnectionRequirements: serializeAws_json1_1PhysicalConnectionRequirements(
        input.PhysicalConnectionRequirements,
        context
      ),
    }),
  };
};

const serializeAws_json1_1ConnectionPasswordEncryption = (
  input: ConnectionPasswordEncryption,
  context: __SerdeContext
): any => {
  return {
    ...(input.AwsKmsKeyId != null && { AwsKmsKeyId: input.AwsKmsKeyId }),
    ...(input.ReturnConnectionPasswordEncrypted != null && {
      ReturnConnectionPasswordEncrypted: input.ReturnConnectionPasswordEncrypted,
    }),
  };
};

const serializeAws_json1_1ConnectionProperties = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce(
    (acc: Record<string, any>, [key, value]: [ConnectionPropertyKey | string, any]) => {
      if (value === null) {
        return acc;
      }
      return {
        ...acc,
        [key]: value,
      };
    },
    {}
  );
};

const serializeAws_json1_1ConnectionsList = (input: ConnectionsList, context: __SerdeContext): any => {
  return {
    ...(input.Connections != null && {
      Connections: serializeAws_json1_1OrchestrationStringList(input.Connections, context),
    }),
  };
};

const serializeAws_json1_1ContextWords = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1CrawlerNameList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1CrawlerTargets = (input: CrawlerTargets, context: __SerdeContext): any => {
  return {
    ...(input.CatalogTargets != null && {
      CatalogTargets: serializeAws_json1_1CatalogTargetList(input.CatalogTargets, context),
    }),
    ...(input.DeltaTargets != null && {
      DeltaTargets: serializeAws_json1_1DeltaTargetList(input.DeltaTargets, context),
    }),
    ...(input.DynamoDBTargets != null && {
      DynamoDBTargets: serializeAws_json1_1DynamoDBTargetList(input.DynamoDBTargets, context),
    }),
    ...(input.JdbcTargets != null && { JdbcTargets: serializeAws_json1_1JdbcTargetList(input.JdbcTargets, context) }),
    ...(input.MongoDBTargets != null && {
      MongoDBTargets: serializeAws_json1_1MongoDBTargetList(input.MongoDBTargets, context),
    }),
    ...(input.S3Targets != null && { S3Targets: serializeAws_json1_1S3TargetList(input.S3Targets, context) }),
  };
};

const serializeAws_json1_1CrawlsFilter = (input: CrawlsFilter, context: __SerdeContext): any => {
  return {
    ...(input.FieldName != null && { FieldName: input.FieldName }),
    ...(input.FieldValue != null && { FieldValue: input.FieldValue }),
    ...(input.FilterOperator != null && { FilterOperator: input.FilterOperator }),
  };
};

const serializeAws_json1_1CrawlsFilterList = (input: CrawlsFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1CrawlsFilter(entry, context);
    });
};

const serializeAws_json1_1CreateBlueprintRequest = (input: CreateBlueprintRequest, context: __SerdeContext): any => {
  return {
    ...(input.BlueprintLocation != null && { BlueprintLocation: input.BlueprintLocation }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1TagsMap(input.Tags, context) }),
  };
};

const serializeAws_json1_1CreateClassifierRequest = (input: CreateClassifierRequest, context: __SerdeContext): any => {
  return {
    ...(input.CsvClassifier != null && {
      CsvClassifier: serializeAws_json1_1CreateCsvClassifierRequest(input.CsvClassifier, context),
    }),
    ...(input.GrokClassifier != null && {
      GrokClassifier: serializeAws_json1_1CreateGrokClassifierRequest(input.GrokClassifier, context),
    }),
    ...(input.JsonClassifier != null && {
      JsonClassifier: serializeAws_json1_1CreateJsonClassifierRequest(input.JsonClassifier, context),
    }),
    ...(input.XMLClassifier != null && {
      XMLClassifier: serializeAws_json1_1CreateXMLClassifierRequest(input.XMLClassifier, context),
    }),
  };
};

const serializeAws_json1_1CreateConnectionRequest = (input: CreateConnectionRequest, context: __SerdeContext): any => {
  return {
    ...(input.CatalogId != null && { CatalogId: input.CatalogId }),
    ...(input.ConnectionInput != null && {
      ConnectionInput: serializeAws_json1_1ConnectionInput(input.ConnectionInput, context),
    }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1TagsMap(input.Tags, context) }),
  };
};

const serializeAws_json1_1CreateCrawlerRequest = (input: CreateCrawlerRequest, context: __SerdeContext): any => {
  return {
    ...(input.Classifiers != null && {
      Classifiers: serializeAws_json1_1ClassifierNameList(input.Classifiers, context),
    }),
    ...(input.Configuration != null && { Configuration: input.Configuration }),
    ...(input.CrawlerSecurityConfiguration != null && {
      CrawlerSecurityConfiguration: input.CrawlerSecurityConfiguration,
    }),
    ...(input.DatabaseName != null && { DatabaseName: input.DatabaseName }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.LakeFormationConfiguration != null && {
      LakeFormationConfiguration: serializeAws_json1_1LakeFormationConfiguration(
        input.LakeFormationConfiguration,
        context
      ),
    }),
    ...(input.LineageConfiguration != null && {
      LineageConfiguration: serializeAws_json1_1LineageConfiguration(input.LineageConfiguration, context),
    }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.RecrawlPolicy != null && {
      RecrawlPolicy: serializeAws_json1_1RecrawlPolicy(input.RecrawlPolicy, context),
    }),
    ...(input.Role != null && { Role: input.Role }),
    ...(input.Schedule != null && { Schedule: input.Schedule }),
    ...(input.SchemaChangePolicy != null && {
      SchemaChangePolicy: serializeAws_json1_1SchemaChangePolicy(input.SchemaChangePolicy, context),
    }),
    ...(input.TablePrefix != null && { TablePrefix: input.TablePrefix }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1TagsMap(input.Tags, context) }),
    ...(input.Targets != null && { Targets: serializeAws_json1_1CrawlerTargets(input.Targets, context) }),
  };
};

const serializeAws_json1_1CreateCsvClassifierRequest = (
  input: CreateCsvClassifierRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AllowSingleColumn != null && { AllowSingleColumn: input.AllowSingleColumn }),
    ...(input.ContainsHeader != null && { ContainsHeader: input.ContainsHeader }),
    ...(input.Delimiter != null && { Delimiter: input.Delimiter }),
    ...(input.DisableValueTrimming != null && { DisableValueTrimming: input.DisableValueTrimming }),
    ...(input.Header != null && { Header: serializeAws_json1_1CsvHeader(input.Header, context) }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.QuoteSymbol != null && { QuoteSymbol: input.QuoteSymbol }),
  };
};

const serializeAws_json1_1CreateCustomEntityTypeRequest = (
  input: CreateCustomEntityTypeRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ContextWords != null && { ContextWords: serializeAws_json1_1ContextWords(input.ContextWords, context) }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.RegexString != null && { RegexString: input.RegexString }),
  };
};

const serializeAws_json1_1CreateDatabaseRequest = (input: CreateDatabaseRequest, context: __SerdeContext): any => {
  return {
    ...(input.CatalogId != null && { CatalogId: input.CatalogId }),
    ...(input.DatabaseInput != null && {
      DatabaseInput: serializeAws_json1_1DatabaseInput(input.DatabaseInput, context),
    }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1TagsMap(input.Tags, context) }),
  };
};

const serializeAws_json1_1CreateDevEndpointRequest = (
  input: CreateDevEndpointRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Arguments != null && { Arguments: serializeAws_json1_1MapValue(input.Arguments, context) }),
    ...(input.EndpointName != null && { EndpointName: input.EndpointName }),
    ...(input.ExtraJarsS3Path != null && { ExtraJarsS3Path: input.ExtraJarsS3Path }),
    ...(input.ExtraPythonLibsS3Path != null && { ExtraPythonLibsS3Path: input.ExtraPythonLibsS3Path }),
    ...(input.GlueVersion != null && { GlueVersion: input.GlueVersion }),
    ...(input.NumberOfNodes != null && { NumberOfNodes: input.NumberOfNodes }),
    ...(input.NumberOfWorkers != null && { NumberOfWorkers: input.NumberOfWorkers }),
    ...(input.PublicKey != null && { PublicKey: input.PublicKey }),
    ...(input.PublicKeys != null && { PublicKeys: serializeAws_json1_1PublicKeysList(input.PublicKeys, context) }),
    ...(input.RoleArn != null && { RoleArn: input.RoleArn }),
    ...(input.SecurityConfiguration != null && { SecurityConfiguration: input.SecurityConfiguration }),
    ...(input.SecurityGroupIds != null && {
      SecurityGroupIds: serializeAws_json1_1StringList(input.SecurityGroupIds, context),
    }),
    ...(input.SubnetId != null && { SubnetId: input.SubnetId }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1TagsMap(input.Tags, context) }),
    ...(input.WorkerType != null && { WorkerType: input.WorkerType }),
  };
};

const serializeAws_json1_1CreateGrokClassifierRequest = (
  input: CreateGrokClassifierRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Classification != null && { Classification: input.Classification }),
    ...(input.CustomPatterns != null && { CustomPatterns: input.CustomPatterns }),
    ...(input.GrokPattern != null && { GrokPattern: input.GrokPattern }),
    ...(input.Name != null && { Name: input.Name }),
  };
};

const serializeAws_json1_1CreateJobRequest = (input: CreateJobRequest, context: __SerdeContext): any => {
  return {
    ...(input.AllocatedCapacity != null && { AllocatedCapacity: input.AllocatedCapacity }),
    ...(input.CodeGenConfigurationNodes != null && {
      CodeGenConfigurationNodes: serializeAws_json1_1CodeGenConfigurationNodes(
        input.CodeGenConfigurationNodes,
        context
      ),
    }),
    ...(input.Command != null && { Command: serializeAws_json1_1JobCommand(input.Command, context) }),
    ...(input.Connections != null && { Connections: serializeAws_json1_1ConnectionsList(input.Connections, context) }),
    ...(input.DefaultArguments != null && {
      DefaultArguments: serializeAws_json1_1GenericMap(input.DefaultArguments, context),
    }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.ExecutionProperty != null && {
      ExecutionProperty: serializeAws_json1_1ExecutionProperty(input.ExecutionProperty, context),
    }),
    ...(input.GlueVersion != null && { GlueVersion: input.GlueVersion }),
    ...(input.LogUri != null && { LogUri: input.LogUri }),
    ...(input.MaxCapacity != null && { MaxCapacity: __serializeFloat(input.MaxCapacity) }),
    ...(input.MaxRetries != null && { MaxRetries: input.MaxRetries }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.NonOverridableArguments != null && {
      NonOverridableArguments: serializeAws_json1_1GenericMap(input.NonOverridableArguments, context),
    }),
    ...(input.NotificationProperty != null && {
      NotificationProperty: serializeAws_json1_1NotificationProperty(input.NotificationProperty, context),
    }),
    ...(input.NumberOfWorkers != null && { NumberOfWorkers: input.NumberOfWorkers }),
    ...(input.Role != null && { Role: input.Role }),
    ...(input.SecurityConfiguration != null && { SecurityConfiguration: input.SecurityConfiguration }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1TagsMap(input.Tags, context) }),
    ...(input.Timeout != null && { Timeout: input.Timeout }),
    ...(input.WorkerType != null && { WorkerType: input.WorkerType }),
  };
};

const serializeAws_json1_1CreateJsonClassifierRequest = (
  input: CreateJsonClassifierRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.JsonPath != null && { JsonPath: input.JsonPath }),
    ...(input.Name != null && { Name: input.Name }),
  };
};

const serializeAws_json1_1CreateMLTransformRequest = (
  input: CreateMLTransformRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Description != null && { Description: input.Description }),
    ...(input.GlueVersion != null && { GlueVersion: input.GlueVersion }),
    ...(input.InputRecordTables != null && {
      InputRecordTables: serializeAws_json1_1GlueTables(input.InputRecordTables, context),
    }),
    ...(input.MaxCapacity != null && { MaxCapacity: __serializeFloat(input.MaxCapacity) }),
    ...(input.MaxRetries != null && { MaxRetries: input.MaxRetries }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.NumberOfWorkers != null && { NumberOfWorkers: input.NumberOfWorkers }),
    ...(input.Parameters != null && { Parameters: serializeAws_json1_1TransformParameters(input.Parameters, context) }),
    ...(input.Role != null && { Role: input.Role }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1TagsMap(input.Tags, context) }),
    ...(input.Timeout != null && { Timeout: input.Timeout }),
    ...(input.TransformEncryption != null && {
      TransformEncryption: serializeAws_json1_1TransformEncryption(input.TransformEncryption, context),
    }),
    ...(input.WorkerType != null && { WorkerType: input.WorkerType }),
  };
};

const serializeAws_json1_1CreatePartitionIndexRequest = (
  input: CreatePartitionIndexRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CatalogId != null && { CatalogId: input.CatalogId }),
    ...(input.DatabaseName != null && { DatabaseName: input.DatabaseName }),
    ...(input.PartitionIndex != null && {
      PartitionIndex: serializeAws_json1_1PartitionIndex(input.PartitionIndex, context),
    }),
    ...(input.TableName != null && { TableName: input.TableName }),
  };
};

const serializeAws_json1_1CreatePartitionRequest = (input: CreatePartitionRequest, context: __SerdeContext): any => {
  return {
    ...(input.CatalogId != null && { CatalogId: input.CatalogId }),
    ...(input.DatabaseName != null && { DatabaseName: input.DatabaseName }),
    ...(input.PartitionInput != null && {
      PartitionInput: serializeAws_json1_1PartitionInput(input.PartitionInput, context),
    }),
    ...(input.TableName != null && { TableName: input.TableName }),
  };
};

const serializeAws_json1_1CreateRegistryInput = (input: CreateRegistryInput, context: __SerdeContext): any => {
  return {
    ...(input.Description != null && { Description: input.Description }),
    ...(input.RegistryName != null && { RegistryName: input.RegistryName }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1TagsMap(input.Tags, context) }),
  };
};

const serializeAws_json1_1CreateSchemaInput = (input: CreateSchemaInput, context: __SerdeContext): any => {
  return {
    ...(input.Compatibility != null && { Compatibility: input.Compatibility }),
    ...(input.DataFormat != null && { DataFormat: input.DataFormat }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.RegistryId != null && { RegistryId: serializeAws_json1_1RegistryId(input.RegistryId, context) }),
    ...(input.SchemaDefinition != null && { SchemaDefinition: input.SchemaDefinition }),
    ...(input.SchemaName != null && { SchemaName: input.SchemaName }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1TagsMap(input.Tags, context) }),
  };
};

const serializeAws_json1_1CreateScriptRequest = (input: CreateScriptRequest, context: __SerdeContext): any => {
  return {
    ...(input.DagEdges != null && { DagEdges: serializeAws_json1_1DagEdges(input.DagEdges, context) }),
    ...(input.DagNodes != null && { DagNodes: serializeAws_json1_1DagNodes(input.DagNodes, context) }),
    ...(input.Language != null && { Language: input.Language }),
  };
};

const serializeAws_json1_1CreateSecurityConfigurationRequest = (
  input: CreateSecurityConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.EncryptionConfiguration != null && {
      EncryptionConfiguration: serializeAws_json1_1EncryptionConfiguration(input.EncryptionConfiguration, context),
    }),
    ...(input.Name != null && { Name: input.Name }),
  };
};

const serializeAws_json1_1CreateSessionRequest = (input: CreateSessionRequest, context: __SerdeContext): any => {
  return {
    ...(input.Command != null && { Command: serializeAws_json1_1SessionCommand(input.Command, context) }),
    ...(input.Connections != null && { Connections: serializeAws_json1_1ConnectionsList(input.Connections, context) }),
    ...(input.DefaultArguments != null && {
      DefaultArguments: serializeAws_json1_1OrchestrationArgumentsMap(input.DefaultArguments, context),
    }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.GlueVersion != null && { GlueVersion: input.GlueVersion }),
    ...(input.Id != null && { Id: input.Id }),
    ...(input.IdleTimeout != null && { IdleTimeout: input.IdleTimeout }),
    ...(input.MaxCapacity != null && { MaxCapacity: __serializeFloat(input.MaxCapacity) }),
    ...(input.NumberOfWorkers != null && { NumberOfWorkers: input.NumberOfWorkers }),
    ...(input.RequestOrigin != null && { RequestOrigin: input.RequestOrigin }),
    ...(input.Role != null && { Role: input.Role }),
    ...(input.SecurityConfiguration != null && { SecurityConfiguration: input.SecurityConfiguration }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1TagsMap(input.Tags, context) }),
    ...(input.Timeout != null && { Timeout: input.Timeout }),
    ...(input.WorkerType != null && { WorkerType: input.WorkerType }),
  };
};

const serializeAws_json1_1CreateTableRequest = (input: CreateTableRequest, context: __SerdeContext): any => {
  return {
    ...(input.CatalogId != null && { CatalogId: input.CatalogId }),
    ...(input.DatabaseName != null && { DatabaseName: input.DatabaseName }),
    ...(input.PartitionIndexes != null && {
      PartitionIndexes: serializeAws_json1_1PartitionIndexList(input.PartitionIndexes, context),
    }),
    ...(input.TableInput != null && { TableInput: serializeAws_json1_1TableInput(input.TableInput, context) }),
    ...(input.TransactionId != null && { TransactionId: input.TransactionId }),
  };
};

const serializeAws_json1_1CreateTriggerRequest = (input: CreateTriggerRequest, context: __SerdeContext): any => {
  return {
    ...(input.Actions != null && { Actions: serializeAws_json1_1ActionList(input.Actions, context) }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.EventBatchingCondition != null && {
      EventBatchingCondition: serializeAws_json1_1EventBatchingCondition(input.EventBatchingCondition, context),
    }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Predicate != null && { Predicate: serializeAws_json1_1Predicate(input.Predicate, context) }),
    ...(input.Schedule != null && { Schedule: input.Schedule }),
    ...(input.StartOnCreation != null && { StartOnCreation: input.StartOnCreation }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1TagsMap(input.Tags, context) }),
    ...(input.Type != null && { Type: input.Type }),
    ...(input.WorkflowName != null && { WorkflowName: input.WorkflowName }),
  };
};

const serializeAws_json1_1CreateUserDefinedFunctionRequest = (
  input: CreateUserDefinedFunctionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CatalogId != null && { CatalogId: input.CatalogId }),
    ...(input.DatabaseName != null && { DatabaseName: input.DatabaseName }),
    ...(input.FunctionInput != null && {
      FunctionInput: serializeAws_json1_1UserDefinedFunctionInput(input.FunctionInput, context),
    }),
  };
};

const serializeAws_json1_1CreateWorkflowRequest = (input: CreateWorkflowRequest, context: __SerdeContext): any => {
  return {
    ...(input.DefaultRunProperties != null && {
      DefaultRunProperties: serializeAws_json1_1WorkflowRunProperties(input.DefaultRunProperties, context),
    }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.MaxConcurrentRuns != null && { MaxConcurrentRuns: input.MaxConcurrentRuns }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1TagsMap(input.Tags, context) }),
  };
};

const serializeAws_json1_1CreateXMLClassifierRequest = (
  input: CreateXMLClassifierRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Classification != null && { Classification: input.Classification }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.RowTag != null && { RowTag: input.RowTag }),
  };
};

const serializeAws_json1_1CsvHeader = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1CustomCode = (input: CustomCode, context: __SerdeContext): any => {
  return {
    ...(input.ClassName != null && { ClassName: input.ClassName }),
    ...(input.Code != null && { Code: input.Code }),
    ...(input.Inputs != null && { Inputs: serializeAws_json1_1ManyInputs(input.Inputs, context) }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.OutputSchemas != null && {
      OutputSchemas: serializeAws_json1_1GlueSchemas(input.OutputSchemas, context),
    }),
  };
};

const serializeAws_json1_1CustomEntityTypeNames = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1DagEdges = (input: CodeGenEdge[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1CodeGenEdge(entry, context);
    });
};

const serializeAws_json1_1DagNodes = (input: CodeGenNode[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1CodeGenNode(entry, context);
    });
};

const serializeAws_json1_1DatabaseIdentifier = (input: DatabaseIdentifier, context: __SerdeContext): any => {
  return {
    ...(input.CatalogId != null && { CatalogId: input.CatalogId }),
    ...(input.DatabaseName != null && { DatabaseName: input.DatabaseName }),
  };
};

const serializeAws_json1_1DatabaseInput = (input: DatabaseInput, context: __SerdeContext): any => {
  return {
    ...(input.CreateTableDefaultPermissions != null && {
      CreateTableDefaultPermissions: serializeAws_json1_1PrincipalPermissionsList(
        input.CreateTableDefaultPermissions,
        context
      ),
    }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.LocationUri != null && { LocationUri: input.LocationUri }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Parameters != null && { Parameters: serializeAws_json1_1ParametersMap(input.Parameters, context) }),
    ...(input.TargetDatabase != null && {
      TargetDatabase: serializeAws_json1_1DatabaseIdentifier(input.TargetDatabase, context),
    }),
  };
};

const serializeAws_json1_1DataCatalogEncryptionSettings = (
  input: DataCatalogEncryptionSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.ConnectionPasswordEncryption != null && {
      ConnectionPasswordEncryption: serializeAws_json1_1ConnectionPasswordEncryption(
        input.ConnectionPasswordEncryption,
        context
      ),
    }),
    ...(input.EncryptionAtRest != null && {
      EncryptionAtRest: serializeAws_json1_1EncryptionAtRest(input.EncryptionAtRest, context),
    }),
  };
};

const serializeAws_json1_1DataLakePrincipal = (input: DataLakePrincipal, context: __SerdeContext): any => {
  return {
    ...(input.DataLakePrincipalIdentifier != null && {
      DataLakePrincipalIdentifier: input.DataLakePrincipalIdentifier,
    }),
  };
};

const serializeAws_json1_1Datatype = (input: Datatype, context: __SerdeContext): any => {
  return {
    ...(input.Id != null && { Id: input.Id }),
    ...(input.Label != null && { Label: input.Label }),
  };
};

const serializeAws_json1_1DateColumnStatisticsData = (
  input: DateColumnStatisticsData,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaximumValue != null && { MaximumValue: Math.round(input.MaximumValue.getTime() / 1000) }),
    ...(input.MinimumValue != null && { MinimumValue: Math.round(input.MinimumValue.getTime() / 1000) }),
    ...(input.NumberOfDistinctValues != null && { NumberOfDistinctValues: input.NumberOfDistinctValues }),
    ...(input.NumberOfNulls != null && { NumberOfNulls: input.NumberOfNulls }),
  };
};

const serializeAws_json1_1DecimalColumnStatisticsData = (
  input: DecimalColumnStatisticsData,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaximumValue != null && { MaximumValue: serializeAws_json1_1DecimalNumber(input.MaximumValue, context) }),
    ...(input.MinimumValue != null && { MinimumValue: serializeAws_json1_1DecimalNumber(input.MinimumValue, context) }),
    ...(input.NumberOfDistinctValues != null && { NumberOfDistinctValues: input.NumberOfDistinctValues }),
    ...(input.NumberOfNulls != null && { NumberOfNulls: input.NumberOfNulls }),
  };
};

const serializeAws_json1_1DecimalNumber = (input: DecimalNumber, context: __SerdeContext): any => {
  return {
    ...(input.Scale != null && { Scale: input.Scale }),
    ...(input.UnscaledValue != null && { UnscaledValue: context.base64Encoder(input.UnscaledValue) }),
  };
};

const serializeAws_json1_1DeleteBlueprintRequest = (input: DeleteBlueprintRequest, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
  };
};

const serializeAws_json1_1DeleteClassifierRequest = (input: DeleteClassifierRequest, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
  };
};

const serializeAws_json1_1DeleteColumnStatisticsForPartitionRequest = (
  input: DeleteColumnStatisticsForPartitionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CatalogId != null && { CatalogId: input.CatalogId }),
    ...(input.ColumnName != null && { ColumnName: input.ColumnName }),
    ...(input.DatabaseName != null && { DatabaseName: input.DatabaseName }),
    ...(input.PartitionValues != null && {
      PartitionValues: serializeAws_json1_1ValueStringList(input.PartitionValues, context),
    }),
    ...(input.TableName != null && { TableName: input.TableName }),
  };
};

const serializeAws_json1_1DeleteColumnStatisticsForTableRequest = (
  input: DeleteColumnStatisticsForTableRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CatalogId != null && { CatalogId: input.CatalogId }),
    ...(input.ColumnName != null && { ColumnName: input.ColumnName }),
    ...(input.DatabaseName != null && { DatabaseName: input.DatabaseName }),
    ...(input.TableName != null && { TableName: input.TableName }),
  };
};

const serializeAws_json1_1DeleteConnectionNameList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1DeleteConnectionRequest = (input: DeleteConnectionRequest, context: __SerdeContext): any => {
  return {
    ...(input.CatalogId != null && { CatalogId: input.CatalogId }),
    ...(input.ConnectionName != null && { ConnectionName: input.ConnectionName }),
  };
};

const serializeAws_json1_1DeleteCrawlerRequest = (input: DeleteCrawlerRequest, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
  };
};

const serializeAws_json1_1DeleteCustomEntityTypeRequest = (
  input: DeleteCustomEntityTypeRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
  };
};

const serializeAws_json1_1DeleteDatabaseRequest = (input: DeleteDatabaseRequest, context: __SerdeContext): any => {
  return {
    ...(input.CatalogId != null && { CatalogId: input.CatalogId }),
    ...(input.Name != null && { Name: input.Name }),
  };
};

const serializeAws_json1_1DeleteDevEndpointRequest = (
  input: DeleteDevEndpointRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.EndpointName != null && { EndpointName: input.EndpointName }),
  };
};

const serializeAws_json1_1DeleteJobRequest = (input: DeleteJobRequest, context: __SerdeContext): any => {
  return {
    ...(input.JobName != null && { JobName: input.JobName }),
  };
};

const serializeAws_json1_1DeleteMLTransformRequest = (
  input: DeleteMLTransformRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.TransformId != null && { TransformId: input.TransformId }),
  };
};

const serializeAws_json1_1DeletePartitionIndexRequest = (
  input: DeletePartitionIndexRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CatalogId != null && { CatalogId: input.CatalogId }),
    ...(input.DatabaseName != null && { DatabaseName: input.DatabaseName }),
    ...(input.IndexName != null && { IndexName: input.IndexName }),
    ...(input.TableName != null && { TableName: input.TableName }),
  };
};

const serializeAws_json1_1DeletePartitionRequest = (input: DeletePartitionRequest, context: __SerdeContext): any => {
  return {
    ...(input.CatalogId != null && { CatalogId: input.CatalogId }),
    ...(input.DatabaseName != null && { DatabaseName: input.DatabaseName }),
    ...(input.PartitionValues != null && {
      PartitionValues: serializeAws_json1_1ValueStringList(input.PartitionValues, context),
    }),
    ...(input.TableName != null && { TableName: input.TableName }),
  };
};

const serializeAws_json1_1DeleteRegistryInput = (input: DeleteRegistryInput, context: __SerdeContext): any => {
  return {
    ...(input.RegistryId != null && { RegistryId: serializeAws_json1_1RegistryId(input.RegistryId, context) }),
  };
};

const serializeAws_json1_1DeleteResourcePolicyRequest = (
  input: DeleteResourcePolicyRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.PolicyHashCondition != null && { PolicyHashCondition: input.PolicyHashCondition }),
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
  };
};

const serializeAws_json1_1DeleteSchemaInput = (input: DeleteSchemaInput, context: __SerdeContext): any => {
  return {
    ...(input.SchemaId != null && { SchemaId: serializeAws_json1_1SchemaId(input.SchemaId, context) }),
  };
};

const serializeAws_json1_1DeleteSchemaVersionsInput = (
  input: DeleteSchemaVersionsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.SchemaId != null && { SchemaId: serializeAws_json1_1SchemaId(input.SchemaId, context) }),
    ...(input.Versions != null && { Versions: input.Versions }),
  };
};

const serializeAws_json1_1DeleteSecurityConfigurationRequest = (
  input: DeleteSecurityConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
  };
};

const serializeAws_json1_1DeleteSessionRequest = (input: DeleteSessionRequest, context: __SerdeContext): any => {
  return {
    ...(input.Id != null && { Id: input.Id }),
    ...(input.RequestOrigin != null && { RequestOrigin: input.RequestOrigin }),
  };
};

const serializeAws_json1_1DeleteTableRequest = (input: DeleteTableRequest, context: __SerdeContext): any => {
  return {
    ...(input.CatalogId != null && { CatalogId: input.CatalogId }),
    ...(input.DatabaseName != null && { DatabaseName: input.DatabaseName }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.TransactionId != null && { TransactionId: input.TransactionId }),
  };
};

const serializeAws_json1_1DeleteTableVersionRequest = (
  input: DeleteTableVersionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CatalogId != null && { CatalogId: input.CatalogId }),
    ...(input.DatabaseName != null && { DatabaseName: input.DatabaseName }),
    ...(input.TableName != null && { TableName: input.TableName }),
    ...(input.VersionId != null && { VersionId: input.VersionId }),
  };
};

const serializeAws_json1_1DeleteTriggerRequest = (input: DeleteTriggerRequest, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
  };
};

const serializeAws_json1_1DeleteUserDefinedFunctionRequest = (
  input: DeleteUserDefinedFunctionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CatalogId != null && { CatalogId: input.CatalogId }),
    ...(input.DatabaseName != null && { DatabaseName: input.DatabaseName }),
    ...(input.FunctionName != null && { FunctionName: input.FunctionName }),
  };
};

const serializeAws_json1_1DeleteWorkflowRequest = (input: DeleteWorkflowRequest, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
  };
};

const serializeAws_json1_1DeltaTarget = (input: DeltaTarget, context: __SerdeContext): any => {
  return {
    ...(input.ConnectionName != null && { ConnectionName: input.ConnectionName }),
    ...(input.DeltaTables != null && { DeltaTables: serializeAws_json1_1PathList(input.DeltaTables, context) }),
    ...(input.WriteManifest != null && { WriteManifest: input.WriteManifest }),
  };
};

const serializeAws_json1_1DeltaTargetList = (input: DeltaTarget[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1DeltaTarget(entry, context);
    });
};

const serializeAws_json1_1DevEndpointCustomLibraries = (
  input: DevEndpointCustomLibraries,
  context: __SerdeContext
): any => {
  return {
    ...(input.ExtraJarsS3Path != null && { ExtraJarsS3Path: input.ExtraJarsS3Path }),
    ...(input.ExtraPythonLibsS3Path != null && { ExtraPythonLibsS3Path: input.ExtraPythonLibsS3Path }),
  };
};

const serializeAws_json1_1DevEndpointNames = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1DirectKafkaSource = (input: DirectKafkaSource, context: __SerdeContext): any => {
  return {
    ...(input.DataPreviewOptions != null && {
      DataPreviewOptions: serializeAws_json1_1StreamingDataPreviewOptions(input.DataPreviewOptions, context),
    }),
    ...(input.DetectSchema != null && { DetectSchema: input.DetectSchema }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.StreamingOptions != null && {
      StreamingOptions: serializeAws_json1_1KafkaStreamingSourceOptions(input.StreamingOptions, context),
    }),
    ...(input.WindowSize != null && { WindowSize: input.WindowSize }),
  };
};

const serializeAws_json1_1DirectKinesisSource = (input: DirectKinesisSource, context: __SerdeContext): any => {
  return {
    ...(input.DataPreviewOptions != null && {
      DataPreviewOptions: serializeAws_json1_1StreamingDataPreviewOptions(input.DataPreviewOptions, context),
    }),
    ...(input.DetectSchema != null && { DetectSchema: input.DetectSchema }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.StreamingOptions != null && {
      StreamingOptions: serializeAws_json1_1KinesisStreamingSourceOptions(input.StreamingOptions, context),
    }),
    ...(input.WindowSize != null && { WindowSize: input.WindowSize }),
  };
};

const serializeAws_json1_1DirectSchemaChangePolicy = (
  input: DirectSchemaChangePolicy,
  context: __SerdeContext
): any => {
  return {
    ...(input.Database != null && { Database: input.Database }),
    ...(input.EnableUpdateCatalog != null && { EnableUpdateCatalog: input.EnableUpdateCatalog }),
    ...(input.Table != null && { Table: input.Table }),
    ...(input.UpdateBehavior != null && { UpdateBehavior: input.UpdateBehavior }),
  };
};

const serializeAws_json1_1DoubleColumnStatisticsData = (
  input: DoubleColumnStatisticsData,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaximumValue != null && { MaximumValue: __serializeFloat(input.MaximumValue) }),
    ...(input.MinimumValue != null && { MinimumValue: __serializeFloat(input.MinimumValue) }),
    ...(input.NumberOfDistinctValues != null && { NumberOfDistinctValues: input.NumberOfDistinctValues }),
    ...(input.NumberOfNulls != null && { NumberOfNulls: input.NumberOfNulls }),
  };
};

const serializeAws_json1_1DropDuplicates = (input: DropDuplicates, context: __SerdeContext): any => {
  return {
    ...(input.Columns != null && { Columns: serializeAws_json1_1LimitedPathList(input.Columns, context) }),
    ...(input.Inputs != null && { Inputs: serializeAws_json1_1OneInput(input.Inputs, context) }),
    ...(input.Name != null && { Name: input.Name }),
  };
};

const serializeAws_json1_1DropFields = (input: DropFields, context: __SerdeContext): any => {
  return {
    ...(input.Inputs != null && { Inputs: serializeAws_json1_1OneInput(input.Inputs, context) }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Paths != null && { Paths: serializeAws_json1_1GlueStudioPathList(input.Paths, context) }),
  };
};

const serializeAws_json1_1DropNullFields = (input: DropNullFields, context: __SerdeContext): any => {
  return {
    ...(input.Inputs != null && { Inputs: serializeAws_json1_1OneInput(input.Inputs, context) }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.NullCheckBoxList != null && {
      NullCheckBoxList: serializeAws_json1_1NullCheckBoxList(input.NullCheckBoxList, context),
    }),
    ...(input.NullTextList != null && {
      NullTextList: serializeAws_json1_1NullValueFields(input.NullTextList, context),
    }),
  };
};

const serializeAws_json1_1DynamoDBCatalogSource = (input: DynamoDBCatalogSource, context: __SerdeContext): any => {
  return {
    ...(input.Database != null && { Database: input.Database }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Table != null && { Table: input.Table }),
  };
};

const serializeAws_json1_1DynamoDBTarget = (input: DynamoDBTarget, context: __SerdeContext): any => {
  return {
    ...(input.Path != null && { Path: input.Path }),
    ...(input.scanAll != null && { scanAll: input.scanAll }),
    ...(input.scanRate != null && { scanRate: __serializeFloat(input.scanRate) }),
  };
};

const serializeAws_json1_1DynamoDBTargetList = (input: DynamoDBTarget[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1DynamoDBTarget(entry, context);
    });
};

const serializeAws_json1_1EnclosedInStringProperties = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1EnclosedInStringPropertiesMinOne = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1EncryptionAtRest = (input: EncryptionAtRest, context: __SerdeContext): any => {
  return {
    ...(input.CatalogEncryptionMode != null && { CatalogEncryptionMode: input.CatalogEncryptionMode }),
    ...(input.SseAwsKmsKeyId != null && { SseAwsKmsKeyId: input.SseAwsKmsKeyId }),
  };
};

const serializeAws_json1_1EncryptionConfiguration = (input: EncryptionConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.CloudWatchEncryption != null && {
      CloudWatchEncryption: serializeAws_json1_1CloudWatchEncryption(input.CloudWatchEncryption, context),
    }),
    ...(input.JobBookmarksEncryption != null && {
      JobBookmarksEncryption: serializeAws_json1_1JobBookmarksEncryption(input.JobBookmarksEncryption, context),
    }),
    ...(input.S3Encryption != null && {
      S3Encryption: serializeAws_json1_1S3EncryptionList(input.S3Encryption, context),
    }),
  };
};

const serializeAws_json1_1EventBatchingCondition = (input: EventBatchingCondition, context: __SerdeContext): any => {
  return {
    ...(input.BatchSize != null && { BatchSize: input.BatchSize }),
    ...(input.BatchWindow != null && { BatchWindow: input.BatchWindow }),
  };
};

const serializeAws_json1_1ExecutionProperty = (input: ExecutionProperty, context: __SerdeContext): any => {
  return {
    ...(input.MaxConcurrentRuns != null && { MaxConcurrentRuns: input.MaxConcurrentRuns }),
  };
};

const serializeAws_json1_1FillMissingValues = (input: FillMissingValues, context: __SerdeContext): any => {
  return {
    ...(input.FilledPath != null && { FilledPath: input.FilledPath }),
    ...(input.ImputedPath != null && { ImputedPath: input.ImputedPath }),
    ...(input.Inputs != null && { Inputs: serializeAws_json1_1OneInput(input.Inputs, context) }),
    ...(input.Name != null && { Name: input.Name }),
  };
};

const serializeAws_json1_1Filter = (input: Filter, context: __SerdeContext): any => {
  return {
    ...(input.Filters != null && { Filters: serializeAws_json1_1FilterExpressions(input.Filters, context) }),
    ...(input.Inputs != null && { Inputs: serializeAws_json1_1OneInput(input.Inputs, context) }),
    ...(input.LogicalOperator != null && { LogicalOperator: input.LogicalOperator }),
    ...(input.Name != null && { Name: input.Name }),
  };
};

const serializeAws_json1_1FilterExpression = (input: FilterExpression, context: __SerdeContext): any => {
  return {
    ...(input.Negated != null && { Negated: input.Negated }),
    ...(input.Operation != null && { Operation: input.Operation }),
    ...(input.Values != null && { Values: serializeAws_json1_1FilterValues(input.Values, context) }),
  };
};

const serializeAws_json1_1FilterExpressions = (input: FilterExpression[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1FilterExpression(entry, context);
    });
};

const serializeAws_json1_1FilterValue = (input: FilterValue, context: __SerdeContext): any => {
  return {
    ...(input.Type != null && { Type: input.Type }),
    ...(input.Value != null && { Value: serializeAws_json1_1EnclosedInStringProperties(input.Value, context) }),
  };
};

const serializeAws_json1_1FilterValues = (input: FilterValue[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1FilterValue(entry, context);
    });
};

const serializeAws_json1_1FindMatchesParameters = (input: FindMatchesParameters, context: __SerdeContext): any => {
  return {
    ...(input.AccuracyCostTradeoff != null && { AccuracyCostTradeoff: __serializeFloat(input.AccuracyCostTradeoff) }),
    ...(input.EnforceProvidedLabels != null && { EnforceProvidedLabels: input.EnforceProvidedLabels }),
    ...(input.PrecisionRecallTradeoff != null && {
      PrecisionRecallTradeoff: __serializeFloat(input.PrecisionRecallTradeoff),
    }),
    ...(input.PrimaryKeyColumnName != null && { PrimaryKeyColumnName: input.PrimaryKeyColumnName }),
  };
};

const serializeAws_json1_1GenericMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const serializeAws_json1_1GetBlueprintRequest = (input: GetBlueprintRequest, context: __SerdeContext): any => {
  return {
    ...(input.IncludeBlueprint != null && { IncludeBlueprint: input.IncludeBlueprint }),
    ...(input.IncludeParameterSpec != null && { IncludeParameterSpec: input.IncludeParameterSpec }),
    ...(input.Name != null && { Name: input.Name }),
  };
};

const serializeAws_json1_1GetBlueprintRunRequest = (input: GetBlueprintRunRequest, context: __SerdeContext): any => {
  return {
    ...(input.BlueprintName != null && { BlueprintName: input.BlueprintName }),
    ...(input.RunId != null && { RunId: input.RunId }),
  };
};

const serializeAws_json1_1GetBlueprintRunsRequest = (input: GetBlueprintRunsRequest, context: __SerdeContext): any => {
  return {
    ...(input.BlueprintName != null && { BlueprintName: input.BlueprintName }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1GetCatalogImportStatusRequest = (
  input: GetCatalogImportStatusRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CatalogId != null && { CatalogId: input.CatalogId }),
  };
};

const serializeAws_json1_1GetClassifierRequest = (input: GetClassifierRequest, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
  };
};

const serializeAws_json1_1GetClassifiersRequest = (input: GetClassifiersRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1GetColumnNamesList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1GetColumnStatisticsForPartitionRequest = (
  input: GetColumnStatisticsForPartitionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CatalogId != null && { CatalogId: input.CatalogId }),
    ...(input.ColumnNames != null && {
      ColumnNames: serializeAws_json1_1GetColumnNamesList(input.ColumnNames, context),
    }),
    ...(input.DatabaseName != null && { DatabaseName: input.DatabaseName }),
    ...(input.PartitionValues != null && {
      PartitionValues: serializeAws_json1_1ValueStringList(input.PartitionValues, context),
    }),
    ...(input.TableName != null && { TableName: input.TableName }),
  };
};

const serializeAws_json1_1GetColumnStatisticsForTableRequest = (
  input: GetColumnStatisticsForTableRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CatalogId != null && { CatalogId: input.CatalogId }),
    ...(input.ColumnNames != null && {
      ColumnNames: serializeAws_json1_1GetColumnNamesList(input.ColumnNames, context),
    }),
    ...(input.DatabaseName != null && { DatabaseName: input.DatabaseName }),
    ...(input.TableName != null && { TableName: input.TableName }),
  };
};

const serializeAws_json1_1GetConnectionRequest = (input: GetConnectionRequest, context: __SerdeContext): any => {
  return {
    ...(input.CatalogId != null && { CatalogId: input.CatalogId }),
    ...(input.HidePassword != null && { HidePassword: input.HidePassword }),
    ...(input.Name != null && { Name: input.Name }),
  };
};

const serializeAws_json1_1GetConnectionsFilter = (input: GetConnectionsFilter, context: __SerdeContext): any => {
  return {
    ...(input.ConnectionType != null && { ConnectionType: input.ConnectionType }),
    ...(input.MatchCriteria != null && {
      MatchCriteria: serializeAws_json1_1MatchCriteria(input.MatchCriteria, context),
    }),
  };
};

const serializeAws_json1_1GetConnectionsRequest = (input: GetConnectionsRequest, context: __SerdeContext): any => {
  return {
    ...(input.CatalogId != null && { CatalogId: input.CatalogId }),
    ...(input.Filter != null && { Filter: serializeAws_json1_1GetConnectionsFilter(input.Filter, context) }),
    ...(input.HidePassword != null && { HidePassword: input.HidePassword }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1GetCrawlerMetricsRequest = (
  input: GetCrawlerMetricsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CrawlerNameList != null && {
      CrawlerNameList: serializeAws_json1_1CrawlerNameList(input.CrawlerNameList, context),
    }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1GetCrawlerRequest = (input: GetCrawlerRequest, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
  };
};

const serializeAws_json1_1GetCrawlersRequest = (input: GetCrawlersRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1GetCustomEntityTypeRequest = (
  input: GetCustomEntityTypeRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
  };
};

const serializeAws_json1_1GetDatabaseRequest = (input: GetDatabaseRequest, context: __SerdeContext): any => {
  return {
    ...(input.CatalogId != null && { CatalogId: input.CatalogId }),
    ...(input.Name != null && { Name: input.Name }),
  };
};

const serializeAws_json1_1GetDatabasesRequest = (input: GetDatabasesRequest, context: __SerdeContext): any => {
  return {
    ...(input.CatalogId != null && { CatalogId: input.CatalogId }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ResourceShareType != null && { ResourceShareType: input.ResourceShareType }),
  };
};

const serializeAws_json1_1GetDataCatalogEncryptionSettingsRequest = (
  input: GetDataCatalogEncryptionSettingsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CatalogId != null && { CatalogId: input.CatalogId }),
  };
};

const serializeAws_json1_1GetDataflowGraphRequest = (input: GetDataflowGraphRequest, context: __SerdeContext): any => {
  return {
    ...(input.PythonScript != null && { PythonScript: input.PythonScript }),
  };
};

const serializeAws_json1_1GetDevEndpointRequest = (input: GetDevEndpointRequest, context: __SerdeContext): any => {
  return {
    ...(input.EndpointName != null && { EndpointName: input.EndpointName }),
  };
};

const serializeAws_json1_1GetDevEndpointsRequest = (input: GetDevEndpointsRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1GetJobBookmarkRequest = (input: GetJobBookmarkRequest, context: __SerdeContext): any => {
  return {
    ...(input.JobName != null && { JobName: input.JobName }),
    ...(input.RunId != null && { RunId: input.RunId }),
  };
};

const serializeAws_json1_1GetJobRequest = (input: GetJobRequest, context: __SerdeContext): any => {
  return {
    ...(input.JobName != null && { JobName: input.JobName }),
  };
};

const serializeAws_json1_1GetJobRunRequest = (input: GetJobRunRequest, context: __SerdeContext): any => {
  return {
    ...(input.JobName != null && { JobName: input.JobName }),
    ...(input.PredecessorsIncluded != null && { PredecessorsIncluded: input.PredecessorsIncluded }),
    ...(input.RunId != null && { RunId: input.RunId }),
  };
};

const serializeAws_json1_1GetJobRunsRequest = (input: GetJobRunsRequest, context: __SerdeContext): any => {
  return {
    ...(input.JobName != null && { JobName: input.JobName }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1GetJobsRequest = (input: GetJobsRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1GetMappingRequest = (input: GetMappingRequest, context: __SerdeContext): any => {
  return {
    ...(input.Location != null && { Location: serializeAws_json1_1Location(input.Location, context) }),
    ...(input.Sinks != null && { Sinks: serializeAws_json1_1CatalogEntries(input.Sinks, context) }),
    ...(input.Source != null && { Source: serializeAws_json1_1CatalogEntry(input.Source, context) }),
  };
};

const serializeAws_json1_1GetMLTaskRunRequest = (input: GetMLTaskRunRequest, context: __SerdeContext): any => {
  return {
    ...(input.TaskRunId != null && { TaskRunId: input.TaskRunId }),
    ...(input.TransformId != null && { TransformId: input.TransformId }),
  };
};

const serializeAws_json1_1GetMLTaskRunsRequest = (input: GetMLTaskRunsRequest, context: __SerdeContext): any => {
  return {
    ...(input.Filter != null && { Filter: serializeAws_json1_1TaskRunFilterCriteria(input.Filter, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.Sort != null && { Sort: serializeAws_json1_1TaskRunSortCriteria(input.Sort, context) }),
    ...(input.TransformId != null && { TransformId: input.TransformId }),
  };
};

const serializeAws_json1_1GetMLTransformRequest = (input: GetMLTransformRequest, context: __SerdeContext): any => {
  return {
    ...(input.TransformId != null && { TransformId: input.TransformId }),
  };
};

const serializeAws_json1_1GetMLTransformsRequest = (input: GetMLTransformsRequest, context: __SerdeContext): any => {
  return {
    ...(input.Filter != null && { Filter: serializeAws_json1_1TransformFilterCriteria(input.Filter, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.Sort != null && { Sort: serializeAws_json1_1TransformSortCriteria(input.Sort, context) }),
  };
};

const serializeAws_json1_1GetPartitionIndexesRequest = (
  input: GetPartitionIndexesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CatalogId != null && { CatalogId: input.CatalogId }),
    ...(input.DatabaseName != null && { DatabaseName: input.DatabaseName }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.TableName != null && { TableName: input.TableName }),
  };
};

const serializeAws_json1_1GetPartitionRequest = (input: GetPartitionRequest, context: __SerdeContext): any => {
  return {
    ...(input.CatalogId != null && { CatalogId: input.CatalogId }),
    ...(input.DatabaseName != null && { DatabaseName: input.DatabaseName }),
    ...(input.PartitionValues != null && {
      PartitionValues: serializeAws_json1_1ValueStringList(input.PartitionValues, context),
    }),
    ...(input.TableName != null && { TableName: input.TableName }),
  };
};

const serializeAws_json1_1GetPartitionsRequest = (input: GetPartitionsRequest, context: __SerdeContext): any => {
  return {
    ...(input.CatalogId != null && { CatalogId: input.CatalogId }),
    ...(input.DatabaseName != null && { DatabaseName: input.DatabaseName }),
    ...(input.ExcludeColumnSchema != null && { ExcludeColumnSchema: input.ExcludeColumnSchema }),
    ...(input.Expression != null && { Expression: input.Expression }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.QueryAsOfTime != null && { QueryAsOfTime: Math.round(input.QueryAsOfTime.getTime() / 1000) }),
    ...(input.Segment != null && { Segment: serializeAws_json1_1Segment(input.Segment, context) }),
    ...(input.TableName != null && { TableName: input.TableName }),
    ...(input.TransactionId != null && { TransactionId: input.TransactionId }),
  };
};

const serializeAws_json1_1GetPlanRequest = (input: GetPlanRequest, context: __SerdeContext): any => {
  return {
    ...(input.AdditionalPlanOptionsMap != null && {
      AdditionalPlanOptionsMap: serializeAws_json1_1AdditionalPlanOptionsMap(input.AdditionalPlanOptionsMap, context),
    }),
    ...(input.Language != null && { Language: input.Language }),
    ...(input.Location != null && { Location: serializeAws_json1_1Location(input.Location, context) }),
    ...(input.Mapping != null && { Mapping: serializeAws_json1_1MappingList(input.Mapping, context) }),
    ...(input.Sinks != null && { Sinks: serializeAws_json1_1CatalogEntries(input.Sinks, context) }),
    ...(input.Source != null && { Source: serializeAws_json1_1CatalogEntry(input.Source, context) }),
  };
};

const serializeAws_json1_1GetRegistryInput = (input: GetRegistryInput, context: __SerdeContext): any => {
  return {
    ...(input.RegistryId != null && { RegistryId: serializeAws_json1_1RegistryId(input.RegistryId, context) }),
  };
};

const serializeAws_json1_1GetResourcePoliciesRequest = (
  input: GetResourcePoliciesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1GetResourcePolicyRequest = (
  input: GetResourcePolicyRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
  };
};

const serializeAws_json1_1GetSchemaByDefinitionInput = (
  input: GetSchemaByDefinitionInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.SchemaDefinition != null && { SchemaDefinition: input.SchemaDefinition }),
    ...(input.SchemaId != null && { SchemaId: serializeAws_json1_1SchemaId(input.SchemaId, context) }),
  };
};

const serializeAws_json1_1GetSchemaInput = (input: GetSchemaInput, context: __SerdeContext): any => {
  return {
    ...(input.SchemaId != null && { SchemaId: serializeAws_json1_1SchemaId(input.SchemaId, context) }),
  };
};

const serializeAws_json1_1GetSchemaVersionInput = (input: GetSchemaVersionInput, context: __SerdeContext): any => {
  return {
    ...(input.SchemaId != null && { SchemaId: serializeAws_json1_1SchemaId(input.SchemaId, context) }),
    ...(input.SchemaVersionId != null && { SchemaVersionId: input.SchemaVersionId }),
    ...(input.SchemaVersionNumber != null && {
      SchemaVersionNumber: serializeAws_json1_1SchemaVersionNumber(input.SchemaVersionNumber, context),
    }),
  };
};

const serializeAws_json1_1GetSchemaVersionsDiffInput = (
  input: GetSchemaVersionsDiffInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.FirstSchemaVersionNumber != null && {
      FirstSchemaVersionNumber: serializeAws_json1_1SchemaVersionNumber(input.FirstSchemaVersionNumber, context),
    }),
    ...(input.SchemaDiffType != null && { SchemaDiffType: input.SchemaDiffType }),
    ...(input.SchemaId != null && { SchemaId: serializeAws_json1_1SchemaId(input.SchemaId, context) }),
    ...(input.SecondSchemaVersionNumber != null && {
      SecondSchemaVersionNumber: serializeAws_json1_1SchemaVersionNumber(input.SecondSchemaVersionNumber, context),
    }),
  };
};

const serializeAws_json1_1GetSecurityConfigurationRequest = (
  input: GetSecurityConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
  };
};

const serializeAws_json1_1GetSecurityConfigurationsRequest = (
  input: GetSecurityConfigurationsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1GetSessionRequest = (input: GetSessionRequest, context: __SerdeContext): any => {
  return {
    ...(input.Id != null && { Id: input.Id }),
    ...(input.RequestOrigin != null && { RequestOrigin: input.RequestOrigin }),
  };
};

const serializeAws_json1_1GetStatementRequest = (input: GetStatementRequest, context: __SerdeContext): any => {
  return {
    ...(input.Id != null && { Id: input.Id }),
    ...(input.RequestOrigin != null && { RequestOrigin: input.RequestOrigin }),
    ...(input.SessionId != null && { SessionId: input.SessionId }),
  };
};

const serializeAws_json1_1GetTableRequest = (input: GetTableRequest, context: __SerdeContext): any => {
  return {
    ...(input.CatalogId != null && { CatalogId: input.CatalogId }),
    ...(input.DatabaseName != null && { DatabaseName: input.DatabaseName }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.QueryAsOfTime != null && { QueryAsOfTime: Math.round(input.QueryAsOfTime.getTime() / 1000) }),
    ...(input.TransactionId != null && { TransactionId: input.TransactionId }),
  };
};

const serializeAws_json1_1GetTablesRequest = (input: GetTablesRequest, context: __SerdeContext): any => {
  return {
    ...(input.CatalogId != null && { CatalogId: input.CatalogId }),
    ...(input.DatabaseName != null && { DatabaseName: input.DatabaseName }),
    ...(input.Expression != null && { Expression: input.Expression }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.QueryAsOfTime != null && { QueryAsOfTime: Math.round(input.QueryAsOfTime.getTime() / 1000) }),
    ...(input.TransactionId != null && { TransactionId: input.TransactionId }),
  };
};

const serializeAws_json1_1GetTableVersionRequest = (input: GetTableVersionRequest, context: __SerdeContext): any => {
  return {
    ...(input.CatalogId != null && { CatalogId: input.CatalogId }),
    ...(input.DatabaseName != null && { DatabaseName: input.DatabaseName }),
    ...(input.TableName != null && { TableName: input.TableName }),
    ...(input.VersionId != null && { VersionId: input.VersionId }),
  };
};

const serializeAws_json1_1GetTableVersionsRequest = (input: GetTableVersionsRequest, context: __SerdeContext): any => {
  return {
    ...(input.CatalogId != null && { CatalogId: input.CatalogId }),
    ...(input.DatabaseName != null && { DatabaseName: input.DatabaseName }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.TableName != null && { TableName: input.TableName }),
  };
};

const serializeAws_json1_1GetTagsRequest = (input: GetTagsRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
  };
};

const serializeAws_json1_1GetTriggerRequest = (input: GetTriggerRequest, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
  };
};

const serializeAws_json1_1GetTriggersRequest = (input: GetTriggersRequest, context: __SerdeContext): any => {
  return {
    ...(input.DependentJobName != null && { DependentJobName: input.DependentJobName }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1GetUnfilteredPartitionMetadataRequest = (
  input: GetUnfilteredPartitionMetadataRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AuditContext != null && { AuditContext: serializeAws_json1_1AuditContext(input.AuditContext, context) }),
    ...(input.CatalogId != null && { CatalogId: input.CatalogId }),
    ...(input.DatabaseName != null && { DatabaseName: input.DatabaseName }),
    ...(input.PartitionValues != null && {
      PartitionValues: serializeAws_json1_1ValueStringList(input.PartitionValues, context),
    }),
    ...(input.SupportedPermissionTypes != null && {
      SupportedPermissionTypes: serializeAws_json1_1PermissionTypeList(input.SupportedPermissionTypes, context),
    }),
    ...(input.TableName != null && { TableName: input.TableName }),
  };
};

const serializeAws_json1_1GetUnfilteredPartitionsMetadataRequest = (
  input: GetUnfilteredPartitionsMetadataRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AuditContext != null && { AuditContext: serializeAws_json1_1AuditContext(input.AuditContext, context) }),
    ...(input.CatalogId != null && { CatalogId: input.CatalogId }),
    ...(input.DatabaseName != null && { DatabaseName: input.DatabaseName }),
    ...(input.Expression != null && { Expression: input.Expression }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.Segment != null && { Segment: serializeAws_json1_1Segment(input.Segment, context) }),
    ...(input.SupportedPermissionTypes != null && {
      SupportedPermissionTypes: serializeAws_json1_1PermissionTypeList(input.SupportedPermissionTypes, context),
    }),
    ...(input.TableName != null && { TableName: input.TableName }),
  };
};

const serializeAws_json1_1GetUnfilteredTableMetadataRequest = (
  input: GetUnfilteredTableMetadataRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AuditContext != null && { AuditContext: serializeAws_json1_1AuditContext(input.AuditContext, context) }),
    ...(input.CatalogId != null && { CatalogId: input.CatalogId }),
    ...(input.DatabaseName != null && { DatabaseName: input.DatabaseName }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.SupportedPermissionTypes != null && {
      SupportedPermissionTypes: serializeAws_json1_1PermissionTypeList(input.SupportedPermissionTypes, context),
    }),
  };
};

const serializeAws_json1_1GetUserDefinedFunctionRequest = (
  input: GetUserDefinedFunctionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CatalogId != null && { CatalogId: input.CatalogId }),
    ...(input.DatabaseName != null && { DatabaseName: input.DatabaseName }),
    ...(input.FunctionName != null && { FunctionName: input.FunctionName }),
  };
};

const serializeAws_json1_1GetUserDefinedFunctionsRequest = (
  input: GetUserDefinedFunctionsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CatalogId != null && { CatalogId: input.CatalogId }),
    ...(input.DatabaseName != null && { DatabaseName: input.DatabaseName }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.Pattern != null && { Pattern: input.Pattern }),
  };
};

const serializeAws_json1_1GetWorkflowRequest = (input: GetWorkflowRequest, context: __SerdeContext): any => {
  return {
    ...(input.IncludeGraph != null && { IncludeGraph: input.IncludeGraph }),
    ...(input.Name != null && { Name: input.Name }),
  };
};

const serializeAws_json1_1GetWorkflowRunPropertiesRequest = (
  input: GetWorkflowRunPropertiesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.RunId != null && { RunId: input.RunId }),
  };
};

const serializeAws_json1_1GetWorkflowRunRequest = (input: GetWorkflowRunRequest, context: __SerdeContext): any => {
  return {
    ...(input.IncludeGraph != null && { IncludeGraph: input.IncludeGraph }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.RunId != null && { RunId: input.RunId }),
  };
};

const serializeAws_json1_1GetWorkflowRunsRequest = (input: GetWorkflowRunsRequest, context: __SerdeContext): any => {
  return {
    ...(input.IncludeGraph != null && { IncludeGraph: input.IncludeGraph }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1GlueSchema = (input: GlueSchema, context: __SerdeContext): any => {
  return {
    ...(input.Columns != null && { Columns: serializeAws_json1_1GlueStudioSchemaColumnList(input.Columns, context) }),
  };
};

const serializeAws_json1_1GlueSchemas = (input: GlueSchema[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1GlueSchema(entry, context);
    });
};

const serializeAws_json1_1GlueStudioPathList = (input: string[][], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1EnclosedInStringProperties(entry, context);
    });
};

const serializeAws_json1_1GlueStudioSchemaColumn = (input: GlueStudioSchemaColumn, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

const serializeAws_json1_1GlueStudioSchemaColumnList = (
  input: GlueStudioSchemaColumn[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1GlueStudioSchemaColumn(entry, context);
    });
};

const serializeAws_json1_1GlueTable = (input: GlueTable, context: __SerdeContext): any => {
  return {
    ...(input.CatalogId != null && { CatalogId: input.CatalogId }),
    ...(input.ConnectionName != null && { ConnectionName: input.ConnectionName }),
    ...(input.DatabaseName != null && { DatabaseName: input.DatabaseName }),
    ...(input.TableName != null && { TableName: input.TableName }),
  };
};

const serializeAws_json1_1GlueTables = (input: GlueTable[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1GlueTable(entry, context);
    });
};

const serializeAws_json1_1GovernedCatalogSource = (input: GovernedCatalogSource, context: __SerdeContext): any => {
  return {
    ...(input.AdditionalOptions != null && {
      AdditionalOptions: serializeAws_json1_1S3SourceAdditionalOptions(input.AdditionalOptions, context),
    }),
    ...(input.Database != null && { Database: input.Database }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.PartitionPredicate != null && { PartitionPredicate: input.PartitionPredicate }),
    ...(input.Table != null && { Table: input.Table }),
  };
};

const serializeAws_json1_1GovernedCatalogTarget = (input: GovernedCatalogTarget, context: __SerdeContext): any => {
  return {
    ...(input.Database != null && { Database: input.Database }),
    ...(input.Inputs != null && { Inputs: serializeAws_json1_1OneInput(input.Inputs, context) }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.PartitionKeys != null && {
      PartitionKeys: serializeAws_json1_1GlueStudioPathList(input.PartitionKeys, context),
    }),
    ...(input.SchemaChangePolicy != null && {
      SchemaChangePolicy: serializeAws_json1_1CatalogSchemaChangePolicy(input.SchemaChangePolicy, context),
    }),
    ...(input.Table != null && { Table: input.Table }),
  };
};

const serializeAws_json1_1ImportCatalogToGlueRequest = (
  input: ImportCatalogToGlueRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CatalogId != null && { CatalogId: input.CatalogId }),
  };
};

const serializeAws_json1_1JDBCConnectorOptions = (input: JDBCConnectorOptions, context: __SerdeContext): any => {
  return {
    ...(input.DataTypeMapping != null && {
      DataTypeMapping: serializeAws_json1_1JDBCDataTypeMapping(input.DataTypeMapping, context),
    }),
    ...(input.FilterPredicate != null && { FilterPredicate: input.FilterPredicate }),
    ...(input.JobBookmarkKeys != null && {
      JobBookmarkKeys: serializeAws_json1_1EnclosedInStringProperties(input.JobBookmarkKeys, context),
    }),
    ...(input.JobBookmarkKeysSortOrder != null && { JobBookmarkKeysSortOrder: input.JobBookmarkKeysSortOrder }),
    ...(input.LowerBound != null && { LowerBound: input.LowerBound }),
    ...(input.NumPartitions != null && { NumPartitions: input.NumPartitions }),
    ...(input.PartitionColumn != null && { PartitionColumn: input.PartitionColumn }),
    ...(input.UpperBound != null && { UpperBound: input.UpperBound }),
  };
};

const serializeAws_json1_1JDBCConnectorSource = (input: JDBCConnectorSource, context: __SerdeContext): any => {
  return {
    ...(input.AdditionalOptions != null && {
      AdditionalOptions: serializeAws_json1_1JDBCConnectorOptions(input.AdditionalOptions, context),
    }),
    ...(input.ConnectionName != null && { ConnectionName: input.ConnectionName }),
    ...(input.ConnectionTable != null && { ConnectionTable: input.ConnectionTable }),
    ...(input.ConnectionType != null && { ConnectionType: input.ConnectionType }),
    ...(input.ConnectorName != null && { ConnectorName: input.ConnectorName }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.OutputSchemas != null && {
      OutputSchemas: serializeAws_json1_1GlueSchemas(input.OutputSchemas, context),
    }),
    ...(input.Query != null && { Query: input.Query }),
  };
};

const serializeAws_json1_1JDBCConnectorTarget = (input: JDBCConnectorTarget, context: __SerdeContext): any => {
  return {
    ...(input.AdditionalOptions != null && {
      AdditionalOptions: serializeAws_json1_1AdditionalOptions(input.AdditionalOptions, context),
    }),
    ...(input.ConnectionName != null && { ConnectionName: input.ConnectionName }),
    ...(input.ConnectionTable != null && { ConnectionTable: input.ConnectionTable }),
    ...(input.ConnectionType != null && { ConnectionType: input.ConnectionType }),
    ...(input.ConnectorName != null && { ConnectorName: input.ConnectorName }),
    ...(input.Inputs != null && { Inputs: serializeAws_json1_1OneInput(input.Inputs, context) }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.OutputSchemas != null && {
      OutputSchemas: serializeAws_json1_1GlueSchemas(input.OutputSchemas, context),
    }),
  };
};

const serializeAws_json1_1JDBCDataTypeMapping = (
  input: Record<string, GlueRecordType | string>,
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [JDBCDataType | string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const serializeAws_json1_1JdbcTarget = (input: JdbcTarget, context: __SerdeContext): any => {
  return {
    ...(input.ConnectionName != null && { ConnectionName: input.ConnectionName }),
    ...(input.Exclusions != null && { Exclusions: serializeAws_json1_1PathList(input.Exclusions, context) }),
    ...(input.Path != null && { Path: input.Path }),
  };
};

const serializeAws_json1_1JdbcTargetList = (input: JdbcTarget[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1JdbcTarget(entry, context);
    });
};

const serializeAws_json1_1JobBookmarksEncryption = (input: JobBookmarksEncryption, context: __SerdeContext): any => {
  return {
    ...(input.JobBookmarksEncryptionMode != null && { JobBookmarksEncryptionMode: input.JobBookmarksEncryptionMode }),
    ...(input.KmsKeyArn != null && { KmsKeyArn: input.KmsKeyArn }),
  };
};

const serializeAws_json1_1JobCommand = (input: JobCommand, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.PythonVersion != null && { PythonVersion: input.PythonVersion }),
    ...(input.ScriptLocation != null && { ScriptLocation: input.ScriptLocation }),
  };
};

const serializeAws_json1_1JobNameList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1JobUpdate = (input: JobUpdate, context: __SerdeContext): any => {
  return {
    ...(input.AllocatedCapacity != null && { AllocatedCapacity: input.AllocatedCapacity }),
    ...(input.CodeGenConfigurationNodes != null && {
      CodeGenConfigurationNodes: serializeAws_json1_1CodeGenConfigurationNodes(
        input.CodeGenConfigurationNodes,
        context
      ),
    }),
    ...(input.Command != null && { Command: serializeAws_json1_1JobCommand(input.Command, context) }),
    ...(input.Connections != null && { Connections: serializeAws_json1_1ConnectionsList(input.Connections, context) }),
    ...(input.DefaultArguments != null && {
      DefaultArguments: serializeAws_json1_1GenericMap(input.DefaultArguments, context),
    }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.ExecutionProperty != null && {
      ExecutionProperty: serializeAws_json1_1ExecutionProperty(input.ExecutionProperty, context),
    }),
    ...(input.GlueVersion != null && { GlueVersion: input.GlueVersion }),
    ...(input.LogUri != null && { LogUri: input.LogUri }),
    ...(input.MaxCapacity != null && { MaxCapacity: __serializeFloat(input.MaxCapacity) }),
    ...(input.MaxRetries != null && { MaxRetries: input.MaxRetries }),
    ...(input.NonOverridableArguments != null && {
      NonOverridableArguments: serializeAws_json1_1GenericMap(input.NonOverridableArguments, context),
    }),
    ...(input.NotificationProperty != null && {
      NotificationProperty: serializeAws_json1_1NotificationProperty(input.NotificationProperty, context),
    }),
    ...(input.NumberOfWorkers != null && { NumberOfWorkers: input.NumberOfWorkers }),
    ...(input.Role != null && { Role: input.Role }),
    ...(input.SecurityConfiguration != null && { SecurityConfiguration: input.SecurityConfiguration }),
    ...(input.Timeout != null && { Timeout: input.Timeout }),
    ...(input.WorkerType != null && { WorkerType: input.WorkerType }),
  };
};

const serializeAws_json1_1Join = (input: Join, context: __SerdeContext): any => {
  return {
    ...(input.Columns != null && { Columns: serializeAws_json1_1JoinColumns(input.Columns, context) }),
    ...(input.Inputs != null && { Inputs: serializeAws_json1_1TwoInputs(input.Inputs, context) }),
    ...(input.JoinType != null && { JoinType: input.JoinType }),
    ...(input.Name != null && { Name: input.Name }),
  };
};

const serializeAws_json1_1JoinColumn = (input: JoinColumn, context: __SerdeContext): any => {
  return {
    ...(input.From != null && { From: input.From }),
    ...(input.Keys != null && { Keys: serializeAws_json1_1GlueStudioPathList(input.Keys, context) }),
  };
};

const serializeAws_json1_1JoinColumns = (input: JoinColumn[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1JoinColumn(entry, context);
    });
};

const serializeAws_json1_1KafkaStreamingSourceOptions = (
  input: KafkaStreamingSourceOptions,
  context: __SerdeContext
): any => {
  return {
    ...(input.Assign != null && { Assign: input.Assign }),
    ...(input.BootstrapServers != null && { BootstrapServers: input.BootstrapServers }),
    ...(input.Classification != null && { Classification: input.Classification }),
    ...(input.ConnectionName != null && { ConnectionName: input.ConnectionName }),
    ...(input.Delimiter != null && { Delimiter: input.Delimiter }),
    ...(input.EndingOffsets != null && { EndingOffsets: input.EndingOffsets }),
    ...(input.MaxOffsetsPerTrigger != null && { MaxOffsetsPerTrigger: input.MaxOffsetsPerTrigger }),
    ...(input.MinPartitions != null && { MinPartitions: input.MinPartitions }),
    ...(input.NumRetries != null && { NumRetries: input.NumRetries }),
    ...(input.PollTimeoutMs != null && { PollTimeoutMs: input.PollTimeoutMs }),
    ...(input.RetryIntervalMs != null && { RetryIntervalMs: input.RetryIntervalMs }),
    ...(input.SecurityProtocol != null && { SecurityProtocol: input.SecurityProtocol }),
    ...(input.StartingOffsets != null && { StartingOffsets: input.StartingOffsets }),
    ...(input.SubscribePattern != null && { SubscribePattern: input.SubscribePattern }),
    ...(input.TopicName != null && { TopicName: input.TopicName }),
  };
};

const serializeAws_json1_1KeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1KinesisStreamingSourceOptions = (
  input: KinesisStreamingSourceOptions,
  context: __SerdeContext
): any => {
  return {
    ...(input.AddIdleTimeBetweenReads != null && { AddIdleTimeBetweenReads: input.AddIdleTimeBetweenReads }),
    ...(input.AvoidEmptyBatches != null && { AvoidEmptyBatches: input.AvoidEmptyBatches }),
    ...(input.Classification != null && { Classification: input.Classification }),
    ...(input.Delimiter != null && { Delimiter: input.Delimiter }),
    ...(input.DescribeShardInterval != null && { DescribeShardInterval: input.DescribeShardInterval }),
    ...(input.EndpointUrl != null && { EndpointUrl: input.EndpointUrl }),
    ...(input.IdleTimeBetweenReadsInMs != null && { IdleTimeBetweenReadsInMs: input.IdleTimeBetweenReadsInMs }),
    ...(input.MaxFetchRecordsPerShard != null && { MaxFetchRecordsPerShard: input.MaxFetchRecordsPerShard }),
    ...(input.MaxFetchTimeInMs != null && { MaxFetchTimeInMs: input.MaxFetchTimeInMs }),
    ...(input.MaxRecordPerRead != null && { MaxRecordPerRead: input.MaxRecordPerRead }),
    ...(input.MaxRetryIntervalMs != null && { MaxRetryIntervalMs: input.MaxRetryIntervalMs }),
    ...(input.NumRetries != null && { NumRetries: input.NumRetries }),
    ...(input.RetryIntervalMs != null && { RetryIntervalMs: input.RetryIntervalMs }),
    ...(input.RoleArn != null && { RoleArn: input.RoleArn }),
    ...(input.RoleSessionName != null && { RoleSessionName: input.RoleSessionName }),
    ...(input.StartingPosition != null && { StartingPosition: input.StartingPosition }),
    ...(input.StreamArn != null && { StreamArn: input.StreamArn }),
    ...(input.StreamName != null && { StreamName: input.StreamName }),
  };
};

const serializeAws_json1_1LakeFormationConfiguration = (
  input: LakeFormationConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.AccountId != null && { AccountId: input.AccountId }),
    ...(input.UseLakeFormationCredentials != null && {
      UseLakeFormationCredentials: input.UseLakeFormationCredentials,
    }),
  };
};

const serializeAws_json1_1LimitedPathList = (input: string[][], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1LimitedStringList(entry, context);
    });
};

const serializeAws_json1_1LimitedStringList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1LineageConfiguration = (input: LineageConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.CrawlerLineageSettings != null && { CrawlerLineageSettings: input.CrawlerLineageSettings }),
  };
};

const serializeAws_json1_1ListBlueprintsRequest = (input: ListBlueprintsRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1TagsMap(input.Tags, context) }),
  };
};

const serializeAws_json1_1ListCrawlersRequest = (input: ListCrawlersRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1TagsMap(input.Tags, context) }),
  };
};

const serializeAws_json1_1ListCrawlsRequest = (input: ListCrawlsRequest, context: __SerdeContext): any => {
  return {
    ...(input.CrawlerName != null && { CrawlerName: input.CrawlerName }),
    ...(input.Filters != null && { Filters: serializeAws_json1_1CrawlsFilterList(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListCustomEntityTypesRequest = (
  input: ListCustomEntityTypesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListDevEndpointsRequest = (input: ListDevEndpointsRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1TagsMap(input.Tags, context) }),
  };
};

const serializeAws_json1_1ListJobsRequest = (input: ListJobsRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1TagsMap(input.Tags, context) }),
  };
};

const serializeAws_json1_1ListMLTransformsRequest = (input: ListMLTransformsRequest, context: __SerdeContext): any => {
  return {
    ...(input.Filter != null && { Filter: serializeAws_json1_1TransformFilterCriteria(input.Filter, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.Sort != null && { Sort: serializeAws_json1_1TransformSortCriteria(input.Sort, context) }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1TagsMap(input.Tags, context) }),
  };
};

const serializeAws_json1_1ListRegistriesInput = (input: ListRegistriesInput, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListSchemasInput = (input: ListSchemasInput, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.RegistryId != null && { RegistryId: serializeAws_json1_1RegistryId(input.RegistryId, context) }),
  };
};

const serializeAws_json1_1ListSchemaVersionsInput = (input: ListSchemaVersionsInput, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.SchemaId != null && { SchemaId: serializeAws_json1_1SchemaId(input.SchemaId, context) }),
  };
};

const serializeAws_json1_1ListSessionsRequest = (input: ListSessionsRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.RequestOrigin != null && { RequestOrigin: input.RequestOrigin }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1TagsMap(input.Tags, context) }),
  };
};

const serializeAws_json1_1ListStatementsRequest = (input: ListStatementsRequest, context: __SerdeContext): any => {
  return {
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.RequestOrigin != null && { RequestOrigin: input.RequestOrigin }),
    ...(input.SessionId != null && { SessionId: input.SessionId }),
  };
};

const serializeAws_json1_1ListTriggersRequest = (input: ListTriggersRequest, context: __SerdeContext): any => {
  return {
    ...(input.DependentJobName != null && { DependentJobName: input.DependentJobName }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1TagsMap(input.Tags, context) }),
  };
};

const serializeAws_json1_1ListWorkflowsRequest = (input: ListWorkflowsRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1Location = (input: Location, context: __SerdeContext): any => {
  return {
    ...(input.DynamoDB != null && { DynamoDB: serializeAws_json1_1CodeGenNodeArgs(input.DynamoDB, context) }),
    ...(input.Jdbc != null && { Jdbc: serializeAws_json1_1CodeGenNodeArgs(input.Jdbc, context) }),
    ...(input.S3 != null && { S3: serializeAws_json1_1CodeGenNodeArgs(input.S3, context) }),
  };
};

const serializeAws_json1_1LocationMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const serializeAws_json1_1LocationStringList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1LongColumnStatisticsData = (
  input: LongColumnStatisticsData,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaximumValue != null && { MaximumValue: input.MaximumValue }),
    ...(input.MinimumValue != null && { MinimumValue: input.MinimumValue }),
    ...(input.NumberOfDistinctValues != null && { NumberOfDistinctValues: input.NumberOfDistinctValues }),
    ...(input.NumberOfNulls != null && { NumberOfNulls: input.NumberOfNulls }),
  };
};

const serializeAws_json1_1ManyInputs = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1Mapping = (input: Mapping, context: __SerdeContext): any => {
  return {
    ...(input.Children != null && { Children: serializeAws_json1_1Mappings(input.Children, context) }),
    ...(input.Dropped != null && { Dropped: input.Dropped }),
    ...(input.FromPath != null && {
      FromPath: serializeAws_json1_1EnclosedInStringProperties(input.FromPath, context),
    }),
    ...(input.FromType != null && { FromType: input.FromType }),
    ...(input.ToKey != null && { ToKey: input.ToKey }),
    ...(input.ToType != null && { ToType: input.ToType }),
  };
};

const serializeAws_json1_1MappingEntry = (input: MappingEntry, context: __SerdeContext): any => {
  return {
    ...(input.SourcePath != null && { SourcePath: input.SourcePath }),
    ...(input.SourceTable != null && { SourceTable: input.SourceTable }),
    ...(input.SourceType != null && { SourceType: input.SourceType }),
    ...(input.TargetPath != null && { TargetPath: input.TargetPath }),
    ...(input.TargetTable != null && { TargetTable: input.TargetTable }),
    ...(input.TargetType != null && { TargetType: input.TargetType }),
  };
};

const serializeAws_json1_1MappingList = (input: MappingEntry[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1MappingEntry(entry, context);
    });
};

const serializeAws_json1_1Mappings = (input: Mapping[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1Mapping(entry, context);
    });
};

const serializeAws_json1_1MapValue = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const serializeAws_json1_1MatchCriteria = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1Merge = (input: Merge, context: __SerdeContext): any => {
  return {
    ...(input.Inputs != null && { Inputs: serializeAws_json1_1TwoInputs(input.Inputs, context) }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.PrimaryKeys != null && {
      PrimaryKeys: serializeAws_json1_1GlueStudioPathList(input.PrimaryKeys, context),
    }),
    ...(input.Source != null && { Source: input.Source }),
  };
};

const serializeAws_json1_1MetadataKeyValuePair = (input: MetadataKeyValuePair, context: __SerdeContext): any => {
  return {
    ...(input.MetadataKey != null && { MetadataKey: input.MetadataKey }),
    ...(input.MetadataValue != null && { MetadataValue: input.MetadataValue }),
  };
};

const serializeAws_json1_1MetadataList = (input: MetadataKeyValuePair[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1MetadataKeyValuePair(entry, context);
    });
};

const serializeAws_json1_1MicrosoftSQLServerCatalogSource = (
  input: MicrosoftSQLServerCatalogSource,
  context: __SerdeContext
): any => {
  return {
    ...(input.Database != null && { Database: input.Database }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Table != null && { Table: input.Table }),
  };
};

const serializeAws_json1_1MicrosoftSQLServerCatalogTarget = (
  input: MicrosoftSQLServerCatalogTarget,
  context: __SerdeContext
): any => {
  return {
    ...(input.Database != null && { Database: input.Database }),
    ...(input.Inputs != null && { Inputs: serializeAws_json1_1OneInput(input.Inputs, context) }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Table != null && { Table: input.Table }),
  };
};

const serializeAws_json1_1MLUserDataEncryption = (input: MLUserDataEncryption, context: __SerdeContext): any => {
  return {
    ...(input.KmsKeyId != null && { KmsKeyId: input.KmsKeyId }),
    ...(input.MlUserDataEncryptionMode != null && { MlUserDataEncryptionMode: input.MlUserDataEncryptionMode }),
  };
};

const serializeAws_json1_1MongoDBTarget = (input: MongoDBTarget, context: __SerdeContext): any => {
  return {
    ...(input.ConnectionName != null && { ConnectionName: input.ConnectionName }),
    ...(input.Path != null && { Path: input.Path }),
    ...(input.ScanAll != null && { ScanAll: input.ScanAll }),
  };
};

const serializeAws_json1_1MongoDBTargetList = (input: MongoDBTarget[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1MongoDBTarget(entry, context);
    });
};

const serializeAws_json1_1MySQLCatalogSource = (input: MySQLCatalogSource, context: __SerdeContext): any => {
  return {
    ...(input.Database != null && { Database: input.Database }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Table != null && { Table: input.Table }),
  };
};

const serializeAws_json1_1MySQLCatalogTarget = (input: MySQLCatalogTarget, context: __SerdeContext): any => {
  return {
    ...(input.Database != null && { Database: input.Database }),
    ...(input.Inputs != null && { Inputs: serializeAws_json1_1OneInput(input.Inputs, context) }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Table != null && { Table: input.Table }),
  };
};

const serializeAws_json1_1NameStringList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1NodeIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1NotificationProperty = (input: NotificationProperty, context: __SerdeContext): any => {
  return {
    ...(input.NotifyDelayAfter != null && { NotifyDelayAfter: input.NotifyDelayAfter }),
  };
};

const serializeAws_json1_1NullCheckBoxList = (input: NullCheckBoxList, context: __SerdeContext): any => {
  return {
    ...(input.IsEmpty != null && { IsEmpty: input.IsEmpty }),
    ...(input.IsNegOne != null && { IsNegOne: input.IsNegOne }),
    ...(input.IsNullString != null && { IsNullString: input.IsNullString }),
  };
};

const serializeAws_json1_1NullValueField = (input: NullValueField, context: __SerdeContext): any => {
  return {
    ...(input.Datatype != null && { Datatype: serializeAws_json1_1Datatype(input.Datatype, context) }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

const serializeAws_json1_1NullValueFields = (input: NullValueField[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1NullValueField(entry, context);
    });
};

const serializeAws_json1_1OneInput = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1OracleSQLCatalogSource = (input: OracleSQLCatalogSource, context: __SerdeContext): any => {
  return {
    ...(input.Database != null && { Database: input.Database }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Table != null && { Table: input.Table }),
  };
};

const serializeAws_json1_1OracleSQLCatalogTarget = (input: OracleSQLCatalogTarget, context: __SerdeContext): any => {
  return {
    ...(input.Database != null && { Database: input.Database }),
    ...(input.Inputs != null && { Inputs: serializeAws_json1_1OneInput(input.Inputs, context) }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Table != null && { Table: input.Table }),
  };
};

const serializeAws_json1_1OrchestrationArgumentsMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const serializeAws_json1_1OrchestrationStringList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1Order = (input: Order, context: __SerdeContext): any => {
  return {
    ...(input.Column != null && { Column: input.Column }),
    ...(input.SortOrder != null && { SortOrder: input.SortOrder }),
  };
};

const serializeAws_json1_1OrderList = (input: Order[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1Order(entry, context);
    });
};

const serializeAws_json1_1ParametersMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const serializeAws_json1_1PartitionIndex = (input: PartitionIndex, context: __SerdeContext): any => {
  return {
    ...(input.IndexName != null && { IndexName: input.IndexName }),
    ...(input.Keys != null && { Keys: serializeAws_json1_1KeyList(input.Keys, context) }),
  };
};

const serializeAws_json1_1PartitionIndexList = (input: PartitionIndex[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1PartitionIndex(entry, context);
    });
};

const serializeAws_json1_1PartitionInput = (input: PartitionInput, context: __SerdeContext): any => {
  return {
    ...(input.LastAccessTime != null && { LastAccessTime: Math.round(input.LastAccessTime.getTime() / 1000) }),
    ...(input.LastAnalyzedTime != null && { LastAnalyzedTime: Math.round(input.LastAnalyzedTime.getTime() / 1000) }),
    ...(input.Parameters != null && { Parameters: serializeAws_json1_1ParametersMap(input.Parameters, context) }),
    ...(input.StorageDescriptor != null && {
      StorageDescriptor: serializeAws_json1_1StorageDescriptor(input.StorageDescriptor, context),
    }),
    ...(input.Values != null && { Values: serializeAws_json1_1ValueStringList(input.Values, context) }),
  };
};

const serializeAws_json1_1PartitionInputList = (input: PartitionInput[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1PartitionInput(entry, context);
    });
};

const serializeAws_json1_1PartitionValueList = (input: PartitionValueList, context: __SerdeContext): any => {
  return {
    ...(input.Values != null && { Values: serializeAws_json1_1ValueStringList(input.Values, context) }),
  };
};

const serializeAws_json1_1PathList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1PermissionList = (input: (Permission | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1PermissionTypeList = (input: (PermissionType | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1PhysicalConnectionRequirements = (
  input: PhysicalConnectionRequirements,
  context: __SerdeContext
): any => {
  return {
    ...(input.AvailabilityZone != null && { AvailabilityZone: input.AvailabilityZone }),
    ...(input.SecurityGroupIdList != null && {
      SecurityGroupIdList: serializeAws_json1_1SecurityGroupIdList(input.SecurityGroupIdList, context),
    }),
    ...(input.SubnetId != null && { SubnetId: input.SubnetId }),
  };
};

const serializeAws_json1_1PIIDetection = (input: PIIDetection, context: __SerdeContext): any => {
  return {
    ...(input.EntityTypesToDetect != null && {
      EntityTypesToDetect: serializeAws_json1_1EnclosedInStringProperties(input.EntityTypesToDetect, context),
    }),
    ...(input.Inputs != null && { Inputs: serializeAws_json1_1OneInput(input.Inputs, context) }),
    ...(input.MaskValue != null && { MaskValue: input.MaskValue }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.OutputColumnName != null && { OutputColumnName: input.OutputColumnName }),
    ...(input.PiiType != null && { PiiType: input.PiiType }),
    ...(input.SampleFraction != null && { SampleFraction: __serializeFloat(input.SampleFraction) }),
    ...(input.ThresholdFraction != null && { ThresholdFraction: __serializeFloat(input.ThresholdFraction) }),
  };
};

const serializeAws_json1_1PostgreSQLCatalogSource = (input: PostgreSQLCatalogSource, context: __SerdeContext): any => {
  return {
    ...(input.Database != null && { Database: input.Database }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Table != null && { Table: input.Table }),
  };
};

const serializeAws_json1_1PostgreSQLCatalogTarget = (input: PostgreSQLCatalogTarget, context: __SerdeContext): any => {
  return {
    ...(input.Database != null && { Database: input.Database }),
    ...(input.Inputs != null && { Inputs: serializeAws_json1_1OneInput(input.Inputs, context) }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Table != null && { Table: input.Table }),
  };
};

const serializeAws_json1_1Predicate = (input: Predicate, context: __SerdeContext): any => {
  return {
    ...(input.Conditions != null && { Conditions: serializeAws_json1_1ConditionList(input.Conditions, context) }),
    ...(input.Logical != null && { Logical: input.Logical }),
  };
};

const serializeAws_json1_1PrincipalPermissions = (input: PrincipalPermissions, context: __SerdeContext): any => {
  return {
    ...(input.Permissions != null && { Permissions: serializeAws_json1_1PermissionList(input.Permissions, context) }),
    ...(input.Principal != null && { Principal: serializeAws_json1_1DataLakePrincipal(input.Principal, context) }),
  };
};

const serializeAws_json1_1PrincipalPermissionsList = (input: PrincipalPermissions[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1PrincipalPermissions(entry, context);
    });
};

const serializeAws_json1_1PropertyPredicate = (input: PropertyPredicate, context: __SerdeContext): any => {
  return {
    ...(input.Comparator != null && { Comparator: input.Comparator }),
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

const serializeAws_json1_1PublicKeysList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1PutDataCatalogEncryptionSettingsRequest = (
  input: PutDataCatalogEncryptionSettingsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CatalogId != null && { CatalogId: input.CatalogId }),
    ...(input.DataCatalogEncryptionSettings != null && {
      DataCatalogEncryptionSettings: serializeAws_json1_1DataCatalogEncryptionSettings(
        input.DataCatalogEncryptionSettings,
        context
      ),
    }),
  };
};

const serializeAws_json1_1PutResourcePolicyRequest = (
  input: PutResourcePolicyRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.EnableHybrid != null && { EnableHybrid: input.EnableHybrid }),
    ...(input.PolicyExistsCondition != null && { PolicyExistsCondition: input.PolicyExistsCondition }),
    ...(input.PolicyHashCondition != null && { PolicyHashCondition: input.PolicyHashCondition }),
    ...(input.PolicyInJson != null && { PolicyInJson: input.PolicyInJson }),
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
  };
};

const serializeAws_json1_1PutSchemaVersionMetadataInput = (
  input: PutSchemaVersionMetadataInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.MetadataKeyValue != null && {
      MetadataKeyValue: serializeAws_json1_1MetadataKeyValuePair(input.MetadataKeyValue, context),
    }),
    ...(input.SchemaId != null && { SchemaId: serializeAws_json1_1SchemaId(input.SchemaId, context) }),
    ...(input.SchemaVersionId != null && { SchemaVersionId: input.SchemaVersionId }),
    ...(input.SchemaVersionNumber != null && {
      SchemaVersionNumber: serializeAws_json1_1SchemaVersionNumber(input.SchemaVersionNumber, context),
    }),
  };
};

const serializeAws_json1_1PutWorkflowRunPropertiesRequest = (
  input: PutWorkflowRunPropertiesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.RunId != null && { RunId: input.RunId }),
    ...(input.RunProperties != null && {
      RunProperties: serializeAws_json1_1WorkflowRunProperties(input.RunProperties, context),
    }),
  };
};

const serializeAws_json1_1QuerySchemaVersionMetadataInput = (
  input: QuerySchemaVersionMetadataInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.MetadataList != null && { MetadataList: serializeAws_json1_1MetadataList(input.MetadataList, context) }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.SchemaId != null && { SchemaId: serializeAws_json1_1SchemaId(input.SchemaId, context) }),
    ...(input.SchemaVersionId != null && { SchemaVersionId: input.SchemaVersionId }),
    ...(input.SchemaVersionNumber != null && {
      SchemaVersionNumber: serializeAws_json1_1SchemaVersionNumber(input.SchemaVersionNumber, context),
    }),
  };
};

const serializeAws_json1_1RecrawlPolicy = (input: RecrawlPolicy, context: __SerdeContext): any => {
  return {
    ...(input.RecrawlBehavior != null && { RecrawlBehavior: input.RecrawlBehavior }),
  };
};

const serializeAws_json1_1RedshiftSource = (input: RedshiftSource, context: __SerdeContext): any => {
  return {
    ...(input.Database != null && { Database: input.Database }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.RedshiftTmpDir != null && { RedshiftTmpDir: input.RedshiftTmpDir }),
    ...(input.Table != null && { Table: input.Table }),
    ...(input.TmpDirIAMRole != null && { TmpDirIAMRole: input.TmpDirIAMRole }),
  };
};

const serializeAws_json1_1RedshiftTarget = (input: RedshiftTarget, context: __SerdeContext): any => {
  return {
    ...(input.Database != null && { Database: input.Database }),
    ...(input.Inputs != null && { Inputs: serializeAws_json1_1OneInput(input.Inputs, context) }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.RedshiftTmpDir != null && { RedshiftTmpDir: input.RedshiftTmpDir }),
    ...(input.Table != null && { Table: input.Table }),
    ...(input.TmpDirIAMRole != null && { TmpDirIAMRole: input.TmpDirIAMRole }),
    ...(input.UpsertRedshiftOptions != null && {
      UpsertRedshiftOptions: serializeAws_json1_1UpsertRedshiftTargetOptions(input.UpsertRedshiftOptions, context),
    }),
  };
};

const serializeAws_json1_1RegisterSchemaVersionInput = (
  input: RegisterSchemaVersionInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.SchemaDefinition != null && { SchemaDefinition: input.SchemaDefinition }),
    ...(input.SchemaId != null && { SchemaId: serializeAws_json1_1SchemaId(input.SchemaId, context) }),
  };
};

const serializeAws_json1_1RegistryId = (input: RegistryId, context: __SerdeContext): any => {
  return {
    ...(input.RegistryArn != null && { RegistryArn: input.RegistryArn }),
    ...(input.RegistryName != null && { RegistryName: input.RegistryName }),
  };
};

const serializeAws_json1_1RelationalCatalogSource = (input: RelationalCatalogSource, context: __SerdeContext): any => {
  return {
    ...(input.Database != null && { Database: input.Database }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Table != null && { Table: input.Table }),
  };
};

const serializeAws_json1_1RemoveSchemaVersionMetadataInput = (
  input: RemoveSchemaVersionMetadataInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.MetadataKeyValue != null && {
      MetadataKeyValue: serializeAws_json1_1MetadataKeyValuePair(input.MetadataKeyValue, context),
    }),
    ...(input.SchemaId != null && { SchemaId: serializeAws_json1_1SchemaId(input.SchemaId, context) }),
    ...(input.SchemaVersionId != null && { SchemaVersionId: input.SchemaVersionId }),
    ...(input.SchemaVersionNumber != null && {
      SchemaVersionNumber: serializeAws_json1_1SchemaVersionNumber(input.SchemaVersionNumber, context),
    }),
  };
};

const serializeAws_json1_1RenameField = (input: RenameField, context: __SerdeContext): any => {
  return {
    ...(input.Inputs != null && { Inputs: serializeAws_json1_1OneInput(input.Inputs, context) }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.SourcePath != null && {
      SourcePath: serializeAws_json1_1EnclosedInStringProperties(input.SourcePath, context),
    }),
    ...(input.TargetPath != null && {
      TargetPath: serializeAws_json1_1EnclosedInStringProperties(input.TargetPath, context),
    }),
  };
};

const serializeAws_json1_1ResetJobBookmarkRequest = (input: ResetJobBookmarkRequest, context: __SerdeContext): any => {
  return {
    ...(input.JobName != null && { JobName: input.JobName }),
    ...(input.RunId != null && { RunId: input.RunId }),
  };
};

const serializeAws_json1_1ResourceUri = (input: ResourceUri, context: __SerdeContext): any => {
  return {
    ...(input.ResourceType != null && { ResourceType: input.ResourceType }),
    ...(input.Uri != null && { Uri: input.Uri }),
  };
};

const serializeAws_json1_1ResourceUriList = (input: ResourceUri[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1ResourceUri(entry, context);
    });
};

const serializeAws_json1_1ResumeWorkflowRunRequest = (
  input: ResumeWorkflowRunRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.NodeIds != null && { NodeIds: serializeAws_json1_1NodeIdList(input.NodeIds, context) }),
    ...(input.RunId != null && { RunId: input.RunId }),
  };
};

const serializeAws_json1_1RunStatementRequest = (input: RunStatementRequest, context: __SerdeContext): any => {
  return {
    ...(input.Code != null && { Code: input.Code }),
    ...(input.RequestOrigin != null && { RequestOrigin: input.RequestOrigin }),
    ...(input.SessionId != null && { SessionId: input.SessionId }),
  };
};

const serializeAws_json1_1S3CatalogSource = (input: S3CatalogSource, context: __SerdeContext): any => {
  return {
    ...(input.AdditionalOptions != null && {
      AdditionalOptions: serializeAws_json1_1S3SourceAdditionalOptions(input.AdditionalOptions, context),
    }),
    ...(input.Database != null && { Database: input.Database }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.PartitionPredicate != null && { PartitionPredicate: input.PartitionPredicate }),
    ...(input.Table != null && { Table: input.Table }),
  };
};

const serializeAws_json1_1S3CatalogTarget = (input: S3CatalogTarget, context: __SerdeContext): any => {
  return {
    ...(input.Database != null && { Database: input.Database }),
    ...(input.Inputs != null && { Inputs: serializeAws_json1_1OneInput(input.Inputs, context) }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.PartitionKeys != null && {
      PartitionKeys: serializeAws_json1_1GlueStudioPathList(input.PartitionKeys, context),
    }),
    ...(input.SchemaChangePolicy != null && {
      SchemaChangePolicy: serializeAws_json1_1CatalogSchemaChangePolicy(input.SchemaChangePolicy, context),
    }),
    ...(input.Table != null && { Table: input.Table }),
  };
};

const serializeAws_json1_1S3CsvSource = (input: S3CsvSource, context: __SerdeContext): any => {
  return {
    ...(input.AdditionalOptions != null && {
      AdditionalOptions: serializeAws_json1_1S3DirectSourceAdditionalOptions(input.AdditionalOptions, context),
    }),
    ...(input.CompressionType != null && { CompressionType: input.CompressionType }),
    ...(input.Escaper != null && { Escaper: input.Escaper }),
    ...(input.Exclusions != null && {
      Exclusions: serializeAws_json1_1EnclosedInStringProperties(input.Exclusions, context),
    }),
    ...(input.GroupFiles != null && { GroupFiles: input.GroupFiles }),
    ...(input.GroupSize != null && { GroupSize: input.GroupSize }),
    ...(input.MaxBand != null && { MaxBand: input.MaxBand }),
    ...(input.MaxFilesInBand != null && { MaxFilesInBand: input.MaxFilesInBand }),
    ...(input.Multiline != null && { Multiline: input.Multiline }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.OptimizePerformance != null && { OptimizePerformance: input.OptimizePerformance }),
    ...(input.OutputSchemas != null && {
      OutputSchemas: serializeAws_json1_1GlueSchemas(input.OutputSchemas, context),
    }),
    ...(input.Paths != null && { Paths: serializeAws_json1_1EnclosedInStringProperties(input.Paths, context) }),
    ...(input.QuoteChar != null && { QuoteChar: input.QuoteChar }),
    ...(input.Recurse != null && { Recurse: input.Recurse }),
    ...(input.Separator != null && { Separator: input.Separator }),
    ...(input.SkipFirst != null && { SkipFirst: input.SkipFirst }),
    ...(input.WithHeader != null && { WithHeader: input.WithHeader }),
    ...(input.WriteHeader != null && { WriteHeader: input.WriteHeader }),
  };
};

const serializeAws_json1_1S3DirectSourceAdditionalOptions = (
  input: S3DirectSourceAdditionalOptions,
  context: __SerdeContext
): any => {
  return {
    ...(input.BoundedFiles != null && { BoundedFiles: input.BoundedFiles }),
    ...(input.BoundedSize != null && { BoundedSize: input.BoundedSize }),
    ...(input.EnableSamplePath != null && { EnableSamplePath: input.EnableSamplePath }),
    ...(input.SamplePath != null && { SamplePath: input.SamplePath }),
  };
};

const serializeAws_json1_1S3DirectTarget = (input: S3DirectTarget, context: __SerdeContext): any => {
  return {
    ...(input.Compression != null && { Compression: input.Compression }),
    ...(input.Format != null && { Format: input.Format }),
    ...(input.Inputs != null && { Inputs: serializeAws_json1_1OneInput(input.Inputs, context) }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.PartitionKeys != null && {
      PartitionKeys: serializeAws_json1_1GlueStudioPathList(input.PartitionKeys, context),
    }),
    ...(input.Path != null && { Path: input.Path }),
    ...(input.SchemaChangePolicy != null && {
      SchemaChangePolicy: serializeAws_json1_1DirectSchemaChangePolicy(input.SchemaChangePolicy, context),
    }),
  };
};

const serializeAws_json1_1S3Encryption = (input: S3Encryption, context: __SerdeContext): any => {
  return {
    ...(input.KmsKeyArn != null && { KmsKeyArn: input.KmsKeyArn }),
    ...(input.S3EncryptionMode != null && { S3EncryptionMode: input.S3EncryptionMode }),
  };
};

const serializeAws_json1_1S3EncryptionList = (input: S3Encryption[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1S3Encryption(entry, context);
    });
};

const serializeAws_json1_1S3GlueParquetTarget = (input: S3GlueParquetTarget, context: __SerdeContext): any => {
  return {
    ...(input.Compression != null && { Compression: input.Compression }),
    ...(input.Inputs != null && { Inputs: serializeAws_json1_1OneInput(input.Inputs, context) }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.PartitionKeys != null && {
      PartitionKeys: serializeAws_json1_1GlueStudioPathList(input.PartitionKeys, context),
    }),
    ...(input.Path != null && { Path: input.Path }),
    ...(input.SchemaChangePolicy != null && {
      SchemaChangePolicy: serializeAws_json1_1DirectSchemaChangePolicy(input.SchemaChangePolicy, context),
    }),
  };
};

const serializeAws_json1_1S3JsonSource = (input: S3JsonSource, context: __SerdeContext): any => {
  return {
    ...(input.AdditionalOptions != null && {
      AdditionalOptions: serializeAws_json1_1S3DirectSourceAdditionalOptions(input.AdditionalOptions, context),
    }),
    ...(input.CompressionType != null && { CompressionType: input.CompressionType }),
    ...(input.Exclusions != null && {
      Exclusions: serializeAws_json1_1EnclosedInStringProperties(input.Exclusions, context),
    }),
    ...(input.GroupFiles != null && { GroupFiles: input.GroupFiles }),
    ...(input.GroupSize != null && { GroupSize: input.GroupSize }),
    ...(input.JsonPath != null && { JsonPath: input.JsonPath }),
    ...(input.MaxBand != null && { MaxBand: input.MaxBand }),
    ...(input.MaxFilesInBand != null && { MaxFilesInBand: input.MaxFilesInBand }),
    ...(input.Multiline != null && { Multiline: input.Multiline }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.OutputSchemas != null && {
      OutputSchemas: serializeAws_json1_1GlueSchemas(input.OutputSchemas, context),
    }),
    ...(input.Paths != null && { Paths: serializeAws_json1_1EnclosedInStringProperties(input.Paths, context) }),
    ...(input.Recurse != null && { Recurse: input.Recurse }),
  };
};

const serializeAws_json1_1S3ParquetSource = (input: S3ParquetSource, context: __SerdeContext): any => {
  return {
    ...(input.AdditionalOptions != null && {
      AdditionalOptions: serializeAws_json1_1S3DirectSourceAdditionalOptions(input.AdditionalOptions, context),
    }),
    ...(input.CompressionType != null && { CompressionType: input.CompressionType }),
    ...(input.Exclusions != null && {
      Exclusions: serializeAws_json1_1EnclosedInStringProperties(input.Exclusions, context),
    }),
    ...(input.GroupFiles != null && { GroupFiles: input.GroupFiles }),
    ...(input.GroupSize != null && { GroupSize: input.GroupSize }),
    ...(input.MaxBand != null && { MaxBand: input.MaxBand }),
    ...(input.MaxFilesInBand != null && { MaxFilesInBand: input.MaxFilesInBand }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.OutputSchemas != null && {
      OutputSchemas: serializeAws_json1_1GlueSchemas(input.OutputSchemas, context),
    }),
    ...(input.Paths != null && { Paths: serializeAws_json1_1EnclosedInStringProperties(input.Paths, context) }),
    ...(input.Recurse != null && { Recurse: input.Recurse }),
  };
};

const serializeAws_json1_1S3SourceAdditionalOptions = (
  input: S3SourceAdditionalOptions,
  context: __SerdeContext
): any => {
  return {
    ...(input.BoundedFiles != null && { BoundedFiles: input.BoundedFiles }),
    ...(input.BoundedSize != null && { BoundedSize: input.BoundedSize }),
  };
};

const serializeAws_json1_1S3Target = (input: S3Target, context: __SerdeContext): any => {
  return {
    ...(input.ConnectionName != null && { ConnectionName: input.ConnectionName }),
    ...(input.DlqEventQueueArn != null && { DlqEventQueueArn: input.DlqEventQueueArn }),
    ...(input.EventQueueArn != null && { EventQueueArn: input.EventQueueArn }),
    ...(input.Exclusions != null && { Exclusions: serializeAws_json1_1PathList(input.Exclusions, context) }),
    ...(input.Path != null && { Path: input.Path }),
    ...(input.SampleSize != null && { SampleSize: input.SampleSize }),
  };
};

const serializeAws_json1_1S3TargetList = (input: S3Target[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1S3Target(entry, context);
    });
};

const serializeAws_json1_1SchemaChangePolicy = (input: SchemaChangePolicy, context: __SerdeContext): any => {
  return {
    ...(input.DeleteBehavior != null && { DeleteBehavior: input.DeleteBehavior }),
    ...(input.UpdateBehavior != null && { UpdateBehavior: input.UpdateBehavior }),
  };
};

const serializeAws_json1_1SchemaColumn = (input: SchemaColumn, context: __SerdeContext): any => {
  return {
    ...(input.DataType != null && { DataType: input.DataType }),
    ...(input.Name != null && { Name: input.Name }),
  };
};

const serializeAws_json1_1SchemaId = (input: SchemaId, context: __SerdeContext): any => {
  return {
    ...(input.RegistryName != null && { RegistryName: input.RegistryName }),
    ...(input.SchemaArn != null && { SchemaArn: input.SchemaArn }),
    ...(input.SchemaName != null && { SchemaName: input.SchemaName }),
  };
};

const serializeAws_json1_1SchemaReference = (input: SchemaReference, context: __SerdeContext): any => {
  return {
    ...(input.SchemaId != null && { SchemaId: serializeAws_json1_1SchemaId(input.SchemaId, context) }),
    ...(input.SchemaVersionId != null && { SchemaVersionId: input.SchemaVersionId }),
    ...(input.SchemaVersionNumber != null && { SchemaVersionNumber: input.SchemaVersionNumber }),
  };
};

const serializeAws_json1_1SchemaVersionNumber = (input: SchemaVersionNumber, context: __SerdeContext): any => {
  return {
    ...(input.LatestVersion != null && { LatestVersion: input.LatestVersion }),
    ...(input.VersionNumber != null && { VersionNumber: input.VersionNumber }),
  };
};

const serializeAws_json1_1SearchPropertyPredicates = (input: PropertyPredicate[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1PropertyPredicate(entry, context);
    });
};

const serializeAws_json1_1SearchTablesRequest = (input: SearchTablesRequest, context: __SerdeContext): any => {
  return {
    ...(input.CatalogId != null && { CatalogId: input.CatalogId }),
    ...(input.Filters != null && { Filters: serializeAws_json1_1SearchPropertyPredicates(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ResourceShareType != null && { ResourceShareType: input.ResourceShareType }),
    ...(input.SearchText != null && { SearchText: input.SearchText }),
    ...(input.SortCriteria != null && { SortCriteria: serializeAws_json1_1SortCriteria(input.SortCriteria, context) }),
  };
};

const serializeAws_json1_1SecurityGroupIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1Segment = (input: Segment, context: __SerdeContext): any => {
  return {
    ...(input.SegmentNumber != null && { SegmentNumber: input.SegmentNumber }),
    ...(input.TotalSegments != null && { TotalSegments: input.TotalSegments }),
  };
};

const serializeAws_json1_1SelectFields = (input: SelectFields, context: __SerdeContext): any => {
  return {
    ...(input.Inputs != null && { Inputs: serializeAws_json1_1OneInput(input.Inputs, context) }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Paths != null && { Paths: serializeAws_json1_1GlueStudioPathList(input.Paths, context) }),
  };
};

const serializeAws_json1_1SelectFromCollection = (input: SelectFromCollection, context: __SerdeContext): any => {
  return {
    ...(input.Index != null && { Index: input.Index }),
    ...(input.Inputs != null && { Inputs: serializeAws_json1_1OneInput(input.Inputs, context) }),
    ...(input.Name != null && { Name: input.Name }),
  };
};

const serializeAws_json1_1SerDeInfo = (input: SerDeInfo, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Parameters != null && { Parameters: serializeAws_json1_1ParametersMap(input.Parameters, context) }),
    ...(input.SerializationLibrary != null && { SerializationLibrary: input.SerializationLibrary }),
  };
};

const serializeAws_json1_1SessionCommand = (input: SessionCommand, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.PythonVersion != null && { PythonVersion: input.PythonVersion }),
  };
};

const serializeAws_json1_1SkewedInfo = (input: SkewedInfo, context: __SerdeContext): any => {
  return {
    ...(input.SkewedColumnNames != null && {
      SkewedColumnNames: serializeAws_json1_1NameStringList(input.SkewedColumnNames, context),
    }),
    ...(input.SkewedColumnValueLocationMaps != null && {
      SkewedColumnValueLocationMaps: serializeAws_json1_1LocationMap(input.SkewedColumnValueLocationMaps, context),
    }),
    ...(input.SkewedColumnValues != null && {
      SkewedColumnValues: serializeAws_json1_1ColumnValueStringList(input.SkewedColumnValues, context),
    }),
  };
};

const serializeAws_json1_1SortCriteria = (input: SortCriterion[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1SortCriterion(entry, context);
    });
};

const serializeAws_json1_1SortCriterion = (input: SortCriterion, context: __SerdeContext): any => {
  return {
    ...(input.FieldName != null && { FieldName: input.FieldName }),
    ...(input.Sort != null && { Sort: input.Sort }),
  };
};

const serializeAws_json1_1SparkConnectorSource = (input: SparkConnectorSource, context: __SerdeContext): any => {
  return {
    ...(input.AdditionalOptions != null && {
      AdditionalOptions: serializeAws_json1_1AdditionalOptions(input.AdditionalOptions, context),
    }),
    ...(input.ConnectionName != null && { ConnectionName: input.ConnectionName }),
    ...(input.ConnectionType != null && { ConnectionType: input.ConnectionType }),
    ...(input.ConnectorName != null && { ConnectorName: input.ConnectorName }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.OutputSchemas != null && {
      OutputSchemas: serializeAws_json1_1GlueSchemas(input.OutputSchemas, context),
    }),
  };
};

const serializeAws_json1_1SparkConnectorTarget = (input: SparkConnectorTarget, context: __SerdeContext): any => {
  return {
    ...(input.AdditionalOptions != null && {
      AdditionalOptions: serializeAws_json1_1AdditionalOptions(input.AdditionalOptions, context),
    }),
    ...(input.ConnectionName != null && { ConnectionName: input.ConnectionName }),
    ...(input.ConnectionType != null && { ConnectionType: input.ConnectionType }),
    ...(input.ConnectorName != null && { ConnectorName: input.ConnectorName }),
    ...(input.Inputs != null && { Inputs: serializeAws_json1_1OneInput(input.Inputs, context) }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.OutputSchemas != null && {
      OutputSchemas: serializeAws_json1_1GlueSchemas(input.OutputSchemas, context),
    }),
  };
};

const serializeAws_json1_1SparkSQL = (input: SparkSQL, context: __SerdeContext): any => {
  return {
    ...(input.Inputs != null && { Inputs: serializeAws_json1_1ManyInputs(input.Inputs, context) }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.OutputSchemas != null && {
      OutputSchemas: serializeAws_json1_1GlueSchemas(input.OutputSchemas, context),
    }),
    ...(input.SqlAliases != null && { SqlAliases: serializeAws_json1_1SqlAliases(input.SqlAliases, context) }),
    ...(input.SqlQuery != null && { SqlQuery: input.SqlQuery }),
  };
};

const serializeAws_json1_1Spigot = (input: Spigot, context: __SerdeContext): any => {
  return {
    ...(input.Inputs != null && { Inputs: serializeAws_json1_1OneInput(input.Inputs, context) }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Path != null && { Path: input.Path }),
    ...(input.Prob != null && { Prob: __serializeFloat(input.Prob) }),
    ...(input.Topk != null && { Topk: input.Topk }),
  };
};

const serializeAws_json1_1SplitFields = (input: SplitFields, context: __SerdeContext): any => {
  return {
    ...(input.Inputs != null && { Inputs: serializeAws_json1_1OneInput(input.Inputs, context) }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Paths != null && { Paths: serializeAws_json1_1GlueStudioPathList(input.Paths, context) }),
  };
};

const serializeAws_json1_1SqlAlias = (input: SqlAlias, context: __SerdeContext): any => {
  return {
    ...(input.Alias != null && { Alias: input.Alias }),
    ...(input.From != null && { From: input.From }),
  };
};

const serializeAws_json1_1SqlAliases = (input: SqlAlias[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1SqlAlias(entry, context);
    });
};

const serializeAws_json1_1StartBlueprintRunRequest = (
  input: StartBlueprintRunRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.BlueprintName != null && { BlueprintName: input.BlueprintName }),
    ...(input.Parameters != null && { Parameters: input.Parameters }),
    ...(input.RoleArn != null && { RoleArn: input.RoleArn }),
  };
};

const serializeAws_json1_1StartCrawlerRequest = (input: StartCrawlerRequest, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
  };
};

const serializeAws_json1_1StartCrawlerScheduleRequest = (
  input: StartCrawlerScheduleRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CrawlerName != null && { CrawlerName: input.CrawlerName }),
  };
};

const serializeAws_json1_1StartExportLabelsTaskRunRequest = (
  input: StartExportLabelsTaskRunRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.OutputS3Path != null && { OutputS3Path: input.OutputS3Path }),
    ...(input.TransformId != null && { TransformId: input.TransformId }),
  };
};

const serializeAws_json1_1StartImportLabelsTaskRunRequest = (
  input: StartImportLabelsTaskRunRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.InputS3Path != null && { InputS3Path: input.InputS3Path }),
    ...(input.ReplaceAllLabels != null && { ReplaceAllLabels: input.ReplaceAllLabels }),
    ...(input.TransformId != null && { TransformId: input.TransformId }),
  };
};

const serializeAws_json1_1StartJobRunRequest = (input: StartJobRunRequest, context: __SerdeContext): any => {
  return {
    ...(input.AllocatedCapacity != null && { AllocatedCapacity: input.AllocatedCapacity }),
    ...(input.Arguments != null && { Arguments: serializeAws_json1_1GenericMap(input.Arguments, context) }),
    ...(input.JobName != null && { JobName: input.JobName }),
    ...(input.JobRunId != null && { JobRunId: input.JobRunId }),
    ...(input.MaxCapacity != null && { MaxCapacity: __serializeFloat(input.MaxCapacity) }),
    ...(input.NotificationProperty != null && {
      NotificationProperty: serializeAws_json1_1NotificationProperty(input.NotificationProperty, context),
    }),
    ...(input.NumberOfWorkers != null && { NumberOfWorkers: input.NumberOfWorkers }),
    ...(input.SecurityConfiguration != null && { SecurityConfiguration: input.SecurityConfiguration }),
    ...(input.Timeout != null && { Timeout: input.Timeout }),
    ...(input.WorkerType != null && { WorkerType: input.WorkerType }),
  };
};

const serializeAws_json1_1StartMLEvaluationTaskRunRequest = (
  input: StartMLEvaluationTaskRunRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.TransformId != null && { TransformId: input.TransformId }),
  };
};

const serializeAws_json1_1StartMLLabelingSetGenerationTaskRunRequest = (
  input: StartMLLabelingSetGenerationTaskRunRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.OutputS3Path != null && { OutputS3Path: input.OutputS3Path }),
    ...(input.TransformId != null && { TransformId: input.TransformId }),
  };
};

const serializeAws_json1_1StartTriggerRequest = (input: StartTriggerRequest, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
  };
};

const serializeAws_json1_1StartWorkflowRunRequest = (input: StartWorkflowRunRequest, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.RunProperties != null && {
      RunProperties: serializeAws_json1_1WorkflowRunProperties(input.RunProperties, context),
    }),
  };
};

const serializeAws_json1_1StopCrawlerRequest = (input: StopCrawlerRequest, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
  };
};

const serializeAws_json1_1StopCrawlerScheduleRequest = (
  input: StopCrawlerScheduleRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CrawlerName != null && { CrawlerName: input.CrawlerName }),
  };
};

const serializeAws_json1_1StopSessionRequest = (input: StopSessionRequest, context: __SerdeContext): any => {
  return {
    ...(input.Id != null && { Id: input.Id }),
    ...(input.RequestOrigin != null && { RequestOrigin: input.RequestOrigin }),
  };
};

const serializeAws_json1_1StopTriggerRequest = (input: StopTriggerRequest, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
  };
};

const serializeAws_json1_1StopWorkflowRunRequest = (input: StopWorkflowRunRequest, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.RunId != null && { RunId: input.RunId }),
  };
};

const serializeAws_json1_1StorageDescriptor = (input: StorageDescriptor, context: __SerdeContext): any => {
  return {
    ...(input.AdditionalLocations != null && {
      AdditionalLocations: serializeAws_json1_1LocationStringList(input.AdditionalLocations, context),
    }),
    ...(input.BucketColumns != null && {
      BucketColumns: serializeAws_json1_1NameStringList(input.BucketColumns, context),
    }),
    ...(input.Columns != null && { Columns: serializeAws_json1_1ColumnList(input.Columns, context) }),
    ...(input.Compressed != null && { Compressed: input.Compressed }),
    ...(input.InputFormat != null && { InputFormat: input.InputFormat }),
    ...(input.Location != null && { Location: input.Location }),
    ...(input.NumberOfBuckets != null && { NumberOfBuckets: input.NumberOfBuckets }),
    ...(input.OutputFormat != null && { OutputFormat: input.OutputFormat }),
    ...(input.Parameters != null && { Parameters: serializeAws_json1_1ParametersMap(input.Parameters, context) }),
    ...(input.SchemaReference != null && {
      SchemaReference: serializeAws_json1_1SchemaReference(input.SchemaReference, context),
    }),
    ...(input.SerdeInfo != null && { SerdeInfo: serializeAws_json1_1SerDeInfo(input.SerdeInfo, context) }),
    ...(input.SkewedInfo != null && { SkewedInfo: serializeAws_json1_1SkewedInfo(input.SkewedInfo, context) }),
    ...(input.SortColumns != null && { SortColumns: serializeAws_json1_1OrderList(input.SortColumns, context) }),
    ...(input.StoredAsSubDirectories != null && { StoredAsSubDirectories: input.StoredAsSubDirectories }),
  };
};

const serializeAws_json1_1StreamingDataPreviewOptions = (
  input: StreamingDataPreviewOptions,
  context: __SerdeContext
): any => {
  return {
    ...(input.PollingTime != null && { PollingTime: input.PollingTime }),
    ...(input.RecordPollingLimit != null && { RecordPollingLimit: input.RecordPollingLimit }),
  };
};

const serializeAws_json1_1StringColumnStatisticsData = (
  input: StringColumnStatisticsData,
  context: __SerdeContext
): any => {
  return {
    ...(input.AverageLength != null && { AverageLength: __serializeFloat(input.AverageLength) }),
    ...(input.MaximumLength != null && { MaximumLength: input.MaximumLength }),
    ...(input.NumberOfDistinctValues != null && { NumberOfDistinctValues: input.NumberOfDistinctValues }),
    ...(input.NumberOfNulls != null && { NumberOfNulls: input.NumberOfNulls }),
  };
};

const serializeAws_json1_1StringList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1TableIdentifier = (input: TableIdentifier, context: __SerdeContext): any => {
  return {
    ...(input.CatalogId != null && { CatalogId: input.CatalogId }),
    ...(input.DatabaseName != null && { DatabaseName: input.DatabaseName }),
    ...(input.Name != null && { Name: input.Name }),
  };
};

const serializeAws_json1_1TableInput = (input: TableInput, context: __SerdeContext): any => {
  return {
    ...(input.Description != null && { Description: input.Description }),
    ...(input.LastAccessTime != null && { LastAccessTime: Math.round(input.LastAccessTime.getTime() / 1000) }),
    ...(input.LastAnalyzedTime != null && { LastAnalyzedTime: Math.round(input.LastAnalyzedTime.getTime() / 1000) }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Owner != null && { Owner: input.Owner }),
    ...(input.Parameters != null && { Parameters: serializeAws_json1_1ParametersMap(input.Parameters, context) }),
    ...(input.PartitionKeys != null && { PartitionKeys: serializeAws_json1_1ColumnList(input.PartitionKeys, context) }),
    ...(input.Retention != null && { Retention: input.Retention }),
    ...(input.StorageDescriptor != null && {
      StorageDescriptor: serializeAws_json1_1StorageDescriptor(input.StorageDescriptor, context),
    }),
    ...(input.TableType != null && { TableType: input.TableType }),
    ...(input.TargetTable != null && { TargetTable: serializeAws_json1_1TableIdentifier(input.TargetTable, context) }),
    ...(input.ViewExpandedText != null && { ViewExpandedText: input.ViewExpandedText }),
    ...(input.ViewOriginalText != null && { ViewOriginalText: input.ViewOriginalText }),
  };
};

const serializeAws_json1_1TagKeysList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1TagResourceRequest = (input: TagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
    ...(input.TagsToAdd != null && { TagsToAdd: serializeAws_json1_1TagsMap(input.TagsToAdd, context) }),
  };
};

const serializeAws_json1_1TagsMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const serializeAws_json1_1TaskRunFilterCriteria = (input: TaskRunFilterCriteria, context: __SerdeContext): any => {
  return {
    ...(input.StartedAfter != null && { StartedAfter: Math.round(input.StartedAfter.getTime() / 1000) }),
    ...(input.StartedBefore != null && { StartedBefore: Math.round(input.StartedBefore.getTime() / 1000) }),
    ...(input.Status != null && { Status: input.Status }),
    ...(input.TaskRunType != null && { TaskRunType: input.TaskRunType }),
  };
};

const serializeAws_json1_1TaskRunSortCriteria = (input: TaskRunSortCriteria, context: __SerdeContext): any => {
  return {
    ...(input.Column != null && { Column: input.Column }),
    ...(input.SortDirection != null && { SortDirection: input.SortDirection }),
  };
};

const serializeAws_json1_1TransformEncryption = (input: TransformEncryption, context: __SerdeContext): any => {
  return {
    ...(input.MlUserDataEncryption != null && {
      MlUserDataEncryption: serializeAws_json1_1MLUserDataEncryption(input.MlUserDataEncryption, context),
    }),
    ...(input.TaskRunSecurityConfigurationName != null && {
      TaskRunSecurityConfigurationName: input.TaskRunSecurityConfigurationName,
    }),
  };
};

const serializeAws_json1_1TransformFilterCriteria = (input: TransformFilterCriteria, context: __SerdeContext): any => {
  return {
    ...(input.CreatedAfter != null && { CreatedAfter: Math.round(input.CreatedAfter.getTime() / 1000) }),
    ...(input.CreatedBefore != null && { CreatedBefore: Math.round(input.CreatedBefore.getTime() / 1000) }),
    ...(input.GlueVersion != null && { GlueVersion: input.GlueVersion }),
    ...(input.LastModifiedAfter != null && { LastModifiedAfter: Math.round(input.LastModifiedAfter.getTime() / 1000) }),
    ...(input.LastModifiedBefore != null && {
      LastModifiedBefore: Math.round(input.LastModifiedBefore.getTime() / 1000),
    }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Schema != null && { Schema: serializeAws_json1_1TransformSchema(input.Schema, context) }),
    ...(input.Status != null && { Status: input.Status }),
    ...(input.TransformType != null && { TransformType: input.TransformType }),
  };
};

const serializeAws_json1_1TransformParameters = (input: TransformParameters, context: __SerdeContext): any => {
  return {
    ...(input.FindMatchesParameters != null && {
      FindMatchesParameters: serializeAws_json1_1FindMatchesParameters(input.FindMatchesParameters, context),
    }),
    ...(input.TransformType != null && { TransformType: input.TransformType }),
  };
};

const serializeAws_json1_1TransformSchema = (input: SchemaColumn[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1SchemaColumn(entry, context);
    });
};

const serializeAws_json1_1TransformSortCriteria = (input: TransformSortCriteria, context: __SerdeContext): any => {
  return {
    ...(input.Column != null && { Column: input.Column }),
    ...(input.SortDirection != null && { SortDirection: input.SortDirection }),
  };
};

const serializeAws_json1_1TriggerNameList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1TriggerUpdate = (input: TriggerUpdate, context: __SerdeContext): any => {
  return {
    ...(input.Actions != null && { Actions: serializeAws_json1_1ActionList(input.Actions, context) }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.EventBatchingCondition != null && {
      EventBatchingCondition: serializeAws_json1_1EventBatchingCondition(input.EventBatchingCondition, context),
    }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Predicate != null && { Predicate: serializeAws_json1_1Predicate(input.Predicate, context) }),
    ...(input.Schedule != null && { Schedule: input.Schedule }),
  };
};

const serializeAws_json1_1TwoInputs = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1Union = (input: Union, context: __SerdeContext): any => {
  return {
    ...(input.Inputs != null && { Inputs: serializeAws_json1_1TwoInputs(input.Inputs, context) }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.UnionType != null && { UnionType: input.UnionType }),
  };
};

const serializeAws_json1_1UntagResourceRequest = (input: UntagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
    ...(input.TagsToRemove != null && { TagsToRemove: serializeAws_json1_1TagKeysList(input.TagsToRemove, context) }),
  };
};

const serializeAws_json1_1UpdateBlueprintRequest = (input: UpdateBlueprintRequest, context: __SerdeContext): any => {
  return {
    ...(input.BlueprintLocation != null && { BlueprintLocation: input.BlueprintLocation }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Name != null && { Name: input.Name }),
  };
};

const serializeAws_json1_1UpdateClassifierRequest = (input: UpdateClassifierRequest, context: __SerdeContext): any => {
  return {
    ...(input.CsvClassifier != null && {
      CsvClassifier: serializeAws_json1_1UpdateCsvClassifierRequest(input.CsvClassifier, context),
    }),
    ...(input.GrokClassifier != null && {
      GrokClassifier: serializeAws_json1_1UpdateGrokClassifierRequest(input.GrokClassifier, context),
    }),
    ...(input.JsonClassifier != null && {
      JsonClassifier: serializeAws_json1_1UpdateJsonClassifierRequest(input.JsonClassifier, context),
    }),
    ...(input.XMLClassifier != null && {
      XMLClassifier: serializeAws_json1_1UpdateXMLClassifierRequest(input.XMLClassifier, context),
    }),
  };
};

const serializeAws_json1_1UpdateColumnStatisticsForPartitionRequest = (
  input: UpdateColumnStatisticsForPartitionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CatalogId != null && { CatalogId: input.CatalogId }),
    ...(input.ColumnStatisticsList != null && {
      ColumnStatisticsList: serializeAws_json1_1UpdateColumnStatisticsList(input.ColumnStatisticsList, context),
    }),
    ...(input.DatabaseName != null && { DatabaseName: input.DatabaseName }),
    ...(input.PartitionValues != null && {
      PartitionValues: serializeAws_json1_1ValueStringList(input.PartitionValues, context),
    }),
    ...(input.TableName != null && { TableName: input.TableName }),
  };
};

const serializeAws_json1_1UpdateColumnStatisticsForTableRequest = (
  input: UpdateColumnStatisticsForTableRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CatalogId != null && { CatalogId: input.CatalogId }),
    ...(input.ColumnStatisticsList != null && {
      ColumnStatisticsList: serializeAws_json1_1UpdateColumnStatisticsList(input.ColumnStatisticsList, context),
    }),
    ...(input.DatabaseName != null && { DatabaseName: input.DatabaseName }),
    ...(input.TableName != null && { TableName: input.TableName }),
  };
};

const serializeAws_json1_1UpdateColumnStatisticsList = (input: ColumnStatistics[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1ColumnStatistics(entry, context);
    });
};

const serializeAws_json1_1UpdateConnectionRequest = (input: UpdateConnectionRequest, context: __SerdeContext): any => {
  return {
    ...(input.CatalogId != null && { CatalogId: input.CatalogId }),
    ...(input.ConnectionInput != null && {
      ConnectionInput: serializeAws_json1_1ConnectionInput(input.ConnectionInput, context),
    }),
    ...(input.Name != null && { Name: input.Name }),
  };
};

const serializeAws_json1_1UpdateCrawlerRequest = (input: UpdateCrawlerRequest, context: __SerdeContext): any => {
  return {
    ...(input.Classifiers != null && {
      Classifiers: serializeAws_json1_1ClassifierNameList(input.Classifiers, context),
    }),
    ...(input.Configuration != null && { Configuration: input.Configuration }),
    ...(input.CrawlerSecurityConfiguration != null && {
      CrawlerSecurityConfiguration: input.CrawlerSecurityConfiguration,
    }),
    ...(input.DatabaseName != null && { DatabaseName: input.DatabaseName }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.LakeFormationConfiguration != null && {
      LakeFormationConfiguration: serializeAws_json1_1LakeFormationConfiguration(
        input.LakeFormationConfiguration,
        context
      ),
    }),
    ...(input.LineageConfiguration != null && {
      LineageConfiguration: serializeAws_json1_1LineageConfiguration(input.LineageConfiguration, context),
    }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.RecrawlPolicy != null && {
      RecrawlPolicy: serializeAws_json1_1RecrawlPolicy(input.RecrawlPolicy, context),
    }),
    ...(input.Role != null && { Role: input.Role }),
    ...(input.Schedule != null && { Schedule: input.Schedule }),
    ...(input.SchemaChangePolicy != null && {
      SchemaChangePolicy: serializeAws_json1_1SchemaChangePolicy(input.SchemaChangePolicy, context),
    }),
    ...(input.TablePrefix != null && { TablePrefix: input.TablePrefix }),
    ...(input.Targets != null && { Targets: serializeAws_json1_1CrawlerTargets(input.Targets, context) }),
  };
};

const serializeAws_json1_1UpdateCrawlerScheduleRequest = (
  input: UpdateCrawlerScheduleRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CrawlerName != null && { CrawlerName: input.CrawlerName }),
    ...(input.Schedule != null && { Schedule: input.Schedule }),
  };
};

const serializeAws_json1_1UpdateCsvClassifierRequest = (
  input: UpdateCsvClassifierRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AllowSingleColumn != null && { AllowSingleColumn: input.AllowSingleColumn }),
    ...(input.ContainsHeader != null && { ContainsHeader: input.ContainsHeader }),
    ...(input.Delimiter != null && { Delimiter: input.Delimiter }),
    ...(input.DisableValueTrimming != null && { DisableValueTrimming: input.DisableValueTrimming }),
    ...(input.Header != null && { Header: serializeAws_json1_1CsvHeader(input.Header, context) }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.QuoteSymbol != null && { QuoteSymbol: input.QuoteSymbol }),
  };
};

const serializeAws_json1_1UpdateDatabaseRequest = (input: UpdateDatabaseRequest, context: __SerdeContext): any => {
  return {
    ...(input.CatalogId != null && { CatalogId: input.CatalogId }),
    ...(input.DatabaseInput != null && {
      DatabaseInput: serializeAws_json1_1DatabaseInput(input.DatabaseInput, context),
    }),
    ...(input.Name != null && { Name: input.Name }),
  };
};

const serializeAws_json1_1UpdateDevEndpointRequest = (
  input: UpdateDevEndpointRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AddArguments != null && { AddArguments: serializeAws_json1_1MapValue(input.AddArguments, context) }),
    ...(input.AddPublicKeys != null && {
      AddPublicKeys: serializeAws_json1_1PublicKeysList(input.AddPublicKeys, context),
    }),
    ...(input.CustomLibraries != null && {
      CustomLibraries: serializeAws_json1_1DevEndpointCustomLibraries(input.CustomLibraries, context),
    }),
    ...(input.DeleteArguments != null && {
      DeleteArguments: serializeAws_json1_1StringList(input.DeleteArguments, context),
    }),
    ...(input.DeletePublicKeys != null && {
      DeletePublicKeys: serializeAws_json1_1PublicKeysList(input.DeletePublicKeys, context),
    }),
    ...(input.EndpointName != null && { EndpointName: input.EndpointName }),
    ...(input.PublicKey != null && { PublicKey: input.PublicKey }),
    ...(input.UpdateEtlLibraries != null && { UpdateEtlLibraries: input.UpdateEtlLibraries }),
  };
};

const serializeAws_json1_1UpdateGrokClassifierRequest = (
  input: UpdateGrokClassifierRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Classification != null && { Classification: input.Classification }),
    ...(input.CustomPatterns != null && { CustomPatterns: input.CustomPatterns }),
    ...(input.GrokPattern != null && { GrokPattern: input.GrokPattern }),
    ...(input.Name != null && { Name: input.Name }),
  };
};

const serializeAws_json1_1UpdateJobRequest = (input: UpdateJobRequest, context: __SerdeContext): any => {
  return {
    ...(input.JobName != null && { JobName: input.JobName }),
    ...(input.JobUpdate != null && { JobUpdate: serializeAws_json1_1JobUpdate(input.JobUpdate, context) }),
  };
};

const serializeAws_json1_1UpdateJsonClassifierRequest = (
  input: UpdateJsonClassifierRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.JsonPath != null && { JsonPath: input.JsonPath }),
    ...(input.Name != null && { Name: input.Name }),
  };
};

const serializeAws_json1_1UpdateMLTransformRequest = (
  input: UpdateMLTransformRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Description != null && { Description: input.Description }),
    ...(input.GlueVersion != null && { GlueVersion: input.GlueVersion }),
    ...(input.MaxCapacity != null && { MaxCapacity: __serializeFloat(input.MaxCapacity) }),
    ...(input.MaxRetries != null && { MaxRetries: input.MaxRetries }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.NumberOfWorkers != null && { NumberOfWorkers: input.NumberOfWorkers }),
    ...(input.Parameters != null && { Parameters: serializeAws_json1_1TransformParameters(input.Parameters, context) }),
    ...(input.Role != null && { Role: input.Role }),
    ...(input.Timeout != null && { Timeout: input.Timeout }),
    ...(input.TransformId != null && { TransformId: input.TransformId }),
    ...(input.WorkerType != null && { WorkerType: input.WorkerType }),
  };
};

const serializeAws_json1_1UpdatePartitionRequest = (input: UpdatePartitionRequest, context: __SerdeContext): any => {
  return {
    ...(input.CatalogId != null && { CatalogId: input.CatalogId }),
    ...(input.DatabaseName != null && { DatabaseName: input.DatabaseName }),
    ...(input.PartitionInput != null && {
      PartitionInput: serializeAws_json1_1PartitionInput(input.PartitionInput, context),
    }),
    ...(input.PartitionValueList != null && {
      PartitionValueList: serializeAws_json1_1BoundedPartitionValueList(input.PartitionValueList, context),
    }),
    ...(input.TableName != null && { TableName: input.TableName }),
  };
};

const serializeAws_json1_1UpdateRegistryInput = (input: UpdateRegistryInput, context: __SerdeContext): any => {
  return {
    ...(input.Description != null && { Description: input.Description }),
    ...(input.RegistryId != null && { RegistryId: serializeAws_json1_1RegistryId(input.RegistryId, context) }),
  };
};

const serializeAws_json1_1UpdateSchemaInput = (input: UpdateSchemaInput, context: __SerdeContext): any => {
  return {
    ...(input.Compatibility != null && { Compatibility: input.Compatibility }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.SchemaId != null && { SchemaId: serializeAws_json1_1SchemaId(input.SchemaId, context) }),
    ...(input.SchemaVersionNumber != null && {
      SchemaVersionNumber: serializeAws_json1_1SchemaVersionNumber(input.SchemaVersionNumber, context),
    }),
  };
};

const serializeAws_json1_1UpdateTableRequest = (input: UpdateTableRequest, context: __SerdeContext): any => {
  return {
    ...(input.CatalogId != null && { CatalogId: input.CatalogId }),
    ...(input.DatabaseName != null && { DatabaseName: input.DatabaseName }),
    ...(input.SkipArchive != null && { SkipArchive: input.SkipArchive }),
    ...(input.TableInput != null && { TableInput: serializeAws_json1_1TableInput(input.TableInput, context) }),
    ...(input.TransactionId != null && { TransactionId: input.TransactionId }),
    ...(input.VersionId != null && { VersionId: input.VersionId }),
  };
};

const serializeAws_json1_1UpdateTriggerRequest = (input: UpdateTriggerRequest, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.TriggerUpdate != null && {
      TriggerUpdate: serializeAws_json1_1TriggerUpdate(input.TriggerUpdate, context),
    }),
  };
};

const serializeAws_json1_1UpdateUserDefinedFunctionRequest = (
  input: UpdateUserDefinedFunctionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CatalogId != null && { CatalogId: input.CatalogId }),
    ...(input.DatabaseName != null && { DatabaseName: input.DatabaseName }),
    ...(input.FunctionInput != null && {
      FunctionInput: serializeAws_json1_1UserDefinedFunctionInput(input.FunctionInput, context),
    }),
    ...(input.FunctionName != null && { FunctionName: input.FunctionName }),
  };
};

const serializeAws_json1_1UpdateWorkflowRequest = (input: UpdateWorkflowRequest, context: __SerdeContext): any => {
  return {
    ...(input.DefaultRunProperties != null && {
      DefaultRunProperties: serializeAws_json1_1WorkflowRunProperties(input.DefaultRunProperties, context),
    }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.MaxConcurrentRuns != null && { MaxConcurrentRuns: input.MaxConcurrentRuns }),
    ...(input.Name != null && { Name: input.Name }),
  };
};

const serializeAws_json1_1UpdateXMLClassifierRequest = (
  input: UpdateXMLClassifierRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Classification != null && { Classification: input.Classification }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.RowTag != null && { RowTag: input.RowTag }),
  };
};

const serializeAws_json1_1UpsertRedshiftTargetOptions = (
  input: UpsertRedshiftTargetOptions,
  context: __SerdeContext
): any => {
  return {
    ...(input.ConnectionName != null && { ConnectionName: input.ConnectionName }),
    ...(input.TableLocation != null && { TableLocation: input.TableLocation }),
    ...(input.UpsertKeys != null && {
      UpsertKeys: serializeAws_json1_1EnclosedInStringPropertiesMinOne(input.UpsertKeys, context),
    }),
  };
};

const serializeAws_json1_1UserDefinedFunctionInput = (
  input: UserDefinedFunctionInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.ClassName != null && { ClassName: input.ClassName }),
    ...(input.FunctionName != null && { FunctionName: input.FunctionName }),
    ...(input.OwnerName != null && { OwnerName: input.OwnerName }),
    ...(input.OwnerType != null && { OwnerType: input.OwnerType }),
    ...(input.ResourceUris != null && {
      ResourceUris: serializeAws_json1_1ResourceUriList(input.ResourceUris, context),
    }),
  };
};

const serializeAws_json1_1ValueStringList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1WorkflowNames = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1WorkflowRunProperties = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const deserializeAws_json1_1AccessDeniedException = (output: any, context: __SerdeContext): AccessDeniedException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1Action = (output: any, context: __SerdeContext): Action => {
  return {
    Arguments: output.Arguments != null ? deserializeAws_json1_1GenericMap(output.Arguments, context) : undefined,
    CrawlerName: __expectString(output.CrawlerName),
    JobName: __expectString(output.JobName),
    NotificationProperty:
      output.NotificationProperty != null
        ? deserializeAws_json1_1NotificationProperty(output.NotificationProperty, context)
        : undefined,
    SecurityConfiguration: __expectString(output.SecurityConfiguration),
    Timeout: __expectInt32(output.Timeout),
  } as any;
};

const deserializeAws_json1_1ActionList = (output: any, context: __SerdeContext): Action[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Action(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1AdditionalOptions = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: __expectString(value) as any,
    };
  }, {});
};

const deserializeAws_json1_1Aggregate = (output: any, context: __SerdeContext): Aggregate => {
  return {
    Aggs: output.Aggs != null ? deserializeAws_json1_1AggregateOperations(output.Aggs, context) : undefined,
    Groups: output.Groups != null ? deserializeAws_json1_1GlueStudioPathList(output.Groups, context) : undefined,
    Inputs: output.Inputs != null ? deserializeAws_json1_1OneInput(output.Inputs, context) : undefined,
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_json1_1AggregateOperation = (output: any, context: __SerdeContext): AggregateOperation => {
  return {
    AggFunc: __expectString(output.AggFunc),
    Column:
      output.Column != null ? deserializeAws_json1_1EnclosedInStringProperties(output.Column, context) : undefined,
  } as any;
};

const deserializeAws_json1_1AggregateOperations = (output: any, context: __SerdeContext): AggregateOperation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1AggregateOperation(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1AlreadyExistsException = (output: any, context: __SerdeContext): AlreadyExistsException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1ApplyMapping = (output: any, context: __SerdeContext): ApplyMapping => {
  return {
    Inputs: output.Inputs != null ? deserializeAws_json1_1OneInput(output.Inputs, context) : undefined,
    Mapping: output.Mapping != null ? deserializeAws_json1_1Mappings(output.Mapping, context) : undefined,
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_json1_1AthenaConnectorSource = (output: any, context: __SerdeContext): AthenaConnectorSource => {
  return {
    ConnectionName: __expectString(output.ConnectionName),
    ConnectionTable: __expectString(output.ConnectionTable),
    ConnectionType: __expectString(output.ConnectionType),
    ConnectorName: __expectString(output.ConnectorName),
    Name: __expectString(output.Name),
    OutputSchemas:
      output.OutputSchemas != null ? deserializeAws_json1_1GlueSchemas(output.OutputSchemas, context) : undefined,
    SchemaName: __expectString(output.SchemaName),
  } as any;
};

const deserializeAws_json1_1BackfillError = (output: any, context: __SerdeContext): BackfillError => {
  return {
    Code: __expectString(output.Code),
    Partitions:
      output.Partitions != null
        ? deserializeAws_json1_1BackfillErroredPartitionsList(output.Partitions, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1BackfillErroredPartitionsList = (
  output: any,
  context: __SerdeContext
): PartitionValueList[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1PartitionValueList(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1BackfillErrors = (output: any, context: __SerdeContext): BackfillError[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1BackfillError(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1BasicCatalogTarget = (output: any, context: __SerdeContext): BasicCatalogTarget => {
  return {
    Database: __expectString(output.Database),
    Inputs: output.Inputs != null ? deserializeAws_json1_1OneInput(output.Inputs, context) : undefined,
    Name: __expectString(output.Name),
    Table: __expectString(output.Table),
  } as any;
};

const deserializeAws_json1_1BatchCreatePartitionResponse = (
  output: any,
  context: __SerdeContext
): BatchCreatePartitionResponse => {
  return {
    Errors: output.Errors != null ? deserializeAws_json1_1PartitionErrors(output.Errors, context) : undefined,
  } as any;
};

const deserializeAws_json1_1BatchDeleteConnectionResponse = (
  output: any,
  context: __SerdeContext
): BatchDeleteConnectionResponse => {
  return {
    Errors: output.Errors != null ? deserializeAws_json1_1ErrorByName(output.Errors, context) : undefined,
    Succeeded: output.Succeeded != null ? deserializeAws_json1_1NameStringList(output.Succeeded, context) : undefined,
  } as any;
};

const deserializeAws_json1_1BatchDeletePartitionResponse = (
  output: any,
  context: __SerdeContext
): BatchDeletePartitionResponse => {
  return {
    Errors: output.Errors != null ? deserializeAws_json1_1PartitionErrors(output.Errors, context) : undefined,
  } as any;
};

const deserializeAws_json1_1BatchDeleteTableResponse = (
  output: any,
  context: __SerdeContext
): BatchDeleteTableResponse => {
  return {
    Errors: output.Errors != null ? deserializeAws_json1_1TableErrors(output.Errors, context) : undefined,
  } as any;
};

const deserializeAws_json1_1BatchDeleteTableVersionResponse = (
  output: any,
  context: __SerdeContext
): BatchDeleteTableVersionResponse => {
  return {
    Errors: output.Errors != null ? deserializeAws_json1_1TableVersionErrors(output.Errors, context) : undefined,
  } as any;
};

const deserializeAws_json1_1BatchGetBlueprintsResponse = (
  output: any,
  context: __SerdeContext
): BatchGetBlueprintsResponse => {
  return {
    Blueprints: output.Blueprints != null ? deserializeAws_json1_1Blueprints(output.Blueprints, context) : undefined,
    MissingBlueprints:
      output.MissingBlueprints != null
        ? deserializeAws_json1_1BlueprintNames(output.MissingBlueprints, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1BatchGetCrawlersResponse = (
  output: any,
  context: __SerdeContext
): BatchGetCrawlersResponse => {
  return {
    Crawlers: output.Crawlers != null ? deserializeAws_json1_1CrawlerList(output.Crawlers, context) : undefined,
    CrawlersNotFound:
      output.CrawlersNotFound != null
        ? deserializeAws_json1_1CrawlerNameList(output.CrawlersNotFound, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1BatchGetCustomEntityTypesResponse = (
  output: any,
  context: __SerdeContext
): BatchGetCustomEntityTypesResponse => {
  return {
    CustomEntityTypes:
      output.CustomEntityTypes != null
        ? deserializeAws_json1_1CustomEntityTypes(output.CustomEntityTypes, context)
        : undefined,
    CustomEntityTypesNotFound:
      output.CustomEntityTypesNotFound != null
        ? deserializeAws_json1_1CustomEntityTypeNames(output.CustomEntityTypesNotFound, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1BatchGetDevEndpointsResponse = (
  output: any,
  context: __SerdeContext
): BatchGetDevEndpointsResponse => {
  return {
    DevEndpoints:
      output.DevEndpoints != null ? deserializeAws_json1_1DevEndpointList(output.DevEndpoints, context) : undefined,
    DevEndpointsNotFound:
      output.DevEndpointsNotFound != null
        ? deserializeAws_json1_1DevEndpointNames(output.DevEndpointsNotFound, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1BatchGetJobsResponse = (output: any, context: __SerdeContext): BatchGetJobsResponse => {
  return {
    Jobs: output.Jobs != null ? deserializeAws_json1_1JobList(output.Jobs, context) : undefined,
    JobsNotFound:
      output.JobsNotFound != null ? deserializeAws_json1_1JobNameList(output.JobsNotFound, context) : undefined,
  } as any;
};

const deserializeAws_json1_1BatchGetPartitionResponse = (
  output: any,
  context: __SerdeContext
): BatchGetPartitionResponse => {
  return {
    Partitions: output.Partitions != null ? deserializeAws_json1_1PartitionList(output.Partitions, context) : undefined,
    UnprocessedKeys:
      output.UnprocessedKeys != null
        ? deserializeAws_json1_1BatchGetPartitionValueList(output.UnprocessedKeys, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1BatchGetPartitionValueList = (
  output: any,
  context: __SerdeContext
): PartitionValueList[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1PartitionValueList(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1BatchGetTriggersResponse = (
  output: any,
  context: __SerdeContext
): BatchGetTriggersResponse => {
  return {
    Triggers: output.Triggers != null ? deserializeAws_json1_1TriggerList(output.Triggers, context) : undefined,
    TriggersNotFound:
      output.TriggersNotFound != null
        ? deserializeAws_json1_1TriggerNameList(output.TriggersNotFound, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1BatchGetWorkflowsResponse = (
  output: any,
  context: __SerdeContext
): BatchGetWorkflowsResponse => {
  return {
    MissingWorkflows:
      output.MissingWorkflows != null
        ? deserializeAws_json1_1WorkflowNames(output.MissingWorkflows, context)
        : undefined,
    Workflows: output.Workflows != null ? deserializeAws_json1_1Workflows(output.Workflows, context) : undefined,
  } as any;
};

const deserializeAws_json1_1BatchStopJobRunError = (output: any, context: __SerdeContext): BatchStopJobRunError => {
  return {
    ErrorDetail:
      output.ErrorDetail != null ? deserializeAws_json1_1ErrorDetail(output.ErrorDetail, context) : undefined,
    JobName: __expectString(output.JobName),
    JobRunId: __expectString(output.JobRunId),
  } as any;
};

const deserializeAws_json1_1BatchStopJobRunErrorList = (
  output: any,
  context: __SerdeContext
): BatchStopJobRunError[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1BatchStopJobRunError(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1BatchStopJobRunResponse = (
  output: any,
  context: __SerdeContext
): BatchStopJobRunResponse => {
  return {
    Errors: output.Errors != null ? deserializeAws_json1_1BatchStopJobRunErrorList(output.Errors, context) : undefined,
    SuccessfulSubmissions:
      output.SuccessfulSubmissions != null
        ? deserializeAws_json1_1BatchStopJobRunSuccessfulSubmissionList(output.SuccessfulSubmissions, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1BatchStopJobRunSuccessfulSubmission = (
  output: any,
  context: __SerdeContext
): BatchStopJobRunSuccessfulSubmission => {
  return {
    JobName: __expectString(output.JobName),
    JobRunId: __expectString(output.JobRunId),
  } as any;
};

const deserializeAws_json1_1BatchStopJobRunSuccessfulSubmissionList = (
  output: any,
  context: __SerdeContext
): BatchStopJobRunSuccessfulSubmission[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1BatchStopJobRunSuccessfulSubmission(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1BatchUpdatePartitionFailureEntry = (
  output: any,
  context: __SerdeContext
): BatchUpdatePartitionFailureEntry => {
  return {
    ErrorDetail:
      output.ErrorDetail != null ? deserializeAws_json1_1ErrorDetail(output.ErrorDetail, context) : undefined,
    PartitionValueList:
      output.PartitionValueList != null
        ? deserializeAws_json1_1BoundedPartitionValueList(output.PartitionValueList, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1BatchUpdatePartitionFailureList = (
  output: any,
  context: __SerdeContext
): BatchUpdatePartitionFailureEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1BatchUpdatePartitionFailureEntry(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1BatchUpdatePartitionResponse = (
  output: any,
  context: __SerdeContext
): BatchUpdatePartitionResponse => {
  return {
    Errors:
      output.Errors != null ? deserializeAws_json1_1BatchUpdatePartitionFailureList(output.Errors, context) : undefined,
  } as any;
};

const deserializeAws_json1_1BinaryColumnStatisticsData = (
  output: any,
  context: __SerdeContext
): BinaryColumnStatisticsData => {
  return {
    AverageLength: __limitedParseDouble(output.AverageLength),
    MaximumLength: __expectLong(output.MaximumLength),
    NumberOfNulls: __expectLong(output.NumberOfNulls),
  } as any;
};

const deserializeAws_json1_1Blueprint = (output: any, context: __SerdeContext): Blueprint => {
  return {
    BlueprintLocation: __expectString(output.BlueprintLocation),
    BlueprintServiceLocation: __expectString(output.BlueprintServiceLocation),
    CreatedOn:
      output.CreatedOn != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedOn))) : undefined,
    Description: __expectString(output.Description),
    ErrorMessage: __expectString(output.ErrorMessage),
    LastActiveDefinition:
      output.LastActiveDefinition != null
        ? deserializeAws_json1_1LastActiveDefinition(output.LastActiveDefinition, context)
        : undefined,
    LastModifiedOn:
      output.LastModifiedOn != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModifiedOn)))
        : undefined,
    Name: __expectString(output.Name),
    ParameterSpec: __expectString(output.ParameterSpec),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_1BlueprintDetails = (output: any, context: __SerdeContext): BlueprintDetails => {
  return {
    BlueprintName: __expectString(output.BlueprintName),
    RunId: __expectString(output.RunId),
  } as any;
};

const deserializeAws_json1_1BlueprintNames = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_json1_1BlueprintRun = (output: any, context: __SerdeContext): BlueprintRun => {
  return {
    BlueprintName: __expectString(output.BlueprintName),
    CompletedOn:
      output.CompletedOn != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CompletedOn)))
        : undefined,
    ErrorMessage: __expectString(output.ErrorMessage),
    Parameters: __expectString(output.Parameters),
    RoleArn: __expectString(output.RoleArn),
    RollbackErrorMessage: __expectString(output.RollbackErrorMessage),
    RunId: __expectString(output.RunId),
    StartedOn:
      output.StartedOn != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartedOn))) : undefined,
    State: __expectString(output.State),
    WorkflowName: __expectString(output.WorkflowName),
  } as any;
};

const deserializeAws_json1_1BlueprintRuns = (output: any, context: __SerdeContext): BlueprintRun[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1BlueprintRun(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1Blueprints = (output: any, context: __SerdeContext): Blueprint[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Blueprint(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1BooleanColumnStatisticsData = (
  output: any,
  context: __SerdeContext
): BooleanColumnStatisticsData => {
  return {
    NumberOfFalses: __expectLong(output.NumberOfFalses),
    NumberOfNulls: __expectLong(output.NumberOfNulls),
    NumberOfTrues: __expectLong(output.NumberOfTrues),
  } as any;
};

const deserializeAws_json1_1BoundedPartitionValueList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_json1_1CancelMLTaskRunResponse = (
  output: any,
  context: __SerdeContext
): CancelMLTaskRunResponse => {
  return {
    Status: __expectString(output.Status),
    TaskRunId: __expectString(output.TaskRunId),
    TransformId: __expectString(output.TransformId),
  } as any;
};

const deserializeAws_json1_1CancelStatementResponse = (
  output: any,
  context: __SerdeContext
): CancelStatementResponse => {
  return {} as any;
};

const deserializeAws_json1_1CatalogImportStatus = (output: any, context: __SerdeContext): CatalogImportStatus => {
  return {
    ImportCompleted: __expectBoolean(output.ImportCompleted),
    ImportTime:
      output.ImportTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ImportTime))) : undefined,
    ImportedBy: __expectString(output.ImportedBy),
  } as any;
};

const deserializeAws_json1_1CatalogKafkaSource = (output: any, context: __SerdeContext): CatalogKafkaSource => {
  return {
    DataPreviewOptions:
      output.DataPreviewOptions != null
        ? deserializeAws_json1_1StreamingDataPreviewOptions(output.DataPreviewOptions, context)
        : undefined,
    Database: __expectString(output.Database),
    DetectSchema: __expectBoolean(output.DetectSchema),
    Name: __expectString(output.Name),
    StreamingOptions:
      output.StreamingOptions != null
        ? deserializeAws_json1_1KafkaStreamingSourceOptions(output.StreamingOptions, context)
        : undefined,
    Table: __expectString(output.Table),
    WindowSize: __expectInt32(output.WindowSize),
  } as any;
};

const deserializeAws_json1_1CatalogKinesisSource = (output: any, context: __SerdeContext): CatalogKinesisSource => {
  return {
    DataPreviewOptions:
      output.DataPreviewOptions != null
        ? deserializeAws_json1_1StreamingDataPreviewOptions(output.DataPreviewOptions, context)
        : undefined,
    Database: __expectString(output.Database),
    DetectSchema: __expectBoolean(output.DetectSchema),
    Name: __expectString(output.Name),
    StreamingOptions:
      output.StreamingOptions != null
        ? deserializeAws_json1_1KinesisStreamingSourceOptions(output.StreamingOptions, context)
        : undefined,
    Table: __expectString(output.Table),
    WindowSize: __expectInt32(output.WindowSize),
  } as any;
};

const deserializeAws_json1_1CatalogSchemaChangePolicy = (
  output: any,
  context: __SerdeContext
): CatalogSchemaChangePolicy => {
  return {
    EnableUpdateCatalog: __expectBoolean(output.EnableUpdateCatalog),
    UpdateBehavior: __expectString(output.UpdateBehavior),
  } as any;
};

const deserializeAws_json1_1CatalogSource = (output: any, context: __SerdeContext): CatalogSource => {
  return {
    Database: __expectString(output.Database),
    Name: __expectString(output.Name),
    Table: __expectString(output.Table),
  } as any;
};

const deserializeAws_json1_1CatalogTablesList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_json1_1CatalogTarget = (output: any, context: __SerdeContext): CatalogTarget => {
  return {
    ConnectionName: __expectString(output.ConnectionName),
    DatabaseName: __expectString(output.DatabaseName),
    Tables: output.Tables != null ? deserializeAws_json1_1CatalogTablesList(output.Tables, context) : undefined,
  } as any;
};

const deserializeAws_json1_1CatalogTargetList = (output: any, context: __SerdeContext): CatalogTarget[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1CatalogTarget(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1CheckSchemaVersionValidityResponse = (
  output: any,
  context: __SerdeContext
): CheckSchemaVersionValidityResponse => {
  return {
    Error: __expectString(output.Error),
    Valid: __expectBoolean(output.Valid),
  } as any;
};

const deserializeAws_json1_1Classifier = (output: any, context: __SerdeContext): Classifier => {
  return {
    CsvClassifier:
      output.CsvClassifier != null ? deserializeAws_json1_1CsvClassifier(output.CsvClassifier, context) : undefined,
    GrokClassifier:
      output.GrokClassifier != null ? deserializeAws_json1_1GrokClassifier(output.GrokClassifier, context) : undefined,
    JsonClassifier:
      output.JsonClassifier != null ? deserializeAws_json1_1JsonClassifier(output.JsonClassifier, context) : undefined,
    XMLClassifier:
      output.XMLClassifier != null ? deserializeAws_json1_1XMLClassifier(output.XMLClassifier, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ClassifierList = (output: any, context: __SerdeContext): Classifier[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Classifier(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ClassifierNameList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_json1_1CloudWatchEncryption = (output: any, context: __SerdeContext): CloudWatchEncryption => {
  return {
    CloudWatchEncryptionMode: __expectString(output.CloudWatchEncryptionMode),
    KmsKeyArn: __expectString(output.KmsKeyArn),
  } as any;
};

const deserializeAws_json1_1CodeGenConfigurationNode = (
  output: any,
  context: __SerdeContext
): CodeGenConfigurationNode => {
  return {
    Aggregate: output.Aggregate != null ? deserializeAws_json1_1Aggregate(output.Aggregate, context) : undefined,
    ApplyMapping:
      output.ApplyMapping != null ? deserializeAws_json1_1ApplyMapping(output.ApplyMapping, context) : undefined,
    AthenaConnectorSource:
      output.AthenaConnectorSource != null
        ? deserializeAws_json1_1AthenaConnectorSource(output.AthenaConnectorSource, context)
        : undefined,
    CatalogKafkaSource:
      output.CatalogKafkaSource != null
        ? deserializeAws_json1_1CatalogKafkaSource(output.CatalogKafkaSource, context)
        : undefined,
    CatalogKinesisSource:
      output.CatalogKinesisSource != null
        ? deserializeAws_json1_1CatalogKinesisSource(output.CatalogKinesisSource, context)
        : undefined,
    CatalogSource:
      output.CatalogSource != null ? deserializeAws_json1_1CatalogSource(output.CatalogSource, context) : undefined,
    CatalogTarget:
      output.CatalogTarget != null
        ? deserializeAws_json1_1BasicCatalogTarget(output.CatalogTarget, context)
        : undefined,
    CustomCode: output.CustomCode != null ? deserializeAws_json1_1CustomCode(output.CustomCode, context) : undefined,
    DirectKafkaSource:
      output.DirectKafkaSource != null
        ? deserializeAws_json1_1DirectKafkaSource(output.DirectKafkaSource, context)
        : undefined,
    DirectKinesisSource:
      output.DirectKinesisSource != null
        ? deserializeAws_json1_1DirectKinesisSource(output.DirectKinesisSource, context)
        : undefined,
    DropDuplicates:
      output.DropDuplicates != null ? deserializeAws_json1_1DropDuplicates(output.DropDuplicates, context) : undefined,
    DropFields: output.DropFields != null ? deserializeAws_json1_1DropFields(output.DropFields, context) : undefined,
    DropNullFields:
      output.DropNullFields != null ? deserializeAws_json1_1DropNullFields(output.DropNullFields, context) : undefined,
    DynamoDBCatalogSource:
      output.DynamoDBCatalogSource != null
        ? deserializeAws_json1_1DynamoDBCatalogSource(output.DynamoDBCatalogSource, context)
        : undefined,
    FillMissingValues:
      output.FillMissingValues != null
        ? deserializeAws_json1_1FillMissingValues(output.FillMissingValues, context)
        : undefined,
    Filter: output.Filter != null ? deserializeAws_json1_1Filter(output.Filter, context) : undefined,
    GovernedCatalogSource:
      output.GovernedCatalogSource != null
        ? deserializeAws_json1_1GovernedCatalogSource(output.GovernedCatalogSource, context)
        : undefined,
    GovernedCatalogTarget:
      output.GovernedCatalogTarget != null
        ? deserializeAws_json1_1GovernedCatalogTarget(output.GovernedCatalogTarget, context)
        : undefined,
    JDBCConnectorSource:
      output.JDBCConnectorSource != null
        ? deserializeAws_json1_1JDBCConnectorSource(output.JDBCConnectorSource, context)
        : undefined,
    JDBCConnectorTarget:
      output.JDBCConnectorTarget != null
        ? deserializeAws_json1_1JDBCConnectorTarget(output.JDBCConnectorTarget, context)
        : undefined,
    Join: output.Join != null ? deserializeAws_json1_1Join(output.Join, context) : undefined,
    Merge: output.Merge != null ? deserializeAws_json1_1Merge(output.Merge, context) : undefined,
    MicrosoftSQLServerCatalogSource:
      output.MicrosoftSQLServerCatalogSource != null
        ? deserializeAws_json1_1MicrosoftSQLServerCatalogSource(output.MicrosoftSQLServerCatalogSource, context)
        : undefined,
    MicrosoftSQLServerCatalogTarget:
      output.MicrosoftSQLServerCatalogTarget != null
        ? deserializeAws_json1_1MicrosoftSQLServerCatalogTarget(output.MicrosoftSQLServerCatalogTarget, context)
        : undefined,
    MySQLCatalogSource:
      output.MySQLCatalogSource != null
        ? deserializeAws_json1_1MySQLCatalogSource(output.MySQLCatalogSource, context)
        : undefined,
    MySQLCatalogTarget:
      output.MySQLCatalogTarget != null
        ? deserializeAws_json1_1MySQLCatalogTarget(output.MySQLCatalogTarget, context)
        : undefined,
    OracleSQLCatalogSource:
      output.OracleSQLCatalogSource != null
        ? deserializeAws_json1_1OracleSQLCatalogSource(output.OracleSQLCatalogSource, context)
        : undefined,
    OracleSQLCatalogTarget:
      output.OracleSQLCatalogTarget != null
        ? deserializeAws_json1_1OracleSQLCatalogTarget(output.OracleSQLCatalogTarget, context)
        : undefined,
    PIIDetection:
      output.PIIDetection != null ? deserializeAws_json1_1PIIDetection(output.PIIDetection, context) : undefined,
    PostgreSQLCatalogSource:
      output.PostgreSQLCatalogSource != null
        ? deserializeAws_json1_1PostgreSQLCatalogSource(output.PostgreSQLCatalogSource, context)
        : undefined,
    PostgreSQLCatalogTarget:
      output.PostgreSQLCatalogTarget != null
        ? deserializeAws_json1_1PostgreSQLCatalogTarget(output.PostgreSQLCatalogTarget, context)
        : undefined,
    RedshiftSource:
      output.RedshiftSource != null ? deserializeAws_json1_1RedshiftSource(output.RedshiftSource, context) : undefined,
    RedshiftTarget:
      output.RedshiftTarget != null ? deserializeAws_json1_1RedshiftTarget(output.RedshiftTarget, context) : undefined,
    RelationalCatalogSource:
      output.RelationalCatalogSource != null
        ? deserializeAws_json1_1RelationalCatalogSource(output.RelationalCatalogSource, context)
        : undefined,
    RenameField:
      output.RenameField != null ? deserializeAws_json1_1RenameField(output.RenameField, context) : undefined,
    S3CatalogSource:
      output.S3CatalogSource != null
        ? deserializeAws_json1_1S3CatalogSource(output.S3CatalogSource, context)
        : undefined,
    S3CatalogTarget:
      output.S3CatalogTarget != null
        ? deserializeAws_json1_1S3CatalogTarget(output.S3CatalogTarget, context)
        : undefined,
    S3CsvSource:
      output.S3CsvSource != null ? deserializeAws_json1_1S3CsvSource(output.S3CsvSource, context) : undefined,
    S3DirectTarget:
      output.S3DirectTarget != null ? deserializeAws_json1_1S3DirectTarget(output.S3DirectTarget, context) : undefined,
    S3GlueParquetTarget:
      output.S3GlueParquetTarget != null
        ? deserializeAws_json1_1S3GlueParquetTarget(output.S3GlueParquetTarget, context)
        : undefined,
    S3JsonSource:
      output.S3JsonSource != null ? deserializeAws_json1_1S3JsonSource(output.S3JsonSource, context) : undefined,
    S3ParquetSource:
      output.S3ParquetSource != null
        ? deserializeAws_json1_1S3ParquetSource(output.S3ParquetSource, context)
        : undefined,
    SelectFields:
      output.SelectFields != null ? deserializeAws_json1_1SelectFields(output.SelectFields, context) : undefined,
    SelectFromCollection:
      output.SelectFromCollection != null
        ? deserializeAws_json1_1SelectFromCollection(output.SelectFromCollection, context)
        : undefined,
    SparkConnectorSource:
      output.SparkConnectorSource != null
        ? deserializeAws_json1_1SparkConnectorSource(output.SparkConnectorSource, context)
        : undefined,
    SparkConnectorTarget:
      output.SparkConnectorTarget != null
        ? deserializeAws_json1_1SparkConnectorTarget(output.SparkConnectorTarget, context)
        : undefined,
    SparkSQL: output.SparkSQL != null ? deserializeAws_json1_1SparkSQL(output.SparkSQL, context) : undefined,
    Spigot: output.Spigot != null ? deserializeAws_json1_1Spigot(output.Spigot, context) : undefined,
    SplitFields:
      output.SplitFields != null ? deserializeAws_json1_1SplitFields(output.SplitFields, context) : undefined,
    Union: output.Union != null ? deserializeAws_json1_1Union(output.Union, context) : undefined,
  } as any;
};

const deserializeAws_json1_1CodeGenConfigurationNodes = (
  output: any,
  context: __SerdeContext
): Record<string, CodeGenConfigurationNode> => {
  return Object.entries(output).reduce((acc: Record<string, CodeGenConfigurationNode>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: deserializeAws_json1_1CodeGenConfigurationNode(value, context),
    };
  }, {});
};

const deserializeAws_json1_1CodeGenEdge = (output: any, context: __SerdeContext): CodeGenEdge => {
  return {
    Source: __expectString(output.Source),
    Target: __expectString(output.Target),
    TargetParameter: __expectString(output.TargetParameter),
  } as any;
};

const deserializeAws_json1_1CodeGenNode = (output: any, context: __SerdeContext): CodeGenNode => {
  return {
    Args: output.Args != null ? deserializeAws_json1_1CodeGenNodeArgs(output.Args, context) : undefined,
    Id: __expectString(output.Id),
    LineNumber: __expectInt32(output.LineNumber),
    NodeType: __expectString(output.NodeType),
  } as any;
};

const deserializeAws_json1_1CodeGenNodeArg = (output: any, context: __SerdeContext): CodeGenNodeArg => {
  return {
    Name: __expectString(output.Name),
    Param: __expectBoolean(output.Param),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_json1_1CodeGenNodeArgs = (output: any, context: __SerdeContext): CodeGenNodeArg[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1CodeGenNodeArg(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1Column = (output: any, context: __SerdeContext): Column => {
  return {
    Comment: __expectString(output.Comment),
    Name: __expectString(output.Name),
    Parameters: output.Parameters != null ? deserializeAws_json1_1ParametersMap(output.Parameters, context) : undefined,
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_json1_1ColumnError = (output: any, context: __SerdeContext): ColumnError => {
  return {
    ColumnName: __expectString(output.ColumnName),
    Error: output.Error != null ? deserializeAws_json1_1ErrorDetail(output.Error, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ColumnErrors = (output: any, context: __SerdeContext): ColumnError[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ColumnError(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ColumnImportance = (output: any, context: __SerdeContext): ColumnImportance => {
  return {
    ColumnName: __expectString(output.ColumnName),
    Importance: __limitedParseDouble(output.Importance),
  } as any;
};

const deserializeAws_json1_1ColumnImportanceList = (output: any, context: __SerdeContext): ColumnImportance[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ColumnImportance(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ColumnList = (output: any, context: __SerdeContext): Column[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Column(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ColumnRowFilter = (output: any, context: __SerdeContext): ColumnRowFilter => {
  return {
    ColumnName: __expectString(output.ColumnName),
    RowFilterExpression: __expectString(output.RowFilterExpression),
  } as any;
};

const deserializeAws_json1_1ColumnRowFilterList = (output: any, context: __SerdeContext): ColumnRowFilter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ColumnRowFilter(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ColumnStatistics = (output: any, context: __SerdeContext): ColumnStatistics => {
  return {
    AnalyzedTime:
      output.AnalyzedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.AnalyzedTime)))
        : undefined,
    ColumnName: __expectString(output.ColumnName),
    ColumnType: __expectString(output.ColumnType),
    StatisticsData:
      output.StatisticsData != null
        ? deserializeAws_json1_1ColumnStatisticsData(output.StatisticsData, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ColumnStatisticsData = (output: any, context: __SerdeContext): ColumnStatisticsData => {
  return {
    BinaryColumnStatisticsData:
      output.BinaryColumnStatisticsData != null
        ? deserializeAws_json1_1BinaryColumnStatisticsData(output.BinaryColumnStatisticsData, context)
        : undefined,
    BooleanColumnStatisticsData:
      output.BooleanColumnStatisticsData != null
        ? deserializeAws_json1_1BooleanColumnStatisticsData(output.BooleanColumnStatisticsData, context)
        : undefined,
    DateColumnStatisticsData:
      output.DateColumnStatisticsData != null
        ? deserializeAws_json1_1DateColumnStatisticsData(output.DateColumnStatisticsData, context)
        : undefined,
    DecimalColumnStatisticsData:
      output.DecimalColumnStatisticsData != null
        ? deserializeAws_json1_1DecimalColumnStatisticsData(output.DecimalColumnStatisticsData, context)
        : undefined,
    DoubleColumnStatisticsData:
      output.DoubleColumnStatisticsData != null
        ? deserializeAws_json1_1DoubleColumnStatisticsData(output.DoubleColumnStatisticsData, context)
        : undefined,
    LongColumnStatisticsData:
      output.LongColumnStatisticsData != null
        ? deserializeAws_json1_1LongColumnStatisticsData(output.LongColumnStatisticsData, context)
        : undefined,
    StringColumnStatisticsData:
      output.StringColumnStatisticsData != null
        ? deserializeAws_json1_1StringColumnStatisticsData(output.StringColumnStatisticsData, context)
        : undefined,
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_json1_1ColumnStatisticsError = (output: any, context: __SerdeContext): ColumnStatisticsError => {
  return {
    ColumnStatistics:
      output.ColumnStatistics != null
        ? deserializeAws_json1_1ColumnStatistics(output.ColumnStatistics, context)
        : undefined,
    Error: output.Error != null ? deserializeAws_json1_1ErrorDetail(output.Error, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ColumnStatisticsErrors = (
  output: any,
  context: __SerdeContext
): ColumnStatisticsError[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ColumnStatisticsError(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ColumnStatisticsList = (output: any, context: __SerdeContext): ColumnStatistics[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ColumnStatistics(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ColumnValueStringList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_json1_1ConcurrentModificationException = (
  output: any,
  context: __SerdeContext
): ConcurrentModificationException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1ConcurrentRunsExceededException = (
  output: any,
  context: __SerdeContext
): ConcurrentRunsExceededException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1Condition = (output: any, context: __SerdeContext): Condition => {
  return {
    CrawlState: __expectString(output.CrawlState),
    CrawlerName: __expectString(output.CrawlerName),
    JobName: __expectString(output.JobName),
    LogicalOperator: __expectString(output.LogicalOperator),
    State: __expectString(output.State),
  } as any;
};

const deserializeAws_json1_1ConditionCheckFailureException = (
  output: any,
  context: __SerdeContext
): ConditionCheckFailureException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1ConditionList = (output: any, context: __SerdeContext): Condition[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Condition(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ConflictException = (output: any, context: __SerdeContext): ConflictException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1ConfusionMatrix = (output: any, context: __SerdeContext): ConfusionMatrix => {
  return {
    NumFalseNegatives: __expectLong(output.NumFalseNegatives),
    NumFalsePositives: __expectLong(output.NumFalsePositives),
    NumTrueNegatives: __expectLong(output.NumTrueNegatives),
    NumTruePositives: __expectLong(output.NumTruePositives),
  } as any;
};

const deserializeAws_json1_1Connection = (output: any, context: __SerdeContext): Connection => {
  return {
    ConnectionProperties:
      output.ConnectionProperties != null
        ? deserializeAws_json1_1ConnectionProperties(output.ConnectionProperties, context)
        : undefined,
    ConnectionType: __expectString(output.ConnectionType),
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    Description: __expectString(output.Description),
    LastUpdatedBy: __expectString(output.LastUpdatedBy),
    LastUpdatedTime:
      output.LastUpdatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdatedTime)))
        : undefined,
    MatchCriteria:
      output.MatchCriteria != null ? deserializeAws_json1_1MatchCriteria(output.MatchCriteria, context) : undefined,
    Name: __expectString(output.Name),
    PhysicalConnectionRequirements:
      output.PhysicalConnectionRequirements != null
        ? deserializeAws_json1_1PhysicalConnectionRequirements(output.PhysicalConnectionRequirements, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ConnectionList = (output: any, context: __SerdeContext): Connection[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Connection(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ConnectionPasswordEncryption = (
  output: any,
  context: __SerdeContext
): ConnectionPasswordEncryption => {
  return {
    AwsKmsKeyId: __expectString(output.AwsKmsKeyId),
    ReturnConnectionPasswordEncrypted: __expectBoolean(output.ReturnConnectionPasswordEncrypted),
  } as any;
};

const deserializeAws_json1_1ConnectionProperties = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce(
    (acc: Record<string, string>, [key, value]: [ConnectionPropertyKey | string, any]) => {
      if (value === null) {
        return acc;
      }
      return {
        ...acc,
        [key]: __expectString(value) as any,
      };
    },
    {}
  );
};

const deserializeAws_json1_1ConnectionsList = (output: any, context: __SerdeContext): ConnectionsList => {
  return {
    Connections:
      output.Connections != null
        ? deserializeAws_json1_1OrchestrationStringList(output.Connections, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ContextWords = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_json1_1Crawl = (output: any, context: __SerdeContext): Crawl => {
  return {
    CompletedOn:
      output.CompletedOn != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CompletedOn)))
        : undefined,
    ErrorMessage: __expectString(output.ErrorMessage),
    LogGroup: __expectString(output.LogGroup),
    LogStream: __expectString(output.LogStream),
    StartedOn:
      output.StartedOn != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartedOn))) : undefined,
    State: __expectString(output.State),
  } as any;
};

const deserializeAws_json1_1Crawler = (output: any, context: __SerdeContext): Crawler => {
  return {
    Classifiers:
      output.Classifiers != null ? deserializeAws_json1_1ClassifierNameList(output.Classifiers, context) : undefined,
    Configuration: __expectString(output.Configuration),
    CrawlElapsedTime: __expectLong(output.CrawlElapsedTime),
    CrawlerSecurityConfiguration: __expectString(output.CrawlerSecurityConfiguration),
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    DatabaseName: __expectString(output.DatabaseName),
    Description: __expectString(output.Description),
    LakeFormationConfiguration:
      output.LakeFormationConfiguration != null
        ? deserializeAws_json1_1LakeFormationConfiguration(output.LakeFormationConfiguration, context)
        : undefined,
    LastCrawl: output.LastCrawl != null ? deserializeAws_json1_1LastCrawlInfo(output.LastCrawl, context) : undefined,
    LastUpdated:
      output.LastUpdated != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdated)))
        : undefined,
    LineageConfiguration:
      output.LineageConfiguration != null
        ? deserializeAws_json1_1LineageConfiguration(output.LineageConfiguration, context)
        : undefined,
    Name: __expectString(output.Name),
    RecrawlPolicy:
      output.RecrawlPolicy != null ? deserializeAws_json1_1RecrawlPolicy(output.RecrawlPolicy, context) : undefined,
    Role: __expectString(output.Role),
    Schedule: output.Schedule != null ? deserializeAws_json1_1Schedule(output.Schedule, context) : undefined,
    SchemaChangePolicy:
      output.SchemaChangePolicy != null
        ? deserializeAws_json1_1SchemaChangePolicy(output.SchemaChangePolicy, context)
        : undefined,
    State: __expectString(output.State),
    TablePrefix: __expectString(output.TablePrefix),
    Targets: output.Targets != null ? deserializeAws_json1_1CrawlerTargets(output.Targets, context) : undefined,
    Version: __expectLong(output.Version),
  } as any;
};

const deserializeAws_json1_1CrawlerHistory = (output: any, context: __SerdeContext): CrawlerHistory => {
  return {
    CrawlId: __expectString(output.CrawlId),
    DPUHour: __limitedParseDouble(output.DPUHour),
    EndTime:
      output.EndTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EndTime))) : undefined,
    ErrorMessage: __expectString(output.ErrorMessage),
    LogGroup: __expectString(output.LogGroup),
    LogStream: __expectString(output.LogStream),
    MessagePrefix: __expectString(output.MessagePrefix),
    StartTime:
      output.StartTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartTime))) : undefined,
    State: __expectString(output.State),
    Summary: __expectString(output.Summary),
  } as any;
};

const deserializeAws_json1_1CrawlerHistoryList = (output: any, context: __SerdeContext): CrawlerHistory[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1CrawlerHistory(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1CrawlerList = (output: any, context: __SerdeContext): Crawler[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Crawler(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1CrawlerMetrics = (output: any, context: __SerdeContext): CrawlerMetrics => {
  return {
    CrawlerName: __expectString(output.CrawlerName),
    LastRuntimeSeconds: __limitedParseDouble(output.LastRuntimeSeconds),
    MedianRuntimeSeconds: __limitedParseDouble(output.MedianRuntimeSeconds),
    StillEstimating: __expectBoolean(output.StillEstimating),
    TablesCreated: __expectInt32(output.TablesCreated),
    TablesDeleted: __expectInt32(output.TablesDeleted),
    TablesUpdated: __expectInt32(output.TablesUpdated),
    TimeLeftSeconds: __limitedParseDouble(output.TimeLeftSeconds),
  } as any;
};

const deserializeAws_json1_1CrawlerMetricsList = (output: any, context: __SerdeContext): CrawlerMetrics[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1CrawlerMetrics(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1CrawlerNameList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_json1_1CrawlerNodeDetails = (output: any, context: __SerdeContext): CrawlerNodeDetails => {
  return {
    Crawls: output.Crawls != null ? deserializeAws_json1_1CrawlList(output.Crawls, context) : undefined,
  } as any;
};

const deserializeAws_json1_1CrawlerNotRunningException = (
  output: any,
  context: __SerdeContext
): CrawlerNotRunningException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1CrawlerRunningException = (
  output: any,
  context: __SerdeContext
): CrawlerRunningException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1CrawlerStoppingException = (
  output: any,
  context: __SerdeContext
): CrawlerStoppingException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1CrawlerTargets = (output: any, context: __SerdeContext): CrawlerTargets => {
  return {
    CatalogTargets:
      output.CatalogTargets != null
        ? deserializeAws_json1_1CatalogTargetList(output.CatalogTargets, context)
        : undefined,
    DeltaTargets:
      output.DeltaTargets != null ? deserializeAws_json1_1DeltaTargetList(output.DeltaTargets, context) : undefined,
    DynamoDBTargets:
      output.DynamoDBTargets != null
        ? deserializeAws_json1_1DynamoDBTargetList(output.DynamoDBTargets, context)
        : undefined,
    JdbcTargets:
      output.JdbcTargets != null ? deserializeAws_json1_1JdbcTargetList(output.JdbcTargets, context) : undefined,
    MongoDBTargets:
      output.MongoDBTargets != null
        ? deserializeAws_json1_1MongoDBTargetList(output.MongoDBTargets, context)
        : undefined,
    S3Targets: output.S3Targets != null ? deserializeAws_json1_1S3TargetList(output.S3Targets, context) : undefined,
  } as any;
};

const deserializeAws_json1_1CrawlList = (output: any, context: __SerdeContext): Crawl[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Crawl(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1CreateBlueprintResponse = (
  output: any,
  context: __SerdeContext
): CreateBlueprintResponse => {
  return {
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_json1_1CreateClassifierResponse = (
  output: any,
  context: __SerdeContext
): CreateClassifierResponse => {
  return {} as any;
};

const deserializeAws_json1_1CreateConnectionResponse = (
  output: any,
  context: __SerdeContext
): CreateConnectionResponse => {
  return {} as any;
};

const deserializeAws_json1_1CreateCrawlerResponse = (output: any, context: __SerdeContext): CreateCrawlerResponse => {
  return {} as any;
};

const deserializeAws_json1_1CreateCustomEntityTypeResponse = (
  output: any,
  context: __SerdeContext
): CreateCustomEntityTypeResponse => {
  return {
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_json1_1CreateDatabaseResponse = (output: any, context: __SerdeContext): CreateDatabaseResponse => {
  return {} as any;
};

const deserializeAws_json1_1CreateDevEndpointResponse = (
  output: any,
  context: __SerdeContext
): CreateDevEndpointResponse => {
  return {
    Arguments: output.Arguments != null ? deserializeAws_json1_1MapValue(output.Arguments, context) : undefined,
    AvailabilityZone: __expectString(output.AvailabilityZone),
    CreatedTimestamp:
      output.CreatedTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTimestamp)))
        : undefined,
    EndpointName: __expectString(output.EndpointName),
    ExtraJarsS3Path: __expectString(output.ExtraJarsS3Path),
    ExtraPythonLibsS3Path: __expectString(output.ExtraPythonLibsS3Path),
    FailureReason: __expectString(output.FailureReason),
    GlueVersion: __expectString(output.GlueVersion),
    NumberOfNodes: __expectInt32(output.NumberOfNodes),
    NumberOfWorkers: __expectInt32(output.NumberOfWorkers),
    RoleArn: __expectString(output.RoleArn),
    SecurityConfiguration: __expectString(output.SecurityConfiguration),
    SecurityGroupIds:
      output.SecurityGroupIds != null ? deserializeAws_json1_1StringList(output.SecurityGroupIds, context) : undefined,
    Status: __expectString(output.Status),
    SubnetId: __expectString(output.SubnetId),
    VpcId: __expectString(output.VpcId),
    WorkerType: __expectString(output.WorkerType),
    YarnEndpointAddress: __expectString(output.YarnEndpointAddress),
    ZeppelinRemoteSparkInterpreterPort: __expectInt32(output.ZeppelinRemoteSparkInterpreterPort),
  } as any;
};

const deserializeAws_json1_1CreateJobResponse = (output: any, context: __SerdeContext): CreateJobResponse => {
  return {
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_json1_1CreateMLTransformResponse = (
  output: any,
  context: __SerdeContext
): CreateMLTransformResponse => {
  return {
    TransformId: __expectString(output.TransformId),
  } as any;
};

const deserializeAws_json1_1CreatePartitionIndexResponse = (
  output: any,
  context: __SerdeContext
): CreatePartitionIndexResponse => {
  return {} as any;
};

const deserializeAws_json1_1CreatePartitionResponse = (
  output: any,
  context: __SerdeContext
): CreatePartitionResponse => {
  return {} as any;
};

const deserializeAws_json1_1CreateRegistryResponse = (output: any, context: __SerdeContext): CreateRegistryResponse => {
  return {
    Description: __expectString(output.Description),
    RegistryArn: __expectString(output.RegistryArn),
    RegistryName: __expectString(output.RegistryName),
    Tags: output.Tags != null ? deserializeAws_json1_1TagsMap(output.Tags, context) : undefined,
  } as any;
};

const deserializeAws_json1_1CreateSchemaResponse = (output: any, context: __SerdeContext): CreateSchemaResponse => {
  return {
    Compatibility: __expectString(output.Compatibility),
    DataFormat: __expectString(output.DataFormat),
    Description: __expectString(output.Description),
    LatestSchemaVersion: __expectLong(output.LatestSchemaVersion),
    NextSchemaVersion: __expectLong(output.NextSchemaVersion),
    RegistryArn: __expectString(output.RegistryArn),
    RegistryName: __expectString(output.RegistryName),
    SchemaArn: __expectString(output.SchemaArn),
    SchemaCheckpoint: __expectLong(output.SchemaCheckpoint),
    SchemaName: __expectString(output.SchemaName),
    SchemaStatus: __expectString(output.SchemaStatus),
    SchemaVersionId: __expectString(output.SchemaVersionId),
    SchemaVersionStatus: __expectString(output.SchemaVersionStatus),
    Tags: output.Tags != null ? deserializeAws_json1_1TagsMap(output.Tags, context) : undefined,
  } as any;
};

const deserializeAws_json1_1CreateScriptResponse = (output: any, context: __SerdeContext): CreateScriptResponse => {
  return {
    PythonScript: __expectString(output.PythonScript),
    ScalaCode: __expectString(output.ScalaCode),
  } as any;
};

const deserializeAws_json1_1CreateSecurityConfigurationResponse = (
  output: any,
  context: __SerdeContext
): CreateSecurityConfigurationResponse => {
  return {
    CreatedTimestamp:
      output.CreatedTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTimestamp)))
        : undefined,
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_json1_1CreateSessionResponse = (output: any, context: __SerdeContext): CreateSessionResponse => {
  return {
    Session: output.Session != null ? deserializeAws_json1_1Session(output.Session, context) : undefined,
  } as any;
};

const deserializeAws_json1_1CreateTableResponse = (output: any, context: __SerdeContext): CreateTableResponse => {
  return {} as any;
};

const deserializeAws_json1_1CreateTriggerResponse = (output: any, context: __SerdeContext): CreateTriggerResponse => {
  return {
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_json1_1CreateUserDefinedFunctionResponse = (
  output: any,
  context: __SerdeContext
): CreateUserDefinedFunctionResponse => {
  return {} as any;
};

const deserializeAws_json1_1CreateWorkflowResponse = (output: any, context: __SerdeContext): CreateWorkflowResponse => {
  return {
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_json1_1CsvClassifier = (output: any, context: __SerdeContext): CsvClassifier => {
  return {
    AllowSingleColumn: __expectBoolean(output.AllowSingleColumn),
    ContainsHeader: __expectString(output.ContainsHeader),
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    Delimiter: __expectString(output.Delimiter),
    DisableValueTrimming: __expectBoolean(output.DisableValueTrimming),
    Header: output.Header != null ? deserializeAws_json1_1CsvHeader(output.Header, context) : undefined,
    LastUpdated:
      output.LastUpdated != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdated)))
        : undefined,
    Name: __expectString(output.Name),
    QuoteSymbol: __expectString(output.QuoteSymbol),
    Version: __expectLong(output.Version),
  } as any;
};

const deserializeAws_json1_1CsvHeader = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_json1_1CustomCode = (output: any, context: __SerdeContext): CustomCode => {
  return {
    ClassName: __expectString(output.ClassName),
    Code: __expectString(output.Code),
    Inputs: output.Inputs != null ? deserializeAws_json1_1ManyInputs(output.Inputs, context) : undefined,
    Name: __expectString(output.Name),
    OutputSchemas:
      output.OutputSchemas != null ? deserializeAws_json1_1GlueSchemas(output.OutputSchemas, context) : undefined,
  } as any;
};

const deserializeAws_json1_1CustomEntityType = (output: any, context: __SerdeContext): CustomEntityType => {
  return {
    ContextWords:
      output.ContextWords != null ? deserializeAws_json1_1ContextWords(output.ContextWords, context) : undefined,
    Name: __expectString(output.Name),
    RegexString: __expectString(output.RegexString),
  } as any;
};

const deserializeAws_json1_1CustomEntityTypeNames = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_json1_1CustomEntityTypes = (output: any, context: __SerdeContext): CustomEntityType[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1CustomEntityType(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1DagEdges = (output: any, context: __SerdeContext): CodeGenEdge[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1CodeGenEdge(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1DagNodes = (output: any, context: __SerdeContext): CodeGenNode[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1CodeGenNode(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1Database = (output: any, context: __SerdeContext): Database => {
  return {
    CatalogId: __expectString(output.CatalogId),
    CreateTableDefaultPermissions:
      output.CreateTableDefaultPermissions != null
        ? deserializeAws_json1_1PrincipalPermissionsList(output.CreateTableDefaultPermissions, context)
        : undefined,
    CreateTime:
      output.CreateTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreateTime))) : undefined,
    Description: __expectString(output.Description),
    LocationUri: __expectString(output.LocationUri),
    Name: __expectString(output.Name),
    Parameters: output.Parameters != null ? deserializeAws_json1_1ParametersMap(output.Parameters, context) : undefined,
    TargetDatabase:
      output.TargetDatabase != null
        ? deserializeAws_json1_1DatabaseIdentifier(output.TargetDatabase, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DatabaseIdentifier = (output: any, context: __SerdeContext): DatabaseIdentifier => {
  return {
    CatalogId: __expectString(output.CatalogId),
    DatabaseName: __expectString(output.DatabaseName),
  } as any;
};

const deserializeAws_json1_1DatabaseList = (output: any, context: __SerdeContext): Database[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Database(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1DataCatalogEncryptionSettings = (
  output: any,
  context: __SerdeContext
): DataCatalogEncryptionSettings => {
  return {
    ConnectionPasswordEncryption:
      output.ConnectionPasswordEncryption != null
        ? deserializeAws_json1_1ConnectionPasswordEncryption(output.ConnectionPasswordEncryption, context)
        : undefined,
    EncryptionAtRest:
      output.EncryptionAtRest != null
        ? deserializeAws_json1_1EncryptionAtRest(output.EncryptionAtRest, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DataLakePrincipal = (output: any, context: __SerdeContext): DataLakePrincipal => {
  return {
    DataLakePrincipalIdentifier: __expectString(output.DataLakePrincipalIdentifier),
  } as any;
};

const deserializeAws_json1_1Datatype = (output: any, context: __SerdeContext): Datatype => {
  return {
    Id: __expectString(output.Id),
    Label: __expectString(output.Label),
  } as any;
};

const deserializeAws_json1_1DateColumnStatisticsData = (
  output: any,
  context: __SerdeContext
): DateColumnStatisticsData => {
  return {
    MaximumValue:
      output.MaximumValue != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.MaximumValue)))
        : undefined,
    MinimumValue:
      output.MinimumValue != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.MinimumValue)))
        : undefined,
    NumberOfDistinctValues: __expectLong(output.NumberOfDistinctValues),
    NumberOfNulls: __expectLong(output.NumberOfNulls),
  } as any;
};

const deserializeAws_json1_1DecimalColumnStatisticsData = (
  output: any,
  context: __SerdeContext
): DecimalColumnStatisticsData => {
  return {
    MaximumValue:
      output.MaximumValue != null ? deserializeAws_json1_1DecimalNumber(output.MaximumValue, context) : undefined,
    MinimumValue:
      output.MinimumValue != null ? deserializeAws_json1_1DecimalNumber(output.MinimumValue, context) : undefined,
    NumberOfDistinctValues: __expectLong(output.NumberOfDistinctValues),
    NumberOfNulls: __expectLong(output.NumberOfNulls),
  } as any;
};

const deserializeAws_json1_1DecimalNumber = (output: any, context: __SerdeContext): DecimalNumber => {
  return {
    Scale: __expectInt32(output.Scale),
    UnscaledValue: output.UnscaledValue != null ? context.base64Decoder(output.UnscaledValue) : undefined,
  } as any;
};

const deserializeAws_json1_1DeleteBlueprintResponse = (
  output: any,
  context: __SerdeContext
): DeleteBlueprintResponse => {
  return {
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_json1_1DeleteClassifierResponse = (
  output: any,
  context: __SerdeContext
): DeleteClassifierResponse => {
  return {} as any;
};

const deserializeAws_json1_1DeleteColumnStatisticsForPartitionResponse = (
  output: any,
  context: __SerdeContext
): DeleteColumnStatisticsForPartitionResponse => {
  return {} as any;
};

const deserializeAws_json1_1DeleteColumnStatisticsForTableResponse = (
  output: any,
  context: __SerdeContext
): DeleteColumnStatisticsForTableResponse => {
  return {} as any;
};

const deserializeAws_json1_1DeleteConnectionResponse = (
  output: any,
  context: __SerdeContext
): DeleteConnectionResponse => {
  return {} as any;
};

const deserializeAws_json1_1DeleteCrawlerResponse = (output: any, context: __SerdeContext): DeleteCrawlerResponse => {
  return {} as any;
};

const deserializeAws_json1_1DeleteCustomEntityTypeResponse = (
  output: any,
  context: __SerdeContext
): DeleteCustomEntityTypeResponse => {
  return {
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_json1_1DeleteDatabaseResponse = (output: any, context: __SerdeContext): DeleteDatabaseResponse => {
  return {} as any;
};

const deserializeAws_json1_1DeleteDevEndpointResponse = (
  output: any,
  context: __SerdeContext
): DeleteDevEndpointResponse => {
  return {} as any;
};

const deserializeAws_json1_1DeleteJobResponse = (output: any, context: __SerdeContext): DeleteJobResponse => {
  return {
    JobName: __expectString(output.JobName),
  } as any;
};

const deserializeAws_json1_1DeleteMLTransformResponse = (
  output: any,
  context: __SerdeContext
): DeleteMLTransformResponse => {
  return {
    TransformId: __expectString(output.TransformId),
  } as any;
};

const deserializeAws_json1_1DeletePartitionIndexResponse = (
  output: any,
  context: __SerdeContext
): DeletePartitionIndexResponse => {
  return {} as any;
};

const deserializeAws_json1_1DeletePartitionResponse = (
  output: any,
  context: __SerdeContext
): DeletePartitionResponse => {
  return {} as any;
};

const deserializeAws_json1_1DeleteRegistryResponse = (output: any, context: __SerdeContext): DeleteRegistryResponse => {
  return {
    RegistryArn: __expectString(output.RegistryArn),
    RegistryName: __expectString(output.RegistryName),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_1DeleteResourcePolicyResponse = (
  output: any,
  context: __SerdeContext
): DeleteResourcePolicyResponse => {
  return {} as any;
};

const deserializeAws_json1_1DeleteSchemaResponse = (output: any, context: __SerdeContext): DeleteSchemaResponse => {
  return {
    SchemaArn: __expectString(output.SchemaArn),
    SchemaName: __expectString(output.SchemaName),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_1DeleteSchemaVersionsResponse = (
  output: any,
  context: __SerdeContext
): DeleteSchemaVersionsResponse => {
  return {
    SchemaVersionErrors:
      output.SchemaVersionErrors != null
        ? deserializeAws_json1_1SchemaVersionErrorList(output.SchemaVersionErrors, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DeleteSecurityConfigurationResponse = (
  output: any,
  context: __SerdeContext
): DeleteSecurityConfigurationResponse => {
  return {} as any;
};

const deserializeAws_json1_1DeleteSessionResponse = (output: any, context: __SerdeContext): DeleteSessionResponse => {
  return {
    Id: __expectString(output.Id),
  } as any;
};

const deserializeAws_json1_1DeleteTableResponse = (output: any, context: __SerdeContext): DeleteTableResponse => {
  return {} as any;
};

const deserializeAws_json1_1DeleteTableVersionResponse = (
  output: any,
  context: __SerdeContext
): DeleteTableVersionResponse => {
  return {} as any;
};

const deserializeAws_json1_1DeleteTriggerResponse = (output: any, context: __SerdeContext): DeleteTriggerResponse => {
  return {
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_json1_1DeleteUserDefinedFunctionResponse = (
  output: any,
  context: __SerdeContext
): DeleteUserDefinedFunctionResponse => {
  return {} as any;
};

const deserializeAws_json1_1DeleteWorkflowResponse = (output: any, context: __SerdeContext): DeleteWorkflowResponse => {
  return {
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_json1_1DeltaTarget = (output: any, context: __SerdeContext): DeltaTarget => {
  return {
    ConnectionName: __expectString(output.ConnectionName),
    DeltaTables: output.DeltaTables != null ? deserializeAws_json1_1PathList(output.DeltaTables, context) : undefined,
    WriteManifest: __expectBoolean(output.WriteManifest),
  } as any;
};

const deserializeAws_json1_1DeltaTargetList = (output: any, context: __SerdeContext): DeltaTarget[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1DeltaTarget(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1DevEndpoint = (output: any, context: __SerdeContext): DevEndpoint => {
  return {
    Arguments: output.Arguments != null ? deserializeAws_json1_1MapValue(output.Arguments, context) : undefined,
    AvailabilityZone: __expectString(output.AvailabilityZone),
    CreatedTimestamp:
      output.CreatedTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTimestamp)))
        : undefined,
    EndpointName: __expectString(output.EndpointName),
    ExtraJarsS3Path: __expectString(output.ExtraJarsS3Path),
    ExtraPythonLibsS3Path: __expectString(output.ExtraPythonLibsS3Path),
    FailureReason: __expectString(output.FailureReason),
    GlueVersion: __expectString(output.GlueVersion),
    LastModifiedTimestamp:
      output.LastModifiedTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModifiedTimestamp)))
        : undefined,
    LastUpdateStatus: __expectString(output.LastUpdateStatus),
    NumberOfNodes: __expectInt32(output.NumberOfNodes),
    NumberOfWorkers: __expectInt32(output.NumberOfWorkers),
    PrivateAddress: __expectString(output.PrivateAddress),
    PublicAddress: __expectString(output.PublicAddress),
    PublicKey: __expectString(output.PublicKey),
    PublicKeys:
      output.PublicKeys != null ? deserializeAws_json1_1PublicKeysList(output.PublicKeys, context) : undefined,
    RoleArn: __expectString(output.RoleArn),
    SecurityConfiguration: __expectString(output.SecurityConfiguration),
    SecurityGroupIds:
      output.SecurityGroupIds != null ? deserializeAws_json1_1StringList(output.SecurityGroupIds, context) : undefined,
    Status: __expectString(output.Status),
    SubnetId: __expectString(output.SubnetId),
    VpcId: __expectString(output.VpcId),
    WorkerType: __expectString(output.WorkerType),
    YarnEndpointAddress: __expectString(output.YarnEndpointAddress),
    ZeppelinRemoteSparkInterpreterPort: __expectInt32(output.ZeppelinRemoteSparkInterpreterPort),
  } as any;
};

const deserializeAws_json1_1DevEndpointList = (output: any, context: __SerdeContext): DevEndpoint[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1DevEndpoint(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1DevEndpointNameList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_json1_1DevEndpointNames = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_json1_1DirectKafkaSource = (output: any, context: __SerdeContext): DirectKafkaSource => {
  return {
    DataPreviewOptions:
      output.DataPreviewOptions != null
        ? deserializeAws_json1_1StreamingDataPreviewOptions(output.DataPreviewOptions, context)
        : undefined,
    DetectSchema: __expectBoolean(output.DetectSchema),
    Name: __expectString(output.Name),
    StreamingOptions:
      output.StreamingOptions != null
        ? deserializeAws_json1_1KafkaStreamingSourceOptions(output.StreamingOptions, context)
        : undefined,
    WindowSize: __expectInt32(output.WindowSize),
  } as any;
};

const deserializeAws_json1_1DirectKinesisSource = (output: any, context: __SerdeContext): DirectKinesisSource => {
  return {
    DataPreviewOptions:
      output.DataPreviewOptions != null
        ? deserializeAws_json1_1StreamingDataPreviewOptions(output.DataPreviewOptions, context)
        : undefined,
    DetectSchema: __expectBoolean(output.DetectSchema),
    Name: __expectString(output.Name),
    StreamingOptions:
      output.StreamingOptions != null
        ? deserializeAws_json1_1KinesisStreamingSourceOptions(output.StreamingOptions, context)
        : undefined,
    WindowSize: __expectInt32(output.WindowSize),
  } as any;
};

const deserializeAws_json1_1DirectSchemaChangePolicy = (
  output: any,
  context: __SerdeContext
): DirectSchemaChangePolicy => {
  return {
    Database: __expectString(output.Database),
    EnableUpdateCatalog: __expectBoolean(output.EnableUpdateCatalog),
    Table: __expectString(output.Table),
    UpdateBehavior: __expectString(output.UpdateBehavior),
  } as any;
};

const deserializeAws_json1_1DoubleColumnStatisticsData = (
  output: any,
  context: __SerdeContext
): DoubleColumnStatisticsData => {
  return {
    MaximumValue: __limitedParseDouble(output.MaximumValue),
    MinimumValue: __limitedParseDouble(output.MinimumValue),
    NumberOfDistinctValues: __expectLong(output.NumberOfDistinctValues),
    NumberOfNulls: __expectLong(output.NumberOfNulls),
  } as any;
};

const deserializeAws_json1_1DropDuplicates = (output: any, context: __SerdeContext): DropDuplicates => {
  return {
    Columns: output.Columns != null ? deserializeAws_json1_1LimitedPathList(output.Columns, context) : undefined,
    Inputs: output.Inputs != null ? deserializeAws_json1_1OneInput(output.Inputs, context) : undefined,
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_json1_1DropFields = (output: any, context: __SerdeContext): DropFields => {
  return {
    Inputs: output.Inputs != null ? deserializeAws_json1_1OneInput(output.Inputs, context) : undefined,
    Name: __expectString(output.Name),
    Paths: output.Paths != null ? deserializeAws_json1_1GlueStudioPathList(output.Paths, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DropNullFields = (output: any, context: __SerdeContext): DropNullFields => {
  return {
    Inputs: output.Inputs != null ? deserializeAws_json1_1OneInput(output.Inputs, context) : undefined,
    Name: __expectString(output.Name),
    NullCheckBoxList:
      output.NullCheckBoxList != null
        ? deserializeAws_json1_1NullCheckBoxList(output.NullCheckBoxList, context)
        : undefined,
    NullTextList:
      output.NullTextList != null ? deserializeAws_json1_1NullValueFields(output.NullTextList, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DynamoDBCatalogSource = (output: any, context: __SerdeContext): DynamoDBCatalogSource => {
  return {
    Database: __expectString(output.Database),
    Name: __expectString(output.Name),
    Table: __expectString(output.Table),
  } as any;
};

const deserializeAws_json1_1DynamoDBTarget = (output: any, context: __SerdeContext): DynamoDBTarget => {
  return {
    Path: __expectString(output.Path),
    scanAll: __expectBoolean(output.scanAll),
    scanRate: __limitedParseDouble(output.scanRate),
  } as any;
};

const deserializeAws_json1_1DynamoDBTargetList = (output: any, context: __SerdeContext): DynamoDBTarget[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1DynamoDBTarget(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1Edge = (output: any, context: __SerdeContext): Edge => {
  return {
    DestinationId: __expectString(output.DestinationId),
    SourceId: __expectString(output.SourceId),
  } as any;
};

const deserializeAws_json1_1EdgeList = (output: any, context: __SerdeContext): Edge[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Edge(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1EnclosedInStringProperties = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_json1_1EnclosedInStringPropertiesMinOne = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_json1_1EncryptionAtRest = (output: any, context: __SerdeContext): EncryptionAtRest => {
  return {
    CatalogEncryptionMode: __expectString(output.CatalogEncryptionMode),
    SseAwsKmsKeyId: __expectString(output.SseAwsKmsKeyId),
  } as any;
};

const deserializeAws_json1_1EncryptionConfiguration = (
  output: any,
  context: __SerdeContext
): EncryptionConfiguration => {
  return {
    CloudWatchEncryption:
      output.CloudWatchEncryption != null
        ? deserializeAws_json1_1CloudWatchEncryption(output.CloudWatchEncryption, context)
        : undefined,
    JobBookmarksEncryption:
      output.JobBookmarksEncryption != null
        ? deserializeAws_json1_1JobBookmarksEncryption(output.JobBookmarksEncryption, context)
        : undefined,
    S3Encryption:
      output.S3Encryption != null ? deserializeAws_json1_1S3EncryptionList(output.S3Encryption, context) : undefined,
  } as any;
};

const deserializeAws_json1_1EntityNotFoundException = (
  output: any,
  context: __SerdeContext
): EntityNotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1ErrorByName = (output: any, context: __SerdeContext): Record<string, ErrorDetail> => {
  return Object.entries(output).reduce((acc: Record<string, ErrorDetail>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: deserializeAws_json1_1ErrorDetail(value, context),
    };
  }, {});
};

const deserializeAws_json1_1ErrorDetail = (output: any, context: __SerdeContext): ErrorDetail => {
  return {
    ErrorCode: __expectString(output.ErrorCode),
    ErrorMessage: __expectString(output.ErrorMessage),
  } as any;
};

const deserializeAws_json1_1ErrorDetails = (output: any, context: __SerdeContext): ErrorDetails => {
  return {
    ErrorCode: __expectString(output.ErrorCode),
    ErrorMessage: __expectString(output.ErrorMessage),
  } as any;
};

const deserializeAws_json1_1EvaluationMetrics = (output: any, context: __SerdeContext): EvaluationMetrics => {
  return {
    FindMatchesMetrics:
      output.FindMatchesMetrics != null
        ? deserializeAws_json1_1FindMatchesMetrics(output.FindMatchesMetrics, context)
        : undefined,
    TransformType: __expectString(output.TransformType),
  } as any;
};

const deserializeAws_json1_1EventBatchingCondition = (output: any, context: __SerdeContext): EventBatchingCondition => {
  return {
    BatchSize: __expectInt32(output.BatchSize),
    BatchWindow: __expectInt32(output.BatchWindow),
  } as any;
};

const deserializeAws_json1_1ExecutionProperty = (output: any, context: __SerdeContext): ExecutionProperty => {
  return {
    MaxConcurrentRuns: __expectInt32(output.MaxConcurrentRuns),
  } as any;
};

const deserializeAws_json1_1ExportLabelsTaskRunProperties = (
  output: any,
  context: __SerdeContext
): ExportLabelsTaskRunProperties => {
  return {
    OutputS3Path: __expectString(output.OutputS3Path),
  } as any;
};

const deserializeAws_json1_1FillMissingValues = (output: any, context: __SerdeContext): FillMissingValues => {
  return {
    FilledPath: __expectString(output.FilledPath),
    ImputedPath: __expectString(output.ImputedPath),
    Inputs: output.Inputs != null ? deserializeAws_json1_1OneInput(output.Inputs, context) : undefined,
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_json1_1Filter = (output: any, context: __SerdeContext): Filter => {
  return {
    Filters: output.Filters != null ? deserializeAws_json1_1FilterExpressions(output.Filters, context) : undefined,
    Inputs: output.Inputs != null ? deserializeAws_json1_1OneInput(output.Inputs, context) : undefined,
    LogicalOperator: __expectString(output.LogicalOperator),
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_json1_1FilterExpression = (output: any, context: __SerdeContext): FilterExpression => {
  return {
    Negated: __expectBoolean(output.Negated),
    Operation: __expectString(output.Operation),
    Values: output.Values != null ? deserializeAws_json1_1FilterValues(output.Values, context) : undefined,
  } as any;
};

const deserializeAws_json1_1FilterExpressions = (output: any, context: __SerdeContext): FilterExpression[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1FilterExpression(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1FilterValue = (output: any, context: __SerdeContext): FilterValue => {
  return {
    Type: __expectString(output.Type),
    Value: output.Value != null ? deserializeAws_json1_1EnclosedInStringProperties(output.Value, context) : undefined,
  } as any;
};

const deserializeAws_json1_1FilterValues = (output: any, context: __SerdeContext): FilterValue[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1FilterValue(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1FindMatchesMetrics = (output: any, context: __SerdeContext): FindMatchesMetrics => {
  return {
    AreaUnderPRCurve: __limitedParseDouble(output.AreaUnderPRCurve),
    ColumnImportances:
      output.ColumnImportances != null
        ? deserializeAws_json1_1ColumnImportanceList(output.ColumnImportances, context)
        : undefined,
    ConfusionMatrix:
      output.ConfusionMatrix != null
        ? deserializeAws_json1_1ConfusionMatrix(output.ConfusionMatrix, context)
        : undefined,
    F1: __limitedParseDouble(output.F1),
    Precision: __limitedParseDouble(output.Precision),
    Recall: __limitedParseDouble(output.Recall),
  } as any;
};

const deserializeAws_json1_1FindMatchesParameters = (output: any, context: __SerdeContext): FindMatchesParameters => {
  return {
    AccuracyCostTradeoff: __limitedParseDouble(output.AccuracyCostTradeoff),
    EnforceProvidedLabels: __expectBoolean(output.EnforceProvidedLabels),
    PrecisionRecallTradeoff: __limitedParseDouble(output.PrecisionRecallTradeoff),
    PrimaryKeyColumnName: __expectString(output.PrimaryKeyColumnName),
  } as any;
};

const deserializeAws_json1_1FindMatchesTaskRunProperties = (
  output: any,
  context: __SerdeContext
): FindMatchesTaskRunProperties => {
  return {
    JobId: __expectString(output.JobId),
    JobName: __expectString(output.JobName),
    JobRunId: __expectString(output.JobRunId),
  } as any;
};

const deserializeAws_json1_1GenericMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: __expectString(value) as any,
    };
  }, {});
};

const deserializeAws_json1_1GetBlueprintResponse = (output: any, context: __SerdeContext): GetBlueprintResponse => {
  return {
    Blueprint: output.Blueprint != null ? deserializeAws_json1_1Blueprint(output.Blueprint, context) : undefined,
  } as any;
};

const deserializeAws_json1_1GetBlueprintRunResponse = (
  output: any,
  context: __SerdeContext
): GetBlueprintRunResponse => {
  return {
    BlueprintRun:
      output.BlueprintRun != null ? deserializeAws_json1_1BlueprintRun(output.BlueprintRun, context) : undefined,
  } as any;
};

const deserializeAws_json1_1GetBlueprintRunsResponse = (
  output: any,
  context: __SerdeContext
): GetBlueprintRunsResponse => {
  return {
    BlueprintRuns:
      output.BlueprintRuns != null ? deserializeAws_json1_1BlueprintRuns(output.BlueprintRuns, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1GetCatalogImportStatusResponse = (
  output: any,
  context: __SerdeContext
): GetCatalogImportStatusResponse => {
  return {
    ImportStatus:
      output.ImportStatus != null ? deserializeAws_json1_1CatalogImportStatus(output.ImportStatus, context) : undefined,
  } as any;
};

const deserializeAws_json1_1GetClassifierResponse = (output: any, context: __SerdeContext): GetClassifierResponse => {
  return {
    Classifier: output.Classifier != null ? deserializeAws_json1_1Classifier(output.Classifier, context) : undefined,
  } as any;
};

const deserializeAws_json1_1GetClassifiersResponse = (output: any, context: __SerdeContext): GetClassifiersResponse => {
  return {
    Classifiers:
      output.Classifiers != null ? deserializeAws_json1_1ClassifierList(output.Classifiers, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1GetColumnStatisticsForPartitionResponse = (
  output: any,
  context: __SerdeContext
): GetColumnStatisticsForPartitionResponse => {
  return {
    ColumnStatisticsList:
      output.ColumnStatisticsList != null
        ? deserializeAws_json1_1ColumnStatisticsList(output.ColumnStatisticsList, context)
        : undefined,
    Errors: output.Errors != null ? deserializeAws_json1_1ColumnErrors(output.Errors, context) : undefined,
  } as any;
};

const deserializeAws_json1_1GetColumnStatisticsForTableResponse = (
  output: any,
  context: __SerdeContext
): GetColumnStatisticsForTableResponse => {
  return {
    ColumnStatisticsList:
      output.ColumnStatisticsList != null
        ? deserializeAws_json1_1ColumnStatisticsList(output.ColumnStatisticsList, context)
        : undefined,
    Errors: output.Errors != null ? deserializeAws_json1_1ColumnErrors(output.Errors, context) : undefined,
  } as any;
};

const deserializeAws_json1_1GetConnectionResponse = (output: any, context: __SerdeContext): GetConnectionResponse => {
  return {
    Connection: output.Connection != null ? deserializeAws_json1_1Connection(output.Connection, context) : undefined,
  } as any;
};

const deserializeAws_json1_1GetConnectionsResponse = (output: any, context: __SerdeContext): GetConnectionsResponse => {
  return {
    ConnectionList:
      output.ConnectionList != null ? deserializeAws_json1_1ConnectionList(output.ConnectionList, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1GetCrawlerMetricsResponse = (
  output: any,
  context: __SerdeContext
): GetCrawlerMetricsResponse => {
  return {
    CrawlerMetricsList:
      output.CrawlerMetricsList != null
        ? deserializeAws_json1_1CrawlerMetricsList(output.CrawlerMetricsList, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1GetCrawlerResponse = (output: any, context: __SerdeContext): GetCrawlerResponse => {
  return {
    Crawler: output.Crawler != null ? deserializeAws_json1_1Crawler(output.Crawler, context) : undefined,
  } as any;
};

const deserializeAws_json1_1GetCrawlersResponse = (output: any, context: __SerdeContext): GetCrawlersResponse => {
  return {
    Crawlers: output.Crawlers != null ? deserializeAws_json1_1CrawlerList(output.Crawlers, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1GetCustomEntityTypeResponse = (
  output: any,
  context: __SerdeContext
): GetCustomEntityTypeResponse => {
  return {
    ContextWords:
      output.ContextWords != null ? deserializeAws_json1_1ContextWords(output.ContextWords, context) : undefined,
    Name: __expectString(output.Name),
    RegexString: __expectString(output.RegexString),
  } as any;
};

const deserializeAws_json1_1GetDatabaseResponse = (output: any, context: __SerdeContext): GetDatabaseResponse => {
  return {
    Database: output.Database != null ? deserializeAws_json1_1Database(output.Database, context) : undefined,
  } as any;
};

const deserializeAws_json1_1GetDatabasesResponse = (output: any, context: __SerdeContext): GetDatabasesResponse => {
  return {
    DatabaseList:
      output.DatabaseList != null ? deserializeAws_json1_1DatabaseList(output.DatabaseList, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1GetDataCatalogEncryptionSettingsResponse = (
  output: any,
  context: __SerdeContext
): GetDataCatalogEncryptionSettingsResponse => {
  return {
    DataCatalogEncryptionSettings:
      output.DataCatalogEncryptionSettings != null
        ? deserializeAws_json1_1DataCatalogEncryptionSettings(output.DataCatalogEncryptionSettings, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetDataflowGraphResponse = (
  output: any,
  context: __SerdeContext
): GetDataflowGraphResponse => {
  return {
    DagEdges: output.DagEdges != null ? deserializeAws_json1_1DagEdges(output.DagEdges, context) : undefined,
    DagNodes: output.DagNodes != null ? deserializeAws_json1_1DagNodes(output.DagNodes, context) : undefined,
  } as any;
};

const deserializeAws_json1_1GetDevEndpointResponse = (output: any, context: __SerdeContext): GetDevEndpointResponse => {
  return {
    DevEndpoint:
      output.DevEndpoint != null ? deserializeAws_json1_1DevEndpoint(output.DevEndpoint, context) : undefined,
  } as any;
};

const deserializeAws_json1_1GetDevEndpointsResponse = (
  output: any,
  context: __SerdeContext
): GetDevEndpointsResponse => {
  return {
    DevEndpoints:
      output.DevEndpoints != null ? deserializeAws_json1_1DevEndpointList(output.DevEndpoints, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1GetJobBookmarkResponse = (output: any, context: __SerdeContext): GetJobBookmarkResponse => {
  return {
    JobBookmarkEntry:
      output.JobBookmarkEntry != null
        ? deserializeAws_json1_1JobBookmarkEntry(output.JobBookmarkEntry, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetJobResponse = (output: any, context: __SerdeContext): GetJobResponse => {
  return {
    Job: output.Job != null ? deserializeAws_json1_1Job(output.Job, context) : undefined,
  } as any;
};

const deserializeAws_json1_1GetJobRunResponse = (output: any, context: __SerdeContext): GetJobRunResponse => {
  return {
    JobRun: output.JobRun != null ? deserializeAws_json1_1JobRun(output.JobRun, context) : undefined,
  } as any;
};

const deserializeAws_json1_1GetJobRunsResponse = (output: any, context: __SerdeContext): GetJobRunsResponse => {
  return {
    JobRuns: output.JobRuns != null ? deserializeAws_json1_1JobRunList(output.JobRuns, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1GetJobsResponse = (output: any, context: __SerdeContext): GetJobsResponse => {
  return {
    Jobs: output.Jobs != null ? deserializeAws_json1_1JobList(output.Jobs, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1GetMappingResponse = (output: any, context: __SerdeContext): GetMappingResponse => {
  return {
    Mapping: output.Mapping != null ? deserializeAws_json1_1MappingList(output.Mapping, context) : undefined,
  } as any;
};

const deserializeAws_json1_1GetMLTaskRunResponse = (output: any, context: __SerdeContext): GetMLTaskRunResponse => {
  return {
    CompletedOn:
      output.CompletedOn != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CompletedOn)))
        : undefined,
    ErrorString: __expectString(output.ErrorString),
    ExecutionTime: __expectInt32(output.ExecutionTime),
    LastModifiedOn:
      output.LastModifiedOn != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModifiedOn)))
        : undefined,
    LogGroupName: __expectString(output.LogGroupName),
    Properties:
      output.Properties != null ? deserializeAws_json1_1TaskRunProperties(output.Properties, context) : undefined,
    StartedOn:
      output.StartedOn != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartedOn))) : undefined,
    Status: __expectString(output.Status),
    TaskRunId: __expectString(output.TaskRunId),
    TransformId: __expectString(output.TransformId),
  } as any;
};

const deserializeAws_json1_1GetMLTaskRunsResponse = (output: any, context: __SerdeContext): GetMLTaskRunsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    TaskRuns: output.TaskRuns != null ? deserializeAws_json1_1TaskRunList(output.TaskRuns, context) : undefined,
  } as any;
};

const deserializeAws_json1_1GetMLTransformResponse = (output: any, context: __SerdeContext): GetMLTransformResponse => {
  return {
    CreatedOn:
      output.CreatedOn != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedOn))) : undefined,
    Description: __expectString(output.Description),
    EvaluationMetrics:
      output.EvaluationMetrics != null
        ? deserializeAws_json1_1EvaluationMetrics(output.EvaluationMetrics, context)
        : undefined,
    GlueVersion: __expectString(output.GlueVersion),
    InputRecordTables:
      output.InputRecordTables != null
        ? deserializeAws_json1_1GlueTables(output.InputRecordTables, context)
        : undefined,
    LabelCount: __expectInt32(output.LabelCount),
    LastModifiedOn:
      output.LastModifiedOn != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModifiedOn)))
        : undefined,
    MaxCapacity: __limitedParseDouble(output.MaxCapacity),
    MaxRetries: __expectInt32(output.MaxRetries),
    Name: __expectString(output.Name),
    NumberOfWorkers: __expectInt32(output.NumberOfWorkers),
    Parameters:
      output.Parameters != null ? deserializeAws_json1_1TransformParameters(output.Parameters, context) : undefined,
    Role: __expectString(output.Role),
    Schema: output.Schema != null ? deserializeAws_json1_1TransformSchema(output.Schema, context) : undefined,
    Status: __expectString(output.Status),
    Timeout: __expectInt32(output.Timeout),
    TransformEncryption:
      output.TransformEncryption != null
        ? deserializeAws_json1_1TransformEncryption(output.TransformEncryption, context)
        : undefined,
    TransformId: __expectString(output.TransformId),
    WorkerType: __expectString(output.WorkerType),
  } as any;
};

const deserializeAws_json1_1GetMLTransformsResponse = (
  output: any,
  context: __SerdeContext
): GetMLTransformsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Transforms: output.Transforms != null ? deserializeAws_json1_1TransformList(output.Transforms, context) : undefined,
  } as any;
};

const deserializeAws_json1_1GetPartitionIndexesResponse = (
  output: any,
  context: __SerdeContext
): GetPartitionIndexesResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    PartitionIndexDescriptorList:
      output.PartitionIndexDescriptorList != null
        ? deserializeAws_json1_1PartitionIndexDescriptorList(output.PartitionIndexDescriptorList, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetPartitionResponse = (output: any, context: __SerdeContext): GetPartitionResponse => {
  return {
    Partition: output.Partition != null ? deserializeAws_json1_1Partition(output.Partition, context) : undefined,
  } as any;
};

const deserializeAws_json1_1GetPartitionsResponse = (output: any, context: __SerdeContext): GetPartitionsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Partitions: output.Partitions != null ? deserializeAws_json1_1PartitionList(output.Partitions, context) : undefined,
  } as any;
};

const deserializeAws_json1_1GetPlanResponse = (output: any, context: __SerdeContext): GetPlanResponse => {
  return {
    PythonScript: __expectString(output.PythonScript),
    ScalaCode: __expectString(output.ScalaCode),
  } as any;
};

const deserializeAws_json1_1GetRegistryResponse = (output: any, context: __SerdeContext): GetRegistryResponse => {
  return {
    CreatedTime: __expectString(output.CreatedTime),
    Description: __expectString(output.Description),
    RegistryArn: __expectString(output.RegistryArn),
    RegistryName: __expectString(output.RegistryName),
    Status: __expectString(output.Status),
    UpdatedTime: __expectString(output.UpdatedTime),
  } as any;
};

const deserializeAws_json1_1GetResourcePoliciesResponse = (
  output: any,
  context: __SerdeContext
): GetResourcePoliciesResponse => {
  return {
    GetResourcePoliciesResponseList:
      output.GetResourcePoliciesResponseList != null
        ? deserializeAws_json1_1GetResourcePoliciesResponseList(output.GetResourcePoliciesResponseList, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1GetResourcePoliciesResponseList = (output: any, context: __SerdeContext): GluePolicy[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1GluePolicy(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1GetResourcePolicyResponse = (
  output: any,
  context: __SerdeContext
): GetResourcePolicyResponse => {
  return {
    CreateTime:
      output.CreateTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreateTime))) : undefined,
    PolicyHash: __expectString(output.PolicyHash),
    PolicyInJson: __expectString(output.PolicyInJson),
    UpdateTime:
      output.UpdateTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.UpdateTime))) : undefined,
  } as any;
};

const deserializeAws_json1_1GetSchemaByDefinitionResponse = (
  output: any,
  context: __SerdeContext
): GetSchemaByDefinitionResponse => {
  return {
    CreatedTime: __expectString(output.CreatedTime),
    DataFormat: __expectString(output.DataFormat),
    SchemaArn: __expectString(output.SchemaArn),
    SchemaVersionId: __expectString(output.SchemaVersionId),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_1GetSchemaResponse = (output: any, context: __SerdeContext): GetSchemaResponse => {
  return {
    Compatibility: __expectString(output.Compatibility),
    CreatedTime: __expectString(output.CreatedTime),
    DataFormat: __expectString(output.DataFormat),
    Description: __expectString(output.Description),
    LatestSchemaVersion: __expectLong(output.LatestSchemaVersion),
    NextSchemaVersion: __expectLong(output.NextSchemaVersion),
    RegistryArn: __expectString(output.RegistryArn),
    RegistryName: __expectString(output.RegistryName),
    SchemaArn: __expectString(output.SchemaArn),
    SchemaCheckpoint: __expectLong(output.SchemaCheckpoint),
    SchemaName: __expectString(output.SchemaName),
    SchemaStatus: __expectString(output.SchemaStatus),
    UpdatedTime: __expectString(output.UpdatedTime),
  } as any;
};

const deserializeAws_json1_1GetSchemaVersionResponse = (
  output: any,
  context: __SerdeContext
): GetSchemaVersionResponse => {
  return {
    CreatedTime: __expectString(output.CreatedTime),
    DataFormat: __expectString(output.DataFormat),
    SchemaArn: __expectString(output.SchemaArn),
    SchemaDefinition: __expectString(output.SchemaDefinition),
    SchemaVersionId: __expectString(output.SchemaVersionId),
    Status: __expectString(output.Status),
    VersionNumber: __expectLong(output.VersionNumber),
  } as any;
};

const deserializeAws_json1_1GetSchemaVersionsDiffResponse = (
  output: any,
  context: __SerdeContext
): GetSchemaVersionsDiffResponse => {
  return {
    Diff: __expectString(output.Diff),
  } as any;
};

const deserializeAws_json1_1GetSecurityConfigurationResponse = (
  output: any,
  context: __SerdeContext
): GetSecurityConfigurationResponse => {
  return {
    SecurityConfiguration:
      output.SecurityConfiguration != null
        ? deserializeAws_json1_1SecurityConfiguration(output.SecurityConfiguration, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetSecurityConfigurationsResponse = (
  output: any,
  context: __SerdeContext
): GetSecurityConfigurationsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    SecurityConfigurations:
      output.SecurityConfigurations != null
        ? deserializeAws_json1_1SecurityConfigurationList(output.SecurityConfigurations, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetSessionResponse = (output: any, context: __SerdeContext): GetSessionResponse => {
  return {
    Session: output.Session != null ? deserializeAws_json1_1Session(output.Session, context) : undefined,
  } as any;
};

const deserializeAws_json1_1GetStatementResponse = (output: any, context: __SerdeContext): GetStatementResponse => {
  return {
    Statement: output.Statement != null ? deserializeAws_json1_1Statement(output.Statement, context) : undefined,
  } as any;
};

const deserializeAws_json1_1GetTableResponse = (output: any, context: __SerdeContext): GetTableResponse => {
  return {
    Table: output.Table != null ? deserializeAws_json1_1Table(output.Table, context) : undefined,
  } as any;
};

const deserializeAws_json1_1GetTablesResponse = (output: any, context: __SerdeContext): GetTablesResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    TableList: output.TableList != null ? deserializeAws_json1_1TableList(output.TableList, context) : undefined,
  } as any;
};

const deserializeAws_json1_1GetTableVersionResponse = (
  output: any,
  context: __SerdeContext
): GetTableVersionResponse => {
  return {
    TableVersion:
      output.TableVersion != null ? deserializeAws_json1_1TableVersion(output.TableVersion, context) : undefined,
  } as any;
};

const deserializeAws_json1_1GetTableVersionsList = (output: any, context: __SerdeContext): TableVersion[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1TableVersion(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1GetTableVersionsResponse = (
  output: any,
  context: __SerdeContext
): GetTableVersionsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    TableVersions:
      output.TableVersions != null
        ? deserializeAws_json1_1GetTableVersionsList(output.TableVersions, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetTagsResponse = (output: any, context: __SerdeContext): GetTagsResponse => {
  return {
    Tags: output.Tags != null ? deserializeAws_json1_1TagsMap(output.Tags, context) : undefined,
  } as any;
};

const deserializeAws_json1_1GetTriggerResponse = (output: any, context: __SerdeContext): GetTriggerResponse => {
  return {
    Trigger: output.Trigger != null ? deserializeAws_json1_1Trigger(output.Trigger, context) : undefined,
  } as any;
};

const deserializeAws_json1_1GetTriggersResponse = (output: any, context: __SerdeContext): GetTriggersResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Triggers: output.Triggers != null ? deserializeAws_json1_1TriggerList(output.Triggers, context) : undefined,
  } as any;
};

const deserializeAws_json1_1GetUnfilteredPartitionMetadataResponse = (
  output: any,
  context: __SerdeContext
): GetUnfilteredPartitionMetadataResponse => {
  return {
    AuthorizedColumns:
      output.AuthorizedColumns != null
        ? deserializeAws_json1_1NameStringList(output.AuthorizedColumns, context)
        : undefined,
    IsRegisteredWithLakeFormation: __expectBoolean(output.IsRegisteredWithLakeFormation),
    Partition: output.Partition != null ? deserializeAws_json1_1Partition(output.Partition, context) : undefined,
  } as any;
};

const deserializeAws_json1_1GetUnfilteredPartitionsMetadataResponse = (
  output: any,
  context: __SerdeContext
): GetUnfilteredPartitionsMetadataResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    UnfilteredPartitions:
      output.UnfilteredPartitions != null
        ? deserializeAws_json1_1UnfilteredPartitionList(output.UnfilteredPartitions, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetUnfilteredTableMetadataResponse = (
  output: any,
  context: __SerdeContext
): GetUnfilteredTableMetadataResponse => {
  return {
    AuthorizedColumns:
      output.AuthorizedColumns != null
        ? deserializeAws_json1_1NameStringList(output.AuthorizedColumns, context)
        : undefined,
    CellFilters:
      output.CellFilters != null ? deserializeAws_json1_1ColumnRowFilterList(output.CellFilters, context) : undefined,
    IsRegisteredWithLakeFormation: __expectBoolean(output.IsRegisteredWithLakeFormation),
    Table: output.Table != null ? deserializeAws_json1_1Table(output.Table, context) : undefined,
  } as any;
};

const deserializeAws_json1_1GetUserDefinedFunctionResponse = (
  output: any,
  context: __SerdeContext
): GetUserDefinedFunctionResponse => {
  return {
    UserDefinedFunction:
      output.UserDefinedFunction != null
        ? deserializeAws_json1_1UserDefinedFunction(output.UserDefinedFunction, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetUserDefinedFunctionsResponse = (
  output: any,
  context: __SerdeContext
): GetUserDefinedFunctionsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    UserDefinedFunctions:
      output.UserDefinedFunctions != null
        ? deserializeAws_json1_1UserDefinedFunctionList(output.UserDefinedFunctions, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetWorkflowResponse = (output: any, context: __SerdeContext): GetWorkflowResponse => {
  return {
    Workflow: output.Workflow != null ? deserializeAws_json1_1Workflow(output.Workflow, context) : undefined,
  } as any;
};

const deserializeAws_json1_1GetWorkflowRunPropertiesResponse = (
  output: any,
  context: __SerdeContext
): GetWorkflowRunPropertiesResponse => {
  return {
    RunProperties:
      output.RunProperties != null
        ? deserializeAws_json1_1WorkflowRunProperties(output.RunProperties, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetWorkflowRunResponse = (output: any, context: __SerdeContext): GetWorkflowRunResponse => {
  return {
    Run: output.Run != null ? deserializeAws_json1_1WorkflowRun(output.Run, context) : undefined,
  } as any;
};

const deserializeAws_json1_1GetWorkflowRunsResponse = (
  output: any,
  context: __SerdeContext
): GetWorkflowRunsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Runs: output.Runs != null ? deserializeAws_json1_1WorkflowRuns(output.Runs, context) : undefined,
  } as any;
};

const deserializeAws_json1_1GlueEncryptionException = (
  output: any,
  context: __SerdeContext
): GlueEncryptionException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1GluePolicy = (output: any, context: __SerdeContext): GluePolicy => {
  return {
    CreateTime:
      output.CreateTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreateTime))) : undefined,
    PolicyHash: __expectString(output.PolicyHash),
    PolicyInJson: __expectString(output.PolicyInJson),
    UpdateTime:
      output.UpdateTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.UpdateTime))) : undefined,
  } as any;
};

const deserializeAws_json1_1GlueSchema = (output: any, context: __SerdeContext): GlueSchema => {
  return {
    Columns:
      output.Columns != null ? deserializeAws_json1_1GlueStudioSchemaColumnList(output.Columns, context) : undefined,
  } as any;
};

const deserializeAws_json1_1GlueSchemas = (output: any, context: __SerdeContext): GlueSchema[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1GlueSchema(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1GlueStudioPathList = (output: any, context: __SerdeContext): string[][] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1EnclosedInStringProperties(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1GlueStudioSchemaColumn = (output: any, context: __SerdeContext): GlueStudioSchemaColumn => {
  return {
    Name: __expectString(output.Name),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_json1_1GlueStudioSchemaColumnList = (
  output: any,
  context: __SerdeContext
): GlueStudioSchemaColumn[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1GlueStudioSchemaColumn(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1GlueTable = (output: any, context: __SerdeContext): GlueTable => {
  return {
    CatalogId: __expectString(output.CatalogId),
    ConnectionName: __expectString(output.ConnectionName),
    DatabaseName: __expectString(output.DatabaseName),
    TableName: __expectString(output.TableName),
  } as any;
};

const deserializeAws_json1_1GlueTables = (output: any, context: __SerdeContext): GlueTable[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1GlueTable(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1GovernedCatalogSource = (output: any, context: __SerdeContext): GovernedCatalogSource => {
  return {
    AdditionalOptions:
      output.AdditionalOptions != null
        ? deserializeAws_json1_1S3SourceAdditionalOptions(output.AdditionalOptions, context)
        : undefined,
    Database: __expectString(output.Database),
    Name: __expectString(output.Name),
    PartitionPredicate: __expectString(output.PartitionPredicate),
    Table: __expectString(output.Table),
  } as any;
};

const deserializeAws_json1_1GovernedCatalogTarget = (output: any, context: __SerdeContext): GovernedCatalogTarget => {
  return {
    Database: __expectString(output.Database),
    Inputs: output.Inputs != null ? deserializeAws_json1_1OneInput(output.Inputs, context) : undefined,
    Name: __expectString(output.Name),
    PartitionKeys:
      output.PartitionKeys != null
        ? deserializeAws_json1_1GlueStudioPathList(output.PartitionKeys, context)
        : undefined,
    SchemaChangePolicy:
      output.SchemaChangePolicy != null
        ? deserializeAws_json1_1CatalogSchemaChangePolicy(output.SchemaChangePolicy, context)
        : undefined,
    Table: __expectString(output.Table),
  } as any;
};

const deserializeAws_json1_1GrokClassifier = (output: any, context: __SerdeContext): GrokClassifier => {
  return {
    Classification: __expectString(output.Classification),
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    CustomPatterns: __expectString(output.CustomPatterns),
    GrokPattern: __expectString(output.GrokPattern),
    LastUpdated:
      output.LastUpdated != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdated)))
        : undefined,
    Name: __expectString(output.Name),
    Version: __expectLong(output.Version),
  } as any;
};

const deserializeAws_json1_1IdempotentParameterMismatchException = (
  output: any,
  context: __SerdeContext
): IdempotentParameterMismatchException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1IllegalBlueprintStateException = (
  output: any,
  context: __SerdeContext
): IllegalBlueprintStateException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1IllegalSessionStateException = (
  output: any,
  context: __SerdeContext
): IllegalSessionStateException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1IllegalWorkflowStateException = (
  output: any,
  context: __SerdeContext
): IllegalWorkflowStateException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1ImportCatalogToGlueResponse = (
  output: any,
  context: __SerdeContext
): ImportCatalogToGlueResponse => {
  return {} as any;
};

const deserializeAws_json1_1ImportLabelsTaskRunProperties = (
  output: any,
  context: __SerdeContext
): ImportLabelsTaskRunProperties => {
  return {
    InputS3Path: __expectString(output.InputS3Path),
    Replace: __expectBoolean(output.Replace),
  } as any;
};

const deserializeAws_json1_1InternalServiceException = (
  output: any,
  context: __SerdeContext
): InternalServiceException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InvalidInputException = (output: any, context: __SerdeContext): InvalidInputException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InvalidStateException = (output: any, context: __SerdeContext): InvalidStateException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1JDBCConnectorOptions = (output: any, context: __SerdeContext): JDBCConnectorOptions => {
  return {
    DataTypeMapping:
      output.DataTypeMapping != null
        ? deserializeAws_json1_1JDBCDataTypeMapping(output.DataTypeMapping, context)
        : undefined,
    FilterPredicate: __expectString(output.FilterPredicate),
    JobBookmarkKeys:
      output.JobBookmarkKeys != null
        ? deserializeAws_json1_1EnclosedInStringProperties(output.JobBookmarkKeys, context)
        : undefined,
    JobBookmarkKeysSortOrder: __expectString(output.JobBookmarkKeysSortOrder),
    LowerBound: __expectLong(output.LowerBound),
    NumPartitions: __expectLong(output.NumPartitions),
    PartitionColumn: __expectString(output.PartitionColumn),
    UpperBound: __expectLong(output.UpperBound),
  } as any;
};

const deserializeAws_json1_1JDBCConnectorSource = (output: any, context: __SerdeContext): JDBCConnectorSource => {
  return {
    AdditionalOptions:
      output.AdditionalOptions != null
        ? deserializeAws_json1_1JDBCConnectorOptions(output.AdditionalOptions, context)
        : undefined,
    ConnectionName: __expectString(output.ConnectionName),
    ConnectionTable: __expectString(output.ConnectionTable),
    ConnectionType: __expectString(output.ConnectionType),
    ConnectorName: __expectString(output.ConnectorName),
    Name: __expectString(output.Name),
    OutputSchemas:
      output.OutputSchemas != null ? deserializeAws_json1_1GlueSchemas(output.OutputSchemas, context) : undefined,
    Query: __expectString(output.Query),
  } as any;
};

const deserializeAws_json1_1JDBCConnectorTarget = (output: any, context: __SerdeContext): JDBCConnectorTarget => {
  return {
    AdditionalOptions:
      output.AdditionalOptions != null
        ? deserializeAws_json1_1AdditionalOptions(output.AdditionalOptions, context)
        : undefined,
    ConnectionName: __expectString(output.ConnectionName),
    ConnectionTable: __expectString(output.ConnectionTable),
    ConnectionType: __expectString(output.ConnectionType),
    ConnectorName: __expectString(output.ConnectorName),
    Inputs: output.Inputs != null ? deserializeAws_json1_1OneInput(output.Inputs, context) : undefined,
    Name: __expectString(output.Name),
    OutputSchemas:
      output.OutputSchemas != null ? deserializeAws_json1_1GlueSchemas(output.OutputSchemas, context) : undefined,
  } as any;
};

const deserializeAws_json1_1JDBCDataTypeMapping = (
  output: any,
  context: __SerdeContext
): Record<string, GlueRecordType | string> => {
  return Object.entries(output).reduce(
    (acc: Record<string, GlueRecordType | string>, [key, value]: [JDBCDataType | string, any]) => {
      if (value === null) {
        return acc;
      }
      return {
        ...acc,
        [key]: __expectString(value) as any,
      };
    },
    {}
  );
};

const deserializeAws_json1_1JdbcTarget = (output: any, context: __SerdeContext): JdbcTarget => {
  return {
    ConnectionName: __expectString(output.ConnectionName),
    Exclusions: output.Exclusions != null ? deserializeAws_json1_1PathList(output.Exclusions, context) : undefined,
    Path: __expectString(output.Path),
  } as any;
};

const deserializeAws_json1_1JdbcTargetList = (output: any, context: __SerdeContext): JdbcTarget[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1JdbcTarget(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1Job = (output: any, context: __SerdeContext): Job => {
  return {
    AllocatedCapacity: __expectInt32(output.AllocatedCapacity),
    CodeGenConfigurationNodes:
      output.CodeGenConfigurationNodes != null
        ? deserializeAws_json1_1CodeGenConfigurationNodes(output.CodeGenConfigurationNodes, context)
        : undefined,
    Command: output.Command != null ? deserializeAws_json1_1JobCommand(output.Command, context) : undefined,
    Connections:
      output.Connections != null ? deserializeAws_json1_1ConnectionsList(output.Connections, context) : undefined,
    CreatedOn:
      output.CreatedOn != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedOn))) : undefined,
    DefaultArguments:
      output.DefaultArguments != null ? deserializeAws_json1_1GenericMap(output.DefaultArguments, context) : undefined,
    Description: __expectString(output.Description),
    ExecutionProperty:
      output.ExecutionProperty != null
        ? deserializeAws_json1_1ExecutionProperty(output.ExecutionProperty, context)
        : undefined,
    GlueVersion: __expectString(output.GlueVersion),
    LastModifiedOn:
      output.LastModifiedOn != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModifiedOn)))
        : undefined,
    LogUri: __expectString(output.LogUri),
    MaxCapacity: __limitedParseDouble(output.MaxCapacity),
    MaxRetries: __expectInt32(output.MaxRetries),
    Name: __expectString(output.Name),
    NonOverridableArguments:
      output.NonOverridableArguments != null
        ? deserializeAws_json1_1GenericMap(output.NonOverridableArguments, context)
        : undefined,
    NotificationProperty:
      output.NotificationProperty != null
        ? deserializeAws_json1_1NotificationProperty(output.NotificationProperty, context)
        : undefined,
    NumberOfWorkers: __expectInt32(output.NumberOfWorkers),
    Role: __expectString(output.Role),
    SecurityConfiguration: __expectString(output.SecurityConfiguration),
    Timeout: __expectInt32(output.Timeout),
    WorkerType: __expectString(output.WorkerType),
  } as any;
};

const deserializeAws_json1_1JobBookmarkEntry = (output: any, context: __SerdeContext): JobBookmarkEntry => {
  return {
    Attempt: __expectInt32(output.Attempt),
    JobBookmark: __expectString(output.JobBookmark),
    JobName: __expectString(output.JobName),
    PreviousRunId: __expectString(output.PreviousRunId),
    Run: __expectInt32(output.Run),
    RunId: __expectString(output.RunId),
    Version: __expectInt32(output.Version),
  } as any;
};

const deserializeAws_json1_1JobBookmarksEncryption = (output: any, context: __SerdeContext): JobBookmarksEncryption => {
  return {
    JobBookmarksEncryptionMode: __expectString(output.JobBookmarksEncryptionMode),
    KmsKeyArn: __expectString(output.KmsKeyArn),
  } as any;
};

const deserializeAws_json1_1JobCommand = (output: any, context: __SerdeContext): JobCommand => {
  return {
    Name: __expectString(output.Name),
    PythonVersion: __expectString(output.PythonVersion),
    ScriptLocation: __expectString(output.ScriptLocation),
  } as any;
};

const deserializeAws_json1_1JobList = (output: any, context: __SerdeContext): Job[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Job(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1JobNameList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_json1_1JobNodeDetails = (output: any, context: __SerdeContext): JobNodeDetails => {
  return {
    JobRuns: output.JobRuns != null ? deserializeAws_json1_1JobRunList(output.JobRuns, context) : undefined,
  } as any;
};

const deserializeAws_json1_1JobRun = (output: any, context: __SerdeContext): JobRun => {
  return {
    AllocatedCapacity: __expectInt32(output.AllocatedCapacity),
    Arguments: output.Arguments != null ? deserializeAws_json1_1GenericMap(output.Arguments, context) : undefined,
    Attempt: __expectInt32(output.Attempt),
    CompletedOn:
      output.CompletedOn != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CompletedOn)))
        : undefined,
    DPUSeconds: __limitedParseDouble(output.DPUSeconds),
    ErrorMessage: __expectString(output.ErrorMessage),
    ExecutionTime: __expectInt32(output.ExecutionTime),
    GlueVersion: __expectString(output.GlueVersion),
    Id: __expectString(output.Id),
    JobName: __expectString(output.JobName),
    JobRunState: __expectString(output.JobRunState),
    LastModifiedOn:
      output.LastModifiedOn != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModifiedOn)))
        : undefined,
    LogGroupName: __expectString(output.LogGroupName),
    MaxCapacity: __limitedParseDouble(output.MaxCapacity),
    NotificationProperty:
      output.NotificationProperty != null
        ? deserializeAws_json1_1NotificationProperty(output.NotificationProperty, context)
        : undefined,
    NumberOfWorkers: __expectInt32(output.NumberOfWorkers),
    PredecessorRuns:
      output.PredecessorRuns != null
        ? deserializeAws_json1_1PredecessorList(output.PredecessorRuns, context)
        : undefined,
    PreviousRunId: __expectString(output.PreviousRunId),
    SecurityConfiguration: __expectString(output.SecurityConfiguration),
    StartedOn:
      output.StartedOn != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartedOn))) : undefined,
    Timeout: __expectInt32(output.Timeout),
    TriggerName: __expectString(output.TriggerName),
    WorkerType: __expectString(output.WorkerType),
  } as any;
};

const deserializeAws_json1_1JobRunList = (output: any, context: __SerdeContext): JobRun[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1JobRun(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1Join = (output: any, context: __SerdeContext): Join => {
  return {
    Columns: output.Columns != null ? deserializeAws_json1_1JoinColumns(output.Columns, context) : undefined,
    Inputs: output.Inputs != null ? deserializeAws_json1_1TwoInputs(output.Inputs, context) : undefined,
    JoinType: __expectString(output.JoinType),
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_json1_1JoinColumn = (output: any, context: __SerdeContext): JoinColumn => {
  return {
    From: __expectString(output.From),
    Keys: output.Keys != null ? deserializeAws_json1_1GlueStudioPathList(output.Keys, context) : undefined,
  } as any;
};

const deserializeAws_json1_1JoinColumns = (output: any, context: __SerdeContext): JoinColumn[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1JoinColumn(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1JsonClassifier = (output: any, context: __SerdeContext): JsonClassifier => {
  return {
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    JsonPath: __expectString(output.JsonPath),
    LastUpdated:
      output.LastUpdated != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdated)))
        : undefined,
    Name: __expectString(output.Name),
    Version: __expectLong(output.Version),
  } as any;
};

const deserializeAws_json1_1KafkaStreamingSourceOptions = (
  output: any,
  context: __SerdeContext
): KafkaStreamingSourceOptions => {
  return {
    Assign: __expectString(output.Assign),
    BootstrapServers: __expectString(output.BootstrapServers),
    Classification: __expectString(output.Classification),
    ConnectionName: __expectString(output.ConnectionName),
    Delimiter: __expectString(output.Delimiter),
    EndingOffsets: __expectString(output.EndingOffsets),
    MaxOffsetsPerTrigger: __expectLong(output.MaxOffsetsPerTrigger),
    MinPartitions: __expectInt32(output.MinPartitions),
    NumRetries: __expectInt32(output.NumRetries),
    PollTimeoutMs: __expectLong(output.PollTimeoutMs),
    RetryIntervalMs: __expectLong(output.RetryIntervalMs),
    SecurityProtocol: __expectString(output.SecurityProtocol),
    StartingOffsets: __expectString(output.StartingOffsets),
    SubscribePattern: __expectString(output.SubscribePattern),
    TopicName: __expectString(output.TopicName),
  } as any;
};

const deserializeAws_json1_1KeySchemaElement = (output: any, context: __SerdeContext): KeySchemaElement => {
  return {
    Name: __expectString(output.Name),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_json1_1KeySchemaElementList = (output: any, context: __SerdeContext): KeySchemaElement[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1KeySchemaElement(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1KinesisStreamingSourceOptions = (
  output: any,
  context: __SerdeContext
): KinesisStreamingSourceOptions => {
  return {
    AddIdleTimeBetweenReads: __expectBoolean(output.AddIdleTimeBetweenReads),
    AvoidEmptyBatches: __expectBoolean(output.AvoidEmptyBatches),
    Classification: __expectString(output.Classification),
    Delimiter: __expectString(output.Delimiter),
    DescribeShardInterval: __expectLong(output.DescribeShardInterval),
    EndpointUrl: __expectString(output.EndpointUrl),
    IdleTimeBetweenReadsInMs: __expectLong(output.IdleTimeBetweenReadsInMs),
    MaxFetchRecordsPerShard: __expectLong(output.MaxFetchRecordsPerShard),
    MaxFetchTimeInMs: __expectLong(output.MaxFetchTimeInMs),
    MaxRecordPerRead: __expectLong(output.MaxRecordPerRead),
    MaxRetryIntervalMs: __expectLong(output.MaxRetryIntervalMs),
    NumRetries: __expectInt32(output.NumRetries),
    RetryIntervalMs: __expectLong(output.RetryIntervalMs),
    RoleArn: __expectString(output.RoleArn),
    RoleSessionName: __expectString(output.RoleSessionName),
    StartingPosition: __expectString(output.StartingPosition),
    StreamArn: __expectString(output.StreamArn),
    StreamName: __expectString(output.StreamName),
  } as any;
};

const deserializeAws_json1_1LabelingSetGenerationTaskRunProperties = (
  output: any,
  context: __SerdeContext
): LabelingSetGenerationTaskRunProperties => {
  return {
    OutputS3Path: __expectString(output.OutputS3Path),
  } as any;
};

const deserializeAws_json1_1LakeFormationConfiguration = (
  output: any,
  context: __SerdeContext
): LakeFormationConfiguration => {
  return {
    AccountId: __expectString(output.AccountId),
    UseLakeFormationCredentials: __expectBoolean(output.UseLakeFormationCredentials),
  } as any;
};

const deserializeAws_json1_1LastActiveDefinition = (output: any, context: __SerdeContext): LastActiveDefinition => {
  return {
    BlueprintLocation: __expectString(output.BlueprintLocation),
    BlueprintServiceLocation: __expectString(output.BlueprintServiceLocation),
    Description: __expectString(output.Description),
    LastModifiedOn:
      output.LastModifiedOn != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModifiedOn)))
        : undefined,
    ParameterSpec: __expectString(output.ParameterSpec),
  } as any;
};

const deserializeAws_json1_1LastCrawlInfo = (output: any, context: __SerdeContext): LastCrawlInfo => {
  return {
    ErrorMessage: __expectString(output.ErrorMessage),
    LogGroup: __expectString(output.LogGroup),
    LogStream: __expectString(output.LogStream),
    MessagePrefix: __expectString(output.MessagePrefix),
    StartTime:
      output.StartTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartTime))) : undefined,
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_1LimitedPathList = (output: any, context: __SerdeContext): string[][] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1LimitedStringList(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1LimitedStringList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_json1_1LineageConfiguration = (output: any, context: __SerdeContext): LineageConfiguration => {
  return {
    CrawlerLineageSettings: __expectString(output.CrawlerLineageSettings),
  } as any;
};

const deserializeAws_json1_1ListBlueprintsResponse = (output: any, context: __SerdeContext): ListBlueprintsResponse => {
  return {
    Blueprints:
      output.Blueprints != null ? deserializeAws_json1_1BlueprintNames(output.Blueprints, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListCrawlersResponse = (output: any, context: __SerdeContext): ListCrawlersResponse => {
  return {
    CrawlerNames:
      output.CrawlerNames != null ? deserializeAws_json1_1CrawlerNameList(output.CrawlerNames, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListCrawlsResponse = (output: any, context: __SerdeContext): ListCrawlsResponse => {
  return {
    Crawls: output.Crawls != null ? deserializeAws_json1_1CrawlerHistoryList(output.Crawls, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListCustomEntityTypesResponse = (
  output: any,
  context: __SerdeContext
): ListCustomEntityTypesResponse => {
  return {
    CustomEntityTypes:
      output.CustomEntityTypes != null
        ? deserializeAws_json1_1CustomEntityTypes(output.CustomEntityTypes, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListDevEndpointsResponse = (
  output: any,
  context: __SerdeContext
): ListDevEndpointsResponse => {
  return {
    DevEndpointNames:
      output.DevEndpointNames != null
        ? deserializeAws_json1_1DevEndpointNameList(output.DevEndpointNames, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListJobsResponse = (output: any, context: __SerdeContext): ListJobsResponse => {
  return {
    JobNames: output.JobNames != null ? deserializeAws_json1_1JobNameList(output.JobNames, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListMLTransformsResponse = (
  output: any,
  context: __SerdeContext
): ListMLTransformsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    TransformIds:
      output.TransformIds != null ? deserializeAws_json1_1TransformIdList(output.TransformIds, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ListRegistriesResponse = (output: any, context: __SerdeContext): ListRegistriesResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Registries:
      output.Registries != null ? deserializeAws_json1_1RegistryListDefinition(output.Registries, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ListSchemasResponse = (output: any, context: __SerdeContext): ListSchemasResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Schemas: output.Schemas != null ? deserializeAws_json1_1SchemaListDefinition(output.Schemas, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ListSchemaVersionsResponse = (
  output: any,
  context: __SerdeContext
): ListSchemaVersionsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Schemas: output.Schemas != null ? deserializeAws_json1_1SchemaVersionList(output.Schemas, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ListSessionsResponse = (output: any, context: __SerdeContext): ListSessionsResponse => {
  return {
    Ids: output.Ids != null ? deserializeAws_json1_1SessionIdList(output.Ids, context) : undefined,
    NextToken: __expectString(output.NextToken),
    Sessions: output.Sessions != null ? deserializeAws_json1_1SessionList(output.Sessions, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ListStatementsResponse = (output: any, context: __SerdeContext): ListStatementsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Statements: output.Statements != null ? deserializeAws_json1_1StatementList(output.Statements, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ListTriggersResponse = (output: any, context: __SerdeContext): ListTriggersResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    TriggerNames:
      output.TriggerNames != null ? deserializeAws_json1_1TriggerNameList(output.TriggerNames, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ListWorkflowsResponse = (output: any, context: __SerdeContext): ListWorkflowsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Workflows: output.Workflows != null ? deserializeAws_json1_1WorkflowNames(output.Workflows, context) : undefined,
  } as any;
};

const deserializeAws_json1_1LocationMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: __expectString(value) as any,
    };
  }, {});
};

const deserializeAws_json1_1LocationStringList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_json1_1LongColumnStatisticsData = (
  output: any,
  context: __SerdeContext
): LongColumnStatisticsData => {
  return {
    MaximumValue: __expectLong(output.MaximumValue),
    MinimumValue: __expectLong(output.MinimumValue),
    NumberOfDistinctValues: __expectLong(output.NumberOfDistinctValues),
    NumberOfNulls: __expectLong(output.NumberOfNulls),
  } as any;
};

const deserializeAws_json1_1ManyInputs = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_json1_1Mapping = (output: any, context: __SerdeContext): Mapping => {
  return {
    Children: output.Children != null ? deserializeAws_json1_1Mappings(output.Children, context) : undefined,
    Dropped: __expectBoolean(output.Dropped),
    FromPath:
      output.FromPath != null ? deserializeAws_json1_1EnclosedInStringProperties(output.FromPath, context) : undefined,
    FromType: __expectString(output.FromType),
    ToKey: __expectString(output.ToKey),
    ToType: __expectString(output.ToType),
  } as any;
};

const deserializeAws_json1_1MappingEntry = (output: any, context: __SerdeContext): MappingEntry => {
  return {
    SourcePath: __expectString(output.SourcePath),
    SourceTable: __expectString(output.SourceTable),
    SourceType: __expectString(output.SourceType),
    TargetPath: __expectString(output.TargetPath),
    TargetTable: __expectString(output.TargetTable),
    TargetType: __expectString(output.TargetType),
  } as any;
};

const deserializeAws_json1_1MappingList = (output: any, context: __SerdeContext): MappingEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1MappingEntry(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1Mappings = (output: any, context: __SerdeContext): Mapping[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Mapping(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1MapValue = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: __expectString(value) as any,
    };
  }, {});
};

const deserializeAws_json1_1MatchCriteria = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_json1_1Merge = (output: any, context: __SerdeContext): Merge => {
  return {
    Inputs: output.Inputs != null ? deserializeAws_json1_1TwoInputs(output.Inputs, context) : undefined,
    Name: __expectString(output.Name),
    PrimaryKeys:
      output.PrimaryKeys != null ? deserializeAws_json1_1GlueStudioPathList(output.PrimaryKeys, context) : undefined,
    Source: __expectString(output.Source),
  } as any;
};

const deserializeAws_json1_1MetadataInfo = (output: any, context: __SerdeContext): MetadataInfo => {
  return {
    CreatedTime: __expectString(output.CreatedTime),
    MetadataValue: __expectString(output.MetadataValue),
    OtherMetadataValueList:
      output.OtherMetadataValueList != null
        ? deserializeAws_json1_1OtherMetadataValueList(output.OtherMetadataValueList, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1MetadataInfoMap = (output: any, context: __SerdeContext): Record<string, MetadataInfo> => {
  return Object.entries(output).reduce((acc: Record<string, MetadataInfo>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: deserializeAws_json1_1MetadataInfo(value, context),
    };
  }, {});
};

const deserializeAws_json1_1MicrosoftSQLServerCatalogSource = (
  output: any,
  context: __SerdeContext
): MicrosoftSQLServerCatalogSource => {
  return {
    Database: __expectString(output.Database),
    Name: __expectString(output.Name),
    Table: __expectString(output.Table),
  } as any;
};

const deserializeAws_json1_1MicrosoftSQLServerCatalogTarget = (
  output: any,
  context: __SerdeContext
): MicrosoftSQLServerCatalogTarget => {
  return {
    Database: __expectString(output.Database),
    Inputs: output.Inputs != null ? deserializeAws_json1_1OneInput(output.Inputs, context) : undefined,
    Name: __expectString(output.Name),
    Table: __expectString(output.Table),
  } as any;
};

const deserializeAws_json1_1MLTransform = (output: any, context: __SerdeContext): MLTransform => {
  return {
    CreatedOn:
      output.CreatedOn != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedOn))) : undefined,
    Description: __expectString(output.Description),
    EvaluationMetrics:
      output.EvaluationMetrics != null
        ? deserializeAws_json1_1EvaluationMetrics(output.EvaluationMetrics, context)
        : undefined,
    GlueVersion: __expectString(output.GlueVersion),
    InputRecordTables:
      output.InputRecordTables != null
        ? deserializeAws_json1_1GlueTables(output.InputRecordTables, context)
        : undefined,
    LabelCount: __expectInt32(output.LabelCount),
    LastModifiedOn:
      output.LastModifiedOn != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModifiedOn)))
        : undefined,
    MaxCapacity: __limitedParseDouble(output.MaxCapacity),
    MaxRetries: __expectInt32(output.MaxRetries),
    Name: __expectString(output.Name),
    NumberOfWorkers: __expectInt32(output.NumberOfWorkers),
    Parameters:
      output.Parameters != null ? deserializeAws_json1_1TransformParameters(output.Parameters, context) : undefined,
    Role: __expectString(output.Role),
    Schema: output.Schema != null ? deserializeAws_json1_1TransformSchema(output.Schema, context) : undefined,
    Status: __expectString(output.Status),
    Timeout: __expectInt32(output.Timeout),
    TransformEncryption:
      output.TransformEncryption != null
        ? deserializeAws_json1_1TransformEncryption(output.TransformEncryption, context)
        : undefined,
    TransformId: __expectString(output.TransformId),
    WorkerType: __expectString(output.WorkerType),
  } as any;
};

const deserializeAws_json1_1MLTransformNotReadyException = (
  output: any,
  context: __SerdeContext
): MLTransformNotReadyException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1MLUserDataEncryption = (output: any, context: __SerdeContext): MLUserDataEncryption => {
  return {
    KmsKeyId: __expectString(output.KmsKeyId),
    MlUserDataEncryptionMode: __expectString(output.MlUserDataEncryptionMode),
  } as any;
};

const deserializeAws_json1_1MongoDBTarget = (output: any, context: __SerdeContext): MongoDBTarget => {
  return {
    ConnectionName: __expectString(output.ConnectionName),
    Path: __expectString(output.Path),
    ScanAll: __expectBoolean(output.ScanAll),
  } as any;
};

const deserializeAws_json1_1MongoDBTargetList = (output: any, context: __SerdeContext): MongoDBTarget[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1MongoDBTarget(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1MySQLCatalogSource = (output: any, context: __SerdeContext): MySQLCatalogSource => {
  return {
    Database: __expectString(output.Database),
    Name: __expectString(output.Name),
    Table: __expectString(output.Table),
  } as any;
};

const deserializeAws_json1_1MySQLCatalogTarget = (output: any, context: __SerdeContext): MySQLCatalogTarget => {
  return {
    Database: __expectString(output.Database),
    Inputs: output.Inputs != null ? deserializeAws_json1_1OneInput(output.Inputs, context) : undefined,
    Name: __expectString(output.Name),
    Table: __expectString(output.Table),
  } as any;
};

const deserializeAws_json1_1NameStringList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_json1_1Node = (output: any, context: __SerdeContext): Node => {
  return {
    CrawlerDetails:
      output.CrawlerDetails != null
        ? deserializeAws_json1_1CrawlerNodeDetails(output.CrawlerDetails, context)
        : undefined,
    JobDetails:
      output.JobDetails != null ? deserializeAws_json1_1JobNodeDetails(output.JobDetails, context) : undefined,
    Name: __expectString(output.Name),
    TriggerDetails:
      output.TriggerDetails != null
        ? deserializeAws_json1_1TriggerNodeDetails(output.TriggerDetails, context)
        : undefined,
    Type: __expectString(output.Type),
    UniqueId: __expectString(output.UniqueId),
  } as any;
};

const deserializeAws_json1_1NodeIdList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_json1_1NodeList = (output: any, context: __SerdeContext): Node[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Node(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1NoScheduleException = (output: any, context: __SerdeContext): NoScheduleException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1NotificationProperty = (output: any, context: __SerdeContext): NotificationProperty => {
  return {
    NotifyDelayAfter: __expectInt32(output.NotifyDelayAfter),
  } as any;
};

const deserializeAws_json1_1NullCheckBoxList = (output: any, context: __SerdeContext): NullCheckBoxList => {
  return {
    IsEmpty: __expectBoolean(output.IsEmpty),
    IsNegOne: __expectBoolean(output.IsNegOne),
    IsNullString: __expectBoolean(output.IsNullString),
  } as any;
};

const deserializeAws_json1_1NullValueField = (output: any, context: __SerdeContext): NullValueField => {
  return {
    Datatype: output.Datatype != null ? deserializeAws_json1_1Datatype(output.Datatype, context) : undefined,
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_json1_1NullValueFields = (output: any, context: __SerdeContext): NullValueField[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1NullValueField(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1OneInput = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_json1_1OperationTimeoutException = (
  output: any,
  context: __SerdeContext
): OperationTimeoutException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1OracleSQLCatalogSource = (output: any, context: __SerdeContext): OracleSQLCatalogSource => {
  return {
    Database: __expectString(output.Database),
    Name: __expectString(output.Name),
    Table: __expectString(output.Table),
  } as any;
};

const deserializeAws_json1_1OracleSQLCatalogTarget = (output: any, context: __SerdeContext): OracleSQLCatalogTarget => {
  return {
    Database: __expectString(output.Database),
    Inputs: output.Inputs != null ? deserializeAws_json1_1OneInput(output.Inputs, context) : undefined,
    Name: __expectString(output.Name),
    Table: __expectString(output.Table),
  } as any;
};

const deserializeAws_json1_1OrchestrationArgumentsMap = (
  output: any,
  context: __SerdeContext
): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: __expectString(value) as any,
    };
  }, {});
};

const deserializeAws_json1_1OrchestrationStringList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_json1_1Order = (output: any, context: __SerdeContext): Order => {
  return {
    Column: __expectString(output.Column),
    SortOrder: __expectInt32(output.SortOrder),
  } as any;
};

const deserializeAws_json1_1OrderList = (output: any, context: __SerdeContext): Order[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Order(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1OtherMetadataValueList = (
  output: any,
  context: __SerdeContext
): OtherMetadataValueListItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1OtherMetadataValueListItem(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1OtherMetadataValueListItem = (
  output: any,
  context: __SerdeContext
): OtherMetadataValueListItem => {
  return {
    CreatedTime: __expectString(output.CreatedTime),
    MetadataValue: __expectString(output.MetadataValue),
  } as any;
};

const deserializeAws_json1_1ParametersMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: __expectString(value) as any,
    };
  }, {});
};

const deserializeAws_json1_1Partition = (output: any, context: __SerdeContext): Partition => {
  return {
    CatalogId: __expectString(output.CatalogId),
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    DatabaseName: __expectString(output.DatabaseName),
    LastAccessTime:
      output.LastAccessTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastAccessTime)))
        : undefined,
    LastAnalyzedTime:
      output.LastAnalyzedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastAnalyzedTime)))
        : undefined,
    Parameters: output.Parameters != null ? deserializeAws_json1_1ParametersMap(output.Parameters, context) : undefined,
    StorageDescriptor:
      output.StorageDescriptor != null
        ? deserializeAws_json1_1StorageDescriptor(output.StorageDescriptor, context)
        : undefined,
    TableName: __expectString(output.TableName),
    Values: output.Values != null ? deserializeAws_json1_1ValueStringList(output.Values, context) : undefined,
  } as any;
};

const deserializeAws_json1_1PartitionError = (output: any, context: __SerdeContext): PartitionError => {
  return {
    ErrorDetail:
      output.ErrorDetail != null ? deserializeAws_json1_1ErrorDetail(output.ErrorDetail, context) : undefined,
    PartitionValues:
      output.PartitionValues != null
        ? deserializeAws_json1_1ValueStringList(output.PartitionValues, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1PartitionErrors = (output: any, context: __SerdeContext): PartitionError[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1PartitionError(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1PartitionIndexDescriptor = (
  output: any,
  context: __SerdeContext
): PartitionIndexDescriptor => {
  return {
    BackfillErrors:
      output.BackfillErrors != null ? deserializeAws_json1_1BackfillErrors(output.BackfillErrors, context) : undefined,
    IndexName: __expectString(output.IndexName),
    IndexStatus: __expectString(output.IndexStatus),
    Keys: output.Keys != null ? deserializeAws_json1_1KeySchemaElementList(output.Keys, context) : undefined,
  } as any;
};

const deserializeAws_json1_1PartitionIndexDescriptorList = (
  output: any,
  context: __SerdeContext
): PartitionIndexDescriptor[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1PartitionIndexDescriptor(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1PartitionList = (output: any, context: __SerdeContext): Partition[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Partition(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1PartitionValueList = (output: any, context: __SerdeContext): PartitionValueList => {
  return {
    Values: output.Values != null ? deserializeAws_json1_1ValueStringList(output.Values, context) : undefined,
  } as any;
};

const deserializeAws_json1_1PathList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_json1_1PermissionList = (output: any, context: __SerdeContext): (Permission | string)[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_json1_1PermissionTypeMismatchException = (
  output: any,
  context: __SerdeContext
): PermissionTypeMismatchException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1PhysicalConnectionRequirements = (
  output: any,
  context: __SerdeContext
): PhysicalConnectionRequirements => {
  return {
    AvailabilityZone: __expectString(output.AvailabilityZone),
    SecurityGroupIdList:
      output.SecurityGroupIdList != null
        ? deserializeAws_json1_1SecurityGroupIdList(output.SecurityGroupIdList, context)
        : undefined,
    SubnetId: __expectString(output.SubnetId),
  } as any;
};

const deserializeAws_json1_1PIIDetection = (output: any, context: __SerdeContext): PIIDetection => {
  return {
    EntityTypesToDetect:
      output.EntityTypesToDetect != null
        ? deserializeAws_json1_1EnclosedInStringProperties(output.EntityTypesToDetect, context)
        : undefined,
    Inputs: output.Inputs != null ? deserializeAws_json1_1OneInput(output.Inputs, context) : undefined,
    MaskValue: __expectString(output.MaskValue),
    Name: __expectString(output.Name),
    OutputColumnName: __expectString(output.OutputColumnName),
    PiiType: __expectString(output.PiiType),
    SampleFraction: __limitedParseDouble(output.SampleFraction),
    ThresholdFraction: __limitedParseDouble(output.ThresholdFraction),
  } as any;
};

const deserializeAws_json1_1PostgreSQLCatalogSource = (
  output: any,
  context: __SerdeContext
): PostgreSQLCatalogSource => {
  return {
    Database: __expectString(output.Database),
    Name: __expectString(output.Name),
    Table: __expectString(output.Table),
  } as any;
};

const deserializeAws_json1_1PostgreSQLCatalogTarget = (
  output: any,
  context: __SerdeContext
): PostgreSQLCatalogTarget => {
  return {
    Database: __expectString(output.Database),
    Inputs: output.Inputs != null ? deserializeAws_json1_1OneInput(output.Inputs, context) : undefined,
    Name: __expectString(output.Name),
    Table: __expectString(output.Table),
  } as any;
};

const deserializeAws_json1_1Predecessor = (output: any, context: __SerdeContext): Predecessor => {
  return {
    JobName: __expectString(output.JobName),
    RunId: __expectString(output.RunId),
  } as any;
};

const deserializeAws_json1_1PredecessorList = (output: any, context: __SerdeContext): Predecessor[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Predecessor(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1Predicate = (output: any, context: __SerdeContext): Predicate => {
  return {
    Conditions: output.Conditions != null ? deserializeAws_json1_1ConditionList(output.Conditions, context) : undefined,
    Logical: __expectString(output.Logical),
  } as any;
};

const deserializeAws_json1_1PrincipalPermissions = (output: any, context: __SerdeContext): PrincipalPermissions => {
  return {
    Permissions:
      output.Permissions != null ? deserializeAws_json1_1PermissionList(output.Permissions, context) : undefined,
    Principal:
      output.Principal != null ? deserializeAws_json1_1DataLakePrincipal(output.Principal, context) : undefined,
  } as any;
};

const deserializeAws_json1_1PrincipalPermissionsList = (
  output: any,
  context: __SerdeContext
): PrincipalPermissions[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1PrincipalPermissions(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1PublicKeysList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_json1_1PutDataCatalogEncryptionSettingsResponse = (
  output: any,
  context: __SerdeContext
): PutDataCatalogEncryptionSettingsResponse => {
  return {} as any;
};

const deserializeAws_json1_1PutResourcePolicyResponse = (
  output: any,
  context: __SerdeContext
): PutResourcePolicyResponse => {
  return {
    PolicyHash: __expectString(output.PolicyHash),
  } as any;
};

const deserializeAws_json1_1PutSchemaVersionMetadataResponse = (
  output: any,
  context: __SerdeContext
): PutSchemaVersionMetadataResponse => {
  return {
    LatestVersion: __expectBoolean(output.LatestVersion),
    MetadataKey: __expectString(output.MetadataKey),
    MetadataValue: __expectString(output.MetadataValue),
    RegistryName: __expectString(output.RegistryName),
    SchemaArn: __expectString(output.SchemaArn),
    SchemaName: __expectString(output.SchemaName),
    SchemaVersionId: __expectString(output.SchemaVersionId),
    VersionNumber: __expectLong(output.VersionNumber),
  } as any;
};

const deserializeAws_json1_1PutWorkflowRunPropertiesResponse = (
  output: any,
  context: __SerdeContext
): PutWorkflowRunPropertiesResponse => {
  return {} as any;
};

const deserializeAws_json1_1QuerySchemaVersionMetadataResponse = (
  output: any,
  context: __SerdeContext
): QuerySchemaVersionMetadataResponse => {
  return {
    MetadataInfoMap:
      output.MetadataInfoMap != null
        ? deserializeAws_json1_1MetadataInfoMap(output.MetadataInfoMap, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
    SchemaVersionId: __expectString(output.SchemaVersionId),
  } as any;
};

const deserializeAws_json1_1RecrawlPolicy = (output: any, context: __SerdeContext): RecrawlPolicy => {
  return {
    RecrawlBehavior: __expectString(output.RecrawlBehavior),
  } as any;
};

const deserializeAws_json1_1RedshiftSource = (output: any, context: __SerdeContext): RedshiftSource => {
  return {
    Database: __expectString(output.Database),
    Name: __expectString(output.Name),
    RedshiftTmpDir: __expectString(output.RedshiftTmpDir),
    Table: __expectString(output.Table),
    TmpDirIAMRole: __expectString(output.TmpDirIAMRole),
  } as any;
};

const deserializeAws_json1_1RedshiftTarget = (output: any, context: __SerdeContext): RedshiftTarget => {
  return {
    Database: __expectString(output.Database),
    Inputs: output.Inputs != null ? deserializeAws_json1_1OneInput(output.Inputs, context) : undefined,
    Name: __expectString(output.Name),
    RedshiftTmpDir: __expectString(output.RedshiftTmpDir),
    Table: __expectString(output.Table),
    TmpDirIAMRole: __expectString(output.TmpDirIAMRole),
    UpsertRedshiftOptions:
      output.UpsertRedshiftOptions != null
        ? deserializeAws_json1_1UpsertRedshiftTargetOptions(output.UpsertRedshiftOptions, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1RegisterSchemaVersionResponse = (
  output: any,
  context: __SerdeContext
): RegisterSchemaVersionResponse => {
  return {
    SchemaVersionId: __expectString(output.SchemaVersionId),
    Status: __expectString(output.Status),
    VersionNumber: __expectLong(output.VersionNumber),
  } as any;
};

const deserializeAws_json1_1RegistryListDefinition = (output: any, context: __SerdeContext): RegistryListItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1RegistryListItem(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1RegistryListItem = (output: any, context: __SerdeContext): RegistryListItem => {
  return {
    CreatedTime: __expectString(output.CreatedTime),
    Description: __expectString(output.Description),
    RegistryArn: __expectString(output.RegistryArn),
    RegistryName: __expectString(output.RegistryName),
    Status: __expectString(output.Status),
    UpdatedTime: __expectString(output.UpdatedTime),
  } as any;
};

const deserializeAws_json1_1RelationalCatalogSource = (
  output: any,
  context: __SerdeContext
): RelationalCatalogSource => {
  return {
    Database: __expectString(output.Database),
    Name: __expectString(output.Name),
    Table: __expectString(output.Table),
  } as any;
};

const deserializeAws_json1_1RemoveSchemaVersionMetadataResponse = (
  output: any,
  context: __SerdeContext
): RemoveSchemaVersionMetadataResponse => {
  return {
    LatestVersion: __expectBoolean(output.LatestVersion),
    MetadataKey: __expectString(output.MetadataKey),
    MetadataValue: __expectString(output.MetadataValue),
    RegistryName: __expectString(output.RegistryName),
    SchemaArn: __expectString(output.SchemaArn),
    SchemaName: __expectString(output.SchemaName),
    SchemaVersionId: __expectString(output.SchemaVersionId),
    VersionNumber: __expectLong(output.VersionNumber),
  } as any;
};

const deserializeAws_json1_1RenameField = (output: any, context: __SerdeContext): RenameField => {
  return {
    Inputs: output.Inputs != null ? deserializeAws_json1_1OneInput(output.Inputs, context) : undefined,
    Name: __expectString(output.Name),
    SourcePath:
      output.SourcePath != null
        ? deserializeAws_json1_1EnclosedInStringProperties(output.SourcePath, context)
        : undefined,
    TargetPath:
      output.TargetPath != null
        ? deserializeAws_json1_1EnclosedInStringProperties(output.TargetPath, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ResetJobBookmarkResponse = (
  output: any,
  context: __SerdeContext
): ResetJobBookmarkResponse => {
  return {
    JobBookmarkEntry:
      output.JobBookmarkEntry != null
        ? deserializeAws_json1_1JobBookmarkEntry(output.JobBookmarkEntry, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ResourceNotReadyException = (
  output: any,
  context: __SerdeContext
): ResourceNotReadyException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1ResourceNumberLimitExceededException = (
  output: any,
  context: __SerdeContext
): ResourceNumberLimitExceededException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1ResourceUri = (output: any, context: __SerdeContext): ResourceUri => {
  return {
    ResourceType: __expectString(output.ResourceType),
    Uri: __expectString(output.Uri),
  } as any;
};

const deserializeAws_json1_1ResourceUriList = (output: any, context: __SerdeContext): ResourceUri[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ResourceUri(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ResumeWorkflowRunResponse = (
  output: any,
  context: __SerdeContext
): ResumeWorkflowRunResponse => {
  return {
    NodeIds: output.NodeIds != null ? deserializeAws_json1_1NodeIdList(output.NodeIds, context) : undefined,
    RunId: __expectString(output.RunId),
  } as any;
};

const deserializeAws_json1_1RunStatementResponse = (output: any, context: __SerdeContext): RunStatementResponse => {
  return {
    Id: __expectInt32(output.Id),
  } as any;
};

const deserializeAws_json1_1S3CatalogSource = (output: any, context: __SerdeContext): S3CatalogSource => {
  return {
    AdditionalOptions:
      output.AdditionalOptions != null
        ? deserializeAws_json1_1S3SourceAdditionalOptions(output.AdditionalOptions, context)
        : undefined,
    Database: __expectString(output.Database),
    Name: __expectString(output.Name),
    PartitionPredicate: __expectString(output.PartitionPredicate),
    Table: __expectString(output.Table),
  } as any;
};

const deserializeAws_json1_1S3CatalogTarget = (output: any, context: __SerdeContext): S3CatalogTarget => {
  return {
    Database: __expectString(output.Database),
    Inputs: output.Inputs != null ? deserializeAws_json1_1OneInput(output.Inputs, context) : undefined,
    Name: __expectString(output.Name),
    PartitionKeys:
      output.PartitionKeys != null
        ? deserializeAws_json1_1GlueStudioPathList(output.PartitionKeys, context)
        : undefined,
    SchemaChangePolicy:
      output.SchemaChangePolicy != null
        ? deserializeAws_json1_1CatalogSchemaChangePolicy(output.SchemaChangePolicy, context)
        : undefined,
    Table: __expectString(output.Table),
  } as any;
};

const deserializeAws_json1_1S3CsvSource = (output: any, context: __SerdeContext): S3CsvSource => {
  return {
    AdditionalOptions:
      output.AdditionalOptions != null
        ? deserializeAws_json1_1S3DirectSourceAdditionalOptions(output.AdditionalOptions, context)
        : undefined,
    CompressionType: __expectString(output.CompressionType),
    Escaper: __expectString(output.Escaper),
    Exclusions:
      output.Exclusions != null
        ? deserializeAws_json1_1EnclosedInStringProperties(output.Exclusions, context)
        : undefined,
    GroupFiles: __expectString(output.GroupFiles),
    GroupSize: __expectString(output.GroupSize),
    MaxBand: __expectInt32(output.MaxBand),
    MaxFilesInBand: __expectInt32(output.MaxFilesInBand),
    Multiline: __expectBoolean(output.Multiline),
    Name: __expectString(output.Name),
    OptimizePerformance: __expectBoolean(output.OptimizePerformance),
    OutputSchemas:
      output.OutputSchemas != null ? deserializeAws_json1_1GlueSchemas(output.OutputSchemas, context) : undefined,
    Paths: output.Paths != null ? deserializeAws_json1_1EnclosedInStringProperties(output.Paths, context) : undefined,
    QuoteChar: __expectString(output.QuoteChar),
    Recurse: __expectBoolean(output.Recurse),
    Separator: __expectString(output.Separator),
    SkipFirst: __expectBoolean(output.SkipFirst),
    WithHeader: __expectBoolean(output.WithHeader),
    WriteHeader: __expectBoolean(output.WriteHeader),
  } as any;
};

const deserializeAws_json1_1S3DirectSourceAdditionalOptions = (
  output: any,
  context: __SerdeContext
): S3DirectSourceAdditionalOptions => {
  return {
    BoundedFiles: __expectLong(output.BoundedFiles),
    BoundedSize: __expectLong(output.BoundedSize),
    EnableSamplePath: __expectBoolean(output.EnableSamplePath),
    SamplePath: __expectString(output.SamplePath),
  } as any;
};

const deserializeAws_json1_1S3DirectTarget = (output: any, context: __SerdeContext): S3DirectTarget => {
  return {
    Compression: __expectString(output.Compression),
    Format: __expectString(output.Format),
    Inputs: output.Inputs != null ? deserializeAws_json1_1OneInput(output.Inputs, context) : undefined,
    Name: __expectString(output.Name),
    PartitionKeys:
      output.PartitionKeys != null
        ? deserializeAws_json1_1GlueStudioPathList(output.PartitionKeys, context)
        : undefined,
    Path: __expectString(output.Path),
    SchemaChangePolicy:
      output.SchemaChangePolicy != null
        ? deserializeAws_json1_1DirectSchemaChangePolicy(output.SchemaChangePolicy, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1S3Encryption = (output: any, context: __SerdeContext): S3Encryption => {
  return {
    KmsKeyArn: __expectString(output.KmsKeyArn),
    S3EncryptionMode: __expectString(output.S3EncryptionMode),
  } as any;
};

const deserializeAws_json1_1S3EncryptionList = (output: any, context: __SerdeContext): S3Encryption[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1S3Encryption(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1S3GlueParquetTarget = (output: any, context: __SerdeContext): S3GlueParquetTarget => {
  return {
    Compression: __expectString(output.Compression),
    Inputs: output.Inputs != null ? deserializeAws_json1_1OneInput(output.Inputs, context) : undefined,
    Name: __expectString(output.Name),
    PartitionKeys:
      output.PartitionKeys != null
        ? deserializeAws_json1_1GlueStudioPathList(output.PartitionKeys, context)
        : undefined,
    Path: __expectString(output.Path),
    SchemaChangePolicy:
      output.SchemaChangePolicy != null
        ? deserializeAws_json1_1DirectSchemaChangePolicy(output.SchemaChangePolicy, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1S3JsonSource = (output: any, context: __SerdeContext): S3JsonSource => {
  return {
    AdditionalOptions:
      output.AdditionalOptions != null
        ? deserializeAws_json1_1S3DirectSourceAdditionalOptions(output.AdditionalOptions, context)
        : undefined,
    CompressionType: __expectString(output.CompressionType),
    Exclusions:
      output.Exclusions != null
        ? deserializeAws_json1_1EnclosedInStringProperties(output.Exclusions, context)
        : undefined,
    GroupFiles: __expectString(output.GroupFiles),
    GroupSize: __expectString(output.GroupSize),
    JsonPath: __expectString(output.JsonPath),
    MaxBand: __expectInt32(output.MaxBand),
    MaxFilesInBand: __expectInt32(output.MaxFilesInBand),
    Multiline: __expectBoolean(output.Multiline),
    Name: __expectString(output.Name),
    OutputSchemas:
      output.OutputSchemas != null ? deserializeAws_json1_1GlueSchemas(output.OutputSchemas, context) : undefined,
    Paths: output.Paths != null ? deserializeAws_json1_1EnclosedInStringProperties(output.Paths, context) : undefined,
    Recurse: __expectBoolean(output.Recurse),
  } as any;
};

const deserializeAws_json1_1S3ParquetSource = (output: any, context: __SerdeContext): S3ParquetSource => {
  return {
    AdditionalOptions:
      output.AdditionalOptions != null
        ? deserializeAws_json1_1S3DirectSourceAdditionalOptions(output.AdditionalOptions, context)
        : undefined,
    CompressionType: __expectString(output.CompressionType),
    Exclusions:
      output.Exclusions != null
        ? deserializeAws_json1_1EnclosedInStringProperties(output.Exclusions, context)
        : undefined,
    GroupFiles: __expectString(output.GroupFiles),
    GroupSize: __expectString(output.GroupSize),
    MaxBand: __expectInt32(output.MaxBand),
    MaxFilesInBand: __expectInt32(output.MaxFilesInBand),
    Name: __expectString(output.Name),
    OutputSchemas:
      output.OutputSchemas != null ? deserializeAws_json1_1GlueSchemas(output.OutputSchemas, context) : undefined,
    Paths: output.Paths != null ? deserializeAws_json1_1EnclosedInStringProperties(output.Paths, context) : undefined,
    Recurse: __expectBoolean(output.Recurse),
  } as any;
};

const deserializeAws_json1_1S3SourceAdditionalOptions = (
  output: any,
  context: __SerdeContext
): S3SourceAdditionalOptions => {
  return {
    BoundedFiles: __expectLong(output.BoundedFiles),
    BoundedSize: __expectLong(output.BoundedSize),
  } as any;
};

const deserializeAws_json1_1S3Target = (output: any, context: __SerdeContext): S3Target => {
  return {
    ConnectionName: __expectString(output.ConnectionName),
    DlqEventQueueArn: __expectString(output.DlqEventQueueArn),
    EventQueueArn: __expectString(output.EventQueueArn),
    Exclusions: output.Exclusions != null ? deserializeAws_json1_1PathList(output.Exclusions, context) : undefined,
    Path: __expectString(output.Path),
    SampleSize: __expectInt32(output.SampleSize),
  } as any;
};

const deserializeAws_json1_1S3TargetList = (output: any, context: __SerdeContext): S3Target[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1S3Target(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1Schedule = (output: any, context: __SerdeContext): Schedule => {
  return {
    ScheduleExpression: __expectString(output.ScheduleExpression),
    State: __expectString(output.State),
  } as any;
};

const deserializeAws_json1_1SchedulerNotRunningException = (
  output: any,
  context: __SerdeContext
): SchedulerNotRunningException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1SchedulerRunningException = (
  output: any,
  context: __SerdeContext
): SchedulerRunningException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1SchedulerTransitioningException = (
  output: any,
  context: __SerdeContext
): SchedulerTransitioningException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1SchemaChangePolicy = (output: any, context: __SerdeContext): SchemaChangePolicy => {
  return {
    DeleteBehavior: __expectString(output.DeleteBehavior),
    UpdateBehavior: __expectString(output.UpdateBehavior),
  } as any;
};

const deserializeAws_json1_1SchemaColumn = (output: any, context: __SerdeContext): SchemaColumn => {
  return {
    DataType: __expectString(output.DataType),
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_json1_1SchemaId = (output: any, context: __SerdeContext): SchemaId => {
  return {
    RegistryName: __expectString(output.RegistryName),
    SchemaArn: __expectString(output.SchemaArn),
    SchemaName: __expectString(output.SchemaName),
  } as any;
};

const deserializeAws_json1_1SchemaListDefinition = (output: any, context: __SerdeContext): SchemaListItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1SchemaListItem(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1SchemaListItem = (output: any, context: __SerdeContext): SchemaListItem => {
  return {
    CreatedTime: __expectString(output.CreatedTime),
    Description: __expectString(output.Description),
    RegistryName: __expectString(output.RegistryName),
    SchemaArn: __expectString(output.SchemaArn),
    SchemaName: __expectString(output.SchemaName),
    SchemaStatus: __expectString(output.SchemaStatus),
    UpdatedTime: __expectString(output.UpdatedTime),
  } as any;
};

const deserializeAws_json1_1SchemaReference = (output: any, context: __SerdeContext): SchemaReference => {
  return {
    SchemaId: output.SchemaId != null ? deserializeAws_json1_1SchemaId(output.SchemaId, context) : undefined,
    SchemaVersionId: __expectString(output.SchemaVersionId),
    SchemaVersionNumber: __expectLong(output.SchemaVersionNumber),
  } as any;
};

const deserializeAws_json1_1SchemaVersionErrorItem = (output: any, context: __SerdeContext): SchemaVersionErrorItem => {
  return {
    ErrorDetails:
      output.ErrorDetails != null ? deserializeAws_json1_1ErrorDetails(output.ErrorDetails, context) : undefined,
    VersionNumber: __expectLong(output.VersionNumber),
  } as any;
};

const deserializeAws_json1_1SchemaVersionErrorList = (
  output: any,
  context: __SerdeContext
): SchemaVersionErrorItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1SchemaVersionErrorItem(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1SchemaVersionList = (output: any, context: __SerdeContext): SchemaVersionListItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1SchemaVersionListItem(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1SchemaVersionListItem = (output: any, context: __SerdeContext): SchemaVersionListItem => {
  return {
    CreatedTime: __expectString(output.CreatedTime),
    SchemaArn: __expectString(output.SchemaArn),
    SchemaVersionId: __expectString(output.SchemaVersionId),
    Status: __expectString(output.Status),
    VersionNumber: __expectLong(output.VersionNumber),
  } as any;
};

const deserializeAws_json1_1SearchTablesResponse = (output: any, context: __SerdeContext): SearchTablesResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    TableList: output.TableList != null ? deserializeAws_json1_1TableList(output.TableList, context) : undefined,
  } as any;
};

const deserializeAws_json1_1SecurityConfiguration = (output: any, context: __SerdeContext): SecurityConfiguration => {
  return {
    CreatedTimeStamp:
      output.CreatedTimeStamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTimeStamp)))
        : undefined,
    EncryptionConfiguration:
      output.EncryptionConfiguration != null
        ? deserializeAws_json1_1EncryptionConfiguration(output.EncryptionConfiguration, context)
        : undefined,
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_json1_1SecurityConfigurationList = (
  output: any,
  context: __SerdeContext
): SecurityConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1SecurityConfiguration(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1SecurityGroupIdList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_json1_1SelectFields = (output: any, context: __SerdeContext): SelectFields => {
  return {
    Inputs: output.Inputs != null ? deserializeAws_json1_1OneInput(output.Inputs, context) : undefined,
    Name: __expectString(output.Name),
    Paths: output.Paths != null ? deserializeAws_json1_1GlueStudioPathList(output.Paths, context) : undefined,
  } as any;
};

const deserializeAws_json1_1SelectFromCollection = (output: any, context: __SerdeContext): SelectFromCollection => {
  return {
    Index: __expectInt32(output.Index),
    Inputs: output.Inputs != null ? deserializeAws_json1_1OneInput(output.Inputs, context) : undefined,
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_json1_1SerDeInfo = (output: any, context: __SerdeContext): SerDeInfo => {
  return {
    Name: __expectString(output.Name),
    Parameters: output.Parameters != null ? deserializeAws_json1_1ParametersMap(output.Parameters, context) : undefined,
    SerializationLibrary: __expectString(output.SerializationLibrary),
  } as any;
};

const deserializeAws_json1_1Session = (output: any, context: __SerdeContext): Session => {
  return {
    Command: output.Command != null ? deserializeAws_json1_1SessionCommand(output.Command, context) : undefined,
    Connections:
      output.Connections != null ? deserializeAws_json1_1ConnectionsList(output.Connections, context) : undefined,
    CreatedOn:
      output.CreatedOn != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedOn))) : undefined,
    DefaultArguments:
      output.DefaultArguments != null
        ? deserializeAws_json1_1OrchestrationArgumentsMap(output.DefaultArguments, context)
        : undefined,
    Description: __expectString(output.Description),
    ErrorMessage: __expectString(output.ErrorMessage),
    GlueVersion: __expectString(output.GlueVersion),
    Id: __expectString(output.Id),
    MaxCapacity: __limitedParseDouble(output.MaxCapacity),
    Progress: __limitedParseDouble(output.Progress),
    Role: __expectString(output.Role),
    SecurityConfiguration: __expectString(output.SecurityConfiguration),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_1SessionCommand = (output: any, context: __SerdeContext): SessionCommand => {
  return {
    Name: __expectString(output.Name),
    PythonVersion: __expectString(output.PythonVersion),
  } as any;
};

const deserializeAws_json1_1SessionIdList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_json1_1SessionList = (output: any, context: __SerdeContext): Session[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Session(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1SkewedInfo = (output: any, context: __SerdeContext): SkewedInfo => {
  return {
    SkewedColumnNames:
      output.SkewedColumnNames != null
        ? deserializeAws_json1_1NameStringList(output.SkewedColumnNames, context)
        : undefined,
    SkewedColumnValueLocationMaps:
      output.SkewedColumnValueLocationMaps != null
        ? deserializeAws_json1_1LocationMap(output.SkewedColumnValueLocationMaps, context)
        : undefined,
    SkewedColumnValues:
      output.SkewedColumnValues != null
        ? deserializeAws_json1_1ColumnValueStringList(output.SkewedColumnValues, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1SparkConnectorSource = (output: any, context: __SerdeContext): SparkConnectorSource => {
  return {
    AdditionalOptions:
      output.AdditionalOptions != null
        ? deserializeAws_json1_1AdditionalOptions(output.AdditionalOptions, context)
        : undefined,
    ConnectionName: __expectString(output.ConnectionName),
    ConnectionType: __expectString(output.ConnectionType),
    ConnectorName: __expectString(output.ConnectorName),
    Name: __expectString(output.Name),
    OutputSchemas:
      output.OutputSchemas != null ? deserializeAws_json1_1GlueSchemas(output.OutputSchemas, context) : undefined,
  } as any;
};

const deserializeAws_json1_1SparkConnectorTarget = (output: any, context: __SerdeContext): SparkConnectorTarget => {
  return {
    AdditionalOptions:
      output.AdditionalOptions != null
        ? deserializeAws_json1_1AdditionalOptions(output.AdditionalOptions, context)
        : undefined,
    ConnectionName: __expectString(output.ConnectionName),
    ConnectionType: __expectString(output.ConnectionType),
    ConnectorName: __expectString(output.ConnectorName),
    Inputs: output.Inputs != null ? deserializeAws_json1_1OneInput(output.Inputs, context) : undefined,
    Name: __expectString(output.Name),
    OutputSchemas:
      output.OutputSchemas != null ? deserializeAws_json1_1GlueSchemas(output.OutputSchemas, context) : undefined,
  } as any;
};

const deserializeAws_json1_1SparkSQL = (output: any, context: __SerdeContext): SparkSQL => {
  return {
    Inputs: output.Inputs != null ? deserializeAws_json1_1ManyInputs(output.Inputs, context) : undefined,
    Name: __expectString(output.Name),
    OutputSchemas:
      output.OutputSchemas != null ? deserializeAws_json1_1GlueSchemas(output.OutputSchemas, context) : undefined,
    SqlAliases: output.SqlAliases != null ? deserializeAws_json1_1SqlAliases(output.SqlAliases, context) : undefined,
    SqlQuery: __expectString(output.SqlQuery),
  } as any;
};

const deserializeAws_json1_1Spigot = (output: any, context: __SerdeContext): Spigot => {
  return {
    Inputs: output.Inputs != null ? deserializeAws_json1_1OneInput(output.Inputs, context) : undefined,
    Name: __expectString(output.Name),
    Path: __expectString(output.Path),
    Prob: __limitedParseDouble(output.Prob),
    Topk: __expectInt32(output.Topk),
  } as any;
};

const deserializeAws_json1_1SplitFields = (output: any, context: __SerdeContext): SplitFields => {
  return {
    Inputs: output.Inputs != null ? deserializeAws_json1_1OneInput(output.Inputs, context) : undefined,
    Name: __expectString(output.Name),
    Paths: output.Paths != null ? deserializeAws_json1_1GlueStudioPathList(output.Paths, context) : undefined,
  } as any;
};

const deserializeAws_json1_1SqlAlias = (output: any, context: __SerdeContext): SqlAlias => {
  return {
    Alias: __expectString(output.Alias),
    From: __expectString(output.From),
  } as any;
};

const deserializeAws_json1_1SqlAliases = (output: any, context: __SerdeContext): SqlAlias[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1SqlAlias(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1StartBlueprintRunResponse = (
  output: any,
  context: __SerdeContext
): StartBlueprintRunResponse => {
  return {
    RunId: __expectString(output.RunId),
  } as any;
};

const deserializeAws_json1_1StartCrawlerResponse = (output: any, context: __SerdeContext): StartCrawlerResponse => {
  return {} as any;
};

const deserializeAws_json1_1StartCrawlerScheduleResponse = (
  output: any,
  context: __SerdeContext
): StartCrawlerScheduleResponse => {
  return {} as any;
};

const deserializeAws_json1_1StartExportLabelsTaskRunResponse = (
  output: any,
  context: __SerdeContext
): StartExportLabelsTaskRunResponse => {
  return {
    TaskRunId: __expectString(output.TaskRunId),
  } as any;
};

const deserializeAws_json1_1StartImportLabelsTaskRunResponse = (
  output: any,
  context: __SerdeContext
): StartImportLabelsTaskRunResponse => {
  return {
    TaskRunId: __expectString(output.TaskRunId),
  } as any;
};

const deserializeAws_json1_1StartingEventBatchCondition = (
  output: any,
  context: __SerdeContext
): StartingEventBatchCondition => {
  return {
    BatchSize: __expectInt32(output.BatchSize),
    BatchWindow: __expectInt32(output.BatchWindow),
  } as any;
};

const deserializeAws_json1_1StartJobRunResponse = (output: any, context: __SerdeContext): StartJobRunResponse => {
  return {
    JobRunId: __expectString(output.JobRunId),
  } as any;
};

const deserializeAws_json1_1StartMLEvaluationTaskRunResponse = (
  output: any,
  context: __SerdeContext
): StartMLEvaluationTaskRunResponse => {
  return {
    TaskRunId: __expectString(output.TaskRunId),
  } as any;
};

const deserializeAws_json1_1StartMLLabelingSetGenerationTaskRunResponse = (
  output: any,
  context: __SerdeContext
): StartMLLabelingSetGenerationTaskRunResponse => {
  return {
    TaskRunId: __expectString(output.TaskRunId),
  } as any;
};

const deserializeAws_json1_1StartTriggerResponse = (output: any, context: __SerdeContext): StartTriggerResponse => {
  return {
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_json1_1StartWorkflowRunResponse = (
  output: any,
  context: __SerdeContext
): StartWorkflowRunResponse => {
  return {
    RunId: __expectString(output.RunId),
  } as any;
};

const deserializeAws_json1_1Statement = (output: any, context: __SerdeContext): Statement => {
  return {
    Code: __expectString(output.Code),
    CompletedOn: __expectLong(output.CompletedOn),
    Id: __expectInt32(output.Id),
    Output: output.Output != null ? deserializeAws_json1_1StatementOutput(output.Output, context) : undefined,
    Progress: __limitedParseDouble(output.Progress),
    StartedOn: __expectLong(output.StartedOn),
    State: __expectString(output.State),
  } as any;
};

const deserializeAws_json1_1StatementList = (output: any, context: __SerdeContext): Statement[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Statement(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1StatementOutput = (output: any, context: __SerdeContext): StatementOutput => {
  return {
    Data: output.Data != null ? deserializeAws_json1_1StatementOutputData(output.Data, context) : undefined,
    ErrorName: __expectString(output.ErrorName),
    ErrorValue: __expectString(output.ErrorValue),
    ExecutionCount: __expectInt32(output.ExecutionCount),
    Status: __expectString(output.Status),
    Traceback:
      output.Traceback != null ? deserializeAws_json1_1OrchestrationStringList(output.Traceback, context) : undefined,
  } as any;
};

const deserializeAws_json1_1StatementOutputData = (output: any, context: __SerdeContext): StatementOutputData => {
  return {
    TextPlain: __expectString(output.TextPlain),
  } as any;
};

const deserializeAws_json1_1StopCrawlerResponse = (output: any, context: __SerdeContext): StopCrawlerResponse => {
  return {} as any;
};

const deserializeAws_json1_1StopCrawlerScheduleResponse = (
  output: any,
  context: __SerdeContext
): StopCrawlerScheduleResponse => {
  return {} as any;
};

const deserializeAws_json1_1StopSessionResponse = (output: any, context: __SerdeContext): StopSessionResponse => {
  return {
    Id: __expectString(output.Id),
  } as any;
};

const deserializeAws_json1_1StopTriggerResponse = (output: any, context: __SerdeContext): StopTriggerResponse => {
  return {
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_json1_1StopWorkflowRunResponse = (
  output: any,
  context: __SerdeContext
): StopWorkflowRunResponse => {
  return {} as any;
};

const deserializeAws_json1_1StorageDescriptor = (output: any, context: __SerdeContext): StorageDescriptor => {
  return {
    AdditionalLocations:
      output.AdditionalLocations != null
        ? deserializeAws_json1_1LocationStringList(output.AdditionalLocations, context)
        : undefined,
    BucketColumns:
      output.BucketColumns != null ? deserializeAws_json1_1NameStringList(output.BucketColumns, context) : undefined,
    Columns: output.Columns != null ? deserializeAws_json1_1ColumnList(output.Columns, context) : undefined,
    Compressed: __expectBoolean(output.Compressed),
    InputFormat: __expectString(output.InputFormat),
    Location: __expectString(output.Location),
    NumberOfBuckets: __expectInt32(output.NumberOfBuckets),
    OutputFormat: __expectString(output.OutputFormat),
    Parameters: output.Parameters != null ? deserializeAws_json1_1ParametersMap(output.Parameters, context) : undefined,
    SchemaReference:
      output.SchemaReference != null
        ? deserializeAws_json1_1SchemaReference(output.SchemaReference, context)
        : undefined,
    SerdeInfo: output.SerdeInfo != null ? deserializeAws_json1_1SerDeInfo(output.SerdeInfo, context) : undefined,
    SkewedInfo: output.SkewedInfo != null ? deserializeAws_json1_1SkewedInfo(output.SkewedInfo, context) : undefined,
    SortColumns: output.SortColumns != null ? deserializeAws_json1_1OrderList(output.SortColumns, context) : undefined,
    StoredAsSubDirectories: __expectBoolean(output.StoredAsSubDirectories),
  } as any;
};

const deserializeAws_json1_1StreamingDataPreviewOptions = (
  output: any,
  context: __SerdeContext
): StreamingDataPreviewOptions => {
  return {
    PollingTime: __expectLong(output.PollingTime),
    RecordPollingLimit: __expectLong(output.RecordPollingLimit),
  } as any;
};

const deserializeAws_json1_1StringColumnStatisticsData = (
  output: any,
  context: __SerdeContext
): StringColumnStatisticsData => {
  return {
    AverageLength: __limitedParseDouble(output.AverageLength),
    MaximumLength: __expectLong(output.MaximumLength),
    NumberOfDistinctValues: __expectLong(output.NumberOfDistinctValues),
    NumberOfNulls: __expectLong(output.NumberOfNulls),
  } as any;
};

const deserializeAws_json1_1StringList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_json1_1Table = (output: any, context: __SerdeContext): Table => {
  return {
    CatalogId: __expectString(output.CatalogId),
    CreateTime:
      output.CreateTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreateTime))) : undefined,
    CreatedBy: __expectString(output.CreatedBy),
    DatabaseName: __expectString(output.DatabaseName),
    Description: __expectString(output.Description),
    IsRegisteredWithLakeFormation: __expectBoolean(output.IsRegisteredWithLakeFormation),
    LastAccessTime:
      output.LastAccessTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastAccessTime)))
        : undefined,
    LastAnalyzedTime:
      output.LastAnalyzedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastAnalyzedTime)))
        : undefined,
    Name: __expectString(output.Name),
    Owner: __expectString(output.Owner),
    Parameters: output.Parameters != null ? deserializeAws_json1_1ParametersMap(output.Parameters, context) : undefined,
    PartitionKeys:
      output.PartitionKeys != null ? deserializeAws_json1_1ColumnList(output.PartitionKeys, context) : undefined,
    Retention: __expectInt32(output.Retention),
    StorageDescriptor:
      output.StorageDescriptor != null
        ? deserializeAws_json1_1StorageDescriptor(output.StorageDescriptor, context)
        : undefined,
    TableType: __expectString(output.TableType),
    TargetTable:
      output.TargetTable != null ? deserializeAws_json1_1TableIdentifier(output.TargetTable, context) : undefined,
    UpdateTime:
      output.UpdateTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.UpdateTime))) : undefined,
    VersionId: __expectString(output.VersionId),
    ViewExpandedText: __expectString(output.ViewExpandedText),
    ViewOriginalText: __expectString(output.ViewOriginalText),
  } as any;
};

const deserializeAws_json1_1TableError = (output: any, context: __SerdeContext): TableError => {
  return {
    ErrorDetail:
      output.ErrorDetail != null ? deserializeAws_json1_1ErrorDetail(output.ErrorDetail, context) : undefined,
    TableName: __expectString(output.TableName),
  } as any;
};

const deserializeAws_json1_1TableErrors = (output: any, context: __SerdeContext): TableError[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1TableError(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1TableIdentifier = (output: any, context: __SerdeContext): TableIdentifier => {
  return {
    CatalogId: __expectString(output.CatalogId),
    DatabaseName: __expectString(output.DatabaseName),
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_json1_1TableList = (output: any, context: __SerdeContext): Table[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Table(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1TableVersion = (output: any, context: __SerdeContext): TableVersion => {
  return {
    Table: output.Table != null ? deserializeAws_json1_1Table(output.Table, context) : undefined,
    VersionId: __expectString(output.VersionId),
  } as any;
};

const deserializeAws_json1_1TableVersionError = (output: any, context: __SerdeContext): TableVersionError => {
  return {
    ErrorDetail:
      output.ErrorDetail != null ? deserializeAws_json1_1ErrorDetail(output.ErrorDetail, context) : undefined,
    TableName: __expectString(output.TableName),
    VersionId: __expectString(output.VersionId),
  } as any;
};

const deserializeAws_json1_1TableVersionErrors = (output: any, context: __SerdeContext): TableVersionError[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1TableVersionError(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1TagResourceResponse = (output: any, context: __SerdeContext): TagResourceResponse => {
  return {} as any;
};

const deserializeAws_json1_1TagsMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: __expectString(value) as any,
    };
  }, {});
};

const deserializeAws_json1_1TaskRun = (output: any, context: __SerdeContext): TaskRun => {
  return {
    CompletedOn:
      output.CompletedOn != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CompletedOn)))
        : undefined,
    ErrorString: __expectString(output.ErrorString),
    ExecutionTime: __expectInt32(output.ExecutionTime),
    LastModifiedOn:
      output.LastModifiedOn != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModifiedOn)))
        : undefined,
    LogGroupName: __expectString(output.LogGroupName),
    Properties:
      output.Properties != null ? deserializeAws_json1_1TaskRunProperties(output.Properties, context) : undefined,
    StartedOn:
      output.StartedOn != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartedOn))) : undefined,
    Status: __expectString(output.Status),
    TaskRunId: __expectString(output.TaskRunId),
    TransformId: __expectString(output.TransformId),
  } as any;
};

const deserializeAws_json1_1TaskRunList = (output: any, context: __SerdeContext): TaskRun[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1TaskRun(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1TaskRunProperties = (output: any, context: __SerdeContext): TaskRunProperties => {
  return {
    ExportLabelsTaskRunProperties:
      output.ExportLabelsTaskRunProperties != null
        ? deserializeAws_json1_1ExportLabelsTaskRunProperties(output.ExportLabelsTaskRunProperties, context)
        : undefined,
    FindMatchesTaskRunProperties:
      output.FindMatchesTaskRunProperties != null
        ? deserializeAws_json1_1FindMatchesTaskRunProperties(output.FindMatchesTaskRunProperties, context)
        : undefined,
    ImportLabelsTaskRunProperties:
      output.ImportLabelsTaskRunProperties != null
        ? deserializeAws_json1_1ImportLabelsTaskRunProperties(output.ImportLabelsTaskRunProperties, context)
        : undefined,
    LabelingSetGenerationTaskRunProperties:
      output.LabelingSetGenerationTaskRunProperties != null
        ? deserializeAws_json1_1LabelingSetGenerationTaskRunProperties(
            output.LabelingSetGenerationTaskRunProperties,
            context
          )
        : undefined,
    TaskType: __expectString(output.TaskType),
  } as any;
};

const deserializeAws_json1_1TransformEncryption = (output: any, context: __SerdeContext): TransformEncryption => {
  return {
    MlUserDataEncryption:
      output.MlUserDataEncryption != null
        ? deserializeAws_json1_1MLUserDataEncryption(output.MlUserDataEncryption, context)
        : undefined,
    TaskRunSecurityConfigurationName: __expectString(output.TaskRunSecurityConfigurationName),
  } as any;
};

const deserializeAws_json1_1TransformIdList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_json1_1TransformList = (output: any, context: __SerdeContext): MLTransform[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1MLTransform(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1TransformParameters = (output: any, context: __SerdeContext): TransformParameters => {
  return {
    FindMatchesParameters:
      output.FindMatchesParameters != null
        ? deserializeAws_json1_1FindMatchesParameters(output.FindMatchesParameters, context)
        : undefined,
    TransformType: __expectString(output.TransformType),
  } as any;
};

const deserializeAws_json1_1TransformSchema = (output: any, context: __SerdeContext): SchemaColumn[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1SchemaColumn(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1Trigger = (output: any, context: __SerdeContext): Trigger => {
  return {
    Actions: output.Actions != null ? deserializeAws_json1_1ActionList(output.Actions, context) : undefined,
    Description: __expectString(output.Description),
    EventBatchingCondition:
      output.EventBatchingCondition != null
        ? deserializeAws_json1_1EventBatchingCondition(output.EventBatchingCondition, context)
        : undefined,
    Id: __expectString(output.Id),
    Name: __expectString(output.Name),
    Predicate: output.Predicate != null ? deserializeAws_json1_1Predicate(output.Predicate, context) : undefined,
    Schedule: __expectString(output.Schedule),
    State: __expectString(output.State),
    Type: __expectString(output.Type),
    WorkflowName: __expectString(output.WorkflowName),
  } as any;
};

const deserializeAws_json1_1TriggerList = (output: any, context: __SerdeContext): Trigger[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Trigger(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1TriggerNameList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_json1_1TriggerNodeDetails = (output: any, context: __SerdeContext): TriggerNodeDetails => {
  return {
    Trigger: output.Trigger != null ? deserializeAws_json1_1Trigger(output.Trigger, context) : undefined,
  } as any;
};

const deserializeAws_json1_1TwoInputs = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_json1_1UnfilteredPartition = (output: any, context: __SerdeContext): UnfilteredPartition => {
  return {
    AuthorizedColumns:
      output.AuthorizedColumns != null
        ? deserializeAws_json1_1NameStringList(output.AuthorizedColumns, context)
        : undefined,
    IsRegisteredWithLakeFormation: __expectBoolean(output.IsRegisteredWithLakeFormation),
    Partition: output.Partition != null ? deserializeAws_json1_1Partition(output.Partition, context) : undefined,
  } as any;
};

const deserializeAws_json1_1UnfilteredPartitionList = (output: any, context: __SerdeContext): UnfilteredPartition[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1UnfilteredPartition(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1Union = (output: any, context: __SerdeContext): Union => {
  return {
    Inputs: output.Inputs != null ? deserializeAws_json1_1TwoInputs(output.Inputs, context) : undefined,
    Name: __expectString(output.Name),
    UnionType: __expectString(output.UnionType),
  } as any;
};

const deserializeAws_json1_1UntagResourceResponse = (output: any, context: __SerdeContext): UntagResourceResponse => {
  return {} as any;
};

const deserializeAws_json1_1UpdateBlueprintResponse = (
  output: any,
  context: __SerdeContext
): UpdateBlueprintResponse => {
  return {
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_json1_1UpdateClassifierResponse = (
  output: any,
  context: __SerdeContext
): UpdateClassifierResponse => {
  return {} as any;
};

const deserializeAws_json1_1UpdateColumnStatisticsForPartitionResponse = (
  output: any,
  context: __SerdeContext
): UpdateColumnStatisticsForPartitionResponse => {
  return {
    Errors: output.Errors != null ? deserializeAws_json1_1ColumnStatisticsErrors(output.Errors, context) : undefined,
  } as any;
};

const deserializeAws_json1_1UpdateColumnStatisticsForTableResponse = (
  output: any,
  context: __SerdeContext
): UpdateColumnStatisticsForTableResponse => {
  return {
    Errors: output.Errors != null ? deserializeAws_json1_1ColumnStatisticsErrors(output.Errors, context) : undefined,
  } as any;
};

const deserializeAws_json1_1UpdateConnectionResponse = (
  output: any,
  context: __SerdeContext
): UpdateConnectionResponse => {
  return {} as any;
};

const deserializeAws_json1_1UpdateCrawlerResponse = (output: any, context: __SerdeContext): UpdateCrawlerResponse => {
  return {} as any;
};

const deserializeAws_json1_1UpdateCrawlerScheduleResponse = (
  output: any,
  context: __SerdeContext
): UpdateCrawlerScheduleResponse => {
  return {} as any;
};

const deserializeAws_json1_1UpdateDatabaseResponse = (output: any, context: __SerdeContext): UpdateDatabaseResponse => {
  return {} as any;
};

const deserializeAws_json1_1UpdateDevEndpointResponse = (
  output: any,
  context: __SerdeContext
): UpdateDevEndpointResponse => {
  return {} as any;
};

const deserializeAws_json1_1UpdateJobResponse = (output: any, context: __SerdeContext): UpdateJobResponse => {
  return {
    JobName: __expectString(output.JobName),
  } as any;
};

const deserializeAws_json1_1UpdateMLTransformResponse = (
  output: any,
  context: __SerdeContext
): UpdateMLTransformResponse => {
  return {
    TransformId: __expectString(output.TransformId),
  } as any;
};

const deserializeAws_json1_1UpdatePartitionResponse = (
  output: any,
  context: __SerdeContext
): UpdatePartitionResponse => {
  return {} as any;
};

const deserializeAws_json1_1UpdateRegistryResponse = (output: any, context: __SerdeContext): UpdateRegistryResponse => {
  return {
    RegistryArn: __expectString(output.RegistryArn),
    RegistryName: __expectString(output.RegistryName),
  } as any;
};

const deserializeAws_json1_1UpdateSchemaResponse = (output: any, context: __SerdeContext): UpdateSchemaResponse => {
  return {
    RegistryName: __expectString(output.RegistryName),
    SchemaArn: __expectString(output.SchemaArn),
    SchemaName: __expectString(output.SchemaName),
  } as any;
};

const deserializeAws_json1_1UpdateTableResponse = (output: any, context: __SerdeContext): UpdateTableResponse => {
  return {} as any;
};

const deserializeAws_json1_1UpdateTriggerResponse = (output: any, context: __SerdeContext): UpdateTriggerResponse => {
  return {
    Trigger: output.Trigger != null ? deserializeAws_json1_1Trigger(output.Trigger, context) : undefined,
  } as any;
};

const deserializeAws_json1_1UpdateUserDefinedFunctionResponse = (
  output: any,
  context: __SerdeContext
): UpdateUserDefinedFunctionResponse => {
  return {} as any;
};

const deserializeAws_json1_1UpdateWorkflowResponse = (output: any, context: __SerdeContext): UpdateWorkflowResponse => {
  return {
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_json1_1UpsertRedshiftTargetOptions = (
  output: any,
  context: __SerdeContext
): UpsertRedshiftTargetOptions => {
  return {
    ConnectionName: __expectString(output.ConnectionName),
    TableLocation: __expectString(output.TableLocation),
    UpsertKeys:
      output.UpsertKeys != null
        ? deserializeAws_json1_1EnclosedInStringPropertiesMinOne(output.UpsertKeys, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1UserDefinedFunction = (output: any, context: __SerdeContext): UserDefinedFunction => {
  return {
    CatalogId: __expectString(output.CatalogId),
    ClassName: __expectString(output.ClassName),
    CreateTime:
      output.CreateTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreateTime))) : undefined,
    DatabaseName: __expectString(output.DatabaseName),
    FunctionName: __expectString(output.FunctionName),
    OwnerName: __expectString(output.OwnerName),
    OwnerType: __expectString(output.OwnerType),
    ResourceUris:
      output.ResourceUris != null ? deserializeAws_json1_1ResourceUriList(output.ResourceUris, context) : undefined,
  } as any;
};

const deserializeAws_json1_1UserDefinedFunctionList = (output: any, context: __SerdeContext): UserDefinedFunction[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1UserDefinedFunction(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ValidationException = (output: any, context: __SerdeContext): ValidationException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1ValueStringList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_json1_1VersionMismatchException = (
  output: any,
  context: __SerdeContext
): VersionMismatchException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1Workflow = (output: any, context: __SerdeContext): Workflow => {
  return {
    BlueprintDetails:
      output.BlueprintDetails != null
        ? deserializeAws_json1_1BlueprintDetails(output.BlueprintDetails, context)
        : undefined,
    CreatedOn:
      output.CreatedOn != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedOn))) : undefined,
    DefaultRunProperties:
      output.DefaultRunProperties != null
        ? deserializeAws_json1_1WorkflowRunProperties(output.DefaultRunProperties, context)
        : undefined,
    Description: __expectString(output.Description),
    Graph: output.Graph != null ? deserializeAws_json1_1WorkflowGraph(output.Graph, context) : undefined,
    LastModifiedOn:
      output.LastModifiedOn != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModifiedOn)))
        : undefined,
    LastRun: output.LastRun != null ? deserializeAws_json1_1WorkflowRun(output.LastRun, context) : undefined,
    MaxConcurrentRuns: __expectInt32(output.MaxConcurrentRuns),
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_json1_1WorkflowGraph = (output: any, context: __SerdeContext): WorkflowGraph => {
  return {
    Edges: output.Edges != null ? deserializeAws_json1_1EdgeList(output.Edges, context) : undefined,
    Nodes: output.Nodes != null ? deserializeAws_json1_1NodeList(output.Nodes, context) : undefined,
  } as any;
};

const deserializeAws_json1_1WorkflowNames = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_json1_1WorkflowRun = (output: any, context: __SerdeContext): WorkflowRun => {
  return {
    CompletedOn:
      output.CompletedOn != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CompletedOn)))
        : undefined,
    ErrorMessage: __expectString(output.ErrorMessage),
    Graph: output.Graph != null ? deserializeAws_json1_1WorkflowGraph(output.Graph, context) : undefined,
    Name: __expectString(output.Name),
    PreviousRunId: __expectString(output.PreviousRunId),
    StartedOn:
      output.StartedOn != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartedOn))) : undefined,
    StartingEventBatchCondition:
      output.StartingEventBatchCondition != null
        ? deserializeAws_json1_1StartingEventBatchCondition(output.StartingEventBatchCondition, context)
        : undefined,
    Statistics:
      output.Statistics != null ? deserializeAws_json1_1WorkflowRunStatistics(output.Statistics, context) : undefined,
    Status: __expectString(output.Status),
    WorkflowRunId: __expectString(output.WorkflowRunId),
    WorkflowRunProperties:
      output.WorkflowRunProperties != null
        ? deserializeAws_json1_1WorkflowRunProperties(output.WorkflowRunProperties, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1WorkflowRunProperties = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: __expectString(value) as any,
    };
  }, {});
};

const deserializeAws_json1_1WorkflowRuns = (output: any, context: __SerdeContext): WorkflowRun[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1WorkflowRun(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1WorkflowRunStatistics = (output: any, context: __SerdeContext): WorkflowRunStatistics => {
  return {
    FailedActions: __expectInt32(output.FailedActions),
    RunningActions: __expectInt32(output.RunningActions),
    StoppedActions: __expectInt32(output.StoppedActions),
    SucceededActions: __expectInt32(output.SucceededActions),
    TimeoutActions: __expectInt32(output.TimeoutActions),
    TotalActions: __expectInt32(output.TotalActions),
  } as any;
};

const deserializeAws_json1_1Workflows = (output: any, context: __SerdeContext): Workflow[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Workflow(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1XMLClassifier = (output: any, context: __SerdeContext): XMLClassifier => {
  return {
    Classification: __expectString(output.Classification),
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    LastUpdated:
      output.LastUpdated != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdated)))
        : undefined,
    Name: __expectString(output.Name),
    RowTag: __expectString(output.RowTag),
    Version: __expectLong(output.Version),
  } as any;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (streamBody: any = new Uint8Array(), context: __SerdeContext): Promise<Uint8Array> => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));

const buildHttpRpcRequest = async (
  context: __SerdeContext,
  headers: __HeaderBag,
  path: string,
  resolvedHostname: string | undefined,
  body: any
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const contents: any = {
    protocol,
    hostname,
    port,
    method: "POST",
    path: basePath.endsWith("/") ? basePath.slice(0, -1) + path : basePath + path,
    headers,
  };
  if (resolvedHostname !== undefined) {
    contents.hostname = resolvedHostname;
  }
  if (body !== undefined) {
    contents.body = body;
  }
  return new __HttpRequest(contents);
};

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string | undefined => {
  const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string | number): string => {
    let cleanValue = rawValue;
    if (typeof cleanValue === "number") {
      cleanValue = cleanValue.toString();
    }
    if (cleanValue.indexOf(":") >= 0) {
      cleanValue = cleanValue.split(":")[0];
    }
    if (cleanValue.indexOf("#") >= 0) {
      cleanValue = cleanValue.split("#")[1];
    }
    return cleanValue;
  };

  const headerKey = findKey(output.headers, "x-amzn-errortype");
  if (headerKey !== undefined) {
    return sanitizeErrorCode(output.headers[headerKey]);
  }

  if (data.code !== undefined) {
    return sanitizeErrorCode(data.code);
  }

  if (data["__type"] !== undefined) {
    return sanitizeErrorCode(data["__type"]);
  }
};
