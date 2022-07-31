// Phan manh lam
var listFood = [
    {
        image: '../img/product_1.png',
        title: 'Nem phượng hoàng',
        description: 'Là đặc sản nổi tiếng của Hà Nội, với hương vị hết sức là thân quen!',
        money: '350000',
        fullstar: '<i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i>',
        halfstar: '<i class="fa-solid fa-star-half-stroke"></i>',
        id: '1'
    },
    {
        image: '../img/product_2.png',
        title: 'Trứng vàng kin lâu',
        description: 'Một loại trứng đáng rất được giới tài phiệt săn đón cho mỗi buổi sáng',
        money: '550000',
        fullstar: '<i class="fa-solid fa-star"></i>  <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i>',
        halfstar: '<i class="fa-solid fa-star-half-stroke"></i>',
        id: '2'
    },
    {
        image: '../img/product_3.png',
        title: 'Salad tây âu',
        description: 'Là món ăn nhanh rất được ưa chuộng vào mỗi buổi sáng tại châu âu',
        money: '290000',
        fullstar: '<i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i>',
        id: '3'
    },
    {
        image: '../img/product_4.png',
        title: 'Humberger hoàng gia',
        description: 'là thức ăn nhanh có từ những năm thế chiến thứ 2 còn đươc con người lưu giữ tới ngày nay ',
        money: '999000',
        fullstar: '<i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i>',
        halfstar: '<i class="fa-solid fa-star-half-stroke"></i>',
        id: '4'
    },
    {
        image: '../img/product_5.png',
        title: 'Món ăn mắc ca ca',
        description: 'Cực phẩn trong làng ẩm thực trung hoa, hội tụ đầy đủ hương vị dân tộc',
        money: '99000',
        fullstar: '<i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i>',
        halfstar: '<i class="fa-solid fa-star-half-stroke"></i>',
        id: '5'
    },
    {
        image: '../img/product_6.png',
        title: 'Cá sốt ',
        description: 'Yêu ngay từ cái nhìn đầu tiên',
        money: '650000',
        fullstar: '<i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i>',
        halfstar: '<i class="fa-solid fa-star-half-stroke"></i>',
        id: '6'
    }
]

// Thêm sản phẩm vào giỏ hàng
var addToCart = function (title, money) {
    cartList.push({
        'title': title,
        'money': money
    })
    // console.log(cartList)
    localStorage.setItem('cartList', JSON.stringify(cartList))
    
}
var favouristFood = JSON.parse(localStorage.getItem('cartList'))
console.log(favouristFood)

var cartList = []
// console.log(cartList)

if(favouristFood) {
    var bcart = favouristFood.map( listCart => {
        return `
                    <div class="manh__food">
                        <h1>Số Lượng </h1>
                        <h2 class="manh__food-title">${listCart.title}</h2>
                        <div class="manh__food-cost">
                            <p class="manh__food-money">${listCart.money}</p>
                            <i class="fa-solid fa-cart-shopping"></i>
                        </div>
                    </div>
    
                    `
    })
    let mainCart = document.getElementById('testCart')
    mainCart.innerHTML = bcart.join()

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
                        <i onclick = "addToCart('${food.title}','${food.money}')" 
                        class="fa-solid fa-cart-shopping"></i>
                    </div>
                </div>

                `
})

// In ra ngoài màn hình html
let main = document.getElementById('manh-js')
main.innerHTML = a.join()


// lấy id của các sản phẩm trong list
function getListFood() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve(listFood);
        }, 1000);
    })
} 

getListFood()
    .then(function(listFood) {
        var listId = listFood.map(function(listFoods){
            return listFoods;
        })
       for ( i = 0 ; i < listId.length; i++) {
        console.log(listId[i].id)
       }
    })





//  ae khac cmt nhu nay roi add vao nhe

