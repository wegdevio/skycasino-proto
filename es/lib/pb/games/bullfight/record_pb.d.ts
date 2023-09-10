import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * @generated from enum games.bullfight.ResourceType
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
 * @generated from enum games.bullfight.Step
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
     * 派發起始位子牌(決定順位)
     *
     * @generated from enum value: DEAL_FIRSTCARD = 4;
     */
    DEAL_FIRSTCARD = 4,
    /**
     * 派發莊家例牌
     *
     * @generated from enum value: DEAL_BANKER_1 = 5;
     */
    DEAL_BANKER_1 = 5,
    /**
     * 派發玩家1例牌
     *
     * @generated from enum value: DEAL_PLAYER_1 = 6;
     */
    DEAL_PLAYER_1 = 6,
    /**
     * 派發玩家2例牌
     *
     * @generated from enum value: DEAL_PLAYER_2 = 7;
     */
    DEAL_PLAYER_2 = 7,
    /**
     * 派發玩家3例牌
     *
     * @generated from enum value: DEAL_PLAYER_3 = 8;
     */
    DEAL_PLAYER_3 = 8,
    /**
     * 開放下注
     *
     * @generated from enum value: OPEN_FOR_BETTING = 9;
     */
    OPEN_FOR_BETTING = 9,
    /**
     * 停止下注
     *
     * @generated from enum value: CLOSE_THE_BETTING = 10;
     */
    CLOSE_THE_BETTING = 10,
    /**
     * 開莊家1例牌
     *
     * @generated from enum value: SHOW_BANKER_1 = 12;
     */
    SHOW_BANKER_1 = 12,
    /**
     * 開玩家1例牌
     *
     * @generated from enum value: SHOW_PLAYER_1 = 13;
     */
    SHOW_PLAYER_1 = 13,
    /**
     * 開玩家2例牌
     *
     * @generated from enum value: SHOW_PLAYER_2 = 14;
     */
    SHOW_PLAYER_2 = 14,
    /**
     * 開玩家3例牌
     *
     * @generated from enum value: SHOW_PLAYER_3 = 15;
     */
    SHOW_PLAYER_3 = 15,
    /**
     * PITBOSS 修改派發例牌
     *
     * @generated from enum value: PITBOSS_MODIFY_BANKER_1 = 24;
     */
    PITBOSS_MODIFY_BANKER_1 = 24,
    /**
     * @generated from enum value: PITBOSS_MODIFY_PLAYER_1 = 25;
     */
    PITBOSS_MODIFY_PLAYER_1 = 25,
    /**
     * @generated from enum value: PITBOSS_MODIFY_PLAYER_2 = 26;
     */
    PITBOSS_MODIFY_PLAYER_2 = 26,
    /**
     * @generated from enum value: PITBOSS_MODIFY_PLAYER_3 = 27;
     */
    PITBOSS_MODIFY_PLAYER_3 = 27
}
/**
 * 座位功能代碼
 *
 * @generated from enum games.bullfight.Seat
 */
