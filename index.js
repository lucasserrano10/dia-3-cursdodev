// informaçoes do cliente
let opçoesCliente = parseInt(prompt(" Bom dia ! você gostaria de abastecer seu carro com gasolina = tecle 1, álcool = tecle 2 ou apenas calibrar os pneus = tecle 3."))

let infoCombustivel = Number(prompt("quantos litros voce gostaria ?"))

switch(opçoesCliente){
       
    case 1 :
        console.log(infoCombustivel * 5 + "reais" )
        break
        case 2 :
            console.log(infoCombustivel * 3 + "reais")
            break
            default :
            console.log("pneu calibrado com sucesso !")
            break
}