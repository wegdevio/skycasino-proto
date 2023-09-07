import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, Timestamp } from "@bufbuild/protobuf";
import { Deck, Result, Step, URLMedia } from "./record_pb";
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
 * @generated from message recorder.RecordShiftStartedRequest
 */
export declare class RecordShiftStartedRequest extends Message<RecordShiftStartedRequest> {
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
     * 遊戲代碼
     *
     * @generated from field: string game_code = 5;
     */
    gameCode: string;
    /**
     * 桌代碼
     *
     * @generated from field: string table_code = 6;
     */
    tableCode: string;
    /**
     * 班代碼
     *
     * @generated from field: string shift_code = 7;
     */
    shiftCode: string;
    /**
     * 時間
     *
     * @generated from field: google.protobuf.Timestamp ts_start = 8;
     */
    tsStart?: Timestamp;
    constructor(data?: PartialMessage<RecordShiftStartedRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "recorder.RecordShiftStartedRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RecordShiftStartedRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RecordShiftStartedRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RecordShiftStartedRequest;
    static equals(a: RecordShiftStartedRequest | PlainMessage<RecordShiftStartedRequest> | undefined, b: RecordShiftStartedRequest | PlainMessage<RecordShiftStartedRequest> | undefined): boolean;
}
/**
 * @generated from message recorder.RecordShiftEndedRequest
 */
export declare class RecordShiftEndedRequest extends Message<RecordShiftEndedRequest> {
    /**
     * 紀錄ID
     *
     * @generated from field: bytes record_id = 1;
     */
    recordId: Uint8Array;
    /**
     * 時間
     *
     * @generated from field: google.protobuf.Timestamp ts_end = 5;
     */
    tsEnd?: Timestamp;
    constructor(data?: PartialMessage<RecordShiftEndedRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "recorder.RecordShiftEndedRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RecordShiftEndedRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RecordShiftEndedRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RecordShiftEndedRequest;
    static equals(a: RecordShiftEndedRequest | PlainMessage<RecordShiftEndedRequest> | undefined, b: RecordShiftEndedRequest | PlainMessage<RecordShiftEndedRequest> | undefined): boolean;
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
     * 遊戲代碼
     *
     * @generated from field: string game_code = 5;
     */
    gameCode: string;
    /**
     * 桌代碼
     *
     * @generated from field: string table_code = 6;
     */
    tableCode: string;
    /**
     * 洗牌代碼
     *
     * @generated from field: string shuffle_code = 10;
     */
    shuffleCode: string;
    /**
     * 時間
     *
     * @generated from field: google.protobuf.Timestamp ts_start = 12;
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
     * 洗牌類型
     * key: ResourceTypeCode；value: 牌靴
     *
     * @generated from field: map<int32, recorder.Deck> cards = 7;
     */
    cards: {
        [key: number]: Deck;
    };
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
     * 遊戲代碼
     *
     * @generated from field: string game_code = 5;
     */
    gameCode: string;
    /**
     * 桌代碼
     *
     * @generated from field: string table_code = 6;
     */
    tableCode: string;
    /**
     * 排班代碼
     *
     * @generated from field: string shift_code = 7;
     */
    shiftCode: string;
    /**
     * 此排班局數
     *
     * @generated from field: string shift_round = 8;
     */
    shiftRound: string;
    /**
     * 局代碼
     *
     * @generated from field: string round_code = 9;
     */
    roundCode: string;
    /**
     * 使用洗牌代碼
     *
     * @generated from field: string shuffle_code = 10;
     */
    shuffleCode: string;
    /**
     * 使用此洗牌第幾局，從1開始計算
     *
     * @generated from field: int64 shuffle_round = 11;
     */
    shuffleRound: bigint;
    /**
     * 開始時間
     *
     * @generated from field: google.protobuf.Timestamp ts_start = 12;
     */
    tsStart?: Timestamp;
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
 * 紀錄路紙
 *
 * @generated from message recorder.RecordRoadmapRequest
 */
export declare class RecordRoadmapRequest extends Message<RecordRoadmapRequest> {
    /**
     * 班紀錄ID
     *
     * TODO:
     *
     * @generated from field: bytes record_id = 1;
     */
    recordId: Uint8Array;
    constructor(data?: PartialMessage<RecordRoadmapRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "recorder.RecordRoadmapRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RecordRoadmapRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RecordRoadmapRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RecordRoadmapRequest;
    static equals(a: RecordRoadmapRequest | PlainMessage<RecordRoadmapRequest> | undefined, b: RecordRoadmapRequest | PlainMessage<RecordRoadmapRequest> | undefined): boolean;
}
/**
 * 紀錄回放
 *
 * @generated from message recorder.RecordRoundMediaRequest
 */
export declare class RecordRoundMediaRequest extends Message<RecordRoundMediaRequest> {
    /**
     * 遊戲局紀錄ID
     *
     * @generated from field: bytes record_id = 1;
     */
    recordId: Uint8Array;
    /**
     * 設定
     *
     * @generated from field: map<string, recorder.URLMedia> set = 2;
     */
    set: {
        [key: string]: URLMedia;
    };
    /**
     * 增加
     *
     * @generated from field: repeated recorder.URLMedia add = 3;
     */
    add: URLMedia[];
    /**
     * 移除
     *
     * @generated from field: repeated string remove = 4;
     */
    remove: string[];
    constructor(data?: PartialMessage<RecordRoundMediaRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "recorder.RecordRoundMediaRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RecordRoundMediaRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RecordRoundMediaRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RecordRoundMediaRequest;
    static equals(a: RecordRoundMediaRequest | PlainMessage<RecordRoundMediaRequest> | undefined, b: RecordRoundMediaRequest | PlainMessage<RecordRoundMediaRequest> | undefined): boolean;
}