export declare enum Seat {
    /**
     * 未指定
     *
     * @generated from enum value: SEAT_UNSPECIFIED = 0;
     */
    SEAT_UNSPECIFIED = 0,
    /**
     * 起始牌
     *
     * @generated from enum value: FISRTCARD = 1;
     */
    FISRTCARD = 1,
    /**
     * 莊家
     *
     * @generated from enum value: BANKER = 2;
     */
    BANKER = 2,
    /**
     * 玩家1
     *
     * @generated from enum value: PLAYER1 = 3;
     */
    PLAYER1 = 3,
    /**
     * 玩家2
     *
     * @generated from enum value: PLAYER2 = 4;
     */
    PLAYER2 = 4,
    /**
     * 玩家3
     *
     * @generated from enum value: PLAYER3 = 5;
     */
    PLAYER3 = 5,
    /**
     * Dealer
     *
     * @generated from enum value: DEALER = 6;
     */
    DEALER = 6,
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
 * @generated from enum games.bullfight.ResultRecordType
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
 * @generated from enum games.bullfight.CancelReason
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
 * @generated from enum games.bullfight.GameState
 */
export declare enum GameState {
    /**
     * idle
     *
     * @generated from enum value: STATE_IDLE = 0;
     */
    STATE_IDLE = 0,
    /**
     * game starting
     *
     * @generated from enum value: STATE_START = 1;
     */
    STATE_START = 1,
    /**
     * counter started
     *
     * @generated from enum value: STATE_COUNTER_START = 2;
     */
    STATE_COUNTER_START = 2,
    /**
     * scanned the first card ; wait for counter end
     *
     * @generated from enum value: STATE_COUNTER_END = 3;
     */
    STATE_COUNTER_END = 3,
    /**
     * counter ended ; wait for the first position scan
     *
     * @generated from enum value: STATE_REVEAL_FIRST = 4;
     */
    STATE_REVEAL_FIRST = 4,
    /**
     * scanned the first position ; wait for the second position scan
     *
     * @generated from enum value: STATE_REVEAL_SECOND = 5;
     */
    STATE_REVEAL_SECOND = 5,
    /**
     * scanned the second position ; wait for the third position scan
     *
     * @generated from enum value: STATE_REVEAL_THIRD = 6;
     */
    STATE_REVEAL_THIRD = 6,
    /**
     * scanned the third position ; wait for the fourth position scan
     *
     * @generated from enum value: STATE_REVEAL_FOURTH = 7;
     */
    STATE_REVEAL_FOURTH = 7,
    /**
     * scanned the fourth position ; wait for confirm
     *
     * @generated from enum value: STATE_CONFIRM = 8;
     */
    STATE_CONFIRM = 8,
    /**
     * game ended
     *
     * @generated from enum value: STATE_END = 9;
     */
    STATE_END = 9,
    /**
     * shuffle cards
     *
     * @generated from enum value: STATE_SHUFFLE = 30;
     */
    STATE_SHUFFLE = 30
}
/**
 * @generated from enum games.bullfight.WinType
 */
export declare enum WinType {
    /**
     * @generated from enum value: NULL = 0;
     */
    NULL = 0,
    /**
     * @generated from enum value: WINPLAYER = 1;
     */
    WINPLAYER = 1,
    /**
     * @generated from enum value: WINBANKER = 2;
     */
    WINBANKER = 2
}
/**
 * @generated from enum games.bullfight.PatternType
 */
export declare enum PatternType {
    /**
     * 無牛
     *
     * @generated from enum value: NO_COW = 0;
     */
    NO_COW = 0,
    /**
     * 牛1
     *
     * @generated from enum value: COW_ONE = 11;
     */
    COW_ONE = 11,
    /**
     * 牛2
     *
     * @generated from enum value: COW_TWO = 12;
     */
    COW_TWO = 12,
    /**
     * 牛3
     *
     * @generated from enum value: COW_THREE = 13;
     */
    COW_THREE = 13,
    /**
     * 牛4
     *
     * @generated from enum value: COW_FOUR = 14;
     */
    COW_FOUR = 14,
    /**
     * 牛5
     *
     * @generated from enum value: COW_FIVE = 15;
     */
    COW_FIVE = 15,
    /**
     * 牛6
     *
     * @generated from enum value: COW_SIX = 16;
     */
    COW_SIX = 16,
    /**
     * 牛7
     *
     * @generated from enum value: COW_SEVEN = 17;
     */
    COW_SEVEN = 17,
    /**
     * 牛8
     *
     * @generated from enum value: COW_EIGHT = 18;
     */
    COW_EIGHT = 18,
    /**
     * 牛9
     *
     * @generated from enum value: COW_NINE = 19;
     */
    COW_NINE = 19,
    /**
     * 牛牛
     *
     * @generated from enum value: COW_COW = 20;
     */
    COW_COW = 20,
    /**
     * 五公
     *
     * @generated from enum value: FIVE_FLOWER = 30;
     */
    FIVE_FLOWER = 30,
    /**
     * @generated from enum value: TYPE_NULL = -1;
     */
    TYPE_NULL = -1
}
/**
 * *
 * The status fo the current game.
 *
 * @generated from message games.bullfight.GameStatus
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
     * @generated from field: games.bullfight.GameState state = 4;
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
     * game specify information
     *
     * Coundown value
     *
     * @generated from field: int32 countdown = 40;
     */
    countdown: number;
    /**
     * First card
     *
     * @generated from field: string firstCard = 10;
     */
    firstCard: string;
    /**
     * Next position to be revealed: b1 / b2 /... / z5
     *
     * @generated from field: string revealingPosition = 39;
     */
    revealingPosition: string;
    /**
     * Card slot Banker 1
     *
     * @generated from field: string b1 = 11;
     */
    b1: string;
    /**
     * Card slot Banker 2
     *
     * @generated from field: string b2 = 12;
     */
    b2: string;
    /**
     * Card slot Banker 3
     *
     * @generated from field: string b3 = 13;
     */
    b3: string;
    /**
     * Card slot Banker 4
     *
     * @generated from field: string b4 = 14;
     */
    b4: string;
    /**
     * Card slot Banker 5
     *
     * @generated from field: string b5 = 15;
     */
    b5: string;
    /**
     * Card slot PlayerX 1
     *
     * @generated from field: string x1 = 16;
     */
    x1: string;
    /**
     * Card slot PlayerX 2
     *
     * @generated from field: string x2 = 17;
     */
    x2: string;
    /**
     * Card slot PlayerX 3
     *
     * @generated from field: string x3 = 18;
     */
    x3: string;
    /**
     * Card slot PlayerX 4
     *
     * @generated from field: string x4 = 19;
     */
    x4: string;
    /**
     * Card slot PlayerX 5
     *
     * @generated from field: string x5 = 20;
     */
    x5: string;
    /**
     * Card slot PlayerY 1
     *
     * @generated from field: string y1 = 21;
     */
    y1: string;
    /**
     * Card slot PlayerY 2
     *
     * @generated from field: string y2 = 22;
     */
    y2: string;
    /**
     * Card slot PlayerY 3
     *
     * @generated from field: string y3 = 23;
     */
    y3: string;
    /**
     * Card slot PlayerY 4
     *
     * @generated from field: string y4 = 24;
     */
    y4: string;
    /**
     * Card slot PlayerY 5
     *
     * @generated from field: string y5 = 25;
     */
    y5: string;
    /**
     * Card slot PlayerZ 1
     *
     * @generated from field: string z1 = 26;
     */
    z1: string;
    /**
     * Card slot PlayerZ 2
     *
     * @generated from field: string z2 = 27;
     */
    z2: string;
    /**
     * Card slot PlayerZ 3
     *
     * @generated from field: string z3 = 28;
     */
    z3: string;
    /**
     * Card slot PlayerZ 4
     *
     * @generated from field: string z4 = 29;
     */
    z4: string;
    /**
     * Card slot PlayerZ 5
     *
     * @generated from field: string z5 = 30;
     */
    z5: string;
    /**
     * Banker pattern type
     *
     * @generated from field: games.bullfight.PatternType bankerType = 31;
     */
    bankerType: PatternType;
    /**
     * PlayerX pattern type
     *
     * @generated from field: games.bullfight.PatternType playerXType = 32;
     */
    playerXType: PatternType;
    /**
     * PlayerY pattern type
     *
     * @generated from field: games.bullfight.PatternType playerYType = 33;
     */
    playerYType: PatternType;
    /**
     * PlayerZ pattern type
     *
     * @generated from field: games.bullfight.PatternType playerZType = 34;
     */
    playerZType: PatternType;
    /**
     * 0  - none, 1 - player X win, 2 - banker win
     *
     * @generated from field: games.bullfight.WinType playerXWin = 35;
     */
    playerXWin: WinType;
    /**
     * 0  - none, 1 - player Y win, 2 - banker win
     *
     * @generated from field: games.bullfight.WinType playerYWin = 36;
     */
    playerYWin: WinType;
    /**
     * 0  - none, 1 - player Z win, 2 - banker win
     *
     * @generated from field: games.bullfight.WinType playerZWin = 37;
     */
    playerZWin: WinType;
    /**
     * If redcard scan
     *
     * @generated from field: bool redcard = 90;
     */
    redcard: boolean;
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
     * bool showFirstCard = 105;           // show first card boolean when new shoe
     * string firstCard = 106;             // first card of the shoe
     * int32 currentCardIndex = 107;       // next card to show (i.e. first maskedCardsSN haven't been shown's index)
     * int32 redCardIndex = 108;           // the red card index of the shoe
     *
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
    static readonly typeName = "games.bullfight.GameStatus";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GameStatus;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GameStatus;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GameStatus;
    static equals(a: GameStatus | PlainMessage<GameStatus> | undefined, b: GameStatus | PlainMessage<GameStatus> | undefined): boolean;
}
