// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.32.0
// 	protoc        (unknown)
// source: games/sicbo/record.proto

package sicbo

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type GameSubtype int32

const (
	// 未指定
	GameSubtype_SICBO_TYPE_UNSPECIFIED GameSubtype = 0
	// 骰寶
	GameSubtype_SICBO_CLASSIC GameSubtype = 1
	// 財神骰寶
	GameSubtype_SICBO_FORTUNE GameSubtype = 2
	// 閃電骰寶
	GameSubtype_SICBO_LIGHTNING GameSubtype = 3
	// 區塊鏈骰寶
	GameSubtype_SICBO_BLOCKCHAIN GameSubtype = 16
)

// Enum value maps for GameSubtype.
var (
	GameSubtype_name = map[int32]string{
		0:  "SICBO_TYPE_UNSPECIFIED",
		1:  "SICBO_CLASSIC",
		2:  "SICBO_FORTUNE",
		3:  "SICBO_LIGHTNING",
		16: "SICBO_BLOCKCHAIN",
	}
	GameSubtype_value = map[string]int32{
		"SICBO_TYPE_UNSPECIFIED": 0,
		"SICBO_CLASSIC":          1,
		"SICBO_FORTUNE":          2,
		"SICBO_LIGHTNING":        3,
		"SICBO_BLOCKCHAIN":       16,
	}
)

func (x GameSubtype) Enum() *GameSubtype {
	p := new(GameSubtype)
	*p = x
	return p
}

func (x GameSubtype) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (GameSubtype) Descriptor() protoreflect.EnumDescriptor {
	return file_games_sicbo_record_proto_enumTypes[0].Descriptor()
}

func (GameSubtype) Type() protoreflect.EnumType {
	return &file_games_sicbo_record_proto_enumTypes[0]
}

func (x GameSubtype) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use GameSubtype.Descriptor instead.
func (GameSubtype) EnumDescriptor() ([]byte, []int) {
	return file_games_sicbo_record_proto_rawDescGZIP(), []int{0}
}

type ResourceType int32

const (
	// 未指定
	ResourceType_RESOURCE_TYPE_UNSPECIFIED ResourceType = 0
	// 牌靴
	ResourceType_SHOE ResourceType = 1
	// 碗公
	ResourceType_BOWL ResourceType = 2
)

// Enum value maps for ResourceType.
var (
	ResourceType_name = map[int32]string{
		0: "RESOURCE_TYPE_UNSPECIFIED",
		1: "SHOE",
		2: "BOWL",
	}
	ResourceType_value = map[string]int32{
		"RESOURCE_TYPE_UNSPECIFIED": 0,
		"SHOE":                      1,
		"BOWL":                      2,
	}
)

func (x ResourceType) Enum() *ResourceType {
	p := new(ResourceType)
	*p = x
	return p
}

func (x ResourceType) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (ResourceType) Descriptor() protoreflect.EnumDescriptor {
	return file_games_sicbo_record_proto_enumTypes[1].Descriptor()
}

func (ResourceType) Type() protoreflect.EnumType {
	return &file_games_sicbo_record_proto_enumTypes[1]
}

func (x ResourceType) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use ResourceType.Descriptor instead.
func (ResourceType) EnumDescriptor() ([]byte, []int) {
	return file_games_sicbo_record_proto_rawDescGZIP(), []int{1}
}

// 步驟，依據遊戲供應商邏輯，不是每個步驟都會走到
type Step int32

const (
	// 未指定
	Step_STEP_UNSPECIFIED Step = 0
	// 本局開始
	Step_ROUND_START Step = 1
	// 本局完成
	Step_ROUND_FINISHED Step = 2
	// 本局取消
	Step_ROUND_CANCELED Step = 3
	// 開放下注
	Step_OPEN_FOR_BETTING Step = 4
	// 停止下注
	Step_CLOSE_THE_BETTING Step = 5
	// 擲骰
	Step_THROW_DICE Step = 8
	// PITBOSS 修改骰點
	Step_PITBOSS_MODIFY_BOWL Step = 16
)

