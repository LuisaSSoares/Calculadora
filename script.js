const display = document.getElementById('display') //const que coleta o id display no HTML

function appendCharacter(char) { //funçao de inserir caracteres
    const operatorsAndPoint = ['+','-', '*', '/', '.'] //const array que coleta operações e o ponto decimal, pois ambos não podem ser digitados mais de uma vez e antes de inserir um número.
    const lastChar = display.innerText.slice(-1) //const que coleta o último caractere do display (o slice retorna esse valor)

    if (display.innerText == '0') { //condição quando for 0 no display
        if (!operatorsAndPoint.includes(char)) { // se o caractere não tiver incluso no array, o caractere será incluso no display. Isso serve para não começar com uma operação ou ponto decimal. 
            display.innerText = char;
        }
    } else { //se não, se o caractere não tiver incluso no array (ou seja, se forem números), mas o último caractere digitado estiver incluso nesse array, poderei digitar mais de um número nesse display. Isso serve para evitar a repetição do ponto decimal e operadores matemáticos.
        if (!(operatorsAndPoint.includes(char) && operatorsAndPoint.includes(lastChar))) {
            display.innerText += char;
        }
    }
}
function clearDisplay(){ //função para deletar o que foi inserido no display e voltar ao valor 0 quando eu clicar em "C"
    display.innerText = '0' 
}

function calculate(){ //função para testar e avaliar a expressão digitada e fazer o cálculo, e caso não funcionar, apresetar que seu erro.
    try{
        display.innerText = eval(display.innerHTML)
    } catch{
        display.innerText = Error
    }
}

