
var searchitem=document.getElementById("searchproduct")
var search=document.getElementById("inputbox")
var list=searchitem .querySelectorAll("div")
// console.log(list);



search.addEventListener("keyup",function(){
  var entereditem=event.target.value.toUpperCase()
//   console.log(entereditem);

   for(i=0;i<list.length;i++)
   {
    var productitem=list[i].querySelector("p").textContent

    // console.log(productitem);
    if(productitem.toUpperCase().indexOf(entereditem)<0){
        list[i].style.display="none"
    }
    else{
        list[i].style.display="block"
    }
   }

})