// Enum value maps for Step.
var (
	Step_name = map[int32]string{
		0:  "STEP_UNSPECIFIED",
		1:  "ROUND_START",
		2:  "ROUND_FINISHED",
		3:  "ROUND_CANCELED",
		4:  "OPEN_FOR_BETTING",
		5:  "CLOSE_THE_BETTING",
		8:  "THROW_DICE",
		16: "PITBOSS_MODIFY_BOWL",
	}
	Step_value = map[string]int32{
		"STEP_UNSPECIFIED":    0,
		"ROUND_START":         1,
		"ROUND_FINISHED":      2,
		"ROUND_CANCELED":      3,
		"OPEN_FOR_BETTING":    4,
		"CLOSE_THE_BETTING":   5,
		"THROW_DICE":          8,
		"PITBOSS_MODIFY_BOWL": 16,
	}
)

func (x Step) Enum() *Step {
	p := new(Step)
	*p = x
	return p
}

func (x Step) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (Step) Descriptor() protoreflect.EnumDescriptor {
	return file_games_sicbo_record_proto_enumTypes[2].Descriptor()
}

func (Step) Type() protoreflect.EnumType {
	return &file_games_sicbo_record_proto_enumTypes[2]
}

func (x Step) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use Step.Descriptor instead.
func (Step) EnumDescriptor() ([]byte, []int) {
	return file_games_sicbo_record_proto_rawDescGZIP(), []int{2}
}

// 結果紀錄類型代碼
type ResultRecordType int32

const (
	// 未指定
	ResultRecordType_RESULT_RECORD_TYPE_UNSPECIFIED ResultRecordType = 0
	// 遊戲局結束
	ResultRecordType_ROUND_FINISH ResultRecordType = 1
	// Pitboss 修正
	ResultRecordType_PITBOSS_MODIFY_RESULT ResultRecordType = 2
)

// Enum value maps for ResultRecordType.
var (
	ResultRecordType_name = map[int32]string{
		0: "RESULT_RECORD_TYPE_UNSPECIFIED",
		1: "ROUND_FINISH",
		2: "PITBOSS_MODIFY_RESULT",
	}
	ResultRecordType_value = map[string]int32{
		"RESULT_RECORD_TYPE_UNSPECIFIED": 0,
		"ROUND_FINISH":                   1,
		"PITBOSS_MODIFY_RESULT":          2,
	}
)

func (x ResultRecordType) Enum() *ResultRecordType {
	p := new(ResultRecordType)
	*p = x
	return p
}

func (x ResultRecordType) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (ResultRecordType) Descriptor() protoreflect.EnumDescriptor {
	return file_games_sicbo_record_proto_enumTypes[3].Descriptor()
}

func (ResultRecordType) Type() protoreflect.EnumType {
	return &file_games_sicbo_record_proto_enumTypes[3]
}

func (x ResultRecordType) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use ResultRecordType.Descriptor instead.
func (ResultRecordType) EnumDescriptor() ([]byte, []int) {
	return file_games_sicbo_record_proto_rawDescGZIP(), []int{3}
}

type SicboBead struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	RoundCode  string           `protobuf:"bytes,1,opt,name=round_code,json=roundCode,proto3" json:"roundCode" bson:"roundCode" yaml:"roundCode"`
	ShoeCode   string           `protobuf:"bytes,2,opt,name=shoe_code,json=shoeCode,proto3" json:"shoeCode" bson:"shoeCode" yaml:"shoeCode"`
	Shoe       uint32           `protobuf:"varint,3,opt,name=shoe,proto3" json:"shoe" bson:"shoe" yaml:"shoe"`
	ShoeRound  uint32           `protobuf:"varint,4,opt,name=shoe_round,json=shoeRound,proto3" json:"shoeRound" bson:"shoeRound" yaml:"shoeRound"`
	Result     string           `protobuf:"bytes,5,opt,name=result,proto3" json:"result" yaml:"result" bson:"result"`
	Dice       []int32          `protobuf:"varint,7,rep,packed,name=dice,proto3" json:"dice" bson:"dice" yaml:"dice"`
	Total      int32            `protobuf:"varint,11,opt,name=total,proto3" json:"total" bson:"total" yaml:"total"`
	Odd        int32            `protobuf:"varint,12,opt,name=odd,proto3" json:"odd" bson:"odd" yaml:"odd"`
	Size       int32            `protobuf:"varint,13,opt,name=size,proto3" json:"size" yaml:"size" bson:"size"`
	Tie        int32            `protobuf:"varint,14,opt,name=tie,proto3" json:"tie" bson:"tie" yaml:"tie"`
	Odds       int32            `protobuf:"varint,15,opt,name=odds,proto3" json:"odds" bson:"odds" yaml:"odds"`
	Luckys     map[string]int32 `protobuf:"bytes,31,rep,name=luckys,proto3" json:"luckys" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"varint,2,opt,name=value,proto3" yaml:"luckys" bson:"luckys"`
	Statistics map[string]int32 `protobuf:"bytes,32,rep,name=statistics,proto3" json:"statistics" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"varint,2,opt,name=value,proto3" bson:"statistics" yaml:"statistics"`
}

