// Description:
//   飯決めてくれるbot

module.exports = function(robot) {

var gobi = ["「戦闘です。マスター、指示を」",
"「武装完了……行きます先輩！」",
"「ステータスアップ……頑張ります」",
"「最大火力、発揮します」",
"「シールドエフェクト、発揮します」",
"「はい」",
"「了解です」",
"「行きます」",
"「真名、偽装登録――行けます」",
"「はっ！」",
"「ふっ！」",
"「やあっ！」",
"「これで、倒れて！」",
"「宝具、展開します……！」",
"「うああ！」",
"「うっ！」",
"「ごめん……なさい……」",
"「だめ……まだ、戦わなく、ちゃ……」",
"「戦闘終了。何とかなりましたね」",
"「見事な采配です……先輩」"];

      robot.respond(/fgo/i, function(msg) {

            var response = msg.random(gobi);
            msg.send(response);
      });
};
