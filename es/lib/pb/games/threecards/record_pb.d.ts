import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * @generated from enum games.threecards.ResourceType
 */
export declare enum ResourceType {
    /**
     * 未指定
     *
     * @generated from enum value: RESOURCE_TYPE_UNSPECIFIED = 0;
     */
    RESOURCE_TYPE_UNSPECIFIED = 0,
    /**
     * 牌靴
     *
     * @generated from enum value: SHOE = 1;
     */
    SHOE = 1,
    /**
     * 例牌
     *
     * @generated from enum value: NORMAL = 2;
     */
    NORMAL = 2
}
/**
 * 步驟，依據遊戲供應商邏輯，不是每個步驟都會走到
 *
 * @generated from enum games.threecards.Step
 */
export declare enum Step {
    /**
     * 未指定
     *
     * @generated from enum value: STEP_UNSPECIFIED = 0;
     */
    STEP_UNSPECIFIED = 0,
    /**
     * 本局開始
     *
     * @generated from enum value: ROUND_START = 1;
     */
    ROUND_START = 1,
    /**
     * 本局完成
     *
     * @generated from enum value: ROUND_FINISHED = 2;
     */
    ROUND_FINISHED = 2,
    /**
     * 本局取消
     *
     * @generated from enum value: ROUND_CANCELED = 3;
     */
    ROUND_CANCELED = 3,
    /**
     * 派發莊家例牌1
     *
     * @generated from enum value: DEAL_BANKER_1 = 4;
     */
    DEAL_BANKER_1 = 4,
    /**
     * 派發閒家例牌1
     *
     * @generated from enum value: DEAL_PLAYER_1 = 5;
     */
    DEAL_PLAYER_1 = 5,
    /**
     * 派發莊家例牌2
     *
     * @generated from enum value: DEAL_BANKER_2 = 6;
     */
    DEAL_BANKER_2 = 6,
    /**
     * 派發閒家例牌2
     *
     * @generated from enum value: DEAL_PLAYER_2 = 7;
     */
    DEAL_PLAYER_2 = 7,
    /**
     * 派發莊家例牌3
     *
     * @generated from enum value: DEAL_BANKER_3 = 8;
     */
    DEAL_BANKER_3 = 8,
    /**
     * 派發閒家例牌3
     *
     * @generated from enum value: DEAL_PLAYER_3 = 9;
     */
    DEAL_PLAYER_3 = 9,
    /**
     * 開放下注
     *
     * @generated from enum value: OPEN_FOR_BETTING = 10;
     */
    OPEN_FOR_BETTING = 10,
    /**
     * 停止下注
     *
     * @generated from enum value: CLOSE_THE_BETTING = 11;
     */
    CLOSE_THE_BETTING = 11,
    /**
     * 開例牌
     *
     * @generated from enum value: SHOW_NORMAL = 12;
     */
    SHOW_NORMAL = 12,
    /**
     * PITBOSS 修改派發例牌
     *
     * @generated from enum value: PITBOSS_MODIFY_NORMAL = 24;
     */
    PITBOSS_MODIFY_NORMAL = 24
}
/**
 * 座位功能代碼
 *
 * @generated from enum games.threecards.Seat
 */
export declare enum Seat {
    /**
     * 未指定
     *
     * @generated from enum value: SEAT_UNSPECIFIED = 0;
     */
    SEAT_UNSPECIFIED = 0,
    /**
     * Dealer
     *
     * @generated from enum value: DEALER = 1;
     */
    DEALER = 1,
    /**
     * 莊家
     *
     * @generated from enum value: BANKER = 2;
     */
    BANKER = 2,
    /**
     * 閒家
     *
     * @generated from enum value: PLAYER = 3;
     */
    PLAYER = 3,
    /**
     * Pitboss
     *
     * @generated from enum value: PITBOSS = 9;
     */
    PITBOSS = 9
}
/**
 * 結果紀錄類型代碼
 *
 * @generated from enum games.threecards.ResultRecordType
 */
export declare enum ResultRecordType {
    /**
     * 未指定
     *
     * @generated from enum value: RESULT_RECORD_TYPE_UNSPECIFIED = 0;
     */
    RESULT_RECORD_TYPE_UNSPECIFIED = 0,
    /**
     * 遊戲局結束
     *
     * @generated from enum value: ROUND_FINISH = 1;
     */
    ROUND_FINISH = 1,
    /**
     * Pitboss 修正
     *
     * @generated from enum value: PITBOSS_MODIFY_RESULT = 2;
     */
    PITBOSS_MODIFY_RESULT = 2
}
/**
 * 取消原因
 *
 * @generated from enum games.threecards.CancelReason
 */
