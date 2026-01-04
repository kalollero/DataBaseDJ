

Estructura de la Base de Datos

**DataBase**

Se desea crear una base de datos.  
Las entidades principales que componen la Base de datos son:   
**GRÁFICOS, MAGAZINES, EPISODIOS, SERIES,**   
**FILMES, SAGAS Y EXTRAS.** 

\*\*Notas Técnicas sobre Tipos de Datos:\*\*

\*\*BOOLEAN:\*\* SQLite no tiene tipo BOOLEAN nativo.   
Los campos booleanos se almacenan como INTEGER con valores 0 (FALSE) o 1 (TRUE).   
En la documentación se especifica como BOOLEAN por claridad conceptual.

**GRAFICO**  
La Entidad `GRAFICO` contiene y muestra todos los cómics con los siguientes atributos:

**· ID GRÁFICO.** Identificador único. 

**· FK \- ID TIPO GRÁFICO.**  Clave Foránea que enlaza con la entidad `TIPO_GRAFICO`.

**· PÁGINAS.** Número de Páginas que tiene el cómic. 

**· FECHA DE PUBLICACIÓN O ESTRENO DEL CÓMIC.** Representa la fecha en que el elemento fue publicado o estrenado. Almacenamiento en BD: Tipo *DATE* formato YYYY-MM-DD (ej: 2025-09-25). Formato de Visualización: Se debe mostrar al usuario como DD · MMM · YYYY , el día, después el mes y luego el año, separados por un punto medio (ejemplo: 25 · Sep · 2025). La conversión se realiza en la capa de aplicación.  
**Funcionalidad:** Actúa como vínculo a un sitio que muestre todos los gráficos que compartan la **misma fecha completa**, o el **mismo mes**, o el **mismo año**. Esto implica que el sistema debe poder consultar por diferentes niveles de granularidad de la fecha.

**· SINOPSIS.** Resumen corto de la historia del cómic.

**· FK · ID PAÍS**. Indica el país de origen del Gráfico.

**· FK · ID EDITORIAL**. Indica la editorial del Gráfico.

**· FK · ID TINTA**. Indica el tipo de tinta que tiene el Gráfico.

· FK · **ID DISTRIBUIDORA**. Indica la distribuidora que tiene el Gráfico. 

**· CÓDIGO DISTRIBUIDORA**. Indica el código que le asigna la distribuidora al cómic.

**· RATING.** Calificación del Cómic de 1 a 5\.

**· COMENTARIOS.** Puntos de vista personales acerca del cómic y su contenido.

**· ANOTACIONES.** Notas o anotaciones personales.

**· CLASIFICACIÓN.** Indica si el gráfico es para mayores de 18 años o para todo público.

**· PIXELIZACIÓN.** Indica si el gráfico contiene censura o no.

**· FK · ID EDICIÓN**. Indica la Expo en donde se presentó el Gráfico.

**· LEÍDO.** Indica si el cómic ya fue leído o no.

**· FECHA DE CAPTURA.** Fecha en que se captura el cómic en la base de datos. Se compone del día/mes/año.

**· CÓDIGO.** Es un código alfanumérico que se utiliza para identificar el elemento de manera única en la interfaz. Formato de Generación: Se genera anteponiendo un prefijo específico de la categoría al ID único de la entidad, para `GRAFICO`**:** Prefijo `"GR-"` \+ `ID_GRAFICO` (Ej. `GR-123`)

| Entidad Principal GRAFICO · Tabla Maestra |  |  |  |  |  |  |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| Nombre del Campo | Tipo de  Dato | Clave Key | Nulidad | Descripción o Función | Relaciones FK | Notas |
| **id\_grafico** | INT | PK | NO | Id único y primario del registro. | \- | Autoincremental. |
| **id\_tipo\_grafico** | INT | FK | NO | Id de TIPO\_GRAFICO que estamos vinculando. | Referencia a TIPO\_GRAFICO.id\_tipo\_grafico | \- |
| **paginas\_grafico** | INT | \- | NO | No. de páginas. | \- | \- |
| **fecha\_publicacion\_grafico** | DATE | \- | SÍ | Fecha de publicación. | \- | Día, Mes y Año. |
| **sinopsis\_grafico** | TEXT | \- | SÍ | Resumen corto. | \- | \- |
| **id\_pais** | INT | FK | NO | Id de País que estamos vinculando. | Referencia a PAIS.id\_pais | Regla: Es obligatorio registrar el país. |
| **id\_editorial** | INT | FK | SI | Id de la Editorial que estamos vinculando. | Referencia a EDITORIAL.id\_editorial | \- |
| **id\_tinta** | INT | FK | NO | Id de la Tinta que estamos vinculando. | Referencia a TINTA.id\_tinta | Regla: Es obligatorio registrar la tinta. |
| **id\_distribuidora** | INT | FK | SI | Id de la Distribuidora que estamos vinculando. | Referencia a DISTRIBUIDORA.id\_distribuidora | \- |
| **codigo\_distribuidora** | TEXT | \- | SI | Código de la Distribuidora. | \- | \- |
| **rating\_grafico** | FLOAT | \- | SÍ | Calificación. | \- | \- |
| **comentarios\_grafico** | TEXT | \- | SÍ | Comentarios. | \- | \- |
| **anotaciones\_grafico** | TEXT | \- | SÍ | Notas Personales. | \- | \- |
| **clasificacion\_grafico** | BOOLEAN | \- | NO | \+18 o no. | \- | TRUE \= \+18 FALSE \= Todo público |
| **pixelizacion\_grafico** | BOOLEAN | \- | NO | Censurado o no. | \- | TRUE \= Censurado FALSE \= Sin censura |
| **id\_edicion** | INT | FK | SI | Id de la expo que estamos vinculando. | Referencia a edicion\_EXPO.id\_edicion | \- |
| **leido\_grafico** | BOOLEAN | \- | NO | Si fue o no leído ya el cómic. | \- | TRUE \= SÍ FALSE \= No |
| **fecha\_captura\_grafico** | DATE | \- | NO | Fecha de captura en la Base de Datos. | \- | Día, Mes y Año. |
| **codigo\_grafico** | TEXT | \- | NO | Código para su Identificación. | \- | Se usa el prefijo GR- |

*1:N  – Uno a Muchos –*

