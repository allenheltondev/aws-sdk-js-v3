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
  DescribeClassicLinkInstancesRequest,
  DescribeClassicLinkInstancesRequestFilterSensitiveLog,
  DescribeClassicLinkInstancesResult,
  DescribeClassicLinkInstancesResultFilterSensitiveLog,
} from "../models/models_2";
import {
  deserializeAws_ec2DescribeClassicLinkInstancesCommand,
  serializeAws_ec2DescribeClassicLinkInstancesCommand,
} from "../protocols/Aws_ec2";

export interface DescribeClassicLinkInstancesCommandInput extends DescribeClassicLinkInstancesRequest {}
export interface DescribeClassicLinkInstancesCommandOutput
  extends DescribeClassicLinkInstancesResult,
    __MetadataBearer {}

/**
 * <p>Describes one or more of your linked EC2-Classic instances. This request only returns
 * 			information about EC2-Classic instances linked to a VPC through ClassicLink. You cannot
 * 			use this request to return information about other instances.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeClassicLinkInstancesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeClassicLinkInstancesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeClassicLinkInstancesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeClassicLinkInstancesCommandInput} for command's `input` shape.
 * @see {@link DescribeClassicLinkInstancesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class DescribeClassicLinkInstancesCommand extends $Command<
  DescribeClassicLinkInstancesCommandInput,
  DescribeClassicLinkInstancesCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeClassicLinkInstancesCommandInput) {
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
  ): Handler<DescribeClassicLinkInstancesCommandInput, DescribeClassicLinkInstancesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeClassicLinkInstancesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeClassicLinkInstancesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeClassicLinkInstancesResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeClassicLinkInstancesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2DescribeClassicLinkInstancesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeClassicLinkInstancesCommandOutput> {
    return deserializeAws_ec2DescribeClassicLinkInstancesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
