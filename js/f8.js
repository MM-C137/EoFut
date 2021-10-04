var date = new Date
// var diaHj = date.getDate()
var diaHj = 7
var diaNt = 4
var df = diaHj - diaNt
var res = ''

if(diaNt == diaHj){
    res = 'Hoje'
}
else if(diaNt < diaHj && df == 1){
    res = "Ontem"
}
else if(diaNt < diaHj && 1 < df < 7){
    res= `Há ${df} dias`
}

console.log(res)