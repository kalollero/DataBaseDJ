# Estructura de la Base de Datos

## **DataBase**

Se desea crear una base de datos.

Las entidades principales que componen la Base de datos son:

**GRÁFICOS, MAGAZINES, EPISODIOS, SERIES, FILMES, SAGAS Y EXTRAS.**

### **Notas Técnicas sobre Tipos de Datos:**

**BOOLEAN:** SQLite no tiene tipo BOOLEAN nativo.

Los campos booleanos se almacenan como INTEGER con valores 0 (FALSE) o 1 (TRUE).

En la documentación se especifica como BOOLEAN por claridad conceptual.

---

## **GRAFICO**

La Entidad `GRAFICO` contiene y muestra todos los cómics con los siguientes atributos:

**· ID GRÁFICO.** Identificador único.

**· FK - ID TIPO GRÁFICO.** Clave Foránea que enlaza con la entidad `TIPO_GRAFICO`.

**· PÁGINAS.** Número de Páginas que tiene el cómic.

**· FECHA DE PUBLICACIÓN O ESTRENO DEL CÓMIC.** Representa la fecha en que el elemento fue publicado o estrenado. 

**Almacenamiento en BD:** Tipo DATE formato YYYY-MM-DD (ej: 2025-09-25). 

**Formato de Visualización:** Se debe mostrar al usuario como DD · MMM · YYYY (ejemplo: 25 · Sep · 2025). La conversión se realiza en la capa de aplicación.

**Funcionalidad:** Actúa como vínculo a un sitio que muestre todos los gráficos que compartan la **misma fecha completa**, o el **mismo mes**, o el **mismo año**. Esto implica que el sistema debe poder consultar por diferentes niveles de granularidad de la fecha.

**· SINOPSIS.** Resumen corto de la historia del cómic.

**· FK · ID PAÍS**. Indica el país de origen del Gráfico.

**· FK · ID EDITORIAL**. Indica la editorial del Gráfico.

**· FK · ID TINTA**. Indica el tipo de tinta que tiene el Gráfico.

**· FK · ID DISTRIBUIDORA**. Indica la distribuidora que tiene el Gráfico.

**· CÓDIGO DISTRIBUIDORA**. Indica el código que le asigna la distribuidora al cómic.

**· RATING.** Calificación del Cómic de 1 a 5.

**· COMENTARIOS.** Puntos de vista personales acerca del cómic y su contenido.

**· ANOTACIONES.** Notas o anotaciones personales.

**· CLASIFICACIÓN.** Indica si el gráfico es para mayores de 18 años o para todo público.

**· PIXELIZACIÓN.** Indica si el gráfico contiene censura o no.

**· FK · ID EDICIÓN**. Indica la Expo en donde se presentó el Gráfico.

**· LEÍDO.** Indica si el cómic ya fue leído o no.

**· FECHA DE CAPTURA.** Fecha en que se captura el cómic en la base de datos. Se compone del día/mes/año.

**· CÓDIGO.** Es un código alfanumérico que se utiliza para identificar el elemento de manera única en la interfaz. 

**Formato de Generación:** Se genera anteponiendo un prefijo específico de la categoría al ID único de la entidad, para `GRAFICO`: Prefijo `"GR-"` + `ID_GRAFICO` (Ej. `GR-123`)

### Entidad Principal GRAFICO · Tabla Maestra

| Nombre del Campo | Tipo de Dato | Clave Key | Nulidad | Descripción o Función | Relaciones FK | Notas |
|---|---|---|---|---|---|---|
| **id_grafico** | INT | PK | NO | Id único y primario del registro. | - | Autoincremental. |
| **id_tipo_grafico** | INT | FK | NO | Id de TIPO_GRAFICO que estamos vinculando. | Referencia a TIPO_GRAFICO.id_tipo_grafico | - |
| **paginas_grafico** | INT | - | NO | No. de páginas. | - | - |
| **fecha_publicacion_grafico** | DATE | - | SÍ | Fecha de publicación. | - | Día, Mes y Año. |
| **sinopsis_grafico** | TEXT | - | SÍ | Resumen corto. | - | - |
| **id_pais** | INT | FK | NO | Id de País que estamos vinculando. | Referencia a PAIS.id_pais | Regla: Es obligatorio registrar el país. |
| **id_editorial** | INT | FK | SI | Id de la Editorial que estamos vinculando. | Referencia a EDITORIAL.id_editorial | - |
| **id_tinta** | INT | FK | NO | Id de la Tinta que estamos vinculando. | Referencia a TINTA.id_tinta | Regla: Es obligatorio registrar la tinta. |
| **id_distribuidora** | INT | FK | SI | Id de la Distribuidora que estamos vinculando. | Referencia a DISTRIBUIDORA.id_distribuidora | - |
| **codigo_distribuidora** | TEXT | - | SI | Código de la Distribuidora. | - | - |
| **rating_grafico** | FLOAT | - | SÍ | Calificación. | - | Rango 1-5 |
| **comentarios_grafico** | TEXT | - | SÍ | Comentarios. | - | - |
| **anotaciones_grafico** | TEXT | - | SÍ | Notas Personales. | - | - |
| **clasificacion_grafico** | BOOLEAN | - | NO | +18 o no. | - | TRUE = +18, FALSE = Todo público |
| **pixelizacion_grafico** | BOOLEAN | - | NO | Censurado o no. | - | TRUE = Censurado, FALSE = Sin censura |
| **id_edicion** | INT | FK | SI | Id de la expo que estamos vinculando. | Referencia a EDICION_EXPO.id_edicion | - |
| **leido_grafico** | BOOLEAN | - | NO | Si fue o no leído ya el cómic. | - | TRUE = SÍ, FALSE = No |
| **fecha_captura_grafico** | DATE | - | NO | Fecha de captura en la Base de Datos. | - | Día, Mes y Año. |
| **codigo_grafico** | TEXT | - | NO | Código para su Identificación. | - | Se usa el prefijo GR- |

*Relación: 1:N – Uno a Muchos*

---

## **TIPO DE GRÁFICO**

La Entidad `TIPO_GRAFICO` contiene e indica la clasificación específica de un gráfico.

**Valores Posibles** (sólo uno a la vez): **`Cómic, Manga, Doujinshi, Manhua, Manhwa, Webtoon e Historieta.`**

**Funcionalidad:** Este elemento funcionará como un vínculo a un sitio donde se muestran todos los que comparten ese mismo tipo.

**· ID TIPO GRÁFICO.** Identificador único.

**· NOMBRE DEL TIPO.** Nombre de los valores posibles que puede tener la entidad `GRAFICO`.

### Entidad TIPO_GRAFICO

