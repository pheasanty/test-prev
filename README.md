# Proyecto Web

## Cómo iniciar la web

1. Clonar el repositorio:
    ```bash
    git clone https://github.com/usuario/test-prev.git
    ```
2. Navegar al directorio del proyecto:
    ```bash
    cd test-prev
    ```
3. Instalar Node.js, Angular y Ionic:
    - Descargar e instalar Node.js desde [nodejs.org](https://nodejs.org/)
    - Instalar Angular CLI globalmente:
      ```bash
      npm install -g @angular/cli
      ```
    - Instalar Ionic CLI globalmente:
      ```bash
      npm install -g @ionic/cli
      ```
4. Instalar las dependencias:
    ```bash
    npm install
    ```
5. Iniciar el servidor de desarrollo basado en Ionic:
    ```bash
    ionic serve
    ```
6. Abrir el navegador y visitar:
    ```
    http://localhost:8100
    ```

## Características

- **Responsive Design**: La web se adapta a diferentes tamaños de pantalla.
- **Autenticación**: Sistema de login y registro de usuarios.
- **API REST**: Integración con una API REST para la gestión de datos.
- **Componentes Reutilizables**: Uso de componentes reutilizables para una mejor mantenibilidad.
- **Optimización de Rendimiento**: Técnicas de optimización para mejorar la velocidad de carga.
- **Menús de Búsqueda**:
- **Página de Inicio (Home)**:
  - Muestra tarjetas con la cantidad de tutores, usuarios y reservas.
  - Cada tarjeta es un enlace que lleva a la lista correspondiente.
  - **Tutores**: Podrá filtrar por especialidad.
  - **Usuarios**: Podrá ver una descripción detallada de sus datos.
  - **Reservas**: Tendrá un listado con toda la información y se podrá filtrar por usuario.



