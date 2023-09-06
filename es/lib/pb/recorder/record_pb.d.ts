import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Any, Message, proto3, Timestamp } from "@bufbuild/protobuf";
/**
 * 動作類型
 *
 * @generated from enum recorder.StepActionType
 */
export declare enum StepActionType {
    /**
     * 未指定
     *
     * @generated from enum value: STEP_ACTION_TYPE_UNSPECIFIED = 0;
     */
    STEP_ACTION_TYPE_UNSPECIFIED = 0,
    /**
     * 派發資源
     *
     * @generated from enum value: ADD = 1;
     */
    ADD = 1,
    /**
     * 設定指定資源
     *
     * @generated from enum value: SET = 2;
     */
    SET = 2,
    /**
     * 改寫全部資源;
     *
     * @generated from enum value: SETALL = 3;
     */
    SETALL = 3,
    /**
     * 將資源從場上移除
     *
     * @generated from enum value: REMOVE = 4;
     */
    REMOVE = 4,
    /**
     * 讀取卡牌資料
     *
     * @generated from enum value: READ = 5;
     */
    READ = 5,
    /**
     * 讀卡但不可見
     *
     * @generated from enum value: READ_UNVISIBLE = 6;
     */
    READ_UNVISIBLE = 6,
    /**
     * 移轉資源
     *
     * @generated from enum value: TRANSFER = 7;
     */
    TRANSFER = 7,
    /**
     * 卡片正反面
     *
     * @generated from enum value: VISIBLE = 8;
     */
    VISIBLE = 8,
    /**
     * 卡牌狀態改變
     *
     * @generated from enum value: STATUS = 9;
     */
    STATUS = 9,
    /**
     * 此步驟不須修改資源
     *
     * @generated from enum value: NONE = 10;
     */
    NONE = 10
}
/**
 * 卡牌，代表在此局中使用的各類物品
 *
 * @generated from message recorder.Card
 */
