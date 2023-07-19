// @generated by protoc-gen-connect-es v0.9.1
// @generated from file recorder/recorder.proto (package recorder, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { FetchRoundRecordRequest, FetchRoundRecordResponse, FetchShuffleRecordRequest, FetchShuffleRecordResponse, RecordIDResponse, RecordRoundCancelRequest, RecordRoundFinishRequest, RecordRoundResultsRequest, RecordRoundStartRequest, RecordRoundStepsRequest, RecordShuffleDoneRequest, RecordShuffleStartedRequest } from "./recorder_pb.js";
import { Empty, MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service recorder.RecorderService
 */
export declare const RecorderService: {
  readonly typeName: "recorder.RecorderService",
  readonly methods: {
    /**
     * 開始更換牌組
     *
     * @generated from rpc recorder.RecorderService.RecordShuffleStarted
     */
    readonly recordShuffleStarted: {
      readonly name: "RecordShuffleStarted",
      readonly I: typeof RecordShuffleStartedRequest,
      readonly O: typeof RecordIDResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * 更換牌組完畢
     *
     * @generated from rpc recorder.RecorderService.RecordShuffleDone
     */
    readonly recordShuffleDone: {
      readonly name: "RecordShuffleDone",
      readonly I: typeof RecordShuffleDoneRequest,
      readonly O: typeof Empty,
      readonly kind: MethodKind.Unary,
    },
    /**
     * 開啟新局
     *
     * @generated from rpc recorder.RecorderService.RecordRoundStart
     */
    readonly recordRoundStart: {
      readonly name: "RecordRoundStart",
      readonly I: typeof RecordRoundStartRequest,
      readonly O: typeof RecordIDResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * 記錄步驟
     *
     * @generated from rpc recorder.RecorderService.RecordRoundSteps
     */
    readonly recordRoundSteps: {
      readonly name: "RecordRoundSteps",
      readonly I: typeof RecordRoundStepsRequest,
      readonly O: typeof Empty,
      readonly kind: MethodKind.Unary,
    },
    /**
     * 紀錄結果
     *
     * @generated from rpc recorder.RecorderService.RecordRoundResults
     */
    readonly recordRoundResults: {
      readonly name: "RecordRoundResults",
      readonly I: typeof RecordRoundResultsRequest,
      readonly O: typeof Empty,
      readonly kind: MethodKind.Unary,
    },
    /**
     * 此局作廢
     *
     * @generated from rpc recorder.RecorderService.RecordRoundCancel
     */
    readonly recordRoundCancel: {
      readonly name: "RecordRoundCancel",
      readonly I: typeof RecordRoundCancelRequest,
      readonly O: typeof Empty,
      readonly kind: MethodKind.Unary,
    },
    /**
     * 結束此局
     *
     * @generated from rpc recorder.RecorderService.RecordRoundFinish
     */
    readonly recordRoundFinish: {
      readonly name: "RecordRoundFinish",
      readonly I: typeof RecordRoundFinishRequest,
      readonly O: typeof Empty,
      readonly kind: MethodKind.Unary,
    },
  }
};

/**
 * @generated from service recorder.RecorderReadService
 */
export declare const RecorderReadService: {
  readonly typeName: "recorder.RecorderReadService",
  readonly methods: {
    /**
     * 讀洗牌紀錄
     *
     * @generated from rpc recorder.RecorderReadService.FetchShuffleRecord
     */
    readonly fetchShuffleRecord: {
      readonly name: "FetchShuffleRecord",
      readonly I: typeof FetchShuffleRecordRequest,
      readonly O: typeof FetchShuffleRecordResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * 讀遊戲局號紀錄
     *
     * @generated from rpc recorder.RecorderReadService.FetchRoundRecord
     */
    readonly fetchRoundRecord: {
      readonly name: "FetchRoundRecord",
      readonly I: typeof FetchRoundRecordRequest,
      readonly O: typeof FetchRoundRecordResponse,
      readonly kind: MethodKind.Unary,
    },
  }
};

