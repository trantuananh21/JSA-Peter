function send02() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var password02 = document.getElementById('password_again').value;
    console.log('Email:' + ' ' + email);
    console.log('Mật khẩu:' + ' ' + password);
    console.log('Xác nhận lại mật khẩu:' + ' ' + password02);
}


function validateForm2() {
  let x = document.forms["myForm02"]["email"].value;
  let y = document.forms["myForm02"]["password"].value;
  let z = document.forms["myForm02"]["password_again"].value;

  if (x == '') {
      alert("Bạn phải điền email của mình vào form");
      return false;
  } else  if (y == '') {
      alert("Bạn phải điền mật khẩu của mình vào form");
      return false;
  } else  if (z != y || z == '') {
      alert("Xác nhận lại mật khẩu sai ");
      return false;
  } 
}
