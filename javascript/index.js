// Phan manh lam
var listFood = [
    {
        image: '../img/product_1.png',
        title: 'Nem phượng hoàng',
        description: 'Là đặc sản nổi tiếng của Hà Nội, với hương vị hết sức là thân quen!',
        money: 350000,
        fullstar: '<i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i>',
        halfstar: '<i class="fa-solid fa-star-half-stroke"></i>',
        id: '1'
    },
    {
        image: '../img/product_2.png',
        title: 'Trứng vàng kin lâu',
        description: 'Một loại trứng đáng rất được giới tài phiệt săn đón cho mỗi buổi sáng',
        money: 550000,
        fullstar: '<i class="fa-solid fa-star"></i>  <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i>',
        halfstar: '<i class="fa-solid fa-star-half-stroke"></i>',
        id: '2'
    },
    {
        image: '../img/product_3.png',
        title: 'Salad tây âu',
        description: 'Là món ăn nhanh rất được ưa chuộng vào mỗi buổi sáng tại châu âu',
        money: 290000,
        fullstar: '<i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i>',
        halfstar: '<i class="fa-solid fa-star-half-stroke"></i>',
        id: '3'
    },
    {
        image: '../img/product_4.png',
        title: 'Humberger hoàng gia',
        description: 'Là thức ăn nhanh có từ những năm thế chiến thứ 2 còn đươc con người lưu giữ tới ngày nay ',
        money: 999000,
        fullstar: '<i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i>',
        halfstar: '<i class="fa-solid fa-star-half-stroke"></i>',
        id: '4'
    },
    {
        image: '../img/product_5.png',
        title: 'Món ăn mắc ca ca',
        description: 'Cực phẩn trong làng ẩm thực trung hoa, hội tụ đầy đủ hương vị dân tộc',
        money:99000,
        fullstar: '<i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i>',
        halfstar: '<i class="fa-solid fa-star-half-stroke"></i>',
        id: '5'
    },
    {
        image: '../img/product_6.png',
        title: 'Cá sốt ',
        description: 'Yêu ngay từ cái nhìn đầu tiên',
        money: 650000,
        fullstar: '<i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i>',
        halfstar: '<i class="fa-solid fa-star-half-stroke"></i>',
        id: '6'
    },
    {
        image: '../img/product_4.png',
        title: 'Humberger hoàng gia',
        description: 'Là thức ăn nhanh có từ những năm thế chiến thứ 2 còn đươc con người lưu giữ tới ngày nay ',
        money: 999000,
        fullstar: '<i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i>',
        halfstar: '<i class="fa-solid fa-star-half-stroke"></i>',
        id: '4'
    },
    {
        image: '../img/product_5.png',
        title: 'Món ăn mắc ca ca',
        description: 'Cực phẩn trong làng ẩm thực trung hoa, hội tụ đầy đủ hương vị dân tộc',
        money:99000,
        fullstar: '<i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i>',
        halfstar: '<i class="fa-solid fa-star-half-stroke"></i>',
        id: '5'
    },
    {
        image: '../img/product_6.png',
        title: 'Cá sốt ',
        description: 'Yêu ngay từ cái nhìn đầu tiên',
        money: 650000,
        fullstar: '<i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i>',
        halfstar: '<i class="fa-solid fa-star-half-stroke"></i>',
        id: '6'
    }
]

// Thêm sản phẩm vào giỏ hàng
var addToCart = function (title, money,image) {
    cartList.push({
        'title': title,
        'money': money,
        'image': image
    })
    // lưu vào local
localStorage.setItem('cartList', JSON.stringify(cartList))
    // xóa khỏi local
var removeFood = function() {
    localStorage.removeItem('cartList')
}
    
}
// lay ra từ local
var favouristFood = JSON.parse(localStorage.getItem('cartList'))

// xóa các sp trùng nhau trước khi đưa vào giỏ hàng
// var filterFood = Array.from(new Set(favouristFood.map(JSON.stringify))).map(JSON.parse)

// danh sach chua các sp chọn mua
var cartList = []

var cart = document.getElementById('header__cart-list-cart')
var noCart = document.getElementById('header__cart-no-cart-img')

// in vào giỏ hàng
if(favouristFood) {
    noCart.classList.add('haveItem')
    cart.classList.remove('haveItem')
    var bcart = Array.from(new Set(favouristFood.map(JSON.stringify))).map(JSON.parse).map( listCart => {
        return `
        <li class="header__cart-item">
        <img src="${listCart.image}" alt="" class="header__cart-img">
        <div class="header__cart-item-head">
            <div class="header__cart-item-info">

                <h4 class="header__cart-item-name">${listCart.title}</h4>
                <div class="header__cart-item-wrap">
                    <span class="header__cart-item-price">${listCart.money} vnd</span>
                    <span class="header__cart-item-multiply">x</span>
                    <span class="header__cart-item-qnt">3</span>
                </div>
            </div>
            <div class="header__cart-item-body">
                <span class="header__cart-item-discription">
                    Phân hoại: Food
                </span>
                <span onclick = "removeFood(bcart)" class="header__cart-item-remove">Xóa</span>
            </div>
        </div>
    </li>`
    })

    let mainCart = document.getElementById('testCart')
    mainCart.innerHTML = bcart.join()

}else{
    cart.classList.add('haveItem')
    noCart.classList.remove('haveItem')

}



//  lọc qua các đối tượng trong mảng
var a = listFood.map(food => {
   
    return `
        <div class="manh__food">
            <img src="${food.image}" alt="" class="manh__food-img">
            <div class="manh__food-star">
                ${food.fullstar}
                ${food.halfstar}
            </div>
            <h2 class="manh__food-title">${food.title}</h2>
            <p class="manh__food-description">${food.description}</p>
            <div class="manh__food-cost">
                <p class="manh__food-money">${food.money} VND</p>
                <i onclick = "addToCart('${food.title}','${food.money}','${food.image}')" 
                class="fa-solid fa-cart-shopping"></i>
            </div>
        </div>

                `
})

// In ra ngoài màn hình html
let main = document.getElementById('manh-js')
main.innerHTML = a.join()







// // lấy id của các sản phẩm trong list
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
//        for ( i = 0 ; i < listId.length; i++) {
//         console.log(listId[i].id)
//        }
//     })
