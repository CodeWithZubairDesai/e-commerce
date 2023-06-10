var Greek = document.getElementsByClassName("Greek");
var Indic = document.getElementsByClassName("Indic");
var Arabic = document.getElementsByClassName("Arabic");


function FilterDesign(Design) {
   
    if(Design.innerText == "Arabic")
    {
        $.each(Arabic,(index,value)=>{
       value.style.display = "block";
    })
        $.each(Indic,(index,value)=>{
       value.style.display = "none";
    })
        $.each(Greek,(index,value)=>{
       value.style.display = "none";
    })
    
}
else if(Design.innerText == "Indic")
{
    $.each(Arabic,(index,value)=>{
        value.style.display = "none";
     })
         $.each(Indic,(index,value)=>{
        value.style.display = "block";
     })
         $.each(Greek,(index,value)=>{
        value.style.display = "none";
     })
}
else if(Design.innerText == "Greek")
{
    $.each(Arabic,(index,value)=>{
        value.style.display = "none";
     })
         $.each(Indic,(index,value)=>{
        value.style.display = "none";
     })
         $.each(Greek,(index,value)=>{
        value.style.display = "block";
     })
    }
    else
    {
    $.each(Arabic,(index,value)=>{
        value.style.display = "block";
     })
         $.each(Indic,(index,value)=>{
        value.style.display = "block";
     })
         $.each(Greek,(index,value)=>{
        value.style.display = "block";
     })

}
}