**TIPO DE GRÁFICO**  
La Entidad `TIPO_GRAFICO` contiene e indica la clasificación específica de un gráfico.  
**Valores Posibles** (sólo uno a la vez): **`Cómic, Manga, Doujinshi, Manhua, Manhwa, Webtoon e Historieta.`**  
**Funcionalidad:** Este elemento funcionará como un vínculo a un sitio donde se muestran todos los que comparten ese mismo tipo.

**· ID TIPO GRÁFICO.** Identificador único.  
**· NOMBRE DEL TIPO.** Nombre de los valores posibles que puede tener la entidad `GRAFICO`.

| Entidad TIPO\_GRAFICO |  |  |  |  |  |  |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| Nombre del Campo | Tipo de  Dato | Clave Key | Nulidad | Descripción o Función | Relaciones FK | Notas |
| **id\_tipo\_grafico** | INT | PK | NO | Id único del registro. | \- | Autoincremental. |
| **nombre\_tipo** | VARCHAR (50) | \- | NO | El nombre del tipo de cómic. | \- | Regla: Es obligatorio registrar el tipo. |

**Valores Posibles**

| Id | Nombre |
| :---: | :---- |
| 1 | Cómic |
| 2 | Manga |
| 3 | Doujinshi |
| 4 | Manhua |
| 5 | Manhwa |
| 6 | Webtoon |
| 7 | Historieta |

*N: 1 – Muchos a Uno –* 

**VERSIÓN GRÁFICO**  
La Entidad `VERSION_GRAFICO` contiene y maneja las múltiples versiones que puede tener un único `GRAFICO` y posee los siguientes atributos:

**· ID VERSION.** Identificador único de cada versión específica del Gráfico.  
**· FK \- ID GRÁFICO.** Enlaza esta versión con el cómic principal en la entidad `GRAFICO`.  
**· FK \- ID IDIOMA.** El idioma en el que se encuentra esta versión específica**.**  
**· TÍTULO.** Nombre del gráfico en el idioma de esta versión. (Depende del Idioma)   
**· SOPORTE.** Indica el medio de esta versión. Valores Posibles: **`Físico`, `Digital`.**  
**· FK \- ID TIPO FORMATO.** El formato específico de esta versión. (Dependerá del Soporte)  
**· ANCHO DE LAS IMAGEN.** Tamaño del ancho de las imágenes en píxeles de esta versión.  
**· ALTO DE LAS IMAGEN.** Tamaño del alto de las imágenes en píxeles de esta versión.  
**· RESOLUCIÓN.** Calidad de la imagen en DPI.  
**· PESO. I**ndicar el peso del archivo convertido a Bytes siempre.  
**· FK \- ID TRADUCTOR.** Indica el traductor de esta versión.

| Entidad VERSION\_GRAFICO |  |  |  |  |  |  |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| Nombre del Campo | Tipo de  Dato | Clave Key | Nulidad | Descripción o Función | Relaciones FK | Notas |
| **id\_version** | INT | PK | NO | Id único del registro. | \- | Autoincremental. |
| **id\_grafico** | INT | FK | NO | Id del Gráfico que estamos vinculando. | Referencia a GRAFICO.id\_grafico | Regla: Es obligatorio registrar un gráfico. |
| **id\_idioma** | INT | FK | NO | Id del Idioma que estamos vinculando. | Referencia a IDIOMA.id\_idioma | Regla: Es obligatorio registrar un idioma. |
| **titulo\_version** | TEXT | \- | NO | Título del cómic. | \- | \- |
| **soporte\_version** | TEXT | \- | NO | Soporte del cómic. Físico o Digital | \- | Regla: Es obligatorio registrar el soporte. |
| **id\_tipo\_formato** | INT | FK | NO | Id del Tipo de Formato que estamos vinculando. | Referencia a TIPO\_FORMATO.id\_tipo\_formato | Regla: Es obligatorio registrar el tipo de formato. |
| **ancho\_version** | INT | \- | SÍ | Ancho de las Imágenes. | \- | Datos en Pixeles. |
| **alto\_version** | INT | \- | SÍ | Alto de las Imágenes. | \- | Datos en Pixeles. |
| **resolucion\_version** | INT | \- | SÍ | Resolución. | \- | Datos en DPI. |
| **peso\_version** | BIGINT | \- | SÍ | Peso. | \- | Datos en Bytes. |
| **id\_traductor** | INT | FK | SI | Id del Ttraductor que estamos vinculando. | Referencia a TRADUCTOR.id\_traductor | \- |

*1:N  \- Uno a Muchos \-*

**ÍNDICE VERSIÓN**

La Entidad `INDICE_VERSION` almacena el índice o listado de las rutas de archivos que componen una versión digital específica. Esto permite que cada versión en la tabla `VERSION_GRAFICO` tenga su propio listado ordenado de páginas/archivos.

**· ID ÍNDICE**. Identificador único para el registro de cada archivo/página.  
**· FK \- ID VERSION**. Enlaza esta ruta con la versión digital correspondiente en la tabla `VERSION_GRAFICO`.  
**· NÚMERO DE PÁGINA.** El número de página (o índice) que representa este archivo, es crucial para mantener el orden de lectura.  
**· RUTA DEL ARCHIVO.** La ruta absoluta o relativa donde se encuentra el archivo de la página en el sistema de almacenamiento.  
**· FK \- ID TIPO DE PÁGINA.**·El tipo de contenido que es la página del cómic.

| Entidad INDICE\_VERSION |  |  |  |  |  |  |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| Nombre del Campo | Tipo de  Dato | Clave Key | Nulidad | Descripción o Función | Relaciones FK | Notas |
| **id\_indice** | INT | PK | NO | Id único del registro. | \- | Autoincremental. |
| **id\_version** | INT | FK | NO | Id de la versión que estamos vinculando. | Referencia a VERSION\_GRAFICO.id\_version | Restricción: Solo aplica para soporte\_version \= 'Digital'. |
| **numero\_pagina** | INT | \- | NO | Número de página del archivo. | \- | Valor \>= 0 (0 \= portada) |
| **ruta\_archivo** | TEXT | \- | NO | Ruta del archivo. | \- | Ruta relativa al directorio base. |
| **id\_tipo\_pagina** | INT | FK | NO | Id del tipo de página que estamos vinculando | Referencia a TIPO\_PAGINA.id\_tipo\_pagina | \- |

\*Restricciones y Reglas de Negocio: 

