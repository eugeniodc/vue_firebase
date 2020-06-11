new Vue({
    el: 'main',
    data: {
        mensaje: 'Hola Mundo :) !',
        nuevatarea: null,
        tareas: [{
            titulo: 'Aprender Vue.js',
            prioridad: true,
            antiguedad: 23
        },
        {
            titulo: 'Aprender ES6',
            prioridad: false,
            antiguedad: 135
        },
        {
            titulo: 'Publicar algo todos los dias',
            prioridad: true,
            antiguedad: 378
        }
        ]
    },
    methods: {
        agregarTarea() {
            // this, hace referencia a la instancia vuel
            this.tareas.unshift(this.nuevaTarea);
            this.nuevaTarea = '';
        }
    },
    computed: {
        mensajeAlReves() {
            return this.mensaje.split('').reverse().join('');
        },
        tareasConPrioridad() {
            // return this.tareas.filter(function(tarea)
            // {
            //     return tarea.prioridad;
            // });
            return this.tareas.filter((tarea) => tarea.prioridad);
        }
    }
})