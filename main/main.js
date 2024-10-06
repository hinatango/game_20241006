document.addEventListener("DOMContentLoaded", function() {
    console.log("ゲームがロードされました");
});

function openBag() {
    alert("アイテム袋の機能は現在改装中です");
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

function debugMode() {
    document.getElementById("money").textContent = "10000";
    logMessage("デバッグモード: 所持金が最大値になりました！");
}
