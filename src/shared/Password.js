export const passwordCheck = (pwd) => {
    let regPass = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;
  
    return regPass.test(pwd);
  }