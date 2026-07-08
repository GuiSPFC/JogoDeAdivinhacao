function calcularpeso(){

    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura").value);

    let calculo = altura * altura;
    let imc = peso / calculo;

    let classificacao = "";

    if(imc < 18.5){
        classificacao = "Abaixo do Peso";
    } else if(imc<25){
        classificacao = "Peso normal";
    } else {
        classificacao = "Sobrepeso";
    }

    document.getElementById("resultado").textContent = "Seu IMC: " + imc.toFixed(2) + " ("+ classificacao +")";
}