\- Esta tabla solo aplica para versiones con soporte\_version \= 'Digital'.  
\- El numero\_pagina debe ser único por id\_version.  
\- numero\_pagina \= 0 indica portada.  
\- La ruta\_archivo debe ser relativa al directorio base de almacenamiento.  
*Tablas Intermedias*

*N: M \- Muchos a Muchos \-*

**GRAFICO\_GENEROS**

**· FK \- ID GRÁFICO**. Enlaza esta ruta con la tabla `GRAFICO`.  
**· FK \- ID GÉNERO**. Enlaza esta ruta con la tabla `GENEROS`.

| Entidad GRAFICO\_GENEROS |  |  |  |  |  |  |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| Nombre del Campo | Tipo de  Dato | Clave Key | Nulidad | Descripción o Función | Relaciones FK | Notas |
| **id\_grafico** | INT | FK | NO | Id del Gráfico que estamos vinculando. | Referencia a GRAFICO.id\_grafico | Regla: Es obligatorio registrar un gráfico. |
| **id\_genero** | INT | FK | NO | Id del Género que estamos vinculando. | Referencia a GENEROS.id\_genero | Regla: Es obligatorio registrar un género. |

*N: M \- Muchos a Muchos \-*

**GRAFICO\_AUTOR**

**· FK \- ID GRÁFICO**. Enlaza esta ruta con la tabla `GRAFICO`.  
**· FK \- ID AUTOR**. Enlaza esta ruta con la tabla `AUTOR`.

| Entidad GRAFICO\_AUTOR |  |  |  |  |  |  |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| Nombre del Campo | Tipo de  Dato | Clave Key | Nulidad | Descripción o Función | Relaciones FK | Notas |
| **id\_grafico** | INT | FK | NO | Id del Gráfico que estamos vinculando. | Referencia a GRAFICO.id\_grafico | Regla: Es obligatorio registrar un gráfico. |
| **id\_autor** | INT | FK | NO | Id del Autor que estamos vinculando. | Referencia a AUTOR.id\_autor | Regla: Es obligatorio registrar un autor. |

*N: M \- Muchos a Muchos \-*

**GRAFICO\_AVISOS**

**· FK \- ID GRÁFICO**. Enlaza esta ruta con la tabla `GRAFICO`.  
**· FK \- ID AVISO**. Enlaza esta ruta con la tabla `AVISOS`.

| Entidad GRAFICO\_AVISOS |  |  |  |  |  |  |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| Nombre del Campo | Tipo de  Dato | Clave Key | Nulidad | Descripción o Función | Relaciones FK | Notas |
| **id\_grafico** | INT | FK | NO | Id del Gráfico que estamos vinculando. | Referencia a GRAFICO.id\_grafico | Regla: Es obligatorio registrar un gráfico. |
| **id\_aviso** | INT | FK | NO | Id del Aviso que estamos vinculando. | Referencia a AVISOS.id\_aviso | Regla: Es obligatorio registrar un aviso |

**COLECCIÓN MAGAZINE**  
La Entidad `COLECCION` se componen de varios números de magazines con los siguientes atributos:

**· ID COLECCIÓN.** Identificador único. 

**· NOMBRE COLECCIÓN.** Nombre general de la colección de Magazines.

**· TIPO DE PUBLICACIÓN.** Frecuencia de publicación del magazine: **`Semanal, Mensual, Bimestral, Anual o por Evento.`** 

**· ESTADO DE LA EMISIÓN.** Muestra si el Magazine se sigue publicando o ya terminó de publicarse.

**· FECHA INICIO.** Indica la fecha de la primera publicación.

**· FECHA FINAL.** Indica la fecha de la última publicación.

**· DESCRIPCIÓN.** D.

**· CÓDIGO.** Es un código alfanumérico que se utiliza para identificar el elemento de manera única en la interfaz. Formato de Generación: Se genera anteponiendo un prefijo específico de la categoría al ID único de la entidad, para `COLECCION`**:** Prefijo `"CN-"` \+ `ID_COLECCION` (Ej. `CN-123`)

| Entidad Principal COLECCION MAGAZINE · Tabla Maestra |  |  |  |  |  |  |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| Nombre del Campo | Tipo de  Dato | Clave Key | Nulidad | Descripción o Función | Relaciones FK | Notas |
| **id\_coleccion** | INT | PK | NO | Id único y primario del registro. | \- | Autoincremental. |
| **nombre\_coleccion** | TEXT | \- | NO | Nombre de la Colección. | \- | \- |
| **tipo\_publicacion** | TEXT | \- | SI | Frecuencia de publicación. | \- | Semanal, Mensual, Bimestral, Anual o por Evento. |
| **estado\_emision** | BOOLEAN | \- | NO | Si aún se publica. | \- | TRUE \=  En Emisión FALSE \= Finalizado |
| **fecha\_inicio** | DATE | \- | SI | Fecha de la primera publicación. | \- | Día, Mes y Año. |
| **fecha\_fin** | DATE | \- | SI | Fecha de la última publicación. | . | Día, Mes y Año. |
| **descripcion\_coleccion** | TEXT | \- | SI | Descripción | \- | \- |
| **codigo\_coleccion** | TEXT | \- | NO | Código para su Identificación. | \- | Se usa el prefijo CN- |

**MAGAZINE**  
Un Magazine puede componerse de elementos únicos, cómo su portada, índice, contraportada, artículos, ads y Gráficos de diferentes autores. Estos últimos pueden encontrarse ya capturados o capturarse al momento mismo de la captura del Magazine.

La Entidad `MAGAZINE` contiene y muestra todos los magazines con los siguientes atributos:

**· ID MAGAZINE.** Identificador único. 

**· FK · ID COLECCION.** Indica la colección a la que pertenece.

**· NÚMERO MAGAZINE.** Número del Magazine dentro de la colección..  

**· PÁGINAS TOTALES.** Representa el número total de páginas del magazine. Regla de Cálculo: Este valor es la suma de las páginas de todos los elementos que componen el `MAGAZINE`.

**· FECHA DE PUBLICACIÓN O ESTRENO DEL MAGAZINE.** Representa la fecha en que el elemento fue publicado o estrenado. Almacenamiento en BD: Tipo *DATE* formato YYYY-MM-DD (ej: 2025-09-25). Formato de Visualización: Se debe mostrar al usuario como DD · MMM · YYYY , el día, después el mes y luego el año, separados por un punto medio (ejemplo: 25 · Sep · 2025). La conversión se realiza en la capa de aplicación.  
**Funcionalidad:** Actúa como vínculo a un sitio que muestre todos los `MAGAZINES` que compartan la **misma fecha completa**, o el **mismo mes**, o el **mismo año**. Esto implica que el sistema debe poder consultar por diferentes niveles de granularidad de la fecha.

