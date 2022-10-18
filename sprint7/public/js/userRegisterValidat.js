window.onload = function(){
    //capturando nodos
    let inputUserName = document.querySelector("#nombreUser");
    let inputEmail = document.querySelector("#email");
    inputEmail.disabled = true;
    let inputPassword = document.querySelector("#contra");
    inputPassword.disabled = true;
    let inputRepass = document.querySelector('#reContra')
    inputRepass.disabled = true;
    let inputAvatar = document.querySelector("#avatar");
    inputAvatar.disabled = true;
    let form = document.querySelector("form.formulario");
    
    //capturando divs donde se escriben los mensajes de error desde el front
    let divUserName = document.querySelector("div.login:nth-child(1) :nth-child(3)");    
    let divEmail = document.querySelector("div.login:nth-child(2) :nth-child(3)");
    let divPict = document.querySelector("div.is-invalid:nth-child(4)");
    let divPass =  document.querySelector("div.login:nth-child(5) :nth-child(3)");
    let divrePass =  document.querySelector("div.login:nth-child(6) :nth-child(3)");

    inputUserName.addEventListener('change', ()=>{
        if(inputUserName.value.length < 4){
            inputUserName.style.border = '2px solid red';
            inputUserName.style.outline = 'none';
            divUserName.style.fontSize = '10px';
            divUserName.innerHTML = 'Debe tener al menos 4 caracteres';
            
        }else{
            inputEmail.disabled = false
            divUserName.innerHTML = '';
            inputUserName.style.border = '2px solid green';
            inputUserName.style.outline = 'none';

        }
    })
    const regExprEmail = /^[\w._#$&%+-]+@[\w.-]+\.[A-Za-z]{2,4}$/;
    inputEmail.addEventListener('change', ()=>{
        let checkEmail = regExprEmail.test(inputEmail.value);
        if(!checkEmail){

            divEmail.style.fontSize = '10px';
            divEmail.innerHTML = 'Ingrese un email valido';
            inputEmail.style.border = '2px solid red';
            inputEmail.style.outline = 'none';


        }else{
            divAvatar.style.border = '2px solid blue'
            inputAvatar.disabled = false
            divEmail.innerHTML = '';
            inputEmail.style.border = '2px solid green';
            inputEmail.style.outline = 'none';

        }
    });
    let imageName = document.querySelector('.avatarFront');
    let divAvatar = document.querySelector('.avatar1');
    divAvatar.style.marginBottom = '0px';

    const regExpAvatar = /\.(jpg|jpeg|gif|png)$/;
    inputAvatar.addEventListener('change', ()=> {
        let extentionCheck = regExpAvatar.test(inputAvatar.value);
        imageName.innerHTML = inputAvatar.files[0].name;
        if(!extentionCheck){

            divPict.style.fontSize = '10px';
            divPict.style.marginTop = '2px';
            divPict.innerHTML = 'Debe subir un archivo tipo jpg-jpeg-gif-png';
            divAvatar.style.border = '2px solid red';
            divAvatar.style.outline = 'none';
            
        }else{
            
            inputPassword.disabled = false
            divPict.innerHTML = '';
            divAvatar.style.border = '2px solid green';
            divAvatar.style.outline = 'none';
        };
    });
    const regExpPass = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    inputPassword.addEventListener('change', ()=> {
        let checkPass = regExpPass.test(inputPassword.value);
        console.log(inputPassword.value);
        console.log(checkPass)
        if(!checkPass){

            divPass.style.fontSize = '10px';
            divPass.innerHTML = 'minimo 8 caracteres con al menos 1 mayus, 1 minus, 1 numero y 1 caracter especial';
            inputPassword.style.border = '2px solid red';
            inputPassword.style.outline = 'none';
            inputRepass.disabled = true;
            
        }else{
            inputRepass.disabled = false
            divPass.innerHTML= '';
            inputPassword.style.border = '2px solid green';
            inputPassword.style.outline = 'none';
            inputRepass.disabled = false;
        };
    });
    inputRepass.addEventListener('change', ()=> {
        
        if((inputRepass.value != inputPassword.value)){

            divrePass.style.fontSize = '10px';
            divrePass.innerHTML = 'Las contrasenas deben coincidir';
            inputRepass.style.border = '2px solid red';
            inputRepass.style.outline = 'none';
            
        }else{
            divrePass.innerHTML= '';
            inputRepass.style.border = '2px solid green';
            inputRepass.style.outline = 'none';
        };
    })
    form.addEventListener("submit", e => {
        let errors = []
        if(inputUserName.value.length < 4){
            errors.push('userNameError')
        }
        let checkEmail = regExprEmail.test(inputEmail.value);

        if(!checkEmail){
            errors.push('emailError')
        }
        let extentionCheck = regExpAvatar.test(inputAvatar.value);

        if(!extentionCheck){
            errors.push('avatarError')
        }
        let checkPass = regExpPass.test(inputPassword.value);
        
        if(!checkPass){
            errors.push('passError')
        }
        if(inputRepass.value != inputPassword.value){
            errors.push('rePassError')
        }
        let pIncorrectForm  = document.querySelector('p.is-invalid')
        if(errors.length > 0){
            e.preventDefault();
            pIncorrectForm.innerHTML= 'Complete el formulario'
        }else{
            pIncorrectForm.innerHTML = ''
        }
    })
}
