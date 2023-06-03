//회원가입 관련 js
document.getElementById("signup-form") = function check() {
  //signup.ejs에 form한 정보 가져오기
  let email = doucument.getElementById("email");
  let name = doucument.getElementById("name");
  let password = doucument.getElementById("password");
  let passwordCheck = doucument.getElementById("passwordCheck");


  //이메일 오류
  if (email.includes("@")) {
    let emailId = email.split("@")[0];
    let emailServer = email.split("@")[1];
    //이메일 공백 오류
    if (emailId === "" || emailServer === "") {
      document.getElementById("emailError").innerHTML =
        "이메일이 올바르지 않습니다.";
      return false;
    } else {
      document.getElementById("emailError").innerHTML = "";
    }
  }
  //이메일 @ 오류
  else {
    document.getElementById("emailError").innerHTML =
      "이메일이 올바르지 않습니다.";
    return false;
  }

  //이름 오류
  if (name === "") {
    document.getElementById("nameError").innerHTML =
      "이름이 올바르지 않습니다.";
    return false;
  } else {
    document.getElementById("nameError").innerHTML = "";
  }

  //비밀번호 오류
  if (password !== passwordCheck) {
    document.getElementById("passwordError").innerHTML = "";
    document.getElementById("passwordCheckError").innerHTML =
      "비밀번호가 동일하지 않습니다.";
    return false;
  } else {
    document.getElementById("passwordError").innerHTML = "";
    document.getElementById("passwordCheckError").innerHTML = "";
  }
  //비밀번호 공백
  if (password === "") {
    document.getElementById("passwordError").innerHTML =
      "비밀번호를 입력해주세요.";
    return false;
  } else {
    document.getElementById("passwordError").innerHTML = "";
  }
  //비밀번호 확인 공백
  if (passwordCheck === "") {
    document.getElementById("passwordCheckError").innerHTML =
      "비밀번호를 다시 입력해주세요.";
      return false;
  } else {
    document.getElementById("passwordCheckError").innerHTML = "";
  }

  return true;
};
