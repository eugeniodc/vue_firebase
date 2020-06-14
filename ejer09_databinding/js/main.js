/* ¿Se pueden asociar valores dinámicos a propiedades HTML?. Con Vue, si. 
En esta lección a prenderás a utilizar la directiva v-bind y la sintaxis de objeto y 
la sintaxis de objeto para aplicar evaluar expresiones y utilizar el resultado en atributos y clases CSS. */
new Vue({
    el: 'main',
    data: {
        tareas: [
            { titulo: 'Hacer la compra', completado: false },
            { titulo: 'Aprender Vue-js', completado: false },
            { titulo: 'Aprender Firebase', completado: false },
            { titulo: 'Dominar ES6', completado: false },
            { titulo: 'Salir a correr', completado: false },
        ]

    },
    methods: {
        completarTarea(tarea){
            tarea.completado=!tarea.completado;
        }
    },
    computed:{
        tareasCompletadas(){
            return this.tareas.filter((tarea)=> tarea.completado);
        }

    }
});