| Nombre del Campo | Tipo de Dato | Clave Key | Nulidad | Descripción o Función | Relaciones FK | Notas |
|---|---|---|---|---|---|---|
| **id_tipo_grafico** | INT | PK | NO | Id único del registro. | - | Autoincremental. |
| **nombre_tipo** | VARCHAR(50) | - | NO | El nombre del tipo de cómic. | - | Regla: Es obligatorio registrar el tipo. |

### Valores Posibles

| Id | Nombre |
|---|---|
| 1 | Cómic |
| 2 | Manga |
| 3 | Doujinshi |
| 4 | Manhua |
| 5 | Manhwa |
| 6 | Webtoon |
| 7 | Historieta |

*Relación: N:1 – Muchos a Uno*

---

## **VERSIÓN GRÁFICO**

La Entidad `VERSION_GRAFICO` contiene y maneja las múltiples versiones que puede tener un único `GRAFICO` y posee los siguientes atributos:

**· ID VERSION.** Identificador único de cada versión específica del Gráfico.

**· FK - ID GRÁFICO.** Enlaza esta versión con el cómic principal en la entidad `GRAFICO`.

**· FK - ID IDIOMA.** El idioma en el que se encuentra esta versión específica.

**· TÍTULO.** Nombre del gráfico en el idioma de esta versión. (Depende del Idioma)

**· SOPORTE.** Indica el medio de esta versión. Valores Posibles: **`Físico`, `Digital`.**

**· FK - ID TIPO FORMATO.** El formato específico de esta versión. (Dependerá del Soporte)

**· ANCHO DE LAS IMAGEN.** Tamaño del ancho de las imágenes en píxeles de esta versión.

**· ALTO DE LAS IMAGEN.** Tamaño del alto de las imágenes en píxeles de esta versión.

**· RESOLUCIÓN.** Calidad de la imagen en DPI.

**· PESO.** Indicar el peso del archivo convertido a Bytes siempre.

**· FK - ID TRADUCTOR.** Indica el traductor de esta versión.

### Entidad VERSION_GRAFICO

| Nombre del Campo | Tipo de Dato | Clave Key | Nulidad | Descripción o Función | Relaciones FK | Notas |
|---|---|---|---|---|---|---|
| **id_version** | INT | PK | NO | Id único del registro. | - | Autoincremental. |
| **id_grafico** | INT | FK | NO | Id del Gráfico que estamos vinculando. | Referencia a GRAFICO.id_grafico | Regla: Es obligatorio registrar un gráfico. |
| **id_idioma** | INT | FK | NO | Id del Idioma que estamos vinculando. | Referencia a IDIOMA.id_idioma | Regla: Es obligatorio registrar un idioma. |
| **titulo_version** | TEXT | - | NO | Título del cómic. | - | Depende del idioma |
| **soporte_version** | TEXT | - | NO | Soporte del cómic. Físico o Digital | - | Regla: Es obligatorio registrar el soporte. |
| **id_tipo_formato** | INT | FK | NO | Id del Tipo de Formato que estamos vinculando. | Referencia a TIPO_FORMATO.id_tipo_formato | Regla: Es obligatorio registrar el tipo de formato. |
| **ancho_version** | INT | - | SÍ | Ancho de las Imágenes. | - | Datos en Pixeles. |
| **alto_version** | INT | - | SÍ | Alto de las Imágenes. | - | Datos en Pixeles. |
| **resolucion_version** | INT | - | SÍ | Resolución. | - | Datos en DPI. |
| **peso_version** | BIGINT | - | SÍ | Peso. | - | Datos en Bytes. |
| **id_traductor** | INT | FK | SI | Id del Traductor que estamos vinculando. | Referencia a TRADUCTOR.id_traductor | - |

*Relación: 1:N - Uno a Muchos*

---

## **ÍNDICE VERSIÓN**

La Entidad `INDICE_VERSION` almacena el índice o listado de las rutas de archivos que componen una versión digital específica. Esto permite que cada versión en la tabla `VERSION_GRAFICO` tenga su propio listado ordenado de páginas/archivos.

**· ID ÍNDICE**. Identificador único para el registro de cada archivo/página.

**· FK - ID VERSION**. Enlaza esta ruta con la versión digital correspondiente en la tabla `VERSION_GRAFICO`.

**· NÚMERO DE PÁGINA.** El número de página (o índice) que representa este archivo, es crucial para mantener el orden de lectura.

**· RUTA DEL ARCHIVO.** La ruta absoluta o relativa donde se encuentra el archivo de la página en el sistema de almacenamiento.

**· FK - ID TIPO DE PÁGINA.** El tipo de contenido que es la página del cómic.

### Entidad INDICE_VERSION

| Nombre del Campo | Tipo de Dato | Clave Key | Nulidad | Descripción o Función | Relaciones FK | Notas |
|---|---|---|---|---|---|---|
| **id_indice** | INT | PK | NO | Id único del registro. | - | Autoincremental. |
| **id_version** | INT | FK | NO | Id de la versión que estamos vinculando. | Referencia a VERSION_GRAFICO.id_version | Restricción: Solo aplica para soporte_version = 'Digital'. |
| **numero_pagina** | INT | - | NO | Número de página del archivo. | - | Valor >= 0 (0 = portada) |
| **ruta_archivo** | TEXT | - | NO | Ruta del archivo. | - | Ruta relativa al directorio base. |
| **id_tipo_pagina** | INT | FK | NO | Id del tipo de página que estamos vinculando | Referencia a TIPO_PAGINA.id_tipo_pagina | - |

### Restricciones y Reglas de Negocio:

- Esta tabla solo aplica para versiones con soporte_version = 'Digital'.
- El numero_pagina debe ser único por id_version.
- numero_pagina = 0 indica portada.
- La ruta_archivo debe ser relativa al directorio base de almacenamiento.

*Relación: 1:N - Uno a Muchos*

---

## **Tablas Intermedias de GRAFICO**

### **GRAFICO_GENEROS**

**· FK - ID GRÁFICO**. Enlaza esta ruta con la tabla `GRAFICO`.

**· FK - ID GÉNERO**. Enlaza esta ruta con la tabla `GENEROS`.

#### Entidad GRAFICO_GENEROS

| Nombre del Campo | Tipo de Dato | Clave Key | Nulidad | Descripción o Función | Relaciones FK | Notas |
|---|---|---|---|---|---|---|
| **id_grafico** | INT | FK | NO | Id del Gráfico que estamos vinculando. | Referencia a GRAFICO.id_grafico | Regla: Es obligatorio registrar un gráfico. |
| **id_genero** | INT | FK | NO | Id del Género que estamos vinculando. | Referencia a GENEROS.id_genero | Regla: Es obligatorio registrar un género. |

