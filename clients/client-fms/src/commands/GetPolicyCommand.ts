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

import { FMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FMSClient";
import {
  GetPolicyRequest,
  GetPolicyRequestFilterSensitiveLog,
  GetPolicyResponse,
  GetPolicyResponseFilterSensitiveLog,
} from "../models/models_0";
import { deserializeAws_json1_1GetPolicyCommand, serializeAws_json1_1GetPolicyCommand } from "../protocols/Aws_json1_1";

export interface GetPolicyCommandInput extends GetPolicyRequest {}
export interface GetPolicyCommandOutput extends GetPolicyResponse, __MetadataBearer {}

/**
 * <p>Returns information about the specified Firewall Manager policy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FMSClient, GetPolicyCommand } from "@aws-sdk/client-fms"; // ES Modules import
 * // const { FMSClient, GetPolicyCommand } = require("@aws-sdk/client-fms"); // CommonJS import
 * const client = new FMSClient(config);
 * const command = new GetPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetPolicyCommandInput} for command's `input` shape.
 * @see {@link GetPolicyCommandOutput} for command's `response` shape.
 * @see {@link FMSClientResolvedConfig | config} for FMSClient's `config` shape.
 *
 */
export class GetPolicyCommand extends $Command<GetPolicyCommandInput, GetPolicyCommandOutput, FMSClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetPolicyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FMSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetPolicyCommandInput, GetPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FMSClient";
    const commandName = "GetPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetPolicyRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetPolicyResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetPolicyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetPolicyCommandOutput> {
    return deserializeAws_json1_1GetPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
