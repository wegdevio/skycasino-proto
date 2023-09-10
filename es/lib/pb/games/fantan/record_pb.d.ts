import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * @generated from enum games.fantan.ResourceType
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
     * 碗公
     *
     * @generated from enum value: BOWL = 2;
     */
    BOWL = 2
}
/**
 * 步驟，依據遊戲供應商邏輯，不是每個步驟都會走到
 *
 * @generated from enum games.fantan.Step
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
     * 開放下注
     *
     * @generated from enum value: OPEN_FOR_BETTING = 4;
     */
    OPEN_FOR_BETTING = 4,
    /**
     * 停止下注
     *
     * @generated from enum value: CLOSE_THE_BETTING = 5;
     */
    CLOSE_THE_BETTING = 5,
    /**
     * 抓籽
     *
     * @generated from enum value: GRAB_DICE_AMOUNT = 8;
     */
    GRAB_DICE_AMOUNT = 8,
    /**
     * PITBOSS 修改骰點
     *
     * @generated from enum value: PITBOSS_MODIFY_BOWL = 16;
     */
    PITBOSS_MODIFY_BOWL = 16
}
/**
 * 座位功能代碼
 *
 * @generated from enum games.fantan.Seat
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
     * Pitboss
     *
     * @generated from enum value: PITBOSS = 9;
     */
    PITBOSS = 9
}
/**
 * 結果紀錄類型代碼
 *
 * @generated from enum games.fantan.ResultRecordType
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
 * *
 * The state of the game flow
 *
 * @generated from enum games.fantan.GameState
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
     * Wait for input
     *
     * @generated from enum value: STATE_INPUT = 3;
     */
    STATE_INPUT = 3,
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
     * Shuffle cards
     *
     * @generated from enum value: STATE_SHUFFLE = 30;
     */
    STATE_SHUFFLE = 30
}
/**
 * *
 * The status of the current game.
 *
 * @generated from message games.fantan.GameStatus
 */
export declare class GameStatus extends Message<GameStatus> {
    /**
     * Unique tableid
     *
     * @generated from field: string session_id = 1;
     */
    sessionId: string;
    /**
     * Unique session for the game
     *
     * @generated from field: string game_round_id = 2;
     */
    gameRoundId: string;
    /**
     * Unique tableid
     *
     * @generated from field: string table_id = 3;
     */
    tableId: string;
    /**
     * State of the game
     *
     * @generated from field: games.fantan.GameState state = 4;
     */
    state: GameState;
    /**
     * Time when game start
     *
     * @generated from field: int64 ts_start = 5;
     */
    tsStart: bigint;
    /**
     * Shoe ID
     *
     * @generated from field: string shoe_id = 6;
     */
    shoeId: string;
    /**
     * @generated from field: int32 shoe = 7;
     */
    shoe: number;
    /**
     * @generated from field: int32 round = 8;
     */
    round: number;
    /**
     * @generated from field: int32 count = 9;
     */
    count: number;
    /**
     * @generated from field: int32 fan = 10;
     */
    fan: number;
    /**
     * @generated from field: int32 odd = 11;
     */
    odd: number;
    /**
     * Coundown value
     *
     * @generated from field: int32 countdown = 16;
     */
    countdown: number;
    /**
     * Deal start time for blockchain
     *
     * @generated from field: int64 ts_deal = 18;
     */
    tsDeal: bigint;
    /**
     * Deal count down for  blockchain
     *
     * @generated from field: int64 deal_countdown = 19;
     */
    dealCountdown: bigint;
    /**
     * maskedcardssn for blockchain
     *
     * @generated from field: string masked_card_sn = 20;
     */
    maskedCardSn: string;
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
    static readonly typeName = "games.fantan.GameStatus";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GameStatus;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GameStatus;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GameStatus;
    static equals(a: GameStatus | PlainMessage<GameStatus> | undefined, b: GameStatus | PlainMessage<GameStatus> | undefined): boolean;
}
