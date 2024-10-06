function exploreArea(area) {
    if (confirm(area + "に探索に出かけますがよろしいですか？")) {
        let itemsFound = ["ハンマー", "木片", "くぎ", "のこぎり"];
        let numItems = Math.floor(Math.random() * 2) + 2;
        let foundItems = [];
        for (let i = 0; i < numItems; i++) {
            foundItems.push(itemsFound[Math.floor(Math.random() * itemsFound.length)]);
        }
        for (let item of foundItems) {
            logMessage(item + "を獲得しました。");
        }
        alert(area + "を探索しました！");
    }
}