*Relación: N:M - Muchos a Muchos*

---

### **GRAFICO_AUTOR**

**· FK - ID GRÁFICO**. Enlaza esta ruta con la tabla `GRAFICO`.

**· FK - ID AUTOR**. Enlaza esta ruta con la tabla `AUTOR`.

#### Entidad GRAFICO_AUTOR

| Nombre del Campo | Tipo de Dato | Clave Key | Nulidad | Descripción o Función | Relaciones FK | Notas |
|---|---|---|---|---|---|---|
| **id_grafico** | INT | FK | NO | Id del Gráfico que estamos vinculando. | Referencia a GRAFICO.id_grafico | Regla: Es obligatorio registrar un gráfico. |
| **id_autor** | INT | FK | NO | Id del Autor que estamos vinculando. | Referencia a AUTOR.id_autor | Regla: Es obligatorio registrar un autor. |

*Relación: N:M - Muchos a Muchos*

---

### **GRAFICO_AVISOS**

**· FK - ID GRÁFICO**. Enlaza esta ruta con la tabla `GRAFICO`.

**· FK - ID AVISO**. Enlaza esta ruta con la tabla `AVISOS`.

#### Entidad GRAFICO_AVISOS

| Nombre del Campo | Tipo de Dato | Clave Key | Nulidad | Descripción o Función | Relaciones FK | Notas |
|---|---|---|---|---|---|---|
| **id_grafico** | INT | FK | NO | Id del Gráfico que estamos vinculando. | Referencia a GRAFICO.id_grafico | Regla: Es obligatorio registrar un gráfico. |
| **id_aviso** | INT | FK | NO | Id del Aviso que estamos vinculando. | Referencia a AVISOS.id_aviso | Regla: Es obligatorio registrar un aviso |

*Relación: N:M - Muchos a Muchos*

---

## **COLECCIÓN MAGAZINE**

La Entidad `COLECCION_MAGAZINE` agrupa varios números o volúmenes de magazines relacionados con los siguientes atributos:

**· ID COLECCIÓN.** Identificador único.

**· NOMBRE COLECCIÓN.** Nombre general de la colección de Magazines.

**· TIPO DE PUBLICACIÓN.** Frecuencia de publicación del magazine: **`Semanal, Mensual, Bimestral, Anual o por Evento.`**

**· ESTADO DE PUBLICACIÓN.** Muestra si el Magazine se sigue publicando o ya terminó de publicarse.

**· FECHA INICIO.** Indica la fecha de la primera publicación.

**· FECHA FIN.** Indica la fecha de la última publicación.

**· DESCRIPCIÓN.** Descripción general de la colección.

**· CÓDIGO.** Es un código alfanumérico que se utiliza para identificar el elemento de manera única en la interfaz. 

**Formato de Generación:** Se genera anteponiendo un prefijo específico de la categoría al ID único de la entidad, para `COLECCION_MAGAZINE`: Prefijo `"CN-"` + `ID_COLECCION` (Ej. `CN-123`)

### Entidad Principal COLECCION_MAGAZINE · Tabla Maestra

| Nombre del Campo | Tipo de Dato | Clave Key | Nulidad | Descripción o Función | Relaciones FK | Notas |
|---|---|---|---|---|---|---|
| **id_coleccion** | INT | PK | NO | Id único y primario del registro. | - | Autoincremental. |
| **nombre_coleccion** | TEXT | - | NO | Nombre de la Colección. | - | - |
| **tipo_publicacion** | TEXT | - | SI | Frecuencia de publicación. | - | Semanal, Mensual, Bimestral, Anual o por Evento. |
| **estado_publicacion** | BOOLEAN | - | NO | Estado de la publicación. | - | TRUE = En Emisión, FALSE = Finalizado |
| **fecha_inicio** | DATE | - | SI | Fecha de la primera publicación. | - | Día, Mes y Año. |
| **fecha_fin** | DATE | - | SI | Fecha de la última publicación. | - | Día, Mes y Año. NULL si aún continúa. |
| **descripcion_coleccion** | TEXT | - | SI | Descripción de la colección. | - | - |
| **codigo_coleccion** | TEXT | - | NO | Código para su Identificación. | - | Se usa el prefijo CN- |

*Relación: 1:N – Uno a Muchos*

---

## **MAGAZINE**

Un Magazine puede componerse de elementos únicos, cómo su portada, índice, contraportada, artículos, ads y Gráficos de diferentes autores. Estos últimos pueden encontrarse ya capturados o capturarse al momento mismo de la captura del Magazine.

La Entidad `MAGAZINE` contiene y muestra todos los magazines con los siguientes atributos:

**· ID MAGAZINE.** Identificador único.

**· FK · ID COLECCION.** Indica la colección a la que pertenece.

**· NÚMERO MAGAZINE.** Número del Magazine dentro de la colección.

**· PÁGINAS TOTALES.** Representa el número total de páginas del magazine. 

**Regla de Cálculo:** Este valor es la suma de las páginas de todos los elementos que componen el `MAGAZINE`.

**· FECHA DE PUBLICACIÓN O ESTRENO DEL MAGAZINE.** Representa la fecha en que el elemento fue publicado o estrenado. 

**Almacenamiento en BD:** Tipo DATE formato YYYY-MM-DD (ej: 2025-09-25). 

**Formato de Visualización:** Se debe mostrar al usuario como DD · MMM · YYYY (ejemplo: 25 · Sep · 2025). La conversión se realiza en la capa de aplicación.

**Funcionalidad:** Actúa como vínculo a un sitio que muestre todos los `MAGAZINES` que compartan la **misma fecha completa**, o el **mismo mes**, o el **mismo año**. Esto implica que el sistema debe poder consultar por diferentes niveles de granularidad de la fecha.

**· SINOPSIS.** Resumen corto del magazine.

**· FK · ID PAÍS**. Indica el país de origen del Magazine.

**· FK · ID EDITORIAL**. Indica la editorial del Magazine.

**· FK · ID TINTA**. Indica el tipo de tinta que tiene el Magazine.

**· FK · ID DISTRIBUIDORA**. Indica la distribuidora que tiene el Magazine.

**· CÓDIGO DISTRIBUIDORA**. Indica el código que le asigna la distribuidora al Magazine.

**· RATING.** Calificación del magazine de 1 a 5.

**· COMENTARIOS.** Puntos de vista personales acerca del magazine y su contenido.

**· ANOTACIONES.** Notas o anotaciones personales.

**· CLASIFICACIÓN.** Indica si el magazine es para mayores de 18 años o para todo público.

