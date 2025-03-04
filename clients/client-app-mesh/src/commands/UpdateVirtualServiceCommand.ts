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

import { AppMeshClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppMeshClient";
import {
  UpdateVirtualServiceInput,
  UpdateVirtualServiceInputFilterSensitiveLog,
  UpdateVirtualServiceOutput,
  UpdateVirtualServiceOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1UpdateVirtualServiceCommand,
  serializeAws_restJson1UpdateVirtualServiceCommand,
} from "../protocols/Aws_restJson1";

export interface UpdateVirtualServiceCommandInput extends UpdateVirtualServiceInput {}
export interface UpdateVirtualServiceCommandOutput extends UpdateVirtualServiceOutput, __MetadataBearer {}

/**
 * <p>Updates an existing virtual service in a specified service mesh.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppMeshClient, UpdateVirtualServiceCommand } from "@aws-sdk/client-app-mesh"; // ES Modules import
 * // const { AppMeshClient, UpdateVirtualServiceCommand } = require("@aws-sdk/client-app-mesh"); // CommonJS import
 * const client = new AppMeshClient(config);
 * const command = new UpdateVirtualServiceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateVirtualServiceCommandInput} for command's `input` shape.
 * @see {@link UpdateVirtualServiceCommandOutput} for command's `response` shape.
 * @see {@link AppMeshClientResolvedConfig | config} for AppMeshClient's `config` shape.
 *
 */
export class UpdateVirtualServiceCommand extends $Command<
  UpdateVirtualServiceCommandInput,
  UpdateVirtualServiceCommandOutput,
  AppMeshClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateVirtualServiceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppMeshClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateVirtualServiceCommandInput, UpdateVirtualServiceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppMeshClient";
    const commandName = "UpdateVirtualServiceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateVirtualServiceInputFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateVirtualServiceOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateVirtualServiceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateVirtualServiceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateVirtualServiceCommandOutput> {
    return deserializeAws_restJson1UpdateVirtualServiceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
