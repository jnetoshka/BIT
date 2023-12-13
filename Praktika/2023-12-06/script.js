const count = document.querySelector(".count")
const subtract = document.querySelector(".subtract")
const reset = document.querySelector(".reset")
const add = document.querySelector(".add")



subtract.addEventListener("click",function(){
    count.innerHTML-- // -- отнять по одному ++ прибавить по одному
})
add.addEventListener("click",function(){
    count.innerHTML++ // прибавляет по одному
})
reset.addEventListener("click",function(){
    count.innerHTML = 0 // сбрасывает на ноль
})