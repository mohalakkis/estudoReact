let paciente = document.querySelector("#paciete-1"); // entra em paciente 

let peso = paciente.querySelector(".info-peso").textContent; // busca o peso desse paciente
let altura = paciente.querySelector(".info-altura").textContent; // busca a altura 

let calc = peso/(altura*altura); // realiza o calculo

let mostra = document.querySelector("#imc"); // pega 
mostra.textContent = calc;