export declare enum CancelReason {
    /**
     * 未指定，沒有取消
     *
     * @generated from enum value: CANCEL_REASON_UNSPECIFIED = 0;
     */
    CANCEL_REASON_UNSPECIFIED = 0,
    /**
     * 取消說明原因
     *
     * @generated from enum value: NO_REASON = 1;
     */
    NO_REASON = 1
}
/**
 * *
 * The state of the game flow
 *
 * @generated from enum games.threecards.GameState
 */
export declare enum GameState {
    /**
     * Idle
     *
     * @generated from enum value: STATE_IDLE = 0;
     */
    STATE_IDLE = 0,
    /**
     * Game Starting
     *
     * @generated from enum value: STATE_START = 1;
     */
    STATE_START = 1,
    /**
     * Counuter Started
     *
     * @generated from enum value: STATE_COUNTER_START = 2;
     */
    STATE_COUNTER_START = 2,
    /**
     * Scan the dragon card
     *
     * @generated from enum value: STATE_DRAGON = 3;
     */
    STATE_DRAGON = 3,
    /**
     * Scan the phoenix card
     *
     * @generated from enum value: STATE_PHOENIX = 4;
     */
    STATE_PHOENIX = 4,
    /**
     * Scan the dragon extra card
     *
     * @generated from enum value: STATE_DRAGON_LAST = 5;
     */
    STATE_DRAGON_LAST = 5,
    /**
     * Scan the phoenix extra card
     *
     * @generated from enum value: STATE_PHOENIX_LAST = 6;
     */
    STATE_PHOENIX_LAST = 6,
    /**
     * Game Ended
     *
     * @generated from enum value: STATE_END = 7;
     */
    STATE_END = 7,
    /**
     * Wait for confirm
     *
     * @generated from enum value: STATE_CONFIRM = 8;
     */
    STATE_CONFIRM = 8,
    /**
     * Scane the discard
     *
     * @generated from enum value: STATE_DISCARD = 9;
     */
    STATE_DISCARD = 9,
    /**
     * Shuffle cards
     *
     * @generated from enum value: STATE_SHUFFLE = 30;
     */
    STATE_SHUFFLE = 30
}
/**
 * WinType_PHOENIX 銀 右 莊
 * WinType_DRAGON 金 左 閒
 *
 * @generated from enum games.threecards.WinType
 */
export declare enum WinType {
    /**
     * @generated from enum value: NULL = 0;
     */
    NULL = 0,
    /**
     * @generated from enum value: DRAGON = 1;
     */
    DRAGON = 1,
    /**
     * @generated from enum value: PHOENIX = 2;
     */
    PHOENIX = 2,
    /**
     * @generated from enum value: TIE = 3;
     */
    TIE = 3
}
/**
 * 豹子 > 同花順 > 同花 > 順子 > 對子 > 散牌
 *
 * @generated from enum games.threecards.CardStyle
 */
export declare enum CardStyle {
    /**
     * 散牌
     *
     * @generated from enum value: NONE = 0;
     */
    NONE = 0,
    /**
     * 對子
     *
     * @generated from enum value: PAIR = 1;
     */
    PAIR = 1,
    /**
     * 順子
     *
     * @generated from enum value: STRAIGHT = 2;
     */
    STRAIGHT = 2,
    /**
     * 同花
     *
     * @generated from enum value: FLUSH = 3;
     */
    FLUSH = 3,
    /**
     * 順子
     *
     * @generated from enum value: STRAIGHTF = 4;
     */
    STRAIGHTF = 4,
    /**
     * 豹子
     *
     * @generated from enum value: LEOPARD = 5;
     */
    LEOPARD = 5,
    /**
     * 豹子殺手
     *
     * @generated from enum value: LEOPARD_KILLER = 6;
     */
    LEOPARD_KILLER = 6
}
/**
 * *
 * The status fo the current game.
 *
 * @generated from message games.threecards.GameStatus
 */
