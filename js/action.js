function exploreArea(area) {
    if (area === 'A-1') {
        if (confirm('A-1エリアを探索しますがよろしいですか？')) {
            let items = exploreItems();
            alert(`A-1エリアの探索が終わりました！以下の獲得アイテムをアイテム袋にしまいました。\n\n${items}`);
            updateItems(items);
        }
    }
}
function exploreItems() {
    const possibleItems = ['ハンマー', '木片', 'くぎ', 'のこぎり'];
    let numItems = Math.floor(Math.random() * 2) + 2;
    let itemList = [];
    for (let i = 0; i < numItems; i++) {
        let item = possibleItems[Math.floor(Math.random() * possibleItems.length)];
        itemList.push(item);
    }
    return itemList.map(item => `${item}(1)`).join('\n');
}
function updateItems(items) {
    const itemBag = document.getElementById('item-bag');
    items.split('\n').forEach(item => {
        const [name, count] = item.split('(1)');
        const existingItem = document.querySelector(`#item-bag li[data-item='${name}']`);
        if (existingItem) {
            existingItem.dataset.count = parseInt(existingItem.dataset.count) + 1;
            existingItem.textContent = `${name}(${existingItem.dataset.count})`;
        } else {
            const newItem = document.createElement('li');
            newItem.dataset.item = name;
            newItem.dataset.count = 1;
            newItem.textContent = `${name}(1)`;
            itemBag.appendChild(newItem);
        }
    });
    log(`${items} を獲得しました。`);
}