**· PIXELIZACIÓN.** Indica si el magazine contiene censura o no.

**· FK · ID EDICIÓN**. Indica la Expo en donde se presentó el Magazine.

**· LEÍDO.** Indicar si el magazine ya fue leído o no.

**· FECHA DE CAPTURA.** Fecha en que se captura el magazine en la base de datos. Se compone del día/mes/año.

**· CÓDIGO.** Es un código alfanumérico que se utiliza para identificar el elemento de manera única en la interfaz. 

**Formato de Generación:** Se genera anteponiendo un prefijo específico de la categoría al ID único de la entidad, para `MAGAZINE`: Prefijo `"MGZ-"` + `ID_MAGAZINE` (Ej. `MGZ-456`)

### Entidad Principal MAGAZINE · Tabla Maestra

| Nombre del Campo | Tipo de Dato | Clave Key | Nulidad | Descripción o Función | Relaciones FK | Notas |
|---|---|---|---|---|---|---|
| **id_magazine** | INT | PK | NO | Id único y primario del registro. | - | Autoincremental. |
| **id_coleccion** | INT | FK | SI | ID de la Colección a la que pertenece. | COLECCION_MAGAZINE.id_coleccion | NULL para magazines independientes. |
| **numero_magazine** | INT | - | SI | Número dentro de la colección. | - | NULL si no es parte de una colección. |
| **paginas_magazine** | INT | - | NO | No. de páginas totales. | - | Campo calculado: suma de páginas de componentes. Se actualiza automáticamente mediante TRIGGERS cuando se insertan, actualizan o eliminan componentes del magazine. |
| **fecha_publicacion_magazine** | DATE | - | SÍ | Fecha de publicación. | - | Día, Mes y Año. |
| **sinopsis_magazine** | TEXT | - | SÍ | Resumen corto. | - | - |
| **id_pais** | INT | FK | NO | Id de País que estamos vinculando. | Referencia a PAIS.id_pais | Regla: Es obligatorio registrar el país. |
| **id_editorial** | INT | FK | SI | Id de la Editorial que estamos vinculando. | Referencia a EDITORIAL.id_editorial | - |
| **id_tinta** | INT | FK | NO | Id de la Tinta que estamos vinculando. | Referencia a TINTA.id_tinta | Regla: Es obligatorio registrar la tinta. |
| **id_distribuidora** | INT | FK | SI | Id de la Distribuidora que estamos vinculando. | Referencia a DISTRIBUIDORA.id_distribuidora | - |
| **codigo_distribuidora** | TEXT | - | SI | Código de la Distribuidora. | - | - |
| **rating_magazine** | FLOAT | - | SÍ | Calificación. | - | Rango 1-5 |
| **comentarios_magazine** | TEXT | - | SÍ | Comentarios. | - | - |
| **anotaciones_magazine** | TEXT | - | SÍ | Notas Personales. | - | - |
| **clasificacion_magazine** | BOOLEAN | - | NO | +18 o no | - | TRUE = Contiene contenido +18. FALSE = Todo el contenido es apto para todo público. |
| **pixelizacion_magazine** | BOOLEAN | - | NO | Censurado o no | - | TRUE = Contiene al menos un contenido censurado. FALSE = Todo el contenido está sin censura. |
| **id_edicion** | INT | FK | SI | Id de la expo que estamos vinculando. | Referencia a EDICION_EXPO.id_edicion | - |
| **leido_magazine** | BOOLEAN | - | NO | Si ya fue o no leído el magazine. | - | TRUE = SÍ, FALSE = No |
| **fecha_captura_magazine** | DATE | - | NO | Fecha de captura en la Base de Datos. | - | Día, Mes y Año. |
| **codigo_magazine** | TEXT | - | NO | Código para su Identificación. | - | Se usa el prefijo MGZ- |

*Relación: N:1 – Muchos a Uno*

---

## **VERSIÓN MAGAZINE**

La Entidad `VERSION_MAGAZINE` contiene y maneja las múltiples versiones que puede tener un único `MAGAZINE` y posee los siguientes atributos:

**· ID VERSION.** Identificador único de cada versión específica del Magazine.

**· FK - ID_MAGAZINE.** Enlaza esta versión con el Magazine principal en la entidad `MAGAZINE`.

**· FK - ID IDIOMA.** El idioma en el que se encuentra esta versión específica.

**· TÍTULO.** Nombre del Magazine en el idioma de esta versión. (Depende del Idioma)

**· SOPORTE.** Indica el medio de esta versión. Valores Posibles: **`Físico`, `Digital`.**

**· FK - ID TIPO FORMATO.** El formato específico de esta versión. (Depende del Soporte)

**· ANCHO DE LAS IMAGEN.** Tamaño del ancho de las imágenes en píxeles de esta versión.

**· ALTO DE LAS IMAGEN.** Tamaño del alto de las imágenes en píxeles de esta versión.

**· RESOLUCIÓN.** Calidad de la imagen en DPI.

**· PESO.** Indicar el peso del archivo convertido a Bytes siempre.

**· FK - ID TRADUCTOR.** Indica el traductor de esta versión.

### Entidad VERSION_MAGAZINE

| Nombre del Campo | Tipo de Dato | Clave Key | Nulidad | Descripción o Función | Relaciones FK | Notas |
|---|---|---|---|---|---|---|
| **id_version** | INT | PK | NO | Id único del registro. | - | Autoincremental. |
| **id_magazine** | INT | FK | NO | Id del Magazine que estamos vinculando. | Referencia a MAGAZINE.id_magazine | Regla: Es obligatorio registrar un magazine. |
| **id_idioma** | INT | FK | NO | Id del Idioma que estamos vinculando. | Referencia a IDIOMA.id_idioma | Regla: Es obligatorio registrar un idioma. |
| **titulo_version** | TEXT | - | NO | Título del magazine en este idioma. | - | Depende del idioma. Ej: "週刊少年ジャンプ" (JP), "Salto al Éxito" (ES) |
| **soporte_version** | TEXT | - | NO | Soporte del magazine. Físico o Digital | - | Regla: Es obligatorio registrar el soporte. |
| **id_tipo_formato** | INT | FK | NO | Id del Tipo de Formato que estamos vinculando. | Referencia a TIPO_FORMATO.id_tipo_formato | Regla: Es obligatorio registrar el tipo de formato. |
| **ancho_version** | INT | - | SÍ | Ancho de las Imágenes. | - | Datos en Pixeles. |
| **alto_version** | INT | - | SÍ | Alto de las Imágenes. | - | Datos en Pixeles. |
| **resolucion_version** | INT | - | SÍ | Resolución. | - | Datos en DPI. |
| **peso_version** | BIGINT | - | SÍ | Peso. | - | Datos en Bytes. |
| **id_traductor** | INT | FK | SI | Id del Traductor que estamos vinculando. | Referencia a TRADUCTOR.id_traductor | - |

