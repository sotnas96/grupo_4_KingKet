window.onload = function(){
    let inputUserName = document.querySelector("#nombreUser");
    let inputEmail = document.querySelector("#email");
    let inputPassword = document.querySelector("#contra");
    let inputRepass = document.querySelector('#reContra')
    let inputAvatar = document.querySelector("#avatar");
    let form = document.querySelector("form.formulario");

    let divUserName = document.querySelector("div.login:nth-child(1) :nth-child(3)");
    let divEmail = document.querySelector("div.login:nth-child(2) :nth-child(3)");
    let divPict = document.querySelector("div.is-invalid:nth-child(4)");
    let divPass =  document.querySelector("div.login:nth-child(5) :nth-child(3)");
    let divrePass =  document.querySelector("div.login:nth-child(6) :nth-child(3)")

    inputUserName.addEventListener('change', ()=>{
        if(inputUserName.value.length < 2){
            inputUserName.style.border = '2px solid red'
            inputUserName.style.outline = 'none'
            divUserName.innerHTML = 'Debe tener al menos 2 caracteres'
            
        }else{
            divUserName.innerHTML = ''
            inputUserName.style.border = '2px solid green'
            inputUserName.style.outline = 'none'
        }
    })
    inputEmail.addEventListener('change', ()=>{
        const regExprEmail = /^[\w._#$&%+-]+@[\w.-]+\.[A-Za-z]{2,4}$/;
        let checkEmail = regExprEmail.test(inputEmail.value)
        if(!checkEmail){

            divEmail.innerHTML = 'Ingrese un email valido'
            inputEmail.style.border = '2px solid red'
            inputEmail.style.outline = 'none'

        }else{
            
            divEmail.innerHTML = ''
            inputEmail.style.border = '2px solid green'
            inputEmail.style.outline = 'none'
        }
    });
    let imageName = document.querySelector('.avatarFront')
    let divAvatar = document.querySelector('.avatar1')
    inputAvatar.addEventListener('change', ()=> {
        imageName.innerHTML = inputAvatar.files[0].name;
        const regExpAvatar = /\.(jpg|jpeg|gif|png)$/
        let extentionCheck = regExpAvatar.test(inputAvatar.value);
        if(!extentionCheck){

            divPict.innerHTML = 'Debe subir un archivo tipo jpg-jpeg-gif-png'
            divAvatar.style.border = '2px solid red'
            divAvatar.style.outline = 'none'
            
        }else{
            
            divPict.innerHTML = ''
            divAvatar.style.border = '2px solid green'
            divAvatar.style.outline = 'none'
        };
    });
    const regExpPass = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    inputPassword.addEventListener('change', ()=> {
        let checkPass = regExpPass.test(inputPassword.value);
        if(!checkPass){

            divPass.innerHTML = 'La contrasena debe tener al menos 1 mayuscula, 1 minuscula, 1 numero y 1 caracter especial'
            inputPassword.style.border = '2px solid red'
            inputPassword.style.outline = 'none'
            
        }else{
            
            divPass.innerHTML= ''
            inputPassword.style.border = '2px solid green'
            inputPassword.style.outline = 'none'
        };
    });
    inputRepass.addEventListener('change', ()=> {
        let checkPass = regExpPass.test(inputRepass.value);

        if((inputRepass.value != inputPassword.value) || !checkPass){

            divrePass.innerHTML = 'Las contrasenas deben coincidir'
            inputRepass.style.border = '2px solid red'
            inputRepass.style.outline = 'none'
            
        }else{
            
            divrePass.innerHTML= ''
            inputRepass.style.border = '2px solid green'
            inputRepass.style.outline = 'none'
        };
    })
    form.addEventListener("submit", e => {
        e.preventDefault();
        console.log(i)
        
    })
}
