// @generated by protoc-gen-es v1.3.1 with parameter "target=ts,import_extension=none"
// @generated from file recorder/provider.proto (package recorder, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, Timestamp } from "@bufbuild/protobuf";
import { RoundRecord, ShiftRecord, ShuffleRecord, URLMedia } from "./record_pb";

/**
 * @generated from message recorder.RecordQuery
 */
export class RecordQuery extends Message<RecordQuery> {
  /**
   * 查詢起時
   *
   * @generated from field: google.protobuf.Timestamp ts_from = 1;
   */
  tsFrom?: Timestamp;

  /**
   * 查詢終時
   *
   * @generated from field: google.protobuf.Timestamp ts_to = 2;
   */
  tsTo?: Timestamp;

  /**
   * 筆數
   *
   * @generated from field: optional int64 limit = 3;
   */
  limit?: bigint;

  /**
   * 頁面
   *
   * @generated from field: optional int64 page = 4;
   */
  page?: bigint;

  constructor(data?: PartialMessage<RecordQuery>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "recorder.RecordQuery";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "ts_from", kind: "message", T: Timestamp },
    { no: 2, name: "ts_to", kind: "message", T: Timestamp },
    { no: 3, name: "limit", kind: "scalar", T: 3 /* ScalarType.INT64 */, opt: true },
    { no: 4, name: "page", kind: "scalar", T: 3 /* ScalarType.INT64 */, opt: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RecordQuery {
    return new RecordQuery().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RecordQuery {
    return new RecordQuery().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RecordQuery {
    return new RecordQuery().fromJsonString(jsonString, options);
  }

  static equals(a: RecordQuery | PlainMessage<RecordQuery> | undefined, b: RecordQuery | PlainMessage<RecordQuery> | undefined): boolean {
    return proto3.util.equals(RecordQuery, a, b);
  }
}

/**
 * @generated from message recorder.FetchShiftRecordRequest
 */
export class FetchShiftRecordRequest extends Message<FetchShiftRecordRequest> {
  /**
   * 紀錄ID
   *
   * @generated from field: optional bytes record_id = 1;
   */
  recordId?: Uint8Array;

  /**
   * 遊戲類型
   *
   * @generated from field: optional string game_type = 2;
   */
  gameType?: string;

  /**
   * 遊戲子類型
   *
   * @generated from field: optional string game_subtype = 3;
   */
  gameSubtype?: string;

  /**
   * 遊戲代碼
   *
   * @generated from field: optional string game_code = 5;
   */
  gameCode?: string;

  /**
   * 桌代碼
   *
   * @generated from field: optional string table_code = 6;
   */
  tableCode?: string;

  /**
   * 允許的紀錄ID
   *
   * @generated from field: repeated bytes record_ids = 9;
   */
  recordIds: Uint8Array[] = [];

  /**
   * 允許的遊戲類型
   *
   * @generated from field: repeated string game_types = 10;
   */
  gameTypes: string[] = [];

  /**
   * 允許的遊戲子類型
   *
   * @generated from field: repeated string game_subtypes = 11;
   */
  gameSubtypes: string[] = [];

  /**
   * 允許的遊戲代碼
   *
   * @generated from field: repeated string game_codes = 13;
   */
  gameCodes: string[] = [];

  /**
   * 允許的桌代碼
   *
   * @generated from field: repeated string table_codes = 14;
   */
  tableCodes: string[] = [];

  /**
   * 查詢限制
   *
   * @generated from field: recorder.RecordQuery query = 20;
   */
  query?: RecordQuery;

  constructor(data?: PartialMessage<FetchShiftRecordRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "recorder.FetchShiftRecordRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "record_id", kind: "scalar", T: 12 /* ScalarType.BYTES */, opt: true },
    { no: 2, name: "game_type", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 3, name: "game_subtype", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 5, name: "game_code", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 6, name: "table_code", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 9, name: "record_ids", kind: "scalar", T: 12 /* ScalarType.BYTES */, repeated: true },
    { no: 10, name: "game_types", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 11, name: "game_subtypes", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 13, name: "game_codes", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 14, name: "table_codes", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 20, name: "query", kind: "message", T: RecordQuery },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FetchShiftRecordRequest {
    return new FetchShiftRecordRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FetchShiftRecordRequest {
    return new FetchShiftRecordRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FetchShiftRecordRequest {
    return new FetchShiftRecordRequest().fromJsonString(jsonString, options);
  }

  static equals(a: FetchShiftRecordRequest | PlainMessage<FetchShiftRecordRequest> | undefined, b: FetchShiftRecordRequest | PlainMessage<FetchShiftRecordRequest> | undefined): boolean {
    return proto3.util.equals(FetchShiftRecordRequest, a, b);
  }
}

/**
 * @generated from message recorder.FetchShiftRecordResponse
 */
export class FetchShiftRecordResponse extends Message<FetchShiftRecordResponse> {
  /**
   * @generated from field: repeated recorder.ShiftRecord shift_record = 1;
   */
  shiftRecord: ShiftRecord[] = [];

  constructor(data?: PartialMessage<FetchShiftRecordResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "recorder.FetchShiftRecordResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "shift_record", kind: "message", T: ShiftRecord, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FetchShiftRecordResponse {
    return new FetchShiftRecordResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FetchShiftRecordResponse {
    return new FetchShiftRecordResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FetchShiftRecordResponse {
    return new FetchShiftRecordResponse().fromJsonString(jsonString, options);
  }

  static equals(a: FetchShiftRecordResponse | PlainMessage<FetchShiftRecordResponse> | undefined, b: FetchShiftRecordResponse | PlainMessage<FetchShiftRecordResponse> | undefined): boolean {
    return proto3.util.equals(FetchShiftRecordResponse, a, b);
  }
}

/**
 * @generated from message recorder.FetchShuffleRecordRequest
 */
export class FetchShuffleRecordRequest extends Message<FetchShuffleRecordRequest> {
  /**
   * 紀錄ID
   *
   * @generated from field: optional bytes record_id = 1;
   */
  recordId?: Uint8Array;

  /**
   * 遊戲類型
   *
   * @generated from field: optional string game_type = 2;
   */
  gameType?: string;

  /**
   * 遊戲子類型
   *
   * @generated from field: optional string game_subtype = 3;
   */
  gameSubtype?: string;

  /**
   * 遊戲代碼
   *
   * @generated from field: optional string game_code = 5;
   */
  gameCode?: string;

  /**
   * 桌代碼
   *
   * @generated from field: optional string table_code = 6;
   */
  tableCode?: string;

  /**
   * 班代碼
   *
   * @generated from field: optional string shift_code = 7;
   */
  shiftCode?: string;

  /**
   * 洗牌代碼
   *
   * @generated from field: optional string shuffle_code = 8;
   */
  shuffleCode?: string;

  /**
   * 允許的紀錄ID
   *
   * @generated from field: repeated bytes record_ids = 9;
   */
  recordIds: Uint8Array[] = [];

  /**
   * 允許的遊戲類型
   *
   * @generated from field: repeated string game_types = 10;
   */
  gameTypes: string[] = [];

  /**
   * 允許的遊戲子類型
   *
   * @generated from field: repeated string game_subtypes = 11;
   */
  gameSubtypes: string[] = [];

  /**
   * 允許的遊戲代碼
   *
   * @generated from field: repeated string game_codes = 13;
   */
  gameCodes: string[] = [];

  /**
   * 允許的桌代碼
   *
   * @generated from field: repeated string table_codes = 14;
   */
  tableCodes: string[] = [];

  /**
   * 允許的班代碼
   *
   * @generated from field: repeated string shift_codes = 15;
   */
  shiftCodes: string[] = [];

  /**
   * 允許的洗牌代碼
   *
   * @generated from field: repeated string shuffle_codes = 16;
   */
  shuffleCodes: string[] = [];

  /**
   * 查詢限制
   *
   * @generated from field: recorder.RecordQuery query = 20;
   */
  query?: RecordQuery;

  constructor(data?: PartialMessage<FetchShuffleRecordRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "recorder.FetchShuffleRecordRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "record_id", kind: "scalar", T: 12 /* ScalarType.BYTES */, opt: true },
    { no: 2, name: "game_type", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 3, name: "game_subtype", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 5, name: "game_code", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 6, name: "table_code", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 7, name: "shift_code", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 8, name: "shuffle_code", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 9, name: "record_ids", kind: "scalar", T: 12 /* ScalarType.BYTES */, repeated: true },
    { no: 10, name: "game_types", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 11, name: "game_subtypes", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 13, name: "game_codes", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 14, name: "table_codes", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 15, name: "shift_codes", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 16, name: "shuffle_codes", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 20, name: "query", kind: "message", T: RecordQuery },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FetchShuffleRecordRequest {
    return new FetchShuffleRecordRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FetchShuffleRecordRequest {
    return new FetchShuffleRecordRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FetchShuffleRecordRequest {
    return new FetchShuffleRecordRequest().fromJsonString(jsonString, options);
  }

  static equals(a: FetchShuffleRecordRequest | PlainMessage<FetchShuffleRecordRequest> | undefined, b: FetchShuffleRecordRequest | PlainMessage<FetchShuffleRecordRequest> | undefined): boolean {
    return proto3.util.equals(FetchShuffleRecordRequest, a, b);
  }
}

/**
 * @generated from message recorder.FetchShuffleRecordResponse
 */
export class FetchShuffleRecordResponse extends Message<FetchShuffleRecordResponse> {
  /**
   * @generated from field: repeated recorder.ShuffleRecord shuffle_record = 1;
   */
  shuffleRecord: ShuffleRecord[] = [];

  constructor(data?: PartialMessage<FetchShuffleRecordResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "recorder.FetchShuffleRecordResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "shuffle_record", kind: "message", T: ShuffleRecord, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FetchShuffleRecordResponse {
    return new FetchShuffleRecordResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FetchShuffleRecordResponse {
    return new FetchShuffleRecordResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FetchShuffleRecordResponse {
    return new FetchShuffleRecordResponse().fromJsonString(jsonString, options);
  }

  static equals(a: FetchShuffleRecordResponse | PlainMessage<FetchShuffleRecordResponse> | undefined, b: FetchShuffleRecordResponse | PlainMessage<FetchShuffleRecordResponse> | undefined): boolean {
    return proto3.util.equals(FetchShuffleRecordResponse, a, b);
  }
}

/**
 * @generated from message recorder.FetchRoundRecordRequest
 */
export class FetchRoundRecordRequest extends Message<FetchRoundRecordRequest> {
  /**
   * 紀錄ID
   *
   * @generated from field: optional bytes record_id = 1;
   */
  recordId?: Uint8Array;

  /**
   * 遊戲類型
   *
   * @generated from field: optional string game_type = 2;
   */
  gameType?: string;

  /**
   * 遊戲子類型
   *
   * @generated from field: optional string game_subtype = 3;
   */
  gameSubtype?: string;

  /**
   * 遊戲代碼
   *
   * @generated from field: optional string game_code = 5;
   */
  gameCode?: string;

  /**
   * 桌代碼
   *
   * @generated from field: optional string table_code = 6;
   */
  tableCode?: string;

  /**
   * 班代碼
   *
   * @generated from field: optional string shift_code = 7;
   */
  shiftCode?: string;

  /**
   * 局代碼
   *
   * @generated from field: optional string round_code = 8;
   */
  roundCode?: string;

  /**
   * 允許的紀錄ID
   *
   * @generated from field: repeated bytes record_ids = 9;
   */
  recordIds: Uint8Array[] = [];

  /**
   * 允許的遊戲類型
   *
   * @generated from field: repeated string game_types = 10;
   */
  gameTypes: string[] = [];

  /**
   * 允許的遊戲子類型
   *
   * @generated from field: repeated string game_subtypes = 11;
   */
  gameSubtypes: string[] = [];

  /**
   * 允許的遊戲代碼
   *
   * @generated from field: repeated string game_codes = 13;
   */
  gameCodes: string[] = [];

  /**
   * 允許的桌代碼
   *
   * @generated from field: repeated string table_codes = 14;
   */
  tableCodes: string[] = [];

  /**
   * 允許的班代碼
   *
   * @generated from field: repeated string shift_codes = 15;
   */
  shiftCodes: string[] = [];

  /**
   * 允許的局代碼
   *
   * @generated from field: repeated string round_codes = 16;
   */
  roundCodes: string[] = [];

  /**
   * 查詢限制
   *
   * @generated from field: recorder.RecordQuery query = 20;
   */
  query?: RecordQuery;

  constructor(data?: PartialMessage<FetchRoundRecordRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "recorder.FetchRoundRecordRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "record_id", kind: "scalar", T: 12 /* ScalarType.BYTES */, opt: true },
    { no: 2, name: "game_type", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 3, name: "game_subtype", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 5, name: "game_code", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 6, name: "table_code", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 7, name: "shift_code", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 8, name: "round_code", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 9, name: "record_ids", kind: "scalar", T: 12 /* ScalarType.BYTES */, repeated: true },
    { no: 10, name: "game_types", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 11, name: "game_subtypes", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 13, name: "game_codes", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 14, name: "table_codes", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 15, name: "shift_codes", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 16, name: "round_codes", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 20, name: "query", kind: "message", T: RecordQuery },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FetchRoundRecordRequest {
    return new FetchRoundRecordRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FetchRoundRecordRequest {
    return new FetchRoundRecordRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FetchRoundRecordRequest {
    return new FetchRoundRecordRequest().fromJsonString(jsonString, options);
  }

  static equals(a: FetchRoundRecordRequest | PlainMessage<FetchRoundRecordRequest> | undefined, b: FetchRoundRecordRequest | PlainMessage<FetchRoundRecordRequest> | undefined): boolean {
    return proto3.util.equals(FetchRoundRecordRequest, a, b);
  }
}

/**
 * @generated from message recorder.FetchRoundRecordResponse
 */
export class FetchRoundRecordResponse extends Message<FetchRoundRecordResponse> {
  /**
   * @generated from field: repeated recorder.RoundRecord round_record = 1;
   */
  roundRecord: RoundRecord[] = [];

  constructor(data?: PartialMessage<FetchRoundRecordResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "recorder.FetchRoundRecordResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "round_record", kind: "message", T: RoundRecord, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FetchRoundRecordResponse {
    return new FetchRoundRecordResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FetchRoundRecordResponse {
    return new FetchRoundRecordResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FetchRoundRecordResponse {
    return new FetchRoundRecordResponse().fromJsonString(jsonString, options);
  }

  static equals(a: FetchRoundRecordResponse | PlainMessage<FetchRoundRecordResponse> | undefined, b: FetchRoundRecordResponse | PlainMessage<FetchRoundRecordResponse> | undefined): boolean {
    return proto3.util.equals(FetchRoundRecordResponse, a, b);
  }
}

/**
 * 遊戲供應
 *
 * @generated from message recorder.GameProvide
 */
export class GameProvide extends Message<GameProvide> {
  /**
   * 遊戲類型
   *
   * @generated from field: string game_type = 2;
   */
  gameType = "";

  /**
   * 遊戲子類型
   *
   * @generated from field: string game_subtype = 3;
   */
  gameSubtype = "";

  /**
   * 遊戲代碼
   *
   * @generated from field: string game_code = 4;
   */
  gameCode = "";

  /**
   * 標籤
   *
   * @generated from field: map<string, string> tags = 5;
   */
  tags: { [key: string]: string } = {};

  /**
   * 維護中
   *
   * @generated from field: bool maintenance = 7;
   */
  maintenance = false;

  constructor(data?: PartialMessage<GameProvide>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "recorder.GameProvide";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 2, name: "game_type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "game_subtype", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "game_code", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "tags", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "scalar", T: 9 /* ScalarType.STRING */} },
    { no: 7, name: "maintenance", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GameProvide {
    return new GameProvide().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GameProvide {
    return new GameProvide().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GameProvide {
    return new GameProvide().fromJsonString(jsonString, options);
  }

  static equals(a: GameProvide | PlainMessage<GameProvide> | undefined, b: GameProvide | PlainMessage<GameProvide> | undefined): boolean {
    return proto3.util.equals(GameProvide, a, b);
  }
}

/**
 * @generated from message recorder.FetchGameProvideListResponse
 */
export class FetchGameProvideListResponse extends Message<FetchGameProvideListResponse> {
  /**
   * 桌列表
   *
   * @generated from field: repeated recorder.GameProvide game_provides = 1;
   */
  gameProvides: GameProvide[] = [];

  constructor(data?: PartialMessage<FetchGameProvideListResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "recorder.FetchGameProvideListResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "game_provides", kind: "message", T: GameProvide, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FetchGameProvideListResponse {
    return new FetchGameProvideListResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FetchGameProvideListResponse {
    return new FetchGameProvideListResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FetchGameProvideListResponse {
    return new FetchGameProvideListResponse().fromJsonString(jsonString, options);
  }

  static equals(a: FetchGameProvideListResponse | PlainMessage<FetchGameProvideListResponse> | undefined, b: FetchGameProvideListResponse | PlainMessage<FetchGameProvideListResponse> | undefined): boolean {
    return proto3.util.equals(FetchGameProvideListResponse, a, b);
  }
}

/**
 * @generated from message recorder.CurrentGame
 */
export class CurrentGame extends Message<CurrentGame> {
  /**
   * 遊戲代碼
   *
   * @generated from field: string game_code = 5;
   */
  gameCode = "";

  /**
   * 班
   *
   * @generated from field: optional recorder.ShiftRecord shift = 7;
   */
  shift?: ShiftRecord;

  /**
   * 遊戲局
   *
   * @generated from field: optional recorder.RoundRecord round = 9;
   */
  round?: RoundRecord;

  /**
   * 洗牌
   *
   * @generated from field: optional recorder.ShuffleRecord shuffle = 10;
   */
  shuffle?: ShuffleRecord;

  /**
   * 附加媒體
   *
   * @generated from field: map<string, recorder.URLMedia> map_mideas = 24;
   */
  mapMideas: { [key: string]: URLMedia } = {};

  constructor(data?: PartialMessage<CurrentGame>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "recorder.CurrentGame";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 5, name: "game_code", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "shift", kind: "message", T: ShiftRecord, opt: true },
    { no: 9, name: "round", kind: "message", T: RoundRecord, opt: true },
    { no: 10, name: "shuffle", kind: "message", T: ShuffleRecord, opt: true },
    { no: 24, name: "map_mideas", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: URLMedia} },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CurrentGame {
    return new CurrentGame().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CurrentGame {
    return new CurrentGame().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CurrentGame {
    return new CurrentGame().fromJsonString(jsonString, options);
  }

  static equals(a: CurrentGame | PlainMessage<CurrentGame> | undefined, b: CurrentGame | PlainMessage<CurrentGame> | undefined): boolean {
    return proto3.util.equals(CurrentGame, a, b);
  }
}

/**
 * @generated from message recorder.FetchCurrentGameRequest
 */
export class FetchCurrentGameRequest extends Message<FetchCurrentGameRequest> {
  /**
   * 查詢的Table Code
   *
   * @generated from field: repeated string game_codes = 1;
   */
  gameCodes: string[] = [];

  /**
   * 返回Shift資訊
   *
   * @generated from field: bool shift = 7;
   */
  shift = false;

  /**
   * 返回Shuffle資訊
   *
   * @generated from field: bool shuffle = 10;
   */
  shuffle = false;

  /**
   * 返回直播網址
   *
   * @generated from field: bool stream = 3;
   */
  stream = false;

  constructor(data?: PartialMessage<FetchCurrentGameRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "recorder.FetchCurrentGameRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "game_codes", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 7, name: "shift", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 10, name: "shuffle", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 3, name: "stream", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FetchCurrentGameRequest {
    return new FetchCurrentGameRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FetchCurrentGameRequest {
    return new FetchCurrentGameRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FetchCurrentGameRequest {
    return new FetchCurrentGameRequest().fromJsonString(jsonString, options);
  }

  static equals(a: FetchCurrentGameRequest | PlainMessage<FetchCurrentGameRequest> | undefined, b: FetchCurrentGameRequest | PlainMessage<FetchCurrentGameRequest> | undefined): boolean {
    return proto3.util.equals(FetchCurrentGameRequest, a, b);
  }
}

/**
 * @generated from message recorder.FetchCurrentGameResponse
 */
export class FetchCurrentGameResponse extends Message<FetchCurrentGameResponse> {
  /**
   * Table Code 對應的當下 Current Table
   *
   * @generated from field: map<string, recorder.CurrentGame> map_current_games = 1;
   */
  mapCurrentGames: { [key: string]: CurrentGame } = {};

  /**
   * 時間戳
   *
   * @generated from field: google.protobuf.Timestamp ts = 2;
   */
  ts?: Timestamp;

  constructor(data?: PartialMessage<FetchCurrentGameResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "recorder.FetchCurrentGameResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "map_current_games", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: CurrentGame} },
    { no: 2, name: "ts", kind: "message", T: Timestamp },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FetchCurrentGameResponse {
    return new FetchCurrentGameResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FetchCurrentGameResponse {
    return new FetchCurrentGameResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FetchCurrentGameResponse {
    return new FetchCurrentGameResponse().fromJsonString(jsonString, options);
  }

  static equals(a: FetchCurrentGameResponse | PlainMessage<FetchCurrentGameResponse> | undefined, b: FetchCurrentGameResponse | PlainMessage<FetchCurrentGameResponse> | undefined): boolean {
    return proto3.util.equals(FetchCurrentGameResponse, a, b);
  }
}