*Relación: 1:N - Uno a Muchos*

---

## **ÍNDICE VERSION MAGAZINE**

La Entidad `INDICE_VERSION` almacena el índice o listado de las rutas de archivos que componen una versión digital específica de un magazine. Esto permite que cada versión en la tabla `VERSION_MAGAZINE` tenga su propio listado ordenado de páginas/archivos y gráficos que componen.

**· ID_INDICE**. Identificador único del registro de la página o contenido.

**· FK_ID_VERSION**. Enlaza esta ruta con la versión digital correspondiente en la tabla `VERSION_MAGAZINE`.

**· NUMERO_PAGINA.** La página exacta del Magazine donde se encuentra este contenido. Crucial para la ordenación.

**· FK - ID TIPO DE PÁGINA.** Define el tipo de contenido en esta página. 

Valores Posibles: `Portada, Índice, Artículo, Ads, Extra, Sección Especial, Contraportada, Gráfico, Gráfico Nuevo.`

**`Gráfico Nuevo`**: Cuando se registra un Magazine y se selecciona la opción de `Gráfico Nuevo` en el `ID_TIPO_PAGINA` de la entidad `INDICE_VERSION`, la interfaz gráfica detecta el registro como `ID_TIPO_PAGINA` = `Gráfico Nuevo`, por lo que el sistema muestra la opción de capturar la información de este nuevo cómic (botón Capturar Gráfico) en una ventana emergente (popup) con todos los atributos definidos para la entidad `GRAFICO`.

Una vez que el cómic se guarda en la tabla `GRAFICO` y obtiene su `ID_GRAFICO`, el sistema realiza una **actualización automática** en la tabla `INDICE_VERSION`:

- Cambiando `ID_TIPO_PAGINA` de `Gráfico Nuevo` a `Gráfico`.
- Asignando el nuevo `ID_GRAFICO` al campo `FK_ID_GRAFICO` y
- Actualizando `PAGINAS_CONTENIDO` con el valor registrado en el cómic.

**· FK_ID_GRAFICO.** Opcional. Se usa sólo si `ID_TIPO_PAGINA` es `Gráfico`. Almacena el ID_GRAFICO del cómic capturado.

**· PAGINAS_CONTENIDO.** El número de páginas que ocupa este contenido depende del `ID_TIPO_PAGINA`:
- Si es `Gráfico`: se tomará el total de páginas de `GRAFICO.paginas_grafico`
- Si no es `Gráfico`: el número de páginas será 1 por defecto (1 imagen = 1 página)

**· RUTA_ARCHIVO.** Opcional. Se usa sólo si `ID_TIPO_PAGINA` no es `Gráfico` (ej. para la portada, índice, artículos, ads). Almacena la ruta del archivo de imagen.

### Entidad INDICE_VERSION (Magazine)

| Nombre del Campo | Tipo de Dato | Clave Key | Nulidad | Descripción o Función | Relaciones FK | Notas |
|---|---|---|---|---|---|---|
| **id_indice** | INT | PK | NO | Id único del registro. | - | Autoincremental. |
| **id_version** | INT | FK | NO | Id de la versión que estamos vinculando. | Referencia a VERSION_MAGAZINE.id_version | Restricción: Solo para soporte_version = 'Digital' |
| **numero_pagina** | INT | - | NO | Número de página donde inicia este contenido. | - | Valor >= 1 |
| **id_tipo_pagina** | INT | FK | NO | Id del tipo de página que estamos vinculando | Referencia a TIPO_PAGINA.id_tipo_pagina | - |
| **id_grafico** | INT | FK | SÍ | Id del Gráfico que estamos vinculando. | Referencia a GRAFICO.id_grafico | Solo si id_tipo_pagina = 'Gráfico' o 'Gráfico Nuevo' |
| **paginas_contenido** | INT | - | NO | Total de páginas que ocupa este contenido. | - | Si id_tipo_pagina='Gráfico': obtener de GRAFICO.paginas_grafico. Si no: valor = 1 por defecto |
| **ruta_archivo** | TEXT | - | SÍ | Ruta del archivo de imagen. | - | Solo si id_tipo_pagina ≠ 'Gráfico'. Ruta relativa al directorio base. |

### Restricciones y Reglas de Negocio:

- Esta tabla solo aplica para versiones con `soporte_version = 'Digital'`
- El `numero_pagina` debe mantenerse secuencial dentro de una misma `id_version`
- Si `id_tipo_pagina = 'Gráfico'`: `id_grafico` es REQUERIDO y `ruta_archivo` debe ser NULL
- Si `id_tipo_pagina ≠ 'Gráfico'`: `id_grafico` debe ser NULL y `ruta_archivo` es REQUERIDO
- La ruta_archivo debe ser relativa al directorio base de almacenamiento

*Relación: 1:N - Uno a Muchos*

---

## **Tablas Intermedias de MAGAZINE**

### **MAGAZINE_GENEROS**

**· FK - ID MAGAZINE**. Enlaza con la tabla `MAGAZINE`.

**· FK - ID GÉNERO**. Enlaza con la tabla `GENEROS`.

#### Entidad MAGAZINE_GENEROS

| Nombre del Campo | Tipo de Dato | Clave Key | Nulidad | Descripción o Función | Relaciones FK | Notas |
|---|---|---|---|---|---|---|
| **id_magazine** | INT | FK | NO | Id del Magazine que estamos vinculando. | Referencia a MAGAZINE.id_magazine | Regla: Es obligatorio registrar un magazine. |
| **id_genero** | INT | FK | NO | Id del Género que estamos vinculando. | Referencia a GENEROS.id_genero | Regla: Es obligatorio registrar un género. |

*Relación: N:M - Muchos a Muchos*

---

### **MAGAZINE_AUTOR**

**· FK - ID MAGAZINE**. Enlaza con la tabla `MAGAZINE`.

**· FK - ID AUTOR**. Enlaza con la tabla `AUTOR`.

#### Entidad MAGAZINE_AUTOR

| Nombre del Campo | Tipo de Dato | Clave Key | Nulidad | Descripción o Función | Relaciones FK | Notas |
|---|---|---|---|---|---|---|
| **id_magazine** | INT | FK | NO | Id del Magazine que estamos vinculando. | Referencia a MAGAZINE.id_magazine | Regla: Es obligatorio registrar un magazine. |
| **id_autor** | INT | FK | NO | Id del Autor que estamos vinculando. | Referencia a AUTOR.id_autor | Regla: Es obligatorio registrar un autor. |

