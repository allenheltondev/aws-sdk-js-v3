// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultRegionInfoProvider } from "./endpoints";
import { GlacierClientConfig } from "./GlacierClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: GlacierClientConfig) => ({
  apiVersion: "2012-06-01",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "Glacier",
  urlParser: config?.urlParser ?? parseUrl,
});
