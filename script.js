// Cargar datos del JSON
async function cargarDatos() {
    try {
        const response = await fetch('./padron_estudiantes_final.json');
        const data = await response.json();
        estudiantesData = data.estudiantes;
        
        // Mostrar estadísticas
        document.getElementById('total-estudiantes').textContent = data.metadata.total_estudiantes.toLocaleString();
        document.getElementById('total-sedes').textContent = data.metadata.sedes.length;
        
        console.log('Datos cargados:', data.metadata);
    } catch (error) {
        console.error('Error cargando datos:', error);
        mostrarError('Error al cargar los datos del padrón. Asegúrese de que el archivo JSON esté en el mismo directorio.');
    }
}

// Buscar estudiante por DNI
function buscarEstudiante(dni) {
    if (!estudiantesData) {
        mostrarError('Los datos aún se están cargando. Por favor, espere un momento.');
        return;
    }

    const dniLimpio = dni.trim();
    if (!dniLimpio) {
        mostrarError('Por favor, ingrese un número de DNI válido.');
        return;
    }

    const estudiante = estudiantesData.find(est => 
        est.numero_documento === dniLimpio
    );

    if (estudiante) {
        mostrarResultado(estudiante);
    } else {
        mostrarNoEncontrado(dniLimpio);
    }
}

// Mostrar resultado encontrado
function mostrarResultado(estudiante) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `
        <div class="student-card">
            <div class="student-name">
                ${estudiante.apellido}, ${estudiante.nombre}
            </div>
            <div class="student-details">
                <div class="detail-item">
                    <div class="detail-label">Orden</div>
                    <div class="detail-value">#${estudiante.orden}</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">Tipo de Documento</div>
                    <div class="detail-value">${estudiante.tipo_documento}</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">Número de DNI</div>
                    <div class="detail-value">${estudiante.numero_documento}</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">Sede</div>
                    <div class="detail-value">
                        <span class="sede-badge">${estudiante.sede}</span>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Mostrar no encontrado
function mostrarNoEncontrado(dni) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `
        <div class="not-found">
            <div style="font-size: 3em; margin-bottom: 20px;">🔍</div>
            <h3>Estudiante no encontrado</h3>
            <p>No se encontró ningún estudiante con el DNI: <strong>${dni}</strong></p>
            <p>Verifique que el número de DNI sea correcto.</p>
        </div>
    `;
}

// Mostrar error
function mostrarError(mensaje) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `
        <div class="error">
            <strong>Error:</strong> ${mensaje}
        </div>
    `;
}

// Mostrar loading
function mostrarLoading() {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `
        <div class="loading">
            <div class="spinner"></div>
            <p>Buscando estudiante...</p>
        </div>
    `;
}

// Event listeners
document.getElementById('searchForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const dni = document.getElementById('dniInput').value;
    mostrarLoading();
    
    // Simular delay para mejor UX
    setTimeout(() => {
        buscarEstudiante(dni);
    }, 500);
});

// Solo permitir números en el input
document.getElementById('dniInput').addEventListener('input', function(e) {
    e.target.value = e.target.value.replace(/[^0-9]/g, '');
});

// Cargar datos al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    cargarDatos();
});