func (x *SicboBead) Reset() {
	*x = SicboBead{}
	if protoimpl.UnsafeEnabled {
		mi := &file_games_sicbo_record_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *SicboBead) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*SicboBead) ProtoMessage() {}

func (x *SicboBead) ProtoReflect() protoreflect.Message {
	mi := &file_games_sicbo_record_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use SicboBead.ProtoReflect.Descriptor instead.
func (*SicboBead) Descriptor() ([]byte, []int) {
	return file_games_sicbo_record_proto_rawDescGZIP(), []int{0}
}

func (x *SicboBead) GetRoundCode() string {
	if x != nil {
		return x.RoundCode
	}
	return ""
}

func (x *SicboBead) GetShoeCode() string {
	if x != nil {
		return x.ShoeCode
	}
	return ""
}

func (x *SicboBead) GetShoe() uint32 {
	if x != nil {
		return x.Shoe
	}
	return 0
}

func (x *SicboBead) GetShoeRound() uint32 {
	if x != nil {
		return x.ShoeRound
	}
	return 0
}

func (x *SicboBead) GetResult() string {
	if x != nil {
		return x.Result
	}
	return ""
}

func (x *SicboBead) GetDice() []int32 {
	if x != nil {
		return x.Dice
	}
	return nil
}

func (x *SicboBead) GetTotal() int32 {
	if x != nil {
		return x.Total
	}
	return 0
}

func (x *SicboBead) GetOdd() int32 {
	if x != nil {
		return x.Odd
	}
	return 0
}

func (x *SicboBead) GetSize() int32 {
	if x != nil {
		return x.Size
	}
	return 0
}

func (x *SicboBead) GetTie() int32 {
	if x != nil {
		return x.Tie
	}
	return 0
}

func (x *SicboBead) GetOdds() int32 {
	if x != nil {
		return x.Odds
	}
	return 0
}

func (x *SicboBead) GetLuckys() map[string]int32 {
	if x != nil {
		return x.Luckys
	}
	return nil
}

func (x *SicboBead) GetStatistics() map[string]int32 {
	if x != nil {
		return x.Statistics
	}
	return nil
}

var File_games_sicbo_record_proto protoreflect.FileDescriptor

var file_games_sicbo_record_proto_rawDesc = []byte{
	0x0a, 0x18, 0x67, 0x61, 0x6d, 0x65, 0x73, 0x2f, 0x73, 0x69, 0x63, 0x62, 0x6f, 0x2f, 0x72, 0x65,
	0x63, 0x6f, 0x72, 0x64, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x0b, 0x67, 0x61, 0x6d, 0x65,
	0x73, 0x2e, 0x73, 0x69, 0x63, 0x62, 0x6f, 0x22, 0x86, 0x04, 0x0a, 0x09, 0x53, 0x69, 0x63, 0x62,
	0x6f, 0x42, 0x65, 0x61, 0x64, 0x12, 0x1d, 0x0a, 0x0a, 0x72, 0x6f, 0x75, 0x6e, 0x64, 0x5f, 0x63,
	0x6f, 0x64, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x72, 0x6f, 0x75, 0x6e, 0x64,
	0x43, 0x6f, 0x64, 0x65, 0x12, 0x1b, 0x0a, 0x09, 0x73, 0x68, 0x6f, 0x65, 0x5f, 0x63, 0x6f, 0x64,
	0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x73, 0x68, 0x6f, 0x65, 0x43, 0x6f, 0x64,
	0x65, 0x12, 0x12, 0x0a, 0x04, 0x73, 0x68, 0x6f, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28, 0x0d, 0x52,
	0x04, 0x73, 0x68, 0x6f, 0x65, 0x12, 0x1d, 0x0a, 0x0a, 0x73, 0x68, 0x6f, 0x65, 0x5f, 0x72, 0x6f,
	0x75, 0x6e, 0x64, 0x18, 0x04, 0x20, 0x01, 0x28, 0x0d, 0x52, 0x09, 0x73, 0x68, 0x6f, 0x65, 0x52,
	0x6f, 0x75, 0x6e, 0x64, 0x12, 0x16, 0x0a, 0x06, 0x72, 0x65, 0x73, 0x75, 0x6c, 0x74, 0x18, 0x05,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x72, 0x65, 0x73, 0x75, 0x6c, 0x74, 0x12, 0x12, 0x0a, 0x04,
	0x64, 0x69, 0x63, 0x65, 0x18, 0x07, 0x20, 0x03, 0x28, 0x05, 0x52, 0x04, 0x64, 0x69, 0x63, 0x65,
	0x12, 0x14, 0x0a, 0x05, 0x74, 0x6f, 0x74, 0x61, 0x6c, 0x18, 0x0b, 0x20, 0x01, 0x28, 0x05, 0x52,
	0x05, 0x74, 0x6f, 0x74, 0x61, 0x6c, 0x12, 0x10, 0x0a, 0x03, 0x6f, 0x64, 0x64, 0x18, 0x0c, 0x20,
	0x01, 0x28, 0x05, 0x52, 0x03, 0x6f, 0x64, 0x64, 0x12, 0x12, 0x0a, 0x04, 0x73, 0x69, 0x7a, 0x65,
	0x18, 0x0d, 0x20, 0x01, 0x28, 0x05, 0x52, 0x04, 0x73, 0x69, 0x7a, 0x65, 0x12, 0x10, 0x0a, 0x03,
	0x74, 0x69, 0x65, 0x18, 0x0e, 0x20, 0x01, 0x28, 0x05, 0x52, 0x03, 0x74, 0x69, 0x65, 0x12, 0x12,
	0x0a, 0x04, 0x6f, 0x64, 0x64, 0x73, 0x18, 0x0f, 0x20, 0x01, 0x28, 0x05, 0x52, 0x04, 0x6f, 0x64,
	0x64, 0x73, 0x12, 0x3a, 0x0a, 0x06, 0x6c, 0x75, 0x63, 0x6b, 0x79, 0x73, 0x18, 0x1f, 0x20, 0x03,
	0x28, 0x0b, 0x32, 0x22, 0x2e, 0x67, 0x61, 0x6d, 0x65, 0x73, 0x2e, 0x73, 0x69, 0x63, 0x62, 0x6f,
	0x2e, 0x53, 0x69, 0x63, 0x62, 0x6f, 0x42, 0x65, 0x61, 0x64, 0x2e, 0x4c, 0x75, 0x63, 0x6b, 0x79,
	0x73, 0x45, 0x6e, 0x74, 0x72, 0x79, 0x52, 0x06, 0x6c, 0x75, 0x63, 0x6b, 0x79, 0x73, 0x12, 0x46,
	0x0a, 0x0a, 0x73, 0x74, 0x61, 0x74, 0x69, 0x73, 0x74, 0x69, 0x63, 0x73, 0x18, 0x20, 0x20, 0x03,
	0x28, 0x0b, 0x32, 0x26, 0x2e, 0x67, 0x61, 0x6d, 0x65, 0x73, 0x2e, 0x73, 0x69, 0x63, 0x62, 0x6f,
	0x2e, 0x53, 0x69, 0x63, 0x62, 0x6f, 0x42, 0x65, 0x61, 0x64, 0x2e, 0x53, 0x74, 0x61, 0x74, 0x69,
	0x73, 0x74, 0x69, 0x63, 0x73, 0x45, 0x6e, 0x74, 0x72, 0x79, 0x52, 0x0a, 0x73, 0x74, 0x61, 0x74,
	0x69, 0x73, 0x74, 0x69, 0x63, 0x73, 0x1a, 0x39, 0x0a, 0x0b, 0x4c, 0x75, 0x63, 0x6b, 0x79, 0x73,
	0x45, 0x6e, 0x74, 0x72, 0x79, 0x12, 0x10, 0x0a, 0x03, 0x6b, 0x65, 0x79, 0x18, 0x01, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x03, 0x6b, 0x65, 0x79, 0x12, 0x14, 0x0a, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65,
	0x18, 0x02, 0x20, 0x01, 0x28, 0x05, 0x52, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x3a, 0x02, 0x38,
	0x01, 0x1a, 0x3d, 0x0a, 0x0f, 0x53, 0x74, 0x61, 0x74, 0x69, 0x73, 0x74, 0x69, 0x63, 0x73, 0x45,
	0x6e, 0x74, 0x72, 0x79, 0x12, 0x10, 0x0a, 0x03, 0x6b, 0x65, 0x79, 0x18, 0x01, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x03, 0x6b, 0x65, 0x79, 0x12, 0x14, 0x0a, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x18,
	0x02, 0x20, 0x01, 0x28, 0x05, 0x52, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x3a, 0x02, 0x38, 0x01,
	0x2a, 0x7a, 0x0a, 0x0b, 0x47, 0x61, 0x6d, 0x65, 0x53, 0x75, 0x62, 0x74, 0x79, 0x70, 0x65, 0x12,
	0x1a, 0x0a, 0x16, 0x53, 0x49, 0x43, 0x42, 0x4f, 0x5f, 0x54, 0x59, 0x50, 0x45, 0x5f, 0x55, 0x4e,
	0x53, 0x50, 0x45, 0x43, 0x49, 0x46, 0x49, 0x45, 0x44, 0x10, 0x00, 0x12, 0x11, 0x0a, 0x0d, 0x53,
	0x49, 0x43, 0x42, 0x4f, 0x5f, 0x43, 0x4c, 0x41, 0x53, 0x53, 0x49, 0x43, 0x10, 0x01, 0x12, 0x11,
	0x0a, 0x0d, 0x53, 0x49, 0x43, 0x42, 0x4f, 0x5f, 0x46, 0x4f, 0x52, 0x54, 0x55, 0x4e, 0x45, 0x10,
	0x02, 0x12, 0x13, 0x0a, 0x0f, 0x53, 0x49, 0x43, 0x42, 0x4f, 0x5f, 0x4c, 0x49, 0x47, 0x48, 0x54,
	0x4e, 0x49, 0x4e, 0x47, 0x10, 0x03, 0x12, 0x14, 0x0a, 0x10, 0x53, 0x49, 0x43, 0x42, 0x4f, 0x5f,
	0x42, 0x4c, 0x4f, 0x43, 0x4b, 0x43, 0x48, 0x41, 0x49, 0x4e, 0x10, 0x10, 0x2a, 0x41, 0x0a, 0x0c,
	0x52, 0x65, 0x73, 0x6f, 0x75, 0x72, 0x63, 0x65, 0x54, 0x79, 0x70, 0x65, 0x12, 0x1d, 0x0a, 0x19,
	0x52, 0x45, 0x53, 0x4f, 0x55, 0x52, 0x43, 0x45, 0x5f, 0x54, 0x59, 0x50, 0x45, 0x5f, 0x55, 0x4e,
	0x53, 0x50, 0x45, 0x43, 0x49, 0x46, 0x49, 0x45, 0x44, 0x10, 0x00, 0x12, 0x08, 0x0a, 0x04, 0x53,
	0x48, 0x4f, 0x45, 0x10, 0x01, 0x12, 0x08, 0x0a, 0x04, 0x42, 0x4f, 0x57, 0x4c, 0x10, 0x02, 0x2a,
	0xab, 0x01, 0x0a, 0x04, 0x53, 0x74, 0x65, 0x70, 0x12, 0x14, 0x0a, 0x10, 0x53, 0x54, 0x45, 0x50,
	0x5f, 0x55, 0x4e, 0x53, 0x50, 0x45, 0x43, 0x49, 0x46, 0x49, 0x45, 0x44, 0x10, 0x00, 0x12, 0x0f,
	0x0a, 0x0b, 0x52, 0x4f, 0x55, 0x4e, 0x44, 0x5f, 0x53, 0x54, 0x41, 0x52, 0x54, 0x10, 0x01, 0x12,
	0x12, 0x0a, 0x0e, 0x52, 0x4f, 0x55, 0x4e, 0x44, 0x5f, 0x46, 0x49, 0x4e, 0x49, 0x53, 0x48, 0x45,
	0x44, 0x10, 0x02, 0x12, 0x12, 0x0a, 0x0e, 0x52, 0x4f, 0x55, 0x4e, 0x44, 0x5f, 0x43, 0x41, 0x4e,
	0x43, 0x45, 0x4c, 0x45, 0x44, 0x10, 0x03, 0x12, 0x14, 0x0a, 0x10, 0x4f, 0x50, 0x45, 0x4e, 0x5f,
	0x46, 0x4f, 0x52, 0x5f, 0x42, 0x45, 0x54, 0x54, 0x49, 0x4e, 0x47, 0x10, 0x04, 0x12, 0x15, 0x0a,
	0x11, 0x43, 0x4c, 0x4f, 0x53, 0x45, 0x5f, 0x54, 0x48, 0x45, 0x5f, 0x42, 0x45, 0x54, 0x54, 0x49,
	0x4e, 0x47, 0x10, 0x05, 0x12, 0x0e, 0x0a, 0x0a, 0x54, 0x48, 0x52, 0x4f, 0x57, 0x5f, 0x44, 0x49,
	0x43, 0x45, 0x10, 0x08, 0x12, 0x17, 0x0a, 0x13, 0x50, 0x49, 0x54, 0x42, 0x4f, 0x53, 0x53, 0x5f,
	0x4d, 0x4f, 0x44, 0x49, 0x46, 0x59, 0x5f, 0x42, 0x4f, 0x57, 0x4c, 0x10, 0x10, 0x2a, 0x63, 0x0a,
	0x10, 0x52, 0x65, 0x73, 0x75, 0x6c, 0x74, 0x52, 0x65, 0x63, 0x6f, 0x72, 0x64, 0x54, 0x79, 0x70,
	0x65, 0x12, 0x22, 0x0a, 0x1e, 0x52, 0x45, 0x53, 0x55, 0x4c, 0x54, 0x5f, 0x52, 0x45, 0x43, 0x4f,
	0x52, 0x44, 0x5f, 0x54, 0x59, 0x50, 0x45, 0x5f, 0x55, 0x4e, 0x53, 0x50, 0x45, 0x43, 0x49, 0x46,
	0x49, 0x45, 0x44, 0x10, 0x00, 0x12, 0x10, 0x0a, 0x0c, 0x52, 0x4f, 0x55, 0x4e, 0x44, 0x5f, 0x46,
	0x49, 0x4e, 0x49, 0x53, 0x48, 0x10, 0x01, 0x12, 0x19, 0x0a, 0x15, 0x50, 0x49, 0x54, 0x42, 0x4f,
	0x53, 0x53, 0x5f, 0x4d, 0x4f, 0x44, 0x49, 0x46, 0x59, 0x5f, 0x52, 0x45, 0x53, 0x55, 0x4c, 0x54,
	0x10, 0x02, 0x42, 0xa1, 0x01, 0x0a, 0x0f, 0x63, 0x6f, 0x6d, 0x2e, 0x67, 0x61, 0x6d, 0x65, 0x73,
	0x2e, 0x73, 0x69, 0x63, 0x62, 0x6f, 0x42, 0x0b, 0x52, 0x65, 0x63, 0x6f, 0x72, 0x64, 0x50, 0x72,
	0x6f, 0x74, 0x6f, 0x50, 0x01, 0x5a, 0x34, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f,
	0x6d, 0x2f, 0x77, 0x65, 0x67, 0x64, 0x65, 0x76, 0x69, 0x6f, 0x2f, 0x73, 0x6b, 0x79, 0x63, 0x61,
	0x73, 0x69, 0x6e, 0x6f, 0x2d, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2f, 0x70, 0x62, 0x67, 0x6f, 0x2f,
	0x67, 0x61, 0x6d, 0x65, 0x73, 0x2f, 0x73, 0x69, 0x63, 0x62, 0x6f, 0xa2, 0x02, 0x03, 0x47, 0x53,
	0x58, 0xaa, 0x02, 0x0b, 0x47, 0x61, 0x6d, 0x65, 0x73, 0x2e, 0x53, 0x69, 0x63, 0x62, 0x6f, 0xca,
	0x02, 0x0b, 0x47, 0x61, 0x6d, 0x65, 0x73, 0x5c, 0x53, 0x69, 0x63, 0x62, 0x6f, 0xe2, 0x02, 0x17,
	0x47, 0x61, 0x6d, 0x65, 0x73, 0x5c, 0x53, 0x69, 0x63, 0x62, 0x6f, 0x5c, 0x47, 0x50, 0x42, 0x4d,
	0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0xea, 0x02, 0x0c, 0x47, 0x61, 0x6d, 0x65, 0x73, 0x3a,
	0x3a, 0x53, 0x69, 0x63, 0x62, 0x6f, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_games_sicbo_record_proto_rawDescOnce sync.Once
	file_games_sicbo_record_proto_rawDescData = file_games_sicbo_record_proto_rawDesc
)

func file_games_sicbo_record_proto_rawDescGZIP() []byte {
	file_games_sicbo_record_proto_rawDescOnce.Do(func() {
		file_games_sicbo_record_proto_rawDescData = protoimpl.X.CompressGZIP(file_games_sicbo_record_proto_rawDescData)
	})
	return file_games_sicbo_record_proto_rawDescData
}

var file_games_sicbo_record_proto_enumTypes = make([]protoimpl.EnumInfo, 4)
var file_games_sicbo_record_proto_msgTypes = make([]protoimpl.MessageInfo, 3)
var file_games_sicbo_record_proto_goTypes = []interface{}{
	(GameSubtype)(0),      // 0: games.sicbo.GameSubtype
	(ResourceType)(0),     // 1: games.sicbo.ResourceType
	(Step)(0),             // 2: games.sicbo.Step
	(ResultRecordType)(0), // 3: games.sicbo.ResultRecordType
	(*SicboBead)(nil),     // 4: games.sicbo.SicboBead
	nil,                   // 5: games.sicbo.SicboBead.LuckysEntry
	nil,                   // 6: games.sicbo.SicboBead.StatisticsEntry
}
var file_games_sicbo_record_proto_depIdxs = []int32{
	5, // 0: games.sicbo.SicboBead.luckys:type_name -> games.sicbo.SicboBead.LuckysEntry
	6, // 1: games.sicbo.SicboBead.statistics:type_name -> games.sicbo.SicboBead.StatisticsEntry
	2, // [2:2] is the sub-list for method output_type
	2, // [2:2] is the sub-list for method input_type
	2, // [2:2] is the sub-list for extension type_name
	2, // [2:2] is the sub-list for extension extendee
	0, // [0:2] is the sub-list for field type_name
}

func init() { file_games_sicbo_record_proto_init() }
func file_games_sicbo_record_proto_init() {
	if File_games_sicbo_record_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_games_sicbo_record_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*SicboBead); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_games_sicbo_record_proto_rawDesc,
			NumEnums:      4,
			NumMessages:   3,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_games_sicbo_record_proto_goTypes,
		DependencyIndexes: file_games_sicbo_record_proto_depIdxs,
		EnumInfos:         file_games_sicbo_record_proto_enumTypes,
		MessageInfos:      file_games_sicbo_record_proto_msgTypes,
	}.Build()
	File_games_sicbo_record_proto = out.File
	file_games_sicbo_record_proto_rawDesc = nil
	file_games_sicbo_record_proto_goTypes = nil
	file_games_sicbo_record_proto_depIdxs = nil
}
