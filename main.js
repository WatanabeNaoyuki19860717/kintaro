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
    		'image/kintaro.png',
    		'image/kintaro_64.png',
    		'image/map1.png',
    		'image/chara1.png',
    		'image/Map1.jpg'
    );


  var num = 1;
  // データの取得
  //localStorage.setItem('access_count', num);
  var playdata =localStorage.getItem('playerStatus') ;
  //localStorage.setItem('playerStatus', null);
  alert(playdata);
  if(playdata){
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
	    alert("読み込み完了");
  }

alert(playdata);

    // 自分のデータを読み込む

//    game.memory.player.preload();

	var str = window.localStorage.getItem("test_key");
	if(str){
		var playerStatus = JSON.parse(str);
	}

	// 出力テスト
	console.log(playerStatus);



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
        kintaro.moveTo(400, 250);
        scene.addChild(kintaro);

        // メッセージを表示するラベルを作成する関数
        var lv = new Label("攻撃力：250");
        lv.font  = "45px monospace";
        lv.color = "rgb(255, 255, 255)";
        lv.backgroundColor = "rgba(0, 0, 0, 0.5)";
        lv.x     = 50;
        lv.y     = 150;
        lv.width = 280;
        scene.addChild(lv);
        // メッセージを表示するラベルを作成する関数
        var hp = new Label("体　力：1000");
        hp.font  = "45px monospace";
        hp.color = "rgb(255, 255, 255)";
        hp.backgroundColor = "rgba(0, 0, 0, 0.5)";
        hp.x     = 50;
        hp.y     = 200;
        hp.width = 280;
        scene.addChild(hp);
        // メッセージを表示するラベルを作成する関数
        var attack = new Label("攻撃力：10");
        attack.font  = "45px monospace";
        attack.color = "rgb(255, 255, 255)";
        attack.backgroundColor = "rgba(0, 0, 0, 0.5)";
        attack.x     = 50;
        attack.y     = 250;
        attack.width = 280;
        scene.addChild(attack);
        // メッセージを表示するラベルを作成する関数
        var defince = new Label("防御力：10");
        defince.font  = "45px monospace";
        defince.color = "rgb(255, 255, 255)";
        defince.backgroundColor = "rgba(0, 0, 0, 0.5)";
        defince.x     = 50;
        defince.y     = 300;
        defince.width = 280;
        scene.addChild(defince);
        // メッセージを表示するラベルを作成する関数
        var weaponRight = new Label("右武器：剣");
        weaponRight.font  = "45px monospace";
        weaponRight.color = "rgb(255, 255, 255)";
        weaponRight.backgroundColor = "rgba(0, 0, 0, 0.5)";
        weaponRight.x     = 50;
        weaponRight.y     = 350;
        weaponRight.width = 280;
        scene.addChild(weaponRight);
        // メッセージを表示するラベルを作成する関数
        var weaponLeft = new Label("左武器：10");
        weaponLeft.font  = "45px monospace";
        weaponLeft.color = "rgb(255, 255, 255)";
        weaponLeft.backgroundColor = "rgba(0, 0, 0, 0.5)";
        weaponLeft.x     = 50;
        weaponLeft.y     = 400;
        weaponLeft.width = 280;
        scene.addChild(weaponLeft);

        // 探索ボタンを生成
        var B_go = new Button();
        B_go.height = 164;
        B_go.width = 276;
        B_go.moveTo(35, 580);
        B_go.image = game.assets['image/go_A.png'];
        B_go.pushedimage =  game.assets["image/go_B.png"];
        B_go.ontouchend = function() {
        	game.replaceScene(GOScene());
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


        //装備ボタンを生成
        var B_eq = new Button();
        B_eq.height = 164;
        B_eq.width = 276;
        B_eq.moveTo(-25, -25);
        B_eq.image = game.assets['image/equip_A.png'];
        B_eq.pushedimage =  game.assets["image/equip_B.png"];
        B_eq.ontouchend = function() {
        	alert('セーブ');
        	var json_text = JSON.stringify(playerStatus);
        	window.localStorage.setItem("test_key" , json_text);


        };
        scene.addChild(B_eq);
    };

	/**
	 * 冒険シ-ン
	 */
	 var GOScene = function() {
	     // シーンを作成する
	     var scene = new Scene();
	     scene.backgroundColor = "black";
        // ステータス表示
        var map = new enchant.Sprite(640, 480);
        map.image = game.assets['image/Map1.jpg'];
        map.x=0;
        map.y=0;
//       scene.addChild(map);
        var stage = new Group();
        stage.addChild(map);

        // ステータス表示
        var kintaro = new enchant.Sprite(64, 58,map);
        kintaro.image = game.assets['image/kintaro_64.png'];
        kintaro.moveTo(50, 260);
        scene.addChild(kintaro);
        stage.addChild(kintaro);

        var kinkin = new Player(0,0,0);
        stage.addChild(kinkin);
        scene.addChild(stage);

        // メッセージを表示するラベルを作成する関数
        var town1 = new Label("町名：すごい町");
        town1.font  = "45px monospace";
        town1.color = "rgb(255, 255, 255)";
        town1.backgroundColor = "rgba(0, 0, 0, 0.5)";
        town1.x     = 50;
        town1.y     = 300;
        town1.width = 280;
        town1.ontouchend = function() { alert('「challenge」がタップされました。');};
        scene.addChild(town1);

	     return scene;
	 };

    // ゲーム開始
    game.start();


 // プレイヤーを作成するクラス
 var Player = enchant.Class.create(enchant.Sprite, {
   initialize: function(x , y, map) {
     enchant.Sprite.call(this, 64, 64);
     this.x = x;
     this.y = y;
     var image = new Surface(64, 64);
     image.draw(game.assets['image/kintaro_64.png'], 0, 0, 64, 64, 0, 0, 64,64);
     this.image =image;
     this.isMoving = false; // 移動フラグ(移動中なら「true」)
     this.direction = 0;    // 向き
     // 歩行アニメーションの基準フレーム番号を保持するプロパティ
     this.walk = 0;
     // 攻撃アクション中のフレーム数を保持するプロパティ
     this.acount = 0;
     // 「enterframe」イベントリスナ
     this.addEventListener('enterframe', function() {

       // プレイヤーの移動処理

       // 歩行アニメーションのフレーム切り替え
       //this.frame = this.direction * 3 + this.walk;
       // 移動中の処理
       if (this.isMoving) {
         // 「vx」「vy」プロパティの分だけ移動する
         this.moveBy(this.vx, this.vy);
         // 歩行アニメーションの基準フレーム番号を取得する
         //this.walk = game.frame % 3;
           // 次のマス(16x16が1マス)まで移動しきったら停止する
           if ((this.vx && (this.x - 16) % 32 == 0) || (this.vy && this.y % 32 == 0)) {
             this.isMoving = false;
             this.walk = 0;
           }
       } else {
         // 移動中でないときは、パッドやキーの入力に応じて、向きや移動先を設定する
         this.vx = this.vy = 0;
         if (game.input.left) {
           this.direction = 1;
           this.vx = -8;
         } else if (game.input.right) {
           this.direction = 2;
           this.vx = 8;
         } else if (game.input.up) {
           this.direction = 3;
           this.vy = -8;
         } else if (game.input.down) {
           this.direction = 0;
           this.vy = 8;
         }
         // 移動先が決まったら、
         if (this.vx || this.vy) {
           // 移動先の座標を求める
           var x = this.x + (this.vx ? this.vx / Math.abs(this.vx) * 32 : 0) + 32;
           var y = this.y + (this.vy ? this.vy / Math.abs(this.vy) * 32 : 0) + 32;
//           alert(x);
//           alert(map.x);
//           alert(y);
//           alert( map.y);

           // その座標が移動可能な場所なら
//           if (0 <= x && x < map.width && 0 <= y && y < map.height && !map.hitTest(x, y)) {
           if (0 <= x && x < 640 && 0 <= y && y < 480 ) {
             // 移動フラグを「true」にする
             this.isMoving = true;
             // 自身(「enterframe」イベントリスナ)を呼び出す
             // (歩行アニメーションをスムーズに表示するため)
             arguments.callee.call(this);
           }
         }
       }
     });
   }
 });

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

