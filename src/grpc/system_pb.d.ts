import * as jspb from 'google-protobuf';

export class Version extends jspb.Message {
  getVersion(): Version.SoftVersion;
  setVersion(value: Version.SoftVersion): Version;

  getName(): string;
  setName(value: string): Version;

  getDescription(): string;
  setDescription(value: string): Version;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Version.AsObject;
  static toObject(includeInstance: boolean, msg: Version): Version.AsObject;
  static serializeBinaryToWriter(
    message: Version,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): Version;
  static deserializeBinaryFromReader(
    message: Version,
    reader: jspb.BinaryReader,
  ): Version;
}

export namespace Version {
  export type AsObject = {
    version: Version.SoftVersion;
    name: string;
    description: string;
  };

  export enum SoftVersion {
    V_0_1_0 = 0,
  }
}

export class Command extends jspb.Message {
  getServiceName(): string;
  setServiceName(value: string): Command;

  getMethodName(): string;
  setMethodName(value: string): Command;

  getHeadersMap(): jspb.Map<string, string>;
  clearHeadersMap(): Command;

  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): Command;

  getNonce(): string;
  setNonce(value: string): Command;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Command.AsObject;
  static toObject(includeInstance: boolean, msg: Command): Command.AsObject;
  static serializeBinaryToWriter(
    message: Command,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): Command;
  static deserializeBinaryFromReader(
    message: Command,
    reader: jspb.BinaryReader,
  ): Command;
}

export namespace Command {
  export type AsObject = {
    serviceName: string;
    methodName: string;
    headersMap: Array<[string, string]>;
    data: Uint8Array | string;
    nonce: string;
  };
}

export class CommandResponse extends jspb.Message {
  getStatus(): number;
  setStatus(value: number): CommandResponse;

  getHeadersMap(): jspb.Map<string, string>;
  clearHeadersMap(): CommandResponse;

  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): CommandResponse;

  getNonce(): string;
  setNonce(value: string): CommandResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CommandResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: CommandResponse,
  ): CommandResponse.AsObject;
  static serializeBinaryToWriter(
    message: CommandResponse,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): CommandResponse;
  static deserializeBinaryFromReader(
    message: CommandResponse,
    reader: jspb.BinaryReader,
  ): CommandResponse;
}

export namespace CommandResponse {
  export type AsObject = {
    status: number;
    headersMap: Array<[string, string]>;
    data: Uint8Array | string;
    nonce: string;
  };
}

export class EmptyMessage extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EmptyMessage.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: EmptyMessage,
  ): EmptyMessage.AsObject;
  static serializeBinaryToWriter(
    message: EmptyMessage,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): EmptyMessage;
  static deserializeBinaryFromReader(
    message: EmptyMessage,
    reader: jspb.BinaryReader,
  ): EmptyMessage;
}

export namespace EmptyMessage {
  export type AsObject = {};
}

export class U64Message extends jspb.Message {
  getData(): number;
  setData(value: number): U64Message;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): U64Message.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: U64Message,
  ): U64Message.AsObject;
  static serializeBinaryToWriter(
    message: U64Message,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): U64Message;
  static deserializeBinaryFromReader(
    message: U64Message,
    reader: jspb.BinaryReader,
  ): U64Message;
}

export namespace U64Message {
  export type AsObject = {
    data: number;
  };
}

export class BoolMessage extends jspb.Message {
  getData(): boolean;
  setData(value: boolean): BoolMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BoolMessage.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: BoolMessage,
  ): BoolMessage.AsObject;
  static serializeBinaryToWriter(
    message: BoolMessage,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): BoolMessage;
  static deserializeBinaryFromReader(
    message: BoolMessage,
    reader: jspb.BinaryReader,
  ): BoolMessage;
}

export namespace BoolMessage {
  export type AsObject = {
    data: boolean;
  };
}

export class BytesMessage extends jspb.Message {
  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): BytesMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BytesMessage.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: BytesMessage,
  ): BytesMessage.AsObject;
  static serializeBinaryToWriter(
    message: BytesMessage,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): BytesMessage;
  static deserializeBinaryFromReader(
    message: BytesMessage,
    reader: jspb.BinaryReader,
  ): BytesMessage;
}

export namespace BytesMessage {
  export type AsObject = {
    data: Uint8Array | string;
  };
}

export class StringMessage extends jspb.Message {
  getData(): string;
  setData(value: string): StringMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StringMessage.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: StringMessage,
  ): StringMessage.AsObject;
  static serializeBinaryToWriter(
    message: StringMessage,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): StringMessage;
  static deserializeBinaryFromReader(
    message: StringMessage,
    reader: jspb.BinaryReader,
  ): StringMessage;
}

export namespace StringMessage {
  export type AsObject = {
    data: string;
  };
}

export class DatabaseQuery extends jspb.Message {
  getSql(): string;
  setSql(value: string): DatabaseQuery;

  getSize(): number;
  setSize(value: number): DatabaseQuery;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DatabaseQuery.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: DatabaseQuery,
  ): DatabaseQuery.AsObject;
  static serializeBinaryToWriter(
    message: DatabaseQuery,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): DatabaseQuery;
  static deserializeBinaryFromReader(
    message: DatabaseQuery,
    reader: jspb.BinaryReader,
  ): DatabaseQuery;
}

export namespace DatabaseQuery {
  export type AsObject = {
    sql: string;
    size: number;
  };
}

export class DatabaseUpdate extends jspb.Message {
  getSql(): string;
  setSql(value: string): DatabaseUpdate;

  getArgsJson(): string;
  setArgsJson(value: string): DatabaseUpdate;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DatabaseUpdate.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: DatabaseUpdate,
  ): DatabaseUpdate.AsObject;
  static serializeBinaryToWriter(
    message: DatabaseUpdate,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): DatabaseUpdate;
  static deserializeBinaryFromReader(
    message: DatabaseUpdate,
    reader: jspb.BinaryReader,
  ): DatabaseUpdate;
}

export namespace DatabaseUpdate {
  export type AsObject = {
    sql: string;
    argsJson: string;
  };
}

export class WalletGetBalancesResponse extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): WalletGetBalancesResponse;

  getBalance(): number;
  setBalance(value: number): WalletGetBalancesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WalletGetBalancesResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: WalletGetBalancesResponse,
  ): WalletGetBalancesResponse.AsObject;
  static serializeBinaryToWriter(
    message: WalletGetBalancesResponse,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): WalletGetBalancesResponse;
  static deserializeBinaryFromReader(
    message: WalletGetBalancesResponse,
    reader: jspb.BinaryReader,
  ): WalletGetBalancesResponse;
}

export namespace WalletGetBalancesResponse {
  export type AsObject = {
    address: string;
    balance: number;
  };
}

export class WalletBalanceTransferRequest extends jspb.Message {
  getToAddress(): string;
  setToAddress(value: string): WalletBalanceTransferRequest;

  getAmount(): number;
  setAmount(value: number): WalletBalanceTransferRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WalletBalanceTransferRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: WalletBalanceTransferRequest,
  ): WalletBalanceTransferRequest.AsObject;
  static serializeBinaryToWriter(
    message: WalletBalanceTransferRequest,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): WalletBalanceTransferRequest;
  static deserializeBinaryFromReader(
    message: WalletBalanceTransferRequest,
    reader: jspb.BinaryReader,
  ): WalletBalanceTransferRequest;
}

export namespace WalletBalanceTransferRequest {
  export type AsObject = {
    toAddress: string;
    amount: number;
  };
}
