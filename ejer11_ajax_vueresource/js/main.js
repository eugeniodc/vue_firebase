// https://randomuser.me/
// Vue no incorpora funcionalidad especial utilizar Ajax. 
// Para cubrir esa necesidad tienes vue-resource, una colección de métodos y bindings 
// (basado en el Promise API) para realizar peticiones HTTP y crear recursos 
// (asociar tareas comunes como verbos HTTP).

// En esta lección, consulto el API de RandomUser para ejemplificar el uso de vue-resource.
new Vue({
    el: 'main',
    mounted() {
        // console.log("instancia montada");
        this.cargarPersonas();
    },
    data: {
personas: []
    },
    methods: {
        cargarPersonas() {
            this.$http.get('https://randomuser.me/api/?results=500')
                .then((respuesta) => { 
                    // console.log(respuesta);
                    this.personas = respuesta.body.results; 
                });
        }
    }

});


