const { createApp } = Vue  
 createApp({
   data() {  // define los datos de VUE
     return {
       url: 'https://hernanbula.pythonanywhere.com/usuarios',
       datos: [], 
       usuario:"",//email admin
       clave:""//clave admin
       }
            
   },
   methods: {  // define los métodos o funciones
     fetchData(url) {
       fetch(url)
         .then(response => response.json())
         .then(data => {
           console.log(data)
           this.datos=data
        })
         .catch(error=>alert("Ups... se produjo un error: "+ error))
     },
     validar(){
        arreglo=this.datos.filter(x=> x.email==this.usuario);
        console.log(arreglo)
        if(arreglo[0].clave == this.clave){
            sessionStorage.setItem("login","true")
            window.location.href="../index.html"; //recarga index
        } else{
            alert("Clave o Usuario incorrecta")
        }



     }
        
   },
   created() {  // llama a los métodos que se tienen que ejecutar al inicio
     this.fetchData(this.url)                                                      
   }
    // define los métodos que se van a ejecutar cada vez que cambien los datos
 }).mount('#app')


