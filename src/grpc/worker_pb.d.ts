import * as jspb from 'google-protobuf';

export class WorkerConfig extends jspb.Message {
  getMaxThreads(): number;
  setMaxThreads(value: number): WorkerConfig;

  getMinThreads(): number;
  setMinThreads(value: number): WorkerConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WorkerConfig.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: WorkerConfig,
  ): WorkerConfig.AsObject;
  static serializeBinaryToWriter(
    message: WorkerConfig,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): WorkerConfig;
  static deserializeBinaryFromReader(
    message: WorkerConfig,
    reader: jspb.BinaryReader,
  ): WorkerConfig;
}

export namespace WorkerConfig {
  export type AsObject = {
    maxThreads: number;
    minThreads: number;
  };
}

export class WorkerStatus extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WorkerStatus.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: WorkerStatus,
  ): WorkerStatus.AsObject;
  static serializeBinaryToWriter(
    message: WorkerStatus,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): WorkerStatus;
  static deserializeBinaryFromReader(
    message: WorkerStatus,
    reader: jspb.BinaryReader,
  ): WorkerStatus;
}

export namespace WorkerStatus {
  export type AsObject = {};
}

export class WorkerSetConfigRequest extends jspb.Message {
  getConfig(): WorkerConfig | undefined;
  setConfig(value?: WorkerConfig): WorkerSetConfigRequest;
  hasConfig(): boolean;
  clearConfig(): WorkerSetConfigRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WorkerSetConfigRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: WorkerSetConfigRequest,
  ): WorkerSetConfigRequest.AsObject;
  static serializeBinaryToWriter(
    message: WorkerSetConfigRequest,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): WorkerSetConfigRequest;
  static deserializeBinaryFromReader(
    message: WorkerSetConfigRequest,
    reader: jspb.BinaryReader,
  ): WorkerSetConfigRequest;
}

export namespace WorkerSetConfigRequest {
  export type AsObject = {
    config?: WorkerConfig.AsObject;
  };
}
