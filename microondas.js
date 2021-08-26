/*
EQUIPE:
Alexandre Filho
Joel Jerrys
Henrrique Brumatti
Renato Caldara
Glaydson
Alcinelson

Olá, você foi contratado para executar este projeto. É importante que você analise, entenda o pedido do cliente e desenvolva conforme solicitado. Veja abaixo os requisitos do projeto:

- Precisamos desenvolver um menu para um microondas super veloz, onde teremos 5 opções de comida com seus respectivos tempos pré-definidos. 

      1 - Pipoca – 10 segundos (padrão);
      2 - Macarrão – 8 segundos (padrão);
      3 - Carne – 15 segundos (padrão);
      4 - Feijão – 12 segundos (padrão);
      5 - Brigadeiro – 8 segundos (padrão); 

- O usuário poderá alterar o tempo padrão, aumentando ou diminuindo de acordo com sua vontade. Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
- Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; OK!
- Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente"; OK!
- Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”; OK!
- No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!".
*/

function microondas(prato, tempo){
    switch(prato){
        case 1:
            retornaMensagem(tempo,10)
            break
        case 2:
            retornaMensagem(tempo,8)
            break
        case 3:
            retornaMensagem(tempo,15)
            break
        case 4:
            retornaMensagem(tempo,12)
            break
        case 5:
            retornaMensagem(tempo,8)
            break
        default:
            console.log("Prato inexistente")
            break
    }
}

function retornaMensagem(tempoInserido, tempoPadrao){
    if(tempoInserido >= 3 * tempoPadrao){
        console.log("kabumm")
    } else if(tempoInserido >= 2* tempoPadrao) {
        console.log("a comida queimou.")
    } else if(tempoInserido >= tempoPadrao){
        console.log("Prato pronto, bom apetite!!!")
    } else {
        console.log("tempo insuficiente")
    }
}

microondas(1,8)
microondas(1,10)
microondas(1,15)
microondas(1,20)
microondas(1,25)
microondas(1,30)
microondas(1,35)
microondas(10,1)