// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@aws-sdk/smithy-client";

import { OpenSearchServiceException as __BaseException } from "./OpenSearchServiceException";

/**
 * <p>Container for the parameters to the
 *       <code>
 *         <a>AcceptInboundConnection</a>
 *       </code>
 *       operation.
 *     </p>
 */
export interface AcceptInboundConnectionRequest {
  /**
   * <p>The ID of the inbound connection you want to accept.</p>
   */
  ConnectionId: string | undefined;
}

export enum InboundConnectionStatusCode {
  ACTIVE = "ACTIVE",
  APPROVED = "APPROVED",
  DELETED = "DELETED",
  DELETING = "DELETING",
  PENDING_ACCEPTANCE = "PENDING_ACCEPTANCE",
  PROVISIONING = "PROVISIONING",
  REJECTED = "REJECTED",
  REJECTING = "REJECTING",
}

/**
 * <p>The connection status of an inbound cross-cluster connection.</p>
 */
export interface InboundConnectionStatus {
  /**
   * <p>The state code for the inbound connection. Can be one of the following:</p>
   *     <ul>
   *       <li>PENDING_ACCEPTANCE: Inbound connection is not yet accepted by the remote domain owner.</li>
   *       <li>APPROVED: Inbound connection is pending acceptance by the remote domain owner.</li>
   *       <li>PROVISIONING: Inbound connection provisioning is in progress.</li>
   *       <li>ACTIVE: Inbound connection is active and ready to use.</li>
   *       <li>REJECTING: Inbound connection rejection is in process.</li>
   *       <li>REJECTED: Inbound connection is rejected.</li>
   *       <li>DELETING: Inbound connection deletion is in progress.</li>
   *       <li>DELETED: Inbound connection is deleted and can no longer be used.</li>
   *     </ul>
   */
  StatusCode?: InboundConnectionStatusCode | string;

  /**
   * <p>Verbose information for the inbound connection status.</p>
   */
  Message?: string;
}

export interface AWSDomainInformation {
  OwnerId?: string;
  /**
   * <p>The name of an domain. Domain names are unique across the domains owned by an account within an AWS
   *       region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9,
   *       and - (hyphen).
   *     </p>
   */
  DomainName: string | undefined;

  Region?: string;
}

export interface DomainInformationContainer {
  AWSDomainInformation?: AWSDomainInformation;
}

/**
 * <p>Details of an inbound connection.</p>
 */
export interface InboundConnection {
  /**
   * <p>The
   *       <code>
   *         <a>AWSDomainInformation</a>
   *       </code>
   *       for the local OpenSearch domain.
   *     </p>
   */
  LocalDomainInfo?: DomainInformationContainer;

  /**
   * <p>The
   *       <code>
   *         <a>AWSDomainInformation</a>
   *       </code>
   *       for the remote OpenSearch domain.
   *     </p>
   */
  RemoteDomainInfo?: DomainInformationContainer;

  /**
   * <p>The connection ID for the inbound cross-cluster connection.</p>
   */
  ConnectionId?: string;

  /**
   * <p>The
   *       <code>
   *         <a>InboundConnectionStatus</a>
   *       </code>
   *       for the outbound connection.
   *     </p>
   */
  ConnectionStatus?: InboundConnectionStatus;
}

/**
 * <p>The result of an
 *       <code>
 *         <a>AcceptInboundConnection</a>
 *       </code>
 *       operation. Contains details about the accepted inbound connection.
 *     </p>
 */
export interface AcceptInboundConnectionResponse {
  /**
   * <p>The
   *       <code>
   *         <a>InboundConnection</a>
   *       </code>
   *       of the accepted inbound connection.
   *     </p>
   */
  Connection?: InboundConnection;
}

/**
 * <p>An error occured because the client wanted to access a not supported operation. Gives http status code of 409.</p>
 */
export class DisabledOperationException extends __BaseException {
  readonly name: "DisabledOperationException" = "DisabledOperationException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DisabledOperationException, __BaseException>) {
    super({
      name: "DisabledOperationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DisabledOperationException.prototype);
  }
}

/**
 * <p>An exception for trying to create more than allowed resources or sub-resources. Gives http status code of 409.</p>
 */
export class LimitExceededException extends __BaseException {
  readonly name: "LimitExceededException" = "LimitExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LimitExceededException, __BaseException>) {
    super({
      name: "LimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LimitExceededException.prototype);
  }
}

/**
 * <p>An exception for accessing or deleting a resource that does not exist. Gives http status code of 400.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
  }
}

/**
 * <p>An error occurred because user does not have permissions to access the resource. Returns HTTP status code 403.</p>
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessDeniedException, __BaseException>) {
    super({
      name: "AccessDeniedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessDeniedException.prototype);
  }
}

export enum OptionState {
  Active = "Active",
  Processing = "Processing",
  RequiresIndexDocuments = "RequiresIndexDocuments",
}

/**
 * <p>Provides the current status of the entity.</p>
 */
export interface OptionStatus {
  /**
   * <p>The timestamp of when the entity was created.</p>
   */
  CreationDate: Date | undefined;

  /**
   * <p>The timestamp of the last time the entity was updated.</p>
   */
  UpdateDate: Date | undefined;

  /**
   * <p>The latest version of the entity.</p>
   */
  UpdateVersion?: number;

  /**
   * <p>Provides the <code>OptionState</code> for the domain.
   *     </p>
   */
  State: OptionState | string | undefined;

  /**
   * <p>Indicates whether the domain is being deleted.</p>
   */
  PendingDeletion?: boolean;
}

/**
 * <p>The configured access rules for the domain's document and search endpoints, and the current status of those
 *       rules.
 *     </p>
 */
export interface AccessPoliciesStatus {
  /**
   * <p>The access policy configured for the domain. Access policies can be resource-based, IP-based, or
   *       IAM-based. See <a href="http://docs.aws.amazon.com/opensearch-service/latest/developerguide/createupdatedomains.html#createdomain-configure-access-policies" target="_blank">
   *         Configuring access policies</a>for more information.
   *     </p>
   */
  Options: string | undefined;

  /**
   * <p>The status of the access policy for the domain. See <code>OptionStatus</code> for the status
   *       information that's included.
   *     </p>
   */
  Status: OptionStatus | undefined;
}

/**
 * <p>
 *       List of limits that are specific to a given InstanceType and for each of its
 *       <code>
 *         <a>InstanceRole</a>
 *       </code>
 *       .
 *     </p>
 */
export interface AdditionalLimit {
  /**
   * <p>
   *       Additional limit is specific to a given InstanceType and for each of its
   *       <code>
   *         <a>InstanceRole</a>
   *       </code>
   *       etc.
   *       <br></br>
   *       Attributes and their details:
   *       <br></br>
   *       <ul>
   *         <li>MaximumNumberOfDataNodesSupported</li>
   *         This attribute is present on the master node only to specify how
   *         much data nodes up to which given
   *         <code>
   *           <a>ESPartitionInstanceType</a>
   *         </code>
   *         can support as master node.
   *         <li>MaximumNumberOfDataNodesWithoutMasterNode</li>
   *         This attribute is present on data node only to specify how much
   *         data nodes of given
   *         <code>
   *           <a>ESPartitionInstanceType</a>
   *         </code>
   *         up to which you don't need any master nodes to govern them.
   *       </ul>
   *     </p>
   */
  LimitName?: string;

  /**
   * <p>
   *       Value for a given
   *       <code>
   *         <a>AdditionalLimit$LimitName</a>
   *       </code>
   *       .
   *     </p>
   */
  LimitValues?: string[];
}

/**
 * <p>A key value pair for a resource tag.</p>
 */
export interface Tag {
  /**
   * <p>The <code>TagKey</code>, the name of the tag. Tag keys must be unique for the domain to
   *       which they are attached.
   *     </p>
   */
  Key: string | undefined;

  /**
   * <p>The <code>TagValue</code>, the value assigned to the corresponding tag key. Tag values can be null and
   *       don't have to be unique in a tag set. For example, you can have a key value
   *       pair in a tag set of <code>project : Trinity</code> and
   *       <code>cost-center : Trinity</code>
   *     </p>
   */
  Value: string | undefined;
}

/**
 * <p>Container for the parameters to the
 *       <code>
 *         <a>AddTags</a>
 *       </code>
 *       operation. Specifies the tags to attach to the domain.
 *     </p>
 */
export interface AddTagsRequest {
  /**
   * <p>Specify the <code>ARN</code> of the domain you want to add tags to.
   *     </p>
   */
  ARN: string | undefined;

