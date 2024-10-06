function exploreArea(area) {
    if (confirm(area + "に探索に出かけますがよろしいですか？")) {
        let itemsFound = ["ハンマー", "木片", "くぎ", "のこぎり"];
        let numItems = Math.floor(Math.random() * 2) + 2;
        let foundItems = {};
        for (let i = 0; i < numItems; i++) {
            let item = itemsFound[Math.floor(Math.random() * itemsFound.length)];
            foundItems[item] = (foundItems[item] || 0) + 1;
        }
        
        let itemList = document.getElementById("item-list");
        for (let item in foundItems) {
            logMessage(item + "を" + foundItems[item] + "個獲得しました。");
            let listItem = document.createElement("li");
            listItem.textContent = item + " (" + foundItems[item] + ")";
            itemList.appendChild(listItem);
        }
        
        alert(area + "の探索が終わりました！獲得アイテムはアイテム袋にしまいました。\n＜獲得アイテム＞\n" +
              Object.entries(foundItems).map(([key, value]) => "・" + key + "(" + value + ")").join("\n"));
    }
}
