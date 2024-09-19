//sign up

let listUser = [];
if (localStorage.getItem("users") !== null) {
  listUser = JSON.parse(localStorage.getItem("users"));
}

const validateEmail = (email) => {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
};

// document.getElementById("signUp").addEventListener("click", function () {
//   const signUp_name = document.getElementById("signUp-name").value;
//   const signUp_email = document.getElementById("signUp-email").value;
//   const signUp_password = document.getElementById("signUp-password").value;
//
//   //validate
//
//   if (signUp_name === "" || signUp_email === "" || signUp_password === "") {
//     alert("Yêu cầu nhập đầy đủ thông tin");
//     return;
//   }
//   if (signUp_name.length < 2) {
//     alert("Tên chưa hợp lệ");
//     return;
//   }
//   if (validateEmail(signUp_email) !== true) {
//     alert("Email chưa đúng định dạng");
//     return;
//   }
//   if (signUp_password.length < 6) {
//     alert("Password chưa đủ mạnh");
//     return;
//   }
//
//   const newUser = {
//     name: signUp_name,
//     email: signUp_email,
//     password: signUp_password,
//   };
//
//   let isExistEmail = false;
//
//   for (let user of listUser) {
//     if (user.email === signUp_email) {
//       alert("Email đã tồn tại");
//       isExistEmail = true;
//     }
//   }
//   if (isExistEmail === false) {
//     listUser.push(newUser);
//     localStorage.setItem("users", JSON.stringify(listUser));
//     alert("Đăng ký thành công");
//     window.location.href = "dangnhap.html";
//   }
// });


document.getElementById("signUp").addEventListener("click", async function () {
  const signUp_name = document.getElementById("signUp-name").value;
  const signUp_email = document.getElementById("signUp-email").value;
  const signUp_password = document.getElementById("signUp-password").value;

  if (signUp_name === "" || signUp_email === "" || signUp_password === "") {
    alert("Yêu cầu nhập đầy đủ thông tin");
    return;
  }
  if (signUp_name.length < 2) {
    alert("Tên chưa hợp lệ");
    return;
  }
  if (!validateEmail(signUp_email)) {
    alert("Email chưa đúng định dạng");
    return;
  }
  if (signUp_password.length < 6) {
    alert("Password chưa đủ mạnh");
    return;
  }

  const response = await fetch('/api/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: signUp_name,
      email: signUp_email,
      password: signUp_password
    })
  });

  if (response.ok) {
    alert("Đăng ký thành công");
    window.location.href = "dangnhap.html";
  } else {
    const message = await response.text();
    alert(message);
  }
});



//sign in

// document.getElementById("signIn").addEventListener("click", function () {
//   const signIn_email = document.getElementById("signIn-email").value;
//   const signIn_password = document.getElementById("signIn-password").value;
//   let isLoginSuccess = false;
//
//   for (let user of listUser) {
//     if (user.email === signIn_email && user.password === signIn_password) {
//       alert("Đăng nhập thành công");
//       isLoginSuccess = true;
//       // Sử dụng setTimeout để chuyển trang sau khi alert đã hiển thị
//       setTimeout(function () {
//         window.location.href = "trangchu.html";
//       }, 0);
//       break;
//     }
//   }
//   if (isLoginSuccess === false) {
//     alert("Đăng nhập không thành công");
//   }
// });
//
// const signUpButton = document.getElementById("signUp-overlay-right");
// const signInButton = document.getElementById("signIn-overlay-left");
// const container = document.getElementById("container");
//
// signUpButton.addEventListener("click", () => {
//   container.classList.add("right-panel-active");
// });
//
// signInButton.addEventListener("click", () => {
//   container.classList.remove("right-panel-active");
// });


document.getElementById("signIn").addEventListener("click", async function () {
  const signIn_email = document.getElementById("signIn-email").value;
  const signIn_password = document.getElementById("signIn-password").value;

  const response = await fetch('/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: signIn_email,
      password: signIn_password
    })
  });

  if (response.ok) {
    const data = await response.json();
    localStorage.setItem('token', data.token);
    alert("Đăng nhập thành công");
    window.location.href = "trangchu.html";
  } else {
    const message = await response.text();
    alert(message);
  }
});
