window.onload = function(){
    //capturando nodos
    let inputEmail = document.querySelector("#email");
    let inputPassword = document.querySelector("#contrasena");
    inputPassword.disabled = true;
    let form = document.querySelector("form.formulario");
    let pIncorrectForm  = document.querySelector('p.is-invalid')

    
    //capturando divs donde se escriben los mensajes de error desde el front       
    let divEmail = document.querySelector("div.login:nth-child(1) :nth-child(3)");
    let divPass =  document.querySelector("div.login:nth-child(2) :nth-child(3)");
 
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



    inputPassword.addEventListener('change', ()=> {
        if(inputPassword.value == ''){

            divPass.style.fontSize = '10px';
            divPass.innerHTML = 'Debe agregar su contrasena';
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

        
        if(inputPassword.value == ''){
            errors.push('passError')
        }
  
        if(errors.length > 0){
            e.preventDefault();
            pIncorrectForm.innerHTML= 'Revise sus datos'
        }else{
            pIncorrectForm.innerHTML = ''
        }
    })
}
