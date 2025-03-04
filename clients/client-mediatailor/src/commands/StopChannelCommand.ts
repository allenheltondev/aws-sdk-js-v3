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

import { MediaTailorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaTailorClient";
import {
  StopChannelRequest,
  StopChannelRequestFilterSensitiveLog,
  StopChannelResponse,
  StopChannelResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1StopChannelCommand,
  serializeAws_restJson1StopChannelCommand,
} from "../protocols/Aws_restJson1";

export interface StopChannelCommandInput extends StopChannelRequest {}
export interface StopChannelCommandOutput extends StopChannelResponse, __MetadataBearer {}

/**
 * <p>Stops a specific channel.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaTailorClient, StopChannelCommand } from "@aws-sdk/client-mediatailor"; // ES Modules import
 * // const { MediaTailorClient, StopChannelCommand } = require("@aws-sdk/client-mediatailor"); // CommonJS import
 * const client = new MediaTailorClient(config);
 * const command = new StopChannelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopChannelCommandInput} for command's `input` shape.
 * @see {@link StopChannelCommandOutput} for command's `response` shape.
 * @see {@link MediaTailorClientResolvedConfig | config} for MediaTailorClient's `config` shape.
 *
 */
export class StopChannelCommand extends $Command<
  StopChannelCommandInput,
  StopChannelCommandOutput,
  MediaTailorClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StopChannelCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MediaTailorClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StopChannelCommandInput, StopChannelCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaTailorClient";
    const commandName = "StopChannelCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StopChannelRequestFilterSensitiveLog,
      outputFilterSensitiveLog: StopChannelResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StopChannelCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1StopChannelCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StopChannelCommandOutput> {
    return deserializeAws_restJson1StopChannelCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
