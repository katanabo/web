
<link rel="stylesheet" href="./github-markdown.css" type="text/css">
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
</head>



# katanabo worksブログ
## ブログを簡単に更新する仕組み
このサイトの作成は基本的にローカルで行なっている。github pagesを使ってpushすると自動でサイトが公開される仕組みになっている。
よって、ブログも同じローカルフォルダにmarkdownのファイルを用意し、自動でhtmlに変換されて欲しい。
markdown PDFという拡張機能を導入してみる。要件としては
- vscodeでmdを保存すると自動でhtmlに変換してくれる
- そのままpushするとソースコードと一緒に記事も更新される
- ファイル名の規則がキツくないこと

[ここ](https://atmarkit.itmedia.co.jp/ait/articles/1804/27/news034.html)のサイトを参考にした。 
自動保存で生成するようにできる？

## setting.jsonの変更
```json
{
  "markdown-pdf.type": [
    "html"
  ],
  "markdown-pdf.convertOnSave": true
}
``` 
を追加することですごく処理が多い気がするが、その場でhtmlが変更されている

## 2022/10/06
マークダウンで更新履歴を書いていくだけでhtmlが生成される仕組みを導入した。
今後はtable of contentsを導入したい
やはり、改行がうまくいっていない。

cssを変更してみた。
さらに変更
レスポンシブる対応をしたい

相対パスで"markdown-pdf.styles": ["./github-markdown.css"]にし
相対パスで"markdown-pdf.styles": ["./github-markdown2.css"]にした

mdファイル内に直接
```html
<link rel="stylesheet" href="./github-markdown.css" type="text/css">
```
を書き込むという荒技で解決した