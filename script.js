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

function mostrarLibrosEnTabla() {
    const libros = obtenerLibros();
    
    const tablaHTML = `
        <table class="table mt-4">
            <thead>
                <tr>
                    <th>Título</th>
                    <th>Autor</th>
                    <th>Año</th>
                    <th>Género</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                ${libros.map((libro, index) => `
                    <tr>
                        <td>${libro.titulo}</td>
                        <td>${libro.autor}</td>
                        <td>${libro.año}</td>
                        <td>${libro.genero}</td>
                        <td>
                            <button class="btn btn-primary btn-sm me-2" onclick="editarLibro(${index})">Editar</button>
                            <button class="btn btn-danger btn-sm" onclick="eliminarLibro(${index})">Eliminar</button>
                        </td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;
    
    const contenedor = document.querySelector('.container');
    contenedor.querySelector('table')?.remove();
    contenedor.insertAdjacentHTML('beforeend', tablaHTML);
}
