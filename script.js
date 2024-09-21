document.addEventListener('DOMContentLoaded', ()=>{
   
    const formularioLibro = document.getElementById('formularioLibro');
    formularioLibro.addEventListener('submit', (evento)=>{
        evento.preventDefault();
        const titulo = document.getElementById('titulo').value;
        const autor = document.getElementById('autor').value;
        const año = document.getElementById('año').value;
        const genero = document.getElementById('genero').value;
        const nuevoLibro = { titulo, autor, año, genero };
        guardarLibroEnLocalStorage(nuevoLibro);
        mostrarLibrosEnTabla();
        editarLibro(index);
        formularioLibro.reset();

    });
    
});
function guardarLibroEnLocalStorage(libro) {
    const libros = obtenerLibros();
    libros.push(libro);
    actualizarLocalStorage(libros);
}

