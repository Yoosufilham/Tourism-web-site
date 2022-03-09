//title
console.log("Tourism app By Yoosuf Ilham");

//Menu
function toggleMobileMenu(menu) {
  menu.classList.toggle('open');
}

//Login function
function validate() {
  var userName = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  
  if (userName === "") {
    alert("Enter Username ❗");
  }
  if (password === "") {
    alert("Enter Password ❗");
  }
  if (password === "123") {
    alert("Login Successful");
    window.open('/index.html')
  }
  if (password !== "123") {
    alert("Login Failed ❗");
  }
  else{
    alert("Login Failed ❗");
  }
}


//book function
function validation() {
  var bookEmail = document.getElementById("emaill").value;
  var placeName = document.getElementById("goto").value;
  var numberGuests = document.getElementById("howMany").value;
  var arrive = document.getElementById("arrive").value;
  var departure = document.getElementById("leave").value;
  
  if (bookEmail === "") {
    alert("Enter Email ");
  }
  if (placeName === "") {
    alert("Enter Place Name ");
  }
  else{
    alert("Your Trip for " + placeName + ' on ' + arrive + ' is booked we have sent you a email for your confirmation 🙂');
    window.open("/index.html");
    console.log("Your Trip for " + placeName + ' on ' + arrive + ' is booked we have sent you a email for your confirmation 🙂')
  }
}
