# Borcelle - Ecommerce de Moda

Borcelle es una tienda de moda en línea con un diseño moderno y elegante. Este proyecto utiliza **React** para la interfaz de usuario y **Firebase** para la autenticación y almacenamiento de datos.

## 🚀 Tecnologías utilizadas
- React
- Firebase (Authentication, Firestore Database)
- Bootstrap

## 📦 Instalación
1. Clonar el repositorio:
   ```sh
   git clone https://github.com/tu-usuario/borcelle.git
   ```
2. Navegar al directorio del proyecto:
   ```sh
   cd borcelle
   ```
3. Instalar dependencias:
   ```sh
   npm install
   ```
4. Configurar Firebase:
   - Crear un proyecto en Firebase
   - Obtener las credenciales de configuración
   - Crear un archivo `.env` y agregar las claves (los nombres estan disponibles en `.env.example`)
     ```
5. Iniciar el proyecto:
   ```sh
   npm start
   ```

## 🔐 Autenticación
El proyecto utiliza **Firebase Authentication** para gestionar el acceso de usuarios.

1. **Traer autenticación desde Firebase Auth**.
2. **Conectar la autenticación a la interfaz** (pantalla de inicio de sesión y registro).
3. **Manejar el estado global del usuario** para controlar la sesión en toda la app.
4. **Proteger rutas** para restringir acceso a secciones como el dashboard.

Solo los usuarios autenticados con Google pueden acceder al dashboard.

## 📊 Funcionalidades
- Registro e inicio de sesión con Firebase Auth.
- Dashboard con opciones para agregar, editar y eliminar productos.
- Almacenamiento de productos en Firestore.
- Diseño moderno y sofisticado con ayuda de Bootstrap.

## 📄 Licencia
Este proyecto es de uso libre para fines de aprendizaje.

---
_Desarrollado con ❤️ por el equipo de Borcelle_

