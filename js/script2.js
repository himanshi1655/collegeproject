const allFilterItems = document.querySelectorAll('.filter-item');
const allFilterBtns = document.querySelectorAll('.filter-btn');
// let listCards = [];
let listCards = JSON.parse(sessionStorage.getItem('listCards')) ? JSON.parse(sessionStorage.getItem('listCards')) : [];
// let totalPrice = JSON.parse(sessionStorage.getItem('totalPrice')) ? JSON.parse(sessionStorage.getItem('totalPrice')) : 0;

window.addEventListener('DOMContentLoaded', () => {
    allFilterBtns[0].classList.add('active-btn');
});

allFilterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        showFilteredContent(btn);
    });
});

function showFilteredContent(btn){
    allFilterItems.forEach((item) => {
        if(item.classList.contains(btn.id)){
            resetActiveBtn();
            btn.classList.add('active-btn');
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}

function abc(id) {
    // Find the product object in the products array
    let product = products.find((product) => {
        return product.id === id;
    });

    // If the product is not found in listCards, clone it to avoid directly modifying the original object
    if (!listCards.find((listCard) => listCard.id === id)) {
        product = { ...product }; // Create a shallow copy of the product object
    }

    // Find the index of the product in listCards
    const idx = listCards.findIndex((listCard) => listCard.id === id);

    // Increment the count property
    product.count++;

    // If the product is not in listCards, add it
    if (idx === -1) {
        listCards.push(product);
    }

    body.classList.add('active');
    reloadCard();
}

function reloadCard() {
    listCard.innerHTML = '';
    let quantity = 0;
    let totalPrice = 0;
    sessionStorage.setItem('listCards', JSON.stringify(listCards));
    listCards.forEach((value) => {
        totalPrice = totalPrice + value.price;
        quantity = quantity + value.count;
        totalCount.innerText = String(listCards.length);
        total.innerText = String(totalPrice);
        // sessionStorage.setItem('totalPrice', JSON.stringify(totalPrice));

        if (value !== null) {
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
            <div>${value.name}</div>
            <div><img src="images/${value.image}"/></div>
            <div>${value.price.toLocaleString()}</div>
            <div> 
                 <button onclick="changeQuantity(${value.id},${value.count - 1})">-</button>
                 <div class="count">${value.count}</div>
                 <button onclick="changeQuantity(${value.id},${value.count + 1})">+</button>

            </div>

            `;
            listCard.appendChild(newDiv);
        }
    })
}
function changeQuantity(id,count){
    let productIndex = listCards.findIndex((product)=> {
        return product.id === id.id;
    })
    if(count === 0) {
        listCards.splice(productIndex, 1);
    } else{
        let updatedProduct = Object.assign({}, listCards[productIndex]);
        updatedProduct.count = count;
        updatedProduct.price = count * products[productIndex].price;

        // Update the element in the array with the updated object
        listCards[productIndex] = updatedProduct;
    }
    reloadCard();
}
function resetActiveBtn(){
    allFilterBtns.forEach((btn) => {
        btn.classList.remove('active-btn');
    });
}

let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let outsideCart = document.querySelector('.container');
let list =document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let totalCount = document.querySelector('.quantity');
totalCount.innerText = String(listCards.length);

openShopping.addEventListener('click', ()=> {
    body.classList.add('active');
    reloadCard();
})
closeShopping.addEventListener('click',()=>{
    body.classList.remove('active');
})
outsideCart.addEventListener('click',($event)=> {
    if($event.target.tagName !== 'IMG')
    body.classList.remove('active');
})

const products = [
    {
        id:'cabbage',
        name: 'cabbage',
        image: 'cabbage.png',
        price: 120000,
        count: 0
    },
    {
        id:'onion',
        name: 'onion',
        image: 'onion.png',
        price: 120000,
        count: 0
    },
    {
        id:'apple',
        name: 'apple',
        image: 'apple.png',
        price: 120000,
        count: 0
    },
    {
        id:'grapes',
        name: 'grapes',
        image: 'grapes.png',
        price: 120000,
        count: 0
    },
    {
        id:'baby1',
        name: 'baby1',
        image: 'baby1.jpeg',
        price: 120000,
        count: 0
    },
    {
        id:'baby2',
        name: 'baby2',
        image: 'baby2.jpeg',
        price: 120000,
        count: 0
    },
    {
        id:'office1',
        name: 'office1',
        image: 'o2.jpeg',
        price: 120000,
        count: 0
    },
    {
        id:'office2',
        name: 'office2',
        image: 'o1.jpeg',
        price: 120000,
        count: 0
    },
    {
        id:'non-veg-1',
        name: 'n1',
        image: 'n3.jpeg',
        price: 120000,
        count: 0
    },
    {
        id:'non-veg-2',
        name: 'n2',
        image: 'n1.jpeg',
        price: 120000,
        count: 0
    },
    {
        id:'beauty1',
        name: 'beauty1',
        image: 'b1.jpeg',
        price: 120000,
        count: 0
    },
    {
        id:'beauty2',
        name: 'beauty2',
        image: 'b2.jpeg',
        price: 120000,
        count: 0
    },
    
]
