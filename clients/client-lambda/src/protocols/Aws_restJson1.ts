// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  limitedParseDouble as __limitedParseDouble,
  parseEpochTimestamp as __parseEpochTimestamp,
  serializeFloat as __serializeFloat,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  AddLayerVersionPermissionCommandInput,
  AddLayerVersionPermissionCommandOutput,
} from "../commands/AddLayerVersionPermissionCommand";
import { AddPermissionCommandInput, AddPermissionCommandOutput } from "../commands/AddPermissionCommand";
import { CreateAliasCommandInput, CreateAliasCommandOutput } from "../commands/CreateAliasCommand";
import {
  CreateCodeSigningConfigCommandInput,
  CreateCodeSigningConfigCommandOutput,
} from "../commands/CreateCodeSigningConfigCommand";
import {
  CreateEventSourceMappingCommandInput,
  CreateEventSourceMappingCommandOutput,
} from "../commands/CreateEventSourceMappingCommand";
import { CreateFunctionCommandInput, CreateFunctionCommandOutput } from "../commands/CreateFunctionCommand";
import {
  CreateFunctionUrlConfigCommandInput,
  CreateFunctionUrlConfigCommandOutput,
} from "../commands/CreateFunctionUrlConfigCommand";
import { DeleteAliasCommandInput, DeleteAliasCommandOutput } from "../commands/DeleteAliasCommand";
import {
  DeleteCodeSigningConfigCommandInput,
  DeleteCodeSigningConfigCommandOutput,
} from "../commands/DeleteCodeSigningConfigCommand";
import {
  DeleteEventSourceMappingCommandInput,
  DeleteEventSourceMappingCommandOutput,
} from "../commands/DeleteEventSourceMappingCommand";
import {
  DeleteFunctionCodeSigningConfigCommandInput,
  DeleteFunctionCodeSigningConfigCommandOutput,
} from "../commands/DeleteFunctionCodeSigningConfigCommand";
import { DeleteFunctionCommandInput, DeleteFunctionCommandOutput } from "../commands/DeleteFunctionCommand";
import {
  DeleteFunctionConcurrencyCommandInput,
  DeleteFunctionConcurrencyCommandOutput,
} from "../commands/DeleteFunctionConcurrencyCommand";
import {
  DeleteFunctionEventInvokeConfigCommandInput,
  DeleteFunctionEventInvokeConfigCommandOutput,
} from "../commands/DeleteFunctionEventInvokeConfigCommand";
import {
  DeleteFunctionUrlConfigCommandInput,
  DeleteFunctionUrlConfigCommandOutput,
} from "../commands/DeleteFunctionUrlConfigCommand";
import { DeleteLayerVersionCommandInput, DeleteLayerVersionCommandOutput } from "../commands/DeleteLayerVersionCommand";
import {
  DeleteProvisionedConcurrencyConfigCommandInput,
  DeleteProvisionedConcurrencyConfigCommandOutput,
} from "../commands/DeleteProvisionedConcurrencyConfigCommand";
import { GetAccountSettingsCommandInput, GetAccountSettingsCommandOutput } from "../commands/GetAccountSettingsCommand";
import { GetAliasCommandInput, GetAliasCommandOutput } from "../commands/GetAliasCommand";
import {
  GetCodeSigningConfigCommandInput,
  GetCodeSigningConfigCommandOutput,
} from "../commands/GetCodeSigningConfigCommand";
import {
  GetEventSourceMappingCommandInput,
  GetEventSourceMappingCommandOutput,
} from "../commands/GetEventSourceMappingCommand";
import {
  GetFunctionCodeSigningConfigCommandInput,
  GetFunctionCodeSigningConfigCommandOutput,
} from "../commands/GetFunctionCodeSigningConfigCommand";
import { GetFunctionCommandInput, GetFunctionCommandOutput } from "../commands/GetFunctionCommand";
import {
  GetFunctionConcurrencyCommandInput,
  GetFunctionConcurrencyCommandOutput,
} from "../commands/GetFunctionConcurrencyCommand";
import {
  GetFunctionConfigurationCommandInput,
  GetFunctionConfigurationCommandOutput,
} from "../commands/GetFunctionConfigurationCommand";
import {
  GetFunctionEventInvokeConfigCommandInput,
  GetFunctionEventInvokeConfigCommandOutput,
} from "../commands/GetFunctionEventInvokeConfigCommand";
import {
  GetFunctionUrlConfigCommandInput,
  GetFunctionUrlConfigCommandOutput,
} from "../commands/GetFunctionUrlConfigCommand";
import {
  GetLayerVersionByArnCommandInput,
  GetLayerVersionByArnCommandOutput,
} from "../commands/GetLayerVersionByArnCommand";
import { GetLayerVersionCommandInput, GetLayerVersionCommandOutput } from "../commands/GetLayerVersionCommand";
import {
  GetLayerVersionPolicyCommandInput,
  GetLayerVersionPolicyCommandOutput,
} from "../commands/GetLayerVersionPolicyCommand";
import { GetPolicyCommandInput, GetPolicyCommandOutput } from "../commands/GetPolicyCommand";
import {
  GetProvisionedConcurrencyConfigCommandInput,
  GetProvisionedConcurrencyConfigCommandOutput,
} from "../commands/GetProvisionedConcurrencyConfigCommand";
import { InvokeAsyncCommandInput, InvokeAsyncCommandOutput } from "../commands/InvokeAsyncCommand";
import { InvokeCommandInput, InvokeCommandOutput } from "../commands/InvokeCommand";
import { ListAliasesCommandInput, ListAliasesCommandOutput } from "../commands/ListAliasesCommand";
import {
  ListCodeSigningConfigsCommandInput,
  ListCodeSigningConfigsCommandOutput,
} from "../commands/ListCodeSigningConfigsCommand";
import {
  ListEventSourceMappingsCommandInput,
  ListEventSourceMappingsCommandOutput,
} from "../commands/ListEventSourceMappingsCommand";
import {
  ListFunctionEventInvokeConfigsCommandInput,
  ListFunctionEventInvokeConfigsCommandOutput,
} from "../commands/ListFunctionEventInvokeConfigsCommand";
import {
  ListFunctionsByCodeSigningConfigCommandInput,
  ListFunctionsByCodeSigningConfigCommandOutput,
} from "../commands/ListFunctionsByCodeSigningConfigCommand";
import { ListFunctionsCommandInput, ListFunctionsCommandOutput } from "../commands/ListFunctionsCommand";
import {
  ListFunctionUrlConfigsCommandInput,
  ListFunctionUrlConfigsCommandOutput,
} from "../commands/ListFunctionUrlConfigsCommand";
import { ListLayersCommandInput, ListLayersCommandOutput } from "../commands/ListLayersCommand";
import { ListLayerVersionsCommandInput, ListLayerVersionsCommandOutput } from "../commands/ListLayerVersionsCommand";
import {
  ListProvisionedConcurrencyConfigsCommandInput,
  ListProvisionedConcurrencyConfigsCommandOutput,
} from "../commands/ListProvisionedConcurrencyConfigsCommand";
import { ListTagsCommandInput, ListTagsCommandOutput } from "../commands/ListTagsCommand";
import {
  ListVersionsByFunctionCommandInput,
  ListVersionsByFunctionCommandOutput,
} from "../commands/ListVersionsByFunctionCommand";
import {
  PublishLayerVersionCommandInput,
  PublishLayerVersionCommandOutput,
} from "../commands/PublishLayerVersionCommand";
import { PublishVersionCommandInput, PublishVersionCommandOutput } from "../commands/PublishVersionCommand";
import {
  PutFunctionCodeSigningConfigCommandInput,
  PutFunctionCodeSigningConfigCommandOutput,
} from "../commands/PutFunctionCodeSigningConfigCommand";
import {
  PutFunctionConcurrencyCommandInput,
  PutFunctionConcurrencyCommandOutput,
} from "../commands/PutFunctionConcurrencyCommand";
import {
  PutFunctionEventInvokeConfigCommandInput,
  PutFunctionEventInvokeConfigCommandOutput,
} from "../commands/PutFunctionEventInvokeConfigCommand";
import {
  PutProvisionedConcurrencyConfigCommandInput,
  PutProvisionedConcurrencyConfigCommandOutput,
} from "../commands/PutProvisionedConcurrencyConfigCommand";
import {
  RemoveLayerVersionPermissionCommandInput,
  RemoveLayerVersionPermissionCommandOutput,
} from "../commands/RemoveLayerVersionPermissionCommand";
import { RemovePermissionCommandInput, RemovePermissionCommandOutput } from "../commands/RemovePermissionCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateAliasCommandInput, UpdateAliasCommandOutput } from "../commands/UpdateAliasCommand";
import {
  UpdateCodeSigningConfigCommandInput,
  UpdateCodeSigningConfigCommandOutput,
} from "../commands/UpdateCodeSigningConfigCommand";
import {
  UpdateEventSourceMappingCommandInput,
  UpdateEventSourceMappingCommandOutput,
} from "../commands/UpdateEventSourceMappingCommand";
import { UpdateFunctionCodeCommandInput, UpdateFunctionCodeCommandOutput } from "../commands/UpdateFunctionCodeCommand";
import {
  UpdateFunctionConfigurationCommandInput,
  UpdateFunctionConfigurationCommandOutput,
} from "../commands/UpdateFunctionConfigurationCommand";
import {
  UpdateFunctionEventInvokeConfigCommandInput,
  UpdateFunctionEventInvokeConfigCommandOutput,
} from "../commands/UpdateFunctionEventInvokeConfigCommand";
import {
  UpdateFunctionUrlConfigCommandInput,
  UpdateFunctionUrlConfigCommandOutput,
} from "../commands/UpdateFunctionUrlConfigCommand";
import { LambdaServiceException as __BaseException } from "../models/LambdaServiceException";
import {
  AccountLimit,
  AccountUsage,
  AliasConfiguration,
  AliasRoutingConfiguration,
  AllowedPublishers,
  Architecture,
  CodeSigningConfig,
  CodeSigningConfigNotFoundException,
  CodeSigningPolicies,
  CodeStorageExceededException,
  CodeVerificationFailedException,
  Concurrency,
  Cors,
  DeadLetterConfig,
  DestinationConfig,
  EC2AccessDeniedException,
  EC2ThrottledException,
  EC2UnexpectedException,
  EFSIOException,
  EFSMountConnectivityException,
  EFSMountFailureException,
  EFSMountTimeoutException,
  EndPointType,
  ENILimitReachedException,
  Environment,
  EnvironmentError,
  EnvironmentResponse,
  EphemeralStorage,
  EventSourceMappingConfiguration,
  FileSystemConfig,
  Filter,
  FilterCriteria,
  FunctionCode,
  FunctionCodeLocation,
  FunctionConfiguration,
  FunctionEventInvokeConfig,
  FunctionResponseType,
  FunctionUrlConfig,
  ImageConfig,
  ImageConfigError,
  ImageConfigResponse,
  InvalidCodeSignatureException,
  InvalidParameterValueException,
  InvalidRequestContentException,
  InvalidRuntimeException,
  InvalidSecurityGroupIDException,
  InvalidSubnetIDException,
  InvalidZipFileException,
  KMSAccessDeniedException,
  KMSDisabledException,
  KMSInvalidStateException,
  KMSNotFoundException,
  Layer,
  LayersListItem,
  LayerVersionContentInput,
  LayerVersionContentOutput,
  LayerVersionsListItem,
  OnFailure,
  OnSuccess,
  PolicyLengthExceededException,
  PreconditionFailedException,
  ProvisionedConcurrencyConfigListItem,
  ProvisionedConcurrencyConfigNotFoundException,
  RequestTooLargeException,
  ResourceConflictException,
  ResourceInUseException,
  ResourceNotFoundException,
  ResourceNotReadyException,
  Runtime,
  SelfManagedEventSource,
  ServiceException,
  SourceAccessConfiguration,
  SubnetIPAddressLimitReachedException,
  TooManyRequestsException,
  TracingConfig,
  TracingConfigResponse,
  UnsupportedMediaTypeException,
  VpcConfig,
  VpcConfigResponse,
} from "../models/models_0";

