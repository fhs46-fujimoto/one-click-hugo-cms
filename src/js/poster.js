// 広告の表示数
const POSTER_COUNT = 12;
// 広告の情報　ファイル分離予定
const posters = [
    {
        "title" : "エアガンで猿と戦う主婦のイラスト",
        "file" : "airgun_women_syufu.png",
        "url" : "https://www.irasutoya.com/2016/03/blog-post_37.html"
    },
    {
        "title" : "クトゥグアのイラスト",
        "file" : "character_cthulhu_cthugha.png",
        "url" : "https://www.irasutoya.com/2018/10/blog-post_62.html"
    },
    {
        "title" : "黄金比のイラスト",
        "file" : "art_ougonhi.png",
        "url" : "https://www.irasutoya.com/2018/10/blog-post_45.html"
    },
    {
        "title" : "ゆめかわ女子のイラスト",
        "file" : "yumekawa_girl.png",
        "url" : "https://www.irasutoya.com/2018/09/blog-post_217.html"
    },
    {
        "title" : "心を病む人のイラスト（女性）",
        "file" : "sick_kokoro_yamu_woman.png",
        "url" : "https://www.irasutoya.com/2018/09/blog-post_698.html"
    },
    {
        "title" : "光ファイバーが繋がれたマウスのイラスト",
        "file" : "sicence_mouse_optical_fiber.png",
        "url" : "https://www.irasutoya.com/2018/10/blog-post_639.html"
    },
    {
        "title" : "触覚ヘアの女の子のイラスト",
        "file" : "hair_girl_syokkaku.png",
        "url" : "https://www.irasutoya.com/2018/10/blog-post_873.html"
    },
    {
        "title" : "古札納所のイラスト",
        "file" : "building_furufudanousyo.png",
        "url" : "https://www.irasutoya.com/2017/05/blog-post_60.html"
    },
    {
        "title" : "ほかほかの宅配ピザのイラスト",
        "file" : "food_pizza_takuhai.png",
        "url" : "https://www.irasutoya.com/2015/11/blog-post_655.html"
    },
    {
        "title" : "ライブ会場のイラスト（背景素材）",
        "file" : "bg_music_live_stage.jpg",
        "url" : "https://www.irasutoya.com/2016/09/blog-post_631.html"
    },
    {
        "title" : "愛媛県のキャラクター",
        "file" : "japan_character7_shikoku2_ehime.png",
        "url" : "https://www.irasutoya.com/2017/04/blog-post_34.html"
    },
    {
        "title" : "ブラックベリーのイラスト",
        "file" : "fruit_blackberry.png",
        "url" : "https://www.irasutoya.com/2015/12/blog-post_962.html"
    },
    {
        "title" : "揚げパンのイラスト",
        "file" : "pan_agepan.png",
        "url" : "https://www.irasutoya.com/2016/12/blog-post_480.html"
    },
    {
        "title" : "筋トレのイラスト「腹筋をする男性」",
        "file" : "fukkin_man.png",
        "url" : "https://www.irasutoya.com/2013/03/blog-post_1184.html"
    },
    {
        "title" : "まめだのイラスト（落語）",
        "file" : "rakugo_mameda.png",
        "url" : "https://www.irasutoya.com/2017/10/blog-post_693.html"
    },
    {
        "title" : "屋上のイラスト",
        "file" : "okujou.png",
        "url" : "https://www.irasutoya.com/2015/04/blog-post_603.html"
    },
    {
        "title" : "インスリン注射のイラスト",
        "file" : "insulin_chuusya.png",
        "url" : "https://www.irasutoya.com/2015/02/blog-post_49.html"
    },
    {
        "title" : "調理器具のイラスト「泡だて器・水色」",
        "file" : "cooking_awadateki_mizuiro.png",
        "url" : "https://www.irasutoya.com/2012/12/blog-post_23.html"
    },
    {
        "title" : "踏み台昇降の台のイラスト",
        "file" : "undou_ashibumi_fumidaisyoukou_dai.png",
        "url" : "https://www.irasutoya.com/2017/11/blog-post_748.html"
    },
    {
        "title" : "ペットシーツ・トイレシートのイラスト",
        "file" : "pet_toilet_sheet.png",
        "url" : "https://www.irasutoya.com/2015/12/blog-post_199.html"
    }
];

(function(){
    // ポスターの表示数分liを追加する(重複を許容)
    let posterSection = document.querySelector("#poster-section");
    for (let index = 0; index < POSTER_COUNT && posters.length > 0; index++) {
        let target = posters.splice(Math.floor(Math.random() * posters.length) , 1)[0];
        posterSection.innerHTML += `
        <li><a href="${target.url}"><img class="" alt="${target.title}" src="poster/${target.file}"></a></li>
        `;
    }
})()