var checkbox = document.querySelector("#checkbox")
var basic = document.querySelector("#price--basic")
var pro = document.querySelector("#price--pro")
var master = document.querySelector("#price--master")

checkbox.addEventListener('change', function(){
    if(this.checked){
        master.innerHTML = "<b>$</b>139,99"
        pro.innerHTML = "<b>$</b>124,99"
        basic.innerHTML = "<b>$</b>119,99"
    }
    else{
        basic.innerHTML = "<b>$</b>19,99"
        pro.innerHTML = "<b>$</b>24,99"
        master.innerHTML = "<b>$</b>39,99"
    }
})