*Relación: N:M - Muchos a Muchos*

---

### **MAGAZINE_AVISOS**

**· FK - ID MAGAZINE**. Enlaza con la tabla `MAGAZINE`.

**· FK - ID AVISO**. Enlaza con la tabla `AVISOS`.

#### Entidad MAGAZINE_AVISOS

| Nombre del Campo | Tipo de Dato | Clave Key | Nulidad | Descripción o Función | Relaciones FK | Notas |
|---|---|---|---|---|---|---|
| **id_magazine** | INT | FK | NO | Id del Magazine que estamos vinculando. | Referencia a MAGAZINE.id_magazine | Regla: Es obligatorio registrar un magazine. |
| **id_aviso** | INT | FK | NO | Id del Aviso que estamos vinculando. | Referencia a AVISOS.id_aviso | Regla: Es obligatorio registrar un aviso. |

*Relación: N:M - Muchos a Muchos*

---

## **Tablas Catálogos Globales**

### **TIPO_FORMATO**

Catálogo global que contiene los formatos disponibles para publicaciones impresas o digitales. Se utiliza en `GRAFICO`, `MAGAZINE` y otras entidades que manejen contenido publicado.

**Valores Posibles** (Depende del soporte, sólo uno a la vez)

`Formato Físico = Pasta Dura, Pasta Blanda / Formato Digital = JPG, PNG, WebP, PDF, CBR.`

**· ID TIPO FORMATO.** Identificador único.

**· NOMBRE FORMATO.** El formato específico.

**· TIPO SOPORTE.** Indica si el formato es para Físico o Digital.

#### Entidad TIPO_FORMATO

| Nombre del Campo | Tipo de Dato | Clave Key | Nulidad | Descripción o Función | Relaciones FK | Notas |
|---|---|---|---|---|---|---|
| **id_tipo_formato** | INT | PK | NO | Id único del registro. | - | Autoincremental. |
| **nombre_formato** | TEXT | - | NO | Formato del contenido. | - | Regla: Es obligatorio registrar el formato. |
| **tipo_soporte** | VARCHAR(50) | - | NO | Soporte del contenido. | - | Físico o Digital. Regla: Es obligatorio registrar el soporte. |

#### Valores Posibles

| Id | Formato | Soporte |
|---|---|---|
| 1 | Pasta Dura | Físico |
| 2 | Pasta Blanda | Físico |
| 3 | JPG | Digital |
| 4 | PNG | Digital |
| 5 | WEBP | Digital |
| 6 | PDF | Digital |
| 7 | CBR | Digital |

*Relación: 1:N - Uno a Muchos*

---

### **TIPO DE PÁGINA**

La Entidad `TIPO_PAGINA` contiene e indica el tipo de página que componen un `GRAFICO`, `MAGAZINE` y otras entidades que manejen contenido publicado.

**Valores Posibles** (sólo uno a la vez): **`Portada, Índice, Artículo, Ads, Extra, Sección Especial, Contraportada, Gráfico, Gráfico Nuevo.`**

**· ID TIPO PÁGINA.** Identificador único.

**· NOMBRE DEL TIPO.** Nombre de los valores posibles que puede tener la entidad `TIPO_PAGINA.`

#### Entidad TIPO_PAGINA

| Nombre del Campo | Tipo de Dato | Clave Key | Nulidad | Descripción o Función | Relaciones FK | Notas |
|---|---|---|---|---|---|---|
| **id_tipo_pagina** | INT | PK | NO | Id único del registro. | - | Autoincremental. |
| **nombre_tipo** | VARCHAR(50) | - | NO | El nombre del tipo de página. | - | - |

#### Valores Posibles

| Id | Nombre |
|---|---|
| 1 | Portada |
| 2 | Índice |
| 3 | Artículo |
| 4 | Ads |
| 5 | Extra |
| 6 | Sección Especial |
| 7 | Contraportada |
| 8 | Gráfico |
| 9 | Gráfico Nuevo |

*Relación: 1:N - Uno a Muchos*

---

### **EDITORIAL**

La Entidad `EDITORIAL` contiene las compañías editoriales relacionadas con `GRAFICO`, `MAGAZINE` y otras entidades que manejen contenido publicado.

**Funcionalidad:** Este elemento funcionará como un vínculo a un sitio donde se muestran todos los elementos que comparten la misma editorial.

**· ID EDITORIAL.** Identificador único.

**· NOMBRE EDITORIAL.** Nombre de la compañía editorial.

#### Entidad EDITORIAL

| Nombre del Campo | Tipo de Dato | Clave Key | Nulidad | Descripción o Función | Relaciones FK | Notas |
|---|---|---|---|---|---|---|
| **id_editorial** | INT | PK | NO | Id único del registro. | - | Autoincremental. |
| **nombre_editorial** | TEXT | - | NO | El nombre de la editorial. | - | - |

*Relación: 1:N - Uno a Muchos*

---

### **DISTRIBUIDORA**

La Entidad `DISTRIBUIDORA` contiene las distribuidoras relacionadas con los `GRAFICO`, `MAGAZINE` y otras entidades que manejen contenido publicado.

**Funcionalidad:** Este elemento funcionará como un vínculo a un sitio donde se muestran todos los elementos que comparten la misma distribuidora.

**· ID DISTRIBUIDORA.** Identificador único.

**· NOMBRE DISTRIBUIDORA.** Nombre de la Distribuidora.

#### Entidad DISTRIBUIDORA

| Nombre del Campo | Tipo de Dato | Clave Key | Nulidad | Descripción o Función | Relaciones FK | Notas |
|---|---|---|---|---|---|---|
| **id_distribuidora** | INT | PK | NO | Id único del registro. | - | Autoincremental. |
| **nombre_distribuidora** | TEXT | - | NO | El nombre de la distribuidora. | - | - |

*Relación: 1:N - Uno a Muchos*

---

### **GÉNEROS**

La Entidad `GENEROS` contiene todos los géneros que clasifican los `GRAFICO`, `MAGAZINE` y otras entidades que manejen contenido publicado.

**Funcionalidad:** Este elemento funcionará como un vínculo a un sitio donde se muestran todos los elementos que comparten el mismo género.

**· ID GÉNERO.** Identificador único.

**· NOMBRE GÉNERO.** Nombre del Género.

#### Entidad GENEROS

| Nombre del Campo | Tipo de Dato | Clave Key | Nulidad | Descripción o Función | Relaciones FK | Notas |
|---|---|---|---|---|---|---|
| **id_genero** | INT | PK | NO | Id único del registro. | - | Autoincremental. |
| **nombre_genero** | TEXT | - | NO | El nombre del género. | - | - |

