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

import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import {
  DeleteProvisioningTemplateRequest,
  DeleteProvisioningTemplateRequestFilterSensitiveLog,
  DeleteProvisioningTemplateResponse,
  DeleteProvisioningTemplateResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DeleteProvisioningTemplateCommand,
  serializeAws_restJson1DeleteProvisioningTemplateCommand,
} from "../protocols/Aws_restJson1";

export interface DeleteProvisioningTemplateCommandInput extends DeleteProvisioningTemplateRequest {}
export interface DeleteProvisioningTemplateCommandOutput extends DeleteProvisioningTemplateResponse, __MetadataBearer {}

/**
 * <p>Deletes a fleet provisioning template.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteProvisioningTemplate</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DeleteProvisioningTemplateCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DeleteProvisioningTemplateCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new DeleteProvisioningTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteProvisioningTemplateCommandInput} for command's `input` shape.
 * @see {@link DeleteProvisioningTemplateCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 */
export class DeleteProvisioningTemplateCommand extends $Command<
  DeleteProvisioningTemplateCommandInput,
  DeleteProvisioningTemplateCommandOutput,
  IoTClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteProvisioningTemplateCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteProvisioningTemplateCommandInput, DeleteProvisioningTemplateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "DeleteProvisioningTemplateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteProvisioningTemplateRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteProvisioningTemplateResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteProvisioningTemplateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteProvisioningTemplateCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteProvisioningTemplateCommandOutput> {
    return deserializeAws_restJson1DeleteProvisioningTemplateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
