import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * @generated from enum games.baccarat.ResourceType
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
    NORMAL = 2,
    /**
     * 非例牌
     *
     * @generated from enum value: EXTRA = 3;
     */
    EXTRA = 3
}
/**
 * 步驟，依據遊戲供應商邏輯，不是每個步驟都會走到
 *
 * @generated from enum games.baccarat.Step
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
     * 派發閒家例牌1
     *
     * @generated from enum value: DEAL_PLAYER_1 = 4;
     */
    DEAL_PLAYER_1 = 4,
    /**
     * 派發莊家例牌1
     *
     * @generated from enum value: DEAL_BANKER_1 = 5;
     */
    DEAL_BANKER_1 = 5,
    /**
     * 派發閒家例牌2
     *
     * @generated from enum value: DEAL_PLAYER_2 = 6;
     */
    DEAL_PLAYER_2 = 6,
    /**
     * 派發莊家例牌2
     *
     * @generated from enum value: DEAL_BANKER_2 = 7;
     */
    DEAL_BANKER_2 = 7,
    /**
     * 開放下注
     *
     * @generated from enum value: OPEN_FOR_BETTING = 8;
     */
    OPEN_FOR_BETTING = 8,
    /**
     * 停止下注
     *
     * @generated from enum value: CLOSE_THE_BETTING = 9;
     */
    CLOSE_THE_BETTING = 9,
    /**
     * 非瞇牌開例牌
     *
     * @generated from enum value: SHOW_NORMAL = 12;
     */
    SHOW_NORMAL = 12,
    /**
     * 瞇牌例牌
     *
     * @generated from enum value: PEEK_NORMAL = 13;
     */
    PEEK_NORMAL = 13,
    /**
     * 瞇牌公布例牌
     *
     * @generated from enum value: PEEK_SHOW_NORMAL = 14;
     */
    PEEK_SHOW_NORMAL = 14,
    /**
     * 非瞇牌補閒家牌
     *
     * @generated from enum value: DEAL_PLAYER_EXTRA = 16;
     */
    DEAL_PLAYER_EXTRA = 16,
    /**
     * 瞇牌閒家補牌
     *
     * @generated from enum value: PEEK_DEAL_PLAYER_EXTRA = 17;
     */
    PEEK_DEAL_PLAYER_EXTRA = 17,
    /**
     * 瞇牌公布閒家補牌
     *
     * @generated from enum value: PEEK_SHOW_PLAYER_EXTRA = 18;
     */
    PEEK_SHOW_PLAYER_EXTRA = 18,
    /**
     * 非瞇牌補莊家牌
     *
     * @generated from enum value: DEAL_BANKER_EXTRA = 20;
     */
    DEAL_BANKER_EXTRA = 20,
    /**
     * 瞇牌莊家補牌
     *
     * @generated from enum value: PEEK_DEAL_BANKER_EXTRA = 21;
     */
    PEEK_DEAL_BANKER_EXTRA = 21,
    /**
     * 瞇牌公布莊家補牌
     *
     * @generated from enum value: PEEK_SHOW_BANKER_EXTRA = 22;
     */
    PEEK_SHOW_BANKER_EXTRA = 22,
    /**
     * PITBOSS 修改派發例牌
     *
     * @generated from enum value: PITBOSS_MODIFY_NORMAL = 24;
     */
    PITBOSS_MODIFY_NORMAL = 24,
    /**
     * PITBOSS 修改派發閒家補牌
     *
     * @generated from enum value: PITBOSS_MODIFY_PLAYER_EXTRA = 25;
     */
    PITBOSS_MODIFY_PLAYER_EXTRA = 25,
    /**
     * PITBOSS 修改派發莊家補牌
     *
     * @generated from enum value: PITBOSS_MODIFY_BANKER_EXTRA = 26;
     */
    PITBOSS_MODIFY_BANKER_EXTRA = 26
}
/**
 * 座位功能代碼
 *
 * @generated from enum games.baccarat.Seat
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
     * 閒家
     *
     * @generated from enum value: PLAYER = 2;
     */
    PLAYER = 2,
    /**
     * 莊家
     *
     * @generated from enum value: BANKER = 3;
     */
    BANKER = 3,
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
 * @generated from enum games.baccarat.ResultRecordType
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
 * @generated from enum games.baccarat.CancelReason
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
 * @generated from enum games.baccarat.GameState
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
     * Scan the banker card
     *
     * @generated from enum value: STATE_BANKER = 3;
     */
    STATE_BANKER = 3,
    /**
     * Scan the player card
     *
     * @generated from enum value: STATE_PLAYER = 4;
     */
    STATE_PLAYER = 4,
    /**
     * Scan the banker extra card
     *
     * @generated from enum value: STATE_BANKER_EXTRA = 5;
     */
    STATE_BANKER_EXTRA = 5,
    /**
     * Scan the player extra card
     *
     * @generated from enum value: STATE_PLAYER_EXTRA = 6;
     */
    STATE_PLAYER_EXTRA = 6,
    /**
     * Game Ended
     *
     * @generated from enum value: STATE_END = 7;
     */
    STATE_END = 7,
    /**
     * Game Ended
     *
     * @generated from enum value: STATE_CONFIRM = 8;
     */
    STATE_CONFIRM = 8,
    /**
     * When me for banker and card
     *
     * @generated from enum value: STATE_PEEK = 20;
     */
    STATE_PEEK = 20,
    /**
     * When me for banker extra card
     *
     * @generated from enum value: STATE_PEEK_BANKER = 22;
     */
    STATE_PEEK_BANKER = 22,
    /**
     * When me for player extra card
     *
     * @generated from enum value: STATE_PEEK_PLAYER = 24;
     */
    STATE_PEEK_PLAYER = 24,
    /**
     * Shuffle cards
     *
     * @generated from enum value: STATE_SHUFFLE = 30;
     */
    STATE_SHUFFLE = 30
}
/**
 * @generated from enum games.baccarat.WinType
 */