export const serializeAws_restJson1AddLayerVersionPermissionCommand = async (
  input: AddLayerVersionPermissionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2018-10-31/layers/{LayerName}/versions/{VersionNumber}/policy";
  if (input.LayerName !== undefined) {
    const labelValue: string = input.LayerName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: LayerName.");
    }
    resolvedPath = resolvedPath.replace("{LayerName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: LayerName.");
  }
  if (input.VersionNumber !== undefined) {
    const labelValue: string = input.VersionNumber.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: VersionNumber.");
    }
    resolvedPath = resolvedPath.replace("{VersionNumber}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: VersionNumber.");
  }
  const query: any = {
    ...(input.RevisionId !== undefined && { RevisionId: input.RevisionId }),
  };
  let body: any;
  body = JSON.stringify({
    ...(input.Action != null && { Action: input.Action }),
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
    ...(input.Principal != null && { Principal: input.Principal }),
    ...(input.StatementId != null && { StatementId: input.StatementId }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1AddPermissionCommand = async (
  input: AddPermissionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2015-03-31/functions/{FunctionName}/policy";
  if (input.FunctionName !== undefined) {
    const labelValue: string = input.FunctionName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: FunctionName.");
    }
    resolvedPath = resolvedPath.replace("{FunctionName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: FunctionName.");
  }
  const query: any = {
    ...(input.Qualifier !== undefined && { Qualifier: input.Qualifier }),
  };
  let body: any;
  body = JSON.stringify({
    ...(input.Action != null && { Action: input.Action }),
    ...(input.EventSourceToken != null && { EventSourceToken: input.EventSourceToken }),
    ...(input.FunctionUrlAuthType != null && { FunctionUrlAuthType: input.FunctionUrlAuthType }),
    ...(input.Principal != null && { Principal: input.Principal }),
    ...(input.PrincipalOrgID != null && { PrincipalOrgID: input.PrincipalOrgID }),
    ...(input.RevisionId != null && { RevisionId: input.RevisionId }),
    ...(input.SourceAccount != null && { SourceAccount: input.SourceAccount }),
    ...(input.SourceArn != null && { SourceArn: input.SourceArn }),
    ...(input.StatementId != null && { StatementId: input.StatementId }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1CreateAliasCommand = async (
  input: CreateAliasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2015-03-31/functions/{FunctionName}/aliases";
  if (input.FunctionName !== undefined) {
    const labelValue: string = input.FunctionName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: FunctionName.");
    }
    resolvedPath = resolvedPath.replace("{FunctionName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: FunctionName.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.Description != null && { Description: input.Description }),
    ...(input.FunctionVersion != null && { FunctionVersion: input.FunctionVersion }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.RoutingConfig != null && {
      RoutingConfig: serializeAws_restJson1AliasRoutingConfiguration(input.RoutingConfig, context),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1CreateCodeSigningConfigCommand = async (
  input: CreateCodeSigningConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-04-22/code-signing-configs";
  let body: any;
  body = JSON.stringify({
    ...(input.AllowedPublishers != null && {
      AllowedPublishers: serializeAws_restJson1AllowedPublishers(input.AllowedPublishers, context),
    }),
    ...(input.CodeSigningPolicies != null && {
      CodeSigningPolicies: serializeAws_restJson1CodeSigningPolicies(input.CodeSigningPolicies, context),
    }),
    ...(input.Description != null && { Description: input.Description }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1CreateEventSourceMappingCommand = async (
  input: CreateEventSourceMappingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2015-03-31/event-source-mappings";
  let body: any;
  body = JSON.stringify({
    ...(input.BatchSize != null && { BatchSize: input.BatchSize }),
    ...(input.BisectBatchOnFunctionError != null && { BisectBatchOnFunctionError: input.BisectBatchOnFunctionError }),
    ...(input.DestinationConfig != null && {
      DestinationConfig: serializeAws_restJson1DestinationConfig(input.DestinationConfig, context),
    }),
    ...(input.Enabled != null && { Enabled: input.Enabled }),
    ...(input.EventSourceArn != null && { EventSourceArn: input.EventSourceArn }),
    ...(input.FilterCriteria != null && {
      FilterCriteria: serializeAws_restJson1FilterCriteria(input.FilterCriteria, context),
    }),
    ...(input.FunctionName != null && { FunctionName: input.FunctionName }),
    ...(input.FunctionResponseTypes != null && {
      FunctionResponseTypes: serializeAws_restJson1FunctionResponseTypeList(input.FunctionResponseTypes, context),
    }),
    ...(input.MaximumBatchingWindowInSeconds != null && {
      MaximumBatchingWindowInSeconds: input.MaximumBatchingWindowInSeconds,
    }),
    ...(input.MaximumRecordAgeInSeconds != null && { MaximumRecordAgeInSeconds: input.MaximumRecordAgeInSeconds }),
    ...(input.MaximumRetryAttempts != null && { MaximumRetryAttempts: input.MaximumRetryAttempts }),
    ...(input.ParallelizationFactor != null && { ParallelizationFactor: input.ParallelizationFactor }),
    ...(input.Queues != null && { Queues: serializeAws_restJson1Queues(input.Queues, context) }),
    ...(input.SelfManagedEventSource != null && {
      SelfManagedEventSource: serializeAws_restJson1SelfManagedEventSource(input.SelfManagedEventSource, context),
    }),
    ...(input.SourceAccessConfigurations != null && {
      SourceAccessConfigurations: serializeAws_restJson1SourceAccessConfigurations(
        input.SourceAccessConfigurations,
        context
      ),
    }),
    ...(input.StartingPosition != null && { StartingPosition: input.StartingPosition }),
    ...(input.StartingPositionTimestamp != null && {
      StartingPositionTimestamp: Math.round(input.StartingPositionTimestamp.getTime() / 1000),
    }),
    ...(input.Topics != null && { Topics: serializeAws_restJson1Topics(input.Topics, context) }),
    ...(input.TumblingWindowInSeconds != null && { TumblingWindowInSeconds: input.TumblingWindowInSeconds }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1CreateFunctionCommand = async (
  input: CreateFunctionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2015-03-31/functions";
  let body: any;
  body = JSON.stringify({
    ...(input.Architectures != null && {
      Architectures: serializeAws_restJson1ArchitecturesList(input.Architectures, context),
    }),
    ...(input.Code != null && { Code: serializeAws_restJson1FunctionCode(input.Code, context) }),
    ...(input.CodeSigningConfigArn != null && { CodeSigningConfigArn: input.CodeSigningConfigArn }),
    ...(input.DeadLetterConfig != null && {
      DeadLetterConfig: serializeAws_restJson1DeadLetterConfig(input.DeadLetterConfig, context),
    }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Environment != null && { Environment: serializeAws_restJson1Environment(input.Environment, context) }),
    ...(input.EphemeralStorage != null && {
      EphemeralStorage: serializeAws_restJson1EphemeralStorage(input.EphemeralStorage, context),
    }),
    ...(input.FileSystemConfigs != null && {
      FileSystemConfigs: serializeAws_restJson1FileSystemConfigList(input.FileSystemConfigs, context),
    }),
    ...(input.FunctionName != null && { FunctionName: input.FunctionName }),
    ...(input.Handler != null && { Handler: input.Handler }),
    ...(input.ImageConfig != null && { ImageConfig: serializeAws_restJson1ImageConfig(input.ImageConfig, context) }),
    ...(input.KMSKeyArn != null && { KMSKeyArn: input.KMSKeyArn }),
    ...(input.Layers != null && { Layers: serializeAws_restJson1LayerList(input.Layers, context) }),
    ...(input.MemorySize != null && { MemorySize: input.MemorySize }),
    ...(input.PackageType != null && { PackageType: input.PackageType }),
    ...(input.Publish != null && { Publish: input.Publish }),
    ...(input.Role != null && { Role: input.Role }),
    ...(input.Runtime != null && { Runtime: input.Runtime }),
    ...(input.Tags != null && { Tags: serializeAws_restJson1Tags(input.Tags, context) }),
    ...(input.Timeout != null && { Timeout: input.Timeout }),
    ...(input.TracingConfig != null && {
      TracingConfig: serializeAws_restJson1TracingConfig(input.TracingConfig, context),
    }),
    ...(input.VpcConfig != null && { VpcConfig: serializeAws_restJson1VpcConfig(input.VpcConfig, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1CreateFunctionUrlConfigCommand = async (
  input: CreateFunctionUrlConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2021-10-31/functions/{FunctionName}/url";
  if (input.FunctionName !== undefined) {
    const labelValue: string = input.FunctionName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: FunctionName.");
    }
    resolvedPath = resolvedPath.replace("{FunctionName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: FunctionName.");
  }
  const query: any = {
    ...(input.Qualifier !== undefined && { Qualifier: input.Qualifier }),
  };
  let body: any;
  body = JSON.stringify({
    ...(input.AuthType != null && { AuthType: input.AuthType }),
    ...(input.Cors != null && { Cors: serializeAws_restJson1Cors(input.Cors, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1DeleteAliasCommand = async (
  input: DeleteAliasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2015-03-31/functions/{FunctionName}/aliases/{Name}";
  if (input.FunctionName !== undefined) {
    const labelValue: string = input.FunctionName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: FunctionName.");
    }
    resolvedPath = resolvedPath.replace("{FunctionName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: FunctionName.");
  }
  if (input.Name !== undefined) {
    const labelValue: string = input.Name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace("{Name}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
  }
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteCodeSigningConfigCommand = async (
  input: DeleteCodeSigningConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-04-22/code-signing-configs/{CodeSigningConfigArn}";
  if (input.CodeSigningConfigArn !== undefined) {
    const labelValue: string = input.CodeSigningConfigArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: CodeSigningConfigArn.");
    }
    resolvedPath = resolvedPath.replace("{CodeSigningConfigArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: CodeSigningConfigArn.");
  }
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteEventSourceMappingCommand = async (
  input: DeleteEventSourceMappingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2015-03-31/event-source-mappings/{UUID}";
  if (input.UUID !== undefined) {
    const labelValue: string = input.UUID;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: UUID.");
    }
    resolvedPath = resolvedPath.replace("{UUID}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: UUID.");
  }
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteFunctionCommand = async (
  input: DeleteFunctionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2015-03-31/functions/{FunctionName}";
  if (input.FunctionName !== undefined) {
    const labelValue: string = input.FunctionName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: FunctionName.");
    }
    resolvedPath = resolvedPath.replace("{FunctionName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: FunctionName.");
  }
  const query: any = {
    ...(input.Qualifier !== undefined && { Qualifier: input.Qualifier }),
  };
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1DeleteFunctionCodeSigningConfigCommand = async (
  input: DeleteFunctionCodeSigningConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-06-30/functions/{FunctionName}/code-signing-config";
  if (input.FunctionName !== undefined) {
    const labelValue: string = input.FunctionName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: FunctionName.");
    }
    resolvedPath = resolvedPath.replace("{FunctionName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: FunctionName.");
  }
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteFunctionConcurrencyCommand = async (
  input: DeleteFunctionConcurrencyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2017-10-31/functions/{FunctionName}/concurrency";
  if (input.FunctionName !== undefined) {
    const labelValue: string = input.FunctionName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: FunctionName.");
    }
    resolvedPath = resolvedPath.replace("{FunctionName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: FunctionName.");
  }
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteFunctionEventInvokeConfigCommand = async (
  input: DeleteFunctionEventInvokeConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2019-09-25/functions/{FunctionName}/event-invoke-config";
  if (input.FunctionName !== undefined) {
    const labelValue: string = input.FunctionName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: FunctionName.");
    }
    resolvedPath = resolvedPath.replace("{FunctionName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: FunctionName.");
  }
  const query: any = {
    ...(input.Qualifier !== undefined && { Qualifier: input.Qualifier }),
  };
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1DeleteFunctionUrlConfigCommand = async (
  input: DeleteFunctionUrlConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2021-10-31/functions/{FunctionName}/url";
  if (input.FunctionName !== undefined) {
    const labelValue: string = input.FunctionName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: FunctionName.");
    }
    resolvedPath = resolvedPath.replace("{FunctionName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: FunctionName.");
  }
  const query: any = {
    ...(input.Qualifier !== undefined && { Qualifier: input.Qualifier }),
  };
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1DeleteLayerVersionCommand = async (
  input: DeleteLayerVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2018-10-31/layers/{LayerName}/versions/{VersionNumber}";
  if (input.LayerName !== undefined) {
    const labelValue: string = input.LayerName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: LayerName.");
    }
    resolvedPath = resolvedPath.replace("{LayerName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: LayerName.");
  }
  if (input.VersionNumber !== undefined) {
    const labelValue: string = input.VersionNumber.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: VersionNumber.");
    }
    resolvedPath = resolvedPath.replace("{VersionNumber}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: VersionNumber.");
  }
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteProvisionedConcurrencyConfigCommand = async (
  input: DeleteProvisionedConcurrencyConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2019-09-30/functions/{FunctionName}/provisioned-concurrency";
  if (input.FunctionName !== undefined) {
    const labelValue: string = input.FunctionName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: FunctionName.");
    }
    resolvedPath = resolvedPath.replace("{FunctionName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: FunctionName.");
  }
  const query: any = {
    ...(input.Qualifier !== undefined && { Qualifier: input.Qualifier }),
  };
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1GetAccountSettingsCommand = async (
  input: GetAccountSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2016-08-19/account-settings";
  let body: any;
  body = "";
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetAliasCommand = async (
  input: GetAliasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2015-03-31/functions/{FunctionName}/aliases/{Name}";
  if (input.FunctionName !== undefined) {
    const labelValue: string = input.FunctionName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: FunctionName.");
    }
    resolvedPath = resolvedPath.replace("{FunctionName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: FunctionName.");
  }
  if (input.Name !== undefined) {
    const labelValue: string = input.Name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace("{Name}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
  }
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetCodeSigningConfigCommand = async (
  input: GetCodeSigningConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-04-22/code-signing-configs/{CodeSigningConfigArn}";
  if (input.CodeSigningConfigArn !== undefined) {
    const labelValue: string = input.CodeSigningConfigArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: CodeSigningConfigArn.");
    }
    resolvedPath = resolvedPath.replace("{CodeSigningConfigArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: CodeSigningConfigArn.");
  }
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetEventSourceMappingCommand = async (
  input: GetEventSourceMappingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2015-03-31/event-source-mappings/{UUID}";
  if (input.UUID !== undefined) {
    const labelValue: string = input.UUID;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: UUID.");
    }
    resolvedPath = resolvedPath.replace("{UUID}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: UUID.");
  }
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetFunctionCommand = async (
  input: GetFunctionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2015-03-31/functions/{FunctionName}";
  if (input.FunctionName !== undefined) {
    const labelValue: string = input.FunctionName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: FunctionName.");
    }
    resolvedPath = resolvedPath.replace("{FunctionName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: FunctionName.");
  }
  const query: any = {
    ...(input.Qualifier !== undefined && { Qualifier: input.Qualifier }),
  };
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1GetFunctionCodeSigningConfigCommand = async (
  input: GetFunctionCodeSigningConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-06-30/functions/{FunctionName}/code-signing-config";
  if (input.FunctionName !== undefined) {
    const labelValue: string = input.FunctionName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: FunctionName.");
    }
    resolvedPath = resolvedPath.replace("{FunctionName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: FunctionName.");
  }
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetFunctionConcurrencyCommand = async (
  input: GetFunctionConcurrencyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2019-09-30/functions/{FunctionName}/concurrency";
  if (input.FunctionName !== undefined) {
    const labelValue: string = input.FunctionName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: FunctionName.");
    }
    resolvedPath = resolvedPath.replace("{FunctionName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: FunctionName.");
  }
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetFunctionConfigurationCommand = async (
  input: GetFunctionConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2015-03-31/functions/{FunctionName}/configuration";
  if (input.FunctionName !== undefined) {
    const labelValue: string = input.FunctionName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: FunctionName.");
    }
    resolvedPath = resolvedPath.replace("{FunctionName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: FunctionName.");
  }
  const query: any = {
    ...(input.Qualifier !== undefined && { Qualifier: input.Qualifier }),
  };
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1GetFunctionEventInvokeConfigCommand = async (
  input: GetFunctionEventInvokeConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2019-09-25/functions/{FunctionName}/event-invoke-config";
  if (input.FunctionName !== undefined) {
    const labelValue: string = input.FunctionName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: FunctionName.");
    }
    resolvedPath = resolvedPath.replace("{FunctionName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: FunctionName.");
  }
  const query: any = {
    ...(input.Qualifier !== undefined && { Qualifier: input.Qualifier }),
  };
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1GetFunctionUrlConfigCommand = async (
  input: GetFunctionUrlConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2021-10-31/functions/{FunctionName}/url";
  if (input.FunctionName !== undefined) {
    const labelValue: string = input.FunctionName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: FunctionName.");
    }
    resolvedPath = resolvedPath.replace("{FunctionName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: FunctionName.");
  }
  const query: any = {
    ...(input.Qualifier !== undefined && { Qualifier: input.Qualifier }),
  };
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1GetLayerVersionCommand = async (
  input: GetLayerVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2018-10-31/layers/{LayerName}/versions/{VersionNumber}";
  if (input.LayerName !== undefined) {
    const labelValue: string = input.LayerName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: LayerName.");
    }
    resolvedPath = resolvedPath.replace("{LayerName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: LayerName.");
  }
  if (input.VersionNumber !== undefined) {
    const labelValue: string = input.VersionNumber.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: VersionNumber.");
    }
    resolvedPath = resolvedPath.replace("{VersionNumber}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: VersionNumber.");
  }
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetLayerVersionByArnCommand = async (
  input: GetLayerVersionByArnCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2018-10-31/layers";
  const query: any = {
    find: "LayerVersion",
    ...(input.Arn !== undefined && { Arn: input.Arn }),
  };
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1GetLayerVersionPolicyCommand = async (
  input: GetLayerVersionPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2018-10-31/layers/{LayerName}/versions/{VersionNumber}/policy";
  if (input.LayerName !== undefined) {
    const labelValue: string = input.LayerName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: LayerName.");
    }
    resolvedPath = resolvedPath.replace("{LayerName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: LayerName.");
  }
  if (input.VersionNumber !== undefined) {
    const labelValue: string = input.VersionNumber.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: VersionNumber.");
    }
    resolvedPath = resolvedPath.replace("{VersionNumber}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: VersionNumber.");
  }
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetPolicyCommand = async (
  input: GetPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2015-03-31/functions/{FunctionName}/policy";
  if (input.FunctionName !== undefined) {
    const labelValue: string = input.FunctionName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: FunctionName.");
    }
    resolvedPath = resolvedPath.replace("{FunctionName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: FunctionName.");
  }
  const query: any = {
    ...(input.Qualifier !== undefined && { Qualifier: input.Qualifier }),
  };
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1GetProvisionedConcurrencyConfigCommand = async (
  input: GetProvisionedConcurrencyConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2019-09-30/functions/{FunctionName}/provisioned-concurrency";
  if (input.FunctionName !== undefined) {
    const labelValue: string = input.FunctionName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: FunctionName.");
    }
    resolvedPath = resolvedPath.replace("{FunctionName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: FunctionName.");
  }
  const query: any = {
    ...(input.Qualifier !== undefined && { Qualifier: input.Qualifier }),
  };
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1InvokeCommand = async (
  input: InvokeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/octet-stream",
    ...(isSerializableHeaderValue(input.InvocationType) && { "x-amz-invocation-type": input.InvocationType! }),
    ...(isSerializableHeaderValue(input.LogType) && { "x-amz-log-type": input.LogType! }),
    ...(isSerializableHeaderValue(input.ClientContext) && { "x-amz-client-context": input.ClientContext! }),
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2015-03-31/functions/{FunctionName}/invocations";
  if (input.FunctionName !== undefined) {
    const labelValue: string = input.FunctionName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: FunctionName.");
    }
    resolvedPath = resolvedPath.replace("{FunctionName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: FunctionName.");
  }
  const query: any = {
    ...(input.Qualifier !== undefined && { Qualifier: input.Qualifier }),
  };
  let body: any;
  if (input.Payload !== undefined) {
    body = input.Payload;
  }
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1InvokeAsyncCommand = async (
  input: InvokeAsyncCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/octet-stream",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2014-11-13/functions/{FunctionName}/invoke-async";
  if (input.FunctionName !== undefined) {
    const labelValue: string = input.FunctionName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: FunctionName.");
    }
    resolvedPath = resolvedPath.replace("{FunctionName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: FunctionName.");
  }
  let body: any;
  if (input.InvokeArgs !== undefined) {
    body = input.InvokeArgs;
  }
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1ListAliasesCommand = async (
  input: ListAliasesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2015-03-31/functions/{FunctionName}/aliases";
  if (input.FunctionName !== undefined) {
    const labelValue: string = input.FunctionName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: FunctionName.");
    }
    resolvedPath = resolvedPath.replace("{FunctionName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: FunctionName.");
  }
  const query: any = {
    ...(input.FunctionVersion !== undefined && { FunctionVersion: input.FunctionVersion }),
    ...(input.Marker !== undefined && { Marker: input.Marker }),
    ...(input.MaxItems !== undefined && { MaxItems: input.MaxItems.toString() }),
  };
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListCodeSigningConfigsCommand = async (
  input: ListCodeSigningConfigsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-04-22/code-signing-configs";
  const query: any = {
    ...(input.Marker !== undefined && { Marker: input.Marker }),
    ...(input.MaxItems !== undefined && { MaxItems: input.MaxItems.toString() }),
  };
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListEventSourceMappingsCommand = async (
  input: ListEventSourceMappingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2015-03-31/event-source-mappings";
  const query: any = {
    ...(input.EventSourceArn !== undefined && { EventSourceArn: input.EventSourceArn }),
    ...(input.FunctionName !== undefined && { FunctionName: input.FunctionName }),
    ...(input.Marker !== undefined && { Marker: input.Marker }),
    ...(input.MaxItems !== undefined && { MaxItems: input.MaxItems.toString() }),
  };
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListFunctionEventInvokeConfigsCommand = async (
  input: ListFunctionEventInvokeConfigsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2019-09-25/functions/{FunctionName}/event-invoke-config/list";
  if (input.FunctionName !== undefined) {
    const labelValue: string = input.FunctionName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: FunctionName.");
    }
    resolvedPath = resolvedPath.replace("{FunctionName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: FunctionName.");
  }
  const query: any = {
    ...(input.Marker !== undefined && { Marker: input.Marker }),
    ...(input.MaxItems !== undefined && { MaxItems: input.MaxItems.toString() }),
  };
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListFunctionsCommand = async (
  input: ListFunctionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2015-03-31/functions";
  const query: any = {
    ...(input.MasterRegion !== undefined && { MasterRegion: input.MasterRegion }),
    ...(input.FunctionVersion !== undefined && { FunctionVersion: input.FunctionVersion }),
    ...(input.Marker !== undefined && { Marker: input.Marker }),
    ...(input.MaxItems !== undefined && { MaxItems: input.MaxItems.toString() }),
  };
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListFunctionsByCodeSigningConfigCommand = async (
  input: ListFunctionsByCodeSigningConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-04-22/code-signing-configs/{CodeSigningConfigArn}/functions";
  if (input.CodeSigningConfigArn !== undefined) {
    const labelValue: string = input.CodeSigningConfigArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: CodeSigningConfigArn.");
    }
    resolvedPath = resolvedPath.replace("{CodeSigningConfigArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: CodeSigningConfigArn.");
  }
  const query: any = {
    ...(input.Marker !== undefined && { Marker: input.Marker }),
    ...(input.MaxItems !== undefined && { MaxItems: input.MaxItems.toString() }),
  };
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListFunctionUrlConfigsCommand = async (
  input: ListFunctionUrlConfigsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2021-10-31/functions/{FunctionName}/urls";
  if (input.FunctionName !== undefined) {
    const labelValue: string = input.FunctionName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: FunctionName.");
    }
    resolvedPath = resolvedPath.replace("{FunctionName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: FunctionName.");
  }
  const query: any = {
    ...(input.Marker !== undefined && { Marker: input.Marker }),
    ...(input.MaxItems !== undefined && { MaxItems: input.MaxItems.toString() }),
  };
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListLayersCommand = async (
  input: ListLayersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2018-10-31/layers";
  const query: any = {
    ...(input.CompatibleRuntime !== undefined && { CompatibleRuntime: input.CompatibleRuntime }),
    ...(input.Marker !== undefined && { Marker: input.Marker }),
    ...(input.MaxItems !== undefined && { MaxItems: input.MaxItems.toString() }),
    ...(input.CompatibleArchitecture !== undefined && { CompatibleArchitecture: input.CompatibleArchitecture }),
  };
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListLayerVersionsCommand = async (
  input: ListLayerVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2018-10-31/layers/{LayerName}/versions";
  if (input.LayerName !== undefined) {
    const labelValue: string = input.LayerName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: LayerName.");
    }
    resolvedPath = resolvedPath.replace("{LayerName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: LayerName.");
  }
  const query: any = {
    ...(input.CompatibleRuntime !== undefined && { CompatibleRuntime: input.CompatibleRuntime }),
    ...(input.Marker !== undefined && { Marker: input.Marker }),
    ...(input.MaxItems !== undefined && { MaxItems: input.MaxItems.toString() }),
    ...(input.CompatibleArchitecture !== undefined && { CompatibleArchitecture: input.CompatibleArchitecture }),
  };
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListProvisionedConcurrencyConfigsCommand = async (
  input: ListProvisionedConcurrencyConfigsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2019-09-30/functions/{FunctionName}/provisioned-concurrency";
  if (input.FunctionName !== undefined) {
    const labelValue: string = input.FunctionName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: FunctionName.");
    }
    resolvedPath = resolvedPath.replace("{FunctionName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: FunctionName.");
  }
  const query: any = {
    List: "ALL",
    ...(input.Marker !== undefined && { Marker: input.Marker }),
    ...(input.MaxItems !== undefined && { MaxItems: input.MaxItems.toString() }),
  };
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListTagsCommand = async (
  input: ListTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2017-03-31/tags/{Resource}";
  if (input.Resource !== undefined) {
    const labelValue: string = input.Resource;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Resource.");
    }
    resolvedPath = resolvedPath.replace("{Resource}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Resource.");
  }
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1ListVersionsByFunctionCommand = async (
  input: ListVersionsByFunctionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2015-03-31/functions/{FunctionName}/versions";
  if (input.FunctionName !== undefined) {
    const labelValue: string = input.FunctionName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: FunctionName.");
    }
    resolvedPath = resolvedPath.replace("{FunctionName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: FunctionName.");
  }
  const query: any = {
    ...(input.Marker !== undefined && { Marker: input.Marker }),
    ...(input.MaxItems !== undefined && { MaxItems: input.MaxItems.toString() }),
  };
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1PublishLayerVersionCommand = async (
  input: PublishLayerVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2018-10-31/layers/{LayerName}/versions";
  if (input.LayerName !== undefined) {
    const labelValue: string = input.LayerName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: LayerName.");
    }
    resolvedPath = resolvedPath.replace("{LayerName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: LayerName.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.CompatibleArchitectures != null && {
      CompatibleArchitectures: serializeAws_restJson1CompatibleArchitectures(input.CompatibleArchitectures, context),
    }),
    ...(input.CompatibleRuntimes != null && {
      CompatibleRuntimes: serializeAws_restJson1CompatibleRuntimes(input.CompatibleRuntimes, context),
    }),
    ...(input.Content != null && { Content: serializeAws_restJson1LayerVersionContentInput(input.Content, context) }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.LicenseInfo != null && { LicenseInfo: input.LicenseInfo }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1PublishVersionCommand = async (
  input: PublishVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2015-03-31/functions/{FunctionName}/versions";
  if (input.FunctionName !== undefined) {
    const labelValue: string = input.FunctionName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: FunctionName.");
    }
    resolvedPath = resolvedPath.replace("{FunctionName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: FunctionName.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.CodeSha256 != null && { CodeSha256: input.CodeSha256 }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.RevisionId != null && { RevisionId: input.RevisionId }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1PutFunctionCodeSigningConfigCommand = async (
  input: PutFunctionCodeSigningConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-06-30/functions/{FunctionName}/code-signing-config";
  if (input.FunctionName !== undefined) {
    const labelValue: string = input.FunctionName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: FunctionName.");
    }
    resolvedPath = resolvedPath.replace("{FunctionName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: FunctionName.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.CodeSigningConfigArn != null && { CodeSigningConfigArn: input.CodeSigningConfigArn }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1PutFunctionConcurrencyCommand = async (
  input: PutFunctionConcurrencyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2017-10-31/functions/{FunctionName}/concurrency";
  if (input.FunctionName !== undefined) {
    const labelValue: string = input.FunctionName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: FunctionName.");
    }
    resolvedPath = resolvedPath.replace("{FunctionName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: FunctionName.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.ReservedConcurrentExecutions != null && {
      ReservedConcurrentExecutions: input.ReservedConcurrentExecutions,
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1PutFunctionEventInvokeConfigCommand = async (
  input: PutFunctionEventInvokeConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2019-09-25/functions/{FunctionName}/event-invoke-config";
  if (input.FunctionName !== undefined) {
    const labelValue: string = input.FunctionName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: FunctionName.");
    }
    resolvedPath = resolvedPath.replace("{FunctionName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: FunctionName.");
  }
  const query: any = {
    ...(input.Qualifier !== undefined && { Qualifier: input.Qualifier }),
  };
  let body: any;
  body = JSON.stringify({
    ...(input.DestinationConfig != null && {
      DestinationConfig: serializeAws_restJson1DestinationConfig(input.DestinationConfig, context),
    }),
    ...(input.MaximumEventAgeInSeconds != null && { MaximumEventAgeInSeconds: input.MaximumEventAgeInSeconds }),
    ...(input.MaximumRetryAttempts != null && { MaximumRetryAttempts: input.MaximumRetryAttempts }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1PutProvisionedConcurrencyConfigCommand = async (
  input: PutProvisionedConcurrencyConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2019-09-30/functions/{FunctionName}/provisioned-concurrency";
  if (input.FunctionName !== undefined) {
    const labelValue: string = input.FunctionName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: FunctionName.");
    }
    resolvedPath = resolvedPath.replace("{FunctionName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: FunctionName.");
  }
  const query: any = {
    ...(input.Qualifier !== undefined && { Qualifier: input.Qualifier }),
  };
  let body: any;
  body = JSON.stringify({
    ...(input.ProvisionedConcurrentExecutions != null && {
      ProvisionedConcurrentExecutions: input.ProvisionedConcurrentExecutions,
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1RemoveLayerVersionPermissionCommand = async (
  input: RemoveLayerVersionPermissionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2018-10-31/layers/{LayerName}/versions/{VersionNumber}/policy/{StatementId}";
  if (input.LayerName !== undefined) {
    const labelValue: string = input.LayerName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: LayerName.");
    }
    resolvedPath = resolvedPath.replace("{LayerName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: LayerName.");
  }
  if (input.VersionNumber !== undefined) {
    const labelValue: string = input.VersionNumber.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: VersionNumber.");
    }
    resolvedPath = resolvedPath.replace("{VersionNumber}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: VersionNumber.");
  }
  if (input.StatementId !== undefined) {
    const labelValue: string = input.StatementId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: StatementId.");
    }
    resolvedPath = resolvedPath.replace("{StatementId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: StatementId.");
  }
  const query: any = {
    ...(input.RevisionId !== undefined && { RevisionId: input.RevisionId }),
  };
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1RemovePermissionCommand = async (
  input: RemovePermissionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2015-03-31/functions/{FunctionName}/policy/{StatementId}";
  if (input.FunctionName !== undefined) {
    const labelValue: string = input.FunctionName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: FunctionName.");
    }
    resolvedPath = resolvedPath.replace("{FunctionName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: FunctionName.");
  }
  if (input.StatementId !== undefined) {
    const labelValue: string = input.StatementId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: StatementId.");
    }
    resolvedPath = resolvedPath.replace("{StatementId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: StatementId.");
  }
  const query: any = {
    ...(input.Qualifier !== undefined && { Qualifier: input.Qualifier }),
    ...(input.RevisionId !== undefined && { RevisionId: input.RevisionId }),
  };
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2017-03-31/tags/{Resource}";
  if (input.Resource !== undefined) {
    const labelValue: string = input.Resource;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Resource.");
    }
    resolvedPath = resolvedPath.replace("{Resource}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Resource.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.Tags != null && { Tags: serializeAws_restJson1Tags(input.Tags, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2017-03-31/tags/{Resource}";
  if (input.Resource !== undefined) {
    const labelValue: string = input.Resource;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Resource.");
    }
    resolvedPath = resolvedPath.replace("{Resource}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Resource.");
  }
  const query: any = {
    ...(input.TagKeys !== undefined && { tagKeys: (input.TagKeys || []).map((_entry) => _entry as any) }),
  };
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1UpdateAliasCommand = async (
  input: UpdateAliasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2015-03-31/functions/{FunctionName}/aliases/{Name}";
  if (input.FunctionName !== undefined) {
    const labelValue: string = input.FunctionName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: FunctionName.");
    }
    resolvedPath = resolvedPath.replace("{FunctionName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: FunctionName.");
  }
  if (input.Name !== undefined) {
    const labelValue: string = input.Name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace("{Name}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.Description != null && { Description: input.Description }),
    ...(input.FunctionVersion != null && { FunctionVersion: input.FunctionVersion }),
    ...(input.RevisionId != null && { RevisionId: input.RevisionId }),
    ...(input.RoutingConfig != null && {
      RoutingConfig: serializeAws_restJson1AliasRoutingConfiguration(input.RoutingConfig, context),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateCodeSigningConfigCommand = async (
  input: UpdateCodeSigningConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-04-22/code-signing-configs/{CodeSigningConfigArn}";
  if (input.CodeSigningConfigArn !== undefined) {
    const labelValue: string = input.CodeSigningConfigArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: CodeSigningConfigArn.");
    }
    resolvedPath = resolvedPath.replace("{CodeSigningConfigArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: CodeSigningConfigArn.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.AllowedPublishers != null && {
      AllowedPublishers: serializeAws_restJson1AllowedPublishers(input.AllowedPublishers, context),
    }),
    ...(input.CodeSigningPolicies != null && {
      CodeSigningPolicies: serializeAws_restJson1CodeSigningPolicies(input.CodeSigningPolicies, context),
    }),
    ...(input.Description != null && { Description: input.Description }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateEventSourceMappingCommand = async (
  input: UpdateEventSourceMappingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2015-03-31/event-source-mappings/{UUID}";
  if (input.UUID !== undefined) {
    const labelValue: string = input.UUID;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: UUID.");
    }
    resolvedPath = resolvedPath.replace("{UUID}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: UUID.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.BatchSize != null && { BatchSize: input.BatchSize }),
    ...(input.BisectBatchOnFunctionError != null && { BisectBatchOnFunctionError: input.BisectBatchOnFunctionError }),
    ...(input.DestinationConfig != null && {
      DestinationConfig: serializeAws_restJson1DestinationConfig(input.DestinationConfig, context),
    }),
    ...(input.Enabled != null && { Enabled: input.Enabled }),
    ...(input.FilterCriteria != null && {
      FilterCriteria: serializeAws_restJson1FilterCriteria(input.FilterCriteria, context),
    }),
    ...(input.FunctionName != null && { FunctionName: input.FunctionName }),
    ...(input.FunctionResponseTypes != null && {
      FunctionResponseTypes: serializeAws_restJson1FunctionResponseTypeList(input.FunctionResponseTypes, context),
    }),
    ...(input.MaximumBatchingWindowInSeconds != null && {
      MaximumBatchingWindowInSeconds: input.MaximumBatchingWindowInSeconds,
    }),
    ...(input.MaximumRecordAgeInSeconds != null && { MaximumRecordAgeInSeconds: input.MaximumRecordAgeInSeconds }),
    ...(input.MaximumRetryAttempts != null && { MaximumRetryAttempts: input.MaximumRetryAttempts }),
    ...(input.ParallelizationFactor != null && { ParallelizationFactor: input.ParallelizationFactor }),
    ...(input.SourceAccessConfigurations != null && {
      SourceAccessConfigurations: serializeAws_restJson1SourceAccessConfigurations(
        input.SourceAccessConfigurations,
        context
      ),
    }),
    ...(input.TumblingWindowInSeconds != null && { TumblingWindowInSeconds: input.TumblingWindowInSeconds }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateFunctionCodeCommand = async (
  input: UpdateFunctionCodeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2015-03-31/functions/{FunctionName}/code";
  if (input.FunctionName !== undefined) {
    const labelValue: string = input.FunctionName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: FunctionName.");
    }
    resolvedPath = resolvedPath.replace("{FunctionName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: FunctionName.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.Architectures != null && {
      Architectures: serializeAws_restJson1ArchitecturesList(input.Architectures, context),
    }),
    ...(input.DryRun != null && { DryRun: input.DryRun }),
    ...(input.ImageUri != null && { ImageUri: input.ImageUri }),
    ...(input.Publish != null && { Publish: input.Publish }),
    ...(input.RevisionId != null && { RevisionId: input.RevisionId }),
    ...(input.S3Bucket != null && { S3Bucket: input.S3Bucket }),
    ...(input.S3Key != null && { S3Key: input.S3Key }),
    ...(input.S3ObjectVersion != null && { S3ObjectVersion: input.S3ObjectVersion }),
    ...(input.ZipFile != null && { ZipFile: context.base64Encoder(input.ZipFile) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateFunctionConfigurationCommand = async (
  input: UpdateFunctionConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2015-03-31/functions/{FunctionName}/configuration";
  if (input.FunctionName !== undefined) {
    const labelValue: string = input.FunctionName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: FunctionName.");
    }
    resolvedPath = resolvedPath.replace("{FunctionName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: FunctionName.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.DeadLetterConfig != null && {
      DeadLetterConfig: serializeAws_restJson1DeadLetterConfig(input.DeadLetterConfig, context),
    }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Environment != null && { Environment: serializeAws_restJson1Environment(input.Environment, context) }),
    ...(input.EphemeralStorage != null && {
      EphemeralStorage: serializeAws_restJson1EphemeralStorage(input.EphemeralStorage, context),
    }),
    ...(input.FileSystemConfigs != null && {
      FileSystemConfigs: serializeAws_restJson1FileSystemConfigList(input.FileSystemConfigs, context),
    }),
    ...(input.Handler != null && { Handler: input.Handler }),
    ...(input.ImageConfig != null && { ImageConfig: serializeAws_restJson1ImageConfig(input.ImageConfig, context) }),
    ...(input.KMSKeyArn != null && { KMSKeyArn: input.KMSKeyArn }),
    ...(input.Layers != null && { Layers: serializeAws_restJson1LayerList(input.Layers, context) }),
    ...(input.MemorySize != null && { MemorySize: input.MemorySize }),
    ...(input.RevisionId != null && { RevisionId: input.RevisionId }),
    ...(input.Role != null && { Role: input.Role }),
    ...(input.Runtime != null && { Runtime: input.Runtime }),
    ...(input.Timeout != null && { Timeout: input.Timeout }),
    ...(input.TracingConfig != null && {
      TracingConfig: serializeAws_restJson1TracingConfig(input.TracingConfig, context),
    }),
    ...(input.VpcConfig != null && { VpcConfig: serializeAws_restJson1VpcConfig(input.VpcConfig, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateFunctionEventInvokeConfigCommand = async (
  input: UpdateFunctionEventInvokeConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2019-09-25/functions/{FunctionName}/event-invoke-config";
  if (input.FunctionName !== undefined) {
    const labelValue: string = input.FunctionName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: FunctionName.");
    }
    resolvedPath = resolvedPath.replace("{FunctionName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: FunctionName.");
  }
  const query: any = {
    ...(input.Qualifier !== undefined && { Qualifier: input.Qualifier }),
  };
  let body: any;
  body = JSON.stringify({
    ...(input.DestinationConfig != null && {
      DestinationConfig: serializeAws_restJson1DestinationConfig(input.DestinationConfig, context),
    }),
    ...(input.MaximumEventAgeInSeconds != null && { MaximumEventAgeInSeconds: input.MaximumEventAgeInSeconds }),
    ...(input.MaximumRetryAttempts != null && { MaximumRetryAttempts: input.MaximumRetryAttempts }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1UpdateFunctionUrlConfigCommand = async (
  input: UpdateFunctionUrlConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2021-10-31/functions/{FunctionName}/url";
  if (input.FunctionName !== undefined) {
    const labelValue: string = input.FunctionName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: FunctionName.");
    }
    resolvedPath = resolvedPath.replace("{FunctionName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: FunctionName.");
  }
  const query: any = {
    ...(input.Qualifier !== undefined && { Qualifier: input.Qualifier }),
  };
  let body: any;
  body = JSON.stringify({
    ...(input.AuthType != null && { AuthType: input.AuthType }),
    ...(input.Cors != null && { Cors: serializeAws_restJson1Cors(input.Cors, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const deserializeAws_restJson1AddLayerVersionPermissionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddLayerVersionPermissionCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1AddLayerVersionPermissionCommandError(output, context);
  }
  const contents: AddLayerVersionPermissionCommandOutput = {
    $metadata: deserializeMetadata(output),
    RevisionId: undefined,
    Statement: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.RevisionId !== undefined && data.RevisionId !== null) {
    contents.RevisionId = __expectString(data.RevisionId);
  }
  if (data.Statement !== undefined && data.Statement !== null) {
    contents.Statement = __expectString(data.Statement);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1AddLayerVersionPermissionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddLayerVersionPermissionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.lambda#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "PolicyLengthExceededException":
    case "com.amazonaws.lambda#PolicyLengthExceededException":
      throw await deserializeAws_restJson1PolicyLengthExceededExceptionResponse(parsedOutput, context);
    case "PreconditionFailedException":
    case "com.amazonaws.lambda#PreconditionFailedException":
      throw await deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context);
    case "ResourceConflictException":
    case "com.amazonaws.lambda#ResourceConflictException":
      throw await deserializeAws_restJson1ResourceConflictExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      throw await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1AddPermissionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddPermissionCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1AddPermissionCommandError(output, context);
  }
  const contents: AddPermissionCommandOutput = {
    $metadata: deserializeMetadata(output),
    Statement: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Statement !== undefined && data.Statement !== null) {
    contents.Statement = __expectString(data.Statement);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1AddPermissionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddPermissionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.lambda#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "PolicyLengthExceededException":
    case "com.amazonaws.lambda#PolicyLengthExceededException":
      throw await deserializeAws_restJson1PolicyLengthExceededExceptionResponse(parsedOutput, context);
    case "PreconditionFailedException":
    case "com.amazonaws.lambda#PreconditionFailedException":
      throw await deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context);
    case "ResourceConflictException":
    case "com.amazonaws.lambda#ResourceConflictException":
      throw await deserializeAws_restJson1ResourceConflictExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      throw await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateAliasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAliasCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateAliasCommandError(output, context);
  }
  const contents: CreateAliasCommandOutput = {
    $metadata: deserializeMetadata(output),
    AliasArn: undefined,
    Description: undefined,
    FunctionVersion: undefined,
    Name: undefined,
    RevisionId: undefined,
    RoutingConfig: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AliasArn !== undefined && data.AliasArn !== null) {
    contents.AliasArn = __expectString(data.AliasArn);
  }
  if (data.Description !== undefined && data.Description !== null) {
    contents.Description = __expectString(data.Description);
  }
  if (data.FunctionVersion !== undefined && data.FunctionVersion !== null) {
    contents.FunctionVersion = __expectString(data.FunctionVersion);
  }
  if (data.Name !== undefined && data.Name !== null) {
    contents.Name = __expectString(data.Name);
  }
  if (data.RevisionId !== undefined && data.RevisionId !== null) {
    contents.RevisionId = __expectString(data.RevisionId);
  }
  if (data.RoutingConfig !== undefined && data.RoutingConfig !== null) {
    contents.RoutingConfig = deserializeAws_restJson1AliasRoutingConfiguration(data.RoutingConfig, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateAliasCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAliasCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.lambda#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceConflictException":
    case "com.amazonaws.lambda#ResourceConflictException":
      throw await deserializeAws_restJson1ResourceConflictExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      throw await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateCodeSigningConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCodeSigningConfigCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateCodeSigningConfigCommandError(output, context);
  }
  const contents: CreateCodeSigningConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    CodeSigningConfig: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CodeSigningConfig !== undefined && data.CodeSigningConfig !== null) {
    contents.CodeSigningConfig = deserializeAws_restJson1CodeSigningConfig(data.CodeSigningConfig, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateCodeSigningConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCodeSigningConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.lambda#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      throw await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateEventSourceMappingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEventSourceMappingCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateEventSourceMappingCommandError(output, context);
  }
  const contents: CreateEventSourceMappingCommandOutput = {
    $metadata: deserializeMetadata(output),
    BatchSize: undefined,
    BisectBatchOnFunctionError: undefined,
    DestinationConfig: undefined,
    EventSourceArn: undefined,
    FilterCriteria: undefined,
    FunctionArn: undefined,
    FunctionResponseTypes: undefined,
    LastModified: undefined,
    LastProcessingResult: undefined,
    MaximumBatchingWindowInSeconds: undefined,
    MaximumRecordAgeInSeconds: undefined,
    MaximumRetryAttempts: undefined,
    ParallelizationFactor: undefined,
    Queues: undefined,
    SelfManagedEventSource: undefined,
    SourceAccessConfigurations: undefined,
    StartingPosition: undefined,
    StartingPositionTimestamp: undefined,
    State: undefined,
    StateTransitionReason: undefined,
    Topics: undefined,
    TumblingWindowInSeconds: undefined,
    UUID: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.BatchSize !== undefined && data.BatchSize !== null) {
    contents.BatchSize = __expectInt32(data.BatchSize);
  }
  if (data.BisectBatchOnFunctionError !== undefined && data.BisectBatchOnFunctionError !== null) {
    contents.BisectBatchOnFunctionError = __expectBoolean(data.BisectBatchOnFunctionError);
  }
  if (data.DestinationConfig !== undefined && data.DestinationConfig !== null) {
    contents.DestinationConfig = deserializeAws_restJson1DestinationConfig(data.DestinationConfig, context);
  }
  if (data.EventSourceArn !== undefined && data.EventSourceArn !== null) {
    contents.EventSourceArn = __expectString(data.EventSourceArn);
  }
  if (data.FilterCriteria !== undefined && data.FilterCriteria !== null) {
    contents.FilterCriteria = deserializeAws_restJson1FilterCriteria(data.FilterCriteria, context);
  }
  if (data.FunctionArn !== undefined && data.FunctionArn !== null) {
    contents.FunctionArn = __expectString(data.FunctionArn);
  }
  if (data.FunctionResponseTypes !== undefined && data.FunctionResponseTypes !== null) {
    contents.FunctionResponseTypes = deserializeAws_restJson1FunctionResponseTypeList(
      data.FunctionResponseTypes,
      context
    );
  }
  if (data.LastModified !== undefined && data.LastModified !== null) {
    contents.LastModified = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.LastModified)));
  }
  if (data.LastProcessingResult !== undefined && data.LastProcessingResult !== null) {
    contents.LastProcessingResult = __expectString(data.LastProcessingResult);
  }
  if (data.MaximumBatchingWindowInSeconds !== undefined && data.MaximumBatchingWindowInSeconds !== null) {
    contents.MaximumBatchingWindowInSeconds = __expectInt32(data.MaximumBatchingWindowInSeconds);
  }
  if (data.MaximumRecordAgeInSeconds !== undefined && data.MaximumRecordAgeInSeconds !== null) {
    contents.MaximumRecordAgeInSeconds = __expectInt32(data.MaximumRecordAgeInSeconds);
  }
  if (data.MaximumRetryAttempts !== undefined && data.MaximumRetryAttempts !== null) {
    contents.MaximumRetryAttempts = __expectInt32(data.MaximumRetryAttempts);
  }
  if (data.ParallelizationFactor !== undefined && data.ParallelizationFactor !== null) {
    contents.ParallelizationFactor = __expectInt32(data.ParallelizationFactor);
  }
  if (data.Queues !== undefined && data.Queues !== null) {
    contents.Queues = deserializeAws_restJson1Queues(data.Queues, context);
  }
  if (data.SelfManagedEventSource !== undefined && data.SelfManagedEventSource !== null) {
    contents.SelfManagedEventSource = deserializeAws_restJson1SelfManagedEventSource(
      data.SelfManagedEventSource,
      context
    );
  }
  if (data.SourceAccessConfigurations !== undefined && data.SourceAccessConfigurations !== null) {
    contents.SourceAccessConfigurations = deserializeAws_restJson1SourceAccessConfigurations(
      data.SourceAccessConfigurations,
      context
    );
  }
  if (data.StartingPosition !== undefined && data.StartingPosition !== null) {
    contents.StartingPosition = __expectString(data.StartingPosition);
  }
  if (data.StartingPositionTimestamp !== undefined && data.StartingPositionTimestamp !== null) {
    contents.StartingPositionTimestamp = __expectNonNull(
      __parseEpochTimestamp(__expectNumber(data.StartingPositionTimestamp))
    );
  }
  if (data.State !== undefined && data.State !== null) {
    contents.State = __expectString(data.State);
  }
  if (data.StateTransitionReason !== undefined && data.StateTransitionReason !== null) {
    contents.StateTransitionReason = __expectString(data.StateTransitionReason);
  }
  if (data.Topics !== undefined && data.Topics !== null) {
    contents.Topics = deserializeAws_restJson1Topics(data.Topics, context);
  }
  if (data.TumblingWindowInSeconds !== undefined && data.TumblingWindowInSeconds !== null) {
    contents.TumblingWindowInSeconds = __expectInt32(data.TumblingWindowInSeconds);
  }
  if (data.UUID !== undefined && data.UUID !== null) {
    contents.UUID = __expectString(data.UUID);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateEventSourceMappingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEventSourceMappingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.lambda#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceConflictException":
    case "com.amazonaws.lambda#ResourceConflictException":
      throw await deserializeAws_restJson1ResourceConflictExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      throw await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateFunctionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFunctionCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateFunctionCommandError(output, context);
  }
  const contents: CreateFunctionCommandOutput = {
    $metadata: deserializeMetadata(output),
    Architectures: undefined,
    CodeSha256: undefined,
    CodeSize: undefined,
    DeadLetterConfig: undefined,
    Description: undefined,
    Environment: undefined,
    EphemeralStorage: undefined,
    FileSystemConfigs: undefined,
    FunctionArn: undefined,
    FunctionName: undefined,
    Handler: undefined,
    ImageConfigResponse: undefined,
    KMSKeyArn: undefined,
    LastModified: undefined,
    LastUpdateStatus: undefined,
    LastUpdateStatusReason: undefined,
    LastUpdateStatusReasonCode: undefined,
    Layers: undefined,
    MasterArn: undefined,
    MemorySize: undefined,
    PackageType: undefined,
    RevisionId: undefined,
    Role: undefined,
    Runtime: undefined,
    SigningJobArn: undefined,
    SigningProfileVersionArn: undefined,
    State: undefined,
    StateReason: undefined,
    StateReasonCode: undefined,
    Timeout: undefined,
    TracingConfig: undefined,
    Version: undefined,
    VpcConfig: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Architectures !== undefined && data.Architectures !== null) {
    contents.Architectures = deserializeAws_restJson1ArchitecturesList(data.Architectures, context);
  }
  if (data.CodeSha256 !== undefined && data.CodeSha256 !== null) {
    contents.CodeSha256 = __expectString(data.CodeSha256);
  }
  if (data.CodeSize !== undefined && data.CodeSize !== null) {
    contents.CodeSize = __expectLong(data.CodeSize);
  }
  if (data.DeadLetterConfig !== undefined && data.DeadLetterConfig !== null) {
    contents.DeadLetterConfig = deserializeAws_restJson1DeadLetterConfig(data.DeadLetterConfig, context);
  }
  if (data.Description !== undefined && data.Description !== null) {
    contents.Description = __expectString(data.Description);
  }
  if (data.Environment !== undefined && data.Environment !== null) {
    contents.Environment = deserializeAws_restJson1EnvironmentResponse(data.Environment, context);
  }
  if (data.EphemeralStorage !== undefined && data.EphemeralStorage !== null) {
    contents.EphemeralStorage = deserializeAws_restJson1EphemeralStorage(data.EphemeralStorage, context);
  }
  if (data.FileSystemConfigs !== undefined && data.FileSystemConfigs !== null) {
    contents.FileSystemConfigs = deserializeAws_restJson1FileSystemConfigList(data.FileSystemConfigs, context);
  }
  if (data.FunctionArn !== undefined && data.FunctionArn !== null) {
    contents.FunctionArn = __expectString(data.FunctionArn);
  }
  if (data.FunctionName !== undefined && data.FunctionName !== null) {
    contents.FunctionName = __expectString(data.FunctionName);
  }
  if (data.Handler !== undefined && data.Handler !== null) {
    contents.Handler = __expectString(data.Handler);
  }
  if (data.ImageConfigResponse !== undefined && data.ImageConfigResponse !== null) {
    contents.ImageConfigResponse = deserializeAws_restJson1ImageConfigResponse(data.ImageConfigResponse, context);
  }
  if (data.KMSKeyArn !== undefined && data.KMSKeyArn !== null) {
    contents.KMSKeyArn = __expectString(data.KMSKeyArn);
  }
  if (data.LastModified !== undefined && data.LastModified !== null) {
    contents.LastModified = __expectString(data.LastModified);
  }
  if (data.LastUpdateStatus !== undefined && data.LastUpdateStatus !== null) {
    contents.LastUpdateStatus = __expectString(data.LastUpdateStatus);
  }
  if (data.LastUpdateStatusReason !== undefined && data.LastUpdateStatusReason !== null) {
    contents.LastUpdateStatusReason = __expectString(data.LastUpdateStatusReason);
  }
  if (data.LastUpdateStatusReasonCode !== undefined && data.LastUpdateStatusReasonCode !== null) {
    contents.LastUpdateStatusReasonCode = __expectString(data.LastUpdateStatusReasonCode);
  }
  if (data.Layers !== undefined && data.Layers !== null) {
    contents.Layers = deserializeAws_restJson1LayersReferenceList(data.Layers, context);
  }
  if (data.MasterArn !== undefined && data.MasterArn !== null) {
    contents.MasterArn = __expectString(data.MasterArn);
  }
  if (data.MemorySize !== undefined && data.MemorySize !== null) {
    contents.MemorySize = __expectInt32(data.MemorySize);
  }
  if (data.PackageType !== undefined && data.PackageType !== null) {
    contents.PackageType = __expectString(data.PackageType);
  }
  if (data.RevisionId !== undefined && data.RevisionId !== null) {
    contents.RevisionId = __expectString(data.RevisionId);
  }
  if (data.Role !== undefined && data.Role !== null) {
    contents.Role = __expectString(data.Role);
  }
  if (data.Runtime !== undefined && data.Runtime !== null) {
    contents.Runtime = __expectString(data.Runtime);
  }
  if (data.SigningJobArn !== undefined && data.SigningJobArn !== null) {
    contents.SigningJobArn = __expectString(data.SigningJobArn);
  }
  if (data.SigningProfileVersionArn !== undefined && data.SigningProfileVersionArn !== null) {
    contents.SigningProfileVersionArn = __expectString(data.SigningProfileVersionArn);
  }
  if (data.State !== undefined && data.State !== null) {
    contents.State = __expectString(data.State);
  }
  if (data.StateReason !== undefined && data.StateReason !== null) {
    contents.StateReason = __expectString(data.StateReason);
  }
  if (data.StateReasonCode !== undefined && data.StateReasonCode !== null) {
    contents.StateReasonCode = __expectString(data.StateReasonCode);
  }
  if (data.Timeout !== undefined && data.Timeout !== null) {
    contents.Timeout = __expectInt32(data.Timeout);
  }
  if (data.TracingConfig !== undefined && data.TracingConfig !== null) {
    contents.TracingConfig = deserializeAws_restJson1TracingConfigResponse(data.TracingConfig, context);
  }
  if (data.Version !== undefined && data.Version !== null) {
    contents.Version = __expectString(data.Version);
  }
  if (data.VpcConfig !== undefined && data.VpcConfig !== null) {
    contents.VpcConfig = deserializeAws_restJson1VpcConfigResponse(data.VpcConfig, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateFunctionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFunctionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CodeSigningConfigNotFoundException":
    case "com.amazonaws.lambda#CodeSigningConfigNotFoundException":
      throw await deserializeAws_restJson1CodeSigningConfigNotFoundExceptionResponse(parsedOutput, context);
    case "CodeStorageExceededException":
    case "com.amazonaws.lambda#CodeStorageExceededException":
      throw await deserializeAws_restJson1CodeStorageExceededExceptionResponse(parsedOutput, context);
    case "CodeVerificationFailedException":
    case "com.amazonaws.lambda#CodeVerificationFailedException":
      throw await deserializeAws_restJson1CodeVerificationFailedExceptionResponse(parsedOutput, context);
    case "InvalidCodeSignatureException":
    case "com.amazonaws.lambda#InvalidCodeSignatureException":
      throw await deserializeAws_restJson1InvalidCodeSignatureExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.lambda#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceConflictException":
    case "com.amazonaws.lambda#ResourceConflictException":
      throw await deserializeAws_restJson1ResourceConflictExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      throw await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateFunctionUrlConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFunctionUrlConfigCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateFunctionUrlConfigCommandError(output, context);
  }
  const contents: CreateFunctionUrlConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    AuthType: undefined,
    Cors: undefined,
    CreationTime: undefined,
    FunctionArn: undefined,
    FunctionUrl: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AuthType !== undefined && data.AuthType !== null) {
    contents.AuthType = __expectString(data.AuthType);
  }
  if (data.Cors !== undefined && data.Cors !== null) {
    contents.Cors = deserializeAws_restJson1Cors(data.Cors, context);
  }
  if (data.CreationTime !== undefined && data.CreationTime !== null) {
    contents.CreationTime = __expectString(data.CreationTime);
  }
  if (data.FunctionArn !== undefined && data.FunctionArn !== null) {
    contents.FunctionArn = __expectString(data.FunctionArn);
  }
  if (data.FunctionUrl !== undefined && data.FunctionUrl !== null) {
    contents.FunctionUrl = __expectString(data.FunctionUrl);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateFunctionUrlConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFunctionUrlConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.lambda#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceConflictException":
    case "com.amazonaws.lambda#ResourceConflictException":
      throw await deserializeAws_restJson1ResourceConflictExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      throw await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteAliasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAliasCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteAliasCommandError(output, context);
  }
  const contents: DeleteAliasCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteAliasCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAliasCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.lambda#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceConflictException":
    case "com.amazonaws.lambda#ResourceConflictException":
      throw await deserializeAws_restJson1ResourceConflictExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      throw await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteCodeSigningConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCodeSigningConfigCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteCodeSigningConfigCommandError(output, context);
  }
  const contents: DeleteCodeSigningConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteCodeSigningConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCodeSigningConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.lambda#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceConflictException":
    case "com.amazonaws.lambda#ResourceConflictException":
      throw await deserializeAws_restJson1ResourceConflictExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      throw await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteEventSourceMappingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEventSourceMappingCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteEventSourceMappingCommandError(output, context);
  }
  const contents: DeleteEventSourceMappingCommandOutput = {
    $metadata: deserializeMetadata(output),
    BatchSize: undefined,
    BisectBatchOnFunctionError: undefined,
    DestinationConfig: undefined,
    EventSourceArn: undefined,
    FilterCriteria: undefined,
    FunctionArn: undefined,
    FunctionResponseTypes: undefined,
    LastModified: undefined,
    LastProcessingResult: undefined,
    MaximumBatchingWindowInSeconds: undefined,
    MaximumRecordAgeInSeconds: undefined,
    MaximumRetryAttempts: undefined,
    ParallelizationFactor: undefined,
    Queues: undefined,
    SelfManagedEventSource: undefined,
    SourceAccessConfigurations: undefined,
    StartingPosition: undefined,
    StartingPositionTimestamp: undefined,
    State: undefined,
    StateTransitionReason: undefined,
    Topics: undefined,
    TumblingWindowInSeconds: undefined,
    UUID: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.BatchSize !== undefined && data.BatchSize !== null) {
    contents.BatchSize = __expectInt32(data.BatchSize);
  }
  if (data.BisectBatchOnFunctionError !== undefined && data.BisectBatchOnFunctionError !== null) {
    contents.BisectBatchOnFunctionError = __expectBoolean(data.BisectBatchOnFunctionError);
  }
  if (data.DestinationConfig !== undefined && data.DestinationConfig !== null) {
    contents.DestinationConfig = deserializeAws_restJson1DestinationConfig(data.DestinationConfig, context);
  }
  if (data.EventSourceArn !== undefined && data.EventSourceArn !== null) {
    contents.EventSourceArn = __expectString(data.EventSourceArn);
  }
  if (data.FilterCriteria !== undefined && data.FilterCriteria !== null) {
    contents.FilterCriteria = deserializeAws_restJson1FilterCriteria(data.FilterCriteria, context);
  }
  if (data.FunctionArn !== undefined && data.FunctionArn !== null) {
    contents.FunctionArn = __expectString(data.FunctionArn);
  }
  if (data.FunctionResponseTypes !== undefined && data.FunctionResponseTypes !== null) {
    contents.FunctionResponseTypes = deserializeAws_restJson1FunctionResponseTypeList(
      data.FunctionResponseTypes,
      context
    );
  }
  if (data.LastModified !== undefined && data.LastModified !== null) {
    contents.LastModified = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.LastModified)));
  }
  if (data.LastProcessingResult !== undefined && data.LastProcessingResult !== null) {
    contents.LastProcessingResult = __expectString(data.LastProcessingResult);
  }
  if (data.MaximumBatchingWindowInSeconds !== undefined && data.MaximumBatchingWindowInSeconds !== null) {
    contents.MaximumBatchingWindowInSeconds = __expectInt32(data.MaximumBatchingWindowInSeconds);
  }
  if (data.MaximumRecordAgeInSeconds !== undefined && data.MaximumRecordAgeInSeconds !== null) {
    contents.MaximumRecordAgeInSeconds = __expectInt32(data.MaximumRecordAgeInSeconds);
  }
  if (data.MaximumRetryAttempts !== undefined && data.MaximumRetryAttempts !== null) {
    contents.MaximumRetryAttempts = __expectInt32(data.MaximumRetryAttempts);
  }
  if (data.ParallelizationFactor !== undefined && data.ParallelizationFactor !== null) {
    contents.ParallelizationFactor = __expectInt32(data.ParallelizationFactor);
  }
  if (data.Queues !== undefined && data.Queues !== null) {
    contents.Queues = deserializeAws_restJson1Queues(data.Queues, context);
  }
  if (data.SelfManagedEventSource !== undefined && data.SelfManagedEventSource !== null) {
    contents.SelfManagedEventSource = deserializeAws_restJson1SelfManagedEventSource(
      data.SelfManagedEventSource,
      context
    );
  }
  if (data.SourceAccessConfigurations !== undefined && data.SourceAccessConfigurations !== null) {
    contents.SourceAccessConfigurations = deserializeAws_restJson1SourceAccessConfigurations(
      data.SourceAccessConfigurations,
      context
    );
  }
  if (data.StartingPosition !== undefined && data.StartingPosition !== null) {
    contents.StartingPosition = __expectString(data.StartingPosition);
  }
  if (data.StartingPositionTimestamp !== undefined && data.StartingPositionTimestamp !== null) {
    contents.StartingPositionTimestamp = __expectNonNull(
      __parseEpochTimestamp(__expectNumber(data.StartingPositionTimestamp))
    );
  }
  if (data.State !== undefined && data.State !== null) {
    contents.State = __expectString(data.State);
  }
  if (data.StateTransitionReason !== undefined && data.StateTransitionReason !== null) {
    contents.StateTransitionReason = __expectString(data.StateTransitionReason);
  }
  if (data.Topics !== undefined && data.Topics !== null) {
    contents.Topics = deserializeAws_restJson1Topics(data.Topics, context);
  }
  if (data.TumblingWindowInSeconds !== undefined && data.TumblingWindowInSeconds !== null) {
    contents.TumblingWindowInSeconds = __expectInt32(data.TumblingWindowInSeconds);
  }
  if (data.UUID !== undefined && data.UUID !== null) {
    contents.UUID = __expectString(data.UUID);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteEventSourceMappingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEventSourceMappingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.lambda#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.lambda#ResourceInUseException":
      throw await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      throw await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteFunctionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFunctionCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteFunctionCommandError(output, context);
  }
  const contents: DeleteFunctionCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteFunctionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFunctionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.lambda#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceConflictException":
    case "com.amazonaws.lambda#ResourceConflictException":
      throw await deserializeAws_restJson1ResourceConflictExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      throw await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteFunctionCodeSigningConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFunctionCodeSigningConfigCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteFunctionCodeSigningConfigCommandError(output, context);
  }
  const contents: DeleteFunctionCodeSigningConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteFunctionCodeSigningConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFunctionCodeSigningConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CodeSigningConfigNotFoundException":
    case "com.amazonaws.lambda#CodeSigningConfigNotFoundException":
      throw await deserializeAws_restJson1CodeSigningConfigNotFoundExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.lambda#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceConflictException":
    case "com.amazonaws.lambda#ResourceConflictException":
      throw await deserializeAws_restJson1ResourceConflictExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      throw await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteFunctionConcurrencyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFunctionConcurrencyCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteFunctionConcurrencyCommandError(output, context);
  }
  const contents: DeleteFunctionConcurrencyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteFunctionConcurrencyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFunctionConcurrencyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.lambda#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceConflictException":
    case "com.amazonaws.lambda#ResourceConflictException":
      throw await deserializeAws_restJson1ResourceConflictExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      throw await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteFunctionEventInvokeConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFunctionEventInvokeConfigCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteFunctionEventInvokeConfigCommandError(output, context);
  }
  const contents: DeleteFunctionEventInvokeConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteFunctionEventInvokeConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFunctionEventInvokeConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.lambda#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceConflictException":
    case "com.amazonaws.lambda#ResourceConflictException":
      throw await deserializeAws_restJson1ResourceConflictExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      throw await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteFunctionUrlConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFunctionUrlConfigCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteFunctionUrlConfigCommandError(output, context);
  }
  const contents: DeleteFunctionUrlConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteFunctionUrlConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFunctionUrlConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceConflictException":
    case "com.amazonaws.lambda#ResourceConflictException":
      throw await deserializeAws_restJson1ResourceConflictExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      throw await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteLayerVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLayerVersionCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteLayerVersionCommandError(output, context);
  }
  const contents: DeleteLayerVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteLayerVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLayerVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      throw await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteProvisionedConcurrencyConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProvisionedConcurrencyConfigCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteProvisionedConcurrencyConfigCommandError(output, context);
  }
  const contents: DeleteProvisionedConcurrencyConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteProvisionedConcurrencyConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProvisionedConcurrencyConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.lambda#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceConflictException":
    case "com.amazonaws.lambda#ResourceConflictException":
      throw await deserializeAws_restJson1ResourceConflictExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      throw await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetAccountSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccountSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetAccountSettingsCommandError(output, context);
  }
  const contents: GetAccountSettingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    AccountLimit: undefined,
    AccountUsage: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AccountLimit !== undefined && data.AccountLimit !== null) {
    contents.AccountLimit = deserializeAws_restJson1AccountLimit(data.AccountLimit, context);
  }
  if (data.AccountUsage !== undefined && data.AccountUsage !== null) {
    contents.AccountUsage = deserializeAws_restJson1AccountUsage(data.AccountUsage, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetAccountSettingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccountSettingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      throw await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetAliasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAliasCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetAliasCommandError(output, context);
  }
  const contents: GetAliasCommandOutput = {
    $metadata: deserializeMetadata(output),
    AliasArn: undefined,
    Description: undefined,
    FunctionVersion: undefined,
    Name: undefined,
    RevisionId: undefined,
    RoutingConfig: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AliasArn !== undefined && data.AliasArn !== null) {
    contents.AliasArn = __expectString(data.AliasArn);
  }
  if (data.Description !== undefined && data.Description !== null) {
    contents.Description = __expectString(data.Description);
  }
  if (data.FunctionVersion !== undefined && data.FunctionVersion !== null) {
    contents.FunctionVersion = __expectString(data.FunctionVersion);
  }
  if (data.Name !== undefined && data.Name !== null) {
    contents.Name = __expectString(data.Name);
  }
  if (data.RevisionId !== undefined && data.RevisionId !== null) {
    contents.RevisionId = __expectString(data.RevisionId);
  }
  if (data.RoutingConfig !== undefined && data.RoutingConfig !== null) {
    contents.RoutingConfig = deserializeAws_restJson1AliasRoutingConfiguration(data.RoutingConfig, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetAliasCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAliasCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.lambda#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      throw await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetCodeSigningConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCodeSigningConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetCodeSigningConfigCommandError(output, context);
  }
  const contents: GetCodeSigningConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    CodeSigningConfig: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CodeSigningConfig !== undefined && data.CodeSigningConfig !== null) {
    contents.CodeSigningConfig = deserializeAws_restJson1CodeSigningConfig(data.CodeSigningConfig, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetCodeSigningConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCodeSigningConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.lambda#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      throw await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetEventSourceMappingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEventSourceMappingCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetEventSourceMappingCommandError(output, context);
  }
  const contents: GetEventSourceMappingCommandOutput = {
    $metadata: deserializeMetadata(output),
    BatchSize: undefined,
    BisectBatchOnFunctionError: undefined,
    DestinationConfig: undefined,
    EventSourceArn: undefined,
    FilterCriteria: undefined,
    FunctionArn: undefined,
    FunctionResponseTypes: undefined,
    LastModified: undefined,
    LastProcessingResult: undefined,
    MaximumBatchingWindowInSeconds: undefined,
    MaximumRecordAgeInSeconds: undefined,
    MaximumRetryAttempts: undefined,
    ParallelizationFactor: undefined,
    Queues: undefined,
    SelfManagedEventSource: undefined,
    SourceAccessConfigurations: undefined,
    StartingPosition: undefined,
    StartingPositionTimestamp: undefined,
    State: undefined,
    StateTransitionReason: undefined,
    Topics: undefined,
    TumblingWindowInSeconds: undefined,
    UUID: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.BatchSize !== undefined && data.BatchSize !== null) {
    contents.BatchSize = __expectInt32(data.BatchSize);
  }
  if (data.BisectBatchOnFunctionError !== undefined && data.BisectBatchOnFunctionError !== null) {
    contents.BisectBatchOnFunctionError = __expectBoolean(data.BisectBatchOnFunctionError);
  }
  if (data.DestinationConfig !== undefined && data.DestinationConfig !== null) {
    contents.DestinationConfig = deserializeAws_restJson1DestinationConfig(data.DestinationConfig, context);
  }
  if (data.EventSourceArn !== undefined && data.EventSourceArn !== null) {
    contents.EventSourceArn = __expectString(data.EventSourceArn);
  }
  if (data.FilterCriteria !== undefined && data.FilterCriteria !== null) {
    contents.FilterCriteria = deserializeAws_restJson1FilterCriteria(data.FilterCriteria, context);
  }
  if (data.FunctionArn !== undefined && data.FunctionArn !== null) {
    contents.FunctionArn = __expectString(data.FunctionArn);
  }
  if (data.FunctionResponseTypes !== undefined && data.FunctionResponseTypes !== null) {
    contents.FunctionResponseTypes = deserializeAws_restJson1FunctionResponseTypeList(
      data.FunctionResponseTypes,
      context
    );
  }
  if (data.LastModified !== undefined && data.LastModified !== null) {
    contents.LastModified = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.LastModified)));
  }
  if (data.LastProcessingResult !== undefined && data.LastProcessingResult !== null) {
    contents.LastProcessingResult = __expectString(data.LastProcessingResult);
  }
  if (data.MaximumBatchingWindowInSeconds !== undefined && data.MaximumBatchingWindowInSeconds !== null) {
    contents.MaximumBatchingWindowInSeconds = __expectInt32(data.MaximumBatchingWindowInSeconds);
  }
  if (data.MaximumRecordAgeInSeconds !== undefined && data.MaximumRecordAgeInSeconds !== null) {
    contents.MaximumRecordAgeInSeconds = __expectInt32(data.MaximumRecordAgeInSeconds);
  }
  if (data.MaximumRetryAttempts !== undefined && data.MaximumRetryAttempts !== null) {
    contents.MaximumRetryAttempts = __expectInt32(data.MaximumRetryAttempts);
  }
  if (data.ParallelizationFactor !== undefined && data.ParallelizationFactor !== null) {
    contents.ParallelizationFactor = __expectInt32(data.ParallelizationFactor);
  }
  if (data.Queues !== undefined && data.Queues !== null) {
    contents.Queues = deserializeAws_restJson1Queues(data.Queues, context);
  }
  if (data.SelfManagedEventSource !== undefined && data.SelfManagedEventSource !== null) {
    contents.SelfManagedEventSource = deserializeAws_restJson1SelfManagedEventSource(
      data.SelfManagedEventSource,
      context
    );
  }
  if (data.SourceAccessConfigurations !== undefined && data.SourceAccessConfigurations !== null) {
    contents.SourceAccessConfigurations = deserializeAws_restJson1SourceAccessConfigurations(
      data.SourceAccessConfigurations,
      context
    );
  }
  if (data.StartingPosition !== undefined && data.StartingPosition !== null) {
    contents.StartingPosition = __expectString(data.StartingPosition);
  }
  if (data.StartingPositionTimestamp !== undefined && data.StartingPositionTimestamp !== null) {
    contents.StartingPositionTimestamp = __expectNonNull(
      __parseEpochTimestamp(__expectNumber(data.StartingPositionTimestamp))
    );
  }
  if (data.State !== undefined && data.State !== null) {
    contents.State = __expectString(data.State);
  }
  if (data.StateTransitionReason !== undefined && data.StateTransitionReason !== null) {
    contents.StateTransitionReason = __expectString(data.StateTransitionReason);
  }
  if (data.Topics !== undefined && data.Topics !== null) {
    contents.Topics = deserializeAws_restJson1Topics(data.Topics, context);
  }
  if (data.TumblingWindowInSeconds !== undefined && data.TumblingWindowInSeconds !== null) {
    contents.TumblingWindowInSeconds = __expectInt32(data.TumblingWindowInSeconds);
  }
  if (data.UUID !== undefined && data.UUID !== null) {
    contents.UUID = __expectString(data.UUID);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetEventSourceMappingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEventSourceMappingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.lambda#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      throw await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetFunctionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFunctionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetFunctionCommandError(output, context);
  }
  const contents: GetFunctionCommandOutput = {
    $metadata: deserializeMetadata(output),
    Code: undefined,
    Concurrency: undefined,
    Configuration: undefined,
    Tags: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Code !== undefined && data.Code !== null) {
    contents.Code = deserializeAws_restJson1FunctionCodeLocation(data.Code, context);
  }
  if (data.Concurrency !== undefined && data.Concurrency !== null) {
    contents.Concurrency = deserializeAws_restJson1Concurrency(data.Concurrency, context);
  }
  if (data.Configuration !== undefined && data.Configuration !== null) {
    contents.Configuration = deserializeAws_restJson1FunctionConfiguration(data.Configuration, context);
  }
  if (data.Tags !== undefined && data.Tags !== null) {
    contents.Tags = deserializeAws_restJson1Tags(data.Tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetFunctionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFunctionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.lambda#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      throw await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetFunctionCodeSigningConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFunctionCodeSigningConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetFunctionCodeSigningConfigCommandError(output, context);
  }
  const contents: GetFunctionCodeSigningConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    CodeSigningConfigArn: undefined,
    FunctionName: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CodeSigningConfigArn !== undefined && data.CodeSigningConfigArn !== null) {
    contents.CodeSigningConfigArn = __expectString(data.CodeSigningConfigArn);
  }
  if (data.FunctionName !== undefined && data.FunctionName !== null) {
    contents.FunctionName = __expectString(data.FunctionName);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetFunctionCodeSigningConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFunctionCodeSigningConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.lambda#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      throw await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetFunctionConcurrencyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFunctionConcurrencyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetFunctionConcurrencyCommandError(output, context);
  }
  const contents: GetFunctionConcurrencyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ReservedConcurrentExecutions: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ReservedConcurrentExecutions !== undefined && data.ReservedConcurrentExecutions !== null) {
    contents.ReservedConcurrentExecutions = __expectInt32(data.ReservedConcurrentExecutions);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetFunctionConcurrencyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFunctionConcurrencyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.lambda#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      throw await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetFunctionConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFunctionConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetFunctionConfigurationCommandError(output, context);
  }
  const contents: GetFunctionConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    Architectures: undefined,
    CodeSha256: undefined,
    CodeSize: undefined,
    DeadLetterConfig: undefined,
    Description: undefined,
    Environment: undefined,
    EphemeralStorage: undefined,
    FileSystemConfigs: undefined,
    FunctionArn: undefined,
    FunctionName: undefined,
    Handler: undefined,
    ImageConfigResponse: undefined,
    KMSKeyArn: undefined,
    LastModified: undefined,
    LastUpdateStatus: undefined,
    LastUpdateStatusReason: undefined,
    LastUpdateStatusReasonCode: undefined,
    Layers: undefined,
    MasterArn: undefined,
    MemorySize: undefined,
    PackageType: undefined,
    RevisionId: undefined,
    Role: undefined,
    Runtime: undefined,
    SigningJobArn: undefined,
    SigningProfileVersionArn: undefined,
    State: undefined,
    StateReason: undefined,
    StateReasonCode: undefined,
    Timeout: undefined,
    TracingConfig: undefined,
    Version: undefined,
    VpcConfig: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Architectures !== undefined && data.Architectures !== null) {
    contents.Architectures = deserializeAws_restJson1ArchitecturesList(data.Architectures, context);
  }
  if (data.CodeSha256 !== undefined && data.CodeSha256 !== null) {
    contents.CodeSha256 = __expectString(data.CodeSha256);
  }
  if (data.CodeSize !== undefined && data.CodeSize !== null) {
    contents.CodeSize = __expectLong(data.CodeSize);
  }
  if (data.DeadLetterConfig !== undefined && data.DeadLetterConfig !== null) {
    contents.DeadLetterConfig = deserializeAws_restJson1DeadLetterConfig(data.DeadLetterConfig, context);
  }
  if (data.Description !== undefined && data.Description !== null) {
    contents.Description = __expectString(data.Description);
  }
  if (data.Environment !== undefined && data.Environment !== null) {
    contents.Environment = deserializeAws_restJson1EnvironmentResponse(data.Environment, context);
  }
  if (data.EphemeralStorage !== undefined && data.EphemeralStorage !== null) {
    contents.EphemeralStorage = deserializeAws_restJson1EphemeralStorage(data.EphemeralStorage, context);
  }
  if (data.FileSystemConfigs !== undefined && data.FileSystemConfigs !== null) {
    contents.FileSystemConfigs = deserializeAws_restJson1FileSystemConfigList(data.FileSystemConfigs, context);
  }
  if (data.FunctionArn !== undefined && data.FunctionArn !== null) {
    contents.FunctionArn = __expectString(data.FunctionArn);
  }
  if (data.FunctionName !== undefined && data.FunctionName !== null) {
    contents.FunctionName = __expectString(data.FunctionName);
  }
  if (data.Handler !== undefined && data.Handler !== null) {
    contents.Handler = __expectString(data.Handler);
  }
  if (data.ImageConfigResponse !== undefined && data.ImageConfigResponse !== null) {
    contents.ImageConfigResponse = deserializeAws_restJson1ImageConfigResponse(data.ImageConfigResponse, context);
  }
  if (data.KMSKeyArn !== undefined && data.KMSKeyArn !== null) {
    contents.KMSKeyArn = __expectString(data.KMSKeyArn);
  }
  if (data.LastModified !== undefined && data.LastModified !== null) {
    contents.LastModified = __expectString(data.LastModified);
  }
  if (data.LastUpdateStatus !== undefined && data.LastUpdateStatus !== null) {
    contents.LastUpdateStatus = __expectString(data.LastUpdateStatus);
  }
  if (data.LastUpdateStatusReason !== undefined && data.LastUpdateStatusReason !== null) {
    contents.LastUpdateStatusReason = __expectString(data.LastUpdateStatusReason);
  }
  if (data.LastUpdateStatusReasonCode !== undefined && data.LastUpdateStatusReasonCode !== null) {
    contents.LastUpdateStatusReasonCode = __expectString(data.LastUpdateStatusReasonCode);
  }
  if (data.Layers !== undefined && data.Layers !== null) {
    contents.Layers = deserializeAws_restJson1LayersReferenceList(data.Layers, context);
  }
  if (data.MasterArn !== undefined && data.MasterArn !== null) {
    contents.MasterArn = __expectString(data.MasterArn);
  }
  if (data.MemorySize !== undefined && data.MemorySize !== null) {
    contents.MemorySize = __expectInt32(data.MemorySize);
  }
  if (data.PackageType !== undefined && data.PackageType !== null) {
    contents.PackageType = __expectString(data.PackageType);
  }
  if (data.RevisionId !== undefined && data.RevisionId !== null) {
    contents.RevisionId = __expectString(data.RevisionId);
  }
  if (data.Role !== undefined && data.Role !== null) {
    contents.Role = __expectString(data.Role);
  }
  if (data.Runtime !== undefined && data.Runtime !== null) {
    contents.Runtime = __expectString(data.Runtime);
  }
  if (data.SigningJobArn !== undefined && data.SigningJobArn !== null) {
    contents.SigningJobArn = __expectString(data.SigningJobArn);
  }
  if (data.SigningProfileVersionArn !== undefined && data.SigningProfileVersionArn !== null) {
    contents.SigningProfileVersionArn = __expectString(data.SigningProfileVersionArn);
  }
  if (data.State !== undefined && data.State !== null) {
    contents.State = __expectString(data.State);
  }
  if (data.StateReason !== undefined && data.StateReason !== null) {
    contents.StateReason = __expectString(data.StateReason);
  }
  if (data.StateReasonCode !== undefined && data.StateReasonCode !== null) {
    contents.StateReasonCode = __expectString(data.StateReasonCode);
  }
  if (data.Timeout !== undefined && data.Timeout !== null) {
    contents.Timeout = __expectInt32(data.Timeout);
  }
  if (data.TracingConfig !== undefined && data.TracingConfig !== null) {
    contents.TracingConfig = deserializeAws_restJson1TracingConfigResponse(data.TracingConfig, context);
  }
  if (data.Version !== undefined && data.Version !== null) {
    contents.Version = __expectString(data.Version);
  }
  if (data.VpcConfig !== undefined && data.VpcConfig !== null) {
    contents.VpcConfig = deserializeAws_restJson1VpcConfigResponse(data.VpcConfig, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetFunctionConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFunctionConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.lambda#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      throw await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetFunctionEventInvokeConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFunctionEventInvokeConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetFunctionEventInvokeConfigCommandError(output, context);
  }
  const contents: GetFunctionEventInvokeConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    DestinationConfig: undefined,
    FunctionArn: undefined,
    LastModified: undefined,
    MaximumEventAgeInSeconds: undefined,
    MaximumRetryAttempts: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DestinationConfig !== undefined && data.DestinationConfig !== null) {
    contents.DestinationConfig = deserializeAws_restJson1DestinationConfig(data.DestinationConfig, context);
  }
  if (data.FunctionArn !== undefined && data.FunctionArn !== null) {
    contents.FunctionArn = __expectString(data.FunctionArn);
  }
  if (data.LastModified !== undefined && data.LastModified !== null) {
    contents.LastModified = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.LastModified)));
  }
  if (data.MaximumEventAgeInSeconds !== undefined && data.MaximumEventAgeInSeconds !== null) {
    contents.MaximumEventAgeInSeconds = __expectInt32(data.MaximumEventAgeInSeconds);
  }
  if (data.MaximumRetryAttempts !== undefined && data.MaximumRetryAttempts !== null) {
    contents.MaximumRetryAttempts = __expectInt32(data.MaximumRetryAttempts);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetFunctionEventInvokeConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFunctionEventInvokeConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.lambda#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      throw await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetFunctionUrlConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFunctionUrlConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetFunctionUrlConfigCommandError(output, context);
  }
  const contents: GetFunctionUrlConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    AuthType: undefined,
    Cors: undefined,
    CreationTime: undefined,
    FunctionArn: undefined,
    FunctionUrl: undefined,
    LastModifiedTime: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AuthType !== undefined && data.AuthType !== null) {
    contents.AuthType = __expectString(data.AuthType);
  }
  if (data.Cors !== undefined && data.Cors !== null) {
    contents.Cors = deserializeAws_restJson1Cors(data.Cors, context);
  }
  if (data.CreationTime !== undefined && data.CreationTime !== null) {
    contents.CreationTime = __expectString(data.CreationTime);
  }
  if (data.FunctionArn !== undefined && data.FunctionArn !== null) {
    contents.FunctionArn = __expectString(data.FunctionArn);
  }
  if (data.FunctionUrl !== undefined && data.FunctionUrl !== null) {
    contents.FunctionUrl = __expectString(data.FunctionUrl);
  }
  if (data.LastModifiedTime !== undefined && data.LastModifiedTime !== null) {
    contents.LastModifiedTime = __expectString(data.LastModifiedTime);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetFunctionUrlConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFunctionUrlConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.lambda#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      throw await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetLayerVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLayerVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetLayerVersionCommandError(output, context);
  }
  const contents: GetLayerVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    CompatibleArchitectures: undefined,
    CompatibleRuntimes: undefined,
    Content: undefined,
    CreatedDate: undefined,
    Description: undefined,
    LayerArn: undefined,
    LayerVersionArn: undefined,
    LicenseInfo: undefined,
    Version: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CompatibleArchitectures !== undefined && data.CompatibleArchitectures !== null) {
    contents.CompatibleArchitectures = deserializeAws_restJson1CompatibleArchitectures(
      data.CompatibleArchitectures,
      context
    );
  }
  if (data.CompatibleRuntimes !== undefined && data.CompatibleRuntimes !== null) {
    contents.CompatibleRuntimes = deserializeAws_restJson1CompatibleRuntimes(data.CompatibleRuntimes, context);
  }
  if (data.Content !== undefined && data.Content !== null) {
    contents.Content = deserializeAws_restJson1LayerVersionContentOutput(data.Content, context);
  }
  if (data.CreatedDate !== undefined && data.CreatedDate !== null) {
    contents.CreatedDate = __expectString(data.CreatedDate);
  }
  if (data.Description !== undefined && data.Description !== null) {
    contents.Description = __expectString(data.Description);
  }
  if (data.LayerArn !== undefined && data.LayerArn !== null) {
    contents.LayerArn = __expectString(data.LayerArn);
  }
  if (data.LayerVersionArn !== undefined && data.LayerVersionArn !== null) {
    contents.LayerVersionArn = __expectString(data.LayerVersionArn);
  }
  if (data.LicenseInfo !== undefined && data.LicenseInfo !== null) {
    contents.LicenseInfo = __expectString(data.LicenseInfo);
  }
  if (data.Version !== undefined && data.Version !== null) {
    contents.Version = __expectLong(data.Version);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetLayerVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLayerVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.lambda#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      throw await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetLayerVersionByArnCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLayerVersionByArnCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetLayerVersionByArnCommandError(output, context);
  }
  const contents: GetLayerVersionByArnCommandOutput = {
    $metadata: deserializeMetadata(output),
    CompatibleArchitectures: undefined,
    CompatibleRuntimes: undefined,
    Content: undefined,
    CreatedDate: undefined,
    Description: undefined,
    LayerArn: undefined,
    LayerVersionArn: undefined,
    LicenseInfo: undefined,
    Version: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CompatibleArchitectures !== undefined && data.CompatibleArchitectures !== null) {
    contents.CompatibleArchitectures = deserializeAws_restJson1CompatibleArchitectures(
      data.CompatibleArchitectures,
      context
    );
  }
  if (data.CompatibleRuntimes !== undefined && data.CompatibleRuntimes !== null) {
    contents.CompatibleRuntimes = deserializeAws_restJson1CompatibleRuntimes(data.CompatibleRuntimes, context);
  }
  if (data.Content !== undefined && data.Content !== null) {
    contents.Content = deserializeAws_restJson1LayerVersionContentOutput(data.Content, context);
  }
  if (data.CreatedDate !== undefined && data.CreatedDate !== null) {
    contents.CreatedDate = __expectString(data.CreatedDate);
  }
  if (data.Description !== undefined && data.Description !== null) {
    contents.Description = __expectString(data.Description);
  }
  if (data.LayerArn !== undefined && data.LayerArn !== null) {
    contents.LayerArn = __expectString(data.LayerArn);
  }
  if (data.LayerVersionArn !== undefined && data.LayerVersionArn !== null) {
    contents.LayerVersionArn = __expectString(data.LayerVersionArn);
  }
  if (data.LicenseInfo !== undefined && data.LicenseInfo !== null) {
    contents.LicenseInfo = __expectString(data.LicenseInfo);
  }
  if (data.Version !== undefined && data.Version !== null) {
    contents.Version = __expectLong(data.Version);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetLayerVersionByArnCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLayerVersionByArnCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.lambda#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      throw await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetLayerVersionPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLayerVersionPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetLayerVersionPolicyCommandError(output, context);
  }
  const contents: GetLayerVersionPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    Policy: undefined,
    RevisionId: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Policy !== undefined && data.Policy !== null) {
    contents.Policy = __expectString(data.Policy);
  }
  if (data.RevisionId !== undefined && data.RevisionId !== null) {
    contents.RevisionId = __expectString(data.RevisionId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetLayerVersionPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLayerVersionPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.lambda#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      throw await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetPolicyCommandError(output, context);
  }
  const contents: GetPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    Policy: undefined,
    RevisionId: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Policy !== undefined && data.Policy !== null) {
    contents.Policy = __expectString(data.Policy);
  }
  if (data.RevisionId !== undefined && data.RevisionId !== null) {
    contents.RevisionId = __expectString(data.RevisionId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.lambda#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      throw await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetProvisionedConcurrencyConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetProvisionedConcurrencyConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetProvisionedConcurrencyConfigCommandError(output, context);
  }
  const contents: GetProvisionedConcurrencyConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    AllocatedProvisionedConcurrentExecutions: undefined,
    AvailableProvisionedConcurrentExecutions: undefined,
    LastModified: undefined,
    RequestedProvisionedConcurrentExecutions: undefined,
    Status: undefined,
    StatusReason: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (
    data.AllocatedProvisionedConcurrentExecutions !== undefined &&
    data.AllocatedProvisionedConcurrentExecutions !== null
  ) {
    contents.AllocatedProvisionedConcurrentExecutions = __expectInt32(data.AllocatedProvisionedConcurrentExecutions);
  }
  if (
    data.AvailableProvisionedConcurrentExecutions !== undefined &&
    data.AvailableProvisionedConcurrentExecutions !== null
  ) {
    contents.AvailableProvisionedConcurrentExecutions = __expectInt32(data.AvailableProvisionedConcurrentExecutions);
  }
  if (data.LastModified !== undefined && data.LastModified !== null) {
    contents.LastModified = __expectString(data.LastModified);
  }
  if (
    data.RequestedProvisionedConcurrentExecutions !== undefined &&
    data.RequestedProvisionedConcurrentExecutions !== null
  ) {
    contents.RequestedProvisionedConcurrentExecutions = __expectInt32(data.RequestedProvisionedConcurrentExecutions);
  }
  if (data.Status !== undefined && data.Status !== null) {
    contents.Status = __expectString(data.Status);
  }
  if (data.StatusReason !== undefined && data.StatusReason !== null) {
    contents.StatusReason = __expectString(data.StatusReason);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetProvisionedConcurrencyConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetProvisionedConcurrencyConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.lambda#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ProvisionedConcurrencyConfigNotFoundException":
    case "com.amazonaws.lambda#ProvisionedConcurrencyConfigNotFoundException":
      throw await deserializeAws_restJson1ProvisionedConcurrencyConfigNotFoundExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      throw await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1InvokeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InvokeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1InvokeCommandError(output, context);
  }
  const contents: InvokeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ExecutedVersion: undefined,
    FunctionError: undefined,
    LogResult: undefined,
    Payload: undefined,
    StatusCode: undefined,
  };
  if (output.headers["x-amz-function-error"] !== undefined) {
    contents.FunctionError = output.headers["x-amz-function-error"];
  }
  if (output.headers["x-amz-log-result"] !== undefined) {
    contents.LogResult = output.headers["x-amz-log-result"];
  }
  if (output.headers["x-amz-executed-version"] !== undefined) {
    contents.ExecutedVersion = output.headers["x-amz-executed-version"];
  }
  const data: any = await collectBody(output.body, context);
  contents.Payload = data;
  if (contents.StatusCode === undefined) {
    contents.StatusCode = output.statusCode;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1InvokeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InvokeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EC2AccessDeniedException":
    case "com.amazonaws.lambda#EC2AccessDeniedException":
      throw await deserializeAws_restJson1EC2AccessDeniedExceptionResponse(parsedOutput, context);
    case "EC2ThrottledException":
    case "com.amazonaws.lambda#EC2ThrottledException":
      throw await deserializeAws_restJson1EC2ThrottledExceptionResponse(parsedOutput, context);
    case "EC2UnexpectedException":
    case "com.amazonaws.lambda#EC2UnexpectedException":
      throw await deserializeAws_restJson1EC2UnexpectedExceptionResponse(parsedOutput, context);
    case "EFSIOException":
    case "com.amazonaws.lambda#EFSIOException":
      throw await deserializeAws_restJson1EFSIOExceptionResponse(parsedOutput, context);
    case "EFSMountConnectivityException":
    case "com.amazonaws.lambda#EFSMountConnectivityException":
      throw await deserializeAws_restJson1EFSMountConnectivityExceptionResponse(parsedOutput, context);
    case "EFSMountFailureException":
    case "com.amazonaws.lambda#EFSMountFailureException":
      throw await deserializeAws_restJson1EFSMountFailureExceptionResponse(parsedOutput, context);
    case "EFSMountTimeoutException":
    case "com.amazonaws.lambda#EFSMountTimeoutException":
      throw await deserializeAws_restJson1EFSMountTimeoutExceptionResponse(parsedOutput, context);
    case "ENILimitReachedException":
    case "com.amazonaws.lambda#ENILimitReachedException":
      throw await deserializeAws_restJson1ENILimitReachedExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.lambda#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "InvalidRequestContentException":
    case "com.amazonaws.lambda#InvalidRequestContentException":
      throw await deserializeAws_restJson1InvalidRequestContentExceptionResponse(parsedOutput, context);
    case "InvalidRuntimeException":
    case "com.amazonaws.lambda#InvalidRuntimeException":
      throw await deserializeAws_restJson1InvalidRuntimeExceptionResponse(parsedOutput, context);
    case "InvalidSecurityGroupIDException":
    case "com.amazonaws.lambda#InvalidSecurityGroupIDException":
      throw await deserializeAws_restJson1InvalidSecurityGroupIDExceptionResponse(parsedOutput, context);
    case "InvalidSubnetIDException":
    case "com.amazonaws.lambda#InvalidSubnetIDException":
      throw await deserializeAws_restJson1InvalidSubnetIDExceptionResponse(parsedOutput, context);
    case "InvalidZipFileException":
    case "com.amazonaws.lambda#InvalidZipFileException":
      throw await deserializeAws_restJson1InvalidZipFileExceptionResponse(parsedOutput, context);
    case "KMSAccessDeniedException":
    case "com.amazonaws.lambda#KMSAccessDeniedException":
      throw await deserializeAws_restJson1KMSAccessDeniedExceptionResponse(parsedOutput, context);
    case "KMSDisabledException":
    case "com.amazonaws.lambda#KMSDisabledException":
      throw await deserializeAws_restJson1KMSDisabledExceptionResponse(parsedOutput, context);
    case "KMSInvalidStateException":
    case "com.amazonaws.lambda#KMSInvalidStateException":
      throw await deserializeAws_restJson1KMSInvalidStateExceptionResponse(parsedOutput, context);
    case "KMSNotFoundException":
    case "com.amazonaws.lambda#KMSNotFoundException":
      throw await deserializeAws_restJson1KMSNotFoundExceptionResponse(parsedOutput, context);
    case "RequestTooLargeException":
    case "com.amazonaws.lambda#RequestTooLargeException":
      throw await deserializeAws_restJson1RequestTooLargeExceptionResponse(parsedOutput, context);
    case "ResourceConflictException":
    case "com.amazonaws.lambda#ResourceConflictException":
      throw await deserializeAws_restJson1ResourceConflictExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ResourceNotReadyException":
    case "com.amazonaws.lambda#ResourceNotReadyException":
      throw await deserializeAws_restJson1ResourceNotReadyExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      throw await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context);
    case "SubnetIPAddressLimitReachedException":
    case "com.amazonaws.lambda#SubnetIPAddressLimitReachedException":
      throw await deserializeAws_restJson1SubnetIPAddressLimitReachedExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnsupportedMediaTypeException":
    case "com.amazonaws.lambda#UnsupportedMediaTypeException":
      throw await deserializeAws_restJson1UnsupportedMediaTypeExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1InvokeAsyncCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InvokeAsyncCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1InvokeAsyncCommandError(output, context);
  }
  const contents: InvokeAsyncCommandOutput = {
    $metadata: deserializeMetadata(output),
    Status: undefined,
  };
  if (contents.Status === undefined) {
    contents.Status = output.statusCode;
  }
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1InvokeAsyncCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InvokeAsyncCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidRequestContentException":
    case "com.amazonaws.lambda#InvalidRequestContentException":
      throw await deserializeAws_restJson1InvalidRequestContentExceptionResponse(parsedOutput, context);
    case "InvalidRuntimeException":
    case "com.amazonaws.lambda#InvalidRuntimeException":
      throw await deserializeAws_restJson1InvalidRuntimeExceptionResponse(parsedOutput, context);
    case "ResourceConflictException":
    case "com.amazonaws.lambda#ResourceConflictException":
      throw await deserializeAws_restJson1ResourceConflictExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      throw await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListAliasesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAliasesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListAliasesCommandError(output, context);
  }
  const contents: ListAliasesCommandOutput = {
    $metadata: deserializeMetadata(output),
    Aliases: undefined,
    NextMarker: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Aliases !== undefined && data.Aliases !== null) {
    contents.Aliases = deserializeAws_restJson1AliasList(data.Aliases, context);
  }
  if (data.NextMarker !== undefined && data.NextMarker !== null) {
    contents.NextMarker = __expectString(data.NextMarker);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListAliasesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAliasesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.lambda#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      throw await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListCodeSigningConfigsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCodeSigningConfigsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListCodeSigningConfigsCommandError(output, context);
  }
  const contents: ListCodeSigningConfigsCommandOutput = {
    $metadata: deserializeMetadata(output),
    CodeSigningConfigs: undefined,
    NextMarker: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CodeSigningConfigs !== undefined && data.CodeSigningConfigs !== null) {
    contents.CodeSigningConfigs = deserializeAws_restJson1CodeSigningConfigList(data.CodeSigningConfigs, context);
  }
  if (data.NextMarker !== undefined && data.NextMarker !== null) {
    contents.NextMarker = __expectString(data.NextMarker);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListCodeSigningConfigsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCodeSigningConfigsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.lambda#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      throw await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListEventSourceMappingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEventSourceMappingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListEventSourceMappingsCommandError(output, context);
  }
  const contents: ListEventSourceMappingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    EventSourceMappings: undefined,
    NextMarker: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.EventSourceMappings !== undefined && data.EventSourceMappings !== null) {
    contents.EventSourceMappings = deserializeAws_restJson1EventSourceMappingsList(data.EventSourceMappings, context);
  }
  if (data.NextMarker !== undefined && data.NextMarker !== null) {
    contents.NextMarker = __expectString(data.NextMarker);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListEventSourceMappingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEventSourceMappingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.lambda#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      throw await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListFunctionEventInvokeConfigsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFunctionEventInvokeConfigsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListFunctionEventInvokeConfigsCommandError(output, context);
  }
  const contents: ListFunctionEventInvokeConfigsCommandOutput = {
    $metadata: deserializeMetadata(output),
    FunctionEventInvokeConfigs: undefined,
    NextMarker: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.FunctionEventInvokeConfigs !== undefined && data.FunctionEventInvokeConfigs !== null) {
    contents.FunctionEventInvokeConfigs = deserializeAws_restJson1FunctionEventInvokeConfigList(
      data.FunctionEventInvokeConfigs,
      context
    );
  }
  if (data.NextMarker !== undefined && data.NextMarker !== null) {
    contents.NextMarker = __expectString(data.NextMarker);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListFunctionEventInvokeConfigsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFunctionEventInvokeConfigsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.lambda#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      throw await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListFunctionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFunctionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListFunctionsCommandError(output, context);
  }
  const contents: ListFunctionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    Functions: undefined,
    NextMarker: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Functions !== undefined && data.Functions !== null) {
    contents.Functions = deserializeAws_restJson1FunctionList(data.Functions, context);
  }
  if (data.NextMarker !== undefined && data.NextMarker !== null) {
    contents.NextMarker = __expectString(data.NextMarker);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListFunctionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFunctionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.lambda#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      throw await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListFunctionsByCodeSigningConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFunctionsByCodeSigningConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListFunctionsByCodeSigningConfigCommandError(output, context);
  }
  const contents: ListFunctionsByCodeSigningConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    FunctionArns: undefined,
    NextMarker: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.FunctionArns !== undefined && data.FunctionArns !== null) {
    contents.FunctionArns = deserializeAws_restJson1FunctionArnList(data.FunctionArns, context);
  }
  if (data.NextMarker !== undefined && data.NextMarker !== null) {
    contents.NextMarker = __expectString(data.NextMarker);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListFunctionsByCodeSigningConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFunctionsByCodeSigningConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.lambda#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      throw await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListFunctionUrlConfigsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFunctionUrlConfigsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListFunctionUrlConfigsCommandError(output, context);
  }
  const contents: ListFunctionUrlConfigsCommandOutput = {
    $metadata: deserializeMetadata(output),
    FunctionUrlConfigs: undefined,
    NextMarker: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.FunctionUrlConfigs !== undefined && data.FunctionUrlConfigs !== null) {
    contents.FunctionUrlConfigs = deserializeAws_restJson1FunctionUrlConfigList(data.FunctionUrlConfigs, context);
  }
  if (data.NextMarker !== undefined && data.NextMarker !== null) {
    contents.NextMarker = __expectString(data.NextMarker);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListFunctionUrlConfigsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFunctionUrlConfigsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.lambda#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      throw await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListLayersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLayersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListLayersCommandError(output, context);
  }
  const contents: ListLayersCommandOutput = {
    $metadata: deserializeMetadata(output),
    Layers: undefined,
    NextMarker: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Layers !== undefined && data.Layers !== null) {
    contents.Layers = deserializeAws_restJson1LayersList(data.Layers, context);
  }
  if (data.NextMarker !== undefined && data.NextMarker !== null) {
    contents.NextMarker = __expectString(data.NextMarker);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListLayersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLayersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.lambda#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      throw await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListLayerVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLayerVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListLayerVersionsCommandError(output, context);
  }
  const contents: ListLayerVersionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    LayerVersions: undefined,
    NextMarker: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.LayerVersions !== undefined && data.LayerVersions !== null) {
    contents.LayerVersions = deserializeAws_restJson1LayerVersionsList(data.LayerVersions, context);
  }
  if (data.NextMarker !== undefined && data.NextMarker !== null) {
    contents.NextMarker = __expectString(data.NextMarker);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListLayerVersionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLayerVersionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.lambda#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      throw await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListProvisionedConcurrencyConfigsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProvisionedConcurrencyConfigsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListProvisionedConcurrencyConfigsCommandError(output, context);
  }
  const contents: ListProvisionedConcurrencyConfigsCommandOutput = {
    $metadata: deserializeMetadata(output),
    NextMarker: undefined,
    ProvisionedConcurrencyConfigs: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextMarker !== undefined && data.NextMarker !== null) {
    contents.NextMarker = __expectString(data.NextMarker);
  }
  if (data.ProvisionedConcurrencyConfigs !== undefined && data.ProvisionedConcurrencyConfigs !== null) {
    contents.ProvisionedConcurrencyConfigs = deserializeAws_restJson1ProvisionedConcurrencyConfigList(
      data.ProvisionedConcurrencyConfigs,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListProvisionedConcurrencyConfigsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProvisionedConcurrencyConfigsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.lambda#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      throw await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListTagsCommandError(output, context);
  }
  const contents: ListTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    Tags: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Tags !== undefined && data.Tags !== null) {
    contents.Tags = deserializeAws_restJson1Tags(data.Tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListTagsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.lambda#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      throw await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListVersionsByFunctionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVersionsByFunctionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListVersionsByFunctionCommandError(output, context);
  }
  const contents: ListVersionsByFunctionCommandOutput = {
    $metadata: deserializeMetadata(output),
    NextMarker: undefined,
    Versions: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextMarker !== undefined && data.NextMarker !== null) {
    contents.NextMarker = __expectString(data.NextMarker);
  }
  if (data.Versions !== undefined && data.Versions !== null) {
    contents.Versions = deserializeAws_restJson1FunctionList(data.Versions, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListVersionsByFunctionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVersionsByFunctionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.lambda#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      throw await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1PublishLayerVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PublishLayerVersionCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1PublishLayerVersionCommandError(output, context);
  }
  const contents: PublishLayerVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    CompatibleArchitectures: undefined,
    CompatibleRuntimes: undefined,
    Content: undefined,
    CreatedDate: undefined,
    Description: undefined,
    LayerArn: undefined,
    LayerVersionArn: undefined,
    LicenseInfo: undefined,
    Version: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CompatibleArchitectures !== undefined && data.CompatibleArchitectures !== null) {
    contents.CompatibleArchitectures = deserializeAws_restJson1CompatibleArchitectures(
      data.CompatibleArchitectures,
      context
    );
  }
  if (data.CompatibleRuntimes !== undefined && data.CompatibleRuntimes !== null) {
    contents.CompatibleRuntimes = deserializeAws_restJson1CompatibleRuntimes(data.CompatibleRuntimes, context);
  }
  if (data.Content !== undefined && data.Content !== null) {
    contents.Content = deserializeAws_restJson1LayerVersionContentOutput(data.Content, context);
  }
  if (data.CreatedDate !== undefined && data.CreatedDate !== null) {
    contents.CreatedDate = __expectString(data.CreatedDate);
  }
  if (data.Description !== undefined && data.Description !== null) {
    contents.Description = __expectString(data.Description);
  }
  if (data.LayerArn !== undefined && data.LayerArn !== null) {
    contents.LayerArn = __expectString(data.LayerArn);
  }
  if (data.LayerVersionArn !== undefined && data.LayerVersionArn !== null) {
    contents.LayerVersionArn = __expectString(data.LayerVersionArn);
  }
  if (data.LicenseInfo !== undefined && data.LicenseInfo !== null) {
    contents.LicenseInfo = __expectString(data.LicenseInfo);
  }
  if (data.Version !== undefined && data.Version !== null) {
    contents.Version = __expectLong(data.Version);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1PublishLayerVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PublishLayerVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CodeStorageExceededException":
    case "com.amazonaws.lambda#CodeStorageExceededException":
      throw await deserializeAws_restJson1CodeStorageExceededExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.lambda#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      throw await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1PublishVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PublishVersionCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1PublishVersionCommandError(output, context);
  }
  const contents: PublishVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    Architectures: undefined,
    CodeSha256: undefined,
    CodeSize: undefined,
    DeadLetterConfig: undefined,
    Description: undefined,
    Environment: undefined,
    EphemeralStorage: undefined,
    FileSystemConfigs: undefined,
    FunctionArn: undefined,
    FunctionName: undefined,
    Handler: undefined,
    ImageConfigResponse: undefined,
    KMSKeyArn: undefined,
    LastModified: undefined,
    LastUpdateStatus: undefined,
    LastUpdateStatusReason: undefined,
    LastUpdateStatusReasonCode: undefined,
    Layers: undefined,
    MasterArn: undefined,
    MemorySize: undefined,
    PackageType: undefined,
    RevisionId: undefined,
    Role: undefined,
    Runtime: undefined,
    SigningJobArn: undefined,
    SigningProfileVersionArn: undefined,
    State: undefined,
    StateReason: undefined,
    StateReasonCode: undefined,
    Timeout: undefined,
    TracingConfig: undefined,
    Version: undefined,
    VpcConfig: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Architectures !== undefined && data.Architectures !== null) {
    contents.Architectures = deserializeAws_restJson1ArchitecturesList(data.Architectures, context);
  }
  if (data.CodeSha256 !== undefined && data.CodeSha256 !== null) {
    contents.CodeSha256 = __expectString(data.CodeSha256);
  }
  if (data.CodeSize !== undefined && data.CodeSize !== null) {
    contents.CodeSize = __expectLong(data.CodeSize);
  }
  if (data.DeadLetterConfig !== undefined && data.DeadLetterConfig !== null) {
    contents.DeadLetterConfig = deserializeAws_restJson1DeadLetterConfig(data.DeadLetterConfig, context);
  }
  if (data.Description !== undefined && data.Description !== null) {
    contents.Description = __expectString(data.Description);
  }
  if (data.Environment !== undefined && data.Environment !== null) {
    contents.Environment = deserializeAws_restJson1EnvironmentResponse(data.Environment, context);
  }
  if (data.EphemeralStorage !== undefined && data.EphemeralStorage !== null) {
    contents.EphemeralStorage = deserializeAws_restJson1EphemeralStorage(data.EphemeralStorage, context);
  }
  if (data.FileSystemConfigs !== undefined && data.FileSystemConfigs !== null) {
    contents.FileSystemConfigs = deserializeAws_restJson1FileSystemConfigList(data.FileSystemConfigs, context);
  }
  if (data.FunctionArn !== undefined && data.FunctionArn !== null) {
    contents.FunctionArn = __expectString(data.FunctionArn);
  }
  if (data.FunctionName !== undefined && data.FunctionName !== null) {
    contents.FunctionName = __expectString(data.FunctionName);
  }
  if (data.Handler !== undefined && data.Handler !== null) {
    contents.Handler = __expectString(data.Handler);
  }
  if (data.ImageConfigResponse !== undefined && data.ImageConfigResponse !== null) {
    contents.ImageConfigResponse = deserializeAws_restJson1ImageConfigResponse(data.ImageConfigResponse, context);
  }
  if (data.KMSKeyArn !== undefined && data.KMSKeyArn !== null) {
    contents.KMSKeyArn = __expectString(data.KMSKeyArn);
  }
  if (data.LastModified !== undefined && data.LastModified !== null) {
    contents.LastModified = __expectString(data.LastModified);
  }
  if (data.LastUpdateStatus !== undefined && data.LastUpdateStatus !== null) {
    contents.LastUpdateStatus = __expectString(data.LastUpdateStatus);
  }
  if (data.LastUpdateStatusReason !== undefined && data.LastUpdateStatusReason !== null) {
    contents.LastUpdateStatusReason = __expectString(data.LastUpdateStatusReason);
  }
  if (data.LastUpdateStatusReasonCode !== undefined && data.LastUpdateStatusReasonCode !== null) {
    contents.LastUpdateStatusReasonCode = __expectString(data.LastUpdateStatusReasonCode);
  }
  if (data.Layers !== undefined && data.Layers !== null) {
    contents.Layers = deserializeAws_restJson1LayersReferenceList(data.Layers, context);
  }
  if (data.MasterArn !== undefined && data.MasterArn !== null) {
    contents.MasterArn = __expectString(data.MasterArn);
  }
  if (data.MemorySize !== undefined && data.MemorySize !== null) {
    contents.MemorySize = __expectInt32(data.MemorySize);
  }
  if (data.PackageType !== undefined && data.PackageType !== null) {
    contents.PackageType = __expectString(data.PackageType);
  }
  if (data.RevisionId !== undefined && data.RevisionId !== null) {
    contents.RevisionId = __expectString(data.RevisionId);
  }
  if (data.Role !== undefined && data.Role !== null) {
    contents.Role = __expectString(data.Role);
  }
  if (data.Runtime !== undefined && data.Runtime !== null) {
    contents.Runtime = __expectString(data.Runtime);
  }
  if (data.SigningJobArn !== undefined && data.SigningJobArn !== null) {
    contents.SigningJobArn = __expectString(data.SigningJobArn);
  }
  if (data.SigningProfileVersionArn !== undefined && data.SigningProfileVersionArn !== null) {
    contents.SigningProfileVersionArn = __expectString(data.SigningProfileVersionArn);
  }
  if (data.State !== undefined && data.State !== null) {
    contents.State = __expectString(data.State);
  }
  if (data.StateReason !== undefined && data.StateReason !== null) {
    contents.StateReason = __expectString(data.StateReason);
  }
  if (data.StateReasonCode !== undefined && data.StateReasonCode !== null) {
    contents.StateReasonCode = __expectString(data.StateReasonCode);
  }
  if (data.Timeout !== undefined && data.Timeout !== null) {
    contents.Timeout = __expectInt32(data.Timeout);
  }
  if (data.TracingConfig !== undefined && data.TracingConfig !== null) {
    contents.TracingConfig = deserializeAws_restJson1TracingConfigResponse(data.TracingConfig, context);
  }
  if (data.Version !== undefined && data.Version !== null) {
    contents.Version = __expectString(data.Version);
  }
  if (data.VpcConfig !== undefined && data.VpcConfig !== null) {
    contents.VpcConfig = deserializeAws_restJson1VpcConfigResponse(data.VpcConfig, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1PublishVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PublishVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CodeStorageExceededException":
    case "com.amazonaws.lambda#CodeStorageExceededException":
      throw await deserializeAws_restJson1CodeStorageExceededExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.lambda#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "PreconditionFailedException":
    case "com.amazonaws.lambda#PreconditionFailedException":
      throw await deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context);
    case "ResourceConflictException":
    case "com.amazonaws.lambda#ResourceConflictException":
      throw await deserializeAws_restJson1ResourceConflictExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      throw await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1PutFunctionCodeSigningConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutFunctionCodeSigningConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutFunctionCodeSigningConfigCommandError(output, context);
  }
  const contents: PutFunctionCodeSigningConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    CodeSigningConfigArn: undefined,
    FunctionName: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CodeSigningConfigArn !== undefined && data.CodeSigningConfigArn !== null) {
    contents.CodeSigningConfigArn = __expectString(data.CodeSigningConfigArn);
  }
  if (data.FunctionName !== undefined && data.FunctionName !== null) {
    contents.FunctionName = __expectString(data.FunctionName);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1PutFunctionCodeSigningConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutFunctionCodeSigningConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CodeSigningConfigNotFoundException":
    case "com.amazonaws.lambda#CodeSigningConfigNotFoundException":
      throw await deserializeAws_restJson1CodeSigningConfigNotFoundExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.lambda#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceConflictException":
    case "com.amazonaws.lambda#ResourceConflictException":
      throw await deserializeAws_restJson1ResourceConflictExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      throw await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1PutFunctionConcurrencyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutFunctionConcurrencyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutFunctionConcurrencyCommandError(output, context);
  }
  const contents: PutFunctionConcurrencyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ReservedConcurrentExecutions: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ReservedConcurrentExecutions !== undefined && data.ReservedConcurrentExecutions !== null) {
    contents.ReservedConcurrentExecutions = __expectInt32(data.ReservedConcurrentExecutions);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1PutFunctionConcurrencyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutFunctionConcurrencyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.lambda#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceConflictException":
    case "com.amazonaws.lambda#ResourceConflictException":
      throw await deserializeAws_restJson1ResourceConflictExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      throw await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1PutFunctionEventInvokeConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutFunctionEventInvokeConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutFunctionEventInvokeConfigCommandError(output, context);
  }
  const contents: PutFunctionEventInvokeConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    DestinationConfig: undefined,
    FunctionArn: undefined,
    LastModified: undefined,
    MaximumEventAgeInSeconds: undefined,
    MaximumRetryAttempts: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DestinationConfig !== undefined && data.DestinationConfig !== null) {
    contents.DestinationConfig = deserializeAws_restJson1DestinationConfig(data.DestinationConfig, context);
  }
  if (data.FunctionArn !== undefined && data.FunctionArn !== null) {
    contents.FunctionArn = __expectString(data.FunctionArn);
  }
  if (data.LastModified !== undefined && data.LastModified !== null) {
    contents.LastModified = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.LastModified)));
  }
  if (data.MaximumEventAgeInSeconds !== undefined && data.MaximumEventAgeInSeconds !== null) {
    contents.MaximumEventAgeInSeconds = __expectInt32(data.MaximumEventAgeInSeconds);
  }
  if (data.MaximumRetryAttempts !== undefined && data.MaximumRetryAttempts !== null) {
    contents.MaximumRetryAttempts = __expectInt32(data.MaximumRetryAttempts);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1PutFunctionEventInvokeConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutFunctionEventInvokeConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.lambda#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceConflictException":
    case "com.amazonaws.lambda#ResourceConflictException":
      throw await deserializeAws_restJson1ResourceConflictExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      throw await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1PutProvisionedConcurrencyConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutProvisionedConcurrencyConfigCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutProvisionedConcurrencyConfigCommandError(output, context);
  }
  const contents: PutProvisionedConcurrencyConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    AllocatedProvisionedConcurrentExecutions: undefined,
    AvailableProvisionedConcurrentExecutions: undefined,
    LastModified: undefined,
    RequestedProvisionedConcurrentExecutions: undefined,
    Status: undefined,
    StatusReason: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (
    data.AllocatedProvisionedConcurrentExecutions !== undefined &&
    data.AllocatedProvisionedConcurrentExecutions !== null
  ) {
    contents.AllocatedProvisionedConcurrentExecutions = __expectInt32(data.AllocatedProvisionedConcurrentExecutions);
  }
  if (
    data.AvailableProvisionedConcurrentExecutions !== undefined &&
    data.AvailableProvisionedConcurrentExecutions !== null
  ) {
    contents.AvailableProvisionedConcurrentExecutions = __expectInt32(data.AvailableProvisionedConcurrentExecutions);
  }
  if (data.LastModified !== undefined && data.LastModified !== null) {
    contents.LastModified = __expectString(data.LastModified);
  }
  if (
    data.RequestedProvisionedConcurrentExecutions !== undefined &&
    data.RequestedProvisionedConcurrentExecutions !== null
  ) {
    contents.RequestedProvisionedConcurrentExecutions = __expectInt32(data.RequestedProvisionedConcurrentExecutions);
  }
  if (data.Status !== undefined && data.Status !== null) {
    contents.Status = __expectString(data.Status);
  }
  if (data.StatusReason !== undefined && data.StatusReason !== null) {
    contents.StatusReason = __expectString(data.StatusReason);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1PutProvisionedConcurrencyConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutProvisionedConcurrencyConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.lambda#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceConflictException":
    case "com.amazonaws.lambda#ResourceConflictException":
      throw await deserializeAws_restJson1ResourceConflictExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      throw await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1RemoveLayerVersionPermissionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveLayerVersionPermissionCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1RemoveLayerVersionPermissionCommandError(output, context);
  }
  const contents: RemoveLayerVersionPermissionCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1RemoveLayerVersionPermissionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveLayerVersionPermissionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.lambda#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "PreconditionFailedException":
    case "com.amazonaws.lambda#PreconditionFailedException":
      throw await deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      throw await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1RemovePermissionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemovePermissionCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1RemovePermissionCommandError(output, context);
  }
  const contents: RemovePermissionCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1RemovePermissionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemovePermissionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.lambda#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "PreconditionFailedException":
    case "com.amazonaws.lambda#PreconditionFailedException":
      throw await deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      throw await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1TagResourceCommandError(output, context);
  }
  const contents: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1TagResourceCommandError = async (
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
    case "InvalidParameterValueException":
    case "com.amazonaws.lambda#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceConflictException":
    case "com.amazonaws.lambda#ResourceConflictException":
      throw await deserializeAws_restJson1ResourceConflictExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      throw await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1UntagResourceCommandError(output, context);
  }
  const contents: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UntagResourceCommandError = async (
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
    case "InvalidParameterValueException":
    case "com.amazonaws.lambda#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceConflictException":
    case "com.amazonaws.lambda#ResourceConflictException":
      throw await deserializeAws_restJson1ResourceConflictExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      throw await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateAliasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAliasCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateAliasCommandError(output, context);
  }
  const contents: UpdateAliasCommandOutput = {
    $metadata: deserializeMetadata(output),
    AliasArn: undefined,
    Description: undefined,
    FunctionVersion: undefined,
    Name: undefined,
    RevisionId: undefined,
    RoutingConfig: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AliasArn !== undefined && data.AliasArn !== null) {
    contents.AliasArn = __expectString(data.AliasArn);
  }
  if (data.Description !== undefined && data.Description !== null) {
    contents.Description = __expectString(data.Description);
  }
  if (data.FunctionVersion !== undefined && data.FunctionVersion !== null) {
    contents.FunctionVersion = __expectString(data.FunctionVersion);
  }
  if (data.Name !== undefined && data.Name !== null) {
    contents.Name = __expectString(data.Name);
  }
  if (data.RevisionId !== undefined && data.RevisionId !== null) {
    contents.RevisionId = __expectString(data.RevisionId);
  }
  if (data.RoutingConfig !== undefined && data.RoutingConfig !== null) {
    contents.RoutingConfig = deserializeAws_restJson1AliasRoutingConfiguration(data.RoutingConfig, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateAliasCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAliasCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.lambda#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "PreconditionFailedException":
    case "com.amazonaws.lambda#PreconditionFailedException":
      throw await deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context);
    case "ResourceConflictException":
    case "com.amazonaws.lambda#ResourceConflictException":
      throw await deserializeAws_restJson1ResourceConflictExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      throw await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateCodeSigningConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCodeSigningConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateCodeSigningConfigCommandError(output, context);
  }
  const contents: UpdateCodeSigningConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    CodeSigningConfig: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CodeSigningConfig !== undefined && data.CodeSigningConfig !== null) {
    contents.CodeSigningConfig = deserializeAws_restJson1CodeSigningConfig(data.CodeSigningConfig, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateCodeSigningConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCodeSigningConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.lambda#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      throw await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateEventSourceMappingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEventSourceMappingCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateEventSourceMappingCommandError(output, context);
  }
  const contents: UpdateEventSourceMappingCommandOutput = {
    $metadata: deserializeMetadata(output),
    BatchSize: undefined,
    BisectBatchOnFunctionError: undefined,
    DestinationConfig: undefined,
    EventSourceArn: undefined,
    FilterCriteria: undefined,
    FunctionArn: undefined,
    FunctionResponseTypes: undefined,
    LastModified: undefined,
    LastProcessingResult: undefined,
    MaximumBatchingWindowInSeconds: undefined,
    MaximumRecordAgeInSeconds: undefined,
    MaximumRetryAttempts: undefined,
    ParallelizationFactor: undefined,
    Queues: undefined,
    SelfManagedEventSource: undefined,
    SourceAccessConfigurations: undefined,
    StartingPosition: undefined,
    StartingPositionTimestamp: undefined,
    State: undefined,
    StateTransitionReason: undefined,
    Topics: undefined,
    TumblingWindowInSeconds: undefined,
    UUID: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.BatchSize !== undefined && data.BatchSize !== null) {
    contents.BatchSize = __expectInt32(data.BatchSize);
  }
  if (data.BisectBatchOnFunctionError !== undefined && data.BisectBatchOnFunctionError !== null) {
    contents.BisectBatchOnFunctionError = __expectBoolean(data.BisectBatchOnFunctionError);
  }
  if (data.DestinationConfig !== undefined && data.DestinationConfig !== null) {
    contents.DestinationConfig = deserializeAws_restJson1DestinationConfig(data.DestinationConfig, context);
  }
  if (data.EventSourceArn !== undefined && data.EventSourceArn !== null) {
    contents.EventSourceArn = __expectString(data.EventSourceArn);
  }
  if (data.FilterCriteria !== undefined && data.FilterCriteria !== null) {
    contents.FilterCriteria = deserializeAws_restJson1FilterCriteria(data.FilterCriteria, context);
  }
  if (data.FunctionArn !== undefined && data.FunctionArn !== null) {
    contents.FunctionArn = __expectString(data.FunctionArn);
  }
  if (data.FunctionResponseTypes !== undefined && data.FunctionResponseTypes !== null) {
    contents.FunctionResponseTypes = deserializeAws_restJson1FunctionResponseTypeList(
      data.FunctionResponseTypes,
      context
    );
  }
  if (data.LastModified !== undefined && data.LastModified !== null) {
    contents.LastModified = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.LastModified)));
  }
  if (data.LastProcessingResult !== undefined && data.LastProcessingResult !== null) {
    contents.LastProcessingResult = __expectString(data.LastProcessingResult);
  }
  if (data.MaximumBatchingWindowInSeconds !== undefined && data.MaximumBatchingWindowInSeconds !== null) {
    contents.MaximumBatchingWindowInSeconds = __expectInt32(data.MaximumBatchingWindowInSeconds);
  }
  if (data.MaximumRecordAgeInSeconds !== undefined && data.MaximumRecordAgeInSeconds !== null) {
    contents.MaximumRecordAgeInSeconds = __expectInt32(data.MaximumRecordAgeInSeconds);
  }
  if (data.MaximumRetryAttempts !== undefined && data.MaximumRetryAttempts !== null) {
    contents.MaximumRetryAttempts = __expectInt32(data.MaximumRetryAttempts);
  }
  if (data.ParallelizationFactor !== undefined && data.ParallelizationFactor !== null) {
    contents.ParallelizationFactor = __expectInt32(data.ParallelizationFactor);
  }
  if (data.Queues !== undefined && data.Queues !== null) {
    contents.Queues = deserializeAws_restJson1Queues(data.Queues, context);
  }
  if (data.SelfManagedEventSource !== undefined && data.SelfManagedEventSource !== null) {
    contents.SelfManagedEventSource = deserializeAws_restJson1SelfManagedEventSource(
      data.SelfManagedEventSource,
      context
    );
  }
  if (data.SourceAccessConfigurations !== undefined && data.SourceAccessConfigurations !== null) {
    contents.SourceAccessConfigurations = deserializeAws_restJson1SourceAccessConfigurations(
      data.SourceAccessConfigurations,
      context
    );
  }
  if (data.StartingPosition !== undefined && data.StartingPosition !== null) {
    contents.StartingPosition = __expectString(data.StartingPosition);
  }
  if (data.StartingPositionTimestamp !== undefined && data.StartingPositionTimestamp !== null) {
    contents.StartingPositionTimestamp = __expectNonNull(
      __parseEpochTimestamp(__expectNumber(data.StartingPositionTimestamp))
    );
  }
  if (data.State !== undefined && data.State !== null) {
    contents.State = __expectString(data.State);
  }
  if (data.StateTransitionReason !== undefined && data.StateTransitionReason !== null) {
    contents.StateTransitionReason = __expectString(data.StateTransitionReason);
  }
  if (data.Topics !== undefined && data.Topics !== null) {
    contents.Topics = deserializeAws_restJson1Topics(data.Topics, context);
  }
  if (data.TumblingWindowInSeconds !== undefined && data.TumblingWindowInSeconds !== null) {
    contents.TumblingWindowInSeconds = __expectInt32(data.TumblingWindowInSeconds);
  }
  if (data.UUID !== undefined && data.UUID !== null) {
    contents.UUID = __expectString(data.UUID);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateEventSourceMappingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEventSourceMappingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.lambda#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceConflictException":
    case "com.amazonaws.lambda#ResourceConflictException":
      throw await deserializeAws_restJson1ResourceConflictExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.lambda#ResourceInUseException":
      throw await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      throw await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateFunctionCodeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFunctionCodeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateFunctionCodeCommandError(output, context);
  }
  const contents: UpdateFunctionCodeCommandOutput = {
    $metadata: deserializeMetadata(output),
    Architectures: undefined,
    CodeSha256: undefined,
    CodeSize: undefined,
    DeadLetterConfig: undefined,
    Description: undefined,
    Environment: undefined,
    EphemeralStorage: undefined,
    FileSystemConfigs: undefined,
    FunctionArn: undefined,
    FunctionName: undefined,
    Handler: undefined,
    ImageConfigResponse: undefined,
    KMSKeyArn: undefined,
    LastModified: undefined,
    LastUpdateStatus: undefined,
    LastUpdateStatusReason: undefined,
    LastUpdateStatusReasonCode: undefined,
    Layers: undefined,
    MasterArn: undefined,
    MemorySize: undefined,
    PackageType: undefined,
    RevisionId: undefined,
    Role: undefined,
    Runtime: undefined,
    SigningJobArn: undefined,
    SigningProfileVersionArn: undefined,
    State: undefined,
    StateReason: undefined,
    StateReasonCode: undefined,
    Timeout: undefined,
    TracingConfig: undefined,
    Version: undefined,
    VpcConfig: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Architectures !== undefined && data.Architectures !== null) {
    contents.Architectures = deserializeAws_restJson1ArchitecturesList(data.Architectures, context);
  }
  if (data.CodeSha256 !== undefined && data.CodeSha256 !== null) {
    contents.CodeSha256 = __expectString(data.CodeSha256);
  }
  if (data.CodeSize !== undefined && data.CodeSize !== null) {
    contents.CodeSize = __expectLong(data.CodeSize);
  }
  if (data.DeadLetterConfig !== undefined && data.DeadLetterConfig !== null) {
    contents.DeadLetterConfig = deserializeAws_restJson1DeadLetterConfig(data.DeadLetterConfig, context);
  }
  if (data.Description !== undefined && data.Description !== null) {
    contents.Description = __expectString(data.Description);
  }
  if (data.Environment !== undefined && data.Environment !== null) {
    contents.Environment = deserializeAws_restJson1EnvironmentResponse(data.Environment, context);
  }
  if (data.EphemeralStorage !== undefined && data.EphemeralStorage !== null) {
    contents.EphemeralStorage = deserializeAws_restJson1EphemeralStorage(data.EphemeralStorage, context);
  }
  if (data.FileSystemConfigs !== undefined && data.FileSystemConfigs !== null) {
    contents.FileSystemConfigs = deserializeAws_restJson1FileSystemConfigList(data.FileSystemConfigs, context);
  }
  if (data.FunctionArn !== undefined && data.FunctionArn !== null) {
    contents.FunctionArn = __expectString(data.FunctionArn);
  }
  if (data.FunctionName !== undefined && data.FunctionName !== null) {
    contents.FunctionName = __expectString(data.FunctionName);
  }
  if (data.Handler !== undefined && data.Handler !== null) {
    contents.Handler = __expectString(data.Handler);
  }
  if (data.ImageConfigResponse !== undefined && data.ImageConfigResponse !== null) {
    contents.ImageConfigResponse = deserializeAws_restJson1ImageConfigResponse(data.ImageConfigResponse, context);
  }
  if (data.KMSKeyArn !== undefined && data.KMSKeyArn !== null) {
    contents.KMSKeyArn = __expectString(data.KMSKeyArn);
  }
  if (data.LastModified !== undefined && data.LastModified !== null) {
    contents.LastModified = __expectString(data.LastModified);
  }
  if (data.LastUpdateStatus !== undefined && data.LastUpdateStatus !== null) {
    contents.LastUpdateStatus = __expectString(data.LastUpdateStatus);
  }
  if (data.LastUpdateStatusReason !== undefined && data.LastUpdateStatusReason !== null) {
    contents.LastUpdateStatusReason = __expectString(data.LastUpdateStatusReason);
  }
  if (data.LastUpdateStatusReasonCode !== undefined && data.LastUpdateStatusReasonCode !== null) {
    contents.LastUpdateStatusReasonCode = __expectString(data.LastUpdateStatusReasonCode);
  }
  if (data.Layers !== undefined && data.Layers !== null) {
    contents.Layers = deserializeAws_restJson1LayersReferenceList(data.Layers, context);
  }
  if (data.MasterArn !== undefined && data.MasterArn !== null) {
    contents.MasterArn = __expectString(data.MasterArn);
  }
  if (data.MemorySize !== undefined && data.MemorySize !== null) {
    contents.MemorySize = __expectInt32(data.MemorySize);
  }
  if (data.PackageType !== undefined && data.PackageType !== null) {
    contents.PackageType = __expectString(data.PackageType);
  }
  if (data.RevisionId !== undefined && data.RevisionId !== null) {
    contents.RevisionId = __expectString(data.RevisionId);
  }
  if (data.Role !== undefined && data.Role !== null) {
    contents.Role = __expectString(data.Role);
  }
  if (data.Runtime !== undefined && data.Runtime !== null) {
    contents.Runtime = __expectString(data.Runtime);
  }
  if (data.SigningJobArn !== undefined && data.SigningJobArn !== null) {
    contents.SigningJobArn = __expectString(data.SigningJobArn);
  }
  if (data.SigningProfileVersionArn !== undefined && data.SigningProfileVersionArn !== null) {
    contents.SigningProfileVersionArn = __expectString(data.SigningProfileVersionArn);
  }
  if (data.State !== undefined && data.State !== null) {
    contents.State = __expectString(data.State);
  }
  if (data.StateReason !== undefined && data.StateReason !== null) {
    contents.StateReason = __expectString(data.StateReason);
  }
  if (data.StateReasonCode !== undefined && data.StateReasonCode !== null) {
    contents.StateReasonCode = __expectString(data.StateReasonCode);
  }
  if (data.Timeout !== undefined && data.Timeout !== null) {
    contents.Timeout = __expectInt32(data.Timeout);
  }
  if (data.TracingConfig !== undefined && data.TracingConfig !== null) {
    contents.TracingConfig = deserializeAws_restJson1TracingConfigResponse(data.TracingConfig, context);
  }
  if (data.Version !== undefined && data.Version !== null) {
    contents.Version = __expectString(data.Version);
  }
  if (data.VpcConfig !== undefined && data.VpcConfig !== null) {
    contents.VpcConfig = deserializeAws_restJson1VpcConfigResponse(data.VpcConfig, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateFunctionCodeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFunctionCodeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CodeSigningConfigNotFoundException":
    case "com.amazonaws.lambda#CodeSigningConfigNotFoundException":
      throw await deserializeAws_restJson1CodeSigningConfigNotFoundExceptionResponse(parsedOutput, context);
    case "CodeStorageExceededException":
    case "com.amazonaws.lambda#CodeStorageExceededException":
      throw await deserializeAws_restJson1CodeStorageExceededExceptionResponse(parsedOutput, context);
    case "CodeVerificationFailedException":
    case "com.amazonaws.lambda#CodeVerificationFailedException":
      throw await deserializeAws_restJson1CodeVerificationFailedExceptionResponse(parsedOutput, context);
    case "InvalidCodeSignatureException":
    case "com.amazonaws.lambda#InvalidCodeSignatureException":
      throw await deserializeAws_restJson1InvalidCodeSignatureExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.lambda#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "PreconditionFailedException":
    case "com.amazonaws.lambda#PreconditionFailedException":
      throw await deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context);
    case "ResourceConflictException":
    case "com.amazonaws.lambda#ResourceConflictException":
      throw await deserializeAws_restJson1ResourceConflictExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      throw await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateFunctionConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFunctionConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateFunctionConfigurationCommandError(output, context);
  }
  const contents: UpdateFunctionConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    Architectures: undefined,
    CodeSha256: undefined,
    CodeSize: undefined,
    DeadLetterConfig: undefined,
    Description: undefined,
    Environment: undefined,
    EphemeralStorage: undefined,
    FileSystemConfigs: undefined,
    FunctionArn: undefined,
    FunctionName: undefined,
    Handler: undefined,
    ImageConfigResponse: undefined,
    KMSKeyArn: undefined,
    LastModified: undefined,
    LastUpdateStatus: undefined,
    LastUpdateStatusReason: undefined,
    LastUpdateStatusReasonCode: undefined,
    Layers: undefined,
    MasterArn: undefined,
    MemorySize: undefined,
    PackageType: undefined,
    RevisionId: undefined,
    Role: undefined,
    Runtime: undefined,
    SigningJobArn: undefined,
    SigningProfileVersionArn: undefined,
    State: undefined,
    StateReason: undefined,
    StateReasonCode: undefined,
    Timeout: undefined,
    TracingConfig: undefined,
    Version: undefined,
    VpcConfig: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Architectures !== undefined && data.Architectures !== null) {
    contents.Architectures = deserializeAws_restJson1ArchitecturesList(data.Architectures, context);
  }
  if (data.CodeSha256 !== undefined && data.CodeSha256 !== null) {
    contents.CodeSha256 = __expectString(data.CodeSha256);
  }
  if (data.CodeSize !== undefined && data.CodeSize !== null) {
    contents.CodeSize = __expectLong(data.CodeSize);
  }
  if (data.DeadLetterConfig !== undefined && data.DeadLetterConfig !== null) {
    contents.DeadLetterConfig = deserializeAws_restJson1DeadLetterConfig(data.DeadLetterConfig, context);
  }
  if (data.Description !== undefined && data.Description !== null) {
    contents.Description = __expectString(data.Description);
  }
  if (data.Environment !== undefined && data.Environment !== null) {
    contents.Environment = deserializeAws_restJson1EnvironmentResponse(data.Environment, context);
  }
  if (data.EphemeralStorage !== undefined && data.EphemeralStorage !== null) {
    contents.EphemeralStorage = deserializeAws_restJson1EphemeralStorage(data.EphemeralStorage, context);
  }
  if (data.FileSystemConfigs !== undefined && data.FileSystemConfigs !== null) {
    contents.FileSystemConfigs = deserializeAws_restJson1FileSystemConfigList(data.FileSystemConfigs, context);
  }
  if (data.FunctionArn !== undefined && data.FunctionArn !== null) {
    contents.FunctionArn = __expectString(data.FunctionArn);
  }
  if (data.FunctionName !== undefined && data.FunctionName !== null) {
    contents.FunctionName = __expectString(data.FunctionName);
  }
  if (data.Handler !== undefined && data.Handler !== null) {
    contents.Handler = __expectString(data.Handler);
  }
  if (data.ImageConfigResponse !== undefined && data.ImageConfigResponse !== null) {
    contents.ImageConfigResponse = deserializeAws_restJson1ImageConfigResponse(data.ImageConfigResponse, context);
  }
  if (data.KMSKeyArn !== undefined && data.KMSKeyArn !== null) {
    contents.KMSKeyArn = __expectString(data.KMSKeyArn);
  }
  if (data.LastModified !== undefined && data.LastModified !== null) {
    contents.LastModified = __expectString(data.LastModified);
  }
  if (data.LastUpdateStatus !== undefined && data.LastUpdateStatus !== null) {
    contents.LastUpdateStatus = __expectString(data.LastUpdateStatus);
  }
  if (data.LastUpdateStatusReason !== undefined && data.LastUpdateStatusReason !== null) {
    contents.LastUpdateStatusReason = __expectString(data.LastUpdateStatusReason);
  }
  if (data.LastUpdateStatusReasonCode !== undefined && data.LastUpdateStatusReasonCode !== null) {
    contents.LastUpdateStatusReasonCode = __expectString(data.LastUpdateStatusReasonCode);
  }
  if (data.Layers !== undefined && data.Layers !== null) {
    contents.Layers = deserializeAws_restJson1LayersReferenceList(data.Layers, context);
  }
  if (data.MasterArn !== undefined && data.MasterArn !== null) {
    contents.MasterArn = __expectString(data.MasterArn);
  }
  if (data.MemorySize !== undefined && data.MemorySize !== null) {
    contents.MemorySize = __expectInt32(data.MemorySize);
  }
  if (data.PackageType !== undefined && data.PackageType !== null) {
    contents.PackageType = __expectString(data.PackageType);
  }
  if (data.RevisionId !== undefined && data.RevisionId !== null) {
    contents.RevisionId = __expectString(data.RevisionId);
  }
  if (data.Role !== undefined && data.Role !== null) {
    contents.Role = __expectString(data.Role);
  }
  if (data.Runtime !== undefined && data.Runtime !== null) {
    contents.Runtime = __expectString(data.Runtime);
  }
  if (data.SigningJobArn !== undefined && data.SigningJobArn !== null) {
    contents.SigningJobArn = __expectString(data.SigningJobArn);
  }
  if (data.SigningProfileVersionArn !== undefined && data.SigningProfileVersionArn !== null) {
    contents.SigningProfileVersionArn = __expectString(data.SigningProfileVersionArn);
  }
  if (data.State !== undefined && data.State !== null) {
    contents.State = __expectString(data.State);
  }
  if (data.StateReason !== undefined && data.StateReason !== null) {
    contents.StateReason = __expectString(data.StateReason);
  }
  if (data.StateReasonCode !== undefined && data.StateReasonCode !== null) {
    contents.StateReasonCode = __expectString(data.StateReasonCode);
  }
  if (data.Timeout !== undefined && data.Timeout !== null) {
    contents.Timeout = __expectInt32(data.Timeout);
  }
  if (data.TracingConfig !== undefined && data.TracingConfig !== null) {
    contents.TracingConfig = deserializeAws_restJson1TracingConfigResponse(data.TracingConfig, context);
  }
  if (data.Version !== undefined && data.Version !== null) {
    contents.Version = __expectString(data.Version);
  }
  if (data.VpcConfig !== undefined && data.VpcConfig !== null) {
    contents.VpcConfig = deserializeAws_restJson1VpcConfigResponse(data.VpcConfig, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateFunctionConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFunctionConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CodeSigningConfigNotFoundException":
    case "com.amazonaws.lambda#CodeSigningConfigNotFoundException":
      throw await deserializeAws_restJson1CodeSigningConfigNotFoundExceptionResponse(parsedOutput, context);
    case "CodeVerificationFailedException":
    case "com.amazonaws.lambda#CodeVerificationFailedException":
      throw await deserializeAws_restJson1CodeVerificationFailedExceptionResponse(parsedOutput, context);
    case "InvalidCodeSignatureException":
    case "com.amazonaws.lambda#InvalidCodeSignatureException":
      throw await deserializeAws_restJson1InvalidCodeSignatureExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.lambda#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "PreconditionFailedException":
    case "com.amazonaws.lambda#PreconditionFailedException":
      throw await deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context);
    case "ResourceConflictException":
    case "com.amazonaws.lambda#ResourceConflictException":
      throw await deserializeAws_restJson1ResourceConflictExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      throw await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateFunctionEventInvokeConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFunctionEventInvokeConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateFunctionEventInvokeConfigCommandError(output, context);
  }
  const contents: UpdateFunctionEventInvokeConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    DestinationConfig: undefined,
    FunctionArn: undefined,
    LastModified: undefined,
    MaximumEventAgeInSeconds: undefined,
    MaximumRetryAttempts: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DestinationConfig !== undefined && data.DestinationConfig !== null) {
    contents.DestinationConfig = deserializeAws_restJson1DestinationConfig(data.DestinationConfig, context);
  }
  if (data.FunctionArn !== undefined && data.FunctionArn !== null) {
    contents.FunctionArn = __expectString(data.FunctionArn);
  }
  if (data.LastModified !== undefined && data.LastModified !== null) {
    contents.LastModified = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.LastModified)));
  }
  if (data.MaximumEventAgeInSeconds !== undefined && data.MaximumEventAgeInSeconds !== null) {
    contents.MaximumEventAgeInSeconds = __expectInt32(data.MaximumEventAgeInSeconds);
  }
  if (data.MaximumRetryAttempts !== undefined && data.MaximumRetryAttempts !== null) {
    contents.MaximumRetryAttempts = __expectInt32(data.MaximumRetryAttempts);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateFunctionEventInvokeConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFunctionEventInvokeConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.lambda#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceConflictException":
    case "com.amazonaws.lambda#ResourceConflictException":
      throw await deserializeAws_restJson1ResourceConflictExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      throw await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateFunctionUrlConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFunctionUrlConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateFunctionUrlConfigCommandError(output, context);
  }
  const contents: UpdateFunctionUrlConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    AuthType: undefined,
    Cors: undefined,
    CreationTime: undefined,
    FunctionArn: undefined,
    FunctionUrl: undefined,
    LastModifiedTime: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AuthType !== undefined && data.AuthType !== null) {
    contents.AuthType = __expectString(data.AuthType);
  }
  if (data.Cors !== undefined && data.Cors !== null) {
    contents.Cors = deserializeAws_restJson1Cors(data.Cors, context);
  }
  if (data.CreationTime !== undefined && data.CreationTime !== null) {
    contents.CreationTime = __expectString(data.CreationTime);
  }
  if (data.FunctionArn !== undefined && data.FunctionArn !== null) {
    contents.FunctionArn = __expectString(data.FunctionArn);
  }
  if (data.FunctionUrl !== undefined && data.FunctionUrl !== null) {
    contents.FunctionUrl = __expectString(data.FunctionUrl);
  }
  if (data.LastModifiedTime !== undefined && data.LastModifiedTime !== null) {
    contents.LastModifiedTime = __expectString(data.LastModifiedTime);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateFunctionUrlConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFunctionUrlConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.lambda#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceConflictException":
    case "com.amazonaws.lambda#ResourceConflictException":
      throw await deserializeAws_restJson1ResourceConflictExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      throw await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

const deserializeAws_restJson1CodeSigningConfigNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CodeSigningConfigNotFoundException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.Type !== undefined && data.Type !== null) {
    contents.Type = __expectString(data.Type);
  }
  const exception = new CodeSigningConfigNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1CodeStorageExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CodeStorageExceededException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.Type !== undefined && data.Type !== null) {
    contents.Type = __expectString(data.Type);
  }
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  const exception = new CodeStorageExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1CodeVerificationFailedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CodeVerificationFailedException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.Type !== undefined && data.Type !== null) {
    contents.Type = __expectString(data.Type);
  }
  const exception = new CodeVerificationFailedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1EC2AccessDeniedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EC2AccessDeniedException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.Type !== undefined && data.Type !== null) {
    contents.Type = __expectString(data.Type);
  }
  const exception = new EC2AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1EC2ThrottledExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EC2ThrottledException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.Type !== undefined && data.Type !== null) {
    contents.Type = __expectString(data.Type);
  }
  const exception = new EC2ThrottledException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1EC2UnexpectedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EC2UnexpectedException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.EC2ErrorCode !== undefined && data.EC2ErrorCode !== null) {
    contents.EC2ErrorCode = __expectString(data.EC2ErrorCode);
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.Type !== undefined && data.Type !== null) {
    contents.Type = __expectString(data.Type);
  }
  const exception = new EC2UnexpectedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1EFSIOExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EFSIOException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.Type !== undefined && data.Type !== null) {
    contents.Type = __expectString(data.Type);
  }
  const exception = new EFSIOException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1EFSMountConnectivityExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EFSMountConnectivityException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.Type !== undefined && data.Type !== null) {
    contents.Type = __expectString(data.Type);
  }
  const exception = new EFSMountConnectivityException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1EFSMountFailureExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EFSMountFailureException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.Type !== undefined && data.Type !== null) {
    contents.Type = __expectString(data.Type);
  }
  const exception = new EFSMountFailureException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1EFSMountTimeoutExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EFSMountTimeoutException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.Type !== undefined && data.Type !== null) {
    contents.Type = __expectString(data.Type);
  }
  const exception = new EFSMountTimeoutException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ENILimitReachedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ENILimitReachedException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.Type !== undefined && data.Type !== null) {
    contents.Type = __expectString(data.Type);
  }
  const exception = new ENILimitReachedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1InvalidCodeSignatureExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidCodeSignatureException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.Type !== undefined && data.Type !== null) {
    contents.Type = __expectString(data.Type);
  }
  const exception = new InvalidCodeSignatureException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1InvalidParameterValueExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterValueException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.Type !== undefined && data.Type !== null) {
    contents.Type = __expectString(data.Type);
  }
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  const exception = new InvalidParameterValueException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1InvalidRequestContentExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRequestContentException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.Type !== undefined && data.Type !== null) {
    contents.Type = __expectString(data.Type);
  }
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  const exception = new InvalidRequestContentException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1InvalidRuntimeExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRuntimeException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.Type !== undefined && data.Type !== null) {
    contents.Type = __expectString(data.Type);
  }
  const exception = new InvalidRuntimeException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1InvalidSecurityGroupIDExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidSecurityGroupIDException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.Type !== undefined && data.Type !== null) {
    contents.Type = __expectString(data.Type);
  }
  const exception = new InvalidSecurityGroupIDException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1InvalidSubnetIDExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidSubnetIDException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.Type !== undefined && data.Type !== null) {
    contents.Type = __expectString(data.Type);
  }
  const exception = new InvalidSubnetIDException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1InvalidZipFileExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidZipFileException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.Type !== undefined && data.Type !== null) {
    contents.Type = __expectString(data.Type);
  }
  const exception = new InvalidZipFileException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1KMSAccessDeniedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<KMSAccessDeniedException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.Type !== undefined && data.Type !== null) {
    contents.Type = __expectString(data.Type);
  }
  const exception = new KMSAccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1KMSDisabledExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<KMSDisabledException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.Type !== undefined && data.Type !== null) {
    contents.Type = __expectString(data.Type);
  }
  const exception = new KMSDisabledException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1KMSInvalidStateExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<KMSInvalidStateException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.Type !== undefined && data.Type !== null) {
    contents.Type = __expectString(data.Type);
  }
  const exception = new KMSInvalidStateException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1KMSNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<KMSNotFoundException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.Type !== undefined && data.Type !== null) {
    contents.Type = __expectString(data.Type);
  }
  const exception = new KMSNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1PolicyLengthExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PolicyLengthExceededException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.Type !== undefined && data.Type !== null) {
    contents.Type = __expectString(data.Type);
  }
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  const exception = new PolicyLengthExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1PreconditionFailedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PreconditionFailedException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.Type !== undefined && data.Type !== null) {
    contents.Type = __expectString(data.Type);
  }
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  const exception = new PreconditionFailedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ProvisionedConcurrencyConfigNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ProvisionedConcurrencyConfigNotFoundException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.Type !== undefined && data.Type !== null) {
    contents.Type = __expectString(data.Type);
  }
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ProvisionedConcurrencyConfigNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1RequestTooLargeExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RequestTooLargeException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.Type !== undefined && data.Type !== null) {
    contents.Type = __expectString(data.Type);
  }
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  const exception = new RequestTooLargeException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ResourceConflictExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceConflictException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.Type !== undefined && data.Type !== null) {
    contents.Type = __expectString(data.Type);
  }
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ResourceConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ResourceInUseExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceInUseException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.Type !== undefined && data.Type !== null) {
    contents.Type = __expectString(data.Type);
  }
  const exception = new ResourceInUseException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.Type !== undefined && data.Type !== null) {
    contents.Type = __expectString(data.Type);
  }
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ResourceNotReadyExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotReadyException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.Type !== undefined && data.Type !== null) {
    contents.Type = __expectString(data.Type);
  }
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ResourceNotReadyException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ServiceExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.Type !== undefined && data.Type !== null) {
    contents.Type = __expectString(data.Type);
  }
  const exception = new ServiceException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1SubnetIPAddressLimitReachedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SubnetIPAddressLimitReachedException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.Type !== undefined && data.Type !== null) {
    contents.Type = __expectString(data.Type);
  }
  const exception = new SubnetIPAddressLimitReachedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1TooManyRequestsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyRequestsException> => {
  const contents: any = {};
  if (parsedOutput.headers["retry-after"] !== undefined) {
    contents.retryAfterSeconds = parsedOutput.headers["retry-after"];
  }
  const data: any = parsedOutput.body;
  if (data.Reason !== undefined && data.Reason !== null) {
    contents.Reason = __expectString(data.Reason);
  }
  if (data.Type !== undefined && data.Type !== null) {
    contents.Type = __expectString(data.Type);
  }
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  const exception = new TooManyRequestsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1UnsupportedMediaTypeExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedMediaTypeException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.Type !== undefined && data.Type !== null) {
    contents.Type = __expectString(data.Type);
  }
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  const exception = new UnsupportedMediaTypeException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const serializeAws_restJson1AdditionalVersionWeights = (
  input: Record<string, number>,
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: __serializeFloat(value),
    };
  }, {});
};

