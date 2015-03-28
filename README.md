Using Grunt + Bower
----

## `$ npm install`

package.json の記述に従い、grunt と grunt-bower-task をインストールする。
- grunt はビルドツール(makeみたいなもの)
- bower はパッケージ管理のツール (npm も node のパッケージ管理だけど、bower の方が管理しているものが多いらしい)
- grunt-bower-task は grunt 上で bower を実行出来るようにするもの

## `$ grunt bower`

Gruntfile.js の記述に従い、bower タスクを実行する。
- bower タスクのデフォルト設定が install なので、`grunt bower:install` と同じっぽい
- Gruntfile.js に bower 用の設定が書いてある
- bower.json の内容も利用する(取得するライブラリは bower.json に列挙してある)
- 依存ライブラリを追加する場合は `bower install <ライブラリ> --save` (bower.json に追加してくれる)