*Relación: N:M - Muchos a Muchos*

---

### **TINTA**

La Entidad `TINTA` contiene los tipos de tintas que están relacionados con `GRAFICO`, `MAGAZINE` y otras entidades que manejen contenido publicado.

**Valores Posibles** (sólo uno a la vez): **`Color, Blanco & Negro, Sepia, Mixto`**.

**Funcionalidad:** Este elemento funcionará como un vínculo a un sitio donde se muestran todos los elementos que comparten el mismo tipo de tinta.

**· ID TINTA.** Identificador único.

**· NOMBRE TINTA.** Nombre del tipo de Tinta.

#### Entidad TINTA

| Nombre del Campo | Tipo de Dato | Clave Key | Nulidad | Descripción o Función | Relaciones FK | Notas |
|---|---|---|---|---|---|---|
| **id_tinta** | INT | PK | NO | Id único del registro. | - | Autoincremental. |
| **nombre_tinta** | VARCHAR(50) | - | NO | El nombre de la tinta. | - | - |

#### Valores Posibles

| Id | Nombre |
|---|---|
| 1 | Color |
| 2 | Blanco & Negro |
| 3 | Sepia |
| 4 | Mixto |

*Relación: 1:N - Uno a Muchos*

---

### **AUTOR**

La Entidad `AUTOR` contiene a los autores relacionados con `GRAFICO`, `MAGAZINE` y otras entidades que manejen contenido publicado.

**Funcionalidad:** Este elemento funcionará como un vínculo a un sitio donde se muestran todos los elementos que compartan el mismo autor.

**· ID AUTOR.** Identificador único.

**· NOMBRE AUTOR.** Nombre del Autor.

#### Entidad AUTOR

| Nombre del Campo | Tipo de Dato | Clave Key | Nulidad | Descripción o Función | Relaciones FK | Notas |
|---|---|---|---|---|---|---|
| **id_autor** | INT | PK | NO | Id único del registro. | - | Autoincremental. |
| **nombre_autor** | TEXT | - | NO | El nombre del autor. | - | - |

*Relación: N:M - Muchos a Muchos*

---

### **AKA**

La Entidad `AKA` contiene e indica los alias o seudónimos que puede tener un mismo autor.

**Funcionalidad:** Este elemento funcionará como un vínculo a un sitio donde se muestran todos los elementos que comparten el mismo aka.

**· ID AKA.** Identificador único.

**· FK ID AUTOR.** Enlaza esta ruta con el autor correspondiente en la tabla `AUTOR`.

**· AKA.** Seudónimo o alias del autor.

#### Entidad AKA

| Nombre del Campo | Tipo de Dato | Clave Key | Nulidad | Descripción o Función | Relaciones FK | Notas |
|---|---|---|---|---|---|---|
| **id_aka** | INT | PK | NO | Id único del registro. | - | Autoincremental. |
| **id_autor** | INT | FK | NO | Id del Autor que estamos vinculando. | Referencia a AUTOR.id_autor | Regla: Es obligatorio registrar un autor. |
| **aka** | TEXT | - | NO | El Seudónimo. | - | - |

*Relación: N:1 - Muchos a Uno*

---

### **LISTA DE EXPOS**

La Entidad `EXPO` contiene un listado de las exposiciones o convenciones.

**Valores Posibles**: **`Comic Market, Anime Japan.`**

**Funcionalidad:** Este elemento funcionará como un vínculo a un sitio donde se muestran todos los elementos que comparten ese mismo valor.

**· ID EXPOSICIÓN.** Identificador único.

**· NOMBRE EXPOSICIÓN.** Nombre de la exposición.

#### Entidad EXPO

| Nombre del Campo | Tipo de Dato | Clave Key | Nulidad | Descripción o Función | Relaciones FK | Notas |
|---|---|---|---|---|---|---|
| **id_expo** | INT | PK | NO | Id único del registro. | - | Autoincremental. |
| **nombre_expo** | TEXT | - | NO | El Nombre de la convención. | - | - |

#### Valores Posibles

| Id | Nombre |
|---|---|
| 1 | Comic Market |
| 2 | Anime Japan |

*Relación: 1:N - Uno a Muchos*

---

### **EDICIÓN EXPO**

La Entidad `EDICION_EXPO` indica los detalles de una exposición o convención.

**Funcionalidad:** Este elemento funcionará como un vínculo a un sitio donde se muestran todos los elementos que comparten ese mismo valor.

**· ID EDICIÓN.** Identificador único.

**· FK - ID EXPO.** Enlaza la edición con su Expo correspondiente en la entidad `EXPO`.

**· NOMBRE EDICIÓN.** Nombre completo de la edición.

**· FECHA EDICIÓN.** Fecha de la edición.

**· NÚMERO EDICIÓN.** Número de la edición.

#### Entidad EDICION_EXPO

| Nombre del Campo | Tipo de Dato | Clave Key | Nulidad | Descripción o Función | Relaciones FK | Notas |
|---|---|---|---|---|---|---|
| **id_edicion** | INT | PK | NO | Id único del registro. | - | Autoincremental. |
| **id_expo** | INT | FK | NO | Id de la Expo que estamos vinculando. | Referencia a EXPO.id_expo | - |
| **nombre_edicion** | TEXT | - | SI | Nombre completo de la edición. | - | - |
| **fecha_edicion** | DATE | - | SI | Fecha de edición del evento. | - | - |
| **numero_edicion** | INT | - | SI | Número de la edición. | - | - |

#### Valores de Referencia

| Elemento | Dato |
|---|---|
| id_edicion | 106 |
| id_expo | 1 |
| nombre_edicion | Summer Comiket |
| fecha_edicion | Agosto 2025 |
| numero_edicion | 106 |

*Relación: 1:N - Uno a Muchos*

---

### **PAÍS**

La Entidad `PAIS` contiene e indica el país de origen.

**Valores Posibles** (sólo uno a la vez): **`Japón, Corea del Sur, EEUU, México`**.

**Funcionalidad:** Este elemento funcionará como un vínculo a un sitio donde se muestran todos los elementos que comparten ese mismo país.

**· ID PAÍS.** Identificador único.

**· NOMBRE DEL PAÍS.** Nombre del país.

#### Entidad PAIS

| Nombre del Campo | Tipo de Dato | Clave Key | Nulidad | Descripción o Función | Relaciones FK | Notas |
|---|---|---|---|---|---|---|
| **id_pais** | INT | PK | NO | Id único del registro. | - | Autoincremental. |
| **nombre_pais** | VARCHAR(50) | - | NO | El nombre del país. | - | - |

#### Valores Posibles

