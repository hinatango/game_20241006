function fortune() {
    if (confirm('1回100yenで占いを行いますがよろしいですか？')) {
        let outcome = Math.floor(Math.random() * 5);
        let result;
        switch (outcome) {
            case 0:
                result = '大吉: 所持金500yen獲得、ランダムアイテム1つ獲得';
                document.getElementById('money').textContent = parseInt(document.getElementById('money').textContent) + 500;
                break;
            case 1:
                result = '吉: 所持金300yen獲得、ランダムアイテム1つ獲得';
                document.getElementById('money').textContent = parseInt(document.getElementById('money').textContent) + 300;
                break;
            case 2:
                result = '中吉: 所持金100yen獲得、ランダムアイテム1つ獲得';
                document.getElementById('money').textContent = parseInt(document.getElementById('money').textContent) + 100;
                break;
            case 3:
                result = '小吉: ランダムアイテム1つ獲得';
                break;
            case 4:
                result = '凶: 所持金半額失い、ランダムアイテム1つ失う';
                document.getElementById('money').textContent = Math.floor(parseInt(document.getElementById('money').textContent) / 2);
                break;
        }
        alert(result);
        log(`占い結果: ${result}`);
    }
}