export declare class GameStatus extends Message<GameStatus> {
    /**
     * Unique tableid
     *
     * @generated from field: string sessionID = 1;
     */
    sessionID: string;
    /**
     * Unique session for the game
     *
     * @generated from field: string gameRoundID = 2;
     */
    gameRoundID: string;
    /**
     * Unique tableid
     *
     * @generated from field: string tableID = 3;
     */
    tableID: string;
    /**
     * State of the game
     *
     * @generated from field: games.threecards.GameState state = 4;
     */
    state: GameState;
    /**
     * Time when game start
     *
     * @generated from field: int64 startTime = 5;
     */
    startTime: bigint;
    /**
     * Shoe ID
     *
     * @generated from field: string shoeID = 6;
     */
    shoeID: string;
    /**
     * @generated from field: int32 shoe = 7;
     */
    shoe: number;
    /**
     * @generated from field: int32 round = 8;
     */
    round: number;
    /**
     * Time when game start
     *
     * @generated from field: int64 shuffleTime = 9;
     */
    shuffleTime: bigint;
    /**
     * Coundown value
     *
     * @generated from field: int32 countdown = 10;
     */
    countdown: number;
    /**
     * If redcard scan
     *
     * @generated from field: bool redcard = 11;
     */
    redcard: boolean;
    /**
     * game specify information
     *
     * @generated from field: string dragon1 = 20;
     */
    dragon1: string;
    /**
     * @generated from field: string dragon2 = 21;
     */
    dragon2: string;
    /**
     * @generated from field: string dragon3 = 22;
     */
    dragon3: string;
    /**
     * @generated from field: string phoenix1 = 23;
     */
    phoenix1: string;
    /**
     * @generated from field: string phoenix2 = 24;
     */
    phoenix2: string;
    /**
     * @generated from field: string phoenix3 = 25;
     */
    phoenix3: string;
    /**
     * @generated from field: map<string, string> dragonBarcode = 26;
     */
    dragonBarcode: {
        [key: string]: string;
    };
    /**
     * @generated from field: map<string, string> phoenixBarcode = 27;
     */
    phoenixBarcode: {
        [key: string]: string;
    };
    /**
     * results
     *
     * Wintype
     *
     * @generated from field: games.threecards.WinType winType = 30;
     */
    winType: WinType;
    /**
     * @generated from field: string dragonResult = 31;
     */
    dragonResult: string;
    /**
     * @generated from field: string phoenixResult = 32;
     */
    phoenixResult: string;
    /**
     * @generated from field: games.threecards.CardStyle dragonResultInt = 33;
     */
    dragonResultInt: CardStyle;
    /**
     * @generated from field: games.threecards.CardStyle phoenixResultInt = 34;
     */
    phoenixResultInt: CardStyle;
    /**
     * @generated from field: string dragonWinValue = 35;
     */
    dragonWinValue: string;
    /**
     * @generated from field: string phoenixWinValue = 36;
     */
    phoenixWinValue: string;
    /**
     * store the bardcodehash for that round
     *
     * @generated from field: map<string, string> barcodeHash = 37;
     */
    barcodeHash: {
        [key: string]: string;
    };
    /**
     * store the bardcodehash SN for that round
     *
     * @generated from field: map<string, string> barcodeSN = 38;
     */
    barcodeSN: {
        [key: string]: string;
    };
    /**
     * blockchain
     *
     * masked cards sn slice for blockchan
     *
     * @generated from field: repeated string maskedCardsSN = 103;
     */
    maskedCardsSN: string[];
    /**
     * sha256 cards from masked cards sn
     *
     * @generated from field: repeated string hashedCards = 104;
     */
    hashedCards: string[];
    /**
     * show first card boolean when new shoe
     *
     * @generated from field: bool showFirstCard = 105;
     */
    showFirstCard: boolean;
    /**
     * first card of the shoe
     *
     * @generated from field: string firstCard = 106;
     */
    firstCard: string;
    /**
     * next card to show (i.e. first maskedCardsSN haven't been shown's index)
     *
     * @generated from field: int32 currentCardIndex = 107;
     */
    currentCardIndex: number;
    /**
     * the red card index of the shoe
     *
     * @generated from field: int32 redCardIndex = 108;
     */
    redCardIndex: number;
    /**
     * cosmos blockchain id for the shoe
     *
     * @generated from field: string cosmosShoeID = 109;
     */
    cosmosShoeID: string;
    /**
     * length of hashedCards
     *
     * @generated from field: int32 hashedLength = 110;
     */
    hashedLength: number;
    /**
     * Lucky Number and payout ratio
     *
     * @generated from field: map<string, int32> lucky = 150;
     */
    lucky: {
        [key: string]: number;
    };
    constructor(data?: PartialMessage<GameStatus>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "games.threecards.GameStatus";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GameStatus;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GameStatus;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GameStatus;
    static equals(a: GameStatus | PlainMessage<GameStatus> | undefined, b: GameStatus | PlainMessage<GameStatus> | undefined): boolean;
}
