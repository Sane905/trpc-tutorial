# tRPC Tutorial

TypeScriptとtRPCを使用したmonorepo構造のチュートリアルプロジェクトです。

## 構成

```
trpc-tutorial/
├── packages/
│   ├── server/          # tRPCサーバー
│   └── client/          # tRPCクライアント
├── package.json         # ルートパッケージ設定
└── tsconfig.json        # TypeScript設定
```

## セットアップ

1. 依存関係をインストール:
```bash
yarn install
```

2. 開発サーバーを起動:
```bash
yarn dev
```

これにより、サーバー（ポート3001）とクライアントが同時に起動します。

## 個別実行

### サーバーのみ起動
```bash
yarn workspace server dev
```

### クライアントのみ実行
```bash
yarn workspace client dev
```

## ビルド

```bash
yarn build
```

## 機能

### サーバー (packages/server)
- Express.jsベースのHTTPサーバー
- tRPCルーターの実装
- CORS設定済み
- サンプルプロシージャ:
  - `hello`: 挨拶を返すクエリ
  - `getUsers`: ユーザーリストを返すクエリ
  - `createUser`: 新しいユーザーを作成するミューテーション

### クライアント (packages/client)
- tRPCクライアントの実装
- 型安全なAPI呼び出し
- サーバーのプロシージャを使用したデモ

## 技術スタック

- **TypeScript**: 型安全性
- **tRPC**: エンドツーエンドの型安全なAPI
- **Express.js**: HTTPサーバー
- **Yarn Workspaces**: Monorepo管理
- **Zod**: スキーマバリデーション

## 開発

新しいプロシージャを追加する場合は、`packages/server/src/router.ts`を編集してください。
クライアント側では自動的に型が推論され、型安全にAPIを呼び出すことができます。