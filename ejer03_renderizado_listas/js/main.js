const vm = new Vue({
    el: 'main',
    data: {
        // nombre: 'Juan',
        laborales: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'],
        tareas: [
            { nombre: 'Hacer la compra', prioridad: 'baja' },
            { nombre: 'Aprender Vue y Firebase', prioridad: 'alta' },
            { nombre: 'Ir al gimnasio', prioridad: 'alta' },
        ],
        persona: {
            nombre: 'Juan',
            profesion: 'dev',
            ciudad: 'Valencia',
        }
    }
});