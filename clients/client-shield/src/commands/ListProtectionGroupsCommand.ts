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
  ListProtectionGroupsRequest,
  ListProtectionGroupsRequestFilterSensitiveLog,
  ListProtectionGroupsResponse,
  ListProtectionGroupsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListProtectionGroupsCommand,
  serializeAws_json1_1ListProtectionGroupsCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, ShieldClientResolvedConfig } from "../ShieldClient";

export interface ListProtectionGroupsCommandInput extends ListProtectionGroupsRequest {}
export interface ListProtectionGroupsCommandOutput extends ListProtectionGroupsResponse, __MetadataBearer {}

/**
 * <p>Retrieves the <a>ProtectionGroup</a> objects for the account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ShieldClient, ListProtectionGroupsCommand } from "@aws-sdk/client-shield"; // ES Modules import
 * // const { ShieldClient, ListProtectionGroupsCommand } = require("@aws-sdk/client-shield"); // CommonJS import
 * const client = new ShieldClient(config);
 * const command = new ListProtectionGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListProtectionGroupsCommandInput} for command's `input` shape.
 * @see {@link ListProtectionGroupsCommandOutput} for command's `response` shape.
 * @see {@link ShieldClientResolvedConfig | config} for ShieldClient's `config` shape.
 *
 */
export class ListProtectionGroupsCommand extends $Command<
  ListProtectionGroupsCommandInput,
  ListProtectionGroupsCommandOutput,
  ShieldClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListProtectionGroupsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ShieldClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListProtectionGroupsCommandInput, ListProtectionGroupsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ShieldClient";
    const commandName = "ListProtectionGroupsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListProtectionGroupsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListProtectionGroupsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListProtectionGroupsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListProtectionGroupsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListProtectionGroupsCommandOutput> {
    return deserializeAws_json1_1ListProtectionGroupsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
