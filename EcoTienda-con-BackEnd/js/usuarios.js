const { createApp } = Vue
  createApp({
    data() {
      return {
        usuarios:[],
        //url:'http://localhost:5000/usuarios', 
   // si el backend esta corriendo local  usar localhost 5000(si no lo subieron a pythonanywhere)
        url:'https://hernanbula.pythonanywhere.com/usuarios',   // si ya lo subieron a pythonanywhere
        error:false,
        cargando:true,
        /*atributos para guardar los valores del formulario */
        id:0,
        nombre:"", 
        apellido:"",
        dni:0,
        telefono:"",
        email:"",
        clave:"",
        }
    },
    
    methods: {
        fetchData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    this.usuarios = data;
                    this.cargando=false
                })
                .catch(err => {
                    console.error(err);
                    this.error=true              
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
            let usuario = {
                nombre:this.nombre,
                apellido:this.apellido,
                dni:this.dni,
                telefono:this.telefono,
                email:this.email,
                clave:this.clave
            }
            var options = {
                body:JSON.stringify(usuario),
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                redirect: 'follow'
            }
            fetch(this.url, options)
                .then(function () {
                    alert("Registro grabado")
                    window.location.href = "../index.html";  // recarga index.html
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
