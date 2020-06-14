/* Vue permite realizar todo tipo de transiciones y animaciones
(transition, animation y JavaScript animation) a los elementos de tu vista,
utilizando el componente transition y una serie de prefijos de nombre de clase predefinidos.
Si además, quieres utilizar una colección de animaciones CSS como Animate.css, nunca lo has tenido tan fácil. */

new Vue({
    el: 'main',
    data: {
        mostrar: true,
        mensajes: {
            transicion: 'Transicion CSS con Vue.js',
            animacion: 'Animaciones CSS con Vue.js',
            animationCustom: 'Animaciones custom CSS con Vue.js',
            entreElementos: 'Transiciones entre elementos con Vu.js',
        }
    },
});