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
  UpdateProvisioningTemplateRequest,
  UpdateProvisioningTemplateRequestFilterSensitiveLog,
  UpdateProvisioningTemplateResponse,
  UpdateProvisioningTemplateResponseFilterSensitiveLog,
} from "../models/models_2";
import {
  deserializeAws_restJson1UpdateProvisioningTemplateCommand,
  serializeAws_restJson1UpdateProvisioningTemplateCommand,
} from "../protocols/Aws_restJson1";

export interface UpdateProvisioningTemplateCommandInput extends UpdateProvisioningTemplateRequest {}
export interface UpdateProvisioningTemplateCommandOutput extends UpdateProvisioningTemplateResponse, __MetadataBearer {}

/**
 * <p>Updates a fleet provisioning template.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateProvisioningTemplate</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, UpdateProvisioningTemplateCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, UpdateProvisioningTemplateCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new UpdateProvisioningTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateProvisioningTemplateCommandInput} for command's `input` shape.
 * @see {@link UpdateProvisioningTemplateCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 */
export class UpdateProvisioningTemplateCommand extends $Command<
  UpdateProvisioningTemplateCommandInput,
  UpdateProvisioningTemplateCommandOutput,
  IoTClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateProvisioningTemplateCommandInput) {
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
  ): Handler<UpdateProvisioningTemplateCommandInput, UpdateProvisioningTemplateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "UpdateProvisioningTemplateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateProvisioningTemplateRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateProvisioningTemplateResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateProvisioningTemplateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateProvisioningTemplateCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateProvisioningTemplateCommandOutput> {
    return deserializeAws_restJson1UpdateProvisioningTemplateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
