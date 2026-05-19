let showAll = document.getElementById("showAll");
let inStock = document.getElementById("inStock");
let checkStock = document.getElementById("checkStock");
let checkRating = document.getElementById("checkRating");

let products = [
    { name: "Phone", price: 500, inStock: true, rating: 4.5 },
    { name: "Laptop", price: 1200, inStock: false, rating: 4.8 },
    { name: "Headphones", price: 100, inStock: true, rating: 3.2 },
    { name: "Mouse", price: 230, inStock: true, rating: 4.0 },
    { name: "iphone", price: 6000, inStock: true, rating: 4.6 },
    { name: "table", price: 9000, inStock: false, rating: 4.7 },

];

showAll.addEventListener("click", function () {

    let a = products.map((product) => {
        return product;
    })

    let parentdiv = document.createElement("div");
    parentdiv.classList.add("parentdiv");


    for (let i = 0; i < a.length; i++) {

        let div = document.createElement("div");
        let h2 = document.createElement("h2");
        let h3 = document.createElement("h3");
        let h4 = document.createElement("h4");
        let h5 = document.createElement("h5");
        div.classList.add("div");

        h2.innerText = `Name  : ${a[i].name}`
        h3.innerText = `Price  : ${a[i].price}`
        h4.innerText = `inStock  : ${a[i].inStock}`
        h5.innerText = `Rating  : ${a[i].rating}`

        div.append(h2);
        div.append(h3);
        div.append(h4);
        div.append(h5);

        parentdiv.append(div)

        document.body.append(parentdiv)
    }
})

inStock.addEventListener("click", function () {

    let item = products.filter(item => {
        return item.inStock === true;
    })


    let parentmydiv = document.createElement("div");

    item.forEach((itms) => {
        let mydiv = document.createElement("div");
        let h2 = document.createElement("h2");
        let h3 = document.createElement("h3");
        let h4 = document.createElement("h4");
        let h5 = document.createElement("h5");

        mydiv.append(h2);
        mydiv.append(h3);
        mydiv.append(h4);
        mydiv.append(h5);

        h2.innerText = `Name : ${itms.name}`
        h3.innerText = `inStock : ${itms.inStock}`
        h4.innerText = `price : ${itms.price}`
        h5.innerText = `Rating : ${itms.rating}`


        parentmydiv.classList.add("parentmydiv");
        parentmydiv.append(mydiv)
        mydiv.classList.add("mydiv");
        document.body.append(parentmydiv);
    })
})



checkStock.addEventListener("click", function () {
    let checkinstock = products.every((itm) => {
        return itm.inStock === true;
    })
    if (checkinstock === true) {
        alert("✅ “All products are in stock”")
    } else {
        alert("❌ “Some products are out of stock”")
    }
})

checkRating.addEventListener("click", function () {
    let checkrat = products.some((rating) => {
        return rating.rating < 3;
    })
    if (checkrat) {
        alert("⚠️ “Some products have low ratings”")
    } else {
        alert("✅ “All products have good ratings”")
    }
})