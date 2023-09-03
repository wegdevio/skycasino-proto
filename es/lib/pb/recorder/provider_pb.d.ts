import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, Timestamp } from "@bufbuild/protobuf";
import { RoundRecord, ShuffleRecord } from "./record_pb";
/**
 * @generated from message recorder.RecordQuery
 */
export declare class RecordQuery extends Message<RecordQuery> {
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
    constructor(data?: PartialMessage<RecordQuery>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "recorder.RecordQuery";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RecordQuery;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RecordQuery;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RecordQuery;
    static equals(a: RecordQuery | PlainMessage<RecordQuery> | undefined, b: RecordQuery | PlainMessage<RecordQuery> | undefined): boolean;
}
/**
 * @generated from message recorder.FetchShuffleRecordRequest
 */
export declare class FetchShuffleRecordRequest extends Message<FetchShuffleRecordRequest> {
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
     * 桌代碼
     *
     * @generated from field: optional string table_code = 5;
     */
    tableCode?: string;
    /**
     * 洗牌代碼
     *
     * @generated from field: optional string shuffle_code = 6;
     */
    shuffleCode?: string;
    /**
     * 允許的紀錄ID
     *
     * @generated from field: repeated bytes record_ids = 9;
     */
    recordIds: Uint8Array[];
    /**
     * 允許的遊戲類型
     *
     * @generated from field: repeated string game_types = 10;
     */
    gameTypes: string[];
    /**
     * 允許的遊戲子類型
     *
     * @generated from field: repeated string game_subtypes = 11;
     */
    gameSubtypes: string[];
    /**
     * 允許的桌代碼
     *
     * @generated from field: repeated string table_codes = 13;
     */
    tableCodes: string[];
    /**
     * 允許的洗牌代碼
     *
     * @generated from field: repeated string shuffle_codes = 14;
     */
    shuffleCodes: string[];
    /**
     * 查詢限制
     *
     * @generated from field: recorder.RecordQuery query = 16;
     */
    query?: RecordQuery;
    constructor(data?: PartialMessage<FetchShuffleRecordRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "recorder.FetchShuffleRecordRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FetchShuffleRecordRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FetchShuffleRecordRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FetchShuffleRecordRequest;
    static equals(a: FetchShuffleRecordRequest | PlainMessage<FetchShuffleRecordRequest> | undefined, b: FetchShuffleRecordRequest | PlainMessage<FetchShuffleRecordRequest> | undefined): boolean;
}
/**
 * @generated from message recorder.FetchShuffleRecordResponse
 */
export declare class FetchShuffleRecordResponse extends Message<FetchShuffleRecordResponse> {
    /**
     * @generated from field: repeated recorder.ShuffleRecord shuffle_record = 1;
     */
    shuffleRecord: ShuffleRecord[];
    constructor(data?: PartialMessage<FetchShuffleRecordResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "recorder.FetchShuffleRecordResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FetchShuffleRecordResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FetchShuffleRecordResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FetchShuffleRecordResponse;
    static equals(a: FetchShuffleRecordResponse | PlainMessage<FetchShuffleRecordResponse> | undefined, b: FetchShuffleRecordResponse | PlainMessage<FetchShuffleRecordResponse> | undefined): boolean;
}
/**
 * @generated from message recorder.FetchRoundRecordRequest
 */
export declare class FetchRoundRecordRequest extends Message<FetchRoundRecordRequest> {
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
     * 桌代碼
     *
     * @generated from field: optional string table_code = 5;
     */
    tableCode?: string;
    /**
     * 局代碼
     *
     * @generated from field: optional string round_code = 6;
     */
    roundCode?: string;
    /**
     * 允許的紀錄ID
     *
     * @generated from field: repeated bytes record_ids = 9;
     */
    recordIds: Uint8Array[];
    /**
     * 允許的遊戲類型
     *
     * @generated from field: repeated string game_types = 10;
     */
    gameTypes: string[];
    /**
     * 允許的遊戲子類型
     *
     * @generated from field: repeated string game_subtypes = 11;
     */
    gameSubtypes: string[];
    /**
     * 允許的桌代碼
     *
     * @generated from field: repeated string table_codes = 13;
     */
    tableCodes: string[];
    /**
     * 允許的局代碼
     *
     * @generated from field: repeated string round_codes = 14;
     */
    roundCodes: string[];
    /**
     * 查詢限制
     *
     * @generated from field: recorder.RecordQuery query = 16;
     */
    query?: RecordQuery;
    constructor(data?: PartialMessage<FetchRoundRecordRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "recorder.FetchRoundRecordRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FetchRoundRecordRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FetchRoundRecordRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FetchRoundRecordRequest;
    static equals(a: FetchRoundRecordRequest | PlainMessage<FetchRoundRecordRequest> | undefined, b: FetchRoundRecordRequest | PlainMessage<FetchRoundRecordRequest> | undefined): boolean;
}
/**
 * @generated from message recorder.FetchRoundRecordResponse
 */
export declare class FetchRoundRecordResponse extends Message<FetchRoundRecordResponse> {
    /**
     * @generated from field: repeated recorder.RoundRecord round_record = 1;
     */
    roundRecord: RoundRecord[];
    constructor(data?: PartialMessage<FetchRoundRecordResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "recorder.FetchRoundRecordResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FetchRoundRecordResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FetchRoundRecordResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FetchRoundRecordResponse;
    static equals(a: FetchRoundRecordResponse | PlainMessage<FetchRoundRecordResponse> | undefined, b: FetchRoundRecordResponse | PlainMessage<FetchRoundRecordResponse> | undefined): boolean;
}
/**
 * 遊戲供應
 *
 * @generated from message recorder.TableProvide
 */
export declare class TableProvide extends Message<TableProvide> {
    /**
     * 遊戲代碼
     *
     * @generated from field: string game_code = 2;
     */
    gameCode: string;
    /**
     * 遊戲類型
     *
     * @generated from field: string game_type = 3;
     */
    gameType: string;
    /**
     * 遊戲子類型
     *
     * @generated from field: string game_subtype = 4;
     */
    gameSubtype: string;
    /**
     * 桌代碼
     *
     * @generated from field: string table_code = 5;
     */
    tableCode: string;
    /**
     * 標籤
     *
     * @generated from field: map<string, string> tags = 6;
     */
    tags: {
        [key: string]: string;
    };
    /**
     * 維護中
     *
     * @generated from field: bool maintenance = 7;
     */
    maintenance: boolean;
    constructor(data?: PartialMessage<TableProvide>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "recorder.TableProvide";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TableProvide;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TableProvide;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TableProvide;
    static equals(a: TableProvide | PlainMessage<TableProvide> | undefined, b: TableProvide | PlainMessage<TableProvide> | undefined): boolean;
}
/**
 * @generated from message recorder.FetchTableProvideListResponse
 */
export declare class FetchTableProvideListResponse extends Message<FetchTableProvideListResponse> {
    /**
     * 桌列表
     *
     * @generated from field: repeated recorder.TableProvide table_provides = 1;
     */
    tableProvides: TableProvide[];
    constructor(data?: PartialMessage<FetchTableProvideListResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "recorder.FetchTableProvideListResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FetchTableProvideListResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FetchTableProvideListResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FetchTableProvideListResponse;
    static equals(a: FetchTableProvideListResponse | PlainMessage<FetchTableProvideListResponse> | undefined, b: FetchTableProvideListResponse | PlainMessage<FetchTableProvideListResponse> | undefined): boolean;
}
/**
 * @generated from message recorder.TableStream
 */
export declare class TableStream extends Message<TableStream> {
    /**
     * url
     *
     * @generated from field: string url = 1;
     */
    url: string;
    /**
     * 類型：hls, flv...
     *
     * @generated from field: string mime = 2;
     */
    mime: string;
    /**
     * 封面截圖
     *
     * @generated from field: string cover_url = 3;
     */
    coverUrl: string;
    /**
     * 封面截圖類型
     *
     * @generated from field: string cover_mime = 4;
     */
    coverMime: string;
    constructor(data?: PartialMessage<TableStream>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "recorder.TableStream";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TableStream;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TableStream;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TableStream;
    static equals(a: TableStream | PlainMessage<TableStream> | undefined, b: TableStream | PlainMessage<TableStream> | undefined): boolean;
}
/**
 * @generated from message recorder.CurrentTable
 */
export declare class CurrentTable extends Message<CurrentTable> {
    /**
     * 桌代碼
     *
     * @generated from field: string table_code = 1;
     */
    tableCode: string;
    /**
     * 紀錄
     *
     * @generated from field: optional recorder.RoundRecord round = 2;
     */
    round?: RoundRecord;
    /**
     * 洗牌
     *
     * @generated from field: optional recorder.ShuffleRecord shuffle = 3;
     */
    shuffle?: ShuffleRecord;
    /**
     * 直播網址列表
     *
     * @generated from field: map<string, recorder.TableStream> map_table_stream = 4;
     */
    mapTableStream: {
        [key: string]: TableStream;
    };
    constructor(data?: PartialMessage<CurrentTable>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "recorder.CurrentTable";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CurrentTable;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CurrentTable;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CurrentTable;
    static equals(a: CurrentTable | PlainMessage<CurrentTable> | undefined, b: CurrentTable | PlainMessage<CurrentTable> | undefined): boolean;
}
/**
 * @generated from message recorder.FetchCurrentTableRequest
 */
export declare class FetchCurrentTableRequest extends Message<FetchCurrentTableRequest> {
    /**
     * 查詢的Table Code
     *
     * @generated from field: repeated string table_codes = 1;
     */
    tableCodes: string[];
    /**
     * 返回Shuffle資訊
     *
     * @generated from field: bool shuffle = 2;
     */
    shuffle: boolean;
    /**
     * 返回直播網址
     *
     * @generated from field: bool stream = 3;
     */
    stream: boolean;
    constructor(data?: PartialMessage<FetchCurrentTableRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "recorder.FetchCurrentTableRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FetchCurrentTableRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FetchCurrentTableRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FetchCurrentTableRequest;
    static equals(a: FetchCurrentTableRequest | PlainMessage<FetchCurrentTableRequest> | undefined, b: FetchCurrentTableRequest | PlainMessage<FetchCurrentTableRequest> | undefined): boolean;
}
/**
 * @generated from message recorder.FetchCurrentTableResponse
 */
export declare class FetchCurrentTableResponse extends Message<FetchCurrentTableResponse> {
    /**
     * Table Code 對應的當下 Current Table
     *
     * @generated from field: map<string, recorder.CurrentTable> map_current_table = 1;
     */
    mapCurrentTable: {
        [key: string]: CurrentTable;
    };
    /**
     * 時間戳
     *
     * @generated from field: google.protobuf.Timestamp ts = 2;
     */
    ts?: Timestamp;
    constructor(data?: PartialMessage<FetchCurrentTableResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "recorder.FetchCurrentTableResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FetchCurrentTableResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FetchCurrentTableResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FetchCurrentTableResponse;
    static equals(a: FetchCurrentTableResponse | PlainMessage<FetchCurrentTableResponse> | undefined, b: FetchCurrentTableResponse | PlainMessage<FetchCurrentTableResponse> | undefined): boolean;
}
