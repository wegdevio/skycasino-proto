// @generated by protoc-gen-es v1.3.1 with parameter "target=ts,import_extension=none"
// @generated from file games/roulette/recorder.proto (package games.roulette, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { proto3 } from "@bufbuild/protobuf";
/**
 * @generated from enum games.roulette.ResourceType
 */
export var ResourceType;
(function (ResourceType) {
    /**
     * 未指定
     *
     * @generated from enum value: RESOURCE_TYPE_UNSPECIFIED = 0;
     */
    ResourceType[ResourceType["RESOURCE_TYPE_UNSPECIFIED"] = 0] = "RESOURCE_TYPE_UNSPECIFIED";
    /**
     * 牌靴
     *
     * @generated from enum value: SHOE = 1;
     */
    ResourceType[ResourceType["SHOE"] = 1] = "SHOE";
    /**
     * 輪盤
     *
     * @generated from enum value: ROULETTE = 2;
     */
    ResourceType[ResourceType["ROULETTE"] = 2] = "ROULETTE";
})(ResourceType || (ResourceType = {}));
// Retrieve enum metadata with: proto3.getEnumType(ResourceType)
proto3.util.setEnumType(ResourceType, "games.roulette.ResourceType", [
    { no: 0, name: "RESOURCE_TYPE_UNSPECIFIED" },
    { no: 1, name: "SHOE" },
    { no: 2, name: "ROULETTE" },
]);
/**
 * 步驟，依據遊戲供應商邏輯，不是每個步驟都會走到
 *
 * @generated from enum games.roulette.Step
 */
export var Step;
(function (Step) {
    /**
     * 未指定
     *
     * @generated from enum value: STEP_UNSPECIFIED = 0;
     */
    Step[Step["STEP_UNSPECIFIED"] = 0] = "STEP_UNSPECIFIED";
    /**
     * 本局開始
     *
     * @generated from enum value: ROUND_START = 1;
     */
    Step[Step["ROUND_START"] = 1] = "ROUND_START";
    /**
     * 本局完成
     *
     * @generated from enum value: ROUND_FINISHED = 2;
     */
    Step[Step["ROUND_FINISHED"] = 2] = "ROUND_FINISHED";
    /**
     * 本局取消
     *
     * @generated from enum value: ROUND_CANCELED = 3;
     */
    Step[Step["ROUND_CANCELED"] = 3] = "ROUND_CANCELED";
    /**
     * 開放下注
     *
     * @generated from enum value: OPEN_FOR_BETTING = 4;
     */
    Step[Step["OPEN_FOR_BETTING"] = 4] = "OPEN_FOR_BETTING";
    /**
     * 停止下注
     *
     * @generated from enum value: CLOSE_THE_BETTING = 5;
     */
    Step[Step["CLOSE_THE_BETTING"] = 5] = "CLOSE_THE_BETTING";
    /**
     * 轉盤
     *
     * @generated from enum value: SPIN_WHEEL = 8;
     */
    Step[Step["SPIN_WHEEL"] = 8] = "SPIN_WHEEL";
    /**
     * PITBOSS 修改骰點
     *
     * @generated from enum value: PITBOSS_MODIFY_BOWL = 16;
     */
    Step[Step["PITBOSS_MODIFY_BOWL"] = 16] = "PITBOSS_MODIFY_BOWL";
})(Step || (Step = {}));
// Retrieve enum metadata with: proto3.getEnumType(Step)
proto3.util.setEnumType(Step, "games.roulette.Step", [
    { no: 0, name: "STEP_UNSPECIFIED" },
    { no: 1, name: "ROUND_START" },
    { no: 2, name: "ROUND_FINISHED" },
    { no: 3, name: "ROUND_CANCELED" },
    { no: 4, name: "OPEN_FOR_BETTING" },
    { no: 5, name: "CLOSE_THE_BETTING" },
    { no: 8, name: "SPIN_WHEEL" },
    { no: 16, name: "PITBOSS_MODIFY_BOWL" },
]);
/**
 * 座位功能代碼
 *
 * @generated from enum games.roulette.Seat
 */
export var Seat;
(function (Seat) {
    /**
     * 未指定
     *
     * @generated from enum value: SEAT_UNSPECIFIED = 0;
     */
    Seat[Seat["SEAT_UNSPECIFIED"] = 0] = "SEAT_UNSPECIFIED";
    /**
     * Dealer
     *
     * @generated from enum value: DEALER = 1;
     */
    Seat[Seat["DEALER"] = 1] = "DEALER";
    /**
     * Pitboss
     *
     * @generated from enum value: PITBOSS = 9;
     */
    Seat[Seat["PITBOSS"] = 9] = "PITBOSS";
})(Seat || (Seat = {}));
// Retrieve enum metadata with: proto3.getEnumType(Seat)
proto3.util.setEnumType(Seat, "games.roulette.Seat", [
    { no: 0, name: "SEAT_UNSPECIFIED" },
    { no: 1, name: "DEALER" },
    { no: 9, name: "PITBOSS" },
]);
/**
 * 結果紀錄類型代碼
 *
 * @generated from enum games.roulette.ResultRecordType
 */
export var ResultRecordType;
(function (ResultRecordType) {
    /**
     * 未指定
     *
     * @generated from enum value: RESULT_RECORD_TYPE_UNSPECIFIED = 0;
     */
    ResultRecordType[ResultRecordType["RESULT_RECORD_TYPE_UNSPECIFIED"] = 0] = "RESULT_RECORD_TYPE_UNSPECIFIED";
    /**
     * 遊戲局結束
     *
     * @generated from enum value: ROUND_FINISH = 1;
     */
    ResultRecordType[ResultRecordType["ROUND_FINISH"] = 1] = "ROUND_FINISH";
    /**
     * Pitboss 修正
     *
     * @generated from enum value: PITBOSS_MODIFY_RESULT = 2;
     */
    ResultRecordType[ResultRecordType["PITBOSS_MODIFY_RESULT"] = 2] = "PITBOSS_MODIFY_RESULT";
})(ResultRecordType || (ResultRecordType = {}));
// Retrieve enum metadata with: proto3.getEnumType(ResultRecordType)
proto3.util.setEnumType(ResultRecordType, "games.roulette.ResultRecordType", [
    { no: 0, name: "RESULT_RECORD_TYPE_UNSPECIFIED" },
    { no: 1, name: "ROUND_FINISH" },
    { no: 2, name: "PITBOSS_MODIFY_RESULT" },
]);
