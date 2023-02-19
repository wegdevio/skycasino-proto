// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             (unknown)
// source: recorder/recorder.proto

package recorder

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

// RecorderServiceClient is the client API for RecorderService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type RecorderServiceClient interface {
	// 開始更換牌組
	RecordShuffleStarted(ctx context.Context, in *RecordShuffleStartedRequest, opts ...grpc.CallOption) (*RecordResponse, error)
	// 更換牌組完畢
	RecordShuffleDone(ctx context.Context, in *RecordShuffleDoneRequest, opts ...grpc.CallOption) (*RecordResponse, error)
	// 開啟新局
	RecordRoundStart(ctx context.Context, in *RecordRoundStartRequest, opts ...grpc.CallOption) (*RecordResponse, error)
	// 記錄步驟
	RecordRoundSteps(ctx context.Context, in *RecordRoundStepsRequest, opts ...grpc.CallOption) (*RecordResponse, error)
	// 紀錄判讀
	RecordRoundResults(ctx context.Context, in *RecordRoundResultsRequest, opts ...grpc.CallOption) (*RecordResponse, error)
	// 此局作廢
	RecordRoundCancel(ctx context.Context, in *RecordRoundCancelRequest, opts ...grpc.CallOption) (*RecordResponse, error)
	// 結束此局
	RecordRoundFinish(ctx context.Context, in *RecordRoundFinishRequest, opts ...grpc.CallOption) (*RecordResponse, error)
}

type recorderServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewRecorderServiceClient(cc grpc.ClientConnInterface) RecorderServiceClient {
	return &recorderServiceClient{cc}
}

