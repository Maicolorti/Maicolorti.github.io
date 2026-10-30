export type EvidenceType = 'EJERCICIO PRÁCTICO' | 'EJERCICIO CALIFICABLE' | 'PROYECTO';
export type EvidenceStatus = 'available' | 'upcoming';

export interface EvidenceSection {
  title?: string;
  description?: string;
  image?: string;
  imageAlt?: string;
}

export interface EvidenceDetailBlock {
  title: string;
  paragraphs?: string[];
  items?: string[];
}

export interface EvidenceItem {
  slug: string;
  order: number;
  type: EvidenceType;
  title: string;
  subtitle?: string;
  shortDescription: string;
  context?: string;
  statementIntro?: string;
  statementBlocks?: EvidenceDetailBlock[];
  businessRules?: string[];
  assumptionsIntro?: string;
  assumptions?: EvidenceDetailBlock[];
  activityDescription?: string;
  solutionImage?: string;
  solutionAlt?: string;
  sections?: EvidenceSection[];
  pdfUrl?: string;
  pdfLabel?: string;
  complementaryFileUrl?: string;
  complementaryFileLabel?: string;
  status: EvidenceStatus;
}

export interface CategoryData {
  slug: string;
  name: string;
  title: string;
  description: string;
  evidences: EvidenceItem[];
}

