// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  parseEpochTimestamp as __parseEpochTimestamp,
  parseRfc7231DateTime as __parseRfc7231DateTime,
  strictParseLong as __strictParseLong,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { DeleteObjectCommandInput, DeleteObjectCommandOutput } from "../commands/DeleteObjectCommand";
import { DescribeObjectCommandInput, DescribeObjectCommandOutput } from "../commands/DescribeObjectCommand";
import { GetObjectCommandInput, GetObjectCommandOutput } from "../commands/GetObjectCommand";
import { ListItemsCommandInput, ListItemsCommandOutput } from "../commands/ListItemsCommand";
import { PutObjectCommandInput, PutObjectCommandOutput } from "../commands/PutObjectCommand";
import { MediaStoreDataServiceException as __BaseException } from "../models/MediaStoreDataServiceException";
import {
  ContainerNotFoundException,
  InternalServerError,
  Item,
  ObjectNotFoundException,
  RequestedRangeNotSatisfiableException,
} from "../models/models_0";

export const serializeAws_restJson1DeleteObjectCommand = async (
  input: DeleteObjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/{Path+}";
  if (input.Path !== undefined) {
    const labelValue: string = input.Path;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Path.");
    }
    resolvedPath = resolvedPath.replace(
      "{Path+}",
      labelValue
        .split("/")
        .map((segment) => __extendedEncodeURIComponent(segment))
        .join("/")
    );
  } else {
    throw new Error("No value provided for input HTTP label: Path.");
  }
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DescribeObjectCommand = async (
  input: DescribeObjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/{Path+}";
  if (input.Path !== undefined) {
    const labelValue: string = input.Path;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Path.");
    }
    resolvedPath = resolvedPath.replace(
      "{Path+}",
      labelValue
        .split("/")
        .map((segment) => __extendedEncodeURIComponent(segment))
        .join("/")
    );
  } else {
    throw new Error("No value provided for input HTTP label: Path.");
  }
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "HEAD",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetObjectCommand = async (
  input: GetObjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    ...(isSerializableHeaderValue(input.Range) && { range: input.Range! }),
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/{Path+}";
  if (input.Path !== undefined) {
    const labelValue: string = input.Path;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Path.");
    }
    resolvedPath = resolvedPath.replace(
      "{Path+}",
      labelValue
        .split("/")
        .map((segment) => __extendedEncodeURIComponent(segment))
        .join("/")
    );
  } else {
    throw new Error("No value provided for input HTTP label: Path.");
  }
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1ListItemsCommand = async (
  input: ListItemsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/";
  const query: any = {
    ...(input.Path !== undefined && { Path: input.Path }),
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults.toString() }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
  };
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1PutObjectCommand = async (
  input: PutObjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/octet-stream",
    "x-amz-content-sha256": "UNSIGNED-PAYLOAD",
    ...(isSerializableHeaderValue(input.ContentType) && { "content-type": input.ContentType! }),
    ...(isSerializableHeaderValue(input.CacheControl) && { "cache-control": input.CacheControl! }),
    ...(isSerializableHeaderValue(input.StorageClass) && { "x-amz-storage-class": input.StorageClass! }),
    ...(isSerializableHeaderValue(input.UploadAvailability) && {
      "x-amz-upload-availability": input.UploadAvailability!,
    }),
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/{Path+}";
  if (input.Path !== undefined) {
    const labelValue: string = input.Path;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Path.");
    }
    resolvedPath = resolvedPath.replace(
      "{Path+}",
      labelValue
        .split("/")
        .map((segment) => __extendedEncodeURIComponent(segment))
        .join("/")
    );
  } else {
    throw new Error("No value provided for input HTTP label: Path.");
  }
  let body: any;
  if (input.Body !== undefined) {
    body = input.Body;
  }
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const deserializeAws_restJson1DeleteObjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteObjectCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteObjectCommandError(output, context);
  }
  const contents: DeleteObjectCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteObjectCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteObjectCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ContainerNotFoundException":
    case "com.amazonaws.mediastoredata#ContainerNotFoundException":
      throw await deserializeAws_restJson1ContainerNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.mediastoredata#InternalServerError":
      throw await deserializeAws_restJson1InternalServerErrorResponse(parsedOutput, context);
    case "ObjectNotFoundException":
    case "com.amazonaws.mediastoredata#ObjectNotFoundException":
      throw await deserializeAws_restJson1ObjectNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DescribeObjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeObjectCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeObjectCommandError(output, context);
  }
  const contents: DescribeObjectCommandOutput = {
    $metadata: deserializeMetadata(output),
    CacheControl: undefined,
    ContentLength: undefined,
    ContentType: undefined,
    ETag: undefined,
    LastModified: undefined,
  };
  if (output.headers["etag"] !== undefined) {
    contents.ETag = output.headers["etag"];
  }
  if (output.headers["content-type"] !== undefined) {
    contents.ContentType = output.headers["content-type"];
  }
  if (output.headers["content-length"] !== undefined) {
    contents.ContentLength = __strictParseLong(output.headers["content-length"]);
  }
  if (output.headers["cache-control"] !== undefined) {
    contents.CacheControl = output.headers["cache-control"];
  }
  if (output.headers["last-modified"] !== undefined) {
    contents.LastModified = __expectNonNull(__parseRfc7231DateTime(output.headers["last-modified"]));
  }
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeObjectCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeObjectCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ContainerNotFoundException":
    case "com.amazonaws.mediastoredata#ContainerNotFoundException":
      throw await deserializeAws_restJson1ContainerNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.mediastoredata#InternalServerError":
      throw await deserializeAws_restJson1InternalServerErrorResponse(parsedOutput, context);
    case "ObjectNotFoundException":
    case "com.amazonaws.mediastoredata#ObjectNotFoundException":
      throw await deserializeAws_restJson1ObjectNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetObjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetObjectCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetObjectCommandError(output, context);
  }
  const contents: GetObjectCommandOutput = {
    $metadata: deserializeMetadata(output),
    Body: undefined,
    CacheControl: undefined,
    ContentLength: undefined,
    ContentRange: undefined,
    ContentType: undefined,
    ETag: undefined,
    LastModified: undefined,
    StatusCode: undefined,
  };
  if (output.headers["cache-control"] !== undefined) {
    contents.CacheControl = output.headers["cache-control"];
  }
  if (output.headers["content-range"] !== undefined) {
    contents.ContentRange = output.headers["content-range"];
  }
  if (output.headers["content-length"] !== undefined) {
    contents.ContentLength = __strictParseLong(output.headers["content-length"]);
  }
  if (output.headers["content-type"] !== undefined) {
    contents.ContentType = output.headers["content-type"];
  }
  if (output.headers["etag"] !== undefined) {
    contents.ETag = output.headers["etag"];
  }
  if (output.headers["last-modified"] !== undefined) {
    contents.LastModified = __expectNonNull(__parseRfc7231DateTime(output.headers["last-modified"]));
  }
  const data: any = output.body;
  contents.Body = data;
  if (contents.StatusCode === undefined) {
    contents.StatusCode = output.statusCode;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetObjectCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetObjectCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ContainerNotFoundException":
    case "com.amazonaws.mediastoredata#ContainerNotFoundException":
      throw await deserializeAws_restJson1ContainerNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.mediastoredata#InternalServerError":
      throw await deserializeAws_restJson1InternalServerErrorResponse(parsedOutput, context);
    case "ObjectNotFoundException":
    case "com.amazonaws.mediastoredata#ObjectNotFoundException":
      throw await deserializeAws_restJson1ObjectNotFoundExceptionResponse(parsedOutput, context);
    case "RequestedRangeNotSatisfiableException":
    case "com.amazonaws.mediastoredata#RequestedRangeNotSatisfiableException":
      throw await deserializeAws_restJson1RequestedRangeNotSatisfiableExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListItemsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListItemsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListItemsCommandError(output, context);
  }
  const contents: ListItemsCommandOutput = {
    $metadata: deserializeMetadata(output),
    Items: undefined,
    NextToken: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Items !== undefined && data.Items !== null) {
    contents.Items = deserializeAws_restJson1ItemList(data.Items, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListItemsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListItemsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ContainerNotFoundException":
    case "com.amazonaws.mediastoredata#ContainerNotFoundException":
      throw await deserializeAws_restJson1ContainerNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.mediastoredata#InternalServerError":
      throw await deserializeAws_restJson1InternalServerErrorResponse(parsedOutput, context);
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

export const deserializeAws_restJson1PutObjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutObjectCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutObjectCommandError(output, context);
  }
  const contents: PutObjectCommandOutput = {
    $metadata: deserializeMetadata(output),
    ContentSHA256: undefined,
    ETag: undefined,
    StorageClass: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ContentSHA256 !== undefined && data.ContentSHA256 !== null) {
    contents.ContentSHA256 = __expectString(data.ContentSHA256);
  }
  if (data.ETag !== undefined && data.ETag !== null) {
    contents.ETag = __expectString(data.ETag);
  }
  if (data.StorageClass !== undefined && data.StorageClass !== null) {
    contents.StorageClass = __expectString(data.StorageClass);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1PutObjectCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutObjectCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ContainerNotFoundException":
    case "com.amazonaws.mediastoredata#ContainerNotFoundException":
      throw await deserializeAws_restJson1ContainerNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.mediastoredata#InternalServerError":
      throw await deserializeAws_restJson1InternalServerErrorResponse(parsedOutput, context);
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

const deserializeAws_restJson1ContainerNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ContainerNotFoundException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new ContainerNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1InternalServerErrorResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerError> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new InternalServerError({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ObjectNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ObjectNotFoundException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new ObjectNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1RequestedRangeNotSatisfiableExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RequestedRangeNotSatisfiableException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new RequestedRangeNotSatisfiableException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1Item = (output: any, context: __SerdeContext): Item => {
  return {
    ContentLength: __expectLong(output.ContentLength),
    ContentType: __expectString(output.ContentType),
    ETag: __expectString(output.ETag),
    LastModified:
      output.LastModified != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModified)))
        : undefined,
    Name: __expectString(output.Name),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1ItemList = (output: any, context: __SerdeContext): Item[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Item(entry, context);
    });
  return retVal;
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
