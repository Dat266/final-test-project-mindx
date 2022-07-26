// Phan manh lam

function listFood ({
    image = '',
    title = '',
    description = '',
    money = '',
    fullstar = '',
    halfstar = '',
    value = ''
}) {
    const main = document.getElementById('manh-js');
    console.log(main)
    if(main) {
        const listFood = document.createElement('div');
        listFood.classList.add('manh__food');
        listFood.innerHTML = `
                <img src="${image}" alt="" class="manh__food-img">
                <div class="manh__food-star">
                    ${fullstar}
                    ${halfstar}
                </div>
                <h2 class="manh__food-title">${title}</h2>
                <p class="manh__food-description">${description}</p>
                <div class="manh__food-cost">
                    <p class="manh__food-money">${money}</p>
                    <div class="manh__food-cart" value = ${value} >
                        <i class="fa-solid fa-cart-shopping"></i>
                    </div>
                </div>
        `;
        main.appendChild(listFood);

    }
} 



var list =  [
    listFood({
        image: '/img/product_1.png',
        title: 'Nem phượng hoàng',
        description: 'Là đặc sản nổi tiếng của Hà Nội, với hương vị hết sức là thân quen!',
        money: '500.000 vnđ',
        fullstar: '<i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i>',
        halfstar: '<i class="fa-solid fa-star-half-stroke"></i>',
        value: '1'
    }),
listFood({
        image: '/img/product_2.png',
        title: 'Nem phượng hoàng',
        description: 'Là đặc sản nổi tiếng của Hà Nội, với hương vị hết sức là thân quen!',
        money: '500.000 vnđ',
        fullstar: '<i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i>',
        halfstar: '<i class="fa-solid fa-star-half-stroke"></i>',
    value: '2'
    }),
    listFood({
        image: '/img/product_3.png',
        title: 'Nem phượng hoàng',
        description: 'Là đặc sản nổi tiếng của Hà Nội, với hương vị hết sức là thân quen!',
        money: '500.000 vnđ',
        fullstar: '<i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i>',
        halfstar: '<i class="fa-solid fa-star-half-stroke"></i>',
        value: '3'
    }),
    listFood({
        image: '/img/product_4.png',
        title: 'Nem phượng hoàng',
        description: 'Là đặc sản nổi tiếng của Hà Nội, với hương vị hết sức là thân quen!',
        money: '500.000 vnđ',
        fullstar: '<i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i>',
        halfstar: '<i class="fa-solid fa-star-half-stroke"></i>',
        value: '4'
    }),
    listFood({
        image: '/img/product_5.png',
        title: 'Nem phượng hoàng',
        description: 'Là đặc sản nổi tiếng của Hà Nội, với hương vị hết sức là thân quen!',
        money: '500.000 vnđ',
        fullstar: '<i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i>',
        halfstar: '<i class="fa-solid fa-star-half-stroke"></i>',
        value: '5'
    }),
    listFood({
        image: '/img/product_6.png',
        title: 'Nem phượng hoàng',
        description: 'Là đặc sản nổi tiếng của Hà Nội, với hương vị hết sức là thân quen!',
        money: '500.000 vnđ',
        fullstar: '<i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i>',
        halfstar: '<i class="fa-solid fa-star-half-stroke"></i>',
        value: '6'
    })
    
]

console.log(list.map(function(){}))



// var carts = document.querySelector(".manh__food-cart i")
// console.log('target')

// carts.onclick = function(e) {
//     var a = carts.parentNode
//     console.log()

// }



// function getListFood() {
//     return new Promise(function(resolve) {
//         setTimeout(function() {
//             resolve(listFood);
//         }, 1000);
//     })
// } 

// getListFood()
//     .then(function(listFood) {
//         var listId = listFood.map(function(listFoods){
//             return listFoods;
//         })
//         console.log(listId)
//     })


