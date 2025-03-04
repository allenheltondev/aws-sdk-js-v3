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

import { CloudWatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchClient";
import {
  ListMetricsInput,
  ListMetricsInputFilterSensitiveLog,
  ListMetricsOutput,
  ListMetricsOutputFilterSensitiveLog,
} from "../models/models_0";
import { deserializeAws_queryListMetricsCommand, serializeAws_queryListMetricsCommand } from "../protocols/Aws_query";

export interface ListMetricsCommandInput extends ListMetricsInput {}
export interface ListMetricsCommandOutput extends ListMetricsOutput, __MetadataBearer {}

/**
 * <p>List the specified metrics. You can use the returned metrics with
 * 			<a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetMetricData.html">GetMetricData</a> or
 * 			<a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetMetricStatistics.html">GetMetricStatistics</a> to obtain statistical data.</p>
 * 		       <p>Up to 500 results are returned for any one call. To retrieve additional results,
 * 			use the returned token with subsequent calls.</p>
 * 		       <p>After you create a metric, allow up to 15 minutes before the metric appears.
 * 			You can see statistics about the metric sooner by using <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetMetricData.html">GetMetricData</a> or
 * 			<a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetMetricStatistics.html">GetMetricStatistics</a>.</p>
 *
 * 	        <p>
 *             <code>ListMetrics</code> doesn't return information about metrics if those metrics haven't
 * 	reported data in the past two weeks. To retrieve those metrics, use
 * 		<a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetMetricData.html">GetMetricData</a> or
 * 		<a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetMetricStatistics.html">GetMetricStatistics</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchClient, ListMetricsCommand } from "@aws-sdk/client-cloudwatch"; // ES Modules import
 * // const { CloudWatchClient, ListMetricsCommand } = require("@aws-sdk/client-cloudwatch"); // CommonJS import
 * const client = new CloudWatchClient(config);
 * const command = new ListMetricsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListMetricsCommandInput} for command's `input` shape.
 * @see {@link ListMetricsCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchClientResolvedConfig | config} for CloudWatchClient's `config` shape.
 *
 */
export class ListMetricsCommand extends $Command<
  ListMetricsCommandInput,
  ListMetricsCommandOutput,
  CloudWatchClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListMetricsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudWatchClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListMetricsCommandInput, ListMetricsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudWatchClient";
    const commandName = "ListMetricsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListMetricsInputFilterSensitiveLog,
      outputFilterSensitiveLog: ListMetricsOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListMetricsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryListMetricsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListMetricsCommandOutput> {
    return deserializeAws_queryListMetricsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