const serializeAws_restJson1AliasRoutingConfiguration = (
  input: AliasRoutingConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.AdditionalVersionWeights != null && {
      AdditionalVersionWeights: serializeAws_restJson1AdditionalVersionWeights(input.AdditionalVersionWeights, context),
    }),
  };
};

const serializeAws_restJson1AllowedPublishers = (input: AllowedPublishers, context: __SerdeContext): any => {
  return {
    ...(input.SigningProfileVersionArns != null && {
      SigningProfileVersionArns: serializeAws_restJson1SigningProfileVersionArns(
        input.SigningProfileVersionArns,
        context
      ),
    }),
  };
};

const serializeAws_restJson1AllowMethodsList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1AllowOriginsList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1ArchitecturesList = (input: (Architecture | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1CodeSigningPolicies = (input: CodeSigningPolicies, context: __SerdeContext): any => {
  return {
    ...(input.UntrustedArtifactOnDeployment != null && {
      UntrustedArtifactOnDeployment: input.UntrustedArtifactOnDeployment,
    }),
  };
};

const serializeAws_restJson1CompatibleArchitectures = (
  input: (Architecture | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1CompatibleRuntimes = (input: (Runtime | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1Cors = (input: Cors, context: __SerdeContext): any => {
  return {
    ...(input.AllowCredentials != null && { AllowCredentials: input.AllowCredentials }),
    ...(input.AllowHeaders != null && { AllowHeaders: serializeAws_restJson1HeadersList(input.AllowHeaders, context) }),
    ...(input.AllowMethods != null && {
      AllowMethods: serializeAws_restJson1AllowMethodsList(input.AllowMethods, context),
    }),
    ...(input.AllowOrigins != null && {
      AllowOrigins: serializeAws_restJson1AllowOriginsList(input.AllowOrigins, context),
    }),
    ...(input.ExposeHeaders != null && {
      ExposeHeaders: serializeAws_restJson1HeadersList(input.ExposeHeaders, context),
    }),
    ...(input.MaxAge != null && { MaxAge: input.MaxAge }),
  };
};

const serializeAws_restJson1DeadLetterConfig = (input: DeadLetterConfig, context: __SerdeContext): any => {
  return {
    ...(input.TargetArn != null && { TargetArn: input.TargetArn }),
  };
};

const serializeAws_restJson1DestinationConfig = (input: DestinationConfig, context: __SerdeContext): any => {
  return {
    ...(input.OnFailure != null && { OnFailure: serializeAws_restJson1OnFailure(input.OnFailure, context) }),
    ...(input.OnSuccess != null && { OnSuccess: serializeAws_restJson1OnSuccess(input.OnSuccess, context) }),
  };
};

const serializeAws_restJson1EndpointLists = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1Endpoints = (input: Record<string, string[]>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [EndPointType | string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: serializeAws_restJson1EndpointLists(value, context),
    };
  }, {});
};

const serializeAws_restJson1Environment = (input: Environment, context: __SerdeContext): any => {
  return {
    ...(input.Variables != null && { Variables: serializeAws_restJson1EnvironmentVariables(input.Variables, context) }),
  };
};

const serializeAws_restJson1EnvironmentVariables = (input: Record<string, string>, context: __SerdeContext): any => {
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

const serializeAws_restJson1EphemeralStorage = (input: EphemeralStorage, context: __SerdeContext): any => {
  return {
    ...(input.Size != null && { Size: input.Size }),
  };
};

const serializeAws_restJson1FileSystemConfig = (input: FileSystemConfig, context: __SerdeContext): any => {
  return {
    ...(input.Arn != null && { Arn: input.Arn }),
    ...(input.LocalMountPath != null && { LocalMountPath: input.LocalMountPath }),
  };
};

const serializeAws_restJson1FileSystemConfigList = (input: FileSystemConfig[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1FileSystemConfig(entry, context);
    });
};

const serializeAws_restJson1Filter = (input: Filter, context: __SerdeContext): any => {
  return {
    ...(input.Pattern != null && { Pattern: input.Pattern }),
  };
};

const serializeAws_restJson1FilterCriteria = (input: FilterCriteria, context: __SerdeContext): any => {
  return {
    ...(input.Filters != null && { Filters: serializeAws_restJson1FilterList(input.Filters, context) }),
  };
};

const serializeAws_restJson1FilterList = (input: Filter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1Filter(entry, context);
    });
};

const serializeAws_restJson1FunctionCode = (input: FunctionCode, context: __SerdeContext): any => {
  return {
    ...(input.ImageUri != null && { ImageUri: input.ImageUri }),
    ...(input.S3Bucket != null && { S3Bucket: input.S3Bucket }),
    ...(input.S3Key != null && { S3Key: input.S3Key }),
    ...(input.S3ObjectVersion != null && { S3ObjectVersion: input.S3ObjectVersion }),
    ...(input.ZipFile != null && { ZipFile: context.base64Encoder(input.ZipFile) }),
  };
};

const serializeAws_restJson1FunctionResponseTypeList = (
  input: (FunctionResponseType | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1HeadersList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1ImageConfig = (input: ImageConfig, context: __SerdeContext): any => {
  return {
    ...(input.Command != null && { Command: serializeAws_restJson1StringList(input.Command, context) }),
    ...(input.EntryPoint != null && { EntryPoint: serializeAws_restJson1StringList(input.EntryPoint, context) }),
    ...(input.WorkingDirectory != null && { WorkingDirectory: input.WorkingDirectory }),
  };
};

const serializeAws_restJson1LayerList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1LayerVersionContentInput = (
  input: LayerVersionContentInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.S3Bucket != null && { S3Bucket: input.S3Bucket }),
    ...(input.S3Key != null && { S3Key: input.S3Key }),
    ...(input.S3ObjectVersion != null && { S3ObjectVersion: input.S3ObjectVersion }),
    ...(input.ZipFile != null && { ZipFile: context.base64Encoder(input.ZipFile) }),
  };
};

const serializeAws_restJson1OnFailure = (input: OnFailure, context: __SerdeContext): any => {
  return {
    ...(input.Destination != null && { Destination: input.Destination }),
  };
};

const serializeAws_restJson1OnSuccess = (input: OnSuccess, context: __SerdeContext): any => {
  return {
    ...(input.Destination != null && { Destination: input.Destination }),
  };
};

const serializeAws_restJson1Queues = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1SecurityGroupIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1SelfManagedEventSource = (input: SelfManagedEventSource, context: __SerdeContext): any => {
  return {
    ...(input.Endpoints != null && { Endpoints: serializeAws_restJson1Endpoints(input.Endpoints, context) }),
  };
};

const serializeAws_restJson1SigningProfileVersionArns = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1SourceAccessConfiguration = (
  input: SourceAccessConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.Type != null && { Type: input.Type }),
    ...(input.URI != null && { URI: input.URI }),
  };
};

