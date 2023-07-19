/**
 * 使用卡牌種類
 *
 * @generated from enum games.bullfight.CardType
 */
export declare enum CardType {
    /**
     * 未指定
     *
     * @generated from enum value: CARD_TYPE_UNSPECIFIED = 0;
     */
    CARD_TYPE_UNSPECIFIED = 0,
    /**
     * 撲克牌
     *
     * @generated from enum value: POKER = 1;
     */
    POKER = 1
}
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
     * 例牌
     *
     * @generated from enum value: NORMAL = 1;
     */
    NORMAL = 1
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