**· SINOPSIS.** Resumen corto de la historia del cómic.

**· FK · ID PAÍS**. Indica el país de origen del Gráfico.

**· FK · ID EDITORIAL**. Indica la editorial del Gráfico.

**· FK · ID TINTA**. Indica el tipo de tinta que tiene el Magazine. 

· FK · **ID DISTRIBUIDORA**. Indica la distribuidora que tiene el Magazine. 

**· CÓDIGO DISTRIBUIDORA**. Indica el código que le asigna la distribuidora al Magazine.

**· RATING.** Calificación del magazine.

**· COMENTARIOS.** Puntos de vista personales acerca del magazine y su contenido.

**· ANOTACIONES.** Notas o anotaciones personales.

**· CLASIFICACIÓN.** Indica si el gráfico es para mayores de 18 años o para todo público. 

**· PIXELIZACIÓN.** Indica si el gráfico contiene censura o no.

**· FK · ID EDICIÓN**. Indica la Expo en donde se presentó el Magazine.

**· LEÍDO.** Indicar si el magazine ya fue leído o no.

**· FECHA DE CAPTURA.** Fecha en que se captura el magazine en la base de datos. Se compone del día/mes/año.

**· CÓDIGO.** Es un código alfanumérico que se utiliza para identificar el elemento de manera única en la interfaz. Formato de Generación: Se genera anteponiendo un prefijo específico de la categoría al ID único de la entidad, para `MAGAZINE`**:** Prefijo `"MGZ-"` \+ `ID_MAGAZINE` (Ej. `MGZ-456`)

| Entidad Principal MAGAZINE · Tabla Maestra |  |  |  |  |  |  |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| Nombre del Campo | Tipo de  Dato | Clave Key | Nulidad | Descripción o Función | Relaciones FK | Notas |
| **id\_magazine** | INT | PK | NO | Id único y primario del registro. | \- | Autoincremental. |
| **id\_coleccion** | INT | FK | SI | ID de la Colección a la que pertenece. | COLECCION\_MAGAZINE.id\_coleccion | NULL para magazines independientes. |
| **numero\_magazine** | INT | \- | SI | Número dentro de la colección. | \- | NULL si no es parte de una colección. |
| **paginas\_magazine** | INT | \- | NO | No. de páginas totales. | \- | Campo calculado: suma de páginas de componentes. Se actualiza automáticamente mediante TRIGGERS cuando se insertan, actualizan o eliminan componentes del magazine. |
| **fecha\_publicacion\_magazine** | DATE | \- | SÍ | Fecha de publicación. | \- | Día, Mes y Año. |
| **sinopsis\_magazine** | TEXT | \- | SÍ | Resumen corto. | \- | \- |
| **id\_pais** | INT | FK | NO | Id de País que estamos vinculando. | Referencia a PAIS.id\_pais | Regla: Es obligatorio registrar el país. |
| **id\_editorial** | INT | FK | SI | Id de la Editorial que estamos vinculando. | Referencia a EDITORIAL.id\_editorial | \- |
| **id\_tinta** | INT | FK | NO | Id de la Tinta que estamos vinculando. | Referencia a TINTA.id\_tinta | Regla: Es obligatorio registrar la tinta. |
| **id\_distribuidora** | INT | FK | SI | Id de la Distribuidora que estamos vinculando. | Referencia a DISTRIBUIDORA.id\_distribuidora | \- |
| **codigo\_distribuidora** | TEXT | \- | SI | Código de la Distribuidora. | \- | \- |
| **rating\_magazine** | FLOAT | \- | SÍ | Calificación. | \- | \- |
| **comentarios\_magazine** | TEXT | \- | SÍ | Comentarios. | \- | \- |
| **anotaciones\_magazine** | TEXT | \- | SÍ | Notas Personales. | \- | \- |
| **clasificacion\_magazine** | BOOLEAN | \- | NO | \+18 o no | \- | **TRUE** \= Contiene contenido **\+18. FALSE** \=Todo el contenido es apto para todo público. |
| **pixelizacion\_magazine** | BOOLEAN | \- | NO | Censurado o no | \- | **TRUE** \= Contiene al menos un contenido censurado. **FALSE** \= Todo el contenido está sin censura. |
| **id\_edicion** | INT | FK | SI | Id de la expo que estamos vinculando. | Referencia a edicion\_EXPO.id\_edicion | \- |
| **leido\_magazine** | BOOLEAN | \- | NO | Si ya fue o no leído el magazine. | \- | \- |
| **fecha\_captura\_magazine** | DATE | \- | NO | Fecha de captura en la Base de Datos. | \- | Día, Mes y Año. |
| **codigo\_magazine** | TEXT | \- | NO | Código para su Identificación. | \- | Se usa el prefijo MGZ- |

*N: 1 – Muchos a Uno –* 

**VERSIÓN MAGAZINE**  
La Entidad `VERSION_MAGAZINE` contiene y maneja las múltiples versiones que puede tener un único `MAGAZINE` y posee los siguientes atributos:

**· ID VERSION.** Identificador único de cada versión específica del Magazine.  
**· FK \- ID\_MAGAZINE.** Enlaza esta versión con el Magazine principal en la entidad `MAGAZINE`.  
**· FK \- ID IDIOMA.** El idioma en el que se encuentra esta versión específica  
**· TÍTULO.** Nombre del Magazine en el idioma de esta versión. (Depende del Idioma)   
**· SOPORTE.** Indica el medio de esta versión. Valores Posibles: **`Físico`, `Digital`.**  
**· FK \- ID FORMATO.** El formato específico de esta versión. Valores Posibles: (Depende del Soporte)   
**· ANCHO DE LAS IMAGEN.** Tamaño del ancho de las imágenes en píxeles de esta versión.  
**· ALTO DE LAS IMAGEN.** Tamaño del alto de las imágenes en píxeles de esta versión.  
**· RESOLUCIÓN.** Calidad de la imagen en DPI.  
**· PESO. I**ndicar el peso del archivo convertido a Bytes siempre.  
**· FK \- ID TRADUCTOR.** Indica el traductor de esta versión.

