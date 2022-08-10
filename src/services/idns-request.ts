import { invoke } from '@tauri-apps/api/tauri';
import * as jspb from 'google-protobuf';

import {
  EmptyMessage,
  U64Message,
  BoolMessage,
  DatabaseUpdate,
  DatabaseQuery,
  StringMessage,
} from '../grpc/system_pb';

export const databaseQueryList = async (
  sql: string,
  size: number,
): Promise<Array<Array<any>>> => {
  let response = await databaseQuery(sql, size);
  if (response == null) {
    return [];
  }
  let res = JSON.parse(response);
  return res;
};

export const databaseQueryMap = async (
  sql: string,
  size: number,
  toMap: (item: any) => { [key: string]: any },
): Promise<Array<{ [key: string]: any }>> => {
  let response = await databaseQuery(sql, size);

  console.log(response, 'zzzzzz');

  if (response == null) {
    return [];
  }
  let res = JSON.parse(response);
  console.log(res);
  if (res && Array.isArray(res)) {
    return res.map((item, index) => {
      return toMap(item);
    });
  }
  return res;
};

export const databaseQuery = async (
  sql: string,
  size: number,
): Promise<string | null> => {
  let request = new DatabaseQuery();
  request.setSql(sql);
  request.setSize(size);

  let response: StringMessage | null = await idnsRequest(
    'idns.system.database',
    'query',
    [],
    request.serializeBinary(),
    StringMessage.deserializeBinary,
  );
  if (response == null) {
    return null;
  }
  return response.getData();
};

export const databaseUpdateWithArgs = async (
  sql: string,
  args: { [key: string]: any },
): Promise<number | null> => {
  let request = new DatabaseUpdate();
  request.setSql(sql);
  request.setArgsJson(JSON.stringify(args));

  let response: U64Message | null = await idnsRequest(
    'idns.system.database',
    'update_with_args',
    [],
    request.serializeBinary(),
    U64Message.deserializeBinary,
  );
  if (response == null) {
    return null;
  }
  return response.getData();
};

export const databaseUpdate = async (sql: string): Promise<number | null> => {
  let request = new StringMessage();
  request.setData(sql);

  let response: U64Message | null = await idnsRequest(
    'idns.system.database',
    'update',
    [],
    request.serializeBinary(),
    U64Message.deserializeBinary,
  );
  if (response == null) {
    return null;
  }
  return response.getData();
};

export const idnsRequest = async <T extends jspb.Message>(
  serviceName: string,
  methodName: string,
  headers: Array<Array<string>>,
  data: Uint8Array,
  deserializeBinary: (bytes: Uint8Array) => T,
): Promise<T | null> => {
  let response = await invoke('idns_request_raw', {
    serviceName: serviceName,
    methodName: methodName,
    headersVec: headers,
    data: Array.from(data),
  });

  console.log(response);
  if (response && Array.isArray(response) && response.length == 3) {
    if (response[0] === 0) {
      return deserializeBinary(response[2]);
    }
    return null;
  } else {
    return null;
  }
};
