<link rel="stylesheet" href="./../github-markdown.css" type="text/css">
<link rel="stylesheet" href="./../toc.css">
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
</head>
<div class="contents wrapper">
<article>



# [katanabo works](../index.html)
# 1
## Reactについて
- webサイトはアプリに近づいている
- HTML + CSS + JavaScriptではDOM操作にAPIが必要
- React はHTML & CSSをJavascriptのオブジェクトにした

## Reactでページを作る基本
```javascript
const element = _reactJsxRuntime.jsx('h1', {
    children: "Hello, react world!"
})

ReactDOM.render(element, document.getElementById('root'))
```

これにより、ブラウザのDOMへ反映
```html
<div id = "root">
    <h1>Hello, react world!</h1> 
</div>
```
## JSXとは
Reactの中でHTMLのように見えるものはAST(抽象構文木)化されたHTMLを基にしたReact要素
以下のように書き換えが可能
```javascript
const element = <h1>Hello, React World!</h1>
```
しかしこの状態ではJavascriptのコードとして実行することはできないので、コンパイルし、JavaScriptのコードを生成しないといけない

## 開発環境
Reactの環境を手軽に整えられるものがNext.js

## Next.js とWebサイト
Vercelが開発するReactベースのフーレムワーク
- SSR: サーバーサイドレンダリング
  - メインだった
- SG: 静的生成
  - 途中から追加
- SSG : 静的サイトジェネレーター
  - SSGも可能だが、機能が制限される

## Next.js CLI(command line interface)
```bash
npm run dev
```
or 
```bash
npx next dev
```
によって、pacckage.jsonに登録されているものを実行できる

npxはローカルにインストールされているJavaScriptのパッケージを実行するためのもの
存在しないものは一時的にダウンロードし、実行後に削除される

npmはパッケージの管理システム
上記ではnpm scriptsを使ってpackage.jsonのscriptプロパティに 設定されているコマンドを実行する

## import / export
export
- 名前付きエクスポート
  - 1モジュールに複数設定可能
- デフォルトエクスポート
  - 1モジュールに1つ

import
- 名前付きインポート
  - 指定したモジュールから名前を指定してインポート
- デフォルトインポート
  - 名前は任意


## JSXの文法
- JSXでは最上位の要素は1つである必要がある
- 要素は必ず閉じる
  - imgなども
- classNameと書く

```js
  <div className='hero'>
    <h1 style={{ color: 'red', fontsize: '80px'}}>
      CUBE
    </h1>
    <p>JSXでは最上位の要素は1つ出なければいけない</p>
    <p>{subtitle}</p>
  </div>
```

divを無駄に増やさないためにReact.Fracmentの＜＞で囲む

# 2
## コンポーネントについて
コンポーネントによって、JSXを分割して再利用可能となる部品のように扱うことができる





</article>
<aside id="ToC"></aside>
<script src="./../toc.js"></script>
</div>