| Entidad VERSION\_MAGAZINE |  |  |  |  |  |  |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| Nombre del Campo | Tipo de  Dato | Clave Key | Nulidad | Descripción o Función | Relaciones FK | Notas |
| **id\_version** | INT | PK | NO | Id único del archivo. | \- | Autoincremental. |
| **id\_magazine** | INT | FK | NO | Id del Magazine que estamos vinculando. | Referencia a MAGAZINE.id\_magazine | \- |
| **id\_idioma** | INT | FK | NO | Id del Idioma que estamos vinculando. | Referencia a IDIOMA.id\_idioma | Regla: Es obligatorio registrar un idioma. |
| **titulo\_version** | TEXT | \- | NO | Título del magazine. | \- | \- |
| **soporte\_version** | TEXT | \- | NO | Soporte del magazine. Físico o Digital | \- | Regla: Es obligatorio registrar el soporte. |
| **id\_tipo\_formato** | INT | FK | NO | Id del Tipo de Formato que estamos vinculando. | Referencia a TIPO\_FORMATO.id\_tipo\_formato | Regla: Es obligatorio registrar el tipo de formato. |
| **ancho\_version** | INT | \- | SÍ | Ancho de las Imágenes. | \- | Datos en Pixeles. |
| **alto\_version** | INT | \- | SÍ | Alto de las Imágenes. | \- | Datos en Pixeles. |
| **resolucion\_version** | INT | \- | SÍ | Resolución. | \- | Datos en DPI. |
| **peso\_version** | BIGINT | \- | SÍ | Peso. | \- | Datos en Bytes. |
| **id\_traductor** | INT | FK | SI | Id del Ttraductor que estamos vinculando. | Referencia a TRADUCTOR.id\_traductor | \- |

*1:N  \- Uno a Muchos \-*

**ÍNDICE VERSIÓN**

La Entidad `INDICE_VERSION` almacena el índice o listado de las rutas de archivos que componen una versión digital específica. Esto permite que cada versión en la tabla `VERSION_MAGAZINE` tenga su propio listado ordenado de páginas/archivos y gráficos que componen.

**· ID\_INDICE**. Identificador único del registro de la página o contenido.  
**· FK\_ID\_VERSIO**N**.** Enlaza esta ruta con la versión digital correspondiente en la tabla `VERSION_MAGAZINE`.  
**· NUMERO\_PAGINA.** La página exacta del Magazine donde se encuentra este contenido. Crucial para la ordenación.  
**· FK \- ID TIPO DE PÁGINA.** Define el tipo de contenido en esta página. `Portada, Índice, Artículo, Ads, Extra, Sección Especial, Contraportada, Gráfico, Gráfico Nuevo.`  
**`Gráfico Nuevo`**: Cuando se registra un Magazine, se selecciona la opción de `Gráfico Nuevo` en el `TIPO_PAGINA` de la entidad `INDICE VERSION`, la interfaz gráfica detecta el registro como `TIPO_PAGINA` \= `Gráfico Nuevo` por lo que el sistema muestra la opción de capturar la información de este nuevo cómic (botón Capturar Gráfico) en una ventana emergente (popup) con todos los atributos definidos para la entidad `GRAFICO`.

Una vez que el cómic se guarda en la tabla `GRAFICO` y obtiene su `ID_GRAFICO`, el sistema realiza una **actualización automática** en la tabla `INDICE VERSION`:   
· Cambiando  `TIPO_PAGINA` de `Nuevo_grafico` a `Gráfico`.   
· Asignando el nuevo `ID_GRÁFICO` al campo `FK_ID_GRAFICO` y   
· Actualizando `PAGINAS_CONTENIDO` con el valor registrado en el del cómic.

**· FK\_ID\_GRAFICO.** Opcional. Se usa sólo si T`IPO_PAGINA` es `GRAFICO`. Almacena la ID\_GRAFICO del cómic capturado.  
**· PAGINAS\_CONTENIDO.** El número de páginas que ocupa este archivo depende del T`IPO_PAGINA`, si es `GRAFICO` se tomará el total de páginas que almacena PAGINAS\_GRAFICO del ID\_GRAFICO**,** si no es `GRAFICO` el número de páginas será 1 por defecto   
**· RUTA\_ARCHIVO.** Opcional. Se usa sólo si T`IPO_PAGINA` no es `GRAFICO` (ej. para la portada, índice). Almacena la ruta del archivo.

| Entidad INDICE\_MAGAZINE |  |  |  |  |  |  |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| Nombre del Campo | Tipo de  Dato | Clave Key | Nulidad | Descripción o Función | Relaciones FK | Notas |
| **id\_indice** | INT | PK | NO | Id único del archivo. | \- | Autoincremental. |
| **id\_version** | INT | FK | NO | Id de la versión que estamos vinculando. | Referencia a VERSION\_MAGAZINE.id\_version | Restricción: Solo para soporte\_version \= 'Digital' |
| **numero\_pagina** | INT | \- | NO | Número de página del archivo. | \- | Regla: Es obligatorio registrar el número de página. Valor \>= 1 |
| **id\_tipo\_pagina** | INT | FK | NO | Id del tipo de página que estamos vinculando | Referencia a TIPO\_PAGINA.id\_tipo\_pagina | \- |
| **id\_grafico** | INT | FK | NO | Id del Gráfico que estamos vinculando. | Referencia a GRAFICO.id\_grafico | Solo si id\_tipo\_contenido \= 'Gráfico' o 'Gráfico Nuevo' |
| **paginas\_contenido** | INT | \- | NO | Total de páginas que ocupa. | \- | Si id\_tipo\_contenido='Gráfico': obtener de GRAFICOS.paginas\_grafico. Si no: valor \= 1 por defecto |
| **ruta\_archivo** | TEXT | \- | \- | Ruta del archivo. | \- | Es opcional y depende del tipo\_contenido |

**Restricciones y Reglas de Negocio:**

* Esta tabla solo aplica para versiones con `soporte_version = 'Digital'`  
* El `numero_pagina` debe mantenerse secuencial dentro de una misma `id_version`  
* Si `id_tipo_contenido = 'Gráfico'`: `id_grafico` es REQUERIDO y `ruta_archivo` debe ser NULL  
* Si `id_tipo_contenido ≠ 'Gráfico'`: `id_grafico` debe ser NULL y `ruta_archivo` es REQUERIDO  
* La ruta\_archivo debe ser relativa al directorio base de almacenamiento

