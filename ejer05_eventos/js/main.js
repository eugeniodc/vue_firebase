const vm = new Vue({
    el: 'main',
    data: {
        nuevaTarea: null,
        tareas: [
            "Aprender Vue.js",
            "Aprender ES6",
            "Publicar algo todos los días"
        ]
    },
    methods: {
        agregarTarea(){
            // this, hace referencia a la instancia vuel
            this.tareas.unshift(this.nuevaTarea);
            this.nuevaTarea='';
        }
    }
});

//Vanilla JavaScript

// function agregarTarea(){
//     const input = document.querySelector('input[type=text]');
//     vm.tareas.unshift(input.value);
//     input.value='';
// }

