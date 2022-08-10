import * as jspb from 'google-protobuf';

export class DeviceEntity extends jspb.Message {
  getDeviceId(): string;
  setDeviceId(value: string): DeviceEntity;

  getName(): string;
  setName(value: string): DeviceEntity;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeviceEntity.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: DeviceEntity,
  ): DeviceEntity.AsObject;
  static serializeBinaryToWriter(
    message: DeviceEntity,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): DeviceEntity;
  static deserializeBinaryFromReader(
    message: DeviceEntity,
    reader: jspb.BinaryReader,
  ): DeviceEntity;
}

export namespace DeviceEntity {
  export type AsObject = {
    deviceId: string;
    name: string;
  };
}

export class NetworkMember extends jspb.Message {
  getDeviceId(): string;
  setDeviceId(value: string): NetworkMember;

  getName(): string;
  setName(value: string): NetworkMember;

  getIsShared(): boolean;
  setIsShared(value: boolean): NetworkMember;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NetworkMember.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: NetworkMember,
  ): NetworkMember.AsObject;
  static serializeBinaryToWriter(
    message: NetworkMember,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): NetworkMember;
  static deserializeBinaryFromReader(
    message: NetworkMember,
    reader: jspb.BinaryReader,
  ): NetworkMember;
}

export namespace NetworkMember {
  export type AsObject = {
    deviceId: string;
    name: string;
    isShared: boolean;
  };
}

export class IpRange extends jspb.Message {
  getStart(): string;
  setStart(value: string): IpRange;

  getEnd(): string;
  setEnd(value: string): IpRange;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IpRange.AsObject;
  static toObject(includeInstance: boolean, msg: IpRange): IpRange.AsObject;
  static serializeBinaryToWriter(
    message: IpRange,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): IpRange;
  static deserializeBinaryFromReader(
    message: IpRange,
    reader: jspb.BinaryReader,
  ): IpRange;
}

export namespace IpRange {
  export type AsObject = {
    start: string;
    end: string;
  };
}

export class Route extends jspb.Message {
  getTarget(): string;
  setTarget(value: string): Route;

  getVia(): string;
  setVia(value: string): Route;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Route.AsObject;
  static toObject(includeInstance: boolean, msg: Route): Route.AsObject;
  static serializeBinaryToWriter(
    message: Route,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): Route;
  static deserializeBinaryFromReader(
    message: Route,
    reader: jspb.BinaryReader,
  ): Route;
}

export namespace Route {
  export type AsObject = {
    target: string;
    via: string;
  };
}

export class Rule extends jspb.Message {
  getEtherType(): number;
  setEtherType(value: number): Rule;

  getNot(): boolean;
  setNot(value: boolean): Rule;

  getOr(): boolean;
  setOr(value: boolean): Rule;

  getRuleType(): string;
  setRuleType(value: string): Rule;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Rule.AsObject;
  static toObject(includeInstance: boolean, msg: Rule): Rule.AsObject;
  static serializeBinaryToWriter(
    message: Rule,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): Rule;
  static deserializeBinaryFromReader(
    message: Rule,
    reader: jspb.BinaryReader,
  ): Rule;
}

export namespace Rule {
  export type AsObject = {
    etherType: number;
    not: boolean;
    or: boolean;
    ruleType: string;
  };
}

export class NetworkDetail extends jspb.Message {
  getNetworkId(): string;
  setNetworkId(value: string): NetworkDetail;

  getIpAssignmentPoolsList(): Array<IpRange>;
  setIpAssignmentPoolsList(value: Array<IpRange>): NetworkDetail;
  clearIpAssignmentPoolsList(): NetworkDetail;
  addIpAssignmentPools(value?: IpRange, index?: number): IpRange;

  getMulticastLimit(): number;
  setMulticastLimit(value: number): NetworkDetail;

  getMtu(): number;
  setMtu(value: number): NetworkDetail;

  getPrivate(): boolean;
  setPrivate(value: boolean): NetworkDetail;

  getRoutesList(): Array<Route>;
  setRoutesList(value: Array<Route>): NetworkDetail;
  clearRoutesList(): NetworkDetail;
  addRoutes(value?: Route, index?: number): Route;

  getRulesList(): Array<Rule>;
  setRulesList(value: Array<Rule>): NetworkDetail;
  clearRulesList(): NetworkDetail;
  addRules(value?: Rule, index?: number): Rule;

  getSsoEnabled(): boolean;
  setSsoEnabled(value: boolean): NetworkDetail;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NetworkDetail.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: NetworkDetail,
  ): NetworkDetail.AsObject;
  static serializeBinaryToWriter(
    message: NetworkDetail,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): NetworkDetail;
  static deserializeBinaryFromReader(
    message: NetworkDetail,
    reader: jspb.BinaryReader,
  ): NetworkDetail;
}

export namespace NetworkDetail {
  export type AsObject = {
    networkId: string;
    ipAssignmentPoolsList: Array<IpRange.AsObject>;
    multicastLimit: number;
    mtu: number;
    pb_private: boolean;
    routesList: Array<Route.AsObject>;
    rulesList: Array<Rule.AsObject>;
    ssoEnabled: boolean;
  };
}

