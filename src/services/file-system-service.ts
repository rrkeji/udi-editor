import {
  FileEntity,
  ListFilesRequest,
  ListFilesResponse,
  MkdirRequest,
  MkdirResponse,
  ListFilesByCategoryRequest,
} from '@/grpc/storage_pb';
import {
  BoolMessage,
  BytesMessage,
  StringMessage,
  U64Message,
} from '@/grpc/system_pb';
import { idnsRequest } from './idns-request';

export const listRootFiles = async (): Promise<FileEntity[]> => {
  let request = new ListFilesRequest();
  request.setParentId(1);

  let response: ListFilesResponse | null = await idnsRequest(
    'idns.system.storage',
    'list_files',
    [],
    request.serializeBinary(),
    ListFilesResponse.deserializeBinary,
  );
  if (response == null) {
    return [];
  }
  return response.getFilesList();
};

export const listFiles = async (parent_id: number): Promise<FileEntity[]> => {
  let request = new ListFilesRequest();
  request.setParentId(parent_id);

  let response: ListFilesResponse | null = await idnsRequest(
    'idns.system.storage',
    'list_files',
    [],
    request.serializeBinary(),
    ListFilesResponse.deserializeBinary,
  );
  if (response == null) {
    return [];
  }
  return response.getFilesList();
};

export const listFilesByCategory = async (
  parent_id: number,
  category: string,
  limit: number,
): Promise<FileEntity[]> => {
  let request = new ListFilesByCategoryRequest();
  request.setParentId(parent_id);
  request.setCategory(category);
  request.setLimit(limit);

  let response: ListFilesResponse | null = await idnsRequest(
    'idns.system.storage',
    'list_files_by_category',
    [],
    request.serializeBinary(),
    ListFilesResponse.deserializeBinary,
  );
  if (response == null) {
    return [];
  }
  return response.getFilesList();
};

//file_type 0 文件 1 文件夹
export const insertFile = async (
  parent_id: number,
  hash: string,
  filename: string,
): Promise<number> => {
  let request = new FileEntity();
  request.setParentId(parent_id);
  request.setFileHash(hash);
  request.setFileName(filename);
  request.setFileSize(0);
  request.setFileType('');
  request.setIsDir(false);

  let response: U64Message | null = await idnsRequest(
    'idns.system.storage',
    'create_file',
    [],
    request.serializeBinary(),
    U64Message.deserializeBinary,
  );
  if (response == null) {
    return 0;
  }
  return response.getData();
};

//file_type 0 文件 1 文件夹
export const createFile = async (request: FileEntity): Promise<number> => {
  let response: U64Message | null = await idnsRequest(
    'idns.system.storage',
    'create_file',
    [],
    request.serializeBinary(),
    U64Message.deserializeBinary,
  );
  if (response == null) {
    return 0;
  }
  return response.getData();
};

export const updateFile = async (request: FileEntity): Promise<number> => {
  // let request = new FileEntity();
  // request.setParentId(parent_id);
  // request.setFileHash(hash);
  // request.setFileName(filename);
  // request.setFileSize(0);
  // request.setFileType('');
  // request.setIsDir(false);

  let response: U64Message | null = await idnsRequest(
    'idns.system.storage',
    'create_file',
    [],
    request.serializeBinary(),
    U64Message.deserializeBinary,
  );
  if (response == null) {
    return 0;
  }
  return response.getData();
};

export const deleteFile = async (file_id: number): Promise<boolean> => {
  let request = new U64Message();
  request.setData(file_id);

  let response: BoolMessage | null = await idnsRequest(
    'idns.system.storage',
    'delete_file',
    [],
    request.serializeBinary(),
    BoolMessage.deserializeBinary,
  );
  if (response == null) {
    return false;
  }
  return response.getData();
};

export const createDir = async (
  parent_id: number,
  filename: string,
): Promise<boolean> => {
  let request = new MkdirRequest();
  request.setParentId(parent_id);
  request.setFileName(filename);

  let response: MkdirResponse | null = await idnsRequest(
    'idns.system.storage',
    'mkdir',
    [],
    request.serializeBinary(),
    MkdirResponse.deserializeBinary,
  );
  if (response == null) {
    return false;
  }
  return response.getResult();
};

export const addContent = async (data: Uint8Array): Promise<string | null> => {
  let request = new BytesMessage();
  request.setData(data);

  let response: StringMessage | null = await idnsRequest(
    'idns.system.storage',
    'add_content',
    [],
    request.serializeBinary(),
    StringMessage.deserializeBinary,
  );
  if (response == null) {
    return null;
  }
  return response.getData();
};

export const getContent = async (cid: string): Promise<Uint8Array | null> => {
  let request = new StringMessage();
  request.setData(cid);

  let response: BytesMessage | null = await idnsRequest(
    'idns.system.storage',
    'add_content',
    [],
    request.serializeBinary(),
    BytesMessage.deserializeBinary,
  );
  if (response == null) {
    return null;
  }
  return response.getData() as Uint8Array;
};