| Id | Nombre |
|---|---|
| 1 | Japón |
| 2 | Corea del Sur |
| 3 | EEUU |
| 4 | México |

*Relación: 1:N - Uno a Muchos*

---

### **IDIOMA**

La Entidad `IDIOMA` contiene e indica el idioma.

**Valores Posibles** (sólo uno a la vez): **`Japonés, Coreano, Inglés, Español.`**

**Funcionalidad:** Este elemento funcionará como un vínculo a un sitio donde se muestran todos los elementos que comparten ese mismo idioma.

**· ID IDIOMA.** Identificador único.

**· NOMBRE DEL IDIOMA.** Nombre del idioma.

#### Entidad IDIOMA

| Nombre del Campo | Tipo de Dato | Clave Key | Nulidad | Descripción o Función | Relaciones FK | Notas |
|---|---|---|---|---|---|---|
| **id_idioma** | INT | PK | NO | Id único del registro. | - | Autoincremental. |
| **nombre_idioma** | VARCHAR(50) | - | NO | El nombre del idioma. | - | - |

#### Valores Posibles

| Id | Nombre |
|---|---|
| 1 | Japonés |
| 2 | Coreano |
| 3 | Inglés |
| 4 | Español |

*Relación: 1:N - Uno a Muchos*

---

### **TRADUCTOR**

La Entidad `TRADUCTOR` contiene los traductores.

**Funcionalidad:** Este elemento funcionará como un vínculo a un sitio donde se muestran todos los elementos que comparten ese mismo traductor.

**· ID TRADUCTOR.** Identificador único.

**· NOMBRE DEL TRADUCTOR.** Nombre del traductor.

#### Entidad TRADUCTOR

| Nombre del Campo | Tipo de Dato | Clave Key | Nulidad | Descripción o Función | Relaciones FK | Notas |
|---|---|---|---|---|---|---|
| **id_traductor** | INT | PK | NO | Id único del registro. | - | Autoincremental. |
| **nombre_traductor** | TEXT | - | NO | El nombre del traductor. | - | - |

*Relación: 1:N - Uno a Muchos*

---

### **AVISOS**

La Entidad `AVISOS` contiene los diferentes valores que muestran el tipo de contenido que tienen los elementos.

**Valores Posibles**: **`Sangre/Gore, Desnudez, Lenguaje Ofensivo, Tabaquismo, Violencia, Contenido Sexual, Diálogos Sugerentes.`**

**Funcionalidad:** Este elemento funcionará como un vínculo a un sitio donde se muestran todos los elementos que comparten ese mismo valor.

**· ID AVISO.** Identificador único.

**· NOMBRE AVISO.** Tipo de aviso de contenido.

#### Entidad AVISOS

| Nombre del Campo | Tipo de Dato | Clave Key | Nulidad | Descripción o Función | Relaciones FK | Notas |
|---|---|---|---|---|---|---|
| **id_aviso** | INT | PK | NO | Id único del registro. | - | Autoincremental. |
| **nombre_aviso** | TEXT | - | NO | El valor del aviso. | - | - |

#### Valores Posibles

| Id | Nombre |
|---|---|
| 1 | Sangre/Gore |
| 2 | Desnudez |
| 3 | Lenguaje Ofensivo |
| 4 | Tabaquismo |
| 5 | Violencia |
| 6 | Contenido Sexual |
| 7 | Diálogos Sugerentes |

*Relación: N:M - Muchos a Muchos*

---

## **Triggers y Reglas de Negocio**

### **TRIGGER: Actualización de paginas_magazine**

**Tabla afectada:** `MAGAZINE`

**Campo calculado:** `paginas_magazine`

**Descripción:**

Este trigger actualiza automáticamente el número total de páginas de un magazine sumando las páginas de todos sus componentes (portada, índice, artículos, gráficos, ads, contraportada, etc.).

**Eventos que disparan el trigger:**

- INSERT en tabla INDICE_VERSION (cuando id_version pertenece a un MAGAZINE)
- UPDATE en tabla INDICE_VERSION (cuando cambia el número de páginas)
- DELETE en tabla INDICE_VERSION

**Fórmula de cálculo:**

```sql
paginas_magazine = SUM(paginas_contenido)
FROM INDICE_VERSION iv
JOIN VERSION_MAGAZINE vm ON iv.id_version = vm.id_version
WHERE vm.id_magazine = [id_magazine_actual]
```

**Nota:** Este campo no debe ser editado manualmente por el usuario.

---

### **PROCESO: Captura de Gráfico Nuevo**

**Tabla afectada:** `INDICE_VERSION` (Magazine)

**Descripción:** 

Proceso para capturar un nuevo gráfico que forma parte de un magazine directamente desde el índice del magazine.

#### Flujo completo:

**1. Estado inicial en INDICE_VERSION:**

```
id_tipo_pagina: 9 (Gráfico Nuevo)
id_grafico: NULL
numero_pagina: 50
paginas_contenido: 0 (temporal)
ruta_archivo: NULL
```

**2. Usuario presiona "Capturar Gráfico":**

- Se abre popup con formulario completo de GRAFICO
- Usuario llena todos los atributos del nuevo gráfico
- Se guarda en tabla GRAFICO → obtiene `id_grafico = 789` con `paginas_grafico = 20`

**3. Actualización automática atómica:**

```sql
UPDATE INDICE_VERSION 
SET 
  id_tipo_pagina = 8,      -- Cambia a "Gráfico"
  id_grafico = 789,         -- Asigna el nuevo id
  paginas_contenido = (
    SELECT paginas_grafico 
    FROM GRAFICO 
    WHERE id_grafico = 789
  ),                         -- Obtiene las 20 páginas
  ruta_archivo = NULL        -- Se asegura que sea NULL
WHERE id_indice = [id_actual]
```

**4. Resultado final:**

```
id_tipo_pagina: 8 (Gráfico)
id_grafico: 789
numero_pagina: 50
paginas_contenido: 20
ruta_archivo: NULL
```

---

## **Diagrama de Relaciones**

```
COLECCION_MAGAZINE (1) ──→ (N) MAGAZINE (1) ──→ (N) VERSION_MAGAZINE (1) ──→ (N) INDICE_VERSION
                                    ↓                                                      ↓
                            MAGAZINE_GENEROS                                         TIPO_PAGINA
                            MAGAZINE_AUTOR                                               ↓
                            MAGAZINE_AVISOS                                          GRAFICO (opcional)

GRAFICO (1) ──→ (N) VERSION_GRAFICO (1) ──→ (N) INDICE_VERSION
    ↓
GRAFICO_GENEROS
GRAFICO_AUTOR
GRAFICO_AVISOS
```

---

**Fin del Documento**