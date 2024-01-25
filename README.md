# skycasino-proto

## 說明

定義Casino遊戲的紀錄以及推送到skybet的事件
實作在skycasino

## 開發設定

### pnpm

* 先安裝 node & npm
* 建議使用 corepack 安裝

``` zsh
corepack enable
corepack prepare pnpm@latest --activate
```

### protobuf

* 使用buf管理proto生成程式碼
* 安裝 [buf](https://buf.build/docs/installation)
* gotag生成，請先安裝

``` zsh
go install github.com/srikrsna/protoc-gen-gotag@latest
```

### pnpm script

``` zsh
# 生成 proto
pnpm gen:go
# 生成 go struct tag
pnpm gen:gotag
# 生成 es
pnpm prepare

# buf 方式
buf generate 
buf generate --template buf.gen.tag.yaml
```