*Tablas Intermedias*

*Tablas Catálogos Globales*

*1: N \- Uno a Muchos \-*

**TIPO\_FORMATO**  
Catálogo global que contiene los formatos disponibles para publicaciones impresas o digitales. Se utiliza en `GRAFICOS`, `MAGAZINE` y otras entidades que manejen contenido publicado.  
**Valores Posibles** (Depende del soporte, sólo uno a la vez)  
`Formato Físico = Tapa Dura, Tapa Blanda / Formato Digital = Jpg, Png, WebP, Pdf, Cbr.`

**· ID TIPO FORMATO.** Identificador único de cada versión específica de la publicación.  
**· NOMBRE FORMATO.** El formato específico de esta versión.

| Entidad TIPO\_FORMATO |  |  |  |  |  |  |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| Nombre del Campo | Tipo de  Dato | Clave Key | Nulidad | Descripción o Función | Relaciones FK | Notas |
| **id\_tipo\_formato** | INT | PK | NO | Id único del registro. | \- | Autoincremental. |
| **nombre\_formato** | TEXT | \- | NO | Formato del cómic. | \- | Regla: Es obligatorio registrar el formato. |
| **tipo\_soporte** | VARCHAR(50) | \- | NO | Soporte del cómic. | \- | Regla: Es obligatorio registrar el soporte. |

**Valores Posibles**

| Id | Formato | Soporte |
| :---: | :---- | :---- |
| 1 | Pasta Dura | Físico |
| 2 | Pasta Blanda | Físico |
| 3 | JPG | Digital |
| 4 | PNG | Digital |
| 5 | WEBP | Digital |
| 6 | PDF | Digital |
| 7 | CBR | Digital |

*1: N \- Uno a Muchos \-*

**TIPO DE PÁGINA**  
La Entidad `TIPO_PAGINA` contiene e indica el tipo que tiene página que componen un `GRAFICOS`, `MAGAZINE` y otras entidades que manejen contenido publicado.  
**Valores Posibles** (sólo uno a la vez): **`Portada, Índice, Contenido, Contraportada, Extra.`**

**· ID TIPO PÁGINA.** Identificador único.  
**· NOMBRE DEL TIPO.** Nombre de los valores posibles que puede tener la entidad `TIPO_PAGINA.`

| Entidad TIPO\_PAGINA |  |  |  |  |  |  |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| Nombre del Campo | Tipo de  Dato | Clave Key | Nulidad | Descripción o Función | Relaciones FK | Notas |
| **id\_tipo\_pagina** | INT | PK | NO | Id único del registro. | \- | Autoincremental. |
| **nombre\_tipo** | VARCHAR (50) | \- | NO | El nombre del tipo. | \- | \- |

**Valores Posibles**

| Id | Nombre |
| :---: | :---- |
| 1 | Portada |
| 2 | Índice |
| 3 | Contenido |
| 3 | Artículo |
| 4 | Ads (Publicidad) |
| 5 | Extra |
| 6 | Contraportada |
| 7 | Gráfico |
| 8 | Gráfico Nuevo (Estado Temporal) |

*1: N \- Uno a Muchos \-*

**EDITORIAL**  
La Entidad `EDITORIAL` contiene las compañías editoriales relacionadas con `GRAFICOS`, `MAGAZINE` y otras entidades que manejen contenido publicado.  
**Funcionalidad:** Este elemento funcionará como un vínculo a un sitio donde se muestran todos los elementos que comparten la misma editorial.

**· ID EDITORIAL.** Identificador único.  
**· NOMBRE EDITORIAL.** Nombre de la compañía editorial.

| Entidad EDITORIAL |  |  |  |  |  |  |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| Nombre del Campo | Tipo de  Dato | Clave Key | Nulidad | Descripción o Función | Relaciones FK | Notas |
| **id\_editorial** | INT | PK | NO | Id único del registro. | \- | Autoincremental. |
| **nombre\_editorial** | TEXT | \- | NO | El nombre de la editorial. | \- | \- |

*1: N \- Uno a Muchos \-*

**DISTRIBUIDORA**  
La Entidad `DISTRIBUIDORA` contiene las distribuidoras relacionadas con los `GRAFICOS`, `MAGAZINE` y otras entidades que manejen contenido publicado.  
**Funcionalidad:** Este elemento funcionará como un vínculo a un sitio donde se muestran todos los elementos que comparten la misma distribuidora.

**· ID DISTRIBUIDORA.** Identificador único.  
**· NOMBRE DISTRIBUIDORA.** Nombre de la Distribuidora.

| Entidad DISTRIBUIDORA |  |  |  |  |  |  |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| Nombre del Campo | Tipo de  Dato | Clave Key | Nulidad | Descripción o Función | Relaciones FK | Notas |
| **id\_distribuidora** | INT | PK | NO | Id único del registro. | \- | Autoincremental. |
| **nombre\_distribuidora** | TEXT | \- | NO | El nombre de la distribuidora. | \- | \- |

*N: M \- Muchos a Muchos \-*

**GÉNEROS**  
La Entidad `GENEROS` contiene todos los géneros que clasifican los `GRAFICOS`, `MAGAZINE` y otras entidades que manejen contenido publicado.

**Funcionalidad:** Este elemento funcionará como un vínculo a un sitio donde se muestran todos los elementos que comparten el mismo género

**· ID GÉNERO.** Identificador único.  
**· NOMBRE GÉNERO.** Nombre del Género.

| Entidad GENEROS |  |  |  |  |  |  |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| Nombre del Campo | Tipo de  Dato | Clave Key | Nulidad | Descripción o Función | Relaciones FK | Notas |
| **id\_genero** | INT | PK | NO | Id único del registro. | \- | Autoincremental. |
| **nombre\_genero** | TEXT | \- | NO | El nombre del género. | \- | \- |

**Valores Posibles**

| Id | Nombre |
| :---: | :---- |
| 1 | Escolares |
| 2 | Fantasía |
| 3 | NTR |
| 4 | Harem |
| 5 | Cosplay |
| 6 | Chica Ángel |
| 7 | Vanilla |

*1:N  \- Uno a Muchos \-*

