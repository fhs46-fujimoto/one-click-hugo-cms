# サイト複製手順
## 準備
### 準備するもの
* [GitHub](https://github.com)アカウント
* [Netlify](https://app.netlify.com/)アカウント
  * 以下の手順は 今回はgithubアカウントから連携してログインしたもの
### やっておくこと
* 連携したいgithubのアカウントでgithubにログインしておく
  * 必ずしも必要なことではないが、Deploy to Netlifyボタンクリック時にクッキーなどの値を見て自動的に紐づけようとするため、明示的にログインしておくほうが良い

## 手順1 Deploy to Netlify ボタンをクリック
* 以下のボタンをクリックし、[手順2 デプロイ](#手順2-デプロイ) 以降の手順に従う  
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/KoinoEngineering/one-click-hugo-cms&stack=cms)

## 手順2 デプロイ
### 手順2-1 github連携
* 以下のような画面に遷移する  
  <img src=".\.src\img\01_github連携.PNG" height="300px">
* [Connect to Github] のボタンをクリックするとポップアップが表示されるので、内容を確認して [Authorize Netlify] ボタンをクリック  
  <img src=".\.src\img\02_github連携.PNG" height="300px">

### 手順2-2 リポジトリの作成
* 画面の右側が以下のように切り替わるので、コピー先のリポジトリを指定する。デフォルトはコピー元リポジトリ名  
既存のリポジトリは指定できないので、新しいリポジトリ名を指定する  
  <img src=".\.src\img\03_リポジトリ作成.PNG" height="300px">
* デプロイが開始される(サイト名は自動で決まるが、設定画面から変更可能)  
  <img src=".\.src\img\04_デプロイ.PNG" height="300px">
* デプロイ終了後、画面左上に表示されているURLにアクセスして表示できればデプロイ完了  
  <img src=".\.src\img\08_home.PNG" height="300px">


## 手順3 管理画面の権限の設定
### 手順3-1 管理画面にログイン可能なユーザを制限する
* [Identity] タブの [Setting and usage] をクリックして設定画面へ遷移する  
  <img src=".\.src\img\05_Identitly.PNG" height="300px">
* [Registration] の設定を[Invite only]に設定する  
  <img src=".\.src\img\06_Registration.PNG" height="300px">
### 手順3-2 github連携
今回はnetlifyアカウントをgithubアカウントから連携して作っているため、githubアカウントでのログインを許可する
* [External providers] からgithubを選択し [Use default configuration] にチェックを入れて [Enable Github] をクリック  
  <img src=".\.src\img\07_enable_github.PNG" height="300px">
* 管理画面(サイトのURL/admin)にログインして確認する  
  <img src=".\.src\img\09_content_manager.PNG" height="300px">
