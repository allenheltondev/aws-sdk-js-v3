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

import { CodePipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodePipelineClient";
import {
  ListActionTypesInput,
  ListActionTypesInputFilterSensitiveLog,
  ListActionTypesOutput,
  ListActionTypesOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListActionTypesCommand,
  serializeAws_json1_1ListActionTypesCommand,
} from "../protocols/Aws_json1_1";

export interface ListActionTypesCommandInput extends ListActionTypesInput {}
export interface ListActionTypesCommandOutput extends ListActionTypesOutput, __MetadataBearer {}

/**
 * <p>Gets a summary of all AWS CodePipeline action types associated with your
 *             account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodePipelineClient, ListActionTypesCommand } from "@aws-sdk/client-codepipeline"; // ES Modules import
 * // const { CodePipelineClient, ListActionTypesCommand } = require("@aws-sdk/client-codepipeline"); // CommonJS import
 * const client = new CodePipelineClient(config);
 * const command = new ListActionTypesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListActionTypesCommandInput} for command's `input` shape.
 * @see {@link ListActionTypesCommandOutput} for command's `response` shape.
 * @see {@link CodePipelineClientResolvedConfig | config} for CodePipelineClient's `config` shape.
 *
 */
export class ListActionTypesCommand extends $Command<
  ListActionTypesCommandInput,
  ListActionTypesCommandOutput,
  CodePipelineClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListActionTypesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodePipelineClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListActionTypesCommandInput, ListActionTypesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodePipelineClient";
    const commandName = "ListActionTypesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListActionTypesInputFilterSensitiveLog,
      outputFilterSensitiveLog: ListActionTypesOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListActionTypesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListActionTypesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListActionTypesCommandOutput> {
    return deserializeAws_json1_1ListActionTypesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
