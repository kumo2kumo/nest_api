HP＆掲示板アプリ　APIリポジトリ

## Dockerの環境構築
```
npx prisma generate
docker-compose build
docker-compose up -d
docker-compose exec db sh
mysql -u root -p develop
パスワードはpasswordと入力
// mysql内でuserに権限付与
grant all on *.* to user
```

## ローカルの環境構築
```
npx prisma generate
docker-compose build
docker-compose up -d db
docker-compose exec db sh
mysql -u root -p develop
パスワードはpasswordと入力
// mysql内でuserに権限付与
grant all on *.* to user
//コンテナを出てローカルで
yarn star:dev
```

## マイグレーション

```
// モデルをschema.prismaに作成後
npx prisma generate
npx prisma migrate dev --name つけたい名前（例：create_product_table, add_column_product_table, change_column_product_table）
// prisma studio 起動
 npx prisma studio
```

## 各使用ファイル生成
```
nest g module 名前
nest g service 名前
nest g resolver 名前
```

## GraphQLplayground

```
localhost/graphql
```
