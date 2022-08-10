//login
const userLogin = getLocal("userLogin");
if (userLogin) {
  const deleteE = document.getElementById("delete");
  const newElement = document.createElement("p");
  const newText = document.createTextNode(`Chào mừng ${userLogin.fullname}`);
  newElement.appendChild(newText);
  deleteE.appendChild(newElement);
  const button = document.createElement("button");
  button.style.width = "90px";
  button.style.cursor = "pointer";
  button.style.borderRadius = "7px";
  const text = document.createTextNode("Đăng xuất");
  button.className = "test";
  button.appendChild(text);
  deleteE.append(button);
  const newTest = document.querySelector(".test");
  newTest.addEventListener("click", handlerLogout);
}
//logout
function handlerLogout() {
  const headerIcon = document.querySelector(".header__icons");
  const child = document.getElementById("delete");
  localStorage.removeItem("userLogin");
  headerIcon.removeChild(child);
  alert(" Bạn đã đăng xuất!");
  renderApp();
}
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
    id: 1,
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
    id: 2,
  },
  {
    image: "../img/product_3.png",
    title: "Salad tây âu",
    description:
      "Là món ăn nhanh rất được ưa chuộng vào mỗi buổi sáng tại châu âu",
    money: 290000,
    fullstar:
      '<i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i>',
    halfstar: '<i class="fa-solid fa-star-half-stroke"></i>',
    id: 3,
  },
  {
    image: "../img/product_4.png",
    title: "Humberger hoàng gia",
    description:
      "Là thức ăn nhanh có từ những năm thế chiến thứ 2 còn đươc con người lưu giữ tới ngày nay ",
    money: 999000,
    fullstar:
      '<i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i>',
    halfstar: '<i class="fa-solid fa-star-half-stroke"></i>',
    id: 4,
  },
  {
    image: "../img/product_5.png",
    title: "Món ăn mắc ca ca",
    description:
      "Cực phẩn trong làng ẩm thực trung hoa, hội tụ đầy đủ hương vị dân tộc",
    money: 99000,
    fullstar:
      '<i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i>',
    halfstar: '<i class="fa-solid fa-star-half-stroke"></i>',
    id: 5,
  },
  {
    image: "../img/product_6.png",
    title: "Cá sốt ",
    description: "Yêu ngay từ cái nhìn đầu tiên, vị cá sốt thơm ngon đặc biệt!",
    money: 650000,
    fullstar:
      '<i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i>',
    halfstar: '<i class="fa-solid fa-star-half-stroke"></i>',
    id: 6,
  },
];
function renderApp() {
  var cartHtml = listFood
    .map((food) => {
      return `
        <div class="manh__food">
            <img src="${food.image}" alt="" class="manh__food-img">
            <div class="manh__food-star">
                ${food.fullstar}
                ${food.halfstar}
            </div>
           <div>
            <h2 class="manh__food-title">${food.title}</h2>
            <p class="manh__food-description">${food.description}</p>
            <p class="manh__food-money"><span>${food.money}</span> VND</p>
            <input class="input qty-input" id=${food.id}  value="0" type="number"/>
            </div>
            <button class="addToCart" onclick="addToCart(${food.id})">Đặt hàng</button>
        </div>

                `;
    })
    .join("");
  const foodDiv = document.getElementById("manh-js");
  foodDiv.innerHTML = cartHtml;
}
renderApp();
// Thêm sản phẩm vào giỏ hàng
const imgEmty = document.getElementById("header__cart-no-cart-img");
const renderCart = (data) => {
  const total = document.getElementById("total");
  const cart = document.getElementById("testCart");
  const h3 = document.querySelector(".footer-item");
  const cartData = getLocal("ListFoods") || [];

  const html = cartData
    .map((list) => {
      return `
  <li class="header__cart-item">
    <img src="${list.image}" alt="" class="header__cart-img">
    <div class="header__cart-item-head">
        <div class="header__cart-item-info">
            <h4 class="header__cart-item-name">${list.title}</h4>
            <div class="header__cart-item-wrap">
                <span class="header__cart-item-price">${list.money} VND</span>
                <span class="header__cart-item-multiply">x</span>
                <span class="header__cart-item-qnt">${list.qty}</span>
            </div>
        </div>
        <div class="header__cart-item-body">
            <span class="header__cart-item-discription">
                Phân hoại: Food
            </span>
            <button class="delete" onclick="handlerDelete(${list.id})">Xóa</button>
        </div>
    </div>
  </li>
  `;
    })
    .join("");

  const handleTotal = cartData.reduce((prev, curr) => {
    return (prev + curr.money) * curr.qty;
  }, 0);
  imgEmty.style.display = cartData.length !== 0 ? "none" : "block";
  h3.style.display = cartData.length === 0 ? "none" : "flex";
  total.innerHTML = handleTotal;
  cart.innerHTML = html;
};
function handlerDelete(id) {
  signleDeleteCartLocal("ListFoods", +id);
  renderCart();
}
function getLocal(key) {
  return JSON.parse(localStorage.getItem(key));
}
function setLocal(key, value) {
  const oldData = getLocal(key) || [];
  localStorage.setItem(key, JSON.stringify([...oldData, value]));
}
function signleDeleteCartLocal(key, id) {
  const oldData = getLocal(key) || [];
  localStorage.setItem(
    key,
    JSON.stringify(oldData.filter((data) => data.id !== id))
  );
}
function updateCartLocal(key, id, newData) {
  const oldData = getLocal(key) || [];
  localStorage.setItem(
    key,
    JSON.stringify(oldData.map((data) => (data.id === id ? newData : data)))
  );
}
const addToCart = (id) => {
  const userLogin = getLocal("userLogin");
  if (userLogin) {
    const qtyInput = document.querySelectorAll(".qty-input");
    const targetFood = listFood.find((food) => food.id === +id);
    const qty = parseInt([...qtyInput].find((input) => input.id == id).value);
    if (qty == 0) return alert("Vui lòng nhập số lượng");
    const localItem = getLocal("ListFoods")?.find((food) => food.id === +id);
    if (localItem) {
      updateCartLocal("ListFoods", +id, {
        ...localItem,
        qty: localItem.qty + qty,
      });
    } else {
      setLocal("ListFoods", { ...targetFood, qty });
    }
    renderCart();
  } else {
    return alert("Vui lòng đăng nhập");
  }
};

function handlerCash() {
  localStorage.removeItem("ListFoods");
  renderCart();
  alert("Thanh toán thành công!");
}
