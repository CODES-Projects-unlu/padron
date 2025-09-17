// Configuración específica para móviles
(function() {
    'use strict';
    
    // Detectar si es móvil
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
        // Configuración específica para móviles
        console.log('Dispositivo móvil detectado');
        
        // Manejar rutas en móviles
        const currentPath = window.location.pathname;
        const basePath = '/padron/';
        
        if (currentPath !== basePath && currentPath !== basePath + 'index.html') {
            // Redirigir a la página principal
            window.location.replace(basePath);
        }
        
        // Configurar viewport para móviles
        const viewport = document.querySelector('meta[name="viewport"]');
        if (viewport) {
            viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover');
        }
        
        // Manejar orientación
        function handleOrientationChange() {
            setTimeout(() => {
                window.scrollTo(0, 0);
            }, 100);
        }
        
        window.addEventListener('orientationchange', handleOrientationChange);
        
        // Manejar resize
        window.addEventListener('resize', handleOrientationChange);
    }
})();
