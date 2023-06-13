let h1Elem = document.querySelector('h1')
function keyHandler(event){
    if(event.code == "Backspace"){
   h1Elem.innerHTML =  h1Elem.innerHTML.slice(0,-1)
    }else{
        addkey(event)
    }


let keyId = event.key.toUpperCase()
let keyValue = document.getElementById(keyId)
keyValue.classList.add("hit")
keyValue.addEventListener('animationend',function(){
    keyValue.classList.remove("hit")
})
console.log(keyValue)

}
function addkey(event){
    console.log(event.key)
    h1Elem.innerHTML += event.key
}

window.addEventListener('keyup',keyHandler)

