const numeroaleatorio = Math.floor(Math.random() * 100) + 1;
let acertou = false;
let tentativaAtual = 1;
const totalTentativas = 4;

function botao(){
    if(acertou) return;

    //Pega o valor de chute do usuário
    const numero = parseInt(document.getElementById("chute").value);

    document.getElementById("mensagemdeerro").innerText = "";
    document.getElementById("tentativaerrada").innerText = "";
    document.getElementById("tentativacerta").innerText = "";
    document.getElementById("dicas").innerText = "";
    document.getElementById("tentativasrestantes").innerText = "";
    document.getElementById("tentativasesgotadas").innerText = "";
    document.getElementById("parabens").innerText = "";

    //Verificação de número
    if(numero < 1 || numero > 100){
        document.getElementById("mensagemdeerro").innerText = "Número inválido, por favor insera um número de 1 a 100"
        return;
    }

    //Calcula as chances restantes
    const restos = totalTentativas -tentativaAtual;

    //Se a resposta for certa
    if(numero === numeroaleatorio){
        document.getElementById("tentativacerta").innerText = "O número digitado foi " + numero;
        document.getElementById("parabens").innerText = "Parabéns, você conseguiu adivinhar o número que eu estava pensando!! ";
        acertou = true;
    }
    //Se a resposta for errada
    else if(tentativaAtual < totalTentativas){
        document.getElementById("tentativaerrada").innerText = "O número digitado foi " + numero;
        document.getElementById("tentativasrestantes").innerText = "Você ainda tem " + restos + " tentativas restantes";
        if(numero < numeroaleatorio){
            document.getElementById("dicas").innerText = "Errou, mas aqui vai uma dica, o número que estou pensando é MAIOR que o digitado";
        }
        else{
            document.getElementById("dicas").innerText = "Errou, mas aqui vai uma dica, o número que estou pensando é MENOR que o digitado";
        }
        tentativaAtual++;
    }
    //Se o usuário gastar todas as tentativas
    else{
        document.getElementById("tentativaerrada").innerText = "O número digitado foi " + numero;
        document.getElementById("tentativasesgotadas").innerText = "Suas chances acabaram, o número que eu estava pensando era " + numeroaleatorio;
        acertou = true;
    }
}