func (c *recorderServiceClient) RecordShuffleStarted(ctx context.Context, in *RecordShuffleStartedRequest, opts ...grpc.CallOption) (*RecordResponse, error) {
	out := new(RecordResponse)
	err := c.cc.Invoke(ctx, "/recorder.RecorderService/RecordShuffleStarted", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *recorderServiceClient) RecordShuffleDone(ctx context.Context, in *RecordShuffleDoneRequest, opts ...grpc.CallOption) (*RecordResponse, error) {
	out := new(RecordResponse)
	err := c.cc.Invoke(ctx, "/recorder.RecorderService/RecordShuffleDone", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *recorderServiceClient) RecordRoundStart(ctx context.Context, in *RecordRoundStartRequest, opts ...grpc.CallOption) (*RecordResponse, error) {
	out := new(RecordResponse)
	err := c.cc.Invoke(ctx, "/recorder.RecorderService/RecordRoundStart", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *recorderServiceClient) RecordRoundSteps(ctx context.Context, in *RecordRoundStepsRequest, opts ...grpc.CallOption) (*RecordResponse, error) {
	out := new(RecordResponse)
	err := c.cc.Invoke(ctx, "/recorder.RecorderService/RecordRoundSteps", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *recorderServiceClient) RecordRoundResults(ctx context.Context, in *RecordRoundResultsRequest, opts ...grpc.CallOption) (*RecordResponse, error) {
	out := new(RecordResponse)
	err := c.cc.Invoke(ctx, "/recorder.RecorderService/RecordRoundResults", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *recorderServiceClient) RecordRoundCancel(ctx context.Context, in *RecordRoundCancelRequest, opts ...grpc.CallOption) (*RecordResponse, error) {
	out := new(RecordResponse)
	err := c.cc.Invoke(ctx, "/recorder.RecorderService/RecordRoundCancel", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *recorderServiceClient) RecordRoundFinish(ctx context.Context, in *RecordRoundFinishRequest, opts ...grpc.CallOption) (*RecordResponse, error) {
	out := new(RecordResponse)
	err := c.cc.Invoke(ctx, "/recorder.RecorderService/RecordRoundFinish", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// RecorderServiceServer is the server API for RecorderService service.
// All implementations must embed UnimplementedRecorderServiceServer
// for forward compatibility
type RecorderServiceServer interface {
	// 開始更換牌組
	RecordShuffleStarted(context.Context, *RecordShuffleStartedRequest) (*RecordResponse, error)
	// 更換牌組完畢
	RecordShuffleDone(context.Context, *RecordShuffleDoneRequest) (*RecordResponse, error)
	// 開啟新局
	RecordRoundStart(context.Context, *RecordRoundStartRequest) (*RecordResponse, error)
	// 記錄步驟
	RecordRoundSteps(context.Context, *RecordRoundStepsRequest) (*RecordResponse, error)
	// 紀錄判讀
	RecordRoundResults(context.Context, *RecordRoundResultsRequest) (*RecordResponse, error)
	// 此局作廢
	RecordRoundCancel(context.Context, *RecordRoundCancelRequest) (*RecordResponse, error)
	// 結束此局
	RecordRoundFinish(context.Context, *RecordRoundFinishRequest) (*RecordResponse, error)
	mustEmbedUnimplementedRecorderServiceServer()
}

// UnimplementedRecorderServiceServer must be embedded to have forward compatible implementations.
type UnimplementedRecorderServiceServer struct {
}

func (UnimplementedRecorderServiceServer) RecordShuffleStarted(context.Context, *RecordShuffleStartedRequest) (*RecordResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method RecordShuffleStarted not implemented")
}
func (UnimplementedRecorderServiceServer) RecordShuffleDone(context.Context, *RecordShuffleDoneRequest) (*RecordResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method RecordShuffleDone not implemented")
}
func (UnimplementedRecorderServiceServer) RecordRoundStart(context.Context, *RecordRoundStartRequest) (*RecordResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method RecordRoundStart not implemented")
}
func (UnimplementedRecorderServiceServer) RecordRoundSteps(context.Context, *RecordRoundStepsRequest) (*RecordResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method RecordRoundSteps not implemented")
}
func (UnimplementedRecorderServiceServer) RecordRoundResults(context.Context, *RecordRoundResultsRequest) (*RecordResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method RecordRoundResults not implemented")
}
func (UnimplementedRecorderServiceServer) RecordRoundCancel(context.Context, *RecordRoundCancelRequest) (*RecordResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method RecordRoundCancel not implemented")
}
func (UnimplementedRecorderServiceServer) RecordRoundFinish(context.Context, *RecordRoundFinishRequest) (*RecordResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method RecordRoundFinish not implemented")
}
func (UnimplementedRecorderServiceServer) mustEmbedUnimplementedRecorderServiceServer() {}

// UnsafeRecorderServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to RecorderServiceServer will
// result in compilation errors.
type UnsafeRecorderServiceServer interface {
	mustEmbedUnimplementedRecorderServiceServer()
}

func RegisterRecorderServiceServer(s grpc.ServiceRegistrar, srv RecorderServiceServer) {
	s.RegisterService(&RecorderService_ServiceDesc, srv)
}

func _RecorderService_RecordShuffleStarted_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(RecordShuffleStartedRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(RecorderServiceServer).RecordShuffleStarted(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/recorder.RecorderService/RecordShuffleStarted",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(RecorderServiceServer).RecordShuffleStarted(ctx, req.(*RecordShuffleStartedRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _RecorderService_RecordShuffleDone_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(RecordShuffleDoneRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(RecorderServiceServer).RecordShuffleDone(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/recorder.RecorderService/RecordShuffleDone",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(RecorderServiceServer).RecordShuffleDone(ctx, req.(*RecordShuffleDoneRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _RecorderService_RecordRoundStart_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(RecordRoundStartRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(RecorderServiceServer).RecordRoundStart(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/recorder.RecorderService/RecordRoundStart",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(RecorderServiceServer).RecordRoundStart(ctx, req.(*RecordRoundStartRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _RecorderService_RecordRoundSteps_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(RecordRoundStepsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(RecorderServiceServer).RecordRoundSteps(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/recorder.RecorderService/RecordRoundSteps",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(RecorderServiceServer).RecordRoundSteps(ctx, req.(*RecordRoundStepsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _RecorderService_RecordRoundResults_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(RecordRoundResultsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(RecorderServiceServer).RecordRoundResults(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/recorder.RecorderService/RecordRoundResults",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(RecorderServiceServer).RecordRoundResults(ctx, req.(*RecordRoundResultsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _RecorderService_RecordRoundCancel_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(RecordRoundCancelRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(RecorderServiceServer).RecordRoundCancel(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/recorder.RecorderService/RecordRoundCancel",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(RecorderServiceServer).RecordRoundCancel(ctx, req.(*RecordRoundCancelRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _RecorderService_RecordRoundFinish_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(RecordRoundFinishRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(RecorderServiceServer).RecordRoundFinish(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/recorder.RecorderService/RecordRoundFinish",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(RecorderServiceServer).RecordRoundFinish(ctx, req.(*RecordRoundFinishRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// RecorderService_ServiceDesc is the grpc.ServiceDesc for RecorderService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var RecorderService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "recorder.RecorderService",
	HandlerType: (*RecorderServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "RecordShuffleStarted",
			Handler:    _RecorderService_RecordShuffleStarted_Handler,
		},
		{
			MethodName: "RecordShuffleDone",
			Handler:    _RecorderService_RecordShuffleDone_Handler,
		},
		{
			MethodName: "RecordRoundStart",
			Handler:    _RecorderService_RecordRoundStart_Handler,
		},
		{
			MethodName: "RecordRoundSteps",
			Handler:    _RecorderService_RecordRoundSteps_Handler,
		},
		{
			MethodName: "RecordRoundResults",
			Handler:    _RecorderService_RecordRoundResults_Handler,
		},
		{
			MethodName: "RecordRoundCancel",
			Handler:    _RecorderService_RecordRoundCancel_Handler,
		},
		{
			MethodName: "RecordRoundFinish",
			Handler:    _RecorderService_RecordRoundFinish_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "recorder/recorder.proto",
}
