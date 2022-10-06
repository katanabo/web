<link rel="stylesheet" href="./github-markdown.css" type="text/css">
<link rel="stylesheet" href="toc.css">
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
</head>



# [katanabo works](./index.html)
# web開発
<div id="ToC"></div>

## (固定)軽微な修正
- パソコン版のcssにmargin-rightを追加


## Table of Contentsの導入 (2022/10/06)
自動でh2タグから目次を作成するスクリプトを入れた
[参考](https://projectcodeed.blogspot.com/2020/04/an-automatic-table-of-contents.html)
詰まったポイント
- htmlの最終行にscriptタグを入れた
- 元のコードだとh3が目次に追加されるようになっていたのでh2に変更
- ”目次”という文字を逆にh3に変更
- 背景は白に変更

## ホーム画面に戻るUI (2022/10/06)
Markdownのh1の記述の時にリンクで記入した
例
```markdown
# [****][./index.html]
```

## ブログを簡単に更新する仕組み (2022/10/05)
このサイトの作成は基本的にローカルで行なっている。github pagesを使ってpushすると自動でサイトが公開される仕組みになっている。
よって、ブログも同じローカルフォルダにmarkdownのファイルを用意し、自動でhtmlに変換されて欲しい。
markdown PDFという拡張機能を導入してみる。要件としては
- vscodeでmdを保存すると自動でhtmlに変換してくれる
- そのままpushするとソースコードと一緒に記事も更新される
- ファイル名の規則がキツくないこと

[ここ](https://atmarkit.itmedia.co.jp/ait/articles/1804/27/news034.html)のサイトを参考にした。 
自動保存で生成するようにできる？
→できた

## setting.jsonの変更 (2022/10/05)
```json
{
    "markdown-pdf.type": [
        "html"
    ],
    "markdown-pdf.convertOnSave": true,
    "markdown-pdf.breaks": true,
    "markdown-pdf.includeDefaultStyles": false,
``` 
を追加することですごく処理が多い気がするが、その場でhtmlが変更されている

マークダウンで更新履歴を書いていくだけでhtmlが生成される仕組みを導入した。
今後はtable of contentsを導入したい
やはり、改行がうまくいっていない。

cssを変更してみた。
さらに変更
レスポンシブル対応
→viewportの設定が必要

相対パスで"markdown-pdf.styles": ["./github-markdown.css"]にし
相対パスで"markdown-pdf.styles": ["./github-markdown2.css"]にした

mdファイル内に直接
```html
<link rel="stylesheet" href="./github-markdown.css" type="text/css">
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
</head>
```
を書き込むという荒技で解決した

<script src="toc.js"></script>