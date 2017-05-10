/*
 * おまじない
 */
enchant();


/*
 * 定数
 */
var SCREEN_WIDTH    = 640;
var SCREEN_HEIGHT   = 960;


/*
 * メイン処理
 */
window.onload = function() {
    // ゲームオブジェクトを生成
    var game = new Game(SCREEN_WIDTH, SCREEN_HEIGHT);

    // ブラウザのLocalStorageにデータを保存するデバック機能を有効にする
    // 9leapのデータベースに保存する場合は、「false」
//    enchant.nineleap.memory.LocalStorage.DEBUG_MODE = true;

    // ゲームIDを設定する
    // 9leapのデータベースに保存する場合は、
    // 9leapの「ゲームID」(9leapにアップロードしたゲームのURLの末尾の数字)を設定する
//    enchant.nineleap.memory.LocalStorage.GAME_ID = 'kintaro';

    game.preload(
    		'image/build_A.png',
    		'image/build_B.png',
    		'image/go_A.png',
    		'image/go_B.png',
    		'image/challenge_A.png',
    		'image/challenge_B.png',
    		'image/equip_A.png',
    		'image/equip_B.png',
    		'image/build_A.png',
    		'image/build_B.png',
    		'image/build_A.png',
    		'image/build_B.png',
    		'image/window_530x640.png',
    		'image/status_back_960-640.png',
    		'image/window.png',
    		'image/window2.png',
    		'image/kintaro.png'
    );


  var num = 1;
  // データの取得
  //localStorage.setItem('access_count', num);
  var playdata =localStorage.getItem('playerStatus') ;
  localStorage.setItem('playerStatus', null);
  alert(playdata);
  if(localStorage.getItem('playerStatus') != null){
	  	playdata = JSON.parse(localStorage.getItem('playerStatus'));
	    playerStatus.lv = playdata.lv;
	    playerStatus.hp = playerStatus.hp;
	    playerStatus.exp = playerStatus.exp;
	    playerStatus.attack = playerStatus.attack;
	    playerStatus.defince = playerStatus.defince;
	    playerStatus.coin = playerStatus.coin;
	    playerStatus.weaponRight = playerStatus.weaponRight;
	    playerStatus.weaponLeft = playerStatus.weaponLeft;
	    playerStatus.item = playerStatus.item;
  }

alert(playdata);

    // 自分のデータを読み込む
//    game.memory.player.preload();


    // ロード完了時の処理
    game.onload = function() {
        var scene = game.rootScene;
        // 背景色を変更
        scene.backgroundColor = "black";

        // ステータス表示
        var status = new enchant.Sprite(640, 530);
        status.image = game.assets['image/window_530x640.png'];
        status.moveTo(-5, 50);
        game.rootScene.addChild(status);


        // ステータス表示
        var kintaro = new enchant.Sprite(170, 155);
        kintaro.image = game.assets['image/kintaro.png'];
        kintaro.moveTo(350, 250);
        scene.addChild(kintaro);



        // 探索ボタンを生成
        var B_go = new Button();
        B_go.height = 164;
        B_go.width = 276;
        B_go.moveTo(35, 580);
        B_go.image = game.assets['image/go_A.png'];
        B_go.pushedimage =  game.assets["image/go_B.png"];
        B_go.ontouchend = function() {
        	game.replaceScene(buildScene());
        };
        scene.addChild(B_go);


        // 強化ボタンを生成
        var B_build = new Button();
        B_build.height = 164;
        B_build.width = 276;
        B_build.moveTo(640-276-50, 580);
        B_build.image = game.assets['image/build_A.png'];
        B_build.pushedimage =  game.assets["image/build_B.png"];
        B_build.ontouchend = function() { alert('「Edit」がタップされました。');};
        scene.addChild(B_build);

        // 挑戦ボタンを生成
        var B_chall = new Button();
        B_chall.height = 164;
        B_chall.width = 276;
        B_chall.moveTo(640-276-50, 580+134);
        B_chall.image = game.assets['image/challenge_A.png'];
        B_chall.pushedimage =  game.assets["image/challenge_B.png"];
        B_chall.ontouchend = function() { alert('「challenge」がタップされました。');};
        scene.addChild(B_chall);


        //装備ボタンを生成
        var B_eq = new Button();
        B_eq.height = 164;
        B_eq.width = 276;
        B_eq.moveTo(35, 580+134);
        B_eq.image = game.assets['image/equip_A.png'];
        B_eq.pushedimage =  game.assets["image/equip_B.png"];
        B_eq.ontouchend = function() {
        	alert('「equip」がタップされました。');
        };
        scene.addChild(B_eq);

        // セーブラベル(タッチでセーブを実行するラベル)を作成する
        var savelabel = new MutableText(16, 320 -16);
        savelabel.text ='save';

        // セーブラベルの「touchstart」イベントリスナ
        savelabel.addEventListener('touchstart', function(e) {
          this.backgroundColor = '#F0F0F0';
        });

        // セーブラベルの「touchend」イベントリスナ
        savelabel.addEventListener('touchend', function(e) {
          this.backgroundColor = '';

          // データの保存処理
          localStorage.setItem('playerStatus', JSON.stringify(playerStatus));
          var doun = localStorage.getItem('playerStatus');
          alert(doun);

        });
        // 「rootScene」にセーブラベルを追加する
        scene.addChild(savelabel);

    };

    /**
     * 強化シーン
     *
     * タイトルシーンを作り、返す関数です。
     */
     var buildScene = function() {
         var scene = new Scene();                                // 新しいシーンを作る
         scene.backgroundColor = '#fcc800';                      // シーンの背景色を設定

         // ステータス表示
         var W_eq = new enchant.Sprite(199, 99);
	     W_eq.scaleX=3;
	     W_eq.scaleY=2;
         W_eq.image = game.assets['image/window2.png'];
         W_eq.moveTo(220,100);
         scene.addChild(W_eq);


         // 探索ボタンを生成, 表示(ダーク)
         var B_go = new Button();
         B_go.height = 164;
         B_go.width = 276;
         B_go.moveTo(35, 580);
         B_go.image = game.assets['image/equip_A.png'];
         B_go.pushedimage =  game.assets["image/equip_B.png"];
         B_go.ontouchend = function() {
         	alert('「Edit」がタップされました。');
         };
         scene.addChild(B_go);
         return scene;
     };


    // ゲーム開始
    game.start();
};



var playerStatus = {
		  lv: 1,         // レベル
		  hp: 1000,      // HP
		  exp: 0,        // 経験値
		  attack: 1,     // 攻撃力
		  defince: 1,     // 攻撃力
		  coin: 0,       // 所持コイン
		  weaponRight: 0,     // 右武器
		  weaponLeft: 0,     // 左武器
		  item: 0,     // 左武器
		}

//武器テーブル
//no    : 番号
//name  : 名前
//attack: 攻撃力
var weapon = {
0: {no:2002, name:'ブロンズソード', attack:1},
1: {no:2004, name:'ブラスソード', attack:2},
2: {no:2005, name:'アイアンソード', attack:3},
3: {no:2009, name:'スチールソード', attack:4},
4: {no:2010, name:'ヘヴィソード', attack:5},
5: {no:2019, name:'ブロードソード', attack:6},
6: {no:2020, name:'クレイモア', attack:6},
7: {no:2054, name:'スラッシュレイピア', attack:7},
8: {no:2055, name:'サーベル', attack:8},
9: {no:2044, name:'ブレイズソード', attack:9},
10: {no:2091, name:'ブレイズブレイド', attack:10},
11: {no:2091, name:'アクアブレイド', attack:11},
12: {no:2073, name:'バラの宝剣', attack:12},
13: {no:2098, name:'ドラゴンキラー', attack:13},
14: {no:2506, name:'王家の剣', attack:14},
15: {no:2514, name:'ダークブレイド', attack:15},
16: {no:2597, name:'プロミネンスソード', attack:20},
}

