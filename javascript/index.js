// Phan manh lam
var listFood = [
  {
    image: "../img/product_1.png",
    title: "Nem phượng hoàng",
    description:
      "Là đặc sản nổi tiếng của Hà Nội, với hương vị hết sức là thân quen!",
    money: 350000,
    fullstar:
      '<i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i>',
    halfstar: '<i class="fa-solid fa-star-half-stroke"></i>',
    id: "1",
  },
  {
    image: "../img/product_2.png",
    title: "Trứng vàng kin lâu",
    description:
      "Một loại trứng đáng rất được giới tài phiệt săn đón cho mỗi buổi sáng",
    money: 550000,
    fullstar:
      '<i class="fa-solid fa-star"></i>  <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i>',
    halfstar: '<i class="fa-solid fa-star-half-stroke"></i>',
    id: "2",
  },
  {
    image: "../img/product_3.png",
    title: "Salad tây âu",
    description:
      "Là món ăn nhanh rất được ưa chuộng vào mỗi buổi sáng tại châu âu",
    money: 290000,
    fullstar:
      '<i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i>',
    id: "3",
  },
  {
    image: "../img/product_4.png",
    title: "Humberger hoàng gia",
    description:
      "là thức ăn nhanh có từ những năm thế chiến thứ 2 còn đươc con người lưu giữ tới ngày nay ",
    money: 999000,
    fullstar:
      '<i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i>',
    halfstar: '<i class="fa-solid fa-star-half-stroke"></i>',
    id: "4",
  },
  {
    image: "../img/product_5.png",
    title: "Món ăn mắc ca ca",
    description:
      "Cực phẩn trong làng ẩm thực trung hoa, hội tụ đầy đủ hương vị dân tộc",
    money: 999000,
    fullstar:
      '<i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i>',
    halfstar: '<i class="fa-solid fa-star-half-stroke"></i>',
    id: "5",
  },
  {
    image: "../img/product_6.png",
    title: "Cá sốt ",
    description: "Yêu ngay từ cái nhìn đầu tiên",
    money: 650000,
    fullstar:
      '<i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i>',
    halfstar: '<i class="fa-solid fa-star-half-stroke"></i>',
    id: "6",
  },
];
//  lọc qua các đối tượng trong mảng
var a = listFood.map((food) => {
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
                        <p class="manh__food-money">${food.money} vnđ</p>
                        <i onclick = "handlerCash(${food.money})" class="fa-solid fa-cart-shopping"></i>
                        <button onclick = "handlerTotal()">Total</button>
                    </div>
                </div>

                `;
});

// In ra ngoài màn hình html
let main = document.getElementById("manh-js");
main.innerHTML = a.join();

//  lắng nghe click vào giỏ hàng
var carts = document.querySelectorAll(".manh__food-cost i");

// function listCart() {
//     for( j = 0; j < a.length; j++) {
//         console.log(a[j])
//     }
// }

// lấy id của các sản phẩm trong list
function getListFood() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(listFood);
    }, 1000);
  });
}

function handlerCash(e) {
  localStorage.setItem(
    "Cash",
    JSON.stringify([...(JSON.parse(localStorage.getItem("Cash")) || []), e])
  );
}

function handlerTotal() {
  const getTotal = JSON.parse(localStorage.getItem("Cash"));

  const total = getTotal.reduce((prev, curr) => {
    return prev + curr;
  }, 0);

  alert(`Total is : ${total} VND`);
}

getListFood().then(function (listFood) {
  var listId = listFood.map(function (listFoods) {
    return listFoods;
  });
  for (i = 0; i < listId.length; i++) {
    console.log(listId[i].id);
  }
});

//  ae khac cmt nhu nay roi add vao nhe
