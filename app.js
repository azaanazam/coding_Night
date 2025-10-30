const signupForm = document.getElementById("signup");
const loginForm = document.getElementById("login");
const wel = document.getElementById("wel").style.display = "none"
const btn3 = document.getElementById("btn3");
function toggleForm() {
  if (signupForm.style.display === "none") {
    signupForm.style.display = "flex";
    loginForm.style.display = "none";
    
  } else {
    signupForm.style.display = "none";
    loginForm.style.display = "flex";
  }
}


function Signup() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("signupEmail").value;
  const number = document.getElementById("number").value;
  const password = document.getElementById("signupPassword").value;

  if (!name || !email || !number || !password) {
    alert(" Please fill all fields");
    return;
  }

  const users = JSON.parse(localStorage.getItem("users")) || [];
  users.push({ name, email, number, password });
  localStorage.setItem("users", JSON.stringify(users));

  alert(" SignUp Successful!");
  document.getElementById("name").value = "";
  document.getElementById("signupEmail").value = "";
  document.getElementById("number").value = "";
  document.getElementById("signupPassword").value = "";
  signupForm.style.display = "none";
  wel = document.getElementById("wel").style.display = "block";
  
}

function Login() {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  if (!email || !password) {
    alert(" Please enter email and password");
    return;
  }

  const users = JSON.parse(localStorage.getItem("users")) || [];
  const match = users.find(u => u.email === email && u.password === password);

  if (match) {
    alert(" Login Successful!");
  document.getElementById("name").value = "";
  document.getElementById("loginEmail").value = "";
  document.getElementById("number").value = "";
  document.getElementById("loginPassword").value = "";
  loginForm.style.display = "none";
  wel = document.getElementById("wel").style.display = "block";
  } else {
    alert(" Invalid Email or Password");
  }


   
}


function btn3(){
      loginForm.style.display = "block";
  wel = document.getElementById("wel").style.display = "none";
    

}