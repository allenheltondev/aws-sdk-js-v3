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
  UpdateApnsSandboxChannelRequest,
  UpdateApnsSandboxChannelRequestFilterSensitiveLog,
  UpdateApnsSandboxChannelResponse,
  UpdateApnsSandboxChannelResponseFilterSensitiveLog,
} from "../models/models_1";
import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import {
  deserializeAws_restJson1UpdateApnsSandboxChannelCommand,
  serializeAws_restJson1UpdateApnsSandboxChannelCommand,
} from "../protocols/Aws_restJson1";

export interface UpdateApnsSandboxChannelCommandInput extends UpdateApnsSandboxChannelRequest {}
export interface UpdateApnsSandboxChannelCommandOutput extends UpdateApnsSandboxChannelResponse, __MetadataBearer {}

/**
 * <p>Enables the APNs sandbox channel for an application or updates the status and settings of the APNs sandbox channel for an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, UpdateApnsSandboxChannelCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, UpdateApnsSandboxChannelCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new UpdateApnsSandboxChannelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateApnsSandboxChannelCommandInput} for command's `input` shape.
 * @see {@link UpdateApnsSandboxChannelCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for PinpointClient's `config` shape.
 *
 */
export class UpdateApnsSandboxChannelCommand extends $Command<
  UpdateApnsSandboxChannelCommandInput,
  UpdateApnsSandboxChannelCommandOutput,
  PinpointClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateApnsSandboxChannelCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PinpointClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateApnsSandboxChannelCommandInput, UpdateApnsSandboxChannelCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PinpointClient";
    const commandName = "UpdateApnsSandboxChannelCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateApnsSandboxChannelRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateApnsSandboxChannelResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateApnsSandboxChannelCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateApnsSandboxChannelCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateApnsSandboxChannelCommandOutput> {
    return deserializeAws_restJson1UpdateApnsSandboxChannelCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
