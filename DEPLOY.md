# 🚀 Guía de Despliegue en Vercel

## 📋 Pasos para desplegar en Vercel

### 1. Preparar el repositorio
```bash
# Clonar el repositorio
git clone https://github.com/CODES-Projects-unlu/padron.git
cd padron

# Verificar que todos los archivos estén presentes
ls -la
```

### 2. Archivos necesarios para Vercel
- ✅ `index.html` - Página principal
- ✅ `styles.css` - Estilos CSS
- ✅ `script.js` - JavaScript
- ✅ `padron_estudiantes_final.json` - Base de datos
- ✅ `manifest.json` - PWA manifest
- ✅ `vercel.json` - Configuración de Vercel
- ✅ `package.json` - Metadatos del proyecto
- ✅ `.gitignore` - Archivos a ignorar

### 3. Desplegar en Vercel

#### Opción A: Desde la interfaz web de Vercel
1. Ir a [vercel.com](https://vercel.com)
2. Iniciar sesión con GitHub
3. Hacer clic en "New Project"
4. Seleccionar el repositorio `CODES-Projects-unlu/padron`
5. Configurar:
   - **Framework Preset**: Other
   - **Root Directory**: `./` (raíz del proyecto)
   - **Build Command**: (dejar vacío)
   - **Output Directory**: (dejar vacío)
6. Hacer clic en "Deploy"

#### Opción B: Desde la línea de comandos
```bash
# Instalar Vercel CLI
npm i -g vercel

# Iniciar sesión
vercel login

# Desplegar
vercel

# Seguir las instrucciones en pantalla
```

### 4. Configuración del dominio
- Vercel asignará automáticamente un dominio como `padron-xxx.vercel.app`
- Se puede configurar un dominio personalizado en la configuración del proyecto

### 5. Verificar el despliegue
- La aplicación estará disponible en la URL proporcionada por Vercel
- Verificar que la búsqueda por DNI funcione correctamente
- Probar en diferentes dispositivos (móvil, tablet, desktop)

## 🔧 Configuración adicional

### Variables de entorno (si se necesitan)
En la configuración del proyecto en Vercel, se pueden agregar variables de entorno si es necesario.

### Dominio personalizado
1. Ir a la configuración del proyecto en Vercel
2. Ir a la pestaña "Domains"
3. Agregar el dominio deseado
4. Configurar los registros DNS según las instrucciones

## 📱 Características del despliegue

### ✅ Optimizaciones incluidas
- **CORS configurado** para el archivo JSON
- **Cache optimizado** para archivos estáticos
- **Headers de seguridad** configurados
- **PWA habilitado** para instalación en móviles
- **Responsive design** para todos los dispositivos

### 📊 Rendimiento esperado
- **Tiempo de carga**: < 2 segundos
- **Tamaño del bundle**: ~ 50KB (sin el JSON)
- **Tamaño del JSON**: ~ 2.5MB (carga bajo demanda)
- **Lighthouse Score**: 90+ en todas las categorías

## 🐛 Solución de problemas

### Error: "JSON no se carga"
- Verificar que `padron_estudiantes_final.json` esté en la raíz del proyecto
- Verificar la configuración de CORS en `vercel.json`

### Error: "Página no carga"
- Verificar que `index.html` esté en la raíz del proyecto
- Verificar la configuración de rutas en `vercel.json`

### Error: "Estilos no se aplican"
- Verificar que `styles.css` esté en la raíz del proyecto
- Verificar la ruta en el `<link>` del HTML

## 📞 Soporte

Para problemas específicos del despliegue:
- Revisar los logs de Vercel en el dashboard
- Verificar la configuración de `vercel.json`
- Verificar que todos los archivos estén en el repositorio

---

**¡Listo para desplegar! 🚀**
