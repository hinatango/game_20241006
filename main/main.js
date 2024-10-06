document.addEventListener("DOMContentLoaded", function() {
    alert("このゲームでは、実際に存在するたくさんの職業の仕事についてゲーム感覚で学ぶことを目的としたゲームです。全て無料で遊べますが、一部有料アイテムが存在しますので、ご了承いただきますようお願いします。");
});

function openBag() {
    const itemBag = document.getElementById("item-bag");
    itemBag.classList.toggle("hidden");
}

function showShop() {
    alert("ショップは現在改装中です");
}

function showAiRobotManagement() {
    alert("AIロボ管理所は現在改装中です");
}

function showFacilityRestoration() {
    alert("施設復興所は現在改装中です");
}

function showPokedex() {
    alert("図鑑は現在改装中です");
}

function showHelp() {
    alert("説明書：\n・このゲームは、より多くの職業ロボを開放し、職業について詳しくなることを目的としたゲームです。\n・エリアを探索してアイテムを集めると、職業ロボが解放されていきます。\n・職業ロボを開放していくと、探索するエリアが増え、拾えるアイテムの種類も増えていきます。\n・職業を開放していくと、施設を開放して街の復興ができるようになります。\n・職業ロボの開放、施設の開放を目指して頑張ってください！");
}

function debugMode() {
    document.getElementById("money").textContent = "10000";
    logMessage("デバッグモード: 所持金が最大値になりました！");
}
