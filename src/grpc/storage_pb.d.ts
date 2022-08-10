import * as jspb from 'google-protobuf';

export class FileEntity extends jspb.Message {
  getId(): number;
  setId(value: number): FileEntity;

  getParentId(): number;
  setParentId(value: number): FileEntity;

  getFileName(): string;
  setFileName(value: string): FileEntity;

  getFileHash(): string;
  setFileHash(value: string): FileEntity;

  getFileSize(): number;
  setFileSize(value: number): FileEntity;

  getFileType(): string;
  setFileType(value: string): FileEntity;

  getIsDir(): boolean;
  setIsDir(value: boolean): FileEntity;

  getCategory(): string;
  setCategory(value: string): FileEntity;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FileEntity.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: FileEntity,
  ): FileEntity.AsObject;
  static serializeBinaryToWriter(
    message: FileEntity,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): FileEntity;
  static deserializeBinaryFromReader(
    message: FileEntity,
    reader: jspb.BinaryReader,
  ): FileEntity;
}

export namespace FileEntity {
  export type AsObject = {
    id: number;
    parentId: number;
    fileName: string;
    fileHash: string;
    fileSize: number;
    fileType: string;
    isDir: boolean;
    category: string;
  };
}

export class ListFilesRequest extends jspb.Message {
  getParentId(): number;
  setParentId(value: number): ListFilesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListFilesRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: ListFilesRequest,
  ): ListFilesRequest.AsObject;
  static serializeBinaryToWriter(
    message: ListFilesRequest,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): ListFilesRequest;
  static deserializeBinaryFromReader(
    message: ListFilesRequest,
    reader: jspb.BinaryReader,
  ): ListFilesRequest;
}

export namespace ListFilesRequest {
  export type AsObject = {
    parentId: number;
  };
}

export class ListFilesResponse extends jspb.Message {
  getFilesList(): Array<FileEntity>;
  setFilesList(value: Array<FileEntity>): ListFilesResponse;
  clearFilesList(): ListFilesResponse;
  addFiles(value?: FileEntity, index?: number): FileEntity;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListFilesResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: ListFilesResponse,
  ): ListFilesResponse.AsObject;
  static serializeBinaryToWriter(
    message: ListFilesResponse,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): ListFilesResponse;
  static deserializeBinaryFromReader(
    message: ListFilesResponse,
    reader: jspb.BinaryReader,
  ): ListFilesResponse;
}

export namespace ListFilesResponse {
  export type AsObject = {
    filesList: Array<FileEntity.AsObject>;
  };
}

export class ListFilesByCategoryRequest extends jspb.Message {
  getParentId(): number;
  setParentId(value: number): ListFilesByCategoryRequest;

  getCategory(): string;
  setCategory(value: string): ListFilesByCategoryRequest;

  getLimit(): number;
  setLimit(value: number): ListFilesByCategoryRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListFilesByCategoryRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: ListFilesByCategoryRequest,
  ): ListFilesByCategoryRequest.AsObject;
  static serializeBinaryToWriter(
    message: ListFilesByCategoryRequest,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): ListFilesByCategoryRequest;
  static deserializeBinaryFromReader(
    message: ListFilesByCategoryRequest,
    reader: jspb.BinaryReader,
  ): ListFilesByCategoryRequest;
}

export namespace ListFilesByCategoryRequest {
  export type AsObject = {
    parentId: number;
    category: string;
    limit: number;
  };
}

export class MkdirRequest extends jspb.Message {
  getParentId(): number;
  setParentId(value: number): MkdirRequest;

  getFileName(): string;
  setFileName(value: string): MkdirRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MkdirRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: MkdirRequest,
  ): MkdirRequest.AsObject;
  static serializeBinaryToWriter(
    message: MkdirRequest,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): MkdirRequest;
  static deserializeBinaryFromReader(
    message: MkdirRequest,
    reader: jspb.BinaryReader,
  ): MkdirRequest;
}

export namespace MkdirRequest {
  export type AsObject = {
    parentId: number;
    fileName: string;
  };
}

export class MkdirResponse extends jspb.Message {
  getResult(): boolean;
  setResult(value: boolean): MkdirResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MkdirResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: MkdirResponse,
  ): MkdirResponse.AsObject;
  static serializeBinaryToWriter(
    message: MkdirResponse,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): MkdirResponse;
  static deserializeBinaryFromReader(
    message: MkdirResponse,
    reader: jspb.BinaryReader,
  ): MkdirResponse;
}

export namespace MkdirResponse {
  export type AsObject = {
    result: boolean;
  };
}
