"use strict";

let allElems = document.querySelectorAll(".elem");
let fullElemPage = document.querySelectorAll(".fullElem");
let allfullElemBackBtn = document.querySelectorAll(".back");

allElems.forEach(function (elem) {
  elem.addEventListener("click", function () {
    //console.log(elem.id);
    console.log(fullElemPage[elem.id]);
    fullElemPage[elem.id].style.display = "block";
  });
});

allfullElemBackBtn.forEach(function(back){
    //console.log(allfullElemBackBtn[back]);
    back.addEventListener("click",function(){
        //console.log(back.id);
        fullElemPage[back.id].style.display="none";
        
    })
    
})
