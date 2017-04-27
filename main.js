/*
 * おまじない
 */
enchant();


/*
 * 定数
 */
var SCREEN_WIDTH    = 320;
var SCREEN_HEIGHT   = 320;


/*
 * メイン処理
 */
window.onload = function() {
    // ゲームオブジェクトを生成
    var game = new Game(SCREEN_WIDTH, SCREEN_HEIGHT);

    game.preload(
    		'image/start.png',
    		'image/start.png'
    );


    // ロード完了時の処理
    game.onload = function() {
        var scene = game.rootScene;
        // 背景色を変更
        scene.backgroundColor = "red";

        // ボタンを生成, 表示(ダーク)
        var button = new Button("Default Button");
        button.height = 100;
        button.width = 250;
        button.image = game.assets['image/start.png'];
        button.pushedimage =  game.assets["images/clear.png"];
        button.ontouchend = function() { alert('「Edit」がタップされました。');};


   //     var button2  = new Sprite();


        scene.addChild(button);

    };

    // ゲーム開始
    game.start();
};