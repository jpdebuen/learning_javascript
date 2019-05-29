var vending_machine ={
    "columns": 4,
    "rows": 6,
    "slotCapacity": 10,
    "stock": [
        {
            "id": "11",
            "price": 20,
            "counter": 5,
            "name": "Sabritas Originales",
            "image": "./img/11",
            "column": 1,
            "row": 1,
        },
        {
            "id": "12",
            "price": 20,
            "counter": 5,
            "name": "Doritos Nacho",
            "image": "./img/12",
            "column": 2,
            "row": 1,
        },
    ]
}


/* FUNCIONES */

function getProduct(id){
    return vending_machine.stock.find(function(element){
        return element.id === id;
    });
}

function checkChange(id, money){
    if (getProduct(id).price < money){
        return money - getProduct(id).price;
    }
}
function checkCounter(id){
    return getProduct(id).counter != 0;
}

function getProductID(){
    var productID = document.getElementById("id-input").value;
    return productID;
}

function getUserMoney(){
    var userMoney = document.getElementById("money-input").value;
    return userMoney;
}

function buy(){
    var id = getProductID();
    var money = getUserMoney();
    var product = getProduct(id);
    var isInStock = checkCounter(id)
    var isEnoughMoney = product && (money >= product.price)

    if (!product) {
        console.log('No existe el producto')
        return 
    }

    if (!isInStock) {
        console.log('El producto esta agotado')
        return 
    }

    if (!isEnoughMoney) {
        console.log('No es suficiente dinero')
        return
    }

    product.counter --;
    console.log("Disfruta tu(s) " + product.name + "!");
    console.log("Tu cambio es: $" + checkChange(id, money));

}


