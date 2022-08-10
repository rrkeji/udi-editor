import * as jspb from 'google-protobuf';

export class RetrieveServiceByNameRequest extends jspb.Message {
  getServiceName(): string;
  setServiceName(value: string): RetrieveServiceByNameRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RetrieveServiceByNameRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: RetrieveServiceByNameRequest,
  ): RetrieveServiceByNameRequest.AsObject;
  static serializeBinaryToWriter(
    message: RetrieveServiceByNameRequest,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): RetrieveServiceByNameRequest;
  static deserializeBinaryFromReader(
    message: RetrieveServiceByNameRequest,
    reader: jspb.BinaryReader,
  ): RetrieveServiceByNameRequest;
}

export namespace RetrieveServiceByNameRequest {
  export type AsObject = {
    serviceName: string;
  };
}

export class RetrieveServiceByNameResponse extends jspb.Message {
  getServiceAddr(): string;
  setServiceAddr(value: string): RetrieveServiceByNameResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RetrieveServiceByNameResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: RetrieveServiceByNameResponse,
  ): RetrieveServiceByNameResponse.AsObject;
  static serializeBinaryToWriter(
    message: RetrieveServiceByNameResponse,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): RetrieveServiceByNameResponse;
  static deserializeBinaryFromReader(
    message: RetrieveServiceByNameResponse,
    reader: jspb.BinaryReader,
  ): RetrieveServiceByNameResponse;
}

export namespace RetrieveServiceByNameResponse {
  export type AsObject = {
    serviceAddr: string;
  };
}

export class SaveServiceNsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SaveServiceNsRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: SaveServiceNsRequest,
  ): SaveServiceNsRequest.AsObject;
  static serializeBinaryToWriter(
    message: SaveServiceNsRequest,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): SaveServiceNsRequest;
  static deserializeBinaryFromReader(
    message: SaveServiceNsRequest,
    reader: jspb.BinaryReader,
  ): SaveServiceNsRequest;
}

export namespace SaveServiceNsRequest {
  export type AsObject = {};
}

export class SaveServiceNsResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SaveServiceNsResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: SaveServiceNsResponse,
  ): SaveServiceNsResponse.AsObject;
  static serializeBinaryToWriter(
    message: SaveServiceNsResponse,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): SaveServiceNsResponse;
  static deserializeBinaryFromReader(
    message: SaveServiceNsResponse,
    reader: jspb.BinaryReader,
  ): SaveServiceNsResponse;
}

export namespace SaveServiceNsResponse {
  export type AsObject = {};
}

export class SendPackagesRequest extends jspb.Message {
  getServiceAddr(): string;
  setServiceAddr(value: string): SendPackagesRequest;

  getPackagesList(): Array<Uint8Array | string>;
  setPackagesList(value: Array<Uint8Array | string>): SendPackagesRequest;
  clearPackagesList(): SendPackagesRequest;
  addPackages(value: Uint8Array | string, index?: number): SendPackagesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendPackagesRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: SendPackagesRequest,
  ): SendPackagesRequest.AsObject;
  static serializeBinaryToWriter(
    message: SendPackagesRequest,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): SendPackagesRequest;
  static deserializeBinaryFromReader(
    message: SendPackagesRequest,
    reader: jspb.BinaryReader,
  ): SendPackagesRequest;
}

export namespace SendPackagesRequest {
  export type AsObject = {
    serviceAddr: string;
    packagesList: Array<Uint8Array | string>;
  };
}

export class SendPackagesResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendPackagesResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: SendPackagesResponse,
  ): SendPackagesResponse.AsObject;
  static serializeBinaryToWriter(
    message: SendPackagesResponse,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): SendPackagesResponse;
  static deserializeBinaryFromReader(
    message: SendPackagesResponse,
    reader: jspb.BinaryReader,
  ): SendPackagesResponse;
}

export namespace SendPackagesResponse {
  export type AsObject = {};
}

export class SendHttpPackageRequest extends jspb.Message {
  getServiceAddr(): string;
  setServiceAddr(value: string): SendHttpPackageRequest;

  getMethod(): string;
  setMethod(value: string): SendHttpPackageRequest;

  getHeadersMap(): jspb.Map<string, string>;
  clearHeadersMap(): SendHttpPackageRequest;

  getBodyList(): Array<Uint8Array | string>;
  setBodyList(value: Array<Uint8Array | string>): SendHttpPackageRequest;
  clearBodyList(): SendHttpPackageRequest;
  addBody(value: Uint8Array | string, index?: number): SendHttpPackageRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendHttpPackageRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: SendHttpPackageRequest,
  ): SendHttpPackageRequest.AsObject;
  static serializeBinaryToWriter(
    message: SendHttpPackageRequest,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): SendHttpPackageRequest;
  static deserializeBinaryFromReader(
    message: SendHttpPackageRequest,
    reader: jspb.BinaryReader,
  ): SendHttpPackageRequest;
}

export namespace SendHttpPackageRequest {
  export type AsObject = {
    serviceAddr: string;
    method: string;
    headersMap: Array<[string, string]>;
    bodyList: Array<Uint8Array | string>;
  };
}

export class SendHttpPackageResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendHttpPackageResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: SendHttpPackageResponse,
  ): SendHttpPackageResponse.AsObject;
  static serializeBinaryToWriter(
    message: SendHttpPackageResponse,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): SendHttpPackageResponse;
  static deserializeBinaryFromReader(
    message: SendHttpPackageResponse,
    reader: jspb.BinaryReader,
  ): SendHttpPackageResponse;
}

export namespace SendHttpPackageResponse {
  export type AsObject = {};
}
