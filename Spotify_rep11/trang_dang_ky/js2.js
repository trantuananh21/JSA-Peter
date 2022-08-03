function send () {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var name = document.getElementById('name').value;
    var day = document.getElementById('day').value;
    var month = document.getElementById('month').value;
    var year = document.getElementById('year').value;
    var gender = document.querySelector("input[name='gender']:checked").value;
    console.log('Email:' + ' ' + email);
    console.log('Mật khẩu:' + ' ' + password);
    console.log('Họ và tên:' + ' ' + name);
    console.log('Ngày sinh:' + ' ' + day);
    console.log('Tháng sinh:' + ' ' + month);
    console.log('Năm sinh:' + ' ' + year);
    console.log('Giới tính:' + ' ' + gender);
}

function validateForm() {
  let x = document.forms["myForm"]["email"].value;
  let y = document.forms["myForm"]["password"].value;
  let a = document.forms["myForm"]["name"].value;
  let z = document.forms["myForm"]["gender"].value;

  if (x == '') {
      alert("Bạn phải điền email của mình vào form");
      return false;
  } else  if (y == '') {
      alert("Bạn phải điền mật khẩu của mình vào form");
      return false;
  } else  if (a == '') {
    alert("Bạn phải điền tên của mình vào form ");
    return false;
  } else   if (z == '') {
      alert("Bạn phải chọn giới tính của mình ");
      return false;
  }
}