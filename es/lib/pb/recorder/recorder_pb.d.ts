import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, Timestamp } from "@bufbuild/protobuf";
import { CardList, Result, RoundRecord, ShuffleRecord, Step } from "./record_pb";
/**
 * @generated from message recorder.RecordIDResponse
 */
export declare class RecordIDResponse extends Message<RecordIDResponse> {
    /**
     * 紀錄ID
     *
     * @generated from field: bytes record_id = 1;
     */
    recordId: Uint8Array;
    constructor(data?: PartialMessage<RecordIDResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "recorder.RecordIDResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RecordIDResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RecordIDResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RecordIDResponse;
    static equals(a: RecordIDResponse | PlainMessage<RecordIDResponse> | undefined, b: RecordIDResponse | PlainMessage<RecordIDResponse> | undefined): boolean;
}
/**
 * @generated from message recorder.RecordShuffleStartedRequest
 */
export declare class RecordShuffleStartedRequest extends Message<RecordShuffleStartedRequest> {
    /**
     * 遊戲類型
     *
     * @generated from field: string game_type = 2;
     */
    gameType: string;
    /**
     * 遊戲子類型
     *
     * @generated from field: string game_subtype = 3;
     */
    gameSubtype: string;
    /**
     * 遊戲版本
     *
     * @generated from field: string game_version = 4;
     */
    gameVersion: string;
    /**
     * 桌代碼
     *
     * @generated from field: string table_code = 5;
     */
    tableCode: string;
    /**
     * 洗牌代碼
     *
     * @generated from field: string shuffle_code = 6;
     */
    shuffleCode: string;
    /**
     * 時間
     *
     * @generated from field: google.protobuf.Timestamp ts_start = 7;
     */
    tsStart?: Timestamp;
    constructor(data?: PartialMessage<RecordShuffleStartedRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "recorder.RecordShuffleStartedRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RecordShuffleStartedRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RecordShuffleStartedRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RecordShuffleStartedRequest;
    static equals(a: RecordShuffleStartedRequest | PlainMessage<RecordShuffleStartedRequest> | undefined, b: RecordShuffleStartedRequest | PlainMessage<RecordShuffleStartedRequest> | undefined): boolean;
}
/**
 * @generated from message recorder.RecordShuffleDoneRequest
 */
export declare class RecordShuffleDoneRequest extends Message<RecordShuffleDoneRequest> {
    /**
     * 紀錄ID
     *
     * @generated from field: bytes record_id = 1;
     */
    recordId: Uint8Array;
    /**
     * 時間
     *
     * @generated from field: google.protobuf.Timestamp ts_done = 5;
     */
    tsDone?: Timestamp;
    /**
     * 使用洗牌代碼
     *
     * @generated from field: string shuffle_code = 6;
     */
    shuffleCode: string;
    /**
     * 洗牌類型
     * key: ResourceTypeCode；value: 卡牌陣列
     *
     * @generated from field: map<int32, recorder.CardList> cards = 7;
     */
    cards: {
        [key: number]: CardList;
    };
    /**
     * 起始位置（削牌後）
     *
     * @generated from field: int64 start_index = 9;
     */
    startIndex: bigint;
    /**
     * 切牌位置
     *
     * @generated from field: int64 cut_index = 10;
     */
    cutIndex: bigint;
    constructor(data?: PartialMessage<RecordShuffleDoneRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "recorder.RecordShuffleDoneRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RecordShuffleDoneRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RecordShuffleDoneRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RecordShuffleDoneRequest;
    static equals(a: RecordShuffleDoneRequest | PlainMessage<RecordShuffleDoneRequest> | undefined, b: RecordShuffleDoneRequest | PlainMessage<RecordShuffleDoneRequest> | undefined): boolean;
}
/**
 * @generated from message recorder.RecordRoundStartRequest
 */
export declare class RecordRoundStartRequest extends Message<RecordRoundStartRequest> {
    /**
     * 遊戲類型
     *
     * @generated from field: string game_type = 2;
     */
    gameType: string;
    /**
     * 遊戲子類型
     *
     * @generated from field: string game_subtype = 3;
     */
    gameSubtype: string;
    /**
     * 遊戲版本
     *
     * @generated from field: string game_version = 4;
     */
    gameVersion: string;
    /**
     * 桌代碼
     *
     * @generated from field: string table_code = 5;
     */
    tableCode: string;
    /**
     * 局代碼
     *
     * @generated from field: string round_code = 6;
     */
    roundCode: string;
    /**
     * 時間
     *
     * @generated from field: google.protobuf.Timestamp ts_start = 7;
     */
    tsStart?: Timestamp;
    /**
     * 使用洗牌代碼
     *
     * @generated from field: string shuffle_code = 8;
     */
    shuffleCode: string;
    /**
     * 使用此洗牌第幾局，從1開始計算
     *
     * @generated from field: int64 shuffle_round = 9;
     */
    shuffleRound: bigint;
    constructor(data?: PartialMessage<RecordRoundStartRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "recorder.RecordRoundStartRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RecordRoundStartRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RecordRoundStartRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RecordRoundStartRequest;
    static equals(a: RecordRoundStartRequest | PlainMessage<RecordRoundStartRequest> | undefined, b: RecordRoundStartRequest | PlainMessage<RecordRoundStartRequest> | undefined): boolean;
}
/**
 * @generated from message recorder.RecordRoundStepsRequest
 */
export declare class RecordRoundStepsRequest extends Message<RecordRoundStepsRequest> {
    /**
     * 紀錄ID
     *
     * @generated from field: bytes record_id = 1;
     */
    recordId: Uint8Array;
    /**
     * 步驟
     *
     * @generated from field: repeated recorder.Step steps = 5;
     */
    steps: Step[];
    constructor(data?: PartialMessage<RecordRoundStepsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "recorder.RecordRoundStepsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RecordRoundStepsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RecordRoundStepsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RecordRoundStepsRequest;
    static equals(a: RecordRoundStepsRequest | PlainMessage<RecordRoundStepsRequest> | undefined, b: RecordRoundStepsRequest | PlainMessage<RecordRoundStepsRequest> | undefined): boolean;
}
/**
 * @generated from message recorder.RecordRoundResultsRequest
 */
export declare class RecordRoundResultsRequest extends Message<RecordRoundResultsRequest> {
    /**
     * 紀錄ID
     *
     * @generated from field: bytes record_id = 1;
     */
    recordId: Uint8Array;
    /**
     * 判讀結果
     *
     * @generated from field: repeated recorder.Result results = 6;
     */
    results: Result[];
    constructor(data?: PartialMessage<RecordRoundResultsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "recorder.RecordRoundResultsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RecordRoundResultsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RecordRoundResultsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RecordRoundResultsRequest;
    static equals(a: RecordRoundResultsRequest | PlainMessage<RecordRoundResultsRequest> | undefined, b: RecordRoundResultsRequest | PlainMessage<RecordRoundResultsRequest> | undefined): boolean;
}
/**
 * @generated from message recorder.RecordRoundCancelRequest
 */
export declare class RecordRoundCancelRequest extends Message<RecordRoundCancelRequest> {
    /**
     * 紀錄ID
     *
     * @generated from field: bytes record_id = 1;
     */
    recordId: Uint8Array;
    /**
     * 時間
     *
     * @generated from field: google.protobuf.Timestamp ts_cancel = 5;
     */
    tsCancel?: Timestamp;
    /**
     * 取消代碼
     *
     * @generated from field: string cancel_code = 6;
     */
    cancelCode: string;
    /**
     * 取消備註
     *
     * @generated from field: string cancel_message = 7;
     */
    cancelMessage: string;
    constructor(data?: PartialMessage<RecordRoundCancelRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "recorder.RecordRoundCancelRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RecordRoundCancelRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RecordRoundCancelRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RecordRoundCancelRequest;
    static equals(a: RecordRoundCancelRequest | PlainMessage<RecordRoundCancelRequest> | undefined, b: RecordRoundCancelRequest | PlainMessage<RecordRoundCancelRequest> | undefined): boolean;
}
/**
 * @generated from message recorder.RecordRoundFinishRequest
 */
export declare class RecordRoundFinishRequest extends Message<RecordRoundFinishRequest> {
    /**
     * 紀錄ID
     *
     * @generated from field: bytes record_id = 1;
     */
    recordId: Uint8Array;
    /**
     * 時間
     *
     * @generated from field: google.protobuf.Timestamp ts_finish = 5;
     */
    tsFinish?: Timestamp;
    constructor(data?: PartialMessage<RecordRoundFinishRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "recorder.RecordRoundFinishRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RecordRoundFinishRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RecordRoundFinishRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RecordRoundFinishRequest;
    static equals(a: RecordRoundFinishRequest | PlainMessage<RecordRoundFinishRequest> | undefined, b: RecordRoundFinishRequest | PlainMessage<RecordRoundFinishRequest> | undefined): boolean;
}
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
     * @generated from field: int64 limit = 3;
     */
    limit: bigint;
    /**
     * 頁面
     *
     * @generated from field: int64 page = 4;
     */
    page: bigint;
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
     * @generated from field: bytes record_id = 1;
     */
    recordId: Uint8Array;
    /**
     * 遊戲類型
     *
     * @generated from field: string game_type = 2;
     */
    gameType: string;
    /**
     * 遊戲子類型
     *
     * @generated from field: string game_subtype = 3;
     */
    gameSubtype: string;
    /**
     * 遊戲版本
     *
     * @generated from field: string game_version = 4;
     */
    gameVersion: string;
    /**
     * 桌代碼
     *
     * @generated from field: string table_code = 5;
     */
    tableCode: string;
    /**
     * 洗牌代碼
     *
     * @generated from field: string shuffle_code = 6;
     */
    shuffleCode: string;
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
     * 允許的遊戲版本
     *
     * @generated from field: repeated string game_versions = 12;
     */
    gameVersions: string[];
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
     * @generated from field: bytes record_id = 1;
     */
    recordId: Uint8Array;
    /**
     * 遊戲類型
     *
     * @generated from field: string game_type = 2;
     */
    gameType: string;
    /**
     * 遊戲子類型
     *
     * @generated from field: string game_subtype = 3;
     */
    gameSubtype: string;
    /**
     * 遊戲版本
     *
     * @generated from field: string game_version = 4;
     */
    gameVersion: string;
    /**
     * 桌代碼
     *
     * @generated from field: string table_code = 5;
     */
    tableCode: string;
    /**
     * 局代碼
     *
     * @generated from field: string round_code = 6;
     */
    roundCode: string;
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
     * 允許的遊戲版本
     *
     * @generated from field: repeated string game_versions = 12;
     */
    gameVersions: string[];
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
