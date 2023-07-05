const dni= document.getElementById("dni")
const nombre= document.getElementById("nombre")
const apellido= document.getElementById("apellido")
const telefono= document.getElementById("telefono")
const email=document.getElementById("email")
const parrafoW = document.getElementById("warnings")

subForm.addEventListener("submit" ,e=>
  e.preventDefault())
  
  let warnings=""
  let entrar=false
  let regexEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,5})+$/
  if(nombre.value.length<2){
  warnings+='El nommbre no es valido'
}

if(regexEmail.test()){
warnings+= "El mail no es valido"
entrar=true

}
if(entrar){
parrafoW.innerHTML="warnings"

}
if(apellido.value.length<2){
  warnings+= "El apellido no es valido"
}


<form name="myForm" action="/action_page.php" onsubmit="return validateForm()" method="post">
  Name: input type="text" name="fname"
  input type="submit" value="Submit"
</form>