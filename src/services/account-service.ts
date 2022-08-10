import { idnsRequest } from './idns-request';

import {
  EmptyMessage,
  U64Message,
  BoolMessage,
  BytesMessage,
  StringMessage,
} from '../grpc/system_pb';

import {
  GenerateAccountResponse,
  LoginResponse,
  LoginRequest,
} from '../grpc/account_pb';

export const generateAccount =
  async (): Promise<GenerateAccountResponse | null> => {
    let request = new EmptyMessage();

    let response: GenerateAccountResponse | null = await idnsRequest(
      'idns.system.account',
      'generate_account',
      [],
      request.serializeBinary(),
      GenerateAccountResponse.deserializeBinary,
    );
    return response;
  };
//
export const isImported = async (): Promise<boolean> => {
  let request = new EmptyMessage();

  let response: BoolMessage | null = await idnsRequest(
    'idns.system.auth',
    'is_imported',
    [],
    request.serializeBinary(),
    BoolMessage.deserializeBinary,
  );
  if (response == null) {
    return false;
  }
  return response.getData();
};

//
export const isOnline = async (): Promise<boolean> => {
  let request = new EmptyMessage();

  let response: BoolMessage | null = await idnsRequest(
    'idns.system.auth',
    'is_online',
    [],
    request.serializeBinary(),
    BoolMessage.deserializeBinary,
  );
  if (response == null) {
    return false;
  }
  return response.getData();
};

//
export const isLogin = async (): Promise<boolean> => {
  let request = new EmptyMessage();

  let response: BoolMessage | null = await idnsRequest(
    'idns.system.auth',
    'is_login',
    [],
    request.serializeBinary(),
    BoolMessage.deserializeBinary,
  );
  if (response == null) {
    return false;
  }
  return response.getData();
};
//
export const logout = async (): Promise<boolean> => {
  let request = new EmptyMessage();

  let response: BoolMessage | null = await idnsRequest(
    'idns.system.auth',
    'logout',
    [],
    request.serializeBinary(),
    BoolMessage.deserializeBinary,
  );
  if (response == null) {
    return false;
  }
  return response.getData();
};

//
export const loginByPassword = async (
  password: string,
): Promise<LoginResponse | null> => {
  let request = new StringMessage();
  request.setData(password);

  let response: LoginResponse | null = await idnsRequest(
    'idns.system.auth',
    'login_by_password',
    [],
    request.serializeBinary(),
    LoginResponse.deserializeBinary,
  );
  return response;
};
//
export const importAndLogin = async (
  password: string,
  phrase: string,
): Promise<LoginResponse | null> => {
  let request = new LoginRequest();
  request.setPassword(password);
  request.setPhrase(phrase);

  let response: LoginResponse | null = await idnsRequest(
    'idns.system.auth',
    'import_and_login',
    [],
    request.serializeBinary(),
    LoginResponse.deserializeBinary,
  );
  return response;
};
