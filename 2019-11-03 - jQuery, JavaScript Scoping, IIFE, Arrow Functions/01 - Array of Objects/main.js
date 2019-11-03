const clothing = [
    {type: "Shirt", size: 32, price: 100, color: "White" },
    {type: "Pants", size: 42, price: 120, color: "Black" },
    {type: "Hat", size: 22, price: 110, color: "Yellow" },
    {type: "Shoes", size: 37, price: 130, color: "Red" },
    {type: "Skirt", size: 39, price: 160, color: "Blue" },
];

for(const item of clothing) {
    for(const prop in item) {
        console.log(item[prop])
    }
    console.log("----------------");
}

const paragraphAverage = document.getElementById("paragraphAverage");
paragraphAverage.innerText = "Average: " + getPriceAverage(clothing);

function getPriceAverage(clothingArray) {
    let sum = 0;
    for(const item of clothingArray) {
        sum += item.price;
    }
    return sum / clothingArray.length;
}