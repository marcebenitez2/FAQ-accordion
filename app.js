this.addEventListener('DOMContentLoaded',()=>{
    const preguntas = document.querySelectorAll('.preg')
    preguntas.forEach((pregunta)=>pregunta.addEventListener('click',()=>{
        const preguntaActual = pregunta.parentNode;
        const yaActivo = preguntaActual.classList.contains('activo');
      
        preguntas.forEach(pregunta => pregunta.parentNode.classList.remove('activo'));

        if (!yaActivo) {
          preguntaActual.classList.add('activo');
        }
    }))
})