**TINTA**  
La Entidad `TINTA` contiene los tipos de tintas que están relacionados con `GRAFICOS`, `MAGAZINE` y otras entidades que manejen contenido publicado.  
**Valores Posibles** (sólo uno a la vez): **`Color, Blanco & Negro, Sepia y Mixto`**.  
**Funcionalidad:** Este elemento funcionará como un vínculo a un sitio donde se muestran todos los elementos que comparten el mismo tipo de tinta.

**· ID TINTA.** Identificador único.  
**· NOMBRE TINTA.** Nombre del color de la Tinta.

| Entidad TINTA |  |  |  |  |  |  |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| Nombre del Campo | Tipo de  Dato | Clave Key | Nulidad | Descripción o Función | Relaciones FK | Notas |
| **id\_tinta** | INT | PK | NO | Id único del registro. | \- | Autoincremental. |
| **nombre\_tinta** | VARCHAR (50) | \- | NO | El nombre de la tinta. | \- | \- |

**Valores Posibles**

| Id | Nombre |
| :---: | :---- |
| 1 | Color |
| 2 | Blanco & Negro |
| 3 | Sepia |
| 4 | Mixto |

*N: M \- Muchos a Muchos \-*

**AUTOR**  
La Entidad `AUTOR` contiene a los autores relacionados con `GRAFICOS`, `MAGAZINE` y otras entidades que manejen contenido publicado.  
**Funcionalidad:** Este elemento funcionará como un vínculo a un sitio donde se muestran todos los elementos que compartan el mismo autor.

**· ID AUTOR.** Identificador único.  
**· NOMBRE AUTOR.** Nombre del Autor.

| Entidad AUTOR |  |  |  |  |  |  |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| Nombre del Campo | Tipo de  Dato | Clave Key | Nulidad | Descripción o Función | Relaciones FK | Notas |
| **id\_autor** | INT | PK | NO | Id único del registro. | \- | Autoincremental. |
| **nombre\_autor** | TEXT | \- | NO | El nombre del autor. | \- | \- |

*N: 1 \- Muchos a Uno \-*

**AKA**  
La Entidad `AKA` contiene e indica los alias o seudónimos que puede tener un mismo autor.  
**Funcionalidad:** Este elemento funcionará como un vínculo a un sitio donde se muestran todos los elementos que comparten el mismo aka.

**· ID AKA.** Identificador único.  
**· FK ID AUTOR.** Enlaza esta ruta con el autor correspondiente en la tabla `AUTOR`.  
**· AKA.** Nombre de los valores posibles que puede tener la entidad `AKA.`

| Entidad AKA |  |  |  |  |  |  |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| Nombre del Campo | Tipo de  Dato | Clave Key | Nulidad | Descripción o Función | Relaciones FK | Notas |
| **id\_aka** | INT | PK | NO | Id único del registro. | \- | Autoincremental. |
| **id\_autor** | INT | FK | NO | Id del Autor que estamos vinculando. | Referencia a AUTOR.id\_autor | Regla: Es obligatorio registrar un autor. |
| **aka** | TEXT | \- | NO | El Seudónimo. | \- | \- |

*1: N \- Uno a Muchos \-*

**LISTA DE EXPOS**  
La Entidad `EXPO` contiene un listado de las exposiciones o convenciones en que se presentó el Magazine.  
**Valores Posibles**: **`Comic Market, Anime Japan.`**  
**Funcionalidad:** Este elemento funcionará como un vínculo a un sitio donde se muestran todos los elementos que comparten ese mismo valor.

**· ID EXPOSICIÓN.** Identificador único.  
**· NOMBRE EXPOSICIÓN.** Nombre de los valores posibles que puede tener la entidad `EXPO.`

| Entidad EXPO |  |  |  |  |  |  |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| Nombre del Campo | Tipo de  Dato | Clave Key | Nulidad | Descripción o Función | Relaciones FK | Notas |
| **id\_expo** | INT | PK | NO | Id único del registro. | \- | Autoincremental. |
| **nombre\_expo** | TEXT | \- | NO | El Nombre de la convención. | \- | \- |

**Valores Posibles**

| Id | Nombre |
| :---: | :---- |
| 1 | Comic Market |
| 2 | Anime Japan |

*1: N \- Uno a Muchos \-*

**EDICIÓN EXPO**  
La Entidad `EDICION_EXPO` indica los detalles de una exposición o convención.  
**Funcionalidad:** Este elemento funcionará como un vínculo a un sitio donde se muestran todos los elementos que comparten ese mismo valor.

**· ID EXPO.** Identificador único  
**· FK \- ID EXPO.** Enlaza la edición con su Expo correspondiente en la entidad `EXPO`.  
**· NOMBRE EDICIÓN.** Nombre completo de la edición.  
**· FECHA EDICIÓN.** Fecha de la edición.  
**· NÚMERO EDICIÓN.** Número de la edición.

| Entidad EDICION\_EXPO |  |  |  |  |  |  |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| Nombre del Campo | Tipo de  Dato | Clave Key | Nulidad | Descripción o Función | Relaciones FK | Notas |
| **id\_edicion** | INT | PK | NO | Id único del registro. | \- | Autoincremental. |
| **id\_expo** | INT | FK | NO | Id de la Expo que estamos vinculando. | Referencia a EXPO.id\_expo | \- |
| **nombre\_edicion** | TEXT | \- | SI | Nombre completo de la edición. | \- | \- |
| **fecha\_edicion** | DATE | \- | SI | Fecha de edición del evento. | \- | \- |
| **numero\_edicion** | INT | \- | SI | Número de la edición. | \- | \- |

**Valores de Referencia**

| Elemento | Dato |
| :---: | :---: |
| id\_edicion | 106 |
| id\_expo | 1 |
| nombre\_edicion | Summer Comiket |
| fecha\_edicion | Agosto 2025 |
| numero\_edicion | 106 |

*1: N \- Uno a Muchos \-*

**PAÍS**  
La Entidad `PAIS` contiene e indica el país de origen.  
**Valores Posibles** (sólo uno a la vez): **`Japón, Corea del Sur, EEUU, México`**.  
**Funcionalidad:** Este elemento funcionará como un vínculo a un sitio donde se muestran todos los elementos que comparten ese mismo país.

**· ID PAÍS.** Identificador único.  
**· NOMBRE DEL PAÏS.** Nombre de los valores posibles que puede tener la entidad `PAIS.`

