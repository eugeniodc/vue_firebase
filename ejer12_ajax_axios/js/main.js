Vue.prototype.$http = axios;
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
            // this.$http.get('https://randomuser.me/api/?results=500')
            //     .then((respuesta) => { 
            //         // console.log(respuesta);
            //         this.personas = respuesta.data.results; 
            //     });
            axios.get('https://randomuser.me/api/?results=500')
                .then((respuesta) => {
                    // console.log(respuesta);
                    this.personas = respuesta.data.results;
                });
        }
    }

});