export declare enum WinType {
    /**
     * @generated from enum value: NULL = 0;
     */
    NULL = 0,
    /**
     * @generated from enum value: WINBANKER = 1;
     */
    WINBANKER = 1,
    /**
     * @generated from enum value: WINPLAYER = 2;
     */
    WINPLAYER = 2,
    /**
     * @generated from enum value: TIE = 3;
     */
    TIE = 3
}
/**
 * *
 * The status fo the current game.
 *
 * @generated from message games.baccarat.GameStatus
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
     * @generated from field: games.baccarat.GameState state = 4;
     */
    state: GameState;
    /**
     * Time when game start
     *
     * @generated from field: int64 startTime = 5;
     */
    startTime: bigint;
    /**
     * @generated from field: int32 shoe = 6;
     */
    shoe: number;
    /**
     * @generated from field: int32 round = 7;
     */
    round: number;
    /**
     * game specify information
     *
     * Card slot Banker 1
     *
     * @generated from field: string a1 = 10;
     */
    a1: string;
    /**
     * Card slot Banker 2
     *
     * @generated from field: string a2 = 11;
     */
    a2: string;
    /**
     * Card slot Banker 3
     *
     * @generated from field: string a3 = 12;
     */
    a3: string;
    /**
     * Card slot Player 1
     *
     * @generated from field: string b1 = 13;
     */
    b1: string;
    /**
     * Card slot Player 2
     *
     * @generated from field: string b2 = 14;
     */
    b2: string;
    /**
     * Card slot Player 3
     *
     * @generated from field: string b3 = 15;
     */
    b3: string;
    /**
     * Result of banker
     *
     * @generated from field: bool wina = 16;
     */
    wina: boolean;
    /**
     * Result of player
     *
     * @generated from field: bool winb = 17;
     */
    winb: boolean;
    /**
     * Coundown value
     *
     * @generated from field: int32 countdown = 18;
     */
    countdown: number;
    /**
     * Shoe ID
     *
     * @generated from field: string shoeID = 19;
     */
    shoeID: string;
    /**
     * Player Point
     *
     * @generated from field: int32 playerPoint = 20;
     */
    playerPoint: number;
    /**
     * Banker Point
     *
     * @generated from field: int32 bankerPoint = 21;
     */
    bankerPoint: number;
    /**
     * WinType
     *
     * @generated from field: int32 winType = 22;
     */
    winType: number;
    /**
     * bv
     *
     * @generated from field: int32 bv = 23;
     */
    bv: number;
    /**
     * pv
     *
     * @generated from field: int32 pv = 24;
     */
    pv: number;
    /**
     * bp
     *
     * @generated from field: bool bp = 25;
     */
    bp: boolean;
    /**
     * pp
     *
     * @generated from field: bool pp = 26;
     */
    pp: boolean;
    /**
     * Player Point
     *
     * @generated from field: bool playerExtraCard = 30;
     */
    playerExtraCard: boolean;
    /**
     * Banker Point
     *
     * @generated from field: bool bankerExtraCard = 31;
     */
    bankerExtraCard: boolean;
    /**
     * Time when peek card
     *
     * @generated from field: int64 peekcardtime = 32;
     */
    peekcardtime: bigint;
    /**
     * SuperSix -1=unknown 0=false 1=true
     *
     * @generated from field: int32 isSuperSix = 40;
     */
    isSuperSix: number;
    /**
     * Banker Pair -1=unknown 0=false 1=true
     *
     * @generated from field: int32 isBankerPair = 41;
     */
    isBankerPair: number;
    /**
     * Player Pair-1=unknown 0=false 1=true
     *
     * @generated from field: int32 isPlayerPair = 42;
     */
    isPlayerPair: number;
    /**
     * @generated from field: bool redcard = 90;
     */
    redcard: boolean;
    /**
     * Coundown value for me first batch of card
     *
     * @generated from field: int32 countdownA = 101;
     */
    countdownA: number;
    /**
     * Coundown value for me extra card
     *
     * @generated from field: int32 countdownB = 102;
     */
    countdownB: number;
    /**
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
     * @generated from field: map<string, int32> lucky = 111;
     */
    lucky: {
        [key: string]: number;
    };
    /**
     * 0: barcode 1:image recognition
     *
     * @generated from field: map<string, int32> scannerType = 112;
     */
    scannerType: {
        [key: string]: number;
    };
    constructor(data?: PartialMessage<GameStatus>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "games.baccarat.GameStatus";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GameStatus;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GameStatus;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GameStatus;
    static equals(a: GameStatus | PlainMessage<GameStatus> | undefined, b: GameStatus | PlainMessage<GameStatus> | undefined): boolean;
}