| Entidad PAIS |  |  |  |  |  |  |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| Nombre del Campo | Tipo de  Dato | Clave Key | Nulidad | Descripción o Función | Relaciones FK | Notas |
| **id\_pais** | INT | PK | NO | Id único del registro. | \- | Autoincremental. |
| **nombre\_pais** | VARCHAR (50) | \- | NO | El nombre del país. | \- | \- |

**Valores Posibles**

| Id | Nombre |
| :---: | :---- |
| 1 | Japón |
| 2 | Corea del Sur |
| 3 | EEUU |
| 4 | México |

*1: N \- Uno a Muchos \-*

**IDIOMA**  
La Entidad `IDIOMA` contiene e indica el idioma.  
**Valores Posibles** (sólo uno a la vez): **`Japonés, Coreano, Inglés, Español.`**  
**Funcionalidad:** Este elemento funcionará como un vínculo a un sitio donde se muestran todos los elementos que comparten ese mismo idioma.

**· ID IDIOMA.** Identificador único.  
**· NOMBRE DEL IDIOMA.** Nombre de los valores posibles que puede tener la entidad `IDIOMA.`

| Entidad IDIOMA |  |  |  |  |  |  |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| Nombre del Campo | Tipo de  Dato | Clave Key | Nulidad | Descripción o Función | Relaciones FK | Notas |
| **id\_idioma** | INT | PK | NO | Id único del registro. | \- | Autoincremental. |
| **nombre\_idioma** | VARCHAR (50) | \- | NO | El nombre del idioma. | \- | \- |

**Valores Posibles**

| Id | Nombre |
| :---: | :---- |
| 1 | Japonés |
| 2 | Coreano |
| 3 | Inglés |
| 4 | Español |

*1: N \- Uno a Muchos \-*

**TRADUCTOR**  
La Entidad `TRADUCTOR` contiene los traductores.  
**Funcionalidad:** Este elemento funcionará como un vínculo a un sitio donde se muestran todos los elementos que comparten ese mismo traductor.

**· ID TRADUCTOR.** Identificador único.  
**· NOMBRE DEL TRADUCTOR.** Nombre de los traductores posibles que puede tener la entidad `TRADUCTOR.`

| Entidad TRADUCTOR |  |  |  |  |  |  |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| Nombre del Campo | Tipo de  Dato | Clave Key | Nulidad | Descripción o Función | Relaciones FK | Notas |
| **id\_traductor** | INT | PK | NO | Id único del registro. | \- | Autoincremental. |
| **nombre\_traductor** | TEXT | \- | NO | El nombre del traductor. | \- | \- |

*N: M \- Mucho a Muchos \-*

**AVISOS**  
La Entidad `AVISOS` contiene los diferentes valores que muestran el tipo de contenido que tienen los elementos.  
**Valores Posibles**:  
**`Sangre/Gore, Desnudez, Lenguaje Ofensivo, Tabaquismo, Violencia, Contenido Sexual, Diálogos Sugerentes.`**  
**Funcionalidad:** Este elemento funcionará como un vínculo a un sitio donde se muestran todos los elementos que comparten ese mismo valor.

**· ID AVISO.** Identificador único.  
**· VALOR DEL AVISO.** Nombre de los valores posibles que puede tener la entidad `AVISOS.`

| Entidad AVISOS |  |  |  |  |  |  |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| Nombre del Campo | Tipo de  Dato | Clave Key | Nulidad | Descripción o Función | Relaciones FK | Notas |
| **id\_aviso** | INT | PK | NO | Id único del registro. | \- | Autoincremental. |
| **nombre\_aviso** | TEXT | \- | NO | El valor del aviso. | \- | \- |

**Valores Posibles**

| Id | Nombre |
| :---: | :---- |
| 1 | Sangre/Gore |
| 2 | Desnudez |
| 3 | Lenguaje Ofensivo |
| 4 | Tabaquismo |
| 5 | Violencia |
| 6 | Contenido Sexual |
| 7 | Diálogos Sugerentes |

\*\*Triggers y Reglas de Negocio\*\*

**TRIGGER:** Actualización de páginas\_magazine.  
Tabla afectada: `MAGAZINE`  
Campo calculado: paginas\_magazine

**Descripción:**   
Este trigger actualiza automáticamente el número total de páginas de un magazine   
sumando las páginas de todos sus componentes (portada, índice, artículos, gráficos,   
ads, contraportada, etc.).

**Eventos que disparan el trigger:**  
· INSERT en tabla COMPONENTES\_MAGAZINE  
· UPDATE en tabla COMPONENTES\_MAGAZINE (cuando cambia el número de páginas)  
· DELETE en tabla COMPONENTES\_MAGAZINE

**Fórmula de cálculo:**

paginas\_magazine \= SUM(paginas\_componente)   
FROM COMPONENTES\_MAGAZINE   
WHERE id\_magazine \= \[id\_magazine\_actual\]

\*\*Nota:\*\* Este campo no debe ser editado manualmente por el usuario.

\*  \*  \*

**GRÁFICO NUEVO**  
Tabla afectada: `MAGAZINE`  
Captura de un nuevo gráfico que compone un Magazine..

### Flujo completo:

1\. Estado inicial en INDICE\_VERSION:

id\_tipo\_contenido: 9 (Gráfico Nuevo)  
id\_grafico: NULL  
numero\_pagina: 50  
paginas\_contenido: 0 (temporal)

2\. Usuario presiona "Capturar Gráfico":

* Se abre popup con formulario completo de GRAFICOS  
* Usuario llena todos los atributos del nuevo gráfico  
* Se guarda en tabla GRAFICOS → obtiene `id_grafico = 789` con `paginas_grafico = 20`

3\. Actualización automática atómica:

`UPDATE` INDICE\_VERSION   
`SET`   
  id\_tipo\_contenido \= `8`, \-- Cambia a "Gráfico"  
  id\_grafico \= `789`,      \-- Asigna el nuevo id  
  paginas\_contenido \= (`SELECT` paginas\_grafico `FROM` GRAFICOS `WHERE` id\_grafico \= `789`), \-- Obtiene las 20 páginas  
  ruta\_archivo \= `NULL`    \-- Se asegura que sea NULL  
`WHERE` id\_indice \= \[id\_actual\]  
\`\`\`

4\. Resultado final:  
\`\`\`  
id\_tipo\_contenido: `8` (Gráfico)  
id\_grafico: `789`  
numero\_pagina: `50`  
paginas\_contenido: `20`  
ruta\_archivo: `NULL`

