let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Apple iPhone 14 Pro',
        more: ' 64 gb ram 556gb ssd',
        image: 'appleiphone1.jpg',
        price: 150999
    },
    {
        id: 2,
        name: 'HP 255 G8 Laptop',
        more: ' 64 gb ram 556gb ssd',
        image: 'hp.jpg',
        price: 26999
    },
    {
        id: 3,
        name: 'OnePlus Buds Pro 2R',
        more: ' 64 gb ram 556gb ssd',
        image: 'buds1.jpg',
        price: 9999
    },
    {
        id: 4,
        name: 'iQOO Z7 5G',
        more: ' 64 gb ram 556gb ssd',
        image: 'iq1.jpg',
        price: 18999
    },
    {
        id: 5,
        name: 'Xiaomi NotebookPro',
        more: ' 64 gb ram 556gb ssd',
        image: 'mi1.jpg',
        price: 50999
    },
    {
        id: 1,
        name: 'Apple Watch Ultra',
        more: ' 64 gb ram 556gb ssd',
        image: 'applewatch1.jpg',
        price: 85390
    }, {
        id: 1,
        name: 'Samsung Galaxy Tab S6',
        more: ' 64 gb ram 556gb ssd',
        image: 'tab2.jpg',
        price: 31999
    }, {
        id: 1,
        name: 'Apple Pencil',
        more: ' 64 gb ram 556gb ssd',
        image: 'pencil1.jpg',
        price: 10900
    }, {
        id: 1,
        name: 'ASUS ROG Strix G10DK',
        more: ' 64 gb ram 556gb ssd',
        image: 'cpu1.jpg',
        price: 49990
    }, {
        id: 1,
        name: 'IdeaPad Slim 5',
        more: ' 64 gb ram 556gb ssd',
        image: 'idea1.jpg',
        price: 57878
    },
    {
        id: 1,
        name: 'Dell Inspiron 3520',
        more: ' 64 gb ram 556gb ssd',
        image: 'dell1.jpg',
        price: 56990
    },
    {
        id: 6,
        name: 'Samsung 24-inch',
        more: ' 64 gb ram 556gb ssd',
        image: 'stv1.jpg',
        price: 11500
    }
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="images/${value.image}">
            <div class="title">${value.name}</div>
           
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="images/${value.image}"/></div>
                <div>${value.name}</div>
               
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}
document.getElementById("cartForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    var selectedItems = []; // Array to store selected items

    // Loop through each checkbox and add selected items to the array
    var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    for (var i = 0; i < checkboxes.length; i++) {
      selectedItems.push(checkboxes[i].value);
    }

    // Store the selected items in localStorage
    localStorage.setItem("selectedItems", JSON.stringify(selectedItems));

    // Redirect to the payment page
    window.location.href = "payment.html";
  });