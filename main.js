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

    game.preload(
    		'image/build_A.png',
    		'image/build_B.png'
    );


    // ロード完了時の処理
    game.onload = function() {
        var scene = game.rootScene;
        // 背景色を変更
        scene.backgroundColor = "red";

        // ボタンを生成, 表示(ダーク)
        var button = new Button("Default Button");
        button.height = 164;
        button.width = 276;
        button.image = game.assets['image/build_A.png'];
        button.pushedimage =  game.assets["image/build_B.png"];
        button.ontouchend = function() { alert('「Edit」がタップされました。');};


   //     var button2  = new Sprite();


        scene.addChild(button);

    };

    // ゲーム開始
    game.start();
};