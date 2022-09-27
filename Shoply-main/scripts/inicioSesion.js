'use strict';

const nombre = document.querySelector('#userName');
const contra = document.querySelector('#userPassword');
const formulario = document.querySelector('form');

formulario.addEventListener('submit',(e) =>{
    e.preventDefault();
    if (validFieldsForm() === -1){
        alert("Iniciando sesión")
    }
});

const validFieldsForm = () =>{
    const values = Object.values(validFields)
    let response = values.findIndex(e => e === false);
    return response;
}

let validFields ={
    nom:false,
    pass:false
}

nombre.addEventListener ('change',function(e){
    const userName = e.target.value;
    const patronNombre = /^([a-zA-ZÀ-ÖØ-öø-ÿ-0-9]{3,25})([\s]?)([a-zA-ZÀ-ÖØ-öø-ÿ]{0,25})$/g;
    validFields.nom = userName.match(patronNombre) ? true : false;
    console.log(Object.values(validFields));
});

contra.addEventListener('change', function(e){
    const password = e.target.value;
    const patronPass = /^([a-zA-Z0-9]{8,})$/g;
    validFields.pass = password.match(patronPass) ? true : false;
    if (validFields.pass === false){
        
        alert("Ingrese una contraseña con mínimo 8 caracteres que contengan mayúsculas, minúsculas y números");
    }
    console.log(Object.values(validFields));
});