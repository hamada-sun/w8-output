// const cookie = document.cookie; //すべてのCookieを読み込む
// console.log(cookie); // key=value; key=value; key=value; key=value; key=value; key=value;
//複数のCookieが設定されている場合それぞれの情報が;で区切られています。



//Cookie毎に分割して値を取得する
// const cookies = document.cookie;
// const array = cookies.split(';');

// array.forEach(function(value) {
//   const content = value.split('=');
//   console.log(content[1]); // valueを取得
// })
// /*
// value
// value
// value
// .....
// */

//Cookieの書き込み
// document.cookie = "user=Tarou"; // key=value
// console.log(document.cookie); // user=Tarou

//Cookieの有効期限を設定
// // max-age 1時間後に消える
// document.cookie = "user=Tarou; max-age=3600";

// // expires　2021/11/30（月） 20:00に消える
// document.cookie = "user=Tarou; expires=Mon, 30 Nov 2021 20:00:00 GMT";


//Cookieの削除
// // 有効期限を過去に設定
// document.cookie = "user=Tarou; expires=Mon, 1 Nov 2021 20:00:00 GMT";
// // 有効期限を0に設定
// document.cookie = "user=Tarou; max-age=0";



//npmパッケージのjs-cookieを導入することでより気軽に
//document.cookieでもかんたんな操作はできますが、Cookieの細かい設定を行いたい場合は、js-cookieを使うと非常に便利

//js-cookieのインストール
// // $ npm i js-cookie
// // $ yarn add js-cookie

// import Cookies from 'js-cookie';

//Cookieの読み込み
// Cookies.get('key'); // 'value'
// Cookies.get(); // {key: 'value'}

//Cookieの書き込み
// Cookies.set('key', 'value');
// // 14日後に消える
// Cookies.set('key', 'value', {expires: 14}); 
// // ユーザーの使用言語を日本語に指定
// Cookies.set('locale', 'ja-JP'); 


//Cookieの削除
// Cookies.remove('key');


//https(SSL/TLS)通信時のみにCookieを送信
// Cookies.set('key', 'value', { secure: true });




//LocalStorageの使い方
//ブラウザの対応チェック
if(('localStorage' in window) && (window.localStorage !== null)) {
    // ローカルストレージが使える
} else {
    // 使えない。。。
}


//LocalStorageへデータを保存する
var num = 1;
// データの保存
localStorage.setItem('access_count', num);
window.localStorage.setItem('access_count', num);
localStorage.access_count = num


//LocalStorageからデータを取得する
// // データの取得
// num = localStorage.getItem('access_count');
// num = window.localStorage.getItem('access_count');
// num = localStorage.access_count
console.log(num);


//LocalStorageからデータを削除する
// // データの削除
// localStorage.removeItem('access_count');
// window.localStorage.removeItem('access_count');


//LocalStorageの初期化
// // localStorageを初期化
// localStorage.clear();
// window.localStorage.clear();