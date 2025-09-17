# 🔍 Buscador de Estudiantes - Padrón 2025

Aplicación web para buscar estudiantes en el padrón de la Universidad Nacional de Luján.

## 📋 Características

- **Búsqueda por DNI**: Ingrese el número de DNI para encontrar datos del estudiante
- **Datos completos**: Muestra orden, tipo de documento, DNI, nombre completo y sede
- **Interfaz moderna**: Diseño responsive y atractivo
- **Estadísticas**: Muestra total de estudiantes y sedes disponibles
- **Búsqueda en tiempo real**: Resultados instantáneos

## 📊 Datos del Padrón

- **Total de estudiantes**: 8,984
- **Sedes disponibles**:
  - SEDE LUJAN: 4,061 estudiantes
  - C.R. SAN MIGUEL: 2,098 estudiantes
  - D. SAN FERNANDO: 1,292 estudiantes
  - C.R. CAMPANA: 1,077 estudiantes
  - C.R. CHIVILCOY: 456 estudiantes

## 🚀 Cómo usar

### Opción 1: Despliegue en GitHub Pages (Recomendado)

1. **Activar GitHub Pages**:
   - Ir al repositorio en GitHub: `https://github.com/CODES-Projects-unlu/padron`
   - Ir a **Settings** > **Pages**
   - En **Source**, seleccionar **Deploy from a branch**
   - Seleccionar **Branch**: `main`
   - Seleccionar **Folder**: `/` (root)
   - Hacer clic en **Save**

2. **Esperar el despliegue**:
   - GitHub Pages construirá y desplegará la aplicación
   - La URL será: `https://codes-projects-unlu.github.io/padron/`
   - Puede tomar unos minutos la primera vez

3. **Usar la aplicación**:
   - La aplicación estará disponible 24/7
   - Funciona en todos los dispositivos
   - Se puede instalar como PWA en móviles

### Opción 2: Con servidor local

1. **Ejecutar el servidor**:
   ```bash
   python servidor_simple.py
   ```

2. **Abrir navegador**:
   - Ir a: http://localhost:8000
   - La aplicación se cargará automáticamente

3. **Buscar estudiante**:
   - Ingrese el número de DNI (solo números)
   - Presione "Buscar" o Enter
   - Vea los datos del estudiante

## 📁 Archivos incluidos

- `index.html` - Aplicación web principal
- `styles.css` - Estilos CSS responsive
- `script.js` - Funcionalidad JavaScript
- `padron_estudiantes_final.json` - Base de datos de estudiantes
- `logo.svg` / `icon.svg` - Logo corporativo "P"
- `manifest.json` - Configuración PWA
- `404.html` - Página de error para GitHub Pages
- `.nojekyll` - Deshabilita Jekyll processing
- `limpiar_final.py` - Script de limpieza de datos

## 🛠️ Requisitos técnicos

- **Python 3.6+** (para el servidor)
- **Navegador web moderno** (Chrome, Firefox, Safari, Edge)
- **Archivos JSON** generados previamente

## 🔧 Solución de problemas

### Error: "No se puede cargar el JSON"
- **Solución**: Use el servidor local (`python servidor_simple.py`)

### Error: "Estudiante no encontrado"
- **Verificar**: Que el DNI sea correcto (solo números)
- **Verificar**: Que el estudiante esté en el padrón

### Error: "PWA no funciona"
- **Verificar**: Que GitHub Pages esté activado
- **Verificar**: Que la URL sea correcta: `https://codes-projects-unlu.github.io/padron/`
- **Limpiar caché**: Presionar `Ctrl + Shift + R` para recargar

### Error: "JSON no se carga"
- **Verificar**: Que el archivo `padron_estudiantes_final.json` esté en el repositorio
- **Verificar**: Que la ruta en `script.js` sea correcta

## 📱 Compatibilidad

- ✅ **Desktop**: Windows, Mac, Linux
- ✅ **Mobile**: iOS, Android (optimizado para móviles)
- ✅ **Tablets**: iPad, Android tablets
- ✅ **Navegadores**: Chrome, Firefox, Safari, Edge
- ✅ **PWA**: Instalable como aplicación nativa
- ✅ **Responsive**: Se adapta a cualquier tamaño de pantalla

## 🎨 Características de la interfaz

- **Diseño responsive**: Se adapta perfectamente a móviles y tablets
- **Optimización móvil**: Interfaz táctil optimizada
- **Animaciones suaves**: Transiciones y efectos visuales
- **Validación de entrada**: Solo acepta números en el campo DNI
- **Feedback visual**: Loading, errores y resultados claros
- **Accesibilidad**: Colores contrastantes y tipografía clara
- **PWA**: Instalable como aplicación nativa en móviles

## 📱 Características móviles específicas

- **Pantallas pequeñas**: Optimizado para teléfonos (320px+)
- **Tablets**: Diseño adaptado para tablets (768px+)
- **Orientación**: Funciona en portrait y landscape
- **Touch**: Botones y elementos optimizados para toque
- **Zoom**: Previene zoom no deseado en iOS
- **Teclado**: Teclado numérico automático para DNI
- **Instalación**: Se puede instalar como app nativa
- **Offline**: Funciona sin conexión una vez cargado

## 📈 Estadísticas en tiempo real

La aplicación muestra:
- Total de estudiantes en el padrón
- Número de sedes disponibles
- Información detallada del estudiante encontrado

---

**Desarrollado para el Centro de Estudiantes de la Universidad Nacional de Luján**
