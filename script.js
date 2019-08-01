let arr = []
let analise = document.querySelector('div#analise')

function adicionar(){
    let num = document.querySelector('input#num1')
    let display = document.querySelector('select#display')
    let n = Number(num.value)
    
    if (num.value.length == 0){ // Checa caixa vazia
        alert('[ERRO] Digite um número')

    }else if (arr.indexOf(n) > -1){     // Checa se o número adicionado já está no array
        alert('[ERRO] Número já adicionado')

    }else if (n >100 || n < 0){ // Checa se está entre 1 e 100
            alert('[ERRO] Adicione um número entre 1 e 100')
    
    }else {

        var opt = document.createElement('option')
        display.appendChild(opt)

        opt.innerHTML = `Valor ${n} adicionado`
        analise.innerHTML = ''
       
        num.value=''   
        num.focus()

        addToArray(n)
        
    }   
}

function addToArray(n) {  //Adiciona o número inserido no fim da array
    arr.push(n)
}

function analisar(){
    if(arr.length == 0 ){
        alert('Adicione algum número')

    }else{
        
        let newArr = arr.sort(function(a, b){return a-b}) // Organiza os elementos da array em ordem crescente
        let soma = 0

        for (let pos in newArr){ //Percorre os elementos da array e os soma
            soma += newArr[pos]
        }

        analise.innerHTML = `Ao todo temos ${newArr.length} números cadastrados <p>
        O maior número é ${newArr[newArr.length-1]}<p>
        O menor número é ${newArr[0]}<p>
        Somando todos os valores, temos ${soma}<p>
        A média dos valores digitados é ${soma/arr.length}`
        
        }
    }