const serializeAws_restJson1SourceAccessConfigurations = (
  input: SourceAccessConfiguration[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1SourceAccessConfiguration(entry, context);
    });
};

const serializeAws_restJson1StringList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1SubnetIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1Tags = (input: Record<string, string>, context: __SerdeContext): any => {
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

const serializeAws_restJson1Topics = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1TracingConfig = (input: TracingConfig, context: __SerdeContext): any => {
  return {
    ...(input.Mode != null && { Mode: input.Mode }),
  };
};

const serializeAws_restJson1VpcConfig = (input: VpcConfig, context: __SerdeContext): any => {
  return {
    ...(input.SecurityGroupIds != null && {
      SecurityGroupIds: serializeAws_restJson1SecurityGroupIds(input.SecurityGroupIds, context),
    }),
    ...(input.SubnetIds != null && { SubnetIds: serializeAws_restJson1SubnetIds(input.SubnetIds, context) }),
  };
};

const deserializeAws_restJson1AccountLimit = (output: any, context: __SerdeContext): AccountLimit => {
  return {
    CodeSizeUnzipped: __expectLong(output.CodeSizeUnzipped),
    CodeSizeZipped: __expectLong(output.CodeSizeZipped),
    ConcurrentExecutions: __expectInt32(output.ConcurrentExecutions),
    TotalCodeSize: __expectLong(output.TotalCodeSize),
    UnreservedConcurrentExecutions: __expectInt32(output.UnreservedConcurrentExecutions),
  } as any;
};

const deserializeAws_restJson1AccountUsage = (output: any, context: __SerdeContext): AccountUsage => {
  return {
    FunctionCount: __expectLong(output.FunctionCount),
    TotalCodeSize: __expectLong(output.TotalCodeSize),
  } as any;
};

const deserializeAws_restJson1AdditionalVersionWeights = (
  output: any,
  context: __SerdeContext
): Record<string, number> => {
  return Object.entries(output).reduce((acc: Record<string, number>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: __limitedParseDouble(value) as any,
    };
  }, {});
};

