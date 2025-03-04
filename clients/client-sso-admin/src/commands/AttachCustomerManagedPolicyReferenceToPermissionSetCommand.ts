// smithy-typescript generated code
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  AttachCustomerManagedPolicyReferenceToPermissionSetRequest,
  AttachCustomerManagedPolicyReferenceToPermissionSetRequestFilterSensitiveLog,
  AttachCustomerManagedPolicyReferenceToPermissionSetResponse,
  AttachCustomerManagedPolicyReferenceToPermissionSetResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1AttachCustomerManagedPolicyReferenceToPermissionSetCommand,
  serializeAws_json1_1AttachCustomerManagedPolicyReferenceToPermissionSetCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSOAdminClientResolvedConfig } from "../SSOAdminClient";

export interface AttachCustomerManagedPolicyReferenceToPermissionSetCommandInput
  extends AttachCustomerManagedPolicyReferenceToPermissionSetRequest {}
export interface AttachCustomerManagedPolicyReferenceToPermissionSetCommandOutput
  extends AttachCustomerManagedPolicyReferenceToPermissionSetResponse,
    __MetadataBearer {}

/**
 * <p>Attaches the specified IAM customer managed policy to the specified <a>PermissionSet</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, AttachCustomerManagedPolicyReferenceToPermissionSetCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, AttachCustomerManagedPolicyReferenceToPermissionSetCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * const client = new SSOAdminClient(config);
 * const command = new AttachCustomerManagedPolicyReferenceToPermissionSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AttachCustomerManagedPolicyReferenceToPermissionSetCommandInput} for command's `input` shape.
 * @see {@link AttachCustomerManagedPolicyReferenceToPermissionSetCommandOutput} for command's `response` shape.
 * @see {@link SSOAdminClientResolvedConfig | config} for SSOAdminClient's `config` shape.
 *
 */
export class AttachCustomerManagedPolicyReferenceToPermissionSetCommand extends $Command<
  AttachCustomerManagedPolicyReferenceToPermissionSetCommandInput,
  AttachCustomerManagedPolicyReferenceToPermissionSetCommandOutput,
  SSOAdminClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AttachCustomerManagedPolicyReferenceToPermissionSetCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSOAdminClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    AttachCustomerManagedPolicyReferenceToPermissionSetCommandInput,
    AttachCustomerManagedPolicyReferenceToPermissionSetCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSOAdminClient";
    const commandName = "AttachCustomerManagedPolicyReferenceToPermissionSetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AttachCustomerManagedPolicyReferenceToPermissionSetRequestFilterSensitiveLog,
      outputFilterSensitiveLog: AttachCustomerManagedPolicyReferenceToPermissionSetResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: AttachCustomerManagedPolicyReferenceToPermissionSetCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1AttachCustomerManagedPolicyReferenceToPermissionSetCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AttachCustomerManagedPolicyReferenceToPermissionSetCommandOutput> {
    return deserializeAws_json1_1AttachCustomerManagedPolicyReferenceToPermissionSetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
