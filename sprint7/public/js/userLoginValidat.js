window.onload = function(){
    //capturando nodos
    let inputEmail = document.querySelector("#email");
    let inputPassword = document.querySelector("#contrasena");
    inputPassword.disabled = true;
    let form = document.querySelector("form.formulario");
    
    //capturando divs donde se escriben los mensajes de error desde el front       
    let divEmail = document.querySelector("div.login:nth-child(1) :nth-child(3)");
    let divPass =  document.querySelector("div.login:nth-child(1) :nth-child(3)");
 
    const regExprEmail = /^[\w._#$&%+-]+@[\w.-]+\.[A-Za-z]{2,4}$/;
    inputEmail.addEventListener('change', ()=>{
        let checkEmail = regExprEmail.test(inputEmail.value);
        
        if(!checkEmail){
            divEmail.style.fontSize = '10px';
            divEmail.innerHTML = 'Ingrese un email valido';
            inputEmail.style.border = '2px solid red';
            inputEmail.style.outline = 'none';


        }else{
            inputPassword.disabled = false
            divEmail.innerHTML = '';
            inputEmail.style.border = '2px solid green';
            inputEmail.style.outline = 'none';
        }
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
                   
        }else{
            divPass.innerHTML= '';
            inputPassword.style.border = '2px solid green';
            inputPassword.style.outline = 'none';
        };
    });

    
    form.addEventListener("submit", e => {
        let errors = []

        let checkEmail = regExprEmail.test(inputEmail.value);

        if(!checkEmail){
            errors.push('emailError')
        }

        let checkPass = regExpPass.test(inputPassword.value);
        
        if(!checkPass){
            errors.push('passError')
        }
  
        let pIncorrectForm  = document.querySelector('p.is-invalid')
        if(errors.length > 0){
            e.preventDefault();
            pIncorrectForm.innerHTML= 'Revise sus datos'
        }else{
            pIncorrectForm.innerHTML = ''
        }
    })
}
