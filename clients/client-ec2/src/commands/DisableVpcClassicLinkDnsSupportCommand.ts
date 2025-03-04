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
  DisableVpcClassicLinkDnsSupportRequest,
  DisableVpcClassicLinkDnsSupportRequestFilterSensitiveLog,
  DisableVpcClassicLinkDnsSupportResult,
  DisableVpcClassicLinkDnsSupportResultFilterSensitiveLog,
} from "../models/models_4";
import {
  deserializeAws_ec2DisableVpcClassicLinkDnsSupportCommand,
  serializeAws_ec2DisableVpcClassicLinkDnsSupportCommand,
} from "../protocols/Aws_ec2";

export interface DisableVpcClassicLinkDnsSupportCommandInput extends DisableVpcClassicLinkDnsSupportRequest {}
export interface DisableVpcClassicLinkDnsSupportCommandOutput
  extends DisableVpcClassicLinkDnsSupportResult,
    __MetadataBearer {}

/**
 * <p>Disables ClassicLink DNS support for a VPC. If disabled, DNS hostnames resolve to
 * 			public IP addresses when addressed between a linked EC2-Classic instance and instances
 * 			in the VPC to which it's linked. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-classiclink.html">ClassicLink</a> in the
 * 				<i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 *          <p>You must specify a VPC ID in the request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DisableVpcClassicLinkDnsSupportCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DisableVpcClassicLinkDnsSupportCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DisableVpcClassicLinkDnsSupportCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisableVpcClassicLinkDnsSupportCommandInput} for command's `input` shape.
 * @see {@link DisableVpcClassicLinkDnsSupportCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class DisableVpcClassicLinkDnsSupportCommand extends $Command<
  DisableVpcClassicLinkDnsSupportCommandInput,
  DisableVpcClassicLinkDnsSupportCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DisableVpcClassicLinkDnsSupportCommandInput) {
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
  ): Handler<DisableVpcClassicLinkDnsSupportCommandInput, DisableVpcClassicLinkDnsSupportCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DisableVpcClassicLinkDnsSupportCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisableVpcClassicLinkDnsSupportRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DisableVpcClassicLinkDnsSupportResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DisableVpcClassicLinkDnsSupportCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2DisableVpcClassicLinkDnsSupportCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisableVpcClassicLinkDnsSupportCommandOutput> {
    return deserializeAws_ec2DisableVpcClassicLinkDnsSupportCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