export const CATEGORIES_DATA: Record<string, CategoryData> = {
  modelado: {
    slug: 'modelado',
    name: 'Modelado',
    title: 'Modelado | Bases de Datos 1',
    description:
      'En esta sección se recopilan las actividades relacionadas con el diseño conceptual de bases de datos, construcción de modelos Entidad–Relación y análisis de requerimientos realizados durante la asignatura Bases de Datos 1.',
    evidences: [
      {
        slug: 'champions-league',
        order: 1,
        type: 'EJERCICIO PRÁCTICO',
        title: 'Modelo Entidad–Relación',
        subtitle: 'University Champions League',
        shortDescription:
          'Diseño de un modelo Entidad–Relación para representar la información de un torneo universitario.',
        context:
          'Diseño de un modelo Entidad–Relación para un sistema de información encargado de almacenar y organizar las estadísticas del torneo de fútbol University Champions League de la Universidad El Bosque.',
        activityDescription:
          'La actividad consiste en diseñar un modelo Entidad–Relación que permita representar la información necesaria para administrar el torneo de fútbol. El modelo contempla información relacionada con equipos, jugadores, semestres, programas académicos, partidos, puntos obtenidos, tarjetas amarillas y rojas, y las posiciones de los equipos dentro de la competencia.',
        solutionImage: '/evidencias/modelado/ModeloEntidadRelacion.png',
        solutionAlt: 'Modelo Entidad-Relación de University Champions League',
        pdfUrl: '/evidencias/modelado/ModeloEntidadRelacion.pdf',
        status: 'available',
      },
      {
        slug: 'quiz-1',
        order: 2,
        type: 'EJERCICIO CALIFICABLE',
        title: 'Quiz 1',
        subtitle:
          'Fundamentos de Bases de Datos, Modelo Entidad–Relación y Modelo Entidad–Relación Extendido',
        shortDescription:
          'Evaluación sobre fundamentos de bases de datos, modelo Entidad–Relación y modelo Entidad–Relación Extendido.',
        context:
          'Actividad enfocada en la aplicación de conceptos fundamentales de bases de datos, interpretación de requerimientos, diseño de modelos Entidad–Relación y uso de características extendidas como relaciones ternarias, especialización y agregación.',
        sections: [
          {
            title: 'Punto 1 — Interpretación y corrección de un modelo',
            description:
              'En este punto se realizó el análisis de un modelo Entidad–Relación existente, identificando errores en entidades, atributos, relaciones, cardinalidades y participación. A partir de las reglas del negocio se propuso una solución corregida que representa adecuadamente la información del sistema.',
            image: '/evidencias/modelado/quiz-1/punto-1.png',
            imageAlt: 'Solución punto 1 Quiz 1 Modelo Entidad-Relación',
          },
          {
            title: 'Punto 2 — Diseño de un modelo Entidad–Relación',
            description:
              'Este ejercicio consistió en diseñar un modelo conceptual para una biblioteca universitaria, identificando entidades como títulos, ejemplares, usuarios y préstamos, además de definir atributos, relaciones, claves, cardinalidades y restricciones necesarias para representar el sistema.',
            image: '/evidencias/modelado/quiz-1/punto-2.png',
            imageAlt: 'Solución punto 2 Quiz 1 Modelo Entidad-Relación',
          },
          {
            title: 'Punto 3 — Características extendidas del modelo E-R',
            description:
              'En este punto se trabajaron conceptos avanzados del modelo Entidad–Relación Extendido, incluyendo relaciones ternarias, especialización y agregación. Se analizaron situaciones donde estos elementos permiten representar de manera más precisa las reglas de un sistema.',
            image: '/evidencias/modelado/quiz-1/punto-3.png',
            imageAlt: 'Solución punto 3 Quiz 1 Modelo Entidad-Relación Extendido',
          },
        ],
        status: 'available',
      },
      {
        slug: 'taller-transformaciones',
        order: 3,
        type: 'EJERCICIO CALIFICABLE',
        title: 'Taller de Transformaciones',
        subtitle:
          'Reglas de transformación de modelos conceptuales Entidad–Relación a modelos lógicos relacionales',
        shortDescription:
          'Taller evaluativo sobre la aplicación de reglas de transformación de modelos conceptuales Entidad–Relación al esquema relacional.',
        context:
          'Taller 1 — Reducción a Tablas: Reglas de Transformación del Modelo Entidad–Relación (Caso: Terminal Portuaria Bahía Verde). En este taller el resultado de cada punto es un modelo Entidad–Relación transformado en notación de Peter Chen, paso previo al modelo relacional donde ya no pueden quedar atributos compuestos, multivaluados ni derivados, ni relaciones N:M, ternarias, de agregación o de especialización.',
        statementIntro:
          'A partir del modelo conceptual validado de la Terminal Portuaria Bahía Verde, la actividad exige transformar sus componentes en notación de Peter Chen mostrando entidades, relaciones, atributos, cardinalidades y participaciones, acompañando cada transformación con la justificación de la regla aplicada.',
        statementBlocks: [
          {
            title: 'Modelo de partida — Entidades y atributos (Terminal Portuaria Bahía Verde)',
            items: [
              'IMPORTADOR (documento, nombre_completo, fecha_registro, correo) — nombre_completo es compuesto (nombres, apellidos); correo es multivaluado; antiguedad_cliente es derivado de fecha_registro. Representa la empresa o persona dueña de la carga.',
              'SERVICIO (codigo_servicio, puerto_origen, puerto_destino, transito_estimado) — Representa la ruta marítima comercial (por ejemplo Cartagena–Shanghái), independiente de la fecha.',
              'RECALADA (fecha_arribo, hora_arribo, estado) — Entidad débil dependiente en identificación de SERVICIO; fecha_arribo es su clave parcial. Representa la llegada concreta de un servicio al puerto en una fecha.',
              'BUQUE (imo, nombre_buque, capacidad_teu, anio_construccion) — antiguedad es derivado de anio_construccion. Representa la nave física, identificada por su número IMO.',
              'CERTIFICADO (numero_certificado, fecha_expedicion, fecha_vencimiento) — Certificado de clasificación vigente del buque.',
              'OPERARIO (id_operario, nombre, licencia_portuaria) — Trabajador portuario.',
              'SUMINISTRO (codigo_suministro, descripcion, unidad_medida) — Artículo que se entrega al buque durante la escala (combustible, agua, provisiones).',
              'CONTRATISTA (nit, razon_social, sede) — sede es multivaluado y compuesto (ciudad, direccion). Empresa que entrega los suministros.',
              'BODEGA (codigo_bodega, zona, capacidad_m2) — Espacio del patio donde el puerto almacena la carga de un embarque.',
            ],
          },
          {
            title: 'Ejercicio 1 — Transformación de atributos (12 puntos)',
            items: [
              'a. Transforme los atributos de IMPORTADOR. Dibuje el fragmento del modelo resultante indicando, para cada relación nueva, su cardinalidad y su participación. Señale si alguna de las entidades que aparecen es débil y cuál sería su atributo clave.',
              'b. El atributo sede de CONTRATISTA es multivaluado y compuesto al mismo tiempo. Transfórmelo, explique en qué orden aplicó las reglas y por qué el modelo resultante no es equivalente si se aplican en el orden contrario.',
              'c. Explique por qué antiguedad_cliente y antiguedad desaparecen del modelo transformado, y qué información conserva el modelo pese a su eliminación.',
              'd. Suponga que el puerto decide que un importador registrará como máximo dos correos. Discuta si la regla de transformación del atributo multivaluado cambia y qué consecuencia tiene cada alternativa sobre el modelo.',
            ],
          },
          {
            title: 'Ejercicio 2 — Transformación de relaciones N:M con atributos (12 puntos)',
            items: [
              'a. Transforme la relación EMBARQUE. Dibuje el fragmento resultante con la entidad que surge de la transformación, sus atributos y las relaciones que la conectan con IMPORTADOR y con RECALADA, indicando cardinalidad y participación en cada extremo. Indique si esa entidad es débil, de qué entidades depende en identificación y cuál es su atributo clave (teniendo en cuenta que RECALADA es, a su vez, una entidad débil).',
              'b. Transforme la relación CUADRILLA aplicando la misma regla. Explique por qué turno y horas_trabajadas no pueden colocarse como atributos de OPERARIO ni de RECALADA, y dé un ejemplo concreto de dato que se perdería o se duplicaría si se hiciera así.',
              'c. Explique por qué esta transformación conserva la semántica original del modelo, mientras que sustituir la relación N:M por dos relaciones 1:N directas entre IMPORTADOR y RECALADA sí la alteraría.',
            ],
          },
          {
            title: 'Ejercicio 3 — Relación ternaria y agregación (10 puntos)',
            items: [
              'a. Transforme la relación ternaria ABASTECE. Dibuje el fragmento resultante con la entidad que la reemplaza y las tres relaciones binarias que aparecen, indicando cardinalidad y participación de cada una, y la ubicación del atributo cantidad. Señale cuál es el atributo clave de la entidad resultante y explique por qué, siendo la cardinalidad M:N:N, deben intervenir los identificadores de las tres entidades. Indique además qué cambiaría en ese atributo clave si el puerto exigiera que para una recalada y un suministro dados hubiera un único contratista.',
              'b. Transforme la agregación DEPOSITA. Explique por qué la relación con BODEGA no puede dibujarse directamente contra IMPORTADOR ni contra RECALADA, y muestre sobre qué elemento del modelo ya transformado queda apoyada, indicando cardinalidad y participación.',
            ],
          },
          {
            title: 'Ejercicio 4 — Especialización y relaciones recursivas (10 puntos)',
            items: [
              'a. Transforme la jerarquía de especialización de OPERARIO. Dibuje el fragmento resultante, indique la cardinalidad y la participación de las relaciones que aparecen, explique cómo se refleja en el modelo transformado que la jerarquía es parcial y solapada, y muestre qué ocurre con el atributo equipos_manejados. Señale qué estrategia de transformación queda descartada por el hecho de que la jerarquía sea solapada y por qué.',
              'b. Analice las dos relaciones recursivas del modelo, SUPERVISA y TRANSBORDA. Indique cuál de las dos exige transformación y cuál no, justifique la diferencia, transforme la que corresponda conservando los nombres de rol y señale dónde queda el atributo periodo.',
              'c. Enumere las relaciones del modelo de partida que no requieren ninguna transformación y justifique en una línea por qué pueden pasar tal como están al modelo relacional.',
            ],
          },
          {
            title: 'Ejercicio 5 — Análisis crítico de un modelo transformado (6 puntos)',
            paragraphs: [
              'Un estudiante entrega el siguiente modelo transformado del mismo modelo: CONTRATISTA (nit, razon_social, ciudad_sede1, direccion_sede1, ciudad_sede2, direccion_sede2); IMPORTADOR (documento, nombres, apellidos, correo, peso_toneladas, tipo_carga); EMBARQUE (id_embarque, fecha_solicitud) con relación IMPORTADOR (1) — (N) EMBARQUE (sin conectarse con RECALADA) y relación RECALADA (N) — (1) BODEGA; TRANSITO (id_transito) con relaciones RECALADA (1) — (N) TRANSITO — (1) RECALADA.',
              'Se pide identificar tres errores y, para cada uno, indicar qué regla de transformación se violó, qué consecuencia tiene sobre el modelo y cómo debe corregirse.',
            ],
          },
        ],
        businessRules: [
          '1. IDENTIFICA: SERVICIO (1) — (N) RECALADA · relación identificadora · participación de RECALADA: total.',
          '2. ATIENDE: BUQUE (1) — (N) RECALADA · participación de RECALADA: total · participación de BUQUE: parcial.',
          '3. CLASIFICA: BUQUE (1) — (1) CERTIFICADO · participación total en ambos extremos.',
          '4. EMBARQUE: IMPORTADOR (M) — (N) RECALADA · atributos propios de la relación: tipo_carga, peso_toneladas, fecha_solicitud.',
          '5. CUADRILLA: OPERARIO (M) — (N) RECALADA · atributos propios de la relación: turno, horas_trabajadas.',
          '6. SUPERVISA: OPERARIO (M) — (N) OPERARIO · relación recursiva con roles supervisor / supervisado y atributo periodo (un operario puede ser supervisado por distintos operarios en periodos distintos).',
          '7. TRANSBORDA: RECALADA (1) — (N) RECALADA · relación recursiva con roles recalada_origen / recalada_destino y participación parcial en ambos extremos.',
          '8. ABASTECE: Relación ternaria CONTRATISTA — RECALADA — SUMINISTRO (M:N:N) con atributo cantidad (un mismo suministro puede ser entregado por varios contratistas en una misma recalada, y cada contratista atiende muchas recaladas y muchos suministros).',
          '9. DEPOSITA: Agregación donde la participación de un IMPORTADOR en una RECALADA (relación EMBARQUE) se almacena en una sola BODEGA, y una misma bodega recibe muchos embarques a lo largo del tiempo: (N) — (1) BODEGA.',
          '10. ESPECIALIZACIÓN: OPERARIO → GRUERO (horas_operacion, tipo_certificacion) y OPERARIO → ESTIBADOR (equipos_manejados multivaluado, examen_medico_vigente). Jerarquía parcial y solapada: hay operarios que no son ni grueros ni estibadores, y hay operarios que son las dos cosas.',
        ],
        assumptionsIntro:
          'En el documento de justificación del taller se documentaron los siguientes supuestos, criterios de aplicación de reglas y decisiones de transformación:',
        assumptions: [
          {
            title: 'Ejercicio 1 — Atributos compuestos, multivaluados y derivados',
            items: [
              '1-A (IMPORTADOR y CORREO): El atributo multivaluado correo se transforma mediante la regla de eliminación de atributos multivaluados en una entidad débil CORREO con relación (1:N). Se parte del supuesto de que un IMPORTADOR debe registrar al menos un correo y como máximo muchos, estableciendo participación completa (1,n); y para cada correo existe como mínimo y máximo un importador, con participación completa (1,1). Asimismo, nombre_completo se descompone en atributos simples (primer_nombre, segundo_nombre, primer_apellido, segundo_apellido).',
              '1-B (CONTRATISTA y SEDE): Para transformar el atributo sede (simultáneamente multivaluado y compuesto) se aplicó primero la regla de eliminación de atributos múltiples —convirtiéndolo en la entidad débil por existencia SEDE con relación (1:N)— y en segundo lugar la eliminación de atributos compuestos (obteniendo sede_direccion y sede_ciudad). Invertir el orden no produce un modelo equivalente porque obligaría a fijar arbitrariamente una cantidad de atributos simples repetidos en CONTRATISTA, perdiendo la entidad débil e incrementando el costo en memoria y mantenimiento.',
              '1-C (Atributos derivados): Los atributos antiguedad_cliente (en IMPORTADOR) y antiguedad (en BUQUE) se eliminan del modelo transformado porque su valor se calcula a partir de fecha_registro y anio_construccion respectivamente, conservando toda la información sin redundancia.',
              '1-D (Restricción de máximo dos correos): La regla de transformación a entidad débil CORREO se mantiene porque el atributo sigue siendo multivaluado; el límite de dos correos se maneja como una restricción del negocio manteniendo el modelo flexible y escalable, frente a la alternativa de agregar dos atributos simples en IMPORTADOR que dificultaría el mantenimiento.',
            ],
          },
          {
            title: 'Ejercicio 2 — Relaciones N:M con atributos propios',
            items: [
              '2-A y 2-B (EMBARQUE y CUADRILLA): Las relaciones M:N se transforman en entidades intermedias (EMBARQUE / IMPORTADOR_RECALADA y OPERARIO_RECALADA). En CUADRILLA, los atributos turno y horas_trabajadas dependen de la combinación entre OPERARIO y RECALADA y no pueden ubicarse en una sola de las entidades sin perder o duplicar datos.',
              '2-C (Conservación semántica en EMBARQUE): La entidad intermedia conserva la relación entre IMPORTADOR y RECALADA junto con los atributos propios tipo_carga, peso_toneladas y fecha_solicitud. Reemplazar la relación N:M por dos relaciones 1:N directas impediría diferenciar múltiples embarques de un mismo importador en una misma recalada.',
            ],
          },
          {
            title: 'Ejercicio 3 — Relación ternaria ABASTECE y agregación DEPOSITA',
            items: [
              '3-A (Ternaria ABASTECE): Se transforma en una entidad asociativa cuyo atributo clave está compuesto por los tres identificadores involucrados, ya que cada suministro entregado requiere identificar simultáneamente contratista, recalada y suministro. Si solo pudiera existir un único contratista por recalada y suministro, no habría necesidad de incluir id_contratista en la clave.',
              '3-B (Agregación DEPOSITA): Al transformarse la agregación, la relación con BODEGA se conecta directamente con la entidad surgida de la relación agregada y no de forma aislada contra IMPORTADOR ni contra RECALADA, dado que el depósito en bodega corresponde a la ocurrencia conjunta de la operación.',
            ],
          },
          {
            title: 'Ejercicio 4 — Especialización de OPERARIO y relaciones recursivas',
            items: [
              '4-A (Jerarquía parcial y solapada): La naturaleza parcial y solapada se representa con participaciones (0,1) desde OPERARIO hacia los subtipos GRUERO y ESTIBADOR, permitiendo operarios que no pertenecen a ningún subtipo y operarios que pertenecen a ambos. Se descarta integrar todos los atributos en OPERARIO porque generaría valores nulos y no representaría adecuadamente la pertenencia simultánea a ambos subtipos. El atributo multivaluado equipos_manejados de ESTIBADOR se transforma en una entidad independiente EQUIPO / EQUIPO_ESTIBADOR.',
              '4-B (Relaciones recursivas SUPERVISA y TRANSBORDA): La relación SUPERVISA requiere transformación en una entidad SUPERVISION (con el atributo periodo) porque es una relación recursiva M:N de OPERARIO consigo misma. La relación TRANSBORDA no requiere transformación en nueva entidad porque es una relación recursiva 1:N de RECALADA consigo misma.',
              '4-C (Relaciones que pasan directamente al modelo relacional): 1) IDENTIFICA (SERVICIO — RECALADA), por ser 1:N e identificadora de entidad débil; 2) ATIENDE (BUQUE — RECALADA), por ser 1:N sin atributos propios (representable propagando la clave de BUQUE a RECALADA); y 3) CLASIFICA (BUQUE — CERTIFICADO), por ser 1:1 sin atributos propios (representable mediante clave foránea).',
            ],
          },
          {
            title: 'Ejercicio 5 — Diagnóstico y corrección de errores del modelo entregado',
            items: [
              'Error 1 (Atributos compuestos en IMPORTADOR): No se aplicó la regla de eliminación de atributos compuestos sobre nombres y apellidos; se corrige descomponiéndolos en primer_nombre, segundo_nombre, primer_apellido y segundo_apellido para permitir búsquedas y actualizaciones atómicas.',
              'Error 2 (Grupos repetidos en CONTRATISTA): El atributo multivaluado y compuesto sede fue transformado erróneamente como grupos repetidos (ciudad_sede1, ciudad_sede2, direccion_sede1, direccion_sede2). Se corrige aplicando la regla de eliminación de atributos múltiples hacia la entidad débil por existencia SEDE con atributos ciudad_sede y direccion_sede (y nit por herencia); como el planteamiento omite la cardinalidad, se adopta el supuesto (1:N) considerando que un contratista puede tener muchas sedes.',
              'Error 3 (Desconexión de EMBARQUE y conexiones faltantes): EMBARQUE aparece conectada únicamente con IMPORTADOR (1:N) sin vincularse con RECALADA, perdiendo a qué recalada corresponde cada embarque; además se omitieron conexiones entre CONTRATISTA, EMBARQUE y TRANSITO. Se corrige manteniendo EMBARQUE vinculada tanto a IMPORTADOR como a RECALADA.',
            ],
          },
        ],
        activityDescription:
          'El taller aborda el análisis y aplicación de reglas de transformación sobre componentes clave del modelo conceptual: eliminación de atributos multivaluados y compuestos, tratamiento de atributos derivados, transformación de entidades débiles, cardinalidades y restricciones de participación (1:1, 1:N y M:N con atributos propios mediante entidades intermedias), resolución de relaciones ternarias y agregación, y modelado de especialización (jerarquías parciales y solapadas) y relaciones recursivas (supervisión y transbordo). Asimismo, incluye la justificación formal de equivalencias y la corrección de errores en modelos transformados.',
        solutionImage:
          '/evidencias/modelado/taller-transformaciones/taller1.drawio.png',
        solutionAlt:
          'Diagrama de solución del Taller de Transformaciones en Draw.io',
        pdfUrl:
          '/evidencias/modelado/taller-transformaciones/Taller-transformaciones.pdf',
        status: 'available',
      },
      {
        slug: 'parcial',
        order: 4,
        type: 'EJERCICIO CALIFICABLE',
        title: 'Parcial',
        subtitle:
          'Evaluación práctica de modelado conceptual Entidad–Relación',
        shortDescription:
          'Evaluación práctica de modelado conceptual Entidad–Relación correspondiente al módulo de diseño de bases de datos.',
        context:
          'Parcial 1 — Modelo Entidad–Relación, Reducción a Tablas y Modelo Relacional (Caso: Cadena de salas de cine CineAndes). Corresponde al Punto 1 de la evaluación individual: diseño integral de un modelo conceptual Entidad–Relación Extendido en notación de Peter Chen a partir de las reglas de negocio del sistema.',
        statementIntro:
          'En el Punto 1 del Parcial 1 (Diseño del modelo entidad–relación extendido, 20 puntos) se solicita construir el modelo conceptual para la cadena de salas de cine CineAndes en notación de Peter Chen cumpliendo las reglas de negocio especificadas y respondiendo los siguientes numerales:',
        statementBlocks: [
          {
            title: 'Requerimientos del Punto 1 (Se pide)',
            items: [
              'a. Dibuje el modelo entidad–relación completo en notación de Peter Chen. (10 puntos)',
              'b. Subraye los atributos clave y marque explícitamente los atributos compuestos, multivaluados y derivados. (2 puntos)',
              'c. Indique la cardinalidad y la participación de todas las relaciones. (3 puntos)',
              'd. Identifique todas las entidades débiles del modelo, señale de qué entidad depende cada una en identificación y cuál es su clave parcial. Explique en dos líneas qué ocurre con la identificación de SILLA, cuya entidad propietaria es a su vez débil. (3 puntos)',
              'e. Indique los nombres de rol de las dos relaciones recursivas del modelo. (1 punto)',
              'f. Justifique en dos líneas por qué la regla k exige una agregación y no una relación ternaria entre CLIENTE, FUNCIÓN y MEDIO DE PAGO. (1 punto)',
            ],
          },
        ],
        businessRules: [
          'a. De cada SEDE se registra un código, un nombre, la dirección —compuesta por ciudad y calle— y uno o varios teléfonos de contacto.',
          'b. Cada sede tiene varias SALAS. Dentro de una sede las salas se numeran 1, 2, 3 y así sucesivamente, y ese número solo tiene sentido dentro de su propia sede: la sala 3 de Bogotá y la sala 3 de Medellín son salas distintas. De cada sala se registra el formato de proyección y el aforo.',
          'c. Cada sala está compuesta por SILLAS. Una silla se identifica por su fila y su número, que solo tienen sentido dentro de su sala. De cada silla se registra si está habilitada o fuera de servicio.',
          'd. De cada PELÍCULA se registra un código, el título, el año de estreno, la duración en minutos y la clasificación. Una película puede estar disponible en uno o varios idiomas. La antigüedad de la película se obtiene a partir de su año de estreno. Además, una película puede ser la secuela de otra ya registrada en el catálogo, y tiene a lo sumo una precuela.',
          'e. Una FUNCIÓN es la proyección de una película en una sala determinada, en una fecha y una hora. Dentro de una misma sala, la fecha y la hora identifican la función. De cada función se registra el precio base de la boleta. Toda función proyecta exactamente una película; una película puede no haberse programado nunca.',
          'f. De cada CLIENTE se registra el documento, el nombre completo —nombres y apellidos por separado—, el correo y la fecha de nacimiento. La edad del cliente se obtiene de su fecha de nacimiento.',
          'g. Un cliente puede comprar boletas para muchas funciones y una función puede tener muchos clientes. De cada compra se registra la cantidad de boletas y el canal por el que se hizo. Un cliente puede no haber comprado nunca.',
          'h. De cada EMPLEADO se registra un identificador, el nombre y la fecha de ingreso. Todo empleado es proyeccionista, del que se registra su certificación técnica, o taquillero, del que se registra la caja asignada. Ningún empleado puede ser las dos cosas al mismo tiempo, y no existen empleados que no sean ni lo uno ni lo otro.',
          'i. Un empleado supervisa a otros empleados. Un empleado tiene a lo sumo un supervisor, y de esa supervisión se registra la fecha desde la cual se ejerce.',
          'j. Para la confitería, un PROVEEDOR entrega un PRODUCTO a una SEDE. Un mismo producto puede ser entregado por proveedores distintos a la misma sede, cada proveedor atiende muchas sedes y muchos productos, y de cada entrega se registran la cantidad y la fecha.',
          'k. Cada compra que un cliente hace para una función determinada se paga con un único MEDIO DE PAGO. Un mismo medio de pago se usa en muchas compras. El medio de pago corresponde a esa compra concreta, no al cliente ni a la función por separado.',
        ],
        assumptionsIntro:
          'En el diagrama de solución desarrollado en Draw.io se adoptaron las siguientes decisiones de modelado conceptual:',
        assumptions: [
          {
            title: 'Entidades débiles e identificación en cascada',
            items: [
              'SEDE se modela como entidad fuerte con clave codigo, atributo simple nombre, atributo compuesto dirección (ciudad, calle) y atributo multivaluado telefono_decontacto.',
              'SALA se modela como entidad débil dependiente en identificación de SEDE mediante la relación identificadora contener (1:N), con clave parcial numero_sala y atributos formato y aforo.',
              'SILLAS se modela como entidad débil dependiente en identificación de SALA mediante la relación identificadora tener (1:N), con clave parcial compuesta por fila y numero, más el atributo estado.',
            ],
          },
          {
            title: 'Agregaciones anidadas (FUNCION y COMPRA) y pago',
            items: [
              'La proyección de una PELICULA en una SALA (relación proyectar) se encapsula en la agregación FUNCION con los atributos fecha, hora y precio_base.',
              'La relación comprar (N:M, con participaciones (0,n) y atributos cantidad_Boletas y canal) entre CLIENTE y FUNCION se encapsula a su vez en la agregación superior COMPRA (con identificador PO_orden_compra), la cual se vincula mediante la relación pagar (N:1, participación total (1,1) del lado de COMPRA) con la entidad MEDIO_DE_PAGO (id_medio_pago), representando que el medio de pago corresponde a la compra concreta.',
            ],
          },
          {
            title: 'Relaciones recursivas, especialización y relación ternaria',
            items: [
              'En PELICULA se definen la clave codigo, los atributos titulo, duracion, clasificacion, año_estreno, el atributo derivado antiguedad, el atributo multivaluado idiomas y la relación recursiva ser (1:1) con los roles secuela y precuela.',
              'En CLIENTE se registra la clave documento, correo, fecha_nacimiento, el atributo derivado edad y el atributo compuesto nombre_completo (desglosado en primer_nombre, segundo_nombre, primer_apellido y segundo_apellido).',
              'EMPLEADO (id_empleado, nombre, fecha_ingreso) se vincula con SEDE mediante trabajar (1:M), presenta la relación recursiva supervisar (1:N, con roles supervisor y supervisado y atributo fecha) y una jerarquía de especialización total y exclusiva (arco disjunto) hacia los subtipos PROYECCIONISTA (certificacion_tecnica) y TAQUILLERO (caja_asignada).',
              'El abastecimiento de confitería se modela mediante la relación ternaria entregar (M:N:N) entre SEDE, PRODUCTO (codigo_producto) y PROVEEDOR (nit), con los atributos propios cantidad y fecha.',
            ],
          },
        ],
        activityDescription:
          'A partir de la solución desarrollada, el modelo conceptual representa: sedes con ubicación geográfica; salas de proyección y sillas (modeladas como entidad débil por existencia); catálogo de películas con atributos simples, compuestos y derivados (duración, idiomas multivaluados y relaciones recursivas de secuela/precuela); funciones programadas; compras y asignación de boletas a clientes; medios de pago; empleados con especialización en taquilleros y proyeccionistas; relaciones recursivas de supervisión de personal; y relaciones ternarias de suministro de productos entre proveedores y sedes.',
        solutionImage:
          '/evidencias/modelado/parcial/PARCIAL.drawio.png',
        solutionAlt:
          'Diagrama conceptual Entidad-Relación de la solución del Parcial',
        pdfUrl:
          '/evidencias/modelado/parcial/PARCIAL.drawio.pdf',
        status: 'available',
      },
    ],
  },
  normalizacion: {
    slug: 'normalizacion',
    name: 'Normalización',
    title: 'Normalización | Bases de Datos 1',
    description:
      'En esta sección se abordan las actividades y evaluaciones relacionadas con la normalización de bases de datos relacionales, reducción de redundancias y aplicación de formas normales.',
    evidences: [
      {
        slug: 'diseno-tablas',
        order: 1,
        type: 'EJERCICIO PRÁCTICO',
        title: 'Diseño de tablas',
        subtitle:
          'Ejercicios prácticos de normalización y análisis de dependencias',
        shortDescription:
          'Desarrollo de ejercicios prácticos de normalización identificando grupos repetidos, claves candidatas y dependencias funcionales.',
        context:
          'Taller de Normalización de BD — Ejercicio de Repaso. Actividad práctica desarrollada en hoja de cálculo enfocada en el diagnóstico de formas normales, eliminación de grupos repetidos y atributos multivaluados, identificación de claves candidatas y dependencias funcionales, y descomposición relacional sobre tres casos de estudio.',
        statementIntro:
          'En la guía del ejercicio de repaso de normalización se plantean los siguientes tres problemas desarrollados en el libro de cálculo:',
        statementBlocks: [
          {
            title: 'Ejercicio 1 — Proyectos y empleados (Tabla No. 1)',
            paragraphs: [
              'Considere la Tabla No. 1 con los atributos: (cod_proyecto, nom_proyecto, cod_empleado, nom_empleado, profesion, vlr_hora, hrs_asignadas) y registros de los proyectos 1010 (ERP), 1020 (CRM) y 1030 (BI) con los empleados 2010 (Sandra, Ingeniero), 2020 (Claudia, Analista), 2030 (Yamile, Programador) y 2040 (Andrea, Ingeniero).',
            ],
            items: [
              'a. Indique en qué forma normal se encuentra dicha tabla. Justifique su respuesta.',
              'b. Especifique el paso a paso para convertir la Tabla No. 1 a la 3FN. Muestre el paso a paso del proceso de normalización y justifique claramente cada una de las decisiones tomadas para llegar a su resultado considerando las dependencias funcionales.',
            ],
          },
          {
            title: 'Ejercicio 2 — Tabla de Estudiantes',
            paragraphs: [
              'Considere la tabla de Estudiantes con su clave principal y los atributos (Cod, Name, Email, Courses, GradePoints), donde se registran tuplas como: (100111, John Doe, doe@usna.edu, "NN204, SI204, IT221", "2,3,3"), (092244, Matt Smith, smith@usna.edu, "SM223, EE301", "4,4"), (113221, Melinda Black, black@usna.edu, "SI204", "3") y (090112, Tom Johnson, Johnson@usna.edu, "NN204, SI204, IT221", "4,2,3").',
            ],
            items: [
              'a. ¿La tabla de Estudiantes está en 1NF? ¿Por qué?',
              'b. Si la tabla de Estudiantes no está en 1NF, rediseñe las tablas de modo que toda la información actualmente en la tabla de Estudiantes se encuentre en las tablas resultantes y las tablas resultantes estén en 1NF. Para cada una de las tablas resultantes, proporcione el nombre de la tabla, los nombres de las columnas, las llaves primarias y las llaves foráneas.',
            ],
          },
          {
            title: 'Ejercicio 3 — Restaurante nocturno / Member_Dinner (Tabla No. 3)',
            paragraphs: [
              'El gerente del restaurante nocturno de una empresa quisiera tener un sistema de información que lo ayude a planificar las comidas y a realizar un seguimiento de quién asiste a las cenas. La Tabla No. 3 almacena los atributos: (MEMBER_NUM, MEMBER_NAME, MEMBER_ADDRESS, DINNER_NUM, DINNER_DATE, VENUE_CODE, VENUE_DESCRIPTION, FOOD_CODE, FOOD_DESCRIPTION). Como un miembro puede asistir a muchas cenas y un miembro no asistirá a más de 1 cena en la misma fecha, la clave principal indicada es Número de miembro + Número de cena. Las cenas pueden tener muchos platos, desde cenas de un plato hasta tantos platos como desee el chef.',
            ],
            items: [
              'a. Analice la información previa e indique si existe algún valor multivaluado. Justifique su respuesta.',
              'b. Considerando la estructura e información proveída en la Tabla No. 3, plantee el esquema relacional de bases de datos con nombre de tabla: "Member_Dinner".',
              'c. Suponiendo que pueda identificar las dependencias funcionales de la Tabla No. 3, realice un diagrama de dependencias funcionales para la 1ra Forma Normal del literal anterior.',
              'd. Convierta su resultado previo a la 3ra Forma Normal (3FN), mostrando el paso a paso del proceso de normalización y justificando cada decisión.',
            ],
          },
        ],
        assumptionsIntro:
          'En el archivo Excel desarrollado (ejercicio-tablas.xlsx) se documentaron las siguientes decisiones, claves candidatas, dependencias funcionales y descomposiciones:',
        assumptions: [
          {
            title: 'Solución documentada del Ejercicio 1 (Proyectos y empleados)',
            items: [
              'Diagnóstico inicial: La tabla mostrada no se encuentra normalizada dado que existen 3 grupos repetidos asociados a los proyectos (1010 ERP, 1020 CRM y 1030 BI).',
              'Identificación de claves y dependencias funcionales: Se registran las dependencias funcionales cod_proyecto → nom_proyecto; cod_empleado → nom_empleado, profesion, valor_hora; y {cod_proyecto, cod_empleado} → hrs_asignadas.',
              'Verificación de transitividad y descomposición: Se documenta que no hay dependencias transitivas en las tablas separadas y se descompone el esquema en tres relaciones: 1) Proyectos (cod_proyecto, nom_proyecto), 2) Empleados (cod_empleado, nom_empleado, profesion, vlr_hora) y 3) Asignación (cod_proyecto, cod_empleado, hrs_asignadas).',
            ],
          },
          {
            title: 'Solución documentada del Ejercicio 2 (Estudiantes y cursos)',
            items: [
              'Diagnóstico de 1FN: La tabla no se encuentra normalizada a 1FN dado que no se cumple la atomicidad en los datos, puesto que cada celda de las columnas Courses y GradePoints contiene más de un valor.',
              'Descomposición a 1FN: Se separa la información en dos tablas atómicas: 1) Tabla Estudiante (Cod_estudiante, Name, Email) con clave candidata/primaria {Cod} (Cod_estudiante), y 2) Tabla Curso (Cod_estudiante, Curso, GradePoint) con clave candidata/primaria compuesta {Cod_estudiante, Curso} y clave foránea {Cod_estudiante}, desglosando los 9 registros individuales de cursos por estudiante.',
            ],
          },
          {
            title: 'Solución documentada del Ejercicio 3 (Miembros y cenas)',
            items: [
              'Clave candidata registrada: {Numero_Miembro, Numero_cena} (MEMBER_NUM, DINNER_NUM).',
              'Identificación de valor multivaluado: Se establece que el valor multivaluado corresponde a la descripción/código de la comida (FOOD_DESCRIPTION / FOOD_CODE), dado que un mismo evento de cena (por ejemplo D0001, D0002 o D0003) incluye diferentes platos y descripciones de comida para un mismo miembro.',
            ],
          },
        ],
        activityDescription:
          'Los ejercicios desarrollados en el archivo comprenden: 1) Análisis de una tabla de proyectos y empleados (cod_proyecto, nom_proyecto, cod_empleado, nom_empleado, profesion, vlr_hora, hrs_asignadas), identificando grupos repetidos, definición de claves candidatas compuestas, dependencias funcionales completas y parciales, y verificación de dependencias transitivas; 2) Diagnóstico de una tabla académica de estudiantes y cursos (Cod, Name, Email, Courses, GradePoints), detectando la violación de atomicidad en 1FN por celdas con valores múltiples y estructuración de claves primarias y foráneas para su descomposición; y 3) Evaluación de una relación de miembros y cenas (MEMBER_NUM, DINNER_NUM, FOOD_DESCRIPTION), identificando valores multivaluados y claves compuestas.',
        complementaryFileUrl:
          '/evidencias/normalizacion/diseno-tablas/ejercicio-tablas.xlsx',
        complementaryFileLabel: 'DESCARGAR ARCHIVO EXCEL (.XLSX)',
        status: 'available',
      },
      {
        slug: 'taller-sustentacion',
        order: 2,
        type: 'EJERCICIO CALIFICABLE',
        title: 'Taller / Sustentación',
        subtitle:
          'Normalización de Bases de Datos — Caso Hospitalización',
        shortDescription:
          'Taller evaluativo y sustentación sobre dependencias funcionales, formas normales (1FN, 2FN, 3FN) y anomalías de datos.',
        context:
          'Taller 2 de Normalización de Bases de Datos y sustentación grupal. Análisis de esquemas empresariales sin datos de ejemplo iniciales para identificar dependencias funcionales, anomalías de inserción, actualización y eliminación, evaluación de formas normales (1FN, 2FN, 3FN y BCNF) y defensa de decisiones técnicas sobre tres contextos empresariales: (1) Hospitalización, (2) Pedidos comerciales y (3) Empleados con competencias e idiomas.',
        statementIntro:
          'El enunciado oficial del Taller de Normalización plantea tres contextos empresariales con desafíos distintos de normalización:',
        statementBlocks: [
          {
            title: 'Contexto 1 — Hospital (Esquema principal de sustentación)',
            paragraphs: [
              'Esquema inicial: (ID_Paciente, Nombre_Paciente, Especialidad_Tratamiento, Cama_Asignada, Ala_Hospital, Médico_Tratante, Teléfono_Médico, Email_Médico, Fecha_Ingreso, Fecha_Alta).',
            ],
            items: [
              'a) Enumera todas las dependencias funcionales y, para cada una, explica por qué existe. Atención: ¿Especialidad_Tratamiento → Ala_Hospital? ¿Siempre es verdad, o una especialidad puede estar en múltiples alas?',
              'b) ¿En qué forma normal está? Evalúa si algún atributo depende de solo parte de la clave (2FN) o de otro atributo no clave (3FN), e identifica las dependencias problemáticas.',
              'c) Describe tres anomalías específicas (una de inserción, una de actualización y una de eliminación), explicando qué información se pierde, cuántos registros hay que cambiar y qué datos quedan inconsistentes.',
              'd) Normaliza paso a paso hasta que no haya más anomalías (3FN), indica claves primarias y foráneas, compara una operación típica de búsqueda en el esquema original vs. el normalizado y evalúa si se requiere BCNF.',
            ],
          },
          {
            title: 'Contexto 2 — Empresa de ventas (Pedidos, clientes, productos y vendedores)',
            paragraphs: [
              'Esquema inicial: (ID_Pedido, Fecha_Pedido, ID_Cliente, Nombre_Cliente, Sector_Cliente, ID_Producto, Nombre_Producto, Precio_Producto, Cantidad_Solicitada, ID_Vendedor, Nombre_Vendedor, Comisión_Vendedor).',
            ],
            items: [
              'a) Enumera todas las dependencias funcionales y explica por qué existe cada una en el negocio.',
              'b) Determina en qué forma normal se encuentra la relación evaluando dependencias parciales y transitivas.',
              'c) Analiza el impacto y riesgo de negocio al actualizar el nombre de un producto o el sector de un cliente en la tabla sin normalizar, y realiza la descomposición paso a paso a 2FN y 3FN.',
            ],
          },
          {
            title: 'Contexto 3 — Empleado con múltiples competencias e idiomas',
            paragraphs: [
              'Esquema inicial: EMPLEADO (ID_Empleado, Nombre_Empleado, Competencias_Técnicas, Idiomas), donde un empleado tiene varias competencias (Python, Java, SQL) y varios idiomas (Español, Inglés, Francés) independientes.',
            ],
            items: [
              'a) ¿Viola 1FN? Demuestra por qué.',
              'b) Normaliza a 1FN indicando cuántas tablas se necesitan y el esquema con atributos y claves.',
              'c) Analiza las búsquedas de empleados por competencia e idioma y compara frente a almacenar listas de texto en una sola columna.',
            ],
          },
        ],
        assumptionsIntro:
          'En la presentación de sustentación (PDF) y en el libro de desarrollo (taller.xlsx, Hojas 1, 2 y 3) se documentaron los siguientes supuestos de diseño, justificaciones de dependencias y esquemas normalizados:',
        assumptions: [
          {
            title: 'Caso 1 (Hospitalización — Fase I): Análisis sobre el esquema original',
            items: [
              'Supuesto sobre la clave primaria inicial: Para evaluar el esquema tal como fue planteado sin agregar atributos no especificados inicialmente, se asume ID_Paciente como clave primaria de un registro de hospitalización (1FN y 2FN se cumplen al tener atributos atómicos y clave primaria simple, sin posibilidad de dependencias parciales).',
              'Supuestos de unicidad del médico: Se asume que un paciente tiene un único médico tratante responsable por registro y que cada médico posee un único correo institucional y un único teléfono en relación 1:1 (Médico_Tratante → Email_Médico, Teléfono_Médico).',
              'Dependencia de ubicación y descarte de Especialidad_Tratamiento → Ala_Hospital: Se establece Cama_Asignada → Ala_Hospital porque la cama identifica el ala donde se ubica el paciente. En cambio, se demuestra que NO se cumple Especialidad_Tratamiento → Ala_Hospital porque dentro de un hospital existen múltiples servicios y se realizan interconsultas en distintas alas, por lo que una misma especialidad puede atender en diferentes alas.',
              'Dependencias transitivas que violan 3FN en el esquema inicial: 1) ID_Paciente → Médico_Tratante → Email_Médico; 2) ID_Paciente → Médico_Tratante → Teléfono_Médico; y 3) ID_Paciente → Cama_Asignada → Ala_Hospital.',
              'Anomalías documentadas: Inserción (no es posible registrar un nuevo médico con su email y teléfono sin una hospitalización asociada); Actualización (cambiar el teléfono de un médico que atendió 100 pacientes obliga a modificar 100 filas); Eliminación (borrar el registro de una hospitalización o de un médico que renuncia hace perder el historial o los datos del médico tratante).',
            ],
          },
          {
            title: 'Caso 1 (Hospitalización — Fase II): Supuestos de diseño del esquema ampliado y paso a 3FN',
            items: [
              'Supuestos de diseño incorporados: 1) Dado que un mismo paciente puede tener múltiples hospitalizaciones (incluso ingresando y recibiendo el alta el mismo día), ID_Paciente no identifica de forma única cada evento, por lo que se propone como clave primaria ID_Hospitalización; 2) Dado que un médico no debe identificarse únicamente por su nombre y apellido, se incorpora el identificador ID_Médico.',
              'Dependencias del esquema ampliado: ID_Hospitalización → ID_Paciente, Especialidad_Tratamiento, Cama_Asignada, ID_Médico, Fecha_Ingreso, Fecha_Alta (dependencia completa); ID_Paciente → Nombre_Paciente; Cama_Asignada → Ala_Hospital; e ID_Médico → Médico_Tratante, Teléfono_Médico, Email_Médico.',
              'Esquema final normalizado en 3FN (4 tablas): 1) HOSPITALIZACIÓN (ID_Hospitalización PK, ID_Paciente FK, Especialidad_Tratamiento, Cama_Asignada FK, ID_Médico FK, Fecha_Ingreso, Fecha_Alta); 2) PACIENTE (ID_Paciente PK, Nombre_Paciente); 3) CAMA (Cama_Asignada PK, Ala_Hospital); y 4) MÉDICO (ID_Médico PK, Médico_Tratante, Teléfono_Médico, Email_Médico). Cada determinante es clave primaria, por lo que no se requieren descomposiciones adicionales para BCNF.',
            ],
          },
          {
            title: 'Caso 2 (Pedidos — Hoja 2 de taller.xlsx): Clasificación de dependencias y normalización',
            items: [
              'Clave compuesta del esquema inicial: (ID_Pedido, ID_Producto).',
              'Dependencias parciales (violan 2FN): 1) ID_Pedido → Fecha_Pedido, ID_Cliente, ID_Vendedor (cada pedido se registra en una fecha única, por un único cliente y un único vendedor); 2) ID_Producto → Nombre_Producto, Precio_Producto (nombre y precio de catálogo dependen solo del producto).',
              'Dependencia total (cumple 2FN): (ID_Pedido, ID_Producto) → Cantidad_Solicitada.',
              'Dependencias transitivas (violan 3FN en PEDIDO): 1) ID_Pedido → ID_Cliente → Nombre_Cliente, Sector_Cliente; 2) ID_Pedido → ID_Vendedor → Nombre_Vendedor, Comisión_Vendedor. Se descomponen separando las tablas PRODUCTO, PEDIDO, DETALLE_PEDIDO, CLIENTE y VENDEDOR.',
            ],
          },
          {
            title: 'Caso 3 (Empleado — Hoja 3 de taller.xlsx): Independencia de atributos multivaluados en 1FN',
            items: [
              'Diagnóstico: Competencias_Técnicas e Idiomas son atributos multivaluados independientes entre sí que violan 1FN al almacenarse como listas dentro de EMPLEADO.',
              'Descomposición en 5 tablas relacionales: 1) EMPLEADO (ID_Empleado PK, Nombre_Empleado); 2) COMPETENCIA (ID_Competencia PK, Nombre_Competencia); 3) EMPLEADO_COMPETENCIA (ID_Empleado PK/FK, ID_Competencia PK/FK); 4) IDIOMA (ID_Idioma PK, Nombre_Idioma); y 5) EMPLEADO_IDIOMA (ID_Empleado PK/FK, ID_Idioma PK/FK).',
            ],
          },
        ],
        activityDescription:
          'El trabajo desarrolla el proceso metodológico de normalización desde un esquema inicial desnormalizado: 1) Identificación de anomalías clásicas de inserción (imposibilidad de registrar médicos sin hospitalizaciones previas), actualización (modificación repetida de datos de médicos) y eliminación (pérdida de historial de médicos al suprimir hospitalizaciones); 2) Detección y análisis formal de dependencias funcionales completas y dependencias transitivas; 3) Formulación de supuestos de diseño, clave primaria propuesta (ID_Hospitalización) e incorporación de identificadores independientes; 4) Evaluación secuencial de formas normales (1FN, 2FN y 3FN); y 5) Descomposición y propuesta del esquema final normalizado en cuatro tablas independientes en 3FN: HOSPITALIZACIÓN, PACIENTE, CAMA y MÉDICO, eliminando redundancias e inconsistencias.',
        pdfUrl:
          '/evidencias/normalizacion/taller-sustentacion/Taller-2-Normalizacion-de-Bases-de-Datos.pdf',
        complementaryFileUrl:
          '/evidencias/normalizacion/taller-sustentacion/taller.xlsx',
        complementaryFileLabel: 'DESCARGAR ARCHIVO EXCEL (.XLSX)',
        status: 'available',
      },
      {
        slug: 'quiz',
        order: 3,
        type: 'EJERCICIO CALIFICABLE',
        title: 'Quiz',
        shortDescription:
          'Evaluación conceptual y práctica sobre técnicas y reglas de normalización.',
        status: 'upcoming',
      },
      {
        slug: 'parcial',
        order: 4,
        type: 'EJERCICIO CALIFICABLE',
        title: 'Parcial',
        shortDescription:
          'Evaluación parcial sobre formas normales (1FN, 2FN, 3FN y BCNF) y descomposición sin pérdida.',
        status: 'upcoming',
      },
    ],
  },
  sql: {
    slug: 'sql',
    name: 'SQL',
    title: 'SQL | Bases de Datos 1',
    description:
      'Registro de talleres, consultas y evidencias desarrolladas en SQL para definición (DDL) y manipulación (DML) de bases de datos.',
    evidences: [],
  },
  proyecto: {
    slug: 'proyecto',
    name: 'Proyecto',
    title: 'Proyecto | Bases de Datos 1',
    description:
      'Desarrollo integral del proyecto final de la asignatura Bases de Datos 1, articulando requerimientos, modelado conceptual, esquema relacional y consultas.',
    evidences: [],
  },
};

export const CATEGORIES_LIST = Object.values(CATEGORIES_DATA);
