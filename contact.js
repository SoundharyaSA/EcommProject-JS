var contactbox=document.getElementById("contact-box")
var button=document.getElementById("submit")

button.addEventListener("click",function(){
    event.preventDefault()
    var inputs= document.querySelectorAll("input")
   console.log(inputs[0].value,inputs[1].value);
  
   var text=document.querySelector("textarea")
   console.log(text.value);


}
)
