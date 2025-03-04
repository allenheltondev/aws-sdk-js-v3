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

import { EventBridgeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EventBridgeClient";
import {
  ListEventBusesRequest,
  ListEventBusesRequestFilterSensitiveLog,
  ListEventBusesResponse,
  ListEventBusesResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListEventBusesCommand,
  serializeAws_json1_1ListEventBusesCommand,
} from "../protocols/Aws_json1_1";

export interface ListEventBusesCommandInput extends ListEventBusesRequest {}
export interface ListEventBusesCommandOutput extends ListEventBusesResponse, __MetadataBearer {}

/**
 * <p>Lists all the event buses in your account, including the default event bus, custom event
 *       buses, and partner event buses.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EventBridgeClient, ListEventBusesCommand } from "@aws-sdk/client-eventbridge"; // ES Modules import
 * // const { EventBridgeClient, ListEventBusesCommand } = require("@aws-sdk/client-eventbridge"); // CommonJS import
 * const client = new EventBridgeClient(config);
 * const command = new ListEventBusesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListEventBusesCommandInput} for command's `input` shape.
 * @see {@link ListEventBusesCommandOutput} for command's `response` shape.
 * @see {@link EventBridgeClientResolvedConfig | config} for EventBridgeClient's `config` shape.
 *
 */
export class ListEventBusesCommand extends $Command<
  ListEventBusesCommandInput,
  ListEventBusesCommandOutput,
  EventBridgeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListEventBusesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EventBridgeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListEventBusesCommandInput, ListEventBusesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EventBridgeClient";
    const commandName = "ListEventBusesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListEventBusesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListEventBusesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListEventBusesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListEventBusesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListEventBusesCommandOutput> {
    return deserializeAws_json1_1ListEventBusesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
