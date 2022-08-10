import * as jspb from 'google-protobuf';

export class Account extends jspb.Message {
  getAccountId(): string;
  setAccountId(value: string): Account;

  getPublicKey(): string;
  setPublicKey(value: string): Account;

  getDid(): string;
  setDid(value: string): Account;

  getBiography(): string;
  setBiography(value: string): Account;

  getName(): string;
  setName(value: string): Account;

  getAvatar(): string;
  setAvatar(value: string): Account;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Account.AsObject;
  static toObject(includeInstance: boolean, msg: Account): Account.AsObject;
  static serializeBinaryToWriter(
    message: Account,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): Account;
  static deserializeBinaryFromReader(
    message: Account,
    reader: jspb.BinaryReader,
  ): Account;
}

export namespace Account {
  export type AsObject = {
    accountId: string;
    publicKey: string;
    did: string;
    biography: string;
    name: string;
    avatar: string;
  };
}

export class GenerateAccountResponse extends jspb.Message {
  getAccountId(): string;
  setAccountId(value: string): GenerateAccountResponse;

  getSecretPhrase(): string;
  setSecretPhrase(value: string): GenerateAccountResponse;

  getSecretSeed(): string;
  setSecretSeed(value: string): GenerateAccountResponse;

  getPublicKey(): string;
  setPublicKey(value: string): GenerateAccountResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenerateAccountResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: GenerateAccountResponse,
  ): GenerateAccountResponse.AsObject;
  static serializeBinaryToWriter(
    message: GenerateAccountResponse,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): GenerateAccountResponse;
  static deserializeBinaryFromReader(
    message: GenerateAccountResponse,
    reader: jspb.BinaryReader,
  ): GenerateAccountResponse;
}

export namespace GenerateAccountResponse {
  export type AsObject = {
    accountId: string;
    secretPhrase: string;
    secretSeed: string;
    publicKey: string;
  };
}

export class GetAccountByIdRequest extends jspb.Message {
  getAccountId(): string;
  setAccountId(value: string): GetAccountByIdRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAccountByIdRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: GetAccountByIdRequest,
  ): GetAccountByIdRequest.AsObject;
  static serializeBinaryToWriter(
    message: GetAccountByIdRequest,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): GetAccountByIdRequest;
  static deserializeBinaryFromReader(
    message: GetAccountByIdRequest,
    reader: jspb.BinaryReader,
  ): GetAccountByIdRequest;
}

export namespace GetAccountByIdRequest {
  export type AsObject = {
    accountId: string;
  };
}

export class EncryptMessageRequest extends jspb.Message {
  getPlain(): string;
  setPlain(value: string): EncryptMessageRequest;

  getPassword(): string;
  setPassword(value: string): EncryptMessageRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EncryptMessageRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: EncryptMessageRequest,
  ): EncryptMessageRequest.AsObject;
  static serializeBinaryToWriter(
    message: EncryptMessageRequest,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): EncryptMessageRequest;
  static deserializeBinaryFromReader(
    message: EncryptMessageRequest,
    reader: jspb.BinaryReader,
  ): EncryptMessageRequest;
}

export namespace EncryptMessageRequest {
  export type AsObject = {
    plain: string;
    password: string;
  };
}

export class EncryptMessageResponse extends jspb.Message {
  getSalt(): string;
  setSalt(value: string): EncryptMessageResponse;

  getNonce(): string;
  setNonce(value: string): EncryptMessageResponse;

  getAccountId(): string;
  setAccountId(value: string): EncryptMessageResponse;

  getCipher(): string;
  setCipher(value: string): EncryptMessageResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EncryptMessageResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: EncryptMessageResponse,
  ): EncryptMessageResponse.AsObject;
  static serializeBinaryToWriter(
    message: EncryptMessageResponse,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): EncryptMessageResponse;
  static deserializeBinaryFromReader(
    message: EncryptMessageResponse,
    reader: jspb.BinaryReader,
  ): EncryptMessageResponse;
}

export namespace EncryptMessageResponse {
  export type AsObject = {
    salt: string;
    nonce: string;
    accountId: string;
    cipher: string;
  };
}

export class DecryptMessageRequest extends jspb.Message {
  getSalt(): string;
  setSalt(value: string): DecryptMessageRequest;

  getNonce(): string;
  setNonce(value: string): DecryptMessageRequest;

  getCipher(): string;
  setCipher(value: string): DecryptMessageRequest;

  getPassword(): string;
  setPassword(value: string): DecryptMessageRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DecryptMessageRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: DecryptMessageRequest,
  ): DecryptMessageRequest.AsObject;
  static serializeBinaryToWriter(
    message: DecryptMessageRequest,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): DecryptMessageRequest;
  static deserializeBinaryFromReader(
    message: DecryptMessageRequest,
    reader: jspb.BinaryReader,
  ): DecryptMessageRequest;
}

export namespace DecryptMessageRequest {
  export type AsObject = {
    salt: string;
    nonce: string;
    cipher: string;
    password: string;
  };
}

export class DecryptMessageResponse extends jspb.Message {
  getPlain(): string;
  setPlain(value: string): DecryptMessageResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DecryptMessageResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: DecryptMessageResponse,
  ): DecryptMessageResponse.AsObject;
  static serializeBinaryToWriter(
    message: DecryptMessageResponse,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): DecryptMessageResponse;
  static deserializeBinaryFromReader(
    message: DecryptMessageResponse,
    reader: jspb.BinaryReader,
  ): DecryptMessageResponse;
}

export namespace DecryptMessageResponse {
  export type AsObject = {
    plain: string;
  };
}

export class LoginRequest extends jspb.Message {
  getPassword(): string;
  setPassword(value: string): LoginRequest;

  getPhrase(): string;
  setPhrase(value: string): LoginRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: LoginRequest,
  ): LoginRequest.AsObject;
  static serializeBinaryToWriter(
    message: LoginRequest,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): LoginRequest;
  static deserializeBinaryFromReader(
    message: LoginRequest,
    reader: jspb.BinaryReader,
  ): LoginRequest;
}

export namespace LoginRequest {
  export type AsObject = {
    password: string;
    phrase: string;
  };
}

export class LoginResponse extends jspb.Message {
  getPublicKey(): string;
  setPublicKey(value: string): LoginResponse;

  getApplicationKey(): string;
  setApplicationKey(value: string): LoginResponse;

  getToken(): string;
  setToken(value: string): LoginResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: LoginResponse,
  ): LoginResponse.AsObject;
  static serializeBinaryToWriter(
    message: LoginResponse,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): LoginResponse;
  static deserializeBinaryFromReader(
    message: LoginResponse,
    reader: jspb.BinaryReader,
  ): LoginResponse;
}

export namespace LoginResponse {
  export type AsObject = {
    publicKey: string;
    applicationKey: string;
    token: string;
  };
}
