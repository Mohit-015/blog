let Cr = document.querySelector("#Cr");
let popup = document.querySelector("#popup");
let can = document.querySelector("#can");

let fullname = document.querySelector("#fullname");
let Email = document.querySelector("#Email");
let mobile = document.querySelector("#mobile");
let security1 = document.querySelector("#security1");
let security2 = document.querySelector("#security2");
let save = document.querySelector("#save");

Cr.addEventListener("click", () => {
  popup.classList.remove("d-none");
});

can.addEventListener("click", () => {
  popup.classList.add("d-none");
});
save.addEventListener("click", () => {
  newuser = {
    fullname: fullname.value,
    Email: Email.value,
    mobile: mobile.value,
    security1: security1.value,
  };
  let userlist = localStorage.getItem("users");
  userlist = userlist === null ? [] : JSON.parse(userlist);
  let userexist = userlist.find((value) => {
    return value.Email === newuser.Email;
  });
  if (security1.value != security2.value) {
    toasterdanger("Passwords Do Not Match");
    return false;
  }

  if (
    fullname.value == "" ||
    Email.value == "" ||
    mobile.value == "" ||
    security1.value == "" 
  ) {
    toasterdanger("Fill all the fields to continue.");
    return false;
  } else {
    if (userexist === undefined) {
      userlist.push(newuser);
      localStorage.setItem("users", JSON.stringify(userlist));
      toasterdanger("Registration Successful, Login Now");
      popup.classList.add("d-none");
    } else {
      toasterdanger("Can't Register, Try Again");
    }
  }
});

// Login

let luser = document.querySelector("#luser");
let lpass = document.querySelector("#lpass");
let lbtn = document.querySelector("#lbtn");

lbtn.addEventListener("click", () => {
  let username = luser.value;
  let password = lpass.value;

  console.log(username)
  console.log(password)
  let userlist = localStorage.getItem("users");

  userlist = userlist === null ? [] : JSON.parse(userlist);

  let userexist = userlist.findIndex((value) => {
    console.log(value.Email)
    console.log(value.security1)
    return value.Email == username && value.security1 == password;
  });

  if (username == "" || password == "") {
    toasterdanger("Fill all the fields to continue.");
    return false;
  } else {
    if (userexist === -1) {
      toasterdanger("User Not Found, Try Again");
    } else {
      toasterdanger("Logged In Successfully");
      localStorage.setItem("login", userexist);
      window.location.replace("./myfeed.html");
    }
  }
});
