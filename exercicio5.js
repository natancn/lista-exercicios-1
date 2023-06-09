



function Calendario(){
    const [dia, mes, ano] = process.argv[2].replace('data=', '').split('/');
    // console.log(process.argv)
    // console.log(dia)
    // console.log(mes)
    // console.log(ano)
    
    const meses = {
        "01": 31,
        "02": 28,
        "03": 31,
        "04": 30,
        "05": 31,
        "06": 30,
        "07": 31,
        "08": 31,
        "09": 30,
        "10": 31,
        "11": 30,
        "12": 31,
    }
    
    const maxDias = meses[mes]

    if (!maxDias || dia > maxDias || dia < 0){
        console.log("Data inválida")
    }
    else{
        console.log("Pró player de calendário")
    }


}

Calendario()
// const canDia = dia <= 30 && dia >= 1  ? dia : 'não é válido'
// const canMes = mes <= 12 && mes >= 1  ?  mes : 'não é válido'


// console.log(String(canDia) +"/" + String(canMes) + "/" + ano)


