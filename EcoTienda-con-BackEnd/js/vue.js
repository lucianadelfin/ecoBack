const { createApp } = Vue  //creo un objeto VUE llamdo createApp
 createApp({
   data() {  // define los datos de VUE
     return {
       url: 'https://hernanbula.pythonanywhere.com/productos',
       productos: [],
     }
   },
   methods: {  // define los métodos o funciones
     fetchData(url) { 
       fetch(url)
         .then(response => response.json())
         .then(data => {
           console.log(data)
           this.productos=data
        })
         .catch(error=>alert("Ups... se produjo un error: "+ error))
     },
     comprar(){
        cant=document.getElementsById("cantidad").value
        id=document.getElementById("codigo").value
          alert("Acaba de comprar el producto seleccionado")
        
     }
     },

   created() {  // llama a los métodos que se tienen que ejecutar al inicio
     this.fetchData(this.url)   

   },

 }).mount('#app')