const deserializeAws_restJson1AliasConfiguration = (output: any, context: __SerdeContext): AliasConfiguration => {
  return {
    AliasArn: __expectString(output.AliasArn),
    Description: __expectString(output.Description),
    FunctionVersion: __expectString(output.FunctionVersion),
    Name: __expectString(output.Name),
    RevisionId: __expectString(output.RevisionId),
    RoutingConfig:
      output.RoutingConfig != null
        ? deserializeAws_restJson1AliasRoutingConfiguration(output.RoutingConfig, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AliasList = (output: any, context: __SerdeContext): AliasConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AliasConfiguration(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AliasRoutingConfiguration = (
  output: any,
  context: __SerdeContext
): AliasRoutingConfiguration => {
  return {
    AdditionalVersionWeights:
      output.AdditionalVersionWeights != null
        ? deserializeAws_restJson1AdditionalVersionWeights(output.AdditionalVersionWeights, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AllowedPublishers = (output: any, context: __SerdeContext): AllowedPublishers => {
  return {
    SigningProfileVersionArns:
      output.SigningProfileVersionArns != null
        ? deserializeAws_restJson1SigningProfileVersionArns(output.SigningProfileVersionArns, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AllowMethodsList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1AllowOriginsList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1ArchitecturesList = (output: any, context: __SerdeContext): (Architecture | string)[] => {
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

const deserializeAws_restJson1CodeSigningConfig = (output: any, context: __SerdeContext): CodeSigningConfig => {
  return {
    AllowedPublishers:
      output.AllowedPublishers != null
        ? deserializeAws_restJson1AllowedPublishers(output.AllowedPublishers, context)
        : undefined,
    CodeSigningConfigArn: __expectString(output.CodeSigningConfigArn),
    CodeSigningConfigId: __expectString(output.CodeSigningConfigId),
    CodeSigningPolicies:
      output.CodeSigningPolicies != null
        ? deserializeAws_restJson1CodeSigningPolicies(output.CodeSigningPolicies, context)
        : undefined,
    Description: __expectString(output.Description),
    LastModified: __expectString(output.LastModified),
  } as any;
};

const deserializeAws_restJson1CodeSigningConfigList = (output: any, context: __SerdeContext): CodeSigningConfig[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1CodeSigningConfig(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1CodeSigningPolicies = (output: any, context: __SerdeContext): CodeSigningPolicies => {
  return {
    UntrustedArtifactOnDeployment: __expectString(output.UntrustedArtifactOnDeployment),
  } as any;
};

const deserializeAws_restJson1CompatibleArchitectures = (
  output: any,
  context: __SerdeContext
): (Architecture | string)[] => {
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

const deserializeAws_restJson1CompatibleRuntimes = (output: any, context: __SerdeContext): (Runtime | string)[] => {
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

const deserializeAws_restJson1Concurrency = (output: any, context: __SerdeContext): Concurrency => {
  return {
    ReservedConcurrentExecutions: __expectInt32(output.ReservedConcurrentExecutions),
  } as any;
};

const deserializeAws_restJson1Cors = (output: any, context: __SerdeContext): Cors => {
  return {
    AllowCredentials: __expectBoolean(output.AllowCredentials),
    AllowHeaders:
      output.AllowHeaders != null ? deserializeAws_restJson1HeadersList(output.AllowHeaders, context) : undefined,
    AllowMethods:
      output.AllowMethods != null ? deserializeAws_restJson1AllowMethodsList(output.AllowMethods, context) : undefined,
    AllowOrigins:
      output.AllowOrigins != null ? deserializeAws_restJson1AllowOriginsList(output.AllowOrigins, context) : undefined,
    ExposeHeaders:
      output.ExposeHeaders != null ? deserializeAws_restJson1HeadersList(output.ExposeHeaders, context) : undefined,
    MaxAge: __expectInt32(output.MaxAge),
  } as any;
};

const deserializeAws_restJson1DeadLetterConfig = (output: any, context: __SerdeContext): DeadLetterConfig => {
  return {
    TargetArn: __expectString(output.TargetArn),
  } as any;
};

const deserializeAws_restJson1DestinationConfig = (output: any, context: __SerdeContext): DestinationConfig => {
  return {
    OnFailure: output.OnFailure != null ? deserializeAws_restJson1OnFailure(output.OnFailure, context) : undefined,
    OnSuccess: output.OnSuccess != null ? deserializeAws_restJson1OnSuccess(output.OnSuccess, context) : undefined,
  } as any;
};

const deserializeAws_restJson1EndpointLists = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1Endpoints = (output: any, context: __SerdeContext): Record<string, string[]> => {
  return Object.entries(output).reduce((acc: Record<string, string[]>, [key, value]: [EndPointType | string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: deserializeAws_restJson1EndpointLists(value, context),
    };
  }, {});
};

const deserializeAws_restJson1EnvironmentError = (output: any, context: __SerdeContext): EnvironmentError => {
  return {
    ErrorCode: __expectString(output.ErrorCode),
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_restJson1EnvironmentResponse = (output: any, context: __SerdeContext): EnvironmentResponse => {
  return {
    Error: output.Error != null ? deserializeAws_restJson1EnvironmentError(output.Error, context) : undefined,
    Variables:
      output.Variables != null ? deserializeAws_restJson1EnvironmentVariables(output.Variables, context) : undefined,
  } as any;
};

const deserializeAws_restJson1EnvironmentVariables = (output: any, context: __SerdeContext): Record<string, string> => {
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

const deserializeAws_restJson1EphemeralStorage = (output: any, context: __SerdeContext): EphemeralStorage => {
  return {
    Size: __expectInt32(output.Size),
  } as any;
};

const deserializeAws_restJson1EventSourceMappingConfiguration = (
  output: any,
  context: __SerdeContext
): EventSourceMappingConfiguration => {
  return {
    BatchSize: __expectInt32(output.BatchSize),
    BisectBatchOnFunctionError: __expectBoolean(output.BisectBatchOnFunctionError),
    DestinationConfig:
      output.DestinationConfig != null
        ? deserializeAws_restJson1DestinationConfig(output.DestinationConfig, context)
        : undefined,
    EventSourceArn: __expectString(output.EventSourceArn),
    FilterCriteria:
      output.FilterCriteria != null
        ? deserializeAws_restJson1FilterCriteria(output.FilterCriteria, context)
        : undefined,
    FunctionArn: __expectString(output.FunctionArn),
    FunctionResponseTypes:
      output.FunctionResponseTypes != null
        ? deserializeAws_restJson1FunctionResponseTypeList(output.FunctionResponseTypes, context)
        : undefined,
    LastModified:
      output.LastModified != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModified)))
        : undefined,
    LastProcessingResult: __expectString(output.LastProcessingResult),
    MaximumBatchingWindowInSeconds: __expectInt32(output.MaximumBatchingWindowInSeconds),
    MaximumRecordAgeInSeconds: __expectInt32(output.MaximumRecordAgeInSeconds),
    MaximumRetryAttempts: __expectInt32(output.MaximumRetryAttempts),
    ParallelizationFactor: __expectInt32(output.ParallelizationFactor),
    Queues: output.Queues != null ? deserializeAws_restJson1Queues(output.Queues, context) : undefined,
    SelfManagedEventSource:
      output.SelfManagedEventSource != null
        ? deserializeAws_restJson1SelfManagedEventSource(output.SelfManagedEventSource, context)
        : undefined,
    SourceAccessConfigurations:
      output.SourceAccessConfigurations != null
        ? deserializeAws_restJson1SourceAccessConfigurations(output.SourceAccessConfigurations, context)
        : undefined,
    StartingPosition: __expectString(output.StartingPosition),
    StartingPositionTimestamp:
      output.StartingPositionTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartingPositionTimestamp)))
        : undefined,
    State: __expectString(output.State),
    StateTransitionReason: __expectString(output.StateTransitionReason),
    Topics: output.Topics != null ? deserializeAws_restJson1Topics(output.Topics, context) : undefined,
    TumblingWindowInSeconds: __expectInt32(output.TumblingWindowInSeconds),
    UUID: __expectString(output.UUID),
  } as any;
};

const deserializeAws_restJson1EventSourceMappingsList = (
  output: any,
  context: __SerdeContext
): EventSourceMappingConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1EventSourceMappingConfiguration(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1FileSystemConfig = (output: any, context: __SerdeContext): FileSystemConfig => {
  return {
    Arn: __expectString(output.Arn),
    LocalMountPath: __expectString(output.LocalMountPath),
  } as any;
};

const deserializeAws_restJson1FileSystemConfigList = (output: any, context: __SerdeContext): FileSystemConfig[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1FileSystemConfig(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1Filter = (output: any, context: __SerdeContext): Filter => {
  return {
    Pattern: __expectString(output.Pattern),
  } as any;
};

const deserializeAws_restJson1FilterCriteria = (output: any, context: __SerdeContext): FilterCriteria => {
  return {
    Filters: output.Filters != null ? deserializeAws_restJson1FilterList(output.Filters, context) : undefined,
  } as any;
};

const deserializeAws_restJson1FilterList = (output: any, context: __SerdeContext): Filter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Filter(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1FunctionArnList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1FunctionCodeLocation = (output: any, context: __SerdeContext): FunctionCodeLocation => {
  return {
    ImageUri: __expectString(output.ImageUri),
    Location: __expectString(output.Location),
    RepositoryType: __expectString(output.RepositoryType),
    ResolvedImageUri: __expectString(output.ResolvedImageUri),
  } as any;
};

const deserializeAws_restJson1FunctionConfiguration = (output: any, context: __SerdeContext): FunctionConfiguration => {
  return {
    Architectures:
      output.Architectures != null
        ? deserializeAws_restJson1ArchitecturesList(output.Architectures, context)
        : undefined,
    CodeSha256: __expectString(output.CodeSha256),
    CodeSize: __expectLong(output.CodeSize),
    DeadLetterConfig:
      output.DeadLetterConfig != null
        ? deserializeAws_restJson1DeadLetterConfig(output.DeadLetterConfig, context)
        : undefined,
    Description: __expectString(output.Description),
    Environment:
      output.Environment != null ? deserializeAws_restJson1EnvironmentResponse(output.Environment, context) : undefined,
    EphemeralStorage:
      output.EphemeralStorage != null
        ? deserializeAws_restJson1EphemeralStorage(output.EphemeralStorage, context)
        : undefined,
    FileSystemConfigs:
      output.FileSystemConfigs != null
        ? deserializeAws_restJson1FileSystemConfigList(output.FileSystemConfigs, context)
        : undefined,
    FunctionArn: __expectString(output.FunctionArn),
    FunctionName: __expectString(output.FunctionName),
    Handler: __expectString(output.Handler),
    ImageConfigResponse:
      output.ImageConfigResponse != null
        ? deserializeAws_restJson1ImageConfigResponse(output.ImageConfigResponse, context)
        : undefined,
    KMSKeyArn: __expectString(output.KMSKeyArn),
    LastModified: __expectString(output.LastModified),
    LastUpdateStatus: __expectString(output.LastUpdateStatus),
    LastUpdateStatusReason: __expectString(output.LastUpdateStatusReason),
    LastUpdateStatusReasonCode: __expectString(output.LastUpdateStatusReasonCode),
    Layers: output.Layers != null ? deserializeAws_restJson1LayersReferenceList(output.Layers, context) : undefined,
    MasterArn: __expectString(output.MasterArn),
    MemorySize: __expectInt32(output.MemorySize),
    PackageType: __expectString(output.PackageType),
    RevisionId: __expectString(output.RevisionId),
    Role: __expectString(output.Role),
    Runtime: __expectString(output.Runtime),
    SigningJobArn: __expectString(output.SigningJobArn),
    SigningProfileVersionArn: __expectString(output.SigningProfileVersionArn),
    State: __expectString(output.State),
    StateReason: __expectString(output.StateReason),
    StateReasonCode: __expectString(output.StateReasonCode),
    Timeout: __expectInt32(output.Timeout),
    TracingConfig:
      output.TracingConfig != null
        ? deserializeAws_restJson1TracingConfigResponse(output.TracingConfig, context)
        : undefined,
    Version: __expectString(output.Version),
    VpcConfig:
      output.VpcConfig != null ? deserializeAws_restJson1VpcConfigResponse(output.VpcConfig, context) : undefined,
  } as any;
};

const deserializeAws_restJson1FunctionEventInvokeConfig = (
  output: any,
  context: __SerdeContext
): FunctionEventInvokeConfig => {
  return {
    DestinationConfig:
      output.DestinationConfig != null
        ? deserializeAws_restJson1DestinationConfig(output.DestinationConfig, context)
        : undefined,
    FunctionArn: __expectString(output.FunctionArn),
    LastModified:
      output.LastModified != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModified)))
        : undefined,
    MaximumEventAgeInSeconds: __expectInt32(output.MaximumEventAgeInSeconds),
    MaximumRetryAttempts: __expectInt32(output.MaximumRetryAttempts),
  } as any;
};

const deserializeAws_restJson1FunctionEventInvokeConfigList = (
  output: any,
  context: __SerdeContext
): FunctionEventInvokeConfig[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1FunctionEventInvokeConfig(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1FunctionList = (output: any, context: __SerdeContext): FunctionConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1FunctionConfiguration(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1FunctionResponseTypeList = (
  output: any,
  context: __SerdeContext
): (FunctionResponseType | string)[] => {
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

const deserializeAws_restJson1FunctionUrlConfig = (output: any, context: __SerdeContext): FunctionUrlConfig => {
  return {
    AuthType: __expectString(output.AuthType),
    Cors: output.Cors != null ? deserializeAws_restJson1Cors(output.Cors, context) : undefined,
    CreationTime: __expectString(output.CreationTime),
    FunctionArn: __expectString(output.FunctionArn),
    FunctionUrl: __expectString(output.FunctionUrl),
    LastModifiedTime: __expectString(output.LastModifiedTime),
  } as any;
};

const deserializeAws_restJson1FunctionUrlConfigList = (output: any, context: __SerdeContext): FunctionUrlConfig[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1FunctionUrlConfig(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1HeadersList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1ImageConfig = (output: any, context: __SerdeContext): ImageConfig => {
  return {
    Command: output.Command != null ? deserializeAws_restJson1StringList(output.Command, context) : undefined,
    EntryPoint: output.EntryPoint != null ? deserializeAws_restJson1StringList(output.EntryPoint, context) : undefined,
    WorkingDirectory: __expectString(output.WorkingDirectory),
  } as any;
};

const deserializeAws_restJson1ImageConfigError = (output: any, context: __SerdeContext): ImageConfigError => {
  return {
    ErrorCode: __expectString(output.ErrorCode),
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_restJson1ImageConfigResponse = (output: any, context: __SerdeContext): ImageConfigResponse => {
  return {
    Error: output.Error != null ? deserializeAws_restJson1ImageConfigError(output.Error, context) : undefined,
    ImageConfig:
      output.ImageConfig != null ? deserializeAws_restJson1ImageConfig(output.ImageConfig, context) : undefined,
  } as any;
};

const deserializeAws_restJson1Layer = (output: any, context: __SerdeContext): Layer => {
  return {
    Arn: __expectString(output.Arn),
    CodeSize: __expectLong(output.CodeSize),
    SigningJobArn: __expectString(output.SigningJobArn),
    SigningProfileVersionArn: __expectString(output.SigningProfileVersionArn),
  } as any;
};

const deserializeAws_restJson1LayersList = (output: any, context: __SerdeContext): LayersListItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1LayersListItem(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1LayersListItem = (output: any, context: __SerdeContext): LayersListItem => {
  return {
    LatestMatchingVersion:
      output.LatestMatchingVersion != null
        ? deserializeAws_restJson1LayerVersionsListItem(output.LatestMatchingVersion, context)
        : undefined,
    LayerArn: __expectString(output.LayerArn),
    LayerName: __expectString(output.LayerName),
  } as any;
};

const deserializeAws_restJson1LayersReferenceList = (output: any, context: __SerdeContext): Layer[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Layer(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1LayerVersionContentOutput = (
  output: any,
  context: __SerdeContext
): LayerVersionContentOutput => {
  return {
    CodeSha256: __expectString(output.CodeSha256),
    CodeSize: __expectLong(output.CodeSize),
    Location: __expectString(output.Location),
    SigningJobArn: __expectString(output.SigningJobArn),
    SigningProfileVersionArn: __expectString(output.SigningProfileVersionArn),
  } as any;
};

const deserializeAws_restJson1LayerVersionsList = (output: any, context: __SerdeContext): LayerVersionsListItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1LayerVersionsListItem(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1LayerVersionsListItem = (output: any, context: __SerdeContext): LayerVersionsListItem => {
  return {
    CompatibleArchitectures:
      output.CompatibleArchitectures != null
        ? deserializeAws_restJson1CompatibleArchitectures(output.CompatibleArchitectures, context)
        : undefined,
    CompatibleRuntimes:
      output.CompatibleRuntimes != null
        ? deserializeAws_restJson1CompatibleRuntimes(output.CompatibleRuntimes, context)
        : undefined,
    CreatedDate: __expectString(output.CreatedDate),
    Description: __expectString(output.Description),
    LayerVersionArn: __expectString(output.LayerVersionArn),
    LicenseInfo: __expectString(output.LicenseInfo),
    Version: __expectLong(output.Version),
  } as any;
};

const deserializeAws_restJson1OnFailure = (output: any, context: __SerdeContext): OnFailure => {
  return {
    Destination: __expectString(output.Destination),
  } as any;
};

const deserializeAws_restJson1OnSuccess = (output: any, context: __SerdeContext): OnSuccess => {
  return {
    Destination: __expectString(output.Destination),
  } as any;
};

const deserializeAws_restJson1ProvisionedConcurrencyConfigList = (
  output: any,
  context: __SerdeContext
): ProvisionedConcurrencyConfigListItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ProvisionedConcurrencyConfigListItem(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ProvisionedConcurrencyConfigListItem = (
  output: any,
  context: __SerdeContext
): ProvisionedConcurrencyConfigListItem => {
  return {
    AllocatedProvisionedConcurrentExecutions: __expectInt32(output.AllocatedProvisionedConcurrentExecutions),
    AvailableProvisionedConcurrentExecutions: __expectInt32(output.AvailableProvisionedConcurrentExecutions),
    FunctionArn: __expectString(output.FunctionArn),
    LastModified: __expectString(output.LastModified),
    RequestedProvisionedConcurrentExecutions: __expectInt32(output.RequestedProvisionedConcurrentExecutions),
    Status: __expectString(output.Status),
    StatusReason: __expectString(output.StatusReason),
  } as any;
};

const deserializeAws_restJson1Queues = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1SecurityGroupIds = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1SelfManagedEventSource = (
  output: any,
  context: __SerdeContext
): SelfManagedEventSource => {
  return {
    Endpoints: output.Endpoints != null ? deserializeAws_restJson1Endpoints(output.Endpoints, context) : undefined,
  } as any;
};

const deserializeAws_restJson1SigningProfileVersionArns = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1SourceAccessConfiguration = (
  output: any,
  context: __SerdeContext
): SourceAccessConfiguration => {
  return {
    Type: __expectString(output.Type),
    URI: __expectString(output.URI),
  } as any;
};

const deserializeAws_restJson1SourceAccessConfigurations = (
  output: any,
  context: __SerdeContext
): SourceAccessConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1SourceAccessConfiguration(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1StringList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1SubnetIds = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1Tags = (output: any, context: __SerdeContext): Record<string, string> => {
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

const deserializeAws_restJson1Topics = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1TracingConfigResponse = (output: any, context: __SerdeContext): TracingConfigResponse => {
  return {
    Mode: __expectString(output.Mode),
  } as any;
};

const deserializeAws_restJson1VpcConfigResponse = (output: any, context: __SerdeContext): VpcConfigResponse => {
  return {
    SecurityGroupIds:
      output.SecurityGroupIds != null
        ? deserializeAws_restJson1SecurityGroupIds(output.SecurityGroupIds, context)
        : undefined,
    SubnetIds: output.SubnetIds != null ? deserializeAws_restJson1SubnetIds(output.SubnetIds, context) : undefined,
    VpcId: __expectString(output.VpcId),
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

const isSerializableHeaderValue = (value: any): boolean =>
  value !== undefined &&
  value !== null &&
  value !== "" &&
  (!Object.getOwnPropertyNames(value).includes("length") || value.length != 0) &&
  (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);

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
