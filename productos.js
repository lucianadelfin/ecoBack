const { createApp } = Vue
  createApp({
    data() {
      return {
        productos:[],
        //url:'http://localhost:5000/productos', 
   // si el backend esta corriendo local  usar localhost 5000(si no lo subieron a pythonanywhere)
        url:'https://hernanbula.pythonanywhere.com/productos',   // si ya lo subieron a pythonanywhere
        error:false,
        cargando:true,
        /*atributos para el guardar los valores del formulario */
        id:0,
        nombre:"", 
        imagen:"",
        stock:0,
        descripcion:"",
        precio:0,
        }  
    },
    
    methods: {
        fetchData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    this.productos = data;
                    this.cargando=false
                })
                .catch(err => {
                    console.error(err);
                    this.error=true              
                })
        },
        
        comprar(i,n,im,p,d,st){
            cant=document.getElementById("cantidad").value 
           
           
                let producto = {
    
                    imagen:im,
                    id:i,
                    nombre:n,                
                    precio:p,
                    descripcion:d,
                    stock:st-cant,
                    
                }
                var options = {
                    body: JSON.stringify(producto),
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    redirect: 'follow'
                }
                url=this.url+'/'+ i
                fetch(this.url, options)
                    .then(function () {
                        alert("Registro modificado")
                        location.reload()
         
                    })  
    
    
         },



        eliminar(id) {
            const url = this.url+'/' + id;
            var options = {
                method: 'DELETE',
            }
            fetch(url, options)
                .then(res => res.text()) // or res.json()
                .then(res => {
			 alert('Registro Eliminado')
                    location.reload(); // recarga el json luego de eliminado el registro
                })
        },
        grabar(){
            let producto = {
                nombre:this.nombre,
                precio:this.precio,
                stock:this.stock,
                descripcion:this.descripcion,
                imagen:this.imagen
            }
            var options = {
                body:JSON.stringify(producto),
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                redirect: 'follow'
            }
            fetch(this.url, options)
                .then(function () {
                    alert("Registro grabado")
                    window.location.href = "../pages/admin.html";  // recarga admin.html
                })
                .catch(err => {
                    console.error(err);
                    alert("Error al Grabar")  // puedo mostrar el error tambien
                })      
        }
    },
    created() {
        this.fetchData(this.url)
    },


  }).mount('#app')
