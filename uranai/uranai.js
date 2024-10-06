function fortune() {
    let result = Math.random();
    if (result < 0.1) {
        alert("大吉！500yenとランダムアイテム1つを獲得しました！");
        logMessage("大吉！所持金が500yen増えました。");
    } else if (result < 0.3) {
        alert("吉！300yenとランダムアイテム1つを獲得しました！");
        logMessage("吉！所持金が300yen増えました。");
    } else if (result < 0.6) {
        alert("中吉！100yenとランダムアイテム1つを獲得しました！");
        logMessage("中吉！所持金が100yen増えました。");
    } else if (result < 0.9) {
        alert("小吉！ランダムアイテム1つを獲得しました！");
        logMessage("小吉！ランダムアイテムを獲得しました。");
    } else {
        alert("凶！お金が半額になり、ランダムアイテム1つを失いました！");
        logMessage("凶！所持金が半額になりました。");
    }
}
