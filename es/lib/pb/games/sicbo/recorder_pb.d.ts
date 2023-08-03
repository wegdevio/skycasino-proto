/**
 * @generated from enum games.sicbo.ResourceType
 */
export declare enum ResourceType {
    /**
     * 未指定
     *
     * @generated from enum value: RESOURCE_TYPE_UNSPECIFIED = 0;
     */
    RESOURCE_TYPE_UNSPECIFIED = 0,
    /**
     * 碗公
     *
     * @generated from enum value: BOWL = 1;
     */
    BOWL = 1
}
/**
 * 步驟，依據遊戲供應商邏輯，不是每個步驟都會走到
 *
 * @generated from enum games.sicbo.Step
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
     * 擲骰
     *
     * @generated from enum value: THROW_DICE = 8;
     */
    THROW_DICE = 8,
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
 * @generated from enum games.sicbo.Seat
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
 * @generated from enum games.sicbo.ResultRecordType
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