export class CreateNetworkRequest extends jspb.Message {
  getName(): string;
  setName(value: string): CreateNetworkRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateNetworkRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: CreateNetworkRequest,
  ): CreateNetworkRequest.AsObject;
  static serializeBinaryToWriter(
    message: CreateNetworkRequest,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): CreateNetworkRequest;
  static deserializeBinaryFromReader(
    message: CreateNetworkRequest,
    reader: jspb.BinaryReader,
  ): CreateNetworkRequest;
}

export namespace CreateNetworkRequest {
  export type AsObject = {
    name: string;
  };
}

export class DeleteNetworkRequest extends jspb.Message {
  getNetworkId(): string;
  setNetworkId(value: string): DeleteNetworkRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteNetworkRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: DeleteNetworkRequest,
  ): DeleteNetworkRequest.AsObject;
  static serializeBinaryToWriter(
    message: DeleteNetworkRequest,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): DeleteNetworkRequest;
  static deserializeBinaryFromReader(
    message: DeleteNetworkRequest,
    reader: jspb.BinaryReader,
  ): DeleteNetworkRequest;
}

export namespace DeleteNetworkRequest {
  export type AsObject = {
    networkId: string;
  };
}

export class NetworksResponse extends jspb.Message {
  getNetworkIdsList(): Array<string>;
  setNetworkIdsList(value: Array<string>): NetworksResponse;
  clearNetworkIdsList(): NetworksResponse;
  addNetworkIds(value: string, index?: number): NetworksResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NetworksResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: NetworksResponse,
  ): NetworksResponse.AsObject;
  static serializeBinaryToWriter(
    message: NetworksResponse,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): NetworksResponse;
  static deserializeBinaryFromReader(
    message: NetworksResponse,
    reader: jspb.BinaryReader,
  ): NetworksResponse;
}

export namespace NetworksResponse {
  export type AsObject = {
    networkIdsList: Array<string>;
  };
}

export class GetDeviceConfigRequest extends jspb.Message {
  getDeviceIdsList(): Array<string>;
  setDeviceIdsList(value: Array<string>): GetDeviceConfigRequest;
  clearDeviceIdsList(): GetDeviceConfigRequest;
  addDeviceIds(value: string, index?: number): GetDeviceConfigRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDeviceConfigRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: GetDeviceConfigRequest,
  ): GetDeviceConfigRequest.AsObject;
  static serializeBinaryToWriter(
    message: GetDeviceConfigRequest,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): GetDeviceConfigRequest;
  static deserializeBinaryFromReader(
    message: GetDeviceConfigRequest,
    reader: jspb.BinaryReader,
  ): GetDeviceConfigRequest;
}

export namespace GetDeviceConfigRequest {
  export type AsObject = {
    deviceIdsList: Array<string>;
  };
}

export class GetDeviceConfigResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDeviceConfigResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: GetDeviceConfigResponse,
  ): GetDeviceConfigResponse.AsObject;
  static serializeBinaryToWriter(
    message: GetDeviceConfigResponse,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): GetDeviceConfigResponse;
  static deserializeBinaryFromReader(
    message: GetDeviceConfigResponse,
    reader: jspb.BinaryReader,
  ): GetDeviceConfigResponse;
}

export namespace GetDeviceConfigResponse {
  export type AsObject = {};
}

export class GetNetworkStatusRequest extends jspb.Message {
  getNetworkId(): string;
  setNetworkId(value: string): GetNetworkStatusRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNetworkStatusRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: GetNetworkStatusRequest,
  ): GetNetworkStatusRequest.AsObject;
  static serializeBinaryToWriter(
    message: GetNetworkStatusRequest,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): GetNetworkStatusRequest;
  static deserializeBinaryFromReader(
    message: GetNetworkStatusRequest,
    reader: jspb.BinaryReader,
  ): GetNetworkStatusRequest;
}

export namespace GetNetworkStatusRequest {
  export type AsObject = {
    networkId: string;
  };
}

export class GetNetworkMembersRequest extends jspb.Message {
  getNetworkId(): string;
  setNetworkId(value: string): GetNetworkMembersRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNetworkMembersRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: GetNetworkMembersRequest,
  ): GetNetworkMembersRequest.AsObject;
  static serializeBinaryToWriter(
    message: GetNetworkMembersRequest,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): GetNetworkMembersRequest;
  static deserializeBinaryFromReader(
    message: GetNetworkMembersRequest,
    reader: jspb.BinaryReader,
  ): GetNetworkMembersRequest;
}

export namespace GetNetworkMembersRequest {
  export type AsObject = {
    networkId: string;
  };
}

export class GetNetworkMembersResponse extends jspb.Message {
  getNetworkId(): string;
  setNetworkId(value: string): GetNetworkMembersResponse;

  getMembersList(): Array<NetworkMember>;
  setMembersList(value: Array<NetworkMember>): GetNetworkMembersResponse;
  clearMembersList(): GetNetworkMembersResponse;
  addMembers(value?: NetworkMember, index?: number): NetworkMember;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNetworkMembersResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: GetNetworkMembersResponse,
  ): GetNetworkMembersResponse.AsObject;
  static serializeBinaryToWriter(
    message: GetNetworkMembersResponse,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): GetNetworkMembersResponse;
  static deserializeBinaryFromReader(
    message: GetNetworkMembersResponse,
    reader: jspb.BinaryReader,
  ): GetNetworkMembersResponse;
}

export namespace GetNetworkMembersResponse {
  export type AsObject = {
    networkId: string;
    membersList: Array<NetworkMember.AsObject>;
  };
}
