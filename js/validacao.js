export function valida (input) {
    const tipoInput = input.dataset.tipo

    if (validadores[tipoInput]){
        validadores[tipoInput](input)
    }
}

const validadores = {
    calendarioNasc : input => validaDataBorn(input)
}
/* let inputCalendario = document.querySelector('#nascimento')

inputCalendario.addEventListener("blur", (evento) => { 
    validaDataBorn(evento.target)
})
*/

function validaDataBorn (input){
    const datainput = new Date (input.value)
    let mensagem = ''
    if(!maiorQue18(datainput)){
        mensagem = 'Mano, vocẽ não tem 18 anos cara, lamento. '
    }
    input.setCustomValidity(mensagem)
}


function maiorQue18 (data){
    const datahoje = new Date()
    const datamais18 = new Date (data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate() )

    return datamais18 <= datahoje
}
