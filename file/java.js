var code=document.getElementById("code");
var run=document.getElementById("run");
var clear=document.getElementById("clear");
var rusalt=document.getElementById("rusalt");

run.onclick=()=>{
    rusalt.innerHTML=code.value;

    localStorage.setItem("code",code.value)
}

clear.onclick=()=>{
    rusalt.innerHTML=""
  


}
onload=()=>{
    code.value=localStorage.getItem("code");
    rusalt.innerHTML=code.value;
}