  /**
   * <p>List of <code>Tag</code> to add to the domain.
   *     </p>
   */
  TagList: Tag[] | undefined;
}

/**
 * <p>An error occurred while processing the request.</p>
 */
export class BaseException extends __BaseException {
  readonly name: "BaseException" = "BaseException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<BaseException, __BaseException>) {
    super({
      name: "BaseException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, BaseException.prototype);
  }
}

/**
 * <p>The request processing has failed because of an unknown error, exception or failure (the failure is internal to the service) . Gives http status code of 500.</p>
 */
export class InternalException extends __BaseException {
  readonly name: "InternalException" = "InternalException";
  readonly $fault: "server" = "server";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalException, __BaseException>) {
    super({
      name: "InternalException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalException.prototype);
  }
}

/**
 * <p>An exception for missing / invalid input fields. Gives http status code of 400.</p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ValidationException, __BaseException>) {
    super({
      name: "ValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ValidationException.prototype);
  }
}

/**
 * <p>Status of the advanced options for the specified domain. Currently, the following advanced options
 *       are available:
 *     </p>
 *     <ul>
 *       <li>Option to allow references to indices in an HTTP request body. Must be <code>false</code> when configuring
 *         access to individual sub-resources. By default, the value is <code>true</code>.
 *         See <a href="http://docs.aws.amazon.com/opensearch-service/latest/developerguide/createupdatedomains.html#createdomain-configure-advanced-options" target="_blank">Advanced cluster parameters
 *         </a> for more information.
 *       </li>
 *       <li>Option to specify the percentage of heap space allocated to field data. By default, this setting is
 *         unbounded.
 *       </li>
 *     </ul>
 *     <p>For more information, see <a href="http://docs.aws.amazon.com/opensearch-service/latest/developerguide/createupdatedomains.html#createdomain-configure-advanced-options">
 *       Advanced cluster parameters</a>.
 *     </p>
 */
export interface AdvancedOptionsStatus {
  /**
   * <p>The status of advanced options for the specified domain.</p>
   */
  Options: Record<string, string> | undefined;

  /**
   * <p>The <code>OptionStatus</code> for advanced options for the specified domain.
   *     </p>
   */
  Status: OptionStatus | undefined;
}

/**
 * <p>The SAML identity povider's information.</p>
 */
export interface SAMLIdp {
  /**
   * <p>The metadata of the SAML application in XML format.</p>
   */
  MetadataContent: string | undefined;

  /**
   * <p>The unique entity ID of the application in SAML identity provider.</p>
   */
  EntityId: string | undefined;
}

/**
 * <p>Describes the SAML application configured for the domain.</p>
 */
export interface SAMLOptionsOutput {
  /**
   * <p>True if SAML is enabled.</p>
   */
  Enabled?: boolean;

  /**
   * <p>Describes the SAML identity provider's information.</p>
   */
  Idp?: SAMLIdp;

  /**
   * <p>The key used for matching the SAML subject attribute.</p>
   */
  SubjectKey?: string;

  /**
   * <p>The key used for matching the SAML roles attribute.</p>
   */
  RolesKey?: string;

  /**
   * <p>The duration, in minutes, after which a user session becomes inactive.</p>
   */
  SessionTimeoutMinutes?: number;
}

/**
 * <p>The advanced security configuration: whether advanced security is enabled, whether the internal
 *       database option is enabled.
 *     </p>
 */
export interface AdvancedSecurityOptions {
  /**
   * <p>True if advanced security is enabled.</p>
   */
  Enabled?: boolean;

  /**
   * <p>True if the internal user database is enabled.</p>
   */
  InternalUserDatabaseEnabled?: boolean;

  /**
   * <p>Describes the SAML application configured for a domain.</p>
   */
  SAMLOptions?: SAMLOptionsOutput;

  /**
   * <p>Specifies the Anonymous Auth Disable Date when Anonymous Auth is enabled.</p>
   */
  AnonymousAuthDisableDate?: Date;

  /**
   * <p>True if Anonymous auth is enabled. Anonymous auth can be enabled only when AdvancedSecurity is enabled on existing domains.</p>
   */
  AnonymousAuthEnabled?: boolean;
}

/**
 * <p>Credentials for the master user: username and password, ARN, or both.</p>
 */
export interface MasterUserOptions {
  /**
   * <p>ARN for the master user (if IAM is enabled).</p>
   */
  MasterUserARN?: string;

  /**
   * <p>The master user's username, which is stored in the Amazon OpenSearch Service domain's internal database.</p>
   */
  MasterUserName?: string;

  /**
   * <p>The master user's password, which is stored in the Amazon OpenSearch Service domain's internal database.</p>
   */
  MasterUserPassword?: string;
}

/**
 * <p>The SAML application configuration for the domain.</p>
 */
export interface SAMLOptionsInput {
  /**
   * <p>True if SAML is enabled.</p>
   */
  Enabled?: boolean;

  /**
   * <p>The SAML Identity Provider's information.</p>
   */
  Idp?: SAMLIdp;

  /**
   * <p>The SAML master username, which is stored in the Amazon OpenSearch Service domain's internal database.</p>
   */
  MasterUserName?: string;

  /**
   * <p>The backend role that the SAML master user is mapped to.</p>
   */
  MasterBackendRole?: string;

  /**
   * <p>Element of the SAML assertion to use for username. Default is NameID.</p>
   */
  SubjectKey?: string;

  /**
   * <p>Element of the SAML assertion to use for backend roles. Default is roles.</p>
   */
  RolesKey?: string;

  /**
   * <p>The duration, in minutes, after which a user session becomes inactive. Acceptable values are between 1 and 1440,
   *       and the default value is 60.
   *     </p>
   */
  SessionTimeoutMinutes?: number;
}

/**
 * <p>The advanced security configuration: whether advanced security is enabled, whether the internal
 *       database option is enabled, master username and password (if internal database is enabled), and master user ARN
 *       (if IAM is enabled).
 *     </p>
 */
export interface AdvancedSecurityOptionsInput {
  /**
   * <p>True if advanced security is enabled.</p>
   */
  Enabled?: boolean;

  /**
   * <p>True if the internal user database is enabled.</p>
   */
  InternalUserDatabaseEnabled?: boolean;

  /**
   * <p>Credentials for the master user: username and password, ARN, or both.</p>
   */
  MasterUserOptions?: MasterUserOptions;

  /**
   * <p>The SAML application configuration for the domain.</p>
   */
  SAMLOptions?: SAMLOptionsInput;

  /**
   * <p>True if Anonymous auth is enabled. Anonymous auth can be enabled only when AdvancedSecurity is enabled on existing domains.</p>
   */
  AnonymousAuthEnabled?: boolean;
}

/**
 * <p>The status of advanced security options for the specified domain.</p>
 */
export interface AdvancedSecurityOptionsStatus {
  /**
   * <p>Advanced security options for the specified domain.</p>
   */
  Options: AdvancedSecurityOptions | undefined;

  /**
   * <p>Status of the advanced security options for the specified domain.</p>
   */
  Status: OptionStatus | undefined;
}

/**
 * <p>
 *       Container for the request parameters to the
 *       <code>
 *         <a>AssociatePackage</a>
 *       </code>
 *       operation.
 *     </p>
 */
export interface AssociatePackageRequest {
  /**
   * <p>Internal ID of the package to associate with a domain. Use <code>DescribePackages</code> to find
   *       this value.
   *     </p>
   */
  PackageID: string | undefined;

  /**
   * <p>The name of the domain to associate the package with.</p>
   */
  DomainName: string | undefined;
}

export enum DomainPackageStatus {
  ACTIVE = "ACTIVE",
  ASSOCIATING = "ASSOCIATING",
  ASSOCIATION_FAILED = "ASSOCIATION_FAILED",
  DISSOCIATING = "DISSOCIATING",
  DISSOCIATION_FAILED = "DISSOCIATION_FAILED",
}

export interface ErrorDetails {
  ErrorType?: string;
  ErrorMessage?: string;
}

export enum PackageType {
  TXT_DICTIONARY = "TXT-DICTIONARY",
}

/**
 * <p>Information on a package associated with a domain.</p>
 */
export interface DomainPackageDetails {
  /**
   * <p>The internal ID of the package.</p>
   */
  PackageID?: string;

  /**
   * <p>User-specified name of the package.</p>
   */
  PackageName?: string;

  /**
   * <p>Currently supports only TXT-DICTIONARY.</p>
   */
  PackageType?: PackageType | string;

  /**
   * <p>The timestamp of the most recent update to the package association status.</p>
   */
  LastUpdated?: Date;

  /**
   * <p>The name of the domain you've associated a package with.</p>
   */
  DomainName?: string;

  /**
   * <p>State of the association. Values are ASSOCIATING, ASSOCIATION_FAILED, ACTIVE, DISSOCIATING, and DISSOCIATION_FAILED.</p>
   */
  DomainPackageStatus?: DomainPackageStatus | string;

  PackageVersion?: string;
  /**
   * <p>The relative path on Amazon OpenSearch Service nodes, which can be used as synonym_path when the package is a synonym file.</p>
   */
  ReferencePath?: string;

  /**
   * <p>Additional information if the package is in an error state. Null otherwise.</p>
   */
  ErrorDetails?: ErrorDetails;
}

/**
 * <p>
 *       Container for the response returned by
 *       <code>
 *         <a>AssociatePackage</a>
 *       </code>
 *       operation.
 *     </p>
 */
export interface AssociatePackageResponse {
  /**
   * <p>
   *       <code>DomainPackageDetails</code>
   *     </p>
   */
  DomainPackageDetails?: DomainPackageDetails;
}

/**
 * <p>An error occurred because the client attempts to remove a resource that is currently in use. Returns HTTP status code 409.</p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConflictException, __BaseException>) {
    super({
      name: "ConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConflictException.prototype);
  }
}

/**
 * <p>Container for the parameters to the
 *       <code>
 *         <a>CancelServiceSoftwareUpdate</a>
 *       </code>
 *       operation. Specifies the name of the domain that you wish to cancel a service software update on.
 *     </p>
 */
export interface CancelServiceSoftwareUpdateRequest {
  /**
   * <p>The name of the domain that you want to stop the latest service software update on.</p>
   */
  DomainName: string | undefined;
}

export enum DeploymentStatus {
  COMPLETED = "COMPLETED",
  ELIGIBLE = "ELIGIBLE",
  IN_PROGRESS = "IN_PROGRESS",
  NOT_ELIGIBLE = "NOT_ELIGIBLE",
  PENDING_UPDATE = "PENDING_UPDATE",
}

/**
 * <p>The current options of an domain service software options.</p>
 */
export interface ServiceSoftwareOptions {
  /**
   * <p>The current service software version present on the domain.</p>
   */
  CurrentVersion?: string;

  /**
   * <p>The new service software version if one is available.</p>
   */
  NewVersion?: string;

  /**
   * <p>
   *       <code>True</code>
   *       if you're able to update your service software version. <code>False</code> if you can't update your
   *       service software version.
   *     </p>
   */
  UpdateAvailable?: boolean;

  /**
   * <p>
   *       <code>True</code>
   *       if you're able to cancel your service software version update. <code>False</code> if you can't cancel
   *       your service software update.
   *     </p>
   */
  Cancellable?: boolean;

  /**
   * <p>The status of your service software update. This field can take the following values: <code>
   *       ELIGIBLE</code>, <code>PENDING_UPDATE</code>, <code>IN_PROGRESS</code>, <code>COMPLETED</code>, and <code>
   *       NOT_ELIGIBLE</code>.
   *     </p>
   */
  UpdateStatus?: DeploymentStatus | string;

  /**
   * <p>The description of the <code>UpdateStatus</code>.
   *     </p>
   */
  Description?: string;

  /**
   * <p>The timestamp, in Epoch time, until which you can manually request a service software update. After this date, we
   *       automatically update your service software.
   *     </p>
   */
  AutomatedUpdateDate?: Date;

  /**
   * <p>
   *       <code>True</code>
   *       if a service software is never automatically updated. <code>False</code> if a service software is automatically
   *       updated after <code>AutomatedUpdateDate</code>.
   *     </p>
   */
  OptionalDeployment?: boolean;
}

/**
 * <p>The result of a <code>CancelServiceSoftwareUpdate</code> operation. Contains the status of the
 *       update.
 *     </p>
 */
export interface CancelServiceSoftwareUpdateResponse {
  /**
   * <p>The current status of the OpenSearch service software update.</p>
   */
  ServiceSoftwareOptions?: ServiceSoftwareOptions;
}

export enum AutoTuneDesiredState {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum TimeUnit {
  HOURS = "HOURS",
}

/**
 * <p>The maintenance schedule duration: duration value and duration unit. See <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/auto-tune.html" target="_blank">
 *       Auto-Tune for Amazon OpenSearch Service
 *     </a> for more information.
 *     </p>
 */
export interface Duration {
  /**
   * <p>Integer to specify the value of a maintenance schedule duration. See <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/auto-tune.html" target="_blank">
   *       Auto-Tune for Amazon OpenSearch Service
   *     </a> for more information.
   *     </p>
   */
  Value?: number;

  /**
   * <p>The unit of a maintenance schedule duration. Valid value is HOURS. See <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/auto-tune.html" target="_blank">
   *       Auto-Tune for Amazon OpenSearch Service
   *     </a> for more information.
   *     </p>
   */
  Unit?: TimeUnit | string;
}

/**
 * <p>Specifies the Auto-Tune maintenance schedule. See <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/auto-tune.html" target="_blank">
 *       Auto-Tune for Amazon OpenSearch Service
 *     </a> for more information.
 *     </p>
 */
export interface AutoTuneMaintenanceSchedule {
  /**
   * <p>The timestamp at which the Auto-Tune maintenance schedule starts.</p>
   */
  StartAt?: Date;

  /**
   * <p>Specifies maintenance schedule duration: duration value and duration unit. See <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/auto-tune.html" target="_blank">
   *       Auto-Tune for Amazon OpenSearch Service
   *     </a> for more information.
   *     </p>
   */
  Duration?: Duration;

  /**
   * <p>A cron expression for a recurring maintenance schedule. See <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/auto-tune.html" target="_blank">
   *       Auto-Tune for Amazon OpenSearch Service
   *     </a> for more information.
   *     </p>
   */
  CronExpressionForRecurrence?: string;
}

/**
 * <p>The Auto-Tune options: the Auto-Tune desired state for the domain and list of maintenance schedules.
 *     </p>
 */
export interface AutoTuneOptionsInput {
  /**
   * <p>The Auto-Tune desired state. Valid values are ENABLED and DISABLED.</p>
   */
  DesiredState?: AutoTuneDesiredState | string;

  /**
   * <p>A list of maintenance schedules. See <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/auto-tune.html" target="_blank">
   *       Auto-Tune for Amazon OpenSearch Service
   *     </a> for more information.
   *     </p>
   */
  MaintenanceSchedules?: AutoTuneMaintenanceSchedule[];
}

/**
 * <p>Specifies the configuration for cold storage options such as enabled</p>
 */
export interface ColdStorageOptions {
  /**
   * <p>Enable cold storage option. Accepted values true or false</p>
   */
  Enabled: boolean | undefined;
}

export enum OpenSearchPartitionInstanceType {
  c4_2xlarge_search = "c4.2xlarge.search",
  c4_4xlarge_search = "c4.4xlarge.search",
  c4_8xlarge_search = "c4.8xlarge.search",
  c4_large_search = "c4.large.search",
  c4_xlarge_search = "c4.xlarge.search",
  c5_18xlarge_search = "c5.18xlarge.search",
  c5_2xlarge_search = "c5.2xlarge.search",
  c5_4xlarge_search = "c5.4xlarge.search",
  c5_9xlarge_search = "c5.9xlarge.search",
  c5_large_search = "c5.large.search",
  c5_xlarge_search = "c5.xlarge.search",
  c6g_12xlarge_search = "c6g.12xlarge.search",
  c6g_2xlarge_search = "c6g.2xlarge.search",
  c6g_4xlarge_search = "c6g.4xlarge.search",
  c6g_8xlarge_search = "c6g.8xlarge.search",
  c6g_large_search = "c6g.large.search",
  c6g_xlarge_search = "c6g.xlarge.search",
  d2_2xlarge_search = "d2.2xlarge.search",
  d2_4xlarge_search = "d2.4xlarge.search",
  d2_8xlarge_search = "d2.8xlarge.search",
  d2_xlarge_search = "d2.xlarge.search",
  i2_2xlarge_search = "i2.2xlarge.search",
  i2_xlarge_search = "i2.xlarge.search",
  i3_16xlarge_search = "i3.16xlarge.search",
  i3_2xlarge_search = "i3.2xlarge.search",
  i3_4xlarge_search = "i3.4xlarge.search",
  i3_8xlarge_search = "i3.8xlarge.search",
  i3_large_search = "i3.large.search",
  i3_xlarge_search = "i3.xlarge.search",
  m3_2xlarge_search = "m3.2xlarge.search",
  m3_large_search = "m3.large.search",
  m3_medium_search = "m3.medium.search",
  m3_xlarge_search = "m3.xlarge.search",
  m4_10xlarge_search = "m4.10xlarge.search",
  m4_2xlarge_search = "m4.2xlarge.search",
  m4_4xlarge_search = "m4.4xlarge.search",
  m4_large_search = "m4.large.search",
  m4_xlarge_search = "m4.xlarge.search",
  m5_12xlarge_search = "m5.12xlarge.search",
  m5_24xlarge_search = "m5.24xlarge.search",
  m5_2xlarge_search = "m5.2xlarge.search",
  m5_4xlarge_search = "m5.4xlarge.search",
  m5_large_search = "m5.large.search",
  m5_xlarge_search = "m5.xlarge.search",
  m6g_12xlarge_search = "m6g.12xlarge.search",
  m6g_2xlarge_search = "m6g.2xlarge.search",
  m6g_4xlarge_search = "m6g.4xlarge.search",
  m6g_8xlarge_search = "m6g.8xlarge.search",
  m6g_large_search = "m6g.large.search",
  m6g_xlarge_search = "m6g.xlarge.search",
  r3_2xlarge_search = "r3.2xlarge.search",
  r3_4xlarge_search = "r3.4xlarge.search",
  r3_8xlarge_search = "r3.8xlarge.search",
  r3_large_search = "r3.large.search",
  r3_xlarge_search = "r3.xlarge.search",
  r4_16xlarge_search = "r4.16xlarge.search",
  r4_2xlarge_search = "r4.2xlarge.search",
  r4_4xlarge_search = "r4.4xlarge.search",
  r4_8xlarge_search = "r4.8xlarge.search",
  r4_large_search = "r4.large.search",
  r4_xlarge_search = "r4.xlarge.search",
  r5_12xlarge_search = "r5.12xlarge.search",
  r5_24xlarge_search = "r5.24xlarge.search",
  r5_2xlarge_search = "r5.2xlarge.search",
  r5_4xlarge_search = "r5.4xlarge.search",
  r5_large_search = "r5.large.search",
  r5_xlarge_search = "r5.xlarge.search",
  r6g_12xlarge_search = "r6g.12xlarge.search",
  r6g_2xlarge_search = "r6g.2xlarge.search",
  r6g_4xlarge_search = "r6g.4xlarge.search",
  r6g_8xlarge_search = "r6g.8xlarge.search",
  r6g_large_search = "r6g.large.search",
  r6g_xlarge_search = "r6g.xlarge.search",
  r6gd_12xlarge_search = "r6gd.12xlarge.search",
  r6gd_16xlarge_search = "r6gd.16xlarge.search",
  r6gd_2xlarge_search = "r6gd.2xlarge.search",
  r6gd_4xlarge_search = "r6gd.4xlarge.search",
  r6gd_8xlarge_search = "r6gd.8xlarge.search",
  r6gd_large_search = "r6gd.large.search",
  r6gd_xlarge_search = "r6gd.xlarge.search",
  t2_medium_search = "t2.medium.search",
  t2_micro_search = "t2.micro.search",
  t2_small_search = "t2.small.search",
  t3_2xlarge_search = "t3.2xlarge.search",
  t3_large_search = "t3.large.search",
  t3_medium_search = "t3.medium.search",
  t3_micro_search = "t3.micro.search",
  t3_nano_search = "t3.nano.search",
  t3_small_search = "t3.small.search",
  t3_xlarge_search = "t3.xlarge.search",
  t4g_medium_search = "t4g.medium.search",
  t4g_small_search = "t4g.small.search",
  ultrawarm1_large_search = "ultrawarm1.large.search",
  ultrawarm1_medium_search = "ultrawarm1.medium.search",
  ultrawarm1_xlarge_search = "ultrawarm1.xlarge.search",
}

export enum OpenSearchWarmPartitionInstanceType {
  ultrawarm1_large_search = "ultrawarm1.large.search",
  ultrawarm1_medium_search = "ultrawarm1.medium.search",
  ultrawarm1_xlarge_search = "ultrawarm1.xlarge.search",
}

/**
 * <p>The zone awareness configuration for the domain cluster, such as the number of availability zones.</p>
 */
export interface ZoneAwarenessConfig {
  /**
   * <p>An integer value to indicate the number of availability zones for a domain when zone awareness is enabled. This
   *       should be equal to number of subnets if VPC endpoints is enabled.
   *     </p>
   */
  AvailabilityZoneCount?: number;
}

/**
 * <p>The configuration for the domain cluster, such as the type and number of instances.</p>
 */
export interface ClusterConfig {
  /**
   * <p>The instance type for an OpenSearch cluster. UltraWarm instance types are not supported for data instances.
   *     </p>
   */
  InstanceType?: OpenSearchPartitionInstanceType | string;

  /**
   * <p>The number of instances in the specified domain cluster.</p>
   */
  InstanceCount?: number;

  /**
   * <p>A boolean value to indicate whether a dedicated master node is enabled. See <a href="http://docs.aws.amazon.com/opensearch-service/latest/developerguide/managedomains.html#managedomains-dedicatedmasternodes" target="_blank">Dedicated master nodes in Amazon OpenSearch Service
   *     </a> for more information.
   *     </p>
   */
  DedicatedMasterEnabled?: boolean;

  /**
   * <p>A boolean value to indicate whether zone awareness is enabled. See <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/managedomains-multiaz.html" target="_blank">Configuring a multi-AZ domain in Amazon OpenSearch Service
   *     </a> for more information.
   *     </p>
   */
  ZoneAwarenessEnabled?: boolean;

  /**
   * <p>The zone awareness configuration for a domain when zone awareness is enabled.</p>
   */
  ZoneAwarenessConfig?: ZoneAwarenessConfig;

  /**
   * <p>The instance type for a dedicated master node.</p>
   */
  DedicatedMasterType?: OpenSearchPartitionInstanceType | string;

  /**
   * <p>Total number of dedicated master nodes, active and on standby, for the cluster.</p>
   */
  DedicatedMasterCount?: number;

  /**
   * <p>True to enable UltraWarm storage.</p>
   */
  WarmEnabled?: boolean;

  /**
   * <p>The instance type for the OpenSearch cluster's warm nodes.</p>
   */
  WarmType?: OpenSearchWarmPartitionInstanceType | string;

  /**
   * <p>The number of UltraWarm nodes in the cluster.</p>
   */
  WarmCount?: number;

  /**
   * <p>Specifies the <code>ColdStorageOptions</code> config for a Domain</p>
   */
  ColdStorageOptions?: ColdStorageOptions;
}

/**
 * <p>Options to specify the Cognito user and identity pools for OpenSearch Dashboards authentication. For more information, see <a href="http://docs.aws.amazon.com/opensearch-service/latest/developerguide/cognito-auth.html" target="_blank">Configuring Amazon Cognito authentication for OpenSearch Dashboards</a>.
 *     </p>
 */
export interface CognitoOptions {
  /**
   * <p>The option to enable Cognito for OpenSearch Dashboards authentication.</p>
   */
  Enabled?: boolean;

  /**
   * <p>The Cognito user pool ID for OpenSearch Dashboards authentication.</p>
   */
  UserPoolId?: string;

  /**
   * <p>The Cognito identity pool ID for OpenSearch Dashboards authentication.</p>
   */
  IdentityPoolId?: string;

  /**
   * <p>The role ARN that provides OpenSearch permissions for accessing Cognito resources.</p>
   */
  RoleArn?: string;
}

export enum TLSSecurityPolicy {
  POLICY_MIN_TLS_1_0_2019_07 = "Policy-Min-TLS-1-0-2019-07",
  POLICY_MIN_TLS_1_2_2019_07 = "Policy-Min-TLS-1-2-2019-07",
}

/**
 * <p>Options to configure the endpoint for the domain.</p>
 */
export interface DomainEndpointOptions {
  /**
   * <p>Whether only HTTPS endpoint should be enabled for the domain.</p>
   */
  EnforceHTTPS?: boolean;

  /**
   * <p>Specify the TLS security policy to apply to the HTTPS endpoint of the domain.
   *       <br></br>
   *       Can be one of the following values:
   *       <ul>
   *         <li>
   *           <b>Policy-Min-TLS-1-0-2019-07:</b>
   *           TLS security policy which supports TLSv1.0 and higher.
   *         </li>
   *         <li>
   *           <b>Policy-Min-TLS-1-2-2019-07:</b>
   *           TLS security policy which supports only TLSv1.2
   *         </li>
   *       </ul>
   *     </p>
   */
  TLSSecurityPolicy?: TLSSecurityPolicy | string;

  /**
   * <p>Whether to enable a custom endpoint for the domain.</p>
   */
  CustomEndpointEnabled?: boolean;

  /**
   * <p>The fully qualified domain for your custom endpoint.</p>
   */
  CustomEndpoint?: string;

  /**
   * <p>The ACM certificate ARN for your custom endpoint.</p>
   */
  CustomEndpointCertificateArn?: string;
}

export enum VolumeType {
  gp2 = "gp2",
  io1 = "io1",
  standard = "standard",
}

/**
 * <p>Options to enable, disable, and specify the properties of EBS storage volumes.</p>
 */
export interface EBSOptions {
  /**
   * <p>Whether EBS-based storage is enabled.</p>
   */
  EBSEnabled?: boolean;

  /**
   * <p>The volume type for EBS-based storage.</p>
   */
  VolumeType?: VolumeType | string;

  /**
   * <p>Integer to specify the size of an EBS volume.</p>
   */
  VolumeSize?: number;

  /**
   * <p>The IOPD for a Provisioned IOPS EBS volume (SSD).</p>
   */
  Iops?: number;
}

/**
 * <p>Specifies encryption at rest options.</p>
 */
export interface EncryptionAtRestOptions {
  /**
   * <p>The option to enable encryption at rest.</p>
   */
  Enabled?: boolean;

  /**
   * <p>The KMS key ID for encryption at rest options.</p>
   */
  KmsKeyId?: string;
}

export enum LogType {
  AUDIT_LOGS = "AUDIT_LOGS",
  ES_APPLICATION_LOGS = "ES_APPLICATION_LOGS",
  INDEX_SLOW_LOGS = "INDEX_SLOW_LOGS",
  SEARCH_SLOW_LOGS = "SEARCH_SLOW_LOGS",
}

/**
 * <p>Log Publishing option that is set for a given domain.
 *       <br></br>Attributes and their details:
 *       <ul>
 *         <li>CloudWatchLogsLogGroupArn: ARN of the Cloudwatch log group to publish logs to.</li>
 *         <li>Enabled: Whether the log publishing for a given log type is enabled or not.</li>
 *       </ul>
 *     </p>
 */
export interface LogPublishingOption {
  /**
   * <p>ARN of the Cloudwatch log group to publish logs to.</p>
   */
  CloudWatchLogsLogGroupArn?: string;

  /**
   * <p>Whether the given log publishing option is enabled or not.</p>
   */
  Enabled?: boolean;
}

/**
 * <p>The node-to-node encryption options.</p>
 */
export interface NodeToNodeEncryptionOptions {
  /**
   * <p>True to enable node-to-node encryption.</p>
   */
  Enabled?: boolean;
}

/**
 * <p>The time, in UTC format, when the service takes a daily automated snapshot of the specified
 *       domain. Default is <code>0</code> hours.
 *     </p>
 */
export interface SnapshotOptions {
  /**
   * <p>The time, in UTC format, when the service takes a daily automated snapshot of the specified
   *       domain. Default is <code>0</code> hours.
   *     </p>
   */
  AutomatedSnapshotStartHour?: number;
}

/**
 * <p>Options to specify the subnets and security groups for the VPC endpoint. For more information, see <a href="http://docs.aws.amazon.com/opensearch-service/latest/developerguide/vpc.html" target="_blank">
 *       Launching your Amazon OpenSearch Service domains using a VPC</a>.
 *     </p>
 */
export interface VPCOptions {
  /**
   * <p>The subnets for the VPC endpoint.</p>
   */
  SubnetIds?: string[];

  /**
   * <p>The security groups for the VPC endpoint.</p>
   */
  SecurityGroupIds?: string[];
}

export interface CreateDomainRequest {
  /**
   * <p>The name of the Amazon OpenSearch Service domain you're creating. Domain names are unique across the domains owned by
   *       an account within an AWS region. Domain names must start with a lowercase letter and can contain the following
   *       characters: a-z (lowercase), 0-9, and - (hyphen).
   *     </p>
   */
  DomainName: string | undefined;

  /**
   * <p>String of format Elasticsearch_X.Y or OpenSearch_X.Y to specify the engine version for the Amazon OpenSearch Service domain.
   *       For example, "OpenSearch_1.0" or "Elasticsearch_7.9". For more information,
   *       see <a href="http://docs.aws.amazon.com/opensearch-service/latest/developerguide/createupdatedomains.html#createdomains" target="_blank">Creating and managing Amazon OpenSearch Service domains
   *       </a>.
   *     </p>
   */
  EngineVersion?: string;

  /**
   * <p>Configuration options for a domain. Specifies the instance type and number of instances in the
   *       domain.
   *     </p>
   */
  ClusterConfig?: ClusterConfig;

  /**
   * <p>Options to enable, disable, and specify the type and size of EBS storage volumes.</p>
   */
  EBSOptions?: EBSOptions;

  /**
   * <p>IAM access policy as a JSON-formatted string.</p>
   */
  AccessPolicies?: string;

  /**
   * <p>Option to set time, in UTC format, of the daily automated snapshot. Default value is 0 hours.</p>
   */
  SnapshotOptions?: SnapshotOptions;

  /**
   * <p>Options to specify the subnets and security groups for a VPC endpoint. For more information, see <a href="http://docs.aws.amazon.com/opensearch-service/latest/developerguide/vpc.html" target="_blank">Launching your Amazon OpenSearch Service domains using a VPC
   *     </a>.
   *     </p>
   */
  VPCOptions?: VPCOptions;

  /**
   * <p>Options to specify the Cognito user and identity pools for OpenSearch Dashboards authentication. For more information, see <a href="http://docs.aws.amazon.com/opensearch-service/latest/developerguide/cognito-auth.html" target="_blank">Configuring Amazon Cognito authentication for OpenSearch Dashboards</a>.
   *     </p>
   */
  CognitoOptions?: CognitoOptions;

  /**
   * <p>Options for encryption of data at rest.</p>
   */
  EncryptionAtRestOptions?: EncryptionAtRestOptions;

  /**
   * <p>Node-to-node encryption options.</p>
   */
  NodeToNodeEncryptionOptions?: NodeToNodeEncryptionOptions;

  /**
   * <p>Option to allow references to indices in an HTTP request body. Must be <code>false</code> when configuring access
   *       to individual sub-resources. By default, the value is <code>true</code>.
   *       See <a href="http://docs.aws.amazon.com/opensearch-service/latest/developerguide/createupdatedomains.html#createdomain-configure-advanced-options" target="_blank">Advanced cluster parameters
   *       </a> for more information.
   *     </p>
   */
  AdvancedOptions?: Record<string, string>;

  /**
   * <p>Map of <code>LogType</code> and <code>LogPublishingOption</code>, each containing options to publish a given type
   *       of OpenSearch log.
   *     </p>
   */
  LogPublishingOptions?: Record<string, LogPublishingOption>;

  /**
   * <p>Options to specify configurations that will be applied to the domain endpoint.</p>
   */
  DomainEndpointOptions?: DomainEndpointOptions;

  /**
   * <p>Specifies advanced security options.</p>
   */
  AdvancedSecurityOptions?: AdvancedSecurityOptionsInput;

  /**
   * <p>A list of <code>Tag</code> added during domain creation.
   *     </p>
   */
  TagList?: Tag[];

  /**
   * <p>Specifies Auto-Tune options.</p>
   */
  AutoTuneOptions?: AutoTuneOptionsInput;
}

export enum AutoTuneState {
  DISABLED = "DISABLED",
  DISABLED_AND_ROLLBACK_COMPLETE = "DISABLED_AND_ROLLBACK_COMPLETE",
  DISABLED_AND_ROLLBACK_ERROR = "DISABLED_AND_ROLLBACK_ERROR",
  DISABLED_AND_ROLLBACK_IN_PROGRESS = "DISABLED_AND_ROLLBACK_IN_PROGRESS",
  DISABLED_AND_ROLLBACK_SCHEDULED = "DISABLED_AND_ROLLBACK_SCHEDULED",
  DISABLE_IN_PROGRESS = "DISABLE_IN_PROGRESS",
  ENABLED = "ENABLED",
  ENABLE_IN_PROGRESS = "ENABLE_IN_PROGRESS",
  ERROR = "ERROR",
}

/**
 * <p>The Auto-Tune options: the Auto-Tune desired state for the domain and list of maintenance schedules.
 *     </p>
 */
export interface AutoTuneOptionsOutput {
  /**
   * <p>The <code>AutoTuneState</code> for the domain.
   *     </p>
   */
  State?: AutoTuneState | string;

  /**
   * <p>The error message while enabling or disabling Auto-Tune.</p>
   */
  ErrorMessage?: string;
}

/**
 * <p>Specifies change details of the domain configuration change.</p>
 */
export interface ChangeProgressDetails {
  /**
   * <p>The unique change identifier associated with a specific domain configuration change.</p>
   */
  ChangeId?: string;

  /**
   * <p>Contains an optional message associated with the domain configuration change.</p>
   */
  Message?: string;
}

/**
 * <p>Options to specify the subnets and security groups for the VPC endpoint. For more information, see <a href="http://docs.aws.amazon.com/opensearch-service/latest/developerguide/vpc.html" target="_blank">
 *       Launching your Amazon OpenSearch Service domains using a VPC</a>.
 *     </p>
 */
export interface VPCDerivedInfo {
  /**
   * <p>The VPC ID for the domain. Exists only if the domain was created with <code>VPCOptions</code>.</p>
   */
  VPCId?: string;

  /**
   * <p>The subnets for the VPC endpoint.</p>
   */
  SubnetIds?: string[];

  /**
   * <p>The Availability Zones for the domain. Exists only if the domain was created with <code>VPCOptions</code>.</p>
   */
  AvailabilityZones?: string[];

  /**
   * <p>The security groups for the VPC endpoint.</p>
   */
  SecurityGroupIds?: string[];
}

/**
 * <p>The current status of a domain.</p>
 */
export interface DomainStatus {
  /**
   * <p>The unique identifier for the specified domain.</p>
   */
  DomainId: string | undefined;

  /**
   * <p>The name of a domain. Domain names are unique across the domains owned by an account within an AWS
   *       region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9,
   *       and - (hyphen).
   *     </p>
   */
  DomainName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of a domain. See <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html" target="_blank">IAM identifiers
   *     </a> in the <i>AWS Identity and Access Management User Guide</i> for more information.
   *     </p>
   */
  ARN: string | undefined;

  /**
   * <p>The domain creation status. <code>True</code> if the creation of a domain is complete. <code>
   *       False
   *     </code> if domain creation is still in progress.
   *     </p>
   */
  Created?: boolean;

  /**
   * <p>The domain deletion status. <code>True</code> if a delete request has been received for the domain but resource
   *       cleanup is still in progress. <code>False</code> if the domain has not been deleted. Once domain deletion is
   *       complete, the status of the domain is no longer returned.
   *     </p>
   */
  Deleted?: boolean;

  /**
   * <p>The domain endpoint that you use to submit index and search requests.</p>
   */
  Endpoint?: string;

  /**
   * <p>Map containing the domain endpoints used to submit index and search requests. Example <code>key,
   *       value</code>: <code>'vpc','vpc-endpoint-h2dsd34efgyghrtguk5gt6j2foh4.us-east-1.es.amazonaws.com'</code>.
   *     </p>
   */
  Endpoints?: Record<string, string>;

  /**
   * <p>The status of the domain configuration. <code>True</code> if Amazon OpenSearch Service is
   *       processing configuration changes. <code>False</code> if the configuration is active.
   *     </p>
   */
  Processing?: boolean;

  /**
   * <p>The status of a domain version upgrade. <code>True</code> if Amazon OpenSearch Service is
   *       undergoing a version upgrade. <code>False</code> if the configuration is active.
   *     </p>
   */
  UpgradeProcessing?: boolean;

  EngineVersion?: string;
  /**
   * <p>The type and number of instances in the domain.</p>
   */
  ClusterConfig: ClusterConfig | undefined;

  /**
   * <p>The <code>EBSOptions</code> for the specified domain.
   *     </p>
   */
  EBSOptions?: EBSOptions;

  /**
   * <p>IAM access policy as a JSON-formatted string.</p>
   */
  AccessPolicies?: string;

  /**
   * <p>The status of the
   *       <code>SnapshotOptions</code>.
   *     </p>
   */
  SnapshotOptions?: SnapshotOptions;

  /**
   * <p>The <code>VPCOptions</code> for the specified domain. For more information, see <a href="http://docs.aws.amazon.com/opensearch-service/latest/developerguide/vpc.html" target="_blank">
   *       Launching your Amazon OpenSearch Service domains using a VPC</a>.
   *     </p>
   */
  VPCOptions?: VPCDerivedInfo;

  /**
   * <p>The <code>CognitoOptions</code> for the specified domain. For more information, see <a href="http://docs.aws.amazon.com/opensearch-service/latest/developerguide/cognito-auth.html" target="_blank">Configuring Amazon Cognito authentication for OpenSearch Dashboards</a>.
   *     </p>
   */
  CognitoOptions?: CognitoOptions;

  /**
   * <p>The status of the <code>EncryptionAtRestOptions</code>.
   *     </p>
   */
  EncryptionAtRestOptions?: EncryptionAtRestOptions;

  /**
   * <p>The status of the <code>NodeToNodeEncryptionOptions</code>.
   *     </p>
   */
  NodeToNodeEncryptionOptions?: NodeToNodeEncryptionOptions;

  /**
   * <p>The status of the
   *       <code>AdvancedOptions</code>.
   *     </p>
   */
  AdvancedOptions?: Record<string, string>;

  /**
   * <p>Log publishing options for the given domain.</p>
   */
  LogPublishingOptions?: Record<string, LogPublishingOption>;

  /**
   * <p>The current status of the domain's service software.</p>
   */
  ServiceSoftwareOptions?: ServiceSoftwareOptions;

  /**
   * <p>The current status of the domain's endpoint options.</p>
   */
  DomainEndpointOptions?: DomainEndpointOptions;

  /**
   * <p>The current status of the domain's advanced security options.</p>
   */
  AdvancedSecurityOptions?: AdvancedSecurityOptions;

  /**
   * <p>The current status of the domain's Auto-Tune options.</p>
   */
  AutoTuneOptions?: AutoTuneOptionsOutput;

  /**
   * <p>Specifies change details of the domain configuration change.</p>
   */
  ChangeProgressDetails?: ChangeProgressDetails;
}

/**
 * <p>The result of a <code>CreateDomain</code> operation. Contains the status of the newly created
 *       Amazon OpenSearch Service domain.
 *     </p>
 */
export interface CreateDomainResponse {
  /**
   * <p>The status of the newly created domain.</p>
   */
  DomainStatus?: DomainStatus;
}

/**
 * <p>An exception for trying to create or access sub-resource that is either invalid or not supported. Gives http status code of 409.</p>
 */
export class InvalidTypeException extends __BaseException {
  readonly name: "InvalidTypeException" = "InvalidTypeException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidTypeException, __BaseException>) {
    super({
      name: "InvalidTypeException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidTypeException.prototype);
  }
}

/**
 * <p>An exception for creating a resource that already exists. Gives http status code of 400.</p>
 */
export class ResourceAlreadyExistsException extends __BaseException {
  readonly name: "ResourceAlreadyExistsException" = "ResourceAlreadyExistsException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceAlreadyExistsException, __BaseException>) {
    super({
      name: "ResourceAlreadyExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceAlreadyExistsException.prototype);
  }
}

/**
 * <p>Container for the parameters to the
 *       <code>
 *         <a>CreateOutboundConnection</a>
 *       </code>
 *       operation.
 *     </p>
 */
export interface CreateOutboundConnectionRequest {
  /**
   * <p>The
   *       <code>
   *         <a>AWSDomainInformation</a>
   *       </code>
   *       for the local OpenSearch domain.
   *     </p>
   */
  LocalDomainInfo: DomainInformationContainer | undefined;

  /**
   * <p>The
   *       <code>
   *         <a>AWSDomainInformation</a>
   *       </code>
   *       for the remote OpenSearch domain.
   *     </p>
   */
  RemoteDomainInfo: DomainInformationContainer | undefined;

  /**
   * <p>The connection alias used used by the customer for this cross-cluster connection.</p>
   */
  ConnectionAlias: string | undefined;
}

export enum OutboundConnectionStatusCode {
  ACTIVE = "ACTIVE",
  APPROVED = "APPROVED",
  DELETED = "DELETED",
  DELETING = "DELETING",
  PENDING_ACCEPTANCE = "PENDING_ACCEPTANCE",
  PROVISIONING = "PROVISIONING",
  REJECTED = "REJECTED",
  REJECTING = "REJECTING",
  VALIDATING = "VALIDATING",
  VALIDATION_FAILED = "VALIDATION_FAILED",
}

/**
 * <p>The connection status of an outbound cross-cluster connection.</p>
 */
export interface OutboundConnectionStatus {
  /**
   * <p>The state code for the outbound connection. Can be one of the following:</p>
   *     <ul>
   *       <li>VALIDATING: The outbound connection request is being validated.</li>
   *       <li>VALIDATION_FAILED: Validation failed for the connection request.</li>
   *       <li>PENDING_ACCEPTANCE: Outbound connection request is validated and is not yet accepted by the remote domain
   *         owner.
   *       </li>
   *       <li>APPROVED: Outbound connection has been approved by the remote domain owner for getting provisioned.</li>
   *       <li>PROVISIONING: Outbound connection request is in process.</li>
   *       <li>ACTIVE: Outbound connection is active and ready to use.</li>
   *       <li>REJECTING: Outbound connection rejection by remote domain owner is in progress.</li>
   *       <li>REJECTED: Outbound connection request is rejected by remote domain owner.</li>
   *       <li>DELETING: Outbound connection deletion is in progress.</li>
   *       <li>DELETED: Outbound connection is deleted and can no longer be used.</li>
   *     </ul>
   */
  StatusCode?: OutboundConnectionStatusCode | string;

  /**
   * <p>Verbose information for the outbound connection status.</p>
   */
  Message?: string;
}

/**
 * <p>The result of a
 *       <code>
 *         <a>CreateOutboundConnection</a>
 *       </code>
 *       request. Contains the details about the newly created cross-cluster connection.
 *     </p>
 */
export interface CreateOutboundConnectionResponse {
  /**
   * <p>The
   *       <code>
   *         <a>AWSDomainInformation</a>
   *       </code>
   *       for the local OpenSearch domain.
   *     </p>
   */
  LocalDomainInfo?: DomainInformationContainer;

  /**
   * <p>The
   *       <code>
   *         <a>AWSDomainInformation</a>
   *       </code>
   *       for the remote OpenSearch domain.
   *     </p>
   */
  RemoteDomainInfo?: DomainInformationContainer;

  /**
   * <p>The connection alias provided during the create connection request.</p>
   */
  ConnectionAlias?: string;

  /**
   * <p>The
   *       <code>
   *         <a>OutboundConnectionStatus</a>
   *       </code>
   *       for the newly created connection.
   *     </p>
   */
  ConnectionStatus?: OutboundConnectionStatus;

  /**
   * <p>The unique ID for the created outbound connection, which is used for subsequent operations on the connection.</p>
   */
  ConnectionId?: string;
}

/**
 * <p>The Amazon S3 location for importing the package specified as <code>S3BucketName</code> and
 *       <code>S3Key</code>
 *     </p>
 */
export interface PackageSource {
  /**
   * <p>The name of the Amazon S3 bucket containing the package.</p>
   */
  S3BucketName?: string;

  /**
   * <p>Key (file name) of the package.</p>
   */
  S3Key?: string;
}

/**
 * <p>
 *       Container for request parameters to the
 *       <code>
 *         <a>CreatePackage</a>
 *       </code>
 *       operation.
 *     </p>
 */
export interface CreatePackageRequest {
  /**
   * <p>Unique identifier for the package.</p>
   */
  PackageName: string | undefined;

  /**
   * <p>Type of package. Currently supports only TXT-DICTIONARY.</p>
   */
  PackageType: PackageType | string | undefined;

  /**
   * <p>Description of the package.</p>
   */
  PackageDescription?: string;

  /**
   * <p>The Amazon S3 location from which to import the package.
   *     </p>
   */
  PackageSource: PackageSource | undefined;
}

export enum PackageStatus {
  AVAILABLE = "AVAILABLE",
  COPYING = "COPYING",
  COPY_FAILED = "COPY_FAILED",
  DELETED = "DELETED",
  DELETE_FAILED = "DELETE_FAILED",
  DELETING = "DELETING",
  VALIDATING = "VALIDATING",
  VALIDATION_FAILED = "VALIDATION_FAILED",
}

/**
 * <p>Basic information about a package.</p>
 */
export interface PackageDetails {
  /**
   * <p>Internal ID of the package.</p>
   */
  PackageID?: string;

  /**
   * <p>User-specified name of the package.</p>
   */
  PackageName?: string;

  /**
   * <p>Currently supports only TXT-DICTIONARY.</p>
   */
  PackageType?: PackageType | string;

  /**
   * <p>User-specified description of the package.</p>
   */
  PackageDescription?: string;

  /**
   * <p>Current state of the package. Values are COPYING, COPY_FAILED, AVAILABLE, DELETING, and DELETE_FAILED.</p>
   */
  PackageStatus?: PackageStatus | string;

  /**
   * <p>The timestamp of when the package was created.</p>
   */
  CreatedAt?: Date;

  LastUpdatedAt?: Date;
  AvailablePackageVersion?: string;
  /**
   * <p>Additional information if the package is in an error state. Null otherwise.</p>
   */
  ErrorDetails?: ErrorDetails;
}

/**
 * <p>
 *       Container for the response returned by the
 *       <code>
 *         <a>CreatePackage</a>
 *       </code>
 *       operation.
 *     </p>
 */
export interface CreatePackageResponse {
  /**
   * <p>Information about the package.
   *     </p>
   */
  PackageDetails?: PackageDetails;
}

/**
 * <p>Container for the parameters to the
 *       <code>
 *         <a>DeleteDomain</a>
 *       </code>
 *       operation. Specifies the name of the domain you want to delete.
 *     </p>
 */
export interface DeleteDomainRequest {
  /**
   * <p>The name of the domain you want to permanently delete.</p>
   */
  DomainName: string | undefined;
}

/**
 * <p>The result of a <code>DeleteDomain</code> request. Contains the status of the pending deletion, or
 *       a "domain not found" error if the domain and all of its resources have been deleted.
 *     </p>
 */
export interface DeleteDomainResponse {
  /**
   * <p>The status of the domain being deleted.</p>
   */
  DomainStatus?: DomainStatus;
}

/**
 * <p>Container for the parameters to the
 *       <code>
 *         <a>DeleteInboundConnection</a>
 *       </code>
 *       operation.
 *     </p>
 */
export interface DeleteInboundConnectionRequest {
  /**
   * <p>The ID of the inbound connection to permanently delete.</p>
   */
  ConnectionId: string | undefined;
}

/**
 * <p>The result of a
 *       <code>
 *         <a>DeleteInboundConnection</a>
 *       </code>
 *       operation. Contains details about the deleted inbound connection.
 *     </p>
 */
export interface DeleteInboundConnectionResponse {
  /**
   * <p>The
   *       <code>
   *         <a>InboundConnection</a>
   *       </code>
   *       of the deleted inbound connection.
   *     </p>
   */
  Connection?: InboundConnection;
}

/**
 * <p>Container for the parameters to the
 *       <code>
 *         <a>DeleteOutboundConnection</a>
 *       </code>
 *       operation.
 *     </p>
 */
export interface DeleteOutboundConnectionRequest {
  /**
   * <p>The ID of the outbound connection you want to permanently delete.</p>
   */
  ConnectionId: string | undefined;
}

/**
 * <p>Specifies details about an outbound connection.</p>
 */
export interface OutboundConnection {
  /**
   * <p>The
   *       <code>
   *         <a>DomainInformation</a>
   *       </code>
   *       for the local OpenSearch domain.
   *     </p>
   */
  LocalDomainInfo?: DomainInformationContainer;

  /**
   * <p>The
   *       <code>
   *         <a>DomainInformation</a>
   *       </code>
   *       for the remote OpenSearch domain.
   *     </p>
   */
  RemoteDomainInfo?: DomainInformationContainer;

  /**
   * <p>The connection ID for the outbound cross-cluster connection.</p>
   */
  ConnectionId?: string;

  /**
   * <p>The connection alias for the outbound cross-cluster connection.</p>
   */
  ConnectionAlias?: string;

  /**
   * <p>The
   *       <code>
   *         <a>OutboundConnectionStatus</a>
   *       </code>
   *       for the outbound connection.
   *     </p>
   */
  ConnectionStatus?: OutboundConnectionStatus;
}

/**
 * <p>The result of a
 *       <code>
 *         <a>DeleteOutboundConnection</a>
 *       </code>
 *       operation. Contains details about the deleted outbound connection.
 *     </p>
 */
export interface DeleteOutboundConnectionResponse {
  /**
   * <p>The
   *       <code>
   *         <a>OutboundConnection</a>
   *       </code>
   *       of the deleted outbound connection.
   *     </p>
   */
  Connection?: OutboundConnection;
}

/**
 * <p>
 *       Container for the request parameters to the
 *       <code>
 *         <a>DeletePackage</a>
 *       </code>
 *       operation.
 *     </p>
 */
export interface DeletePackageRequest {
  /**
   * <p>The internal ID of the package you want to delete. Use <code>DescribePackages</code> to find this value.
   *     </p>
   */
  PackageID: string | undefined;
}

/**
 * <p>
 *       Container for the response parameters to the
 *       <code>
 *         <a>DeletePackage</a>
 *       </code>
 *       operation.
 *     </p>
 */
export interface DeletePackageResponse {
  /**
   * <p>
   *       <code>PackageDetails</code>
   *     </p>
   */
  PackageDetails?: PackageDetails;
}

/**
 * <p>Container for the parameters to the
 *       <code>
 *         <a>DescribeDomain</a>
 *       </code>
 *       operation.
 *     </p>
 */
export interface DescribeDomainRequest {
  /**
   * <p>The name of the domain for which you want information.</p>
   */
  DomainName: string | undefined;
}

/**
 * <p>The result of a <code>DescribeDomain</code> request. Contains the status of the domain specified in
 *       the request.
 *     </p>
 */
export interface DescribeDomainResponse {
  /**
   * <p>The current status of the domain.</p>
   */
  DomainStatus: DomainStatus | undefined;
}

/**
 * <p>Container for the parameters to the <code>DescribeDomainAutoTunes</code> operation.
 *     </p>
 */
export interface DescribeDomainAutoTunesRequest {
  /**
   * <p>The domain name for which you want Auto-Tune action details.</p>
   */
  DomainName: string | undefined;

  /**
   * <p>Set this value to limit the number of results returned. If not specified, defaults to 100.</p>
   */
  MaxResults?: number;

  /**
   * <p>NextToken is sent in case the earlier API call results contain the NextToken. Used for pagination.</p>
   */
  NextToken?: string;
}

export enum ScheduledAutoTuneActionType {
  JVM_HEAP_SIZE_TUNING = "JVM_HEAP_SIZE_TUNING",
  JVM_YOUNG_GEN_TUNING = "JVM_YOUNG_GEN_TUNING",
}

export enum ScheduledAutoTuneSeverityType {
  HIGH = "HIGH",
  LOW = "LOW",
  MEDIUM = "MEDIUM",
}

/**
 * <p>Specifies details about the scheduled Auto-Tune action. See <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/auto-tune.html" target="_blank">
 *       Auto-Tune for Amazon OpenSearch Service
 *     </a> for more information.
 *     </p>
 */
export interface ScheduledAutoTuneDetails {
  /**
   * <p>The timestamp of the Auto-Tune action scheduled for the domain.</p>
   */
  Date?: Date;

  /**
   * <p>The Auto-Tune action type. Valid values are JVM_HEAP_SIZE_TUNING and JVM_YOUNG_GEN_TUNING.</p>
   */
  ActionType?: ScheduledAutoTuneActionType | string;

  /**
   * <p>The Auto-Tune action description.</p>
   */
  Action?: string;

  /**
   * <p>The Auto-Tune action severity. Valid values are LOW, MEDIUM, and HIGH.</p>
   */
  Severity?: ScheduledAutoTuneSeverityType | string;
}

/**
 * <p>Specifies details about the Auto-Tune action. See <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/auto-tune.html" target="_blank">
 *       Auto-Tune for Amazon OpenSearch Service
 *     </a> for more information.
 *     </p>
 */
export interface AutoTuneDetails {
  /**
   * <p>Specifies details about the scheduled Auto-Tune action. See <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/auto-tune.html" target="_blank">
   *       Auto-Tune for Amazon OpenSearch Service
   *     </a> for more information.
   *     </p>
   */
  ScheduledAutoTuneDetails?: ScheduledAutoTuneDetails;
}

export enum AutoTuneType {
  SCHEDULED_ACTION = "SCHEDULED_ACTION",
}

/**
 * <p>Specifies the Auto-Tune type and Auto-Tune action details.</p>
 */
export interface AutoTune {
  /**
   * <p>Specifies the Auto-Tune type. Valid value is SCHEDULED_ACTION.</p>
   */
  AutoTuneType?: AutoTuneType | string;

  /**
   * <p>Specifies details about the Auto-Tune action. See <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/auto-tune.html" target="_blank">
   *       Auto-Tune for Amazon OpenSearch Service
   *     </a> for more information.
   *     </p>
   */
  AutoTuneDetails?: AutoTuneDetails;
}

/**
 * <p>The result of a <code>DescribeDomainAutoTunes</code> request. See <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/auto-tune.html" target="_blank">
 *       Auto-Tune for Amazon OpenSearch Service
 *     </a> for more information.
 *     </p>
 */
export interface DescribeDomainAutoTunesResponse {
  /**
   * <p>The list of setting adjustments that Auto-Tune has made to the domain. See <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/auto-tune.html" target="_blank">
   *       Auto-Tune for Amazon OpenSearch Service
   *     </a> for more information.
   *     </p>
   */
  AutoTunes?: AutoTune[];

  /**
   * <p>An identifier to allow retrieval of paginated results.</p>
   */
  NextToken?: string;
}

/**
 * <p>Container for the parameters to the <code>DescribeDomainChangeProgress</code> operation. Specifies the
 *       domain name and optional change specific identity for which you want progress information.
 *     </p>
 */
export interface DescribeDomainChangeProgressRequest {
  /**
   * <p>The domain you want to get the progress information about.</p>
   */
  DomainName: string | undefined;

  /**
   * <p>The specific change ID for which you want to get progress information. This is an optional parameter.
   *       If omitted, the service returns information about the most recent configuration change.
   *     </p>
   */
  ChangeId?: string;
}

/**
 * <p>A progress stage details of a specific domain configuration change.</p>
 */
export interface ChangeProgressStage {
  /**
   * <p>The name of the specific progress stage.</p>
   */
  Name?: string;

  /**
   * <p>The overall status of a specific progress stage.</p>
   */
  Status?: string;

  /**
   * <p>The description of the progress stage.</p>
   */
  Description?: string;

  /**
   * <p>The last updated timestamp of the progress stage.</p>
   */
  LastUpdated?: Date;
}

export enum OverallChangeStatus {
  COMPLETED = "COMPLETED",
  FAILED = "FAILED",
  PENDING = "PENDING",
  PROCESSING = "PROCESSING",
}

/**
 * <p>The progress details of a specific domain configuration change.</p>
 */
export interface ChangeProgressStatusDetails {
  /**
   * <p>The unique change identifier associated with a specific domain configuration change.</p>
   */
  ChangeId?: string;

  /**
   * <p>The time at which the configuration change is made on the domain.</p>
   */
  StartTime?: Date;

  /**
   * <p>The overall status of the domain configuration change. This field can take the following values: <code>PENDING</code>, <code>PROCESSING</code>, <code>COMPLETED</code> and <code>FAILED</code></p>
   */
  Status?: OverallChangeStatus | string;

  /**
   * <p>The list of properties involved in the domain configuration change that are still in pending.</p>
   */
  PendingProperties?: string[];

  /**
   * <p>The list of properties involved in the domain configuration change that are completed.</p>
   */
  CompletedProperties?: string[];

  /**
   * <p>The total number of stages required for the configuration change.</p>
   */
  TotalNumberOfStages?: number;

  /**
   * <p>The specific stages that the domain is going through to perform the configuration change.</p>
   */
  ChangeProgressStages?: ChangeProgressStage[];
}

/**
 * <p>The result of a <code>DescribeDomainChangeProgress</code> request. Contains the progress information of
 *       the requested domain change.
 *     </p>
 */
export interface DescribeDomainChangeProgressResponse {
  /**
   * <p>Progress information for the configuration change that is requested in the <code>DescribeDomainChangeProgress</code> request.
   *     </p>
   */
  ChangeProgressStatus?: ChangeProgressStatusDetails;
}

/**
 * <p>Container for the parameters to the <code>DescribeDomainConfig</code> operation. Specifies the
 *       domain name for which you want configuration information.
 *     </p>
 */
export interface DescribeDomainConfigRequest {
  /**
   * <p>The domain you want to get information about.</p>
   */
  DomainName: string | undefined;
}

export enum RollbackOnDisable {
  DEFAULT_ROLLBACK = "DEFAULT_ROLLBACK",
  NO_ROLLBACK = "NO_ROLLBACK",
}

/**
 * <p>The Auto-Tune options: the Auto-Tune desired state for the domain, rollback state when disabling
 *       Auto-Tune options and list of maintenance schedules.
 *     </p>
 */
export interface AutoTuneOptions {
  /**
   * <p>The Auto-Tune desired state. Valid values are ENABLED and DISABLED.</p>
   */
  DesiredState?: AutoTuneDesiredState | string;

  /**
   * <p>The rollback state while disabling Auto-Tune for the domain. Valid values are NO_ROLLBACK and DEFAULT_ROLLBACK.
   *     </p>
   */
  RollbackOnDisable?: RollbackOnDisable | string;

  /**
   * <p>A list of maintenance schedules. See <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/auto-tune.html" target="_blank">
   *       Auto-Tune for Amazon OpenSearch Service
   *     </a> for more information.
   *     </p>
   */
  MaintenanceSchedules?: AutoTuneMaintenanceSchedule[];
}

/**
 * <p>Provides the current Auto-Tune status for the domain.</p>
 */
export interface AutoTuneStatus {
  /**
   * <p>The timestamp of the Auto-Tune options creation date.</p>
   */
  CreationDate: Date | undefined;

  /**
   * <p>The timestamp of when the Auto-Tune options were last updated.</p>
   */
  UpdateDate: Date | undefined;

  /**
   * <p>The latest version of the Auto-Tune options.</p>
   */
  UpdateVersion?: number;

  /**
   * <p>The <code>AutoTuneState</code> for the domain.
   *     </p>
   */
  State: AutoTuneState | string | undefined;

  /**
   * <p>The error message while enabling or disabling Auto-Tune.</p>
   */
  ErrorMessage?: string;

  /**
   * <p>Indicates whether the domain is being deleted.</p>
   */
  PendingDeletion?: boolean;
}

/**
 * <p>The Auto-Tune status for the domain.</p>
 */
export interface AutoTuneOptionsStatus {
  /**
   * <p>Specifies Auto-Tune options for the domain.</p>
   */
  Options?: AutoTuneOptions;

  /**
   * <p>The status of the Auto-Tune options for the domain.</p>
   */
  Status?: AutoTuneStatus;
}

/**
 * <p>The configuration status for the specified domain.</p>
 */
export interface ClusterConfigStatus {
  /**
   * <p>The cluster configuration for the specified domain.</p>
   */
  Options: ClusterConfig | undefined;

  /**
   * <p>The cluster configuration status for the specified domain.</p>
   */
  Status: OptionStatus | undefined;
}

/**
 * <p>The status of the Cognito options for the specified domain.</p>
 */
export interface CognitoOptionsStatus {
  /**
   * <p>Cognito options for the specified domain.</p>
   */
  Options: CognitoOptions | undefined;

  /**
   * <p>The status of the Cognito options for the specified domain.</p>
   */
  Status: OptionStatus | undefined;
}

/**
 * <p>The configured endpoint options for the domain and their current status.</p>
 */
export interface DomainEndpointOptionsStatus {
  /**
   * <p>Options to configure the endpoint for the domain.</p>
   */
  Options: DomainEndpointOptions | undefined;

  /**
   * <p>The status of the endpoint options for the domain. See <code>OptionStatus</code> for the status
   *       information that's included.
   *     </p>
   */
  Status: OptionStatus | undefined;
}

/**
 * <p>Status of the EBS options for the specified domain.</p>
 */
export interface EBSOptionsStatus {
  /**
   * <p>The EBS options for the specified domain.</p>
   */
  Options: EBSOptions | undefined;

  /**
   * <p>The status of the EBS options for the specified domain.</p>
   */
  Status: OptionStatus | undefined;
}

/**
 * <p>Status of the encryption At Rest options for the specified domain.</p>
 */
export interface EncryptionAtRestOptionsStatus {
  /**
   * <p>The Encryption At Rest options for the specified domain.</p>
   */
  Options: EncryptionAtRestOptions | undefined;

  /**
   * <p>The status of the Encryption At Rest options for the specified domain.</p>
   */
  Status: OptionStatus | undefined;
}

/**
 * <p>The status of the OpenSearch version options for the specified OpenSearch domain.</p>
 */
export interface VersionStatus {
  /**
   * <p>The OpenSearch version for the specified OpenSearch domain.</p>
   */
  Options: string | undefined;

  /**
   * <p>The status of the OpenSearch version options for the specified OpenSearch domain.</p>
   */
  Status: OptionStatus | undefined;
}

/**
 * <p>The configured log publishing options for the domain and their current status.</p>
 */
export interface LogPublishingOptionsStatus {
  /**
   * <p>The log publishing options configured for the domain.</p>
   */
  Options?: Record<string, LogPublishingOption>;

  /**
   * <p>The status of the log publishing options for the domain. See <code>OptionStatus</code> for the
   *       status information that's included.
   *     </p>
   */
  Status?: OptionStatus;
}

/**
 * <p>Status of the node-to-node encryption options for the specified domain.</p>
 */
export interface NodeToNodeEncryptionOptionsStatus {
  /**
   * <p>The node-to-node encryption options for the specified domain.</p>
   */
  Options: NodeToNodeEncryptionOptions | undefined;

  /**
   * <p>The status of the node-to-node encryption options for the specified domain.</p>
   */
  Status: OptionStatus | undefined;
}

/**
 * <p>Status of a daily automated snapshot.</p>
 */
export interface SnapshotOptionsStatus {
  /**
   * <p>The daily snapshot options specified for the domain.</p>
   */
  Options: SnapshotOptions | undefined;

  /**
   * <p>The status of a daily automated snapshot.</p>
   */
  Status: OptionStatus | undefined;
}

/**
 * <p>Status of the VPC options for the specified domain.</p>
 */
export interface VPCDerivedInfoStatus {
  /**
   * <p>The VPC options for the specified domain.</p>
   */
  Options: VPCDerivedInfo | undefined;

  /**
   * <p>The status of the VPC options for the specified domain.</p>
   */
  Status: OptionStatus | undefined;
}

/**
 * <p>The configuration of a domain.</p>
 */
export interface DomainConfig {
  /**
   * <p>String of format Elasticsearch_X.Y or OpenSearch_X.Y to specify the engine version for the OpenSearch or Elasticsearch domain.</p>
   */
  EngineVersion?: VersionStatus;

  /**
   * <p>The <code>ClusterConfig</code> for the domain.
   *     </p>
   */
  ClusterConfig?: ClusterConfigStatus;

  /**
   * <p>The <code>EBSOptions</code> for the domain.
   *     </p>
   */
  EBSOptions?: EBSOptionsStatus;

  /**
   * <p>IAM access policy as a JSON-formatted string.</p>
   */
  AccessPolicies?: AccessPoliciesStatus;

  /**
   * <p>The <code>SnapshotOptions</code> for the domain.
   *     </p>
   */
  SnapshotOptions?: SnapshotOptionsStatus;

  /**
   * <p>The <code>VPCOptions</code> for the specified domain. For more information, see <a href="http://docs.aws.amazon.com/opensearch-service/latest/developerguide/vpc.html" target="_blank">
   *       Launching your Amazon OpenSearch Service domains using a VPC</a>.
   *     </p>
   */
  VPCOptions?: VPCDerivedInfoStatus;

  /**
   * <p>The <code>CognitoOptions</code> for the specified domain. For more information, see <a href="http://docs.aws.amazon.com/opensearch-service/latest/developerguide/cognito-auth.html" target="_blank">Configuring Amazon Cognito authentication for OpenSearch Dashboards</a>.
   *     </p>
   */
  CognitoOptions?: CognitoOptionsStatus;

  /**
   * <p>The <code>EncryptionAtRestOptions</code> for the domain.
   *     </p>
   */
  EncryptionAtRestOptions?: EncryptionAtRestOptionsStatus;

  /**
   * <p>The <code>NodeToNodeEncryptionOptions</code> for the domain.
   *     </p>
   */
  NodeToNodeEncryptionOptions?: NodeToNodeEncryptionOptionsStatus;

  /**
   * <p>The <code>AdvancedOptions</code> for the domain. See <a href="http://docs.aws.amazon.com/opensearch-service/latest/developerguide/createupdatedomains.html#createdomain-configure-advanced-options" target="_blank">Advanced options
   *     </a> for more information.
   *     </p>
   */
  AdvancedOptions?: AdvancedOptionsStatus;

  /**
   * <p>Log publishing options for the given domain.</p>
   */
  LogPublishingOptions?: LogPublishingOptionsStatus;

  /**
   * <p>The <code>DomainEndpointOptions</code> for the domain.
   *     </p>
   */
  DomainEndpointOptions?: DomainEndpointOptionsStatus;

  /**
   * <p>Specifies <code>AdvancedSecurityOptions</code> for the domain.
   *     </p>
   */
  AdvancedSecurityOptions?: AdvancedSecurityOptionsStatus;

  /**
   * <p>Specifies <code>AutoTuneOptions</code> for the domain.
   *     </p>
   */
  AutoTuneOptions?: AutoTuneOptionsStatus;

  /**
   * <p>Specifies change details of the domain configuration change.</p>
   */
  ChangeProgressDetails?: ChangeProgressDetails;
}

/**
 * <p>The result of a <code>DescribeDomainConfig</code> request. Contains the configuration information of
 *       the requested domain.
 *     </p>
 */
export interface DescribeDomainConfigResponse {
  /**
   * <p>The configuration information of the domain requested in the <code>DescribeDomainConfig</code> request.
   *     </p>
   */
  DomainConfig: DomainConfig | undefined;
}

/**
 * <p>Container for the parameters to the
 *       <code>
 *         <a>DescribeDomains</a>
 *       </code>
 *       operation. By default, the API returns the status of all domains.
 *     </p>
 */
export interface DescribeDomainsRequest {
  /**
   * <p>The domains for which you want information.</p>
   */
  DomainNames: string[] | undefined;
}

/**
 * <p>The result of a <code>DescribeDomains</code> request. Contains the status of the specified domains
 *       or all domains owned by the account.
 *     </p>
 */
export interface DescribeDomainsResponse {
  /**
   * <p>The status of the domains requested in the <code>DescribeDomains</code> request.
   *     </p>
   */
  DomainStatusList: DomainStatus[] | undefined;
}

/**
 * <p>
 *       A filter used to limit results when describing inbound or outbound cross-cluster connections.
 *       Multiple values can be specified per filter.
 *       A cross-cluster connection must match at least one of the specified values for it to be
 *       returned from an operation.
 *     </p>
 */
export interface Filter {
  /**
   * <p>
   *       The name of the filter.
   *     </p>
   */
  Name?: string;

  /**
   * <p>
   *       Contains one or more values for the filter.
   *     </p>
   */
  Values?: string[];
}

/**
 * <p>Container for the parameters to the
 *       <code>
 *         <a>DescribeInboundConnections</a>
 *       </code>
 *       operation.
 *     </p>
 */
export interface DescribeInboundConnectionsRequest {
  /**
   * <p>
   *       A list of filters used to match properties for inbound cross-cluster connections.
   *       Available
   *       <code>
   *         <a>Filter</a>
   *       </code>
   *       values are:
   *       <ul>
   *         <li>connection-id</li>
   *         <li>local-domain-info.domain-name</li>
   *         <li>local-domain-info.owner-id</li>
   *         <li>local-domain-info.region</li>
   *         <li>remote-domain-info.domain-name</li>
   *       </ul>
   *     </p>
   */
  Filters?: Filter[];

  /**
   * <p>Set this value to limit the number of results returned. If not specified, defaults to 100.</p>
   */
  MaxResults?: number;

  /**
   * <p>If more results are available and NextToken is present, make the next request to the same API with the received
   *       NextToken to paginate the remaining results.</p>
   */
  NextToken?: string;
}

/**
 * <p>The result of a
 *       <code>
 *         <a>DescribeInboundConnections</a>
 *       </code>
 *       request. Contains a list of connections matching the filter criteria.
 *     </p>
 */
export interface DescribeInboundConnectionsResponse {
  /**
   * <p>A list of
   *       <code>
   *         <a>InboundConnection</a>
   *       </code>
   *       matching the specified filter criteria.
   *     </p>
   */
  Connections?: InboundConnection[];

  /**
   * <p>If more results are available and NextToken is present, make the next request to the same API with the received
   *       NextToken to paginate the remaining results.
   *     </p>
   */
  NextToken?: string;
}

/**
 * <p>The request processing has failed because of invalid pagination token provided by customer. Returns an HTTP status code of 400. </p>
 */
export class InvalidPaginationTokenException extends __BaseException {
  readonly name: "InvalidPaginationTokenException" = "InvalidPaginationTokenException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidPaginationTokenException, __BaseException>) {
    super({
      name: "InvalidPaginationTokenException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidPaginationTokenException.prototype);
  }
}

/**
 * <p>
 *       Container for the parameters to the
 *       <code>
 *         <a>DescribeInstanceTypeLimits</a>
 *       </code>
 *       operation.
 *     </p>
 */
export interface DescribeInstanceTypeLimitsRequest {
  /**
   * <p>
   *       The name of the domain you want to modify. Only include this value if you're
   *       querying OpenSearch
   *       <code>
   *         <a>Limits</a>
   *       </code>
   *       for an existing domain.
   *     </p>
   */
  DomainName?: string;

  /**
   * <p>
   *       The instance type for an OpenSearch cluster for which OpenSearch
   *       <code>
   *         <a>Limits</a>
   *       </code>
   *       are needed.
   *     </p>
   */
  InstanceType: OpenSearchPartitionInstanceType | string | undefined;

  /**
   * <p>
   *       Version of OpenSearch for which
   *       <code>
   *         <a>Limits</a>
   *       </code>
   *       are needed.
   *     </p>
   */
  EngineVersion: string | undefined;
}

/**
 * <p>
 *       InstanceCountLimits represents the limits on the number of instances that can be created in Amazon OpenSearch Service for
 *       a given InstanceType.
 *     </p>
 */
export interface InstanceCountLimits {
  /**
   * <p>
   *       Minimum number of instances that can be instantiated for a given InstanceType.
   *     </p>
   */
  MinimumInstanceCount?: number;

  /**
   * <p>
   *       Maximum number of instances that can be instantiated for a given InstanceType.
   *     </p>
   */
  MaximumInstanceCount?: number;
}

/**
 * <p>InstanceLimits represents the list of instance-related attributes that are available for a given InstanceType.
 *     </p>
 */
export interface InstanceLimits {
  /**
   * <p>
   *       InstanceCountLimits represents the limits on the number of instances that can be created in Amazon OpenSearch Service for
   *       a given InstanceType.
   *     </p>
   */
  InstanceCountLimits?: InstanceCountLimits;
}

/**
 * <p>Limits that are applicable for the given storage type.
 *     </p>
 */
export interface StorageTypeLimit {
  /**
   * <p>
   *       Name of storage limits that are applicable for the given storage type.
   *       If
   *       <code>
   *         <a>StorageType</a>
   *       </code>
   *       is "ebs", the following storage options are applicable:
   *       <ol>
   *         <li>MinimumVolumeSize</li>
   *         Minimum amount of volume size that is applicable for the given storage type. Can be empty if not applicable.
   *         <li>MaximumVolumeSize</li>
   *         Maximum amount of volume size that is applicable for the given storage type. Can be empty if not applicable.
   *         <li>MaximumIops</li>
   *         Maximum amount of Iops that is applicable for given the storage type. Can be empty if not applicable.
   *         <li>MinimumIops</li>
   *         Minimum amount of Iops that is applicable for given the storage type. Can be empty if not applicable.
   *       </ol>
   *     </p>
   */
  LimitName?: string;

  /**
   * <p>
   *       Values for the
   *       <code>
   *         <a>StorageTypeLimit$LimitName</a>
   *       </code>
   *       .
   *     </p>
   */
  LimitValues?: string[];
}

/**
 * <p>StorageTypes represents the list of storage-related types and their attributes
 *       that are available for a given InstanceType.
 *     </p>
 */
export interface StorageType {
  /**
   * <p>
   *       Type of storage.
   *       List of available storage options:
   *       <ol>
   *         <li>instance</li>
   *         Built-in storage available for the instance
   *         <li>ebs</li>
   *         Elastic block storage attached to the instance
   *       </ol>
   *     </p>
   */
  StorageTypeName?: string;

  /**
   * <p>
   *       Sub-type of the given storage type.
   *       List of available sub-storage options:
   *       "instance" storageType has no storageSubType.
   *       "ebs" storageType has the following valid storageSubTypes:
   *       <ol>
   *         <li>standard</li>
   *         <li>gp2</li>
   *         <li>io1</li>
   *       </ol>
   *       See
   *       <code>
   *         <a>VolumeType</a>
   *       </code>
   *       for more information regarding each EBS storage option.
   *     </p>
   */
  StorageSubTypeName?: string;

  /**
   * <p>Limits that are applicable for the given storage type.
   *     </p>
   */
  StorageTypeLimits?: StorageTypeLimit[];
}

/**
 * <p>
 *       Limits for a given InstanceType and for each of its roles.
 *       <br></br>
 *       Limits contains the following:
 *       <code>
 *         <a>StorageTypes</a>
 *       </code>,
 *       <code>
 *         <a>InstanceLimits</a>
 *       </code>,
 *       and
 *       <code>
 *         <a>AdditionalLimits</a>
 *       </code>
 *     </p>
 */
export interface Limits {
  /**
   * <p>Storage-related types and attributes
   *       that are available for a given InstanceType.
   *     </p>
   */
  StorageTypes?: StorageType[];

  /**
   * <p>InstanceLimits represents the list of instance-related attributes that are available for a given InstanceType.
   *     </p>
   */
  InstanceLimits?: InstanceLimits;

  /**
   * <p>
   *       List of additional limits that are specific to a given InstanceType and for each of its
   *       <code>
   *         <a>InstanceRole</a>
   *       </code>
   *       .
   *     </p>
   */
  AdditionalLimits?: AdditionalLimit[];
}

/**
 * <p>
 *       Container for the parameters received from the
 *       <code>
 *         <a>DescribeInstanceTypeLimits</a>
 *       </code>
 *       operation.
 *     </p>
 */
export interface DescribeInstanceTypeLimitsResponse {
  /**
   * <p>
   *       The role of a given instance and all applicable limits.
   *       The role performed by a given OpenSearch instance
   *       can be one of the following:
   *       <ul>
   *         <li>data: If the given InstanceType is used as a data node</li>
   *         <li>master: If the given InstanceType is used as a master node</li>
   *         <li>ultra_warm: If the given InstanceType is used as a warm node</li>
   *       </ul>
   *     </p>
   */
  LimitsByRole?: Record<string, Limits>;
}

/**
 * <p>Container for the parameters to the
 *       <code>
 *         <a>DescribeOutboundConnections</a>
 *       </code>
 *       operation.
 *     </p>
 */
export interface DescribeOutboundConnectionsRequest {
  /**
   * <p>
   *       A list of filters used to match properties for outbound cross-cluster connections.
   *       Available
   *       <code>
   *         <a>Filter</a>
   *       </code>
   *       names for this operation are:
   *       <ul>
   *         <li>connection-id</li>
   *         <li>remote-domain-info.domain-name</li>
   *         <li>remote-domain-info.owner-id</li>
   *         <li>remote-domain-info.region</li>
   *         <li>local-domain-info.domain-name</li>
   *       </ul>
   *     </p>
   */
  Filters?: Filter[];

  /**
   * <p>Set this value to limit the number of results returned. If not specified, defaults to 100.</p>
   */
  MaxResults?: number;

  /**
   * <p>NextToken is sent in case the earlier API call results contain the NextToken parameter. Used for pagination.</p>
   */
  NextToken?: string;
}

/**
 * <p>The result of a
 *       <code>
 *         <a>DescribeOutboundConnections</a>
 *       </code>
 *       request. Contains the list of connections matching the filter criteria.
 *     </p>
 */
export interface DescribeOutboundConnectionsResponse {
  /**
   * <p>A list of
   *       <code>
   *         <a>OutboundConnection</a>
   *       </code>
   *       matching the specified filter criteria.
   *     </p>
   */
  Connections?: OutboundConnection[];

  /**
   * <p>If more results are available and NextToken is present, make the next request to the same API with the received
   *       NextToken to paginate the remaining results.
   *     </p>
   */
  NextToken?: string;
}

export enum DescribePackagesFilterName {
  PackageID = "PackageID",
  PackageName = "PackageName",
  PackageStatus = "PackageStatus",
}

/**
 * <p>A filter to apply to the <code>DescribePackage</code> response.
 *     </p>
 */
export interface DescribePackagesFilter {
  /**
   * <p>Any field from <code>PackageDetails</code>.
   *     </p>
   */
  Name?: DescribePackagesFilterName | string;

  /**
   * <p>A list of values for the specified field.</p>
   */
  Value?: string[];
}

/**
 * <p>
 *       Container for the request parameters to the
 *       <code>
 *         <a>DescribePackage</a>
 *       </code>
 *       operation.
 *     </p>
 */
export interface DescribePackagesRequest {
  /**
   * <p>Only returns packages that match the <code>DescribePackagesFilterList</code> values.
   *     </p>
   */
  Filters?: DescribePackagesFilter[];

  /**
   * <p>Limits results to a maximum number of packages.</p>
   */
  MaxResults?: number;

  /**
   * <p>Used for pagination. Only necessary if a previous API call includes a non-null NextToken value. If provided,
   *       returns results for the next page.
   *     </p>
   */
  NextToken?: string;
}

/**
 * <p>
 *       Container for the response returned by the
 *       <code>
 *         <a>DescribePackages</a>
 *       </code>
 *       operation.
 *     </p>
 */
export interface DescribePackagesResponse {
  /**
   * <p>List of <code>PackageDetails</code> objects.
   *     </p>
   */
  PackageDetailsList?: PackageDetails[];

  NextToken?: string;
}

/**
 * <p>Container for parameters to
 *       <code>DescribeReservedInstanceOfferings</code>
 *     </p>
 */
export interface DescribeReservedInstanceOfferingsRequest {
  /**
   * <p>The offering identifier filter value. Use this parameter to show only the available offering that matches the
   *       specified reservation identifier.
   *     </p>
   */
  ReservedInstanceOfferingId?: string;

  /**
   * <p>Set this value to limit the number of results returned. If not specified, defaults to 100.</p>
   */
  MaxResults?: number;

  /**
   * <p>Provides an identifier to allow retrieval of paginated results.
   *     </p>
   */
  NextToken?: string;
}

export enum ReservedInstancePaymentOption {
  ALL_UPFRONT = "ALL_UPFRONT",
  NO_UPFRONT = "NO_UPFRONT",
  PARTIAL_UPFRONT = "PARTIAL_UPFRONT",
}

/**
 * <p>Contains the specific price and frequency of a recurring charges for a reserved OpenSearch instance, or for a
 *       reserved OpenSearch instance offering.
 *     </p>
 */
export interface RecurringCharge {
  /**
   * <p>The monetary amount of the recurring charge.</p>
   */
  RecurringChargeAmount?: number;

  /**
   * <p>The frequency of the recurring charge.</p>
   */
  RecurringChargeFrequency?: string;
}

/**
 * <p>Details of a reserved OpenSearch instance offering.</p>
 */
export interface ReservedInstanceOffering {
  /**
   * <p>The OpenSearch reserved instance offering identifier.</p>
   */
  ReservedInstanceOfferingId?: string;

  /**
   * <p>The OpenSearch instance type offered by the reserved instance offering.</p>
   */
  InstanceType?: OpenSearchPartitionInstanceType | string;

  /**
   * <p>The duration, in seconds, for which the offering will reserve the OpenSearch instance.</p>
   */
  Duration?: number;

  /**
   * <p>The upfront fixed charge you will pay to purchase the specific reserved OpenSearch instance offering.</p>
   */
  FixedPrice?: number;

  /**
   * <p>The rate you are charged for each hour the domain that is using the offering is running.</p>
   */
  UsagePrice?: number;

  /**
   * <p>The currency code for the reserved OpenSearch instance offering.</p>
   */
  CurrencyCode?: string;

  /**
   * <p>Payment option for the reserved OpenSearch instance offering</p>
   */
  PaymentOption?: ReservedInstancePaymentOption | string;

  /**
   * <p>The charge to your account regardless of whether you are creating any domains using the instance offering.</p>
   */
  RecurringCharges?: RecurringCharge[];
}

/**
 * <p>Container for results from
 *       <code>DescribeReservedInstanceOfferings</code>
 *     </p>
 */
export interface DescribeReservedInstanceOfferingsResponse {
  /**
   * <p>Provides an identifier to allow retrieval of paginated results.</p>
   */
  NextToken?: string;

  /**
   * <p>List of reserved OpenSearch instance offerings</p>
   */
  ReservedInstanceOfferings?: ReservedInstanceOffering[];
}

/**
 * <p>Container for parameters to
 *       <code>DescribeReservedInstances</code>
 *     </p>
 */
export interface DescribeReservedInstancesRequest {
  /**
   * <p>The reserved instance identifier filter value. Use this parameter to show only the reservation that matches the
   *       specified reserved OpenSearch instance ID.
   *     </p>
   */
  ReservedInstanceId?: string;

  /**
   * <p>Set this value to limit the number of results returned. If not specified, defaults to 100.</p>
   */
  MaxResults?: number;

  /**
   * <p>Provides an identifier to allow retrieval of paginated results.
   *     </p>
   */
  NextToken?: string;
}

/**
 * <p>Details of a reserved OpenSearch instance.</p>
 */
export interface ReservedInstance {
  /**
   * <p>The customer-specified identifier to track this reservation.</p>
   */
  ReservationName?: string;

  /**
   * <p>The unique identifier for the reservation.</p>
   */
  ReservedInstanceId?: string;

  BillingSubscriptionId?: number;
  /**
   * <p>The offering identifier.</p>
   */
  ReservedInstanceOfferingId?: string;

  /**
   * <p>The OpenSearch instance type offered by the reserved instance offering.</p>
   */
  InstanceType?: OpenSearchPartitionInstanceType | string;

  /**
   * <p>The time the reservation started.</p>
   */
  StartTime?: Date;

  /**
   * <p>The duration, in seconds, for which the OpenSearch instance is reserved.</p>
   */
  Duration?: number;

  /**
   * <p>The upfront fixed charge you will paid to purchase the specific reserved OpenSearch instance offering.</p>
   */
  FixedPrice?: number;

  /**
   * <p>The rate you are charged for each hour for the domain that is using this reserved instance.</p>
   */
  UsagePrice?: number;

  /**
   * <p>The currency code for the reserved OpenSearch instance offering.</p>
   */
  CurrencyCode?: string;

  /**
   * <p>The number of OpenSearch instances that have been reserved.</p>
   */
  InstanceCount?: number;

  /**
   * <p>The state of the reserved OpenSearch instance.</p>
   */
  State?: string;

  /**
   * <p>The payment option as defined in the reserved OpenSearch instance offering.</p>
   */
  PaymentOption?: ReservedInstancePaymentOption | string;

  /**
   * <p>The charge to your account regardless of whether you are creating any domains using the instance offering.</p>
   */
  RecurringCharges?: RecurringCharge[];
}

/**
 * <p>Container for results from
 *       <code>DescribeReservedInstances</code>
 *     </p>
 */
export interface DescribeReservedInstancesResponse {
  /**
   * <p>Provides an identifier to allow retrieval of paginated results.</p>
   */
  NextToken?: string;

  /**
   * <p>List of reserved OpenSearch instances.</p>
   */
  ReservedInstances?: ReservedInstance[];
}

/**
 * <p>
 *       Container for the request parameters to the
 *       <code>
 *         <a>DissociatePackage</a>
 *       </code>
 *       operation.
 *     </p>
 */
export interface DissociatePackageRequest {
  /**
   * <p>The internal ID of the package to associate with a domain. Use <code>DescribePackages</code> to find
   *       this value.
   *     </p>
   */
  PackageID: string | undefined;

  /**
   * <p>The name of the domain to associate the package with.</p>
   */
  DomainName: string | undefined;
}

/**
 * <p>
 *       Container for the response returned by
 *       <code>
 *         <a>DissociatePackage</a>
 *       </code>
 *       operation.
 *     </p>
 */
export interface DissociatePackageResponse {
  /**
   * <p>
   *       <code>DomainPackageDetails</code>
   *     </p>
   */
  DomainPackageDetails?: DomainPackageDetails;
}

/**
 * <p>
 *       Container for the request parameters to
 *       <code>
 *         <a>GetCompatibleVersions</a>
 *       </code>
 *       operation.
 *     </p>
 */
export interface GetCompatibleVersionsRequest {
  /**
   * <p>The name of an domain. Domain names are unique across the domains owned by an account within an AWS
   *       region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9,
   *       and - (hyphen).
   *     </p>
   */
  DomainName?: string;
}

/**
 * <p>
 *       A map from an
 *       <code>
 *         <a>EngineVersion</a>
 *       </code>
 *       to a list of compatible
 *       <code>
 *         <a>EngineVersion</a>
 *       </code>
 *       s to which the domain can be upgraded.
 *     </p>
 */
export interface CompatibleVersionsMap {
  /**
   * <p>The current version of OpenSearch a domain is on.</p>
   */
  SourceVersion?: string;

  /**
   * <p>List of supported OpenSearch versions.
   *     </p>
   */
  TargetVersions?: string[];
}

/**
 * <p>
 *       Container for the response returned by the
 *       <code>
 *         <a>GetCompatibleVersions</a>
 *       </code>
 *       operation.
 *     </p>
 */
export interface GetCompatibleVersionsResponse {
  /**
   * <p>
   *       A map of compatible OpenSearch versions returned as part of the
   *       <code>
   *         <a>GetCompatibleVersions</a>
   *       </code>
   *       operation.
   *     </p>
   */
  CompatibleVersions?: CompatibleVersionsMap[];
}

/**
 * <p>
 *       Container for the request parameters to the
 *       <code>
 *         <a>GetPackageVersionHistory</a>
 *       </code>
 *       operation.
 *     </p>
 */
export interface GetPackageVersionHistoryRequest {
  /**
   * <p>Returns an audit history of package versions.</p>
   */
  PackageID: string | undefined;

  /**
   * <p>Limits results to a maximum number of package versions.</p>
   */
  MaxResults?: number;

  /**
   * <p>Used for pagination. Only necessary if a previous API call includes a non-null NextToken value. If provided,
   *       returns results for the next page.
   *     </p>
   */
  NextToken?: string;
}

/**
 * <p>Details of a package version.</p>
 */
export interface PackageVersionHistory {
  /**
   * <p>The package version.</p>
   */
  PackageVersion?: string;

  /**
   * <p>A message associated with the package version.</p>
   */
  CommitMessage?: string;

  /**
   * <p>The timestamp of when the package was created.</p>
   */
  CreatedAt?: Date;
}

/**
 * <p>
 *       Container for response returned by
 *       <code>
 *         <a>GetPackageVersionHistory</a>
 *       </code>
 *       operation.
 *     </p>
 */
export interface GetPackageVersionHistoryResponse {
  PackageID?: string;
  /**
   * <p>List of <code>PackageVersionHistory</code> objects.
   *     </p>
   */
  PackageVersionHistoryList?: PackageVersionHistory[];

  NextToken?: string;
}

/**
 * <p>
 *       Container for the request parameters to the
 *       <code>
 *         <a>GetUpgradeHistory</a>
 *       </code>
 *       operation.
 *     </p>
 */
export interface GetUpgradeHistoryRequest {
  /**
   * <p>The name of an domain. Domain names are unique across the domains owned by an account within an AWS
   *       region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9,
   *       and - (hyphen).
   *     </p>
   */
  DomainName: string | undefined;

  /**
   * <p>
   *       Set this value to limit the number of results returned.
   *     </p>
   */
  MaxResults?: number;

  /**
   * <p>
   *       Paginated APIs accept the NextToken input to return the next page of results and provide
   *       a NextToken output in the response, which you can use to retrieve more results.
   *     </p>
   */
  NextToken?: string;
}

export enum UpgradeStep {
  PRE_UPGRADE_CHECK = "PRE_UPGRADE_CHECK",
  SNAPSHOT = "SNAPSHOT",
  UPGRADE = "UPGRADE",
}

export enum UpgradeStatus {
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS",
  SUCCEEDED = "SUCCEEDED",
  SUCCEEDED_WITH_ISSUES = "SUCCEEDED_WITH_ISSUES",
}

/**
 * <p>Represents a single step of the upgrade or upgrade eligibility check workflow.</p>
 */
export interface UpgradeStepItem {
  /**
   * <p>
   *       One of three steps an upgrade or upgrade eligibility check goes through:
   *       <ul>
   *         <li>PreUpgradeCheck</li>
   *         <li>Snapshot</li>
   *         <li>Upgrade</li>
   *       </ul>
   *     </p>
   */
  UpgradeStep?: UpgradeStep | string;

  /**
   * <p>
   *       The current status of the upgrade. The status can take one of the following values:
   *       <ul>
   *         <li>In Progress</li>
   *         <li>Succeeded</li>
   *         <li>Succeeded with Issues</li>
   *         <li>Failed</li>
   *       </ul>
   *     </p>
   */
  UpgradeStepStatus?: UpgradeStatus | string;

  /**
   * <p>A list of strings containing detailed information about the errors encountered in a particular step.</p>
   */
  Issues?: string[];

  /**
   * <p>The floating point value representing the progress percentage of a particular step.</p>
   */
  ProgressPercent?: number;
}

/**
 * <p>History of the last 10 upgrades and upgrade eligibility checks.</p>
 */
export interface UpgradeHistory {
  /**
   * <p>A string that briefly describes the upgrade.</p>
   */
  UpgradeName?: string;

  /**
   * <p>UTC timestamp at which the upgrade API call was made in "yyyy-MM-ddTHH:mm:ssZ" format.</p>
   */
  StartTimestamp?: Date;

  /**
   * <p>
   *       The current status of the upgrade. The status can take one of the following values:
   *       <ul>
   *         <li>In Progress</li>
   *         <li>Succeeded</li>
   *         <li>Succeeded with Issues</li>
   *         <li>Failed</li>
   *       </ul>
   *     </p>
   */
  UpgradeStatus?: UpgradeStatus | string;

  /**
   * <p>
   *       A list of
   *       <code>
   *         <a>UpgradeStepItem</a>
   *       </code>
   *       s representing information about each step performed as part of a specific upgrade or upgrade eligibility check.
   *     </p>
   */
  StepsList?: UpgradeStepItem[];
}

/**
 * <p>
 *       Container for the response returned by the
 *       <code>
 *         <a>GetUpgradeHistory</a>
 *       </code>
 *       operation.
 *     </p>
 */
export interface GetUpgradeHistoryResponse {
  /**
   * <p>
   *       A list of
   *       <code>
   *         <a>UpgradeHistory</a>
   *       </code>
   *       objects corresponding to each upgrade or upgrade eligibility check performed on a domain returned as part of the
   *       <code>
   *         <a>GetUpgradeHistoryResponse</a>
   *       </code>
   *       object.
   *     </p>
   */
  UpgradeHistories?: UpgradeHistory[];

  /**
   * <p>Pagination token that needs to be supplied to the next call to get the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * <p>
 *       Container for the request parameters to the
 *       <code>
 *         <a>GetUpgradeStatus</a>
 *       </code>
 *       operation.
 *     </p>
 */
export interface GetUpgradeStatusRequest {
  /**
   * <p>The name of an domain. Domain names are unique across the domains owned by an account within an AWS
   *       region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9,
   *       and - (hyphen).
   *     </p>
   */
  DomainName: string | undefined;
}

/**
 * <p>
 *       Container for the response returned by the
 *       <code>
 *         <a>GetUpgradeStatus</a>
 *       </code>
 *       operation.
 *     </p>
 */
export interface GetUpgradeStatusResponse {
  /**
   * <p>
   *       One of three steps an upgrade or upgrade eligibility check goes through:
   *       <ul>
   *         <li>PreUpgradeCheck</li>
   *         <li>Snapshot</li>
   *         <li>Upgrade</li>
   *       </ul>
   *     </p>
   */
  UpgradeStep?: UpgradeStep | string;

  /**
   * <p>
   *       One of four statuses an upgrade have, returned as part of the
   *       <code>
   *         <a>GetUpgradeStatusResponse</a>
   *       </code>
   *       object. The status can take one of the following values:
   *       <ul>
   *         <li>In Progress</li>
   *         <li>Succeeded</li>
   *         <li>Succeeded with Issues</li>
   *         <li>Failed</li>
   *       </ul>
   *     </p>
   */
  StepStatus?: UpgradeStatus | string;

  /**
   * <p>A string that briefly describes the update.</p>
   */
  UpgradeName?: string;
}

export enum EngineType {
  Elasticsearch = "Elasticsearch",
  OpenSearch = "OpenSearch",
}

/**
 * <p> Container for the parameters to the <code><a>ListDomainNames</a></code> operation.</p>
 */
export interface ListDomainNamesRequest {
  /**
   * <p> Optional parameter to filter the output by domain engine type. Acceptable values are 'Elasticsearch' and 'OpenSearch'. </p>
   */
  EngineType?: EngineType | string;
}

export interface DomainInfo {
  /**
   * <p>The <code>DomainName</code>.
   *     </p>
   */
  DomainName?: string;

  /**
   * <p> Specifies the <code>EngineType</code> of the domain.</p>
   */
  EngineType?: EngineType | string;
}

/**
 * <p>The result of a <code>ListDomainNames</code> operation. Contains the names of all domains owned by this account and their respective engine types.</p>
 */
export interface ListDomainNamesResponse {
  /**
   * <p>List of domain names and respective engine types.</p>
   */
  DomainNames?: DomainInfo[];
}

/**
 * <p>
 *       Container for the request parameters to the
 *       <code>
 *         <a>ListDomainsForPackage</a>
 *       </code>
 *       operation.
 *     </p>
 */
export interface ListDomainsForPackageRequest {
  /**
   * <p>The package for which to list associated domains.</p>
   */
  PackageID: string | undefined;

  /**
   * <p>Limits the results to a maximum number of domains.</p>
   */
  MaxResults?: number;

  /**
   * <p>Used for pagination. Only necessary if a previous API call includes a non-null NextToken value. If provided,
   *       returns results for the next page.
   *     </p>
   */
  NextToken?: string;
}

/**
 * <p>
 *       Container for the response parameters to the
 *       <code>
 *         <a>ListDomainsForPackage</a>
 *       </code>
 *       operation.
 *     </p>
 */
export interface ListDomainsForPackageResponse {
  /**
   * <p>List of <code>DomainPackageDetails</code> objects.
   *     </p>
   */
  DomainPackageDetailsList?: DomainPackageDetails[];

  NextToken?: string;
}

export interface ListInstanceTypeDetailsRequest {
  EngineVersion: string | undefined;
  /**
   * <p>The name of an domain. Domain names are unique across the domains owned by an account within an AWS
   *       region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9,
   *       and - (hyphen).
   *     </p>
   */
  DomainName?: string;

  /**
   * <p>
   *       Set this value to limit the number of results returned.
   *     </p>
   */
  MaxResults?: number;

  /**
   * <p>
   *       Paginated APIs accept the NextToken input to return the next page of results and provide
   *       a NextToken output in the response, which you can use to retrieve more results.
   *     </p>
   */
  NextToken?: string;
}

export interface InstanceTypeDetails {
  InstanceType?: OpenSearchPartitionInstanceType | string;
  EncryptionEnabled?: boolean;
  CognitoEnabled?: boolean;
  AppLogsEnabled?: boolean;
  AdvancedSecurityEnabled?: boolean;
  WarmEnabled?: boolean;
  InstanceRole?: string[];
}

export interface ListInstanceTypeDetailsResponse {
  InstanceTypeDetails?: InstanceTypeDetails[];
  /**
   * <p>
   *       Paginated APIs accept the NextToken input to return the next page of results and provide
   *       a NextToken output in the response, which you can use to retrieve more results.
   *     </p>
   */
  NextToken?: string;
}

/**
 * <p>
 *       Container for the request parameters to the
 *       <code>
 *         <a>ListPackagesForDomain</a>
 *       </code>
 *       operation.
 *     </p>
 */
export interface ListPackagesForDomainRequest {
  /**
   * <p>The name of the domain for which you want to list associated packages.</p>
   */
  DomainName: string | undefined;

  /**
   * <p>Limits results to a maximum number of packages.</p>
   */
  MaxResults?: number;

  /**
   * <p>Used for pagination. Only necessary if a previous API call includes a non-null NextToken value. If provided,
   *       returns results for the next page.
   *     </p>
   */
  NextToken?: string;
}

/**
 * <p>
 *       Container for the response parameters to the
 *       <code>
 *         <a>ListPackagesForDomain</a>
 *       </code>
 *       operation.
 *     </p>
 */
export interface ListPackagesForDomainResponse {
  /**
   * <p>List of <code>DomainPackageDetails</code> objects.
   *     </p>
   */
  DomainPackageDetailsList?: DomainPackageDetails[];

  /**
   * <p>Pagination token to supply to the next call to get the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * <p>Container for the parameters to the
 *       <code>
 *         <a>ListTags</a>
 *       </code>
 *       operation. Specify the <code>ARN</code> of the domain that the tags you want
 *       to view are attached to.
 *     </p>
 */
export interface ListTagsRequest {
  /**
   * <p>Specify the <code>ARN</code> of the domain that the tags you want
   *       to view are attached to.
   *     </p>
   */
  ARN: string | undefined;
}

/**
 * <p>The result of a <code>ListTags</code> operation. Contains tags for all requested domains.
 *     </p>
 */
export interface ListTagsResponse {
  /**
   * <p>List of <code>Tag</code> for the requested domain.
   *     </p>
   */
  TagList?: Tag[];
}

/**
 * <p>
 *       Container for the parameters to the
 *       <code>
 *         <a>ListVersions</a>
 *       </code>
 *       operation.
 *       <p>
 *         Use
 *         <code>
 *           <a>MaxResults</a>
 *         </code>
 *         to control the maximum number of results to retrieve in a single
 *         call.
 *       </p>
 *       <p>
 *         Use
 *         <code>
 *           <a>NextToken</a>
 *         </code>
 *         in response to retrieve more results. If the received response does
 *         not contain a NextToken, there are no more results to retrieve.
 *       </p>
 *     </p>
 */
export interface ListVersionsRequest {
  /**
   * <p>
   *       Set this value to limit the number of results returned.
   *       Value must be greater than 10 or it won't be honored.
   *     </p>
   */
  MaxResults?: number;

  /**
   * <p>
   *       Paginated APIs accept the NextToken input to return the next page of results and provide
   *       a NextToken output in the response, which you can use to retrieve more results.
   *     </p>
   */
  NextToken?: string;
}

/**
 * <p>
 *       Container for the parameters for response received from the
 *       <code>
 *         <a>ListVersions</a>
 *       </code>
 *       operation.
 *     </p>
 */
export interface ListVersionsResponse {
  /**
   * <p>List of supported OpenSearch versions.
   *     </p>
   */
  Versions?: string[];

  /**
   * <p>
   *       Paginated APIs accept the NextToken input to return the next page of results and provide
   *       a NextToken output in the response, which you can use to retrieve more results.
   *     </p>
   */
  NextToken?: string;
}

/**
 * <p>Container for parameters to
 *       <code>PurchaseReservedInstanceOffering</code>
 *     </p>
 */
export interface PurchaseReservedInstanceOfferingRequest {
  /**
   * <p>The ID of the reserved OpenSearch instance offering to purchase.</p>
   */
  ReservedInstanceOfferingId: string | undefined;

  /**
   * <p>A customer-specified identifier to track this reservation.</p>
   */
  ReservationName: string | undefined;

  /**
   * <p>The number of OpenSearch instances to reserve.</p>
   */
  InstanceCount?: number;
}

/**
 * <p>Represents the output of a <code>PurchaseReservedInstanceOffering</code> operation.
 *     </p>
 */
export interface PurchaseReservedInstanceOfferingResponse {
  /**
   * <p>Details of the reserved OpenSearch instance which was purchased.</p>
   */
  ReservedInstanceId?: string;

  /**
   * <p>The customer-specified identifier used to track this reservation.</p>
   */
  ReservationName?: string;
}

/**
 * <p>Container for the parameters to the
 *       <code>
 *         <a>RejectInboundConnection</a>
 *       </code>
 *       operation.
 *     </p>
 */
export interface RejectInboundConnectionRequest {
  /**
   * <p>The ID of the inbound connection to reject.</p>
   */
  ConnectionId: string | undefined;
}

/**
 * <p>The result of a
 *       <code>
 *         <a>RejectInboundConnection</a>
 *       </code>
 *       operation. Contains details about the rejected inbound connection.
 *     </p>
 */
export interface RejectInboundConnectionResponse {
  /**
   * <p>The
   *       <code>
   *         <a>InboundConnection</a>
   *       </code>
   *       of the rejected inbound connection.
   *     </p>
   */
  Connection?: InboundConnection;
}

/**
 * <p>Container for the parameters to the
 *       <code>
 *         <a>RemoveTags</a>
 *       </code>
 *       operation. Specify the <code>ARN</code> for the domain from which you want to remove the
 *       specified <code>TagKey</code>.
 *     </p>
 */
export interface RemoveTagsRequest {
  /**
   * <p>The <code>ARN</code> of the domain from which you want to delete the specified tags.
   *     </p>
   */
  ARN: string | undefined;

  /**
   * <p>The <code>TagKey</code> list you want to remove from the domain.
   *     </p>
   */
  TagKeys: string[] | undefined;
}

/**
 * <p>Container for the parameters to the
 *       <code>
 *         <a>StartServiceSoftwareUpdate</a>
 *       </code>
 *       operation. Specifies the name of the domain to schedule a service software update for.
 *     </p>
 */
export interface StartServiceSoftwareUpdateRequest {
  /**
   * <p>The name of the domain that you want to update to the latest service software.</p>
   */
  DomainName: string | undefined;
}

/**
 * <p>The result of a <code>StartServiceSoftwareUpdate</code> operation. Contains the status of the
 *       update.
 *     </p>
 */
export interface StartServiceSoftwareUpdateResponse {
  /**
   * <p>The current status of the OpenSearch service software update.</p>
   */
  ServiceSoftwareOptions?: ServiceSoftwareOptions;
}

/**
 * <p>Container for the parameters to the
 *       <code>
 *         <a>UpdateDomain</a>
 *       </code>
 *       operation. Specifies the type and number of instances in the domain cluster.
 *     </p>
 */
export interface UpdateDomainConfigRequest {
  /**
   * <p>The name of the domain you're updating.</p>
   */
  DomainName: string | undefined;

  /**
   * <p>The type and number of instances to instantiate for the domain cluster.</p>
   */
  ClusterConfig?: ClusterConfig;

  /**
   * <p>Specify the type and size of the EBS volume to use.</p>
   */
  EBSOptions?: EBSOptions;

  /**
   * <p>Option to set the time, in UTC format, for the daily automated snapshot. Default value is <code>0</code> hours.
   *     </p>
   */
  SnapshotOptions?: SnapshotOptions;

  /**
   * <p>Options to specify the subnets and security groups for the VPC endpoint. For more information, see <a href="http://docs.aws.amazon.com/opensearch-service/latest/developerguide/vpc.html" target="_blank">Launching your Amazon OpenSearch Service domains using a VPC
   *     </a>.
   *     </p>
   */
  VPCOptions?: VPCOptions;

  /**
   * <p>Options to specify the Cognito user and identity pools for OpenSearch Dashboards authentication. For more information, see <a href="http://docs.aws.amazon.com/opensearch-service/latest/developerguide/cognito-auth.html" target="_blank">Configuring Amazon Cognito authentication for OpenSearch Dashboards</a>.
   *     </p>
   */
  CognitoOptions?: CognitoOptions;

  /**
   * <p>Modifies the advanced option to allow references to indices in an HTTP request body. Must be <code>false</code> when
   *       configuring access to individual sub-resources. By default, the value is <code>true</code>.
   *       See <a href="http://docs.aws.amazon.com/opensearch-service/latest/developerguide/createupdatedomains.html#createdomain-configure-advanced-options" target="_blank">Advanced options
   *       </a> for more information.
   *     </p>
   */
  AdvancedOptions?: Record<string, string>;

  /**
   * <p>IAM access policy as a JSON-formatted string.</p>
   */
  AccessPolicies?: string;

  /**
   * <p>Map of <code>LogType</code> and <code>LogPublishingOption</code>, each containing options to publish a given type
   *       of OpenSearch log.
   *     </p>
   */
  LogPublishingOptions?: Record<string, LogPublishingOption>;

  /**
   * <p>Specifies encryption of data at rest options.</p>
   */
  EncryptionAtRestOptions?: EncryptionAtRestOptions;

  /**
   * <p>Options to specify configuration that will be applied to the domain endpoint.</p>
   */
  DomainEndpointOptions?: DomainEndpointOptions;

  /**
   * <p>Specifies node-to-node encryption options.</p>
   */
  NodeToNodeEncryptionOptions?: NodeToNodeEncryptionOptions;

  /**
   * <p>Specifies advanced security options.</p>
   */
  AdvancedSecurityOptions?: AdvancedSecurityOptionsInput;

  /**
   * <p>Specifies Auto-Tune options.</p>
   */
  AutoTuneOptions?: AutoTuneOptions;

  /**
   * <p>This flag, when set to True, specifies whether the <code>UpdateDomain</code> request should return the results of validation checks (DryRunResults) without actually applying the change.</p>
   */
  DryRun?: boolean;
}

export interface DryRunResults {
  /**
   * <p>
   *       Specifies the way in which Amazon OpenSearch Service applies the update.
   *       Possible responses are <code>Blue/Green</code> (the update requires a blue/green deployment), <code>DynamicUpdate</code> (no blue/green required), <code>Undetermined</code> (the domain is undergoing an update and can't predict the deployment type; try again after the update is complete), and <code>None</code> (the request doesn't include any configuration changes).
   *     </p>
   */
  DeploymentType?: string;

  /**
   * <p>Contains an optional message associated with the DryRunResults.</p>
   */
  Message?: string;
}

/**
 * <p>The result of an <code>UpdateDomain</code> request. Contains the status of the domain
 *       being updated.
 *     </p>
 */
export interface UpdateDomainConfigResponse {
  /**
   * <p>The status of the updated domain.</p>
   */
  DomainConfig: DomainConfig | undefined;

  /**
   * <p>Contains result of DryRun. </p>
   */
  DryRunResults?: DryRunResults;
}

/**
 * <p>
 *       Container for request parameters to the
 *       <code>
 *         <a>UpdatePackage</a>
 *       </code>
 *       operation.
 *     </p>
 */
export interface UpdatePackageRequest {
  /**
   * <p>The unique identifier for the package.</p>
   */
  PackageID: string | undefined;

  /**
   * <p>The Amazon S3 location for importing the package specified as <code>S3BucketName</code> and
   *       <code>S3Key</code>
   *     </p>
   */
  PackageSource: PackageSource | undefined;

  /**
   * <p>A new description of the package.</p>
   */
  PackageDescription?: string;

  /**
   * <p>A commit message for the new version which is shown as part of <code>GetPackageVersionHistoryResponse</code>.
   *     </p>
   */
  CommitMessage?: string;
}

/**
 * <p>
 *       Container for the response returned by the
 *       <code>
 *         <a>UpdatePackage</a>
 *       </code>
 *       operation.
 *     </p>
 */
export interface UpdatePackageResponse {
  /**
   * <p>Information about the package.
   *     </p>
   */
  PackageDetails?: PackageDetails;
}

/**
 * <p>
 *       Container for the request parameters to
 *       <code>
 *         <a>UpgradeDomain</a>
 *       </code>
 *       operation.
 *     </p>
 */
export interface UpgradeDomainRequest {
  /**
   * <p>The name of an domain. Domain names are unique across the domains owned by an account within an AWS
   *       region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9,
   *       and - (hyphen).
   *     </p>
   */
  DomainName: string | undefined;

  /**
   * <p>The version of OpenSearch you intend to upgrade the domain to.</p>
   */
  TargetVersion: string | undefined;

  /**
   * <p>
   *       When true, indicates that an upgrade eligibility check needs to be performed.
   *       Does not actually perform the upgrade.
   *     </p>
   */
  PerformCheckOnly?: boolean;

  /**
   * <p>Exposes select native OpenSearch configuration values from <code>opensearch.yml</code>. Currently, the
   *       following advanced options are available:
   *     </p>
   *     <ul>
   *       <li>Option to allow references to indices in an HTTP request body. Must be <code>false</code> when configuring
   *         access to individual sub-resources. By default, the value is <code>true</code>.
   *         See <a href="http://docs.aws.amazon.com/opensearch-service/latest/developerguide/createupdatedomains.html#createdomain-configure-advanced-options" target="_blank">Advanced cluster parameters
   *         </a> for more information.
   *       </li>
   *       <li>Option to specify the percentage of heap space allocated to field data. By default, this setting is
   *         unbounded.
   *       </li>
   *     </ul>
   *     <p>For more information, see <a href="http://docs.aws.amazon.com/opensearch-service/latest/developerguide/createupdatedomains.html#createdomain-configure-advanced-options">
   *       Advanced cluster parameters</a>.
   *     </p>
   */
  AdvancedOptions?: Record<string, string>;
}

/**
 * <p>
 *       Container for response returned by
 *       <code>
 *         <a>UpgradeDomain</a>
 *       </code>
 *       operation.
 *     </p>
 */
export interface UpgradeDomainResponse {
  UpgradeId?: string;
  /**
   * <p>The name of an domain. Domain names are unique across the domains owned by an account within an AWS
   *       region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9,
   *       and - (hyphen).
   *     </p>
   */
  DomainName?: string;

  /**
   * <p>The version of OpenSearch that you intend to upgrade the domain to.</p>
   */
  TargetVersion?: string;

  /**
   * <p>
   *       When true, indicates that an upgrade eligibility check needs to be performed.
   *       Does not actually perform the upgrade.
   *     </p>
   */
  PerformCheckOnly?: boolean;

  /**
   * <p>Exposes select native OpenSearch configuration values from <code>opensearch.yml</code>. Currently, the
   *       following advanced options are available:
   *     </p>
   *     <ul>
   *       <li>Option to allow references to indices in an HTTP request body. Must be <code>false</code> when configuring
   *         access to individual sub-resources. By default, the value is <code>true</code>.
   *         See <a href="http://docs.aws.amazon.com/opensearch-service/latest/developerguide/createupdatedomains.html#createdomain-configure-advanced-options" target="_blank">Advanced cluster parameters
   *         </a> for more information.
   *       </li>
   *       <li>Option to specify the percentage of heap space allocated to field data. By default, this setting is
   *         unbounded.
   *       </li>
   *     </ul>
   *     <p>For more information, see <a href="http://docs.aws.amazon.com/opensearch-service/latest/developerguide/createupdatedomains.html#createdomain-configure-advanced-options">
   *       Advanced cluster parameters</a>.
   *     </p>
   */
  AdvancedOptions?: Record<string, string>;

  /**
   * <p>Specifies change details of the domain configuration change.</p>
   */
  ChangeProgressDetails?: ChangeProgressDetails;
}

/**
 * @internal
 */
export const AcceptInboundConnectionRequestFilterSensitiveLog = (obj: AcceptInboundConnectionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InboundConnectionStatusFilterSensitiveLog = (obj: InboundConnectionStatus): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AWSDomainInformationFilterSensitiveLog = (obj: AWSDomainInformation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DomainInformationContainerFilterSensitiveLog = (obj: DomainInformationContainer): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InboundConnectionFilterSensitiveLog = (obj: InboundConnection): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AcceptInboundConnectionResponseFilterSensitiveLog = (obj: AcceptInboundConnectionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OptionStatusFilterSensitiveLog = (obj: OptionStatus): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AccessPoliciesStatusFilterSensitiveLog = (obj: AccessPoliciesStatus): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AdditionalLimitFilterSensitiveLog = (obj: AdditionalLimit): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagFilterSensitiveLog = (obj: Tag): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AddTagsRequestFilterSensitiveLog = (obj: AddTagsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AdvancedOptionsStatusFilterSensitiveLog = (obj: AdvancedOptionsStatus): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SAMLIdpFilterSensitiveLog = (obj: SAMLIdp): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SAMLOptionsOutputFilterSensitiveLog = (obj: SAMLOptionsOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AdvancedSecurityOptionsFilterSensitiveLog = (obj: AdvancedSecurityOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MasterUserOptionsFilterSensitiveLog = (obj: MasterUserOptions): any => ({
  ...obj,
  ...(obj.MasterUserName && { MasterUserName: SENSITIVE_STRING }),
  ...(obj.MasterUserPassword && { MasterUserPassword: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const SAMLOptionsInputFilterSensitiveLog = (obj: SAMLOptionsInput): any => ({
  ...obj,
  ...(obj.MasterUserName && { MasterUserName: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const AdvancedSecurityOptionsInputFilterSensitiveLog = (obj: AdvancedSecurityOptionsInput): any => ({
  ...obj,
  ...(obj.MasterUserOptions && { MasterUserOptions: MasterUserOptionsFilterSensitiveLog(obj.MasterUserOptions) }),
  ...(obj.SAMLOptions && { SAMLOptions: SAMLOptionsInputFilterSensitiveLog(obj.SAMLOptions) }),
});

/**
 * @internal
 */
export const AdvancedSecurityOptionsStatusFilterSensitiveLog = (obj: AdvancedSecurityOptionsStatus): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociatePackageRequestFilterSensitiveLog = (obj: AssociatePackageRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ErrorDetailsFilterSensitiveLog = (obj: ErrorDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DomainPackageDetailsFilterSensitiveLog = (obj: DomainPackageDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociatePackageResponseFilterSensitiveLog = (obj: AssociatePackageResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CancelServiceSoftwareUpdateRequestFilterSensitiveLog = (obj: CancelServiceSoftwareUpdateRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ServiceSoftwareOptionsFilterSensitiveLog = (obj: ServiceSoftwareOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CancelServiceSoftwareUpdateResponseFilterSensitiveLog = (
  obj: CancelServiceSoftwareUpdateResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DurationFilterSensitiveLog = (obj: Duration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AutoTuneMaintenanceScheduleFilterSensitiveLog = (obj: AutoTuneMaintenanceSchedule): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AutoTuneOptionsInputFilterSensitiveLog = (obj: AutoTuneOptionsInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ColdStorageOptionsFilterSensitiveLog = (obj: ColdStorageOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ZoneAwarenessConfigFilterSensitiveLog = (obj: ZoneAwarenessConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ClusterConfigFilterSensitiveLog = (obj: ClusterConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CognitoOptionsFilterSensitiveLog = (obj: CognitoOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DomainEndpointOptionsFilterSensitiveLog = (obj: DomainEndpointOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EBSOptionsFilterSensitiveLog = (obj: EBSOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EncryptionAtRestOptionsFilterSensitiveLog = (obj: EncryptionAtRestOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LogPublishingOptionFilterSensitiveLog = (obj: LogPublishingOption): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NodeToNodeEncryptionOptionsFilterSensitiveLog = (obj: NodeToNodeEncryptionOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SnapshotOptionsFilterSensitiveLog = (obj: SnapshotOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VPCOptionsFilterSensitiveLog = (obj: VPCOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateDomainRequestFilterSensitiveLog = (obj: CreateDomainRequest): any => ({
  ...obj,
  ...(obj.AdvancedSecurityOptions && {
    AdvancedSecurityOptions: AdvancedSecurityOptionsInputFilterSensitiveLog(obj.AdvancedSecurityOptions),
  }),
});

/**
 * @internal
 */
export const AutoTuneOptionsOutputFilterSensitiveLog = (obj: AutoTuneOptionsOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ChangeProgressDetailsFilterSensitiveLog = (obj: ChangeProgressDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VPCDerivedInfoFilterSensitiveLog = (obj: VPCDerivedInfo): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DomainStatusFilterSensitiveLog = (obj: DomainStatus): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateDomainResponseFilterSensitiveLog = (obj: CreateDomainResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateOutboundConnectionRequestFilterSensitiveLog = (obj: CreateOutboundConnectionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OutboundConnectionStatusFilterSensitiveLog = (obj: OutboundConnectionStatus): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateOutboundConnectionResponseFilterSensitiveLog = (obj: CreateOutboundConnectionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PackageSourceFilterSensitiveLog = (obj: PackageSource): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreatePackageRequestFilterSensitiveLog = (obj: CreatePackageRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PackageDetailsFilterSensitiveLog = (obj: PackageDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreatePackageResponseFilterSensitiveLog = (obj: CreatePackageResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteDomainRequestFilterSensitiveLog = (obj: DeleteDomainRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteDomainResponseFilterSensitiveLog = (obj: DeleteDomainResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteInboundConnectionRequestFilterSensitiveLog = (obj: DeleteInboundConnectionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteInboundConnectionResponseFilterSensitiveLog = (obj: DeleteInboundConnectionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteOutboundConnectionRequestFilterSensitiveLog = (obj: DeleteOutboundConnectionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OutboundConnectionFilterSensitiveLog = (obj: OutboundConnection): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteOutboundConnectionResponseFilterSensitiveLog = (obj: DeleteOutboundConnectionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeletePackageRequestFilterSensitiveLog = (obj: DeletePackageRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeletePackageResponseFilterSensitiveLog = (obj: DeletePackageResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeDomainRequestFilterSensitiveLog = (obj: DescribeDomainRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeDomainResponseFilterSensitiveLog = (obj: DescribeDomainResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeDomainAutoTunesRequestFilterSensitiveLog = (obj: DescribeDomainAutoTunesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ScheduledAutoTuneDetailsFilterSensitiveLog = (obj: ScheduledAutoTuneDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AutoTuneDetailsFilterSensitiveLog = (obj: AutoTuneDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AutoTuneFilterSensitiveLog = (obj: AutoTune): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeDomainAutoTunesResponseFilterSensitiveLog = (obj: DescribeDomainAutoTunesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeDomainChangeProgressRequestFilterSensitiveLog = (
  obj: DescribeDomainChangeProgressRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ChangeProgressStageFilterSensitiveLog = (obj: ChangeProgressStage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ChangeProgressStatusDetailsFilterSensitiveLog = (obj: ChangeProgressStatusDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeDomainChangeProgressResponseFilterSensitiveLog = (
  obj: DescribeDomainChangeProgressResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeDomainConfigRequestFilterSensitiveLog = (obj: DescribeDomainConfigRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AutoTuneOptionsFilterSensitiveLog = (obj: AutoTuneOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AutoTuneStatusFilterSensitiveLog = (obj: AutoTuneStatus): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AutoTuneOptionsStatusFilterSensitiveLog = (obj: AutoTuneOptionsStatus): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ClusterConfigStatusFilterSensitiveLog = (obj: ClusterConfigStatus): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CognitoOptionsStatusFilterSensitiveLog = (obj: CognitoOptionsStatus): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DomainEndpointOptionsStatusFilterSensitiveLog = (obj: DomainEndpointOptionsStatus): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EBSOptionsStatusFilterSensitiveLog = (obj: EBSOptionsStatus): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EncryptionAtRestOptionsStatusFilterSensitiveLog = (obj: EncryptionAtRestOptionsStatus): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VersionStatusFilterSensitiveLog = (obj: VersionStatus): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LogPublishingOptionsStatusFilterSensitiveLog = (obj: LogPublishingOptionsStatus): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NodeToNodeEncryptionOptionsStatusFilterSensitiveLog = (obj: NodeToNodeEncryptionOptionsStatus): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SnapshotOptionsStatusFilterSensitiveLog = (obj: SnapshotOptionsStatus): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VPCDerivedInfoStatusFilterSensitiveLog = (obj: VPCDerivedInfoStatus): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DomainConfigFilterSensitiveLog = (obj: DomainConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeDomainConfigResponseFilterSensitiveLog = (obj: DescribeDomainConfigResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeDomainsRequestFilterSensitiveLog = (obj: DescribeDomainsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeDomainsResponseFilterSensitiveLog = (obj: DescribeDomainsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FilterFilterSensitiveLog = (obj: Filter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeInboundConnectionsRequestFilterSensitiveLog = (obj: DescribeInboundConnectionsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeInboundConnectionsResponseFilterSensitiveLog = (obj: DescribeInboundConnectionsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeInstanceTypeLimitsRequestFilterSensitiveLog = (obj: DescribeInstanceTypeLimitsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InstanceCountLimitsFilterSensitiveLog = (obj: InstanceCountLimits): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InstanceLimitsFilterSensitiveLog = (obj: InstanceLimits): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StorageTypeLimitFilterSensitiveLog = (obj: StorageTypeLimit): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StorageTypeFilterSensitiveLog = (obj: StorageType): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LimitsFilterSensitiveLog = (obj: Limits): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeInstanceTypeLimitsResponseFilterSensitiveLog = (obj: DescribeInstanceTypeLimitsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeOutboundConnectionsRequestFilterSensitiveLog = (obj: DescribeOutboundConnectionsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeOutboundConnectionsResponseFilterSensitiveLog = (
  obj: DescribeOutboundConnectionsResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribePackagesFilterFilterSensitiveLog = (obj: DescribePackagesFilter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribePackagesRequestFilterSensitiveLog = (obj: DescribePackagesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribePackagesResponseFilterSensitiveLog = (obj: DescribePackagesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeReservedInstanceOfferingsRequestFilterSensitiveLog = (
  obj: DescribeReservedInstanceOfferingsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RecurringChargeFilterSensitiveLog = (obj: RecurringCharge): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ReservedInstanceOfferingFilterSensitiveLog = (obj: ReservedInstanceOffering): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeReservedInstanceOfferingsResponseFilterSensitiveLog = (
  obj: DescribeReservedInstanceOfferingsResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeReservedInstancesRequestFilterSensitiveLog = (obj: DescribeReservedInstancesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ReservedInstanceFilterSensitiveLog = (obj: ReservedInstance): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeReservedInstancesResponseFilterSensitiveLog = (obj: DescribeReservedInstancesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DissociatePackageRequestFilterSensitiveLog = (obj: DissociatePackageRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DissociatePackageResponseFilterSensitiveLog = (obj: DissociatePackageResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetCompatibleVersionsRequestFilterSensitiveLog = (obj: GetCompatibleVersionsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CompatibleVersionsMapFilterSensitiveLog = (obj: CompatibleVersionsMap): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetCompatibleVersionsResponseFilterSensitiveLog = (obj: GetCompatibleVersionsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetPackageVersionHistoryRequestFilterSensitiveLog = (obj: GetPackageVersionHistoryRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PackageVersionHistoryFilterSensitiveLog = (obj: PackageVersionHistory): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetPackageVersionHistoryResponseFilterSensitiveLog = (obj: GetPackageVersionHistoryResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetUpgradeHistoryRequestFilterSensitiveLog = (obj: GetUpgradeHistoryRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpgradeStepItemFilterSensitiveLog = (obj: UpgradeStepItem): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpgradeHistoryFilterSensitiveLog = (obj: UpgradeHistory): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetUpgradeHistoryResponseFilterSensitiveLog = (obj: GetUpgradeHistoryResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetUpgradeStatusRequestFilterSensitiveLog = (obj: GetUpgradeStatusRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetUpgradeStatusResponseFilterSensitiveLog = (obj: GetUpgradeStatusResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDomainNamesRequestFilterSensitiveLog = (obj: ListDomainNamesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DomainInfoFilterSensitiveLog = (obj: DomainInfo): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDomainNamesResponseFilterSensitiveLog = (obj: ListDomainNamesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDomainsForPackageRequestFilterSensitiveLog = (obj: ListDomainsForPackageRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDomainsForPackageResponseFilterSensitiveLog = (obj: ListDomainsForPackageResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListInstanceTypeDetailsRequestFilterSensitiveLog = (obj: ListInstanceTypeDetailsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InstanceTypeDetailsFilterSensitiveLog = (obj: InstanceTypeDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListInstanceTypeDetailsResponseFilterSensitiveLog = (obj: ListInstanceTypeDetailsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListPackagesForDomainRequestFilterSensitiveLog = (obj: ListPackagesForDomainRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListPackagesForDomainResponseFilterSensitiveLog = (obj: ListPackagesForDomainResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsRequestFilterSensitiveLog = (obj: ListTagsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsResponseFilterSensitiveLog = (obj: ListTagsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListVersionsRequestFilterSensitiveLog = (obj: ListVersionsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListVersionsResponseFilterSensitiveLog = (obj: ListVersionsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PurchaseReservedInstanceOfferingRequestFilterSensitiveLog = (
  obj: PurchaseReservedInstanceOfferingRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PurchaseReservedInstanceOfferingResponseFilterSensitiveLog = (
  obj: PurchaseReservedInstanceOfferingResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RejectInboundConnectionRequestFilterSensitiveLog = (obj: RejectInboundConnectionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RejectInboundConnectionResponseFilterSensitiveLog = (obj: RejectInboundConnectionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RemoveTagsRequestFilterSensitiveLog = (obj: RemoveTagsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartServiceSoftwareUpdateRequestFilterSensitiveLog = (obj: StartServiceSoftwareUpdateRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartServiceSoftwareUpdateResponseFilterSensitiveLog = (obj: StartServiceSoftwareUpdateResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateDomainConfigRequestFilterSensitiveLog = (obj: UpdateDomainConfigRequest): any => ({
  ...obj,
  ...(obj.AdvancedSecurityOptions && {
    AdvancedSecurityOptions: AdvancedSecurityOptionsInputFilterSensitiveLog(obj.AdvancedSecurityOptions),
  }),
});

/**
 * @internal
 */
export const DryRunResultsFilterSensitiveLog = (obj: DryRunResults): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateDomainConfigResponseFilterSensitiveLog = (obj: UpdateDomainConfigResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdatePackageRequestFilterSensitiveLog = (obj: UpdatePackageRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdatePackageResponseFilterSensitiveLog = (obj: UpdatePackageResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpgradeDomainRequestFilterSensitiveLog = (obj: UpgradeDomainRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpgradeDomainResponseFilterSensitiveLog = (obj: UpgradeDomainResponse): any => ({
  ...obj,
});
