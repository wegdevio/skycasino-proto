/**
 * @generated from enum games.thebigbattle.ResourceType
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
 * @generated from enum games.thebigbattle.Step
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
     * 捨牌1
     *
     * @generated from enum value: DEAL_DISCARD_1 = 4;
     */
    DEAL_DISCARD_1 = 4,
    /**
     * 派發龍例牌
     *
     * @generated from enum value: DEAL_DRAGON_1 = 5;
     */
    DEAL_DRAGON_1 = 5,
    /**
     * 派發虎例牌
     *
     * @generated from enum value: DEAL_TIGER_1 = 6;
     */
    DEAL_TIGER_1 = 6,
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
 * @generated from enum games.thebigbattle.Seat
 */
export declare enum Seat {
    /**
     * 未指定
     *
     * @generated from enum value: SEAT_UNSPECIFIED = 0;
     */
    SEAT_UNSPECIFIED = 0,
    /**
     * 龍
     *
     * @generated from enum value: DRAGON = 1;
     */
    DRAGON = 1,
    /**
     * 虎
     *
     * @generated from enum value: TIGER = 2;
     */
    TIGER = 2,
    /**
     * Dealer
     *
     * @generated from enum value: DEALER = 3;
     */
    DEALER = 3,
    /**
     * Discard
     *
     * @generated from enum value: DISCARD = 4;
     */
    DISCARD = 4,
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
 * @generated from enum games.thebigbattle.ResultRecordType
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
 * @generated from enum games.thebigbattle.CancelReason
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
