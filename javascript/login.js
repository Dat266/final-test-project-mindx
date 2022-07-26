const btnLogin = document.getElementById("btnlogin");

btnLogin.onsubmit = (e) => {
  e.preventDefault();
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  const data = JSON.parse(localStorage.getItem("Users"));

  const handleValidate = data.find(
    (user) => user.email === email && user.password === password
  );
  if (!handleValidate) return alert("Vui lòng kiểm tra lại!");

  alert("Đăng nhập thành công!");
};
