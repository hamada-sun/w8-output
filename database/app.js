

(() => {

  const initialEmail = localStorage.getItem('E-mail');
  const initialPassword = localStorage.getItem('Password');

  let email = document.getElementById('email');
  let pass = document.getElementById('pass');

  email.value = initialEmail;
  pass.value = initialPassword;

  function buttonClick(){
    // msg.innerText = '登録アドレスは' + email.value + 'パスワードは' + pass.value +'ですね';
    // console.log(email.value, pass.value);

    if(('localStorage' in window) && (window.localStorage !== null)){
      localStorage.setItem('E-mail', email.value);
      localStorage.setItem('Password', pass.value);

    } else {
      return;
    }
  }

  // let msg = document.getElementById('Page_msg');

  let signInButton = document.getElementById('signIn');
  signInButton.addEventListener('click', buttonClick);


})();

