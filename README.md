# Trabajo Práctico - Desarrollo Web

---
## Descripción del Proyecto
Este Trabajo Práctico consiste en la creación de una **Landing Page** utilizando **HTML y CSS**. La página debe cumplir con requisitos técnicos específicos en cuanto a estructura, semántica, tipografía y diseño responsivo. Además, el proyecto debe ser organizado correctamente y publicado en **GitHub Pages** para su visualización en línea.

---
## Estructura del Proyecto
El proyecto se organiza en la siguiente estructura de carpetas y archivos:
```
 /nombre-del-proyecto
 ├── css/
 │   ├── styles.css  # Archivo de estilos
 ├── img/  # (Opcional) Carpeta para imágenes
 │   ├── img.jpg # Archivo de imagen vacio por ahora
 ├── index.html  # Página principal
 ├── README.md  # Documentación del proyecto
```
---
## GitHub Pages
🔗 [Ver la landing page en GitHub Pages](https://gabycrem.github.io/IFTS29-FrontEnd-PFO2-Ind/)
---
## Tecnologías Utilizadas
- **HTML5** para la estructura del contenido.
- **CSS3** para la estilización y diseño responsivo.
- **Google Fonts** para la personalización de tipografías.
- **Flexbox y/o Grid CSS** para la disposición de elementos.
- **GitHub Pages** para la publicación del proyecto.

---
## Autor
- **Nombre:** Nazarena Macre

---
## Checklist de Requerimientos

### Estructura del Proyecto:
- [X] Archivo "index.html" ubicado en la raíz.
- [X] Carpeta "css" que contenga el archivo "styles.css".
- [X] (Opcional) Carpeta "img" para recursos gráficos.
- [X] Archivo "README.md" creado, que incluya una breve descripción del TP y este checklist.

### Repositorio y Publicación:
- [X] Repositorio en GitHub creado.
- [X] Proyecto subido al repositorio.
- [X] Proyecto publicado utilizando GitHub Pages.
- [X] En el "README.md" se indica la URL de GitHub Pages.

### Uso de Google Fonts:
- [ ] Enlace a Google Fonts incluido en la sección "head" del HTML.
- [X] La tipografía importada se aplica en el sitio.
- [ ] Redacta brevemente tu decisión: ¿Por qué elegiste esa fuente?
  **Respuesta:** Me gusta, es divertida. No está incluida en el head ya que la importe directamente en el archivo .css

### HTML:
- [X] El documento inicia con la declaración DOCTYPE y usa el atributo lang="es".
- [X] Se han incluido las metaetiquetas obligatorias: charset y viewport.
- [X] Se ha definido un título descriptivo.
- [X] Se han vinculado correctamente el archivo CSS y el enlace a Google Fonts.
- [X] Barra de navegación ("nav") presente y contiene al menos 3 enlaces.
- [X] Se han insertado al menos 4 comentarios explicativos en el código HTML.

### CSS:
- [X] Existe el archivo "styles.css" con estilos personalizados.
- [X] Se utilizan selectores basados en clases e identificadores.
- [X] La tipografía importada desde Google Fonts se aplica correctamente en todos los elementos.

### Layout y Organización:
- [X] Se ha organizado el layout (especialmente en la sección "tarjetas") utilizando Flexbox o Grid.
- [X] Redacta: ¿Qué ventajas encontraste al utilizar Flexbox o Grid en tu proyecto?
  **Respuesta:** Es muy fácil e intuitivo utilizar Flexbox para organizar una sección con Tarjetas, pero en general es la forma en la que me gusta organizar mis proyectos

### Estilización de Componentes:
- [X] Se han personalizado los estilos de tablas, botones, enlaces y formularios.
- [X] Se han ajustado las dimensiones de imágenes y contenedores utilizando unidades relativas (%, rem, vh).
- [X] Se ha implementado al menos una animación o transición (por ejemplo, efecto hover en tarjetas o botones).
- [X] Redacta: ¿Qué animación o transición implementaste y por qué consideraste que era adecuada para tu proyecto?
  **Respuesta:** Utilice solo un transform de escala en los hover de botones y las tarjetas de las películas, queda sutil. También lo incorpore en el footer para los iconos de redes sociales, me gusta que donde el usuario pueda interactuar suceda algo más que solo cambiar el puntero del mouse. 

### Consideraciones Adicionales:
- [X] El diseño es responsivo y se visualiza correctamente en distintos dispositivos.
- [X] Se aplicaron buenas prácticas de accesibilidad (por ejemplo, uso adecuado de atributos alt en las imágenes).
- [X] Se añadieron comentarios adicionales donde se describan decisiones de diseño o la lógica de implementación.

---
## Propuestas de Mejora
- [X] Implementar **dark mode** con CSS variables para mejorar la experiencia del usuario.
- [X] Usar **CSS variables** para facilitar la personalización del tema de colores.
- [X] Añadir una **optimización para SEO**, incluyendo metaetiquetas adicionales y estructura de encabezados adecuada.
- [X] Evaluar la integración de **JavaScript** para interacciones dinámicas, como un formulario de contacto con validaciones en tiempo real.

---
## Integración de JavaScript

### Se implementaron 5 funcionalidades

#### 1. Creación de Contenido Dinámico (#6)
 * Descripción: La creación de contenido dinámico se implementó para la sección de "Películas Favoritas". Utilizando un array de objetos, se generan automáticamente las tarjetas con la información de cada película.
 * Cómo se implementó:Se creó un array peliculasFavoritas que contiene los datos de las películas (título, imagen, descripción y texto alternativo para la imagen). Se creó la función loadCards(), que recorre el array y, por cada película, crea dinámicamente un artículo (<article>) con la estructura HTML necesaria. Cada artículo se agrega al contenedor de películas mediante appendChild.
 * Justificación: Esta metodología permite manejar el contenido de manera más eficiente, facilitando la actualización o ampliación de las películas con solo modificar el array. Además, mejora la escalabilidad y organización del código, haciendo que el HTML se actualice de manera automática y evitando duplicación de código.

#### 2. Contador de visitas (#9)
* Descripción: Se implementó un contador que registra cuántas veces se visitó el sitio dede el mismo navegador.
* Cómo se implementó:Se utilizó localStorage para guardar el número de visitas. Cada vez que se recarga la página, se incrementa el contador y se actualiza el valor mostrado en pantalla.
* Justificación: Permite aplicar almacenamiento persistente en el navegador para registrar interacciones del usuario, sin necesidad de una base de datos.


#### 3. Modo Oscuro/Claro (#2)
* Descripción: Se implementó la funcionalidad de alternar entre modo claro y modo oscuro en toda la página.
* Cómo se implementó: Se agregó un botón con un ícono que, al hacer clic, alterna una clase en el body que cambia los estilos del sitio. Se utiliza localStorage para guardar la preferencia del usuario y aplicarla al cargar la página.
* Justificación: Mejora la accesibilidad visual y la personalización del sitio para distintos tipos de usuarios o ambientes de luz.

#### 4. Validación de Formulario (#1) y Pop-up de Confirmación de Envío(#3)
* Descripción: Se validan los campos del formulario de contacto para asegurar que estén completos y correctamente ingresados. Al enviar correctamente, se muestra un mensaje emergente confirmando el envío.
* Cómo se implementó: Se escucha el evento submit del formulario. Se verifica que cada campo tenga contenido válido, y si alguno no lo tiene, se evita el envío y se enfoca automáticamente ese campo. Si todo es válido, se muestra un alert() informando que el mensaje fue enviado.
* Justificación:  Garantiza la calidad de los datos ingresados y mejora la experiencia del usuario con mensajes claros e interactivos.


#### 5. Ocultar y/o Mostrar Contenido (#4)
* Descripción:  Se agregó un botón con un ícono de ojo en la sección de contacto que permite mostrar u ocultar el formulario.
* Cómo se implementó:  Se definió una función que alterna el display del formulario entre 'none' y 'flex' al hacer clic en el botón. También se cambia el ícono del botón según el estado.
* Justificación: Mejora la limpieza visual del sitio y da control al usuario sobre qué secciones desea ver o esconder, manteniendo un diseño más dinámico.
