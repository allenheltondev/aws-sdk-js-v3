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

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import {
  SearchTransitGatewayMulticastGroupsRequest,
  SearchTransitGatewayMulticastGroupsRequestFilterSensitiveLog,
  SearchTransitGatewayMulticastGroupsResult,
  SearchTransitGatewayMulticastGroupsResultFilterSensitiveLog,
} from "../models/models_6";
import {
  deserializeAws_ec2SearchTransitGatewayMulticastGroupsCommand,
  serializeAws_ec2SearchTransitGatewayMulticastGroupsCommand,
} from "../protocols/Aws_ec2";

export interface SearchTransitGatewayMulticastGroupsCommandInput extends SearchTransitGatewayMulticastGroupsRequest {}
export interface SearchTransitGatewayMulticastGroupsCommandOutput
  extends SearchTransitGatewayMulticastGroupsResult,
    __MetadataBearer {}

/**
 * <p>Searches one or more  transit gateway multicast groups and returns the group membership information.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, SearchTransitGatewayMulticastGroupsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, SearchTransitGatewayMulticastGroupsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new SearchTransitGatewayMulticastGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SearchTransitGatewayMulticastGroupsCommandInput} for command's `input` shape.
 * @see {@link SearchTransitGatewayMulticastGroupsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class SearchTransitGatewayMulticastGroupsCommand extends $Command<
  SearchTransitGatewayMulticastGroupsCommandInput,
  SearchTransitGatewayMulticastGroupsCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: SearchTransitGatewayMulticastGroupsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SearchTransitGatewayMulticastGroupsCommandInput, SearchTransitGatewayMulticastGroupsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "SearchTransitGatewayMulticastGroupsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SearchTransitGatewayMulticastGroupsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: SearchTransitGatewayMulticastGroupsResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: SearchTransitGatewayMulticastGroupsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2SearchTransitGatewayMulticastGroupsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<SearchTransitGatewayMulticastGroupsCommandOutput> {
    return deserializeAws_ec2SearchTransitGatewayMulticastGroupsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
