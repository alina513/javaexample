const itemCategories = document.querySelectorAll(".item");
console.log(`Number of categories:${itemCategories.length}`);
itemCategories.forEach(function(item) {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.children.length}`)
})