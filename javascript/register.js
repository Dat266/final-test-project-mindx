const btnRgister = document.querySelector("#btnregister");
let users = [];
btnRgister.onsubmit = (e) => {
  e.preventDefault();
  const fullName1 = document.getElementById("registerName");
  const email1 = document.getElementById("registerEmail");
  const age1 = document.getElementById("registerAge");
  const pw = document.getElementById("registerPw");
  const cpw = document.getElementById("registerCpw");
  const fullname = fullName1.value;
  const email = email1.value;
  const age = age1.value;
  const password = pw.value;
  const confirmpassword = cpw.value;
  if (fullname.length <= 10)
    return alert("Vui lòng nhập Fullname trên 10 kí tự!");
  if (password.length < 8 && confirmpassword.length < 8)
    return alert("Vui lòng nhập mật khẩu trên 8 kí tự!");
  if (password != confirmpassword) return alert("Mật khẩu không trùng khớp!");
  const exist = users.find((e) => email === e.email);
  if (exist) return alert("Email đã tồn tại!");
  const user = {
    fullname,
    email,
    age,
    password,
  };
  users.push(user);
  alert("Đăng kí thành công!");
  fullName1.value = "";
  email1.valuel = "";
  age1.value = "";
  pw.value = "";
  cpw.value = "";
  fullName1.focus();
  localStorage.setItem("Users", JSON.stringify(users));
  //window.location.pathname = "./login.html";
  console.log(users);
};
