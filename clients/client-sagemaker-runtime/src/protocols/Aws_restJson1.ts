// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  InvokeEndpointAsyncCommandInput,
  InvokeEndpointAsyncCommandOutput,
} from "../commands/InvokeEndpointAsyncCommand";
import { InvokeEndpointCommandInput, InvokeEndpointCommandOutput } from "../commands/InvokeEndpointCommand";
import {
  InternalDependencyException,
  InternalFailure,
  ModelError,
  ModelNotReadyException,
  ServiceUnavailable,
  ValidationError,
} from "../models/models_0";
import { SageMakerRuntimeServiceException as __BaseException } from "../models/SageMakerRuntimeServiceException";

export const serializeAws_restJson1InvokeEndpointCommand = async (
  input: InvokeEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/octet-stream",
    ...(isSerializableHeaderValue(input.ContentType) && { "content-type": input.ContentType! }),
    ...(isSerializableHeaderValue(input.Accept) && { accept: input.Accept! }),
    ...(isSerializableHeaderValue(input.CustomAttributes) && {
      "x-amzn-sagemaker-custom-attributes": input.CustomAttributes!,
    }),
    ...(isSerializableHeaderValue(input.TargetModel) && { "x-amzn-sagemaker-target-model": input.TargetModel! }),
    ...(isSerializableHeaderValue(input.TargetVariant) && { "x-amzn-sagemaker-target-variant": input.TargetVariant! }),
    ...(isSerializableHeaderValue(input.TargetContainerHostname) && {
      "x-amzn-sagemaker-target-container-hostname": input.TargetContainerHostname!,
    }),
    ...(isSerializableHeaderValue(input.InferenceId) && { "x-amzn-sagemaker-inference-id": input.InferenceId! }),
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/endpoints/{EndpointName}/invocations";
  if (input.EndpointName !== undefined) {
    const labelValue: string = input.EndpointName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: EndpointName.");
    }
    resolvedPath = resolvedPath.replace("{EndpointName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: EndpointName.");
  }
  let body: any;
  if (input.Body !== undefined) {
    body = input.Body;
  }
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1InvokeEndpointAsyncCommand = async (
  input: InvokeEndpointAsyncCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    ...(isSerializableHeaderValue(input.ContentType) && { "x-amzn-sagemaker-content-type": input.ContentType! }),
    ...(isSerializableHeaderValue(input.Accept) && { "x-amzn-sagemaker-accept": input.Accept! }),
    ...(isSerializableHeaderValue(input.CustomAttributes) && {
      "x-amzn-sagemaker-custom-attributes": input.CustomAttributes!,
    }),
    ...(isSerializableHeaderValue(input.InferenceId) && { "x-amzn-sagemaker-inference-id": input.InferenceId! }),
    ...(isSerializableHeaderValue(input.InputLocation) && { "x-amzn-sagemaker-inputlocation": input.InputLocation! }),
    ...(isSerializableHeaderValue(input.RequestTTLSeconds) && {
      "x-amzn-sagemaker-requestttlseconds": input.RequestTTLSeconds!.toString(),
    }),
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/endpoints/{EndpointName}/async-invocations";
  if (input.EndpointName !== undefined) {
    const labelValue: string = input.EndpointName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: EndpointName.");
    }
    resolvedPath = resolvedPath.replace("{EndpointName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: EndpointName.");
  }
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const deserializeAws_restJson1InvokeEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InvokeEndpointCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1InvokeEndpointCommandError(output, context);
  }
  const contents: InvokeEndpointCommandOutput = {
    $metadata: deserializeMetadata(output),
    Body: undefined,
    ContentType: undefined,
    CustomAttributes: undefined,
    InvokedProductionVariant: undefined,
  };
  if (output.headers["content-type"] !== undefined) {
    contents.ContentType = output.headers["content-type"];
  }
  if (output.headers["x-amzn-invoked-production-variant"] !== undefined) {
    contents.InvokedProductionVariant = output.headers["x-amzn-invoked-production-variant"];
  }
  if (output.headers["x-amzn-sagemaker-custom-attributes"] !== undefined) {
    contents.CustomAttributes = output.headers["x-amzn-sagemaker-custom-attributes"];
  }
  const data: any = await collectBody(output.body, context);
  contents.Body = data;
  return Promise.resolve(contents);
};

