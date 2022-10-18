window.onload = function(){
    //capturando nodos
    let inputOrganizador = document.querySelector("#organizador");
    let inputCompetencia = document.querySelector("#competencia");
    inputCompetencia.disabled = true;
    let inputOponentes = document.querySelector("#oponentes");
    inputOponentes.disabled = true;
    let inputLocation = document.querySelector("#location");
    inputLocation.disabled = true;
    let inputDate = document.querySelector("#date");
    inputDate.disabled = true;
    let inputDescripcionEvento = document.querySelector("#descripcionEvento");
    inputDescripcionEvento.disabled = true;
    let inputCapacidad = document.querySelector("#precioEvento");
    inputCapacidad.disabled = true;
    let inputPrecioEvento = document.querySelector("#precioEvento");
    inputPrecioEvento.disabled = true;

    let form = document.querySelector("form.formulario");
    
    //capturando divs donde se escriben los mensajes de error desde el front
    let divOrganizador = document.querySelector("div.newProduct:nth-child(1) :nth-child(3)");
    let divCompetencia = document.querySelector("div.newProduct:nth-child(2) :nth-child(3)");
    let divOponentes = document.querySelector("div.newProduct:nth-child(3) :nth-child(3)");
    let divLocation = document.querySelector("div.newProduct:nth-child(4) :nth-child(3)");
    let divDate = document.querySelector("div.newProduct:nth-child(5) :nth-child(3)");    
    let divDescripcionEvento = document.querySelector("div.newProduct:nth-child(7) :nth-child(3)");
    let divCapacidad = document.querySelector("div.newProduct:nth-child(9) :nth-child(3)");

    const organizadores = ['FIFA','NBA','ATP'];
    inputOrganizador.addEventListener('change', ()=>{
        let checkOrganizador = organizadores.includes(inputOrganizador.value);
        if(!checkOrganizador){
            inputOrganizador.style.border = '2px solid red';
            inputOrganizador.style.outline = 'none';
            divOrganizador.style.fontSize = '10px';
            divOrganizador.innerHTML = 'ingrese FIFA / NBA / ATP';            
        }else{
            divOrganizador.innerHTML = '';
            inputOrganizador.style.border = '2px solid green';
            inputOrganizador.style.outline = 'none';
            inputCompetencia.disabled = false

        };  
    })

    const competencia = ['Word cup Qatar 2022','Futbol de Primera Division','Wimbledon','NBA'];
    inputCompetencia.addEventListener('change', ()=>{
        let checkCompetencia = competencia.includes(inputCompetencia.value);
        if(!checkCompetencia){
            inputCompetencia.style.border = '2px solid red';
            inputCompetencia.style.outline = 'none';
            divCompetencia.style.fontSize = '10px';
            divCompetencia.innerHTML = 'Ingrese NBA / Word cup Qatar 2022 / Futbol de Primera Division / Futbol de Primera Division';            
        }else{
            divCompetencia.innerHTML = '';
            inputCompetencia.style.border = '2px solid green';
            inputCompetencia.style.outline = 'none';
            inputOponentes.disabled = false
        };  
    })
  
    inputOponentes.addEventListener('change', ()=>{
        let oponentes=inputOponentes.value;
        let checkOponentes=oponentes.includes(' vs ')
        if(!checkOponentes){
            inputOponentes.style.border = '2px solid red';
            inputOponentes.style.outline = 'none';
            divOponentes.style.fontSize = '10px';
            divOponentes.innerHTML = 'Ingrese: Equipo1 vs Equipo2';            
        }else{
            divOponentes.innerHTML = '';
            inputOponentes.style.border = '2px solid green';
            inputOponentes.style.outline = 'none';
            inputLocation.disabled = false
        };  
    })

    inputLocation.addEventListener('change', ()=>{
        if(inputLocation.value.length<=4){
            inputLocation.style.border = '2px solid red';
            inputLocation.style.outline = 'none';
            divLocation.style.fontSize = '10px';
            divLocation.innerHTML = 'Ingrese correctamente';            
        }else{
            divLocation.innerHTML = '';
            inputLocation.style.border = '2px solid green';
            inputLocation.style.outline = 'none';
            inputDate.disabled = false
        };  
    })

    inputDate.addEventListener('change', ()=>{
        let fechaActual= new Date();
        let dia=fechaActual.getDate();
        let mes=fechaActual.getMonth();
        let anio=fechaActual.getFullYear();
        
        let fechaParaComparar= `${anio}-${mes}-${dia}`	        
        let fechaAsignada=inputDate.value;
        //falta hacer la comparacion para que no se pueda cargar una fecha inferior a la actual
        
        if(inputDate.value==""){
            inputDate.style.border = '2px solid red';
            inputDate.style.outline = 'none';
            divDate.style.fontSize = '10px';
            divDate.innerHTML = 'Seleccione una fecha';            
        }else{
            divDate.innerHTML = '';
            inputDate.style.border = '2px solid green';
            inputDate.style.outline = 'none';
            inputDescripcionEvento.disabled = false
        };  
    })

    inputDescripcionEvento.addEventListener('change', ()=>{
        if(inputDescripcionEvento.value.length<20){
            inputDescripcionEvento.style.border = '2px solid red';
            inputDescripcionEvento.style.outline = 'none';
            divDescripcionEvento.style.fontSize = '10px';
            divDescripcionEvento.innerHTML = 'Ingrese descripcion de al menos 20 caracteres';            
        }else{
            divDescripcionEvento.innerHTML = '';
            inputDescripcionEvento.style.border = '2px solid green';
            inputDescripcionEvento.style.outline = 'none';
            inputCapacidad.disabled = false
        };  
    })

    inputCapacidad.addEventListener('change', ()=>{
        let capacidad=Number(inputCapacidad.value);
           
        if(!capacidad){
            inputCapacidad.style.border = '2px solid red';
            inputCapacidad.style.outline = 'none';
            divCapacidad.style.fontSize = '10px';
                
        }else{
            divCapacidad.innerHTML = '';
            inputCapacidad.style.border = '2px solid green';
            inputCapacidad.style.outline = 'none';
            inputPrecioEvento.disabled = false
        };  
    })



    
    




    form.addEventListener("submit", e => {
        let errors = []
        if(!checkOrganizador){
            errors.push('Ingrese correctamente el Organizador')
        }
        if(!checkCompetencia){
            errors.push('Ingrese correctamente su competencia')
        }
        if(!checkOponentes){
            errors.push('Ingrese correctamente los oponentes')
        }
        if(inputDescripcionEvento.value.length<20){
            errors.push('Ingrese correctamente su descripcion')
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