export declare class Card extends Message<Card> {
    /**
     * 卡牌ID：牌唯一碼，同ID表示同一張實體牌。不使用此欄位填0。
     *
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * 卡牌代碼
     *
     * @generated from field: string code = 2;
     */
    code: string;
    /**
     * 順序
     *
     * @generated from field: int64 index = 3;
     */
    index: bigint;
    /**
     * 可見
     *
     * @generated from field: bool visible = 4;
     */
    visible: boolean;
    /**
     * 橫放、直放...
     *
     * @generated from field: optional int64 status = 5;
     */
    status?: bigint;
    /**
     * 明文
     *
     * @generated from field: optional string plain_text = 8;
     */
    plainText?: string;
    /**
     * 簽章
     *
     * @generated from field: optional string signature = 9;
     */
    signature?: string;
    /**
     * 簽章方法
     *
     * @generated from field: optional string sign_algorithm = 10;
     */
    signAlgorithm?: string;
    constructor(data?: PartialMessage<Card>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "recorder.Card";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Card;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Card;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Card;
    static equals(a: Card | PlainMessage<Card> | undefined, b: Card | PlainMessage<Card> | undefined): boolean;
}
/**
 * 卡牌列表
 *
 * @generated from message recorder.CardList
 */
export declare class CardList extends Message<CardList> {
    /**
     * @generated from field: string card_type = 1;
     */
    cardType: string;
    /**
     * 列表
     *
     * @generated from field: repeated recorder.Card list = 2;
     */
    list: Card[];
    constructor(data?: PartialMessage<CardList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "recorder.CardList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CardList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CardList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CardList;
    static equals(a: CardList | PlainMessage<CardList> | undefined, b: CardList | PlainMessage<CardList> | undefined): boolean;
}
/**
 * 執行動作：對某些資源進行增、刪、移轉
 *
 * @generated from message recorder.StepAction
 */
export declare class StepAction extends Message<StepAction> {
    /**
     * 行為說明代碼：StepActionCode
     *
     * @generated from field: int32 code = 2;
     */
    code: number;
    /**
     * 動作類型
     *
     * @generated from field: recorder.StepActionType type = 3;
     */
    type: StepActionType;
    /**
     * 資源擁有座位。
     *
     * @generated from field: optional int32 source_seat = 4;
     */
    sourceSeat?: number;
    /**
     * 資源轉移目標座位。
     *
     * @generated from field: optional int32 target_seat = 5;
     */
    targetSeat?: number;
    /**
     * 目標卡牌資源
     * key: ResourceTypeCode, value: 卡牌陣列
     *
     * @generated from field: map<int32, recorder.CardList> cards = 6;
     */
    cards: {
        [key: number]: CardList;
    };
    /**
     * 目標分數資源
     * key: ResourceTypeCode, value: 分數值。
     *
     * @generated from field: map<int32, int64> scores = 7;
     */
    scores: {
        [key: number]: bigint;
    };
    /**
     * （可選）附加資料
     *
     * @generated from field: google.protobuf.Any data = 8;
     */
    data?: Any;
    constructor(data?: PartialMessage<StepAction>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "recorder.StepAction";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StepAction;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StepAction;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StepAction;
    static equals(a: StepAction | PlainMessage<StepAction> | undefined, b: StepAction | PlainMessage<StepAction> | undefined): boolean;
}
/**
 * 遊戲步驟
 *
 * @generated from message recorder.Step
 */
export declare class Step extends Message<Step> {
    /**
     * 步驟代碼：StepCode
     *
     * @generated from field: int32 code = 2;
     */
    code: number;
    /**
     * 玩家、執行者：SeatCode
     *
     * @generated from field: optional int32 seat = 3;
     */
    seat?: number;
    /**
     * 時間戳
     *
     * @generated from field: google.protobuf.Timestamp timestamp = 5;
     */
    timestamp?: Timestamp;
    /**
     * 執行動作
     *
     * @generated from field: repeated recorder.StepAction actions = 6;
     */
    actions: StepAction[];
    /**
     * 執行錯誤
     *
     * @generated from field: optional string error = 8;
     */
    error?: string;
    /**
     * 取消
     *
     * @generated from field: optional bool cancel = 9;
     */
    cancel?: boolean;
    /**
     * 分配毫秒數
     *
     * @generated from field: optional int64 duration = 10;
     */
    duration?: bigint;
    constructor(data?: PartialMessage<Step>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "recorder.Step";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Step;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Step;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Step;
    static equals(a: Step | PlainMessage<Step> | undefined, b: Step | PlainMessage<Step> | undefined): boolean;
}
/**
 * 座位
 *
 * @generated from message recorder.Seat
 */
export declare class Seat extends Message<Seat> {
    /**
     * 座位功能代碼：SeatCode
     *
     * @generated from field: int32 code = 2;
     */
    code: number;
    /**
     * 各類手牌
     * key: ResourceTypeCode, value: 卡牌陣列
     *
     * @generated from field: map<int32, recorder.CardList> cards = 3;
     */
    cards: {
        [key: number]: CardList;
    };
    /**
     * 各類分數
     * key: ResourceTypeCode, value: 分數值。
     *
     * @generated from field: map<int32, int64> scores = 4;
     */
    scores: {
        [key: number]: bigint;
    };
    constructor(data?: PartialMessage<Seat>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "recorder.Seat";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Seat;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Seat;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Seat;
    static equals(a: Seat | PlainMessage<Seat> | undefined, b: Seat | PlainMessage<Seat> | undefined): boolean;
}
/**
 * 記錄各座位狀態
 *
 * @generated from message recorder.Result
 */
export declare class Result extends Message<Result> {
    /**
     * 判讀類型代碼：ResultRecordTypeCode
     *
     * @generated from field: int32 code = 2;
     */
    code: number;
    /**
     * 紀錄者座位代碼
     *
     * @generated from field: optional int32 by_seat = 3;
     */
    bySeat?: number;
    /**
     * 時間戳
     *
     * @generated from field: google.protobuf.Timestamp timestamp = 4;
     */
    timestamp?: Timestamp;
    /**
     * 座位組
     * key: SeatCode, value: Seat
     *
     * @generated from field: map<int32, recorder.Seat> seats = 5;
     */
    seats: {
        [key: number]: Seat;
    };
    constructor(data?: PartialMessage<Result>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "recorder.Result";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Result;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Result;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Result;
    static equals(a: Result | PlainMessage<Result> | undefined, b: Result | PlainMessage<Result> | undefined): boolean;
}
/**
 * 多媒體
 *
 * @generated from message recorder.URLMedia
 */
export declare class URLMedia extends Message<URLMedia> {
    /**
     * 代碼
     *
     * @generated from field: string code = 1;
     */
    code: string;
    /**
     * 類型：hls, flv...
     *
     * @generated from field: string mime = 2;
     */
    mime: string;
    /**
     * url
     *
     * @generated from field: string url = 3;
     */
    url: string;
    constructor(data?: PartialMessage<URLMedia>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "recorder.URLMedia";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): URLMedia;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): URLMedia;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): URLMedia;
    static equals(a: URLMedia | PlainMessage<URLMedia> | undefined, b: URLMedia | PlainMessage<URLMedia> | undefined): boolean;
}
/**
 * 紀錄
 *
 * @generated from message recorder.RoundRecord
 */
export declare class RoundRecord extends Message<RoundRecord> {
    /**
     * 紀錄ID
     *
     * @generated from field: bytes id = 1;
     */
    id: Uint8Array;
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
    /**
     * 座位組
     * key: SeatCode, value: Seat
     *
     * @generated from field: map<int32, recorder.Seat> seats = 13;
     */
    seats: {
        [key: number]: Seat;
    };
    /**
     * 玩家入座
     * key: SeatCode, value: 玩家code。
     *
     * @generated from field: map<int32, string> players = 14;
     */
    players: {
        [key: number]: string;
    };
    /**
     * 標籤
     *
     * @generated from field: map<string, string> tags = 15;
     */
    tags: {
        [key: string]: string;
    };
    /**
     * 歷程
     *
     * @generated from field: repeated recorder.Step process = 16;
     */
    process: Step[];
    /**
     * 判讀
     *
     * @generated from field: repeated recorder.Result results = 17;
     */
    results: Result[];
    /**
     * 結束
     *
     * @generated from field: bool is_end = 18;
     */
    isEnd: boolean;
    /**
     * 結束時間
     *
     * @generated from field: google.protobuf.Timestamp ts_end = 19;
     */
    tsEnd?: Timestamp;
    /**
     * 取消
     *
     * @generated from field: optional bool cancel = 20;
     */
    cancel?: boolean;
    /**
     * 取消代碼：CancelReasonCode
     *
     * @generated from field: optional string cancel_code = 21;
     */
    cancelCode?: string;
    /**
     * 取消備註
     *
     * @generated from field: optional string cancel_message = 22;
     */
    cancelMessage?: string;
    /**
     * 附加媒體
     *
     * @generated from field: map<string, recorder.URLMedia> mideas = 24;
     */
    mideas: {
        [key: string]: URLMedia;
    };
    constructor(data?: PartialMessage<RoundRecord>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "recorder.RoundRecord";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RoundRecord;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RoundRecord;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RoundRecord;
    static equals(a: RoundRecord | PlainMessage<RoundRecord> | undefined, b: RoundRecord | PlainMessage<RoundRecord> | undefined): boolean;
}
/**
 * @generated from message recorder.Deck
 */
export declare class Deck extends Message<Deck> {
    /**
     * 卡牌
     *
     * @generated from field: recorder.CardList cards = 1;
     */
    cards?: CardList;
    /**
     * 起始位置（削牌後）
     *
     * @generated from field: int64 start_index = 2;
     */
    startIndex: bigint;
    /**
     * 切牌位置
     *
     * @generated from field: optional int64 cut_index = 3;
     */
    cutIndex?: bigint;
    /**
     * 目前位置
     *
     * @generated from field: int64 index = 4;
     */
    index: bigint;
    constructor(data?: PartialMessage<Deck>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "recorder.Deck";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Deck;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Deck;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Deck;
    static equals(a: Deck | PlainMessage<Deck> | undefined, b: Deck | PlainMessage<Deck> | undefined): boolean;
}
/**
 * 洗牌紀錄
 *
 * @generated from message recorder.ShuffleRecord
 */
export declare class ShuffleRecord extends Message<ShuffleRecord> {
    /**
     * 紀錄ID
     *
     * @generated from field: bytes id = 1;
     */
    id: Uint8Array;
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
     * 使用洗牌ID
     *
     * @generated from field: string shuffle_code = 6;
     */
    shuffleCode: string;
    /**
     * 開始洗牌時間
     *
     * @generated from field: google.protobuf.Timestamp ts_start = 7;
     */
    tsStart?: Timestamp;
    /**
     * 結束洗牌時間
     *
     * @generated from field: google.protobuf.Timestamp ts_end = 8;
     */
    tsEnd?: Timestamp;
    /**
     * cardList
     *
     * @generated from field: map<int32, recorder.Deck> decks = 11;
     */
    decks: {
        [key: number]: Deck;
    };
    constructor(data?: PartialMessage<ShuffleRecord>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "recorder.ShuffleRecord";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ShuffleRecord;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ShuffleRecord;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ShuffleRecord;
    static equals(a: ShuffleRecord | PlainMessage<ShuffleRecord> | undefined, b: ShuffleRecord | PlainMessage<ShuffleRecord> | undefined): boolean;
}
/**
 * 排班
 *
 * @generated from message recorder.ShiftRecord
 */
export declare class ShiftRecord extends Message<ShiftRecord> {
    /**
     * 紀錄ID
     *
     * @generated from field: bytes id = 1;
     */
    id: Uint8Array;
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
     * 標籤
     *
     * @generated from field: map<string, string> tags = 6;
     */
    tags: {
        [key: string]: string;
    };
    /**
     * 開始時間
     *
     * @generated from field: google.protobuf.Timestamp ts_start = 7;
     */
    tsStart?: Timestamp;
    /**
     * 洗牌
     *
     * @generated from field: repeated string shuffle_codes = 8;
     */
    shuffleCodes: string[];
    /**
     * 執行遊戲局
     *
     * @generated from field: repeated string round_codes = 9;
     */
    roundCodes: string[];
    /**
     * 結束
     *
     * @generated from field: bool is_end = 12;
     */
    isEnd: boolean;
    /**
     * 結束時間
     *
     * @generated from field: google.protobuf.Timestamp ts_end = 13;
     */
    tsEnd?: Timestamp;
    constructor(data?: PartialMessage<ShiftRecord>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "recorder.ShiftRecord";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ShiftRecord;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ShiftRecord;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ShiftRecord;
    static equals(a: ShiftRecord | PlainMessage<ShiftRecord> | undefined, b: ShiftRecord | PlainMessage<ShiftRecord> | undefined): boolean;
}
