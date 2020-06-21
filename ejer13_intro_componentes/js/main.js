Vue.component('mis-tareas', {
    props: ['tareas'],
    template: '<ul><li v-for="tarea in tareas">{{ tarea.title }}</li></ul>',
})

// Vue.component('blog-post', {
//     // formato camelCase en JavaScript
//     props: ['postTitle'],
//     template: '<h3>{{ postTitle }}</h3>'
//   })

new Vue({
    el: 'main',
    mounted() {
        axios.get('http://jsonplaceholder.typicode.com/todos')
            .then((respuesta) => {
                console.log(respuesta);
                this.tareasAjax = respuesta.data;
            });

    },
    data: {
        tareasAjax: [],
        tareasLocales: [
            { title: 'Hacer la compra' },
            { title: 'Aprender Vue' },
            { title: 'Aprender Javascript ES6' },
        ]
    }

});


