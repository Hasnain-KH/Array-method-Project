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
    console.log(a);

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
    console.log(item);
})
