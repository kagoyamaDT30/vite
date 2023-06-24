# Vite
※このソースは`yarn create vite`された状態から編集したものです

## 設定
```
yarn install

yarn dev
```
`yarn dev`でviteサーバーが動くので、`localhost:8881`へアクセスする
scssのコンパイル、ブラウザシンクが自動で行われる

※デフォルトでは`php`ファイルには対応していない

## package.json
1. `yarn dev`
viteサーバーの起動。

2. `yarn build`
ファイルのコンパイルを行い、`dist`ディレクトリへ出力する

3. `yarn preview`
`dist`を参照してプレビューする。
`yarn build`でdist生成後、`localhost:4173`へアクセスする
