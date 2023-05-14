var sec=00
var min=00
var interval

function start(){
 interval = setInterval(watch, 1000)
 var desativar = document.getElementById('start_button')
 if(setInterval>=2){
    desativar.addEventListener(clearInterval = interval)  
 }
 
}

function reset(){
    clearInterval (interval)
}

function stop(){
clearInterval (interval)
min = 0
sec = 0
document.getElementById('watch').innerHTML='00:00'
}

function watch(){
    sec++
    if(sec==60){
        min++
        sec=0
    
    }
    document.getElementById('watch').innerHTML=min+':'+sec
}