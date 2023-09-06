import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, Timestamp } from "@bufbuild/protobuf";
import { RoundRecord, ShiftRecord, ShuffleRecord, URLMedia } from "./record_pb";
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
 * @generated from message recorder.FetchShiftRecordRequest
 */
export declare class FetchShiftRecordRequest extends Message<FetchShiftRecordRequest> {
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
     * 允許的遊戲代碼
     *
     * @generated from field: repeated string game_codes = 13;
     */
    gameCodes: string[];
    /**
     * 允許的桌代碼
     *
     * @generated from field: repeated string table_codes = 14;
     */
    tableCodes: string[];
    /**
     * 查詢限制
     *
     * @generated from field: recorder.RecordQuery query = 20;
     */
    query?: RecordQuery;
    constructor(data?: PartialMessage<FetchShiftRecordRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "recorder.FetchShiftRecordRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FetchShiftRecordRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FetchShiftRecordRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FetchShiftRecordRequest;
    static equals(a: FetchShiftRecordRequest | PlainMessage<FetchShiftRecordRequest> | undefined, b: FetchShiftRecordRequest | PlainMessage<FetchShiftRecordRequest> | undefined): boolean;
}
/**
 * @generated from message recorder.FetchShiftRecordResponse
 */
export declare class FetchShiftRecordResponse extends Message<FetchShiftRecordResponse> {
    /**
     * @generated from field: repeated recorder.ShiftRecord shift_record = 1;
     */
    shiftRecord: ShiftRecord[];
    constructor(data?: PartialMessage<FetchShiftRecordResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "recorder.FetchShiftRecordResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FetchShiftRecordResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FetchShiftRecordResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FetchShiftRecordResponse;
    static equals(a: FetchShiftRecordResponse | PlainMessage<FetchShiftRecordResponse> | undefined, b: FetchShiftRecordResponse | PlainMessage<FetchShiftRecordResponse> | undefined): boolean;
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
     * 允許的遊戲代碼
     *
     * @generated from field: repeated string game_codes = 13;
     */
    gameCodes: string[];
    /**
     * 允許的桌代碼
     *
     * @generated from field: repeated string table_codes = 14;
     */
    tableCodes: string[];
    /**
     * 允許的班代碼
     *
     * @generated from field: repeated string shift_codes = 15;
     */
    shiftCodes: string[];
    /**
     * 允許的洗牌代碼
     *
     * @generated from field: repeated string shuffle_codes = 16;
     */
    shuffleCodes: string[];
    /**
     * 查詢限制
     *
     * @generated from field: recorder.RecordQuery query = 20;
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
     * 允許的遊戲代碼
     *
     * @generated from field: repeated string game_codes = 13;
     */
    gameCodes: string[];
    /**
     * 允許的桌代碼
     *
     * @generated from field: repeated string table_codes = 14;
     */
    tableCodes: string[];
    /**
     * 允許的班代碼
     *
     * @generated from field: repeated string shift_codes = 15;
     */
    shiftCodes: string[];
    /**
     * 允許的局代碼
     *
     * @generated from field: repeated string round_codes = 16;
     */
    roundCodes: string[];
    /**
     * 查詢限制
     *
     * @generated from field: recorder.RecordQuery query = 20;
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
 * @generated from message recorder.GameProvide
 */
export declare class GameProvide extends Message<GameProvide> {
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
     * 遊戲代碼
     *
     * @generated from field: string game_code = 4;
     */
    gameCode: string;
    /**
     * 標籤
     *
     * @generated from field: map<string, string> tags = 5;
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
    constructor(data?: PartialMessage<GameProvide>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "recorder.GameProvide";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GameProvide;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GameProvide;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GameProvide;
    static equals(a: GameProvide | PlainMessage<GameProvide> | undefined, b: GameProvide | PlainMessage<GameProvide> | undefined): boolean;
}
/**
 * @generated from message recorder.FetchGameProvideListResponse
 */
export declare class FetchGameProvideListResponse extends Message<FetchGameProvideListResponse> {
    /**
     * 桌列表
     *
     * @generated from field: repeated recorder.GameProvide game_provides = 1;
     */
    gameProvides: GameProvide[];
    constructor(data?: PartialMessage<FetchGameProvideListResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "recorder.FetchGameProvideListResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FetchGameProvideListResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FetchGameProvideListResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FetchGameProvideListResponse;
    static equals(a: FetchGameProvideListResponse | PlainMessage<FetchGameProvideListResponse> | undefined, b: FetchGameProvideListResponse | PlainMessage<FetchGameProvideListResponse> | undefined): boolean;
}
/**
 * @generated from message recorder.CurrentGame
 */
export declare class CurrentGame extends Message<CurrentGame> {
    /**
     * 遊戲代碼
     *
     * @generated from field: string game_code = 5;
     */
    gameCode: string;
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
    mapMideas: {
        [key: string]: URLMedia;
    };
    constructor(data?: PartialMessage<CurrentGame>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "recorder.CurrentGame";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CurrentGame;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CurrentGame;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CurrentGame;
    static equals(a: CurrentGame | PlainMessage<CurrentGame> | undefined, b: CurrentGame | PlainMessage<CurrentGame> | undefined): boolean;
}
/**
 * @generated from message recorder.FetchCurrentGameRequest
 */
export declare class FetchCurrentGameRequest extends Message<FetchCurrentGameRequest> {
    /**
     * 查詢的Table Code
     *
     * @generated from field: repeated string game_codes = 1;
     */
    gameCodes: string[];
    /**
     * 返回Shift資訊
     *
     * @generated from field: bool shift = 7;
     */
    shift: boolean;
    /**
     * 返回Shuffle資訊
     *
     * @generated from field: bool shuffle = 10;
     */
    shuffle: boolean;
    /**
     * 返回直播網址
     *
     * @generated from field: bool stream = 3;
     */
    stream: boolean;
    constructor(data?: PartialMessage<FetchCurrentGameRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "recorder.FetchCurrentGameRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FetchCurrentGameRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FetchCurrentGameRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FetchCurrentGameRequest;
    static equals(a: FetchCurrentGameRequest | PlainMessage<FetchCurrentGameRequest> | undefined, b: FetchCurrentGameRequest | PlainMessage<FetchCurrentGameRequest> | undefined): boolean;
}
/**
 * @generated from message recorder.FetchCurrentGameResponse
 */
export declare class FetchCurrentGameResponse extends Message<FetchCurrentGameResponse> {
    /**
     * Table Code 對應的當下 Current Table
     *
     * @generated from field: map<string, recorder.CurrentGame> map_current_games = 1;
     */
    mapCurrentGames: {
        [key: string]: CurrentGame;
    };
    /**
     * 時間戳
     *
     * @generated from field: google.protobuf.Timestamp ts = 2;
     */
    ts?: Timestamp;
    constructor(data?: PartialMessage<FetchCurrentGameResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "recorder.FetchCurrentGameResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FetchCurrentGameResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FetchCurrentGameResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FetchCurrentGameResponse;
    static equals(a: FetchCurrentGameResponse | PlainMessage<FetchCurrentGameResponse> | undefined, b: FetchCurrentGameResponse | PlainMessage<FetchCurrentGameResponse> | undefined): boolean;
}
