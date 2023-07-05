console.log(location.search)     // lee los argumentos pasados a este formulario
var id=location.search.substr(4)  // usuario_update.html?id=1
console.log(id)
const { createApp } = Vue
  createApp({
    data() {
      return {
        id:"",
        nombre:"", 
        apellido:"",
        dni:"",
        telefono:"",
        email:"",
        clave:"",
        url:'https://hernanbula.pythonanywhere.com/usuarios/'+id,
        }
    },
    methods: {
        fetchData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    this.id=data.id
                    this.nombre = data.nombre;
                    this.apellido=data.apellido
                    this.dni=data.dni
                    this.telefono=data.telefono
                    this.email=data.email
                    this.clave=data.clave
                })
                .catch(err => {
                    console.error(err);
                    this.error=true              
                })
        },
        modificar() {
            let usuario = {
                nombre:this.nombre,
                apellido: this.apellido,
                dni: this.dni,
                telefono: this.telefono,
                email: this.email,
                clave: this.clave
            }
            var options = {
                body: JSON.stringify(usuario),
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                redirect: 'follow'
            }
            fetch(this.url, options)
                .then(function () {
                    alert("Registro modificado")
                    window.location.href = "./admin_usuario.html"; // navega a admin_usuario.html        
                })
                .catch(err => {
                    console.error(err);
                    alert("Error al Modificar")
                })      
        }
    },
    created() {
        this.fetchData(this.url)
    },
  }).mount('#app')