const deserializeAws_restJson1InvokeEndpointCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InvokeEndpointCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalDependencyException":
    case "com.amazonaws.sagemakerruntime#InternalDependencyException":
      throw await deserializeAws_restJson1InternalDependencyExceptionResponse(parsedOutput, context);
    case "InternalFailure":
    case "com.amazonaws.sagemakerruntime#InternalFailure":
      throw await deserializeAws_restJson1InternalFailureResponse(parsedOutput, context);
    case "ModelError":
    case "com.amazonaws.sagemakerruntime#ModelError":
      throw await deserializeAws_restJson1ModelErrorResponse(parsedOutput, context);
    case "ModelNotReadyException":
    case "com.amazonaws.sagemakerruntime#ModelNotReadyException":
      throw await deserializeAws_restJson1ModelNotReadyExceptionResponse(parsedOutput, context);
    case "ServiceUnavailable":
    case "com.amazonaws.sagemakerruntime#ServiceUnavailable":
      throw await deserializeAws_restJson1ServiceUnavailableResponse(parsedOutput, context);
    case "ValidationError":
    case "com.amazonaws.sagemakerruntime#ValidationError":
      throw await deserializeAws_restJson1ValidationErrorResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1InvokeEndpointAsyncCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InvokeEndpointAsyncCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1InvokeEndpointAsyncCommandError(output, context);
  }
  const contents: InvokeEndpointAsyncCommandOutput = {
    $metadata: deserializeMetadata(output),
    InferenceId: undefined,
    OutputLocation: undefined,
  };
  if (output.headers["x-amzn-sagemaker-outputlocation"] !== undefined) {
    contents.OutputLocation = output.headers["x-amzn-sagemaker-outputlocation"];
  }
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.InferenceId !== undefined && data.InferenceId !== null) {
    contents.InferenceId = __expectString(data.InferenceId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1InvokeEndpointAsyncCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InvokeEndpointAsyncCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailure":
    case "com.amazonaws.sagemakerruntime#InternalFailure":
      throw await deserializeAws_restJson1InternalFailureResponse(parsedOutput, context);
    case "ServiceUnavailable":
    case "com.amazonaws.sagemakerruntime#ServiceUnavailable":
      throw await deserializeAws_restJson1ServiceUnavailableResponse(parsedOutput, context);
    case "ValidationError":
    case "com.amazonaws.sagemakerruntime#ValidationError":
      throw await deserializeAws_restJson1ValidationErrorResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

const deserializeAws_restJson1InternalDependencyExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalDependencyException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new InternalDependencyException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1InternalFailureResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalFailure> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new InternalFailure({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ModelErrorResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ModelError> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.LogStreamArn !== undefined && data.LogStreamArn !== null) {
    contents.LogStreamArn = __expectString(data.LogStreamArn);
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.OriginalMessage !== undefined && data.OriginalMessage !== null) {
    contents.OriginalMessage = __expectString(data.OriginalMessage);
  }
  if (data.OriginalStatusCode !== undefined && data.OriginalStatusCode !== null) {
    contents.OriginalStatusCode = __expectInt32(data.OriginalStatusCode);
  }
  const exception = new ModelError({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ModelNotReadyExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ModelNotReadyException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new ModelNotReadyException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ServiceUnavailableResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceUnavailable> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new ServiceUnavailable({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ValidationErrorResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ValidationError> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new ValidationError({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (streamBody: any = new Uint8Array(), context: __SerdeContext): Promise<Uint8Array> => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));

const isSerializableHeaderValue = (value: any): boolean =>
  value !== undefined &&
  value !== null &&
  value !== "" &&
  (!Object.getOwnPropertyNames(value).includes("length") || value.length != 0) &&
  (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string | undefined => {
  const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string | number): string => {
    let cleanValue = rawValue;
    if (typeof cleanValue === "number") {
      cleanValue = cleanValue.toString();
    }
    if (cleanValue.indexOf(":") >= 0) {
      cleanValue = cleanValue.split(":")[0];
    }
    if (cleanValue.indexOf("#") >= 0) {
      cleanValue = cleanValue.split("#")[1];
    }
    return cleanValue;
  };

  const headerKey = findKey(output.headers, "x-amzn-errortype");
  if (headerKey !== undefined) {
    return sanitizeErrorCode(output.headers[headerKey]);
  }

  if (data.code !== undefined) {
    return sanitizeErrorCode(data.code);
  }

  if (data["__type"] !== undefined) {
    return sanitizeErrorCode(data["__type"]);
  }
};