//バトルフィールドのマップデータ
var field = {
  'bg1': [
    [96,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36],
    [36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36],
    [36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,67,36,36,36,19,19,19,19,19,19,19,19,19],
    [36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,16],
    [36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,16,33],
    [36,36,36,36,36,36,36,36,36,36,83,100,84,36,36,36,36,36,36,36,36,36,36,36,36,36,16,17,33,33],
    [36,36,36,36,36,36,36,36,36,83,100,100,100,84,36,36,36,36,36,36,36,36,36,36,36,16,33,33,33,33],
    [36,36,36,36,36,36,36,36,83,100,100,100,100,100,36,36,36,36,36,36,36,36,36,36,16,33,33,33,33,33],
    [36,36,36,36,36,36,36,83,100,100,100,100,100,100,84,84,84,84,100,85,36,36,36,52,32,33,33,33,33,33],
    [36,36,36,36,36,36,36,100,100,100,100,100,100,100,100,100,100,100,100,100,85,36,36,36,48,33,33,33,33,33],
    [36,36,36,36,36,36,36,100,100,100,100,100,100,100,100,100,100,100,100,100,101,36,36,36,36,48,33,33,33,33],
    [36,36,36,36,36,36,83,100,100,116,116,116,116,116,100,100,100,100,100,100,101,36,36,36,36,36,48,33,33,33],
    [36,36,36,36,36,36,100,100,101,36,36,36,36,36,99,100,100,100,100,100,101,36,36,36,36,36,36,48,33,33],
    [36,36,36,36,36,83,100,100,101,36,36,36,36,36,99,100,100,100,100,100,100,85,36,36,36,36,36,36,48,33],
    [36,36,36,36,36,100,100,100,100,84,84,84,84,84,100,100,100,100,100,100,100,101,36,36,36,36,36,36,36,48],
    [36,36,36,36,36,99,100,116,116,100,100,116,116,100,100,100,100,100,100,100,100,101,36,36,36,36,36,36,36,36],
    [36,36,36,36,83,100,101,36,36,116,116,36,36,99,100,100,100,100,100,100,100,101,36,36,36,36,36,36,36,36],
    [36,36,36,36,115,116,100,85,36,36,36,36,36,115,100,100,100,100,100,100,100,100,84,84,84,85,36,36,36,36],
    [36,36,36,36,36,36,115,101,36,36,36,36,36,36,115,100,100,100,100,116,116,100,116,116,116,100,36,36,36,36],
    [36,36,36,36,36,36,36,100,85,36,36,36,36,36,36,99,100,116,117,36,36,101,36,36,21,115,85,36,36,36],
    [36,36,36,36,36,36,36,115,100,36,36,36,36,36,36,115,117,36,36,36,83,101,36,36,36,21,115,85,36,36],
    [36,36,36,36,36,36,36,36,100,84,85,36,36,36,36,36,36,36,36,83,100,117,36,36,36,36,36,100,36,36],
    [36,36,36,36,36,36,36,36,116,100,101,36,36,36,36,83,100,116,116,116,116,16,17,17,17,17,17,17,17,17],
    [36,36,36,36,36,36,36,36,36,116,100,84,84,84,84,116,117,36,36,36,36,32,33,33,49,49,49,49,49,49],
    [36,36,36,36,36,36,36,36,36,36,115,116,116,116,117,36,36,36,36,36,36,32,33,50,20,20,20,20,20,20],
    [36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,32,34,20,36,36,36,36,36,36],
    [36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,32,34,36,36,36,36,36,36,36],
    [36,36,36,36,67,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,32,34,36,36,36,36,36,36,36],
    [36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,32,34,36,36,36,36,36,36,36],
    [36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,32,34,36,36,36,36,36,36,36]
  ],
  'bg2': [
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,7,7,7,7,7,7,7,7,7],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,23,23,23,23,23,23,23,23,23,23],
    [-1,-1,-1,28,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,28,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,28,-1,-1,-1,-1,-1,107,107,107,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,28,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,107,-1,-1,-1,107,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,28,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,107,-1,-1,-1,-1,-1,107,-1,-1,-1,-1,-1,-1,-1,-1,28,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,107,-1,-1,-1,-1,-1,-1,107,107,107,107,107,107,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,107,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,107,-1,-1,28,-1,-1,-1,-1,-1,-1],
    [-1,-1,28,-1,-1,-1,107,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,107,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,107,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,107,-1,-1,28,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,107,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,107,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,107,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,107,-1,-1,-1,-1,28,-1,-1,-1],
    [-1,-1,-1,-1,107,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,107,-1,-1,-1,-1,28,-1,-1],
    [-1,-1,-1,-1,107,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,107,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,107,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,107,-1,-1,-1,-1,-1,-1,28],
    [-1,-1,-1,107,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,107,107,107,107,-1,-1,-1,-1],
    [-1,-1,-1,107,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,107,-1,-1,-1],
    [-1,-1,-1,-1,107,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,107,107,-1,-1],
    [-1,-1,-1,-1,107,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,107,-1,-1],
    [-1,-1,-1,-1,107,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,59,-1,-1,107,-1],
    [-1,-1,-1,-1,107,-1,-1,107,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,75,-1,-1,107,-1],
    [-1,-1,-1,-1,107,-1,-1,107,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6,-1,-1],
    [-1,-1,-1,-1,-1,-1,59,107,107,-1,-1,-1,-1,-1,-1,-1,-1,107,107,107,107,-1,-1,-1,-1,-1,-1,6,-1,-1],
    [-1,-1,-1,-1,-1,-1,75,107,107,107,-1,-1,-1,-1,-1,107,107,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,107,-1,-1,107,107,107,107,107,107,107,107,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,107,-1,107,107],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,107,107,-1,107,107],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,107,107,-1,-1,-1,107],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,107,107,107,-1,107,107],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,107,107,107,107,107,107]
  ],
  collisionData: [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
    [0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1],
    [0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1],
    [0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1],
    [0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1],
    [0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1],
    [0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1],
    [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1],
    [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1],
    [0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1],
    [0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1],
    [0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
    [0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0],
    [0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0],
    [0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0],
    [0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],
    [0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],
    [0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0],
    [0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,1,1],
    [0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,1,1],
    [0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0],
    [0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0]
  ]
}


