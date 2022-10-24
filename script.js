let inputfahr=document.getElementById('input-fahr');
let inputCel=document.getElementById('input-cel');


inputCel.addEventListener("input",function(){
    

    let c = this.value ;

    inputfahr.style.boxShadow="-5px 0px 25px rgba(95, 217, 225, 0.895)";
    inputCel.style.boxShadow="";

    let f = c*1.8+32;

    if(!Number.isInteger(f)) f = f.toFixed(4);

    inputfahr.value=f;



});
inputfahr.addEventListener("input",function(){
    
    let f = this.value;

    inputCel.style.boxShadow="-5px 0px 25px rgba(95, 217, 225, 0.895)";
    inputfahr.style.boxShadow="";
    let c = (f -32) *(5/9);

    if(!Number.isInteger(c)) c = c.toFixed(4);
    inputCel.value=c;
});
