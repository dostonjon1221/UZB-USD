"use strict";
const uzb = document.querySelector("#uzb")
const usd = document.querySelector("#usd")
console.log(uzb)

uzb.addEventListener("input",(e)=>{
const request = new XMLHttpRequest()
request.open('GET','current.json' )
request.setRequestHeader('Content-Type','aplication/json; charset = utf-8')
request.send()
// status 200-ok, 404-not found, 500 - server error, 400 - client error
// statusText 
//response
    // readyState 
    request.addEventListener('readystatechange', ()=>{
        if(request.readyState == 4 && request.status == 200){
            console.log(request.response)
            const data = JSON.parse(request.response)
            usd.value =( +uzb.value / data.current.usd).toFixed(2)
        }else{
            usd.value = "something is wrong "
        }
    })
})


