export type EvidenceType = 'EJERCICIO PRÁCTICO' | 'EJERCICIO CALIFICABLE' | 'PROYECTO';
export type EvidenceStatus = 'available' | 'upcoming';

export interface EvidenceSection {
  title?: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  pdfUrl?: string;
  pdfLabel?: string;
}

export interface EvidenceDetailBlock {
  title: string;
  question?: string;
  questionItems?: string[];
  questionClosing?: string;
  answer?: string[];
  answerItems?: string[];
  conclusion?: string;
  paragraphs?: string[];
  items?: string[];
}

export interface EvidenceResource {
  label: string;
  url: string;
  download?: boolean;
}

export interface EvidenceCodeBlock {
  title: string;
  subtitle?: string;
  badge?: string;
  code: string;
  explanation?: string;
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
  objective?: string;
  sqlCode?: string;
  sqlExplanation?: string;
  sqlFileUrl?: string;
  sqlFileLabel?: string;
  codeBlocks?: EvidenceCodeBlock[];
  solutionImage?: string;
  solutionAlt?: string;
  sections?: EvidenceSection[];
  pdfUrl?: string;
  pdfLabel?: string;
  complementaryFileUrl?: string;
  complementaryFileLabel?: string;
  resources?: EvidenceResource[];
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
        title: 'Quiz de Normalización',
        subtitle:
          'Evaluación conceptual sobre Tercera Forma Normal y Forma Normal de Boyce-Codd',
        shortDescription:
          'Evaluación conceptual sobre claves candidatas, atributos primos, Tercera Forma Normal (3FN) y Forma Normal de Boyce-Codd (BCNF).',
        context:
          'Evaluación calificable enfocada en el análisis de dependencias funcionales, determinación de claves candidatas e identificación de atributos primos y no primos para verificar el cumplimiento de 1FN, 2FN, 3FN y BCNF.',
        statementIntro:
          'A continuación se presentan los dos puntos evaluados junto con su respectivo análisis y justificación formal:',
        statementBlocks: [
          {
            title: 'Punto 1 — Evaluación de 3FN y BCNF',
            question:
              'Dada la relación R(A,B,C), con las siguientes dependencias funcionales:',
            questionItems: ['AB → C', 'C → B'],
            questionClosing:
              '¿La relación cumple la Tercera Forma Normal (3FN) o la Forma Normal de Boyce-Codd (BCNF)? Justifique su respuesta.',
            answerItems: [
              'AB es clave candidata porque determina C.',
              'AC también es clave candidata porque C determina B.',
            ],
            answer: [
              'Primero identificamos las claves candidatas:',
              'Por tanto, los tres atributos A, B y C son atributos primos, porque pertenecen al menos a una clave candidata.',
              'Cumple 3FN: sí. La dependencia AB → C tiene como determinante una superclave. En C → B, aunque C no es superclave, B es un atributo primo.',
              'Cumple BCNF: no. La dependencia C → B incumple esta forma normal porque C no es superclave.',
            ],
            conclusion: 'Cumple 3FN, pero no BCNF.',
          },
          {
            title: 'Punto 2 — Clave primaria compuesta y formas normales',
            question: 'Se tiene una relación con los atributos:',
            questionItems: ['ID_PROFESOR', 'IDIOMA', 'COMPETENCIA'],
            questionClosing:
              'Los tres atributos conforman una clave primaria compuesta. ¿Qué formas normales cumple la relación y hasta cuál se puede garantizar su cumplimiento? Justifique.',
            answer: [
              'Si los valores de los atributos son atómicos, la relación cumple 1FN.',
              'Cumple 2FN: sí. Los tres atributos son primos porque forman parte de la clave primaria compuesta. Por lo tanto, no existen atributos no primos que puedan depender parcialmente de una parte de dicha clave.',
              'Cumple 3FN: sí, con la información proporcionada. Al ser todos los atributos primos, se satisface el criterio de 3FN.',
              'BCNF: no se puede determinar únicamente con la información del enunciado. Es necesario conocer las dependencias funcionales para comprobar si todos los determinantes son superclaves.',
            ],
            conclusion: 'Cumple hasta 3FN; BCNF queda pendiente de verificar.',
          },
        ],
        status: 'available',
      },
      {
        slug: 'parcial',
        order: 4,
        type: 'EJERCICIO CALIFICABLE',
        title: 'Parcial oral de Normalización',
        subtitle: 'Evaluación conceptual sobre Segunda y Tercera Forma Normal',
        shortDescription:
          'Sustentación oral sobre dependencias funcionales, atributos primos y no primos, y evaluación de Segunda y Tercera Forma Normal (2FN y 3FN).',
        context:
          'Evaluación calificable en modalidad oral orientada a sustentar conceptualmente los criterios de verificación de la Segunda Forma Normal (2FN) y la Tercera Forma Normal (3FN) a partir del análisis de claves candidatas, atributos primos y atributos no primos.',
        statementIntro:
          'Durante la sustentación oral se plantearon y respondieron los siguientes dos puntos conceptuales:',
        statementBlocks: [
          {
            title: 'Punto 1',
            question:
              'Si todos los atributos de una relación son atributos clave, ¿se cumple la Segunda Forma Normal (2FN)?',
            answer: [
              'Sí, siempre que la relación cumpla previamente con la Primera Forma Normal (1FN). La Segunda Forma Normal exige que todos los atributos no primos dependan completamente de cada clave candidata, evitando dependencias parciales. Si todos los atributos son primos, no existen atributos no primos que puedan presentar la dependencia parcial prohibida por la 2FN.',
            ],
          },
          {
            title: 'Punto 2',
            question:
              '¿Por qué es importante distinguir los atributos primos y no primos al evaluar la Tercera Forma Normal (3FN)?',
            answer: [
              'Es importante porque permite analizar las dependencias funcionales y determinar si existen dependencias transitivas que afectan la normalización. Los atributos primos pertenecen a alguna clave candidata, mientras que los no primos no forman parte de ninguna clave candidata.',
              'Para cumplir la 3FN, en toda dependencia funcional no trivial X → A, debe cumplirse que X sea una superclave o que A sea un atributo primo. Esta distinción ayuda a identificar dependencias transitivas problemáticas y evitar redundancias y anomalías.',
            ],
          },
        ],
        status: 'available',
      },
    ],
  },
  sql: {
    slug: 'sql',
    name: 'SQL',
    title: 'SQL | Bases de Datos 1',
    description:
      'Registro de talleres, consultas y evidencias desarrolladas en Oracle SQL utilizando Oracle SQL Developer sobre el esquema HR de Oracle Database.',
    evidences: [
      {
        slug: 'consulta-1-departamentos-80-90',
        order: 1,
        type: 'EJERCICIO PRÁCTICO',
        title: 'Empleados de los departamentos 80 y 90',
        subtitle: 'Consulta multitabla por departamento y continente en el esquema HR',
        shortDescription:
          'Consulta de empleados pertenecientes a los departamentos 80 y 90, mostrando nombre, apellido, salario y continente.',
        context:
          'Ejercicio desarrollado en Oracle SQL utilizando Oracle SQL Developer sobre el esquema HR de Oracle Database.',
        statementIntro:
          'A partir del esquema HR de Oracle Database, se solicita formular una consulta en dialecto Oracle SQL que resuelva el siguiente requerimiento:',
        statementBlocks: [
          {
            title: 'Requerimiento de la consulta',
            paragraphs: [
              'Consultar los empleados pertenecientes a los departamentos 80 y 90, mostrando su nombre, apellido, salario y el continente al que pertenece su ubicación.',
            ],
          },
        ],
        objective:
          'Recuperar la información de los empleados adscritos a los departamentos 80 y 90 dentro del esquema HR de Oracle Database, proyectando nombre, apellido, salario y continente mediante la articulación de las tablas del modelo en dialecto Oracle SQL.',
        sqlCode: `-- Ejercicio 1: Empleados de los departamentos 80 y 90
SELECT E.FIRST_NAME AS NOMBRE, E.LAST_NAME AS APELLIDO,
       E.SALARY AS SALARIO, R.REGION_NAME AS CONTINENTE
FROM HR.EMPLOYEES E
JOIN HR.DEPARTMENTS D ON E.DEPARTMENT_ID = D.DEPARTMENT_ID
JOIN HR.LOCATIONS L ON D.LOCATION_ID = L.LOCATION_ID
JOIN HR.COUNTRIES C ON L.COUNTRY_ID = C.COUNTRY_ID
JOIN HR.REGIONS R ON C.REGION_ID = R.REGION_ID
WHERE D.DEPARTMENT_ID IN (80, 90);`,
        sqlExplanation:
          'Propuesta de consulta generada a partir del enunciado y de la estructura del esquema HR. La sentencia encadena mediante cláusulas JOIN las tablas HR.EMPLOYEES, HR.DEPARTMENTS, HR.LOCATIONS, HR.COUNTRIES y HR.REGIONS para navegar desde el departamento del empleado hasta su región o continente (REGION_NAME), filtrando en la cláusula WHERE los departamentos con identificador 80 y 90 mediante el predicado IN (80, 90).',
        sqlFileUrl: '/evidencias/sql/ejercicio-01/ejercicio-01.sql',
        sqlFileLabel: 'DESCARGAR SCRIPT (.SQL)',
        status: 'available',
      },
      {
        slug: 'consulta-2-empleado-y-manager',
        order: 2,
        type: 'EJERCICIO PRÁCTICO',
        title: 'Concatenación de empleado y manager',
        subtitle: 'Relación jerárquica de empleados y concatenación de nombres en el esquema HR',
        shortDescription:
          'Concatenación del nombre y apellido del empleado y de su manager sobre el esquema HR.',
        context:
          'Ejercicio desarrollado en Oracle SQL utilizando Oracle SQL Developer sobre el esquema HR de Oracle Database.',
        statementIntro:
          'Sobre la estructura jerárquica de empleados en el esquema HR de Oracle Database, se plantea el siguiente requerimiento:',
        statementBlocks: [
          {
            title: 'Requerimiento de la consulta',
            paragraphs: [
              'Realizar la concatenación del nombre y apellido del empleado junto con la concatenación del nombre y apellido de su respectivo manager.',
            ],
          },
        ],
        objective:
          'Vincular cada empleado con su jefe directo (manager) en el esquema HR de Oracle Database y presentar en formato concatenado el nombre completo tanto del empleado como de su manager empleando sintaxis de Oracle SQL.',
        sqlCode: `-- Ejercicio 2: Nombre completo del empleado y de su manager
SELECT E.FIRST_NAME || ' ' || E.LAST_NAME AS EMPLEADO,
       M.FIRST_NAME || ' ' || M.LAST_NAME AS MANAGER
FROM HR.EMPLOYEES E
LEFT JOIN HR.EMPLOYEES M ON E.MANAGER_ID = M.EMPLOYEE_ID;`,
        sqlExplanation:
          'Propuesta de consulta formulada sobre el esquema HR utilizando una autorrelación (LEFT JOIN de HR.EMPLOYEES consigo misma a través de E.MANAGER_ID = M.EMPLOYEE_ID) para incluir también a los empleados sin jefe asignado. Emplea el operador nativo de concatenación de Oracle SQL (||) para unir FIRST_NAME y LAST_NAME tanto del empleado (E) como de su manager (M).',
        sqlFileUrl: '/evidencias/sql/ejercicio-02/ejercicio-02.sql',
        sqlFileLabel: 'DESCARGAR SCRIPT (.SQL)',
        status: 'available',
      },
      {
        slug: 'consulta-3-empleados-por-pais',
        order: 3,
        type: 'EJERCICIO PRÁCTICO',
        title: 'Cantidad de empleados por país',
        subtitle: 'Agrupación y filtrado de países con más de 10 empleados en el esquema HR',
        shortDescription:
          'Cantidad de empleados por país, mostrando únicamente países con más de 10 empleados.',
        context:
          'Ejercicio desarrollado en Oracle SQL utilizando Oracle SQL Developer sobre el esquema HR de Oracle Database.',
        statementIntro:
          'A partir de las entidades geográficas y de personal del esquema HR de Oracle Database, se solicita:',
        statementBlocks: [
          {
            title: 'Requerimiento de la consulta',
            paragraphs: [
              'Obtener la cantidad de empleados por país, mostrando únicamente aquellos países que cuenten con más de 10 empleados.',
            ],
          },
        ],
        objective:
          'Agrupar el personal registrado en el esquema HR por país de ubicación y filtrar los grupos resultantes para exhibir exclusivamente aquellos países que superen los 10 empleados mediante funciones de agregación en Oracle SQL.',
        sqlCode: `-- Ejercicio 3: Cantidad de empleados por país (más de 10)
SELECT C.COUNTRY_NAME AS PAIS,
       COUNT(E.EMPLOYEE_ID) AS CANTIDAD_EMPLEADOS
FROM HR.EMPLOYEES E
JOIN HR.DEPARTMENTS D ON E.DEPARTMENT_ID = D.DEPARTMENT_ID
JOIN HR.LOCATIONS L ON D.LOCATION_ID = L.LOCATION_ID
JOIN HR.COUNTRIES C ON L.COUNTRY_ID = C.COUNTRY_ID
GROUP BY C.COUNTRY_NAME
HAVING COUNT(E.EMPLOYEE_ID) > 10
ORDER BY CANTIDAD_EMPLEADOS DESC;`,
        sqlExplanation:
          'Propuesta de consulta generada a partir del enunciado y del esquema HR. Une las tablas HR.EMPLOYEES, HR.DEPARTMENTS, HR.LOCATIONS y HR.COUNTRIES, agrupa los registros por nombre del país (GROUP BY C.COUNTRY_NAME) para contar los empleados con COUNT(E.EMPLOYEE_ID) y aplica la cláusula HAVING COUNT(E.EMPLOYEE_ID) > 10 para restringir el resultado a los países con más de diez empleados, ordenando de mayor a menor.',
        sqlFileUrl: '/evidencias/sql/ejercicio-03/ejercicio-03.sql',
        sqlFileLabel: 'DESCARGAR SCRIPT (.SQL)',
        status: 'available',
      },
      {
        slug: 'consulta-4-top-salarios-departamento',
        order: 4,
        type: 'EJERCICIO PRÁCTICO',
        title: 'Suma de salarios por departamento (Top 5 con empates)',
        subtitle: 'Agrupación salarial, orden descendente y primeros cinco departamentos en Oracle SQL',
        shortDescription:
          'Suma de salarios por departamento en orden descendente, primeros cinco departamentos e incluyendo empates.',
        context:
          'Ejercicio desarrollado en Oracle SQL utilizando Oracle SQL Developer sobre el esquema HR de Oracle Database.',
        statementIntro:
          'Sobre la información salarial por departamento en el esquema HR de Oracle Database, se solicita resolver:',
        statementBlocks: [
          {
            title: 'Requerimiento de la consulta',
            paragraphs: [
              'Calcular la suma de salarios por departamento en orden descendente, mostrando únicamente los primeros cinco departamentos e incluyendo empates.',
            ],
          },
        ],
        objective:
          'Totalizar los salarios por departamento en el esquema HR, ordenar los resultados de forma descendente y restringir la salida a los primeros cinco departamentos conservando posibles empates mediante sintaxis nativa de Oracle SQL.',
        sqlCode: `-- Ejercicio 4: Cinco departamentos con mayor suma salarial, incluyendo empates
-- FETCH FIRST ... WITH TIES requiere Oracle 12c o posterior.
SELECT D.DEPARTMENT_NAME AS DEPARTAMENTO,
       SUM(E.SALARY) AS TOTAL_SALARIOS
FROM HR.DEPARTMENTS D
JOIN HR.EMPLOYEES E ON D.DEPARTMENT_ID = E.DEPARTMENT_ID
GROUP BY D.DEPARTMENT_ID, D.DEPARTMENT_NAME
ORDER BY TOTAL_SALARIOS DESC
FETCH FIRST 5 ROWS WITH TIES;`,
        sqlExplanation:
          'Propuesta de consulta planteada para el esquema HR en Oracle SQL (Oracle 12c o posterior). Agrupa los empleados por departamento (D.DEPARTMENT_ID, D.DEPARTMENT_NAME) calculando la suma salarial con SUM(E.SALARY), ordena de forma descendente por TOTAL_SALARIOS y utiliza la cláusula estándar de Oracle FETCH FIRST 5 ROWS WITH TIES para obtener los primeros cinco departamentos incluyendo posibles empates en la quinta posición.',
        sqlFileUrl: '/evidencias/sql/ejercicio-04/ejercicio-04.sql',
        sqlFileLabel: 'DESCARGAR SCRIPT (.SQL)',
        status: 'available',
      },
      {
        slug: 'consulta-5-cargos-anteriores',
        order: 5,
        type: 'EJERCICIO PRÁCTICO',
        title: 'Empleados con más de dos cargos anteriores',
        subtitle: 'Análisis de historial laboral en el esquema HR de Oracle Database',
        shortDescription:
          'Empleados con más de dos cargos anteriores al actual, mostrando nombre y cantidad de cargos anteriores.',
        context:
          'Ejercicio desarrollado en Oracle SQL utilizando Oracle SQL Developer sobre el esquema HR de Oracle Database.',
        statementIntro:
          'A partir del registro histórico de cargos del esquema HR de Oracle Database, se solicita formular una consulta que cumpla con lo siguiente:',
        statementBlocks: [
          {
            title: 'Requerimiento de la consulta',
            paragraphs: [
              'Consultar los empleados que han tenido más de dos cargos anteriores al actual, mostrando su nombre y la cantidad de cargos anteriores.',
            ],
          },
        ],
        objective:
          'Contabilizar los registros históricos de cargos por empleado en el esquema HR y filtrar aquellos trabajadores que acumulan más de dos cargos previos al actual utilizando Oracle SQL.',
        sqlCode: `-- Ejercicio 5: Empleados con más de dos cargos anteriores
SELECT E.FIRST_NAME || ' ' || E.LAST_NAME AS EMPLEADO,
       COUNT(JH.JOB_ID) AS CARGOS_ANTERIORES
FROM HR.EMPLOYEES E
JOIN HR.JOB_HISTORY JH ON E.EMPLOYEE_ID = JH.EMPLOYEE_ID
GROUP BY E.EMPLOYEE_ID, E.FIRST_NAME, E.LAST_NAME
HAVING COUNT(JH.JOB_ID) > 2
ORDER BY CARGOS_ANTERIORES DESC;`,
        sqlExplanation:
          'Propuesta de consulta construida a partir del enunciado y la relación entre HR.EMPLOYEES y HR.JOB_HISTORY. Agrupa por identificador y nombre del empleado para contabilizar mediante COUNT(JH.JOB_ID) los cargos registrados en el historial laboral, filtrando con HAVING COUNT(JH.JOB_ID) > 2 aquellos empleados que superan dos cargos anteriores.',
        sqlFileUrl: '/evidencias/sql/ejercicio-05/ejercicio-05.sql',
        sqlFileLabel: 'DESCARGAR SCRIPT (.SQL)',
        status: 'available',
      },
      {
        slug: 'consulta-6-empleados-reino-unido',
        order: 6,
        type: 'EJERCICIO PRÁCTICO',
        title: 'Empleados del Reino Unido con patrón en el nombre',
        subtitle: 'Filtrado geográfico y coincidencia de caracteres en la tercera posición en Oracle SQL',
        shortDescription:
          'Empleados del Reino Unido cuyo nombre tenga una letra "a" minúscula en la tercera posición.',
        context:
          'Ejercicio desarrollado en Oracle SQL utilizando Oracle SQL Developer sobre el esquema HR de Oracle Database.',
        statementIntro:
          'Sobre las tablas de empleados y localizaciones geográficas del esquema HR de Oracle Database, se plantea el siguiente ejercicio:',
        statementBlocks: [
          {
            title: 'Requerimiento de la consulta',
            paragraphs: [
              'Consultar los empleados del Reino Unido cuyo nombre tenga una letra "a" minúscula en la tercera posición.',
            ],
          },
        ],
        objective:
          'Combinar el filtrado por país (Reino Unido) con la evaluación posicional de caracteres en el nombre del empleado (letra "a" minúscula en la tercera posición) dentro del esquema HR en Oracle SQL.',
        sqlCode: `-- Ejercicio 6: Reino Unido y letra 'a' minúscula en la tercera posición
SELECT E.FIRST_NAME AS NOMBRE, E.LAST_NAME AS APELLIDO
FROM HR.EMPLOYEES E
JOIN HR.DEPARTMENTS D ON E.DEPARTMENT_ID = D.DEPARTMENT_ID
JOIN HR.LOCATIONS L ON D.LOCATION_ID = L.LOCATION_ID
JOIN HR.COUNTRIES C ON L.COUNTRY_ID = C.COUNTRY_ID
WHERE C.COUNTRY_NAME = 'United Kingdom'
  AND SUBSTR(E.FIRST_NAME, 3, 1) = 'a';`,
        sqlExplanation:
          'Propuesta de consulta generada sobre el esquema HR que enlaza HR.EMPLOYEES con HR.DEPARTMENTS, HR.LOCATIONS y HR.COUNTRIES. En la cláusula WHERE restringe simultáneamente el país a United Kingdom y evalúa con la función de cadena SUBSTR(E.FIRST_NAME, 3, 1) = \'a\' que el tercer carácter del nombre sea exactamente una letra "a" minúscula.',
        sqlFileUrl: '/evidencias/sql/ejercicio-06/ejercicio-06.sql',
        sqlFileLabel: 'DESCARGAR SCRIPT (.SQL)',
        status: 'available',
      },
      {
        slug: 'consulta-7-empleados-con-comision',
        order: 7,
        type: 'EJERCICIO PRÁCTICO',
        title: 'Empleados con comisión no nula',
        subtitle: 'Evaluación de valores no nulos sobre comisiones en el esquema HR',
        shortDescription:
          'Empleados cuya comisión no sea NULL, mostrando nombre y comisión.',
        context:
          'Ejercicio desarrollado en Oracle SQL utilizando Oracle SQL Developer sobre el esquema HR de Oracle Database.',
        statementIntro:
          'A partir de la tabla de empleados del esquema HR de Oracle Database, se solicita resolver el siguiente requerimiento:',
        statementBlocks: [
          {
            title: 'Requerimiento de la consulta',
            paragraphs: [
              'Consultar los empleados cuya comisión no sea NULL, mostrando su nombre y su comisión.',
            ],
          },
        ],
        objective:
          'Identificar y proyectar el nombre y la comisión de los empleados del esquema HR que tienen un valor registrado distinto de NULL en su porcentaje de comisión utilizando predicados estándar de Oracle SQL.',
        sqlCode: `-- Ejercicio 7: Empleados con comisión no nula
SELECT FIRST_NAME || ' ' || LAST_NAME AS EMPLEADO,
       COMMISSION_PCT AS COMISION
FROM HR.EMPLOYEES
WHERE COMMISSION_PCT IS NOT NULL
ORDER BY COMMISSION_PCT DESC;`,
        sqlExplanation:
          'Propuesta de consulta sobre la tabla HR.EMPLOYEES que proyecta el nombre completo concatenado (FIRST_NAME || \' \' || LAST_NAME) y el porcentaje de comisión (COMMISSION_PCT), filtrando mediante el predicado estándar WHERE COMMISSION_PCT IS NOT NULL únicamente a los empleados que poseen comisión registrada y ordenando el resultado de forma descendente.',
        sqlFileUrl: '/evidencias/sql/ejercicio-07/ejercicio-07.sql',
        sqlFileLabel: 'DESCARGAR SCRIPT (.SQL)',
        status: 'available',
      },
      {
        slug: 'consulta-8-funciones-agregacion-salarios',
        order: 8,
        type: 'EJERCICIO PRÁCTICO',
        title: 'Funciones de agregación sobre salarios',
        subtitle: 'Suma total, máximo, mínimo y desviación estándar salarial en Oracle SQL',
        shortDescription:
          'Funciones de agregación: suma total de salarios, salario máximo, mínimo y desviación estándar.',
        context:
          'Ejercicio desarrollado en Oracle SQL utilizando Oracle SQL Developer sobre el esquema HR de Oracle Database.',
        statementIntro:
          'Sobre el conjunto de empleados del esquema HR de Oracle Database, se solicita aplicar funciones de agregación para obtener:',
        statementBlocks: [
          {
            title: 'Requerimiento de la consulta',
            paragraphs: [
              'Calcular mediante funciones de agregación la suma total de salarios, el salario máximo, el salario mínimo y la desviación estándar de los salarios.',
            ],
          },
        ],
        objective:
          'Aplicar las funciones de grupo de Oracle SQL sobre la tabla de empleados del esquema HR para obtener en un único resumen la suma salarial, los valores extremos (máximo y mínimo) y la desviación estándar.',
        sqlCode: `-- Ejercicio 8: Agregaciones sobre salarios
SELECT SUM(SALARY) AS SUMA_TOTAL,
       MAX(SALARY) AS SALARIO_MAXIMO,
       MIN(SALARY) AS SALARIO_MINIMO,
       STDDEV(SALARY) AS DESVIACION_ESTANDAR
FROM HR.EMPLOYEES;`,
        sqlExplanation:
          'Propuesta de consulta formulada sobre HR.EMPLOYEES que invoca en una sola proyección las funciones de agregación nativas de Oracle SQL: SUM(SALARY) para la suma total de salarios, MAX(SALARY) para el salario máximo, MIN(SALARY) para el salario mínimo y STDDEV(SALARY) para la desviación estándar salarial.',
        sqlFileUrl: '/evidencias/sql/ejercicio-08/ejercicio-08.sql',
        sqlFileLabel: 'DESCARGAR SCRIPT (.SQL)',
        status: 'available',
      },
      {
        slug: 'consulta-9-clasificacion-salarial-case',
        order: 9,
        type: 'EJERCICIO PRÁCTICO',
        title: 'Clasificación salarial mediante CASE',
        subtitle: 'Evaluación condicional de rangos salariales en el esquema HR con Oracle SQL',
        shortDescription:
          'Clasificación salarial mediante CASE, con los mensajes definidos en el enunciado original.',
        context:
          'Ejercicio desarrollado en Oracle SQL utilizando Oracle SQL Developer sobre el esquema HR de Oracle Database.',
        statementIntro:
          'A partir de la información salarial de los empleados en el esquema HR de Oracle Database, se plantea el siguiente ejercicio:',
        statementBlocks: [
          {
            title: 'Requerimiento de la consulta',
            paragraphs: [
              'Clasificar el salario de los empleados mediante una expresión condicional CASE, asignando los mensajes definidos en el enunciado original según el rango salarial correspondiente.',
            ],
          },
        ],
        objective:
          'Construir una proyección condicional en Oracle SQL utilizando la estructura CASE sobre el esquema HR para categorizar el salario de cada empleado con los mensajes especificados en el enunciado del ejercicio.',
        sqlCode: `-- Ejercicio 9: Clasificación salarial mediante CASE
SELECT FIRST_NAME || ' ' || LAST_NAME AS EMPLEADO,
       SALARY AS SALARIO,
       CASE
           WHEN SALARY < 1000 THEN 'pobrecito'
           WHEN SALARY < 3000 THEN 'sigue intentando'
           WHEN SALARY < 5000 THEN 'ya casi'
           WHEN SALARY > 10000 THEN 'buenos dias ingeniero'
           ELSE 'otros'
       END AS MENSAJE
FROM HR.EMPLOYEES
ORDER BY SALARY;`,
        sqlExplanation:
          'Propuesta de consulta sobre HR.EMPLOYEES que evalúa secuencialmente el atributo SALARY mediante una expresión CASE buscada (searched CASE), asignando el mensaje definido para cada umbral (< 1000, < 3000, < 5000, > 10000 y cláusula ELSE para el rango restante) y ordenando los resultados de forma ascendente por salario.',
        sqlFileUrl: '/evidencias/sql/ejercicio-09/ejercicio-09.sql',
        sqlFileLabel: 'DESCARGAR SCRIPT (.SQL)',
        status: 'available',
      },
      {
        slug: 'consulta-10-salario-superior-promedio',
        order: 10,
        type: 'EJERCICIO PRÁCTICO',
        title: 'Empleados con salario superior al promedio de su departamento',
        subtitle: 'Comparación salarial por departamento mediante subconsultas en Oracle SQL',
        shortDescription:
          'Empleados cuyo salario sea superior al promedio de su departamento.',
        context:
          'Ejercicio desarrollado en Oracle SQL utilizando Oracle SQL Developer sobre el esquema HR de Oracle Database.',
        statementIntro:
          'Sobre los empleados y departamentos del esquema HR de Oracle Database, se solicita formular una consulta que resuelva:',
        statementBlocks: [
          {
            title: 'Requerimiento de la consulta',
            paragraphs: [
              'Consultar los empleados cuyo salario sea superior al salario promedio de su propio departamento.',
            ],
          },
        ],
        objective:
          'Evaluar el salario de cada empleado en relación con el promedio salarial de su departamento dentro del esquema HR mediante el uso de subconsultas en dialecto Oracle SQL.',
        sqlCode: `-- Ejercicio 10: Salario superior al promedio del departamento
SELECT E.FIRST_NAME || ' ' || E.LAST_NAME AS EMPLEADO,
       E.SALARY AS SALARIO,
       (SELECT AVG(E2.SALARY)
        FROM HR.EMPLOYEES E2
        WHERE E2.DEPARTMENT_ID = E.DEPARTMENT_ID) AS PROMEDIO_DEPARTAMENTO
FROM HR.EMPLOYEES E
WHERE E.SALARY > (
    SELECT AVG(E2.SALARY)
    FROM HR.EMPLOYEES E2
    WHERE E2.DEPARTMENT_ID = E.DEPARTMENT_ID
)
ORDER BY E.DEPARTMENT_ID, E.SALARY DESC;`,
        sqlExplanation:
          'Propuesta de consulta basada en subconsultas correlacionadas sobre HR.EMPLOYEES. Para cada fila E, la subconsulta calcula el promedio salarial AVG(E2.SALARY) de los empleados del mismo departamento (E2.DEPARTMENT_ID = E.DEPARTMENT_ID), tanto para proyectar el valor de referencia como para filtrar en el WHERE aquellos empleados con salario estrictamente mayor al promedio departamental.',
        sqlFileUrl: '/evidencias/sql/ejercicio-10/ejercicio-10.sql',
        sqlFileLabel: 'DESCARGAR SCRIPT (.SQL)',
        status: 'available',
      },
      {
        slug: 'consulta-11-cuatro-condiciones-simultaneas',
        order: 11,
        type: 'EJERCICIO PRÁCTICO',
        title: 'Empleados con cuatro condiciones departamentales y jerárquicas',
        subtitle: 'Subconsultas combinadas de salario, antigüedad y subordinación en Oracle SQL',
        shortDescription:
          'Empleados con salario entre el promedio y el máximo departamental, contratados después del más antiguo y sin subordinados directos.',
        context:
          'Ejercicio desarrollado en Oracle SQL utilizando Oracle SQL Developer sobre el esquema HR de Oracle Database.',
        statementIntro:
          'A partir del esquema HR de Oracle Database, se solicita consultar los empleados que cumplan simultáneamente las siguientes cuatro condiciones:',
        statementBlocks: [
          {
            title: 'Condiciones simultáneas de la consulta',
            items: [
              'Salario superior al promedio departamental.',
              'Contratación posterior al empleado más antiguo del departamento.',
              'No tener subordinados directos.',
              'Salario inferior al máximo del departamento.',
            ],
          },
        ],
        objective:
          'Integrar subconsultas en Oracle SQL sobre el esquema HR para filtrar los empleados que satisfacen simultáneamente las cuatro restricciones de promedio salarial departamental, antigüedad de contratación, ausencia de subordinados directos y tope salarial del departamento.',
        sqlCode: `-- Ejercicio 11: Cuatro condiciones simultáneas
SELECT E.*,
       D.DEPARTMENT_NAME AS DEPARTAMENTO,
       (SELECT AVG(E2.SALARY) FROM HR.EMPLOYEES E2
        WHERE E2.DEPARTMENT_ID = E.DEPARTMENT_ID) AS PROMEDIO_DEPARTAMENTO,
       (SELECT MIN(E3.HIRE_DATE) FROM HR.EMPLOYEES E3
        WHERE E3.DEPARTMENT_ID = E.DEPARTMENT_ID) AS FECHA_MAS_ANTIGUO,
       (SELECT MAX(E4.SALARY) FROM HR.EMPLOYEES E4
        WHERE E4.DEPARTMENT_ID = E.DEPARTMENT_ID) AS SALARIO_MAXIMO_DEPARTAMENTO,
       CASE WHEN E.SALARY > (SELECT AVG(E2.SALARY) FROM HR.EMPLOYEES E2
             WHERE E2.DEPARTMENT_ID = E.DEPARTMENT_ID)
            THEN 'CUMPLE' ELSE 'NO CUMPLE' END AS CONDICION_1,
       CASE WHEN E.HIRE_DATE > (SELECT MIN(E3.HIRE_DATE) FROM HR.EMPLOYEES E3
             WHERE E3.DEPARTMENT_ID = E.DEPARTMENT_ID)
            THEN 'CUMPLE' ELSE 'NO CUMPLE' END AS CONDICION_2,
       CASE WHEN NOT EXISTS (SELECT 1 FROM HR.EMPLOYEES SUB
             WHERE SUB.MANAGER_ID = E.EMPLOYEE_ID)
            THEN 'CUMPLE' ELSE 'NO CUMPLE' END AS CONDICION_3,
       CASE WHEN E.SALARY < (SELECT MAX(E4.SALARY) FROM HR.EMPLOYEES E4
             WHERE E4.DEPARTMENT_ID = E.DEPARTMENT_ID)
            THEN 'CUMPLE' ELSE 'NO CUMPLE' END AS CONDICION_4
FROM HR.EMPLOYEES E
JOIN HR.DEPARTMENTS D ON E.DEPARTMENT_ID = D.DEPARTMENT_ID
WHERE E.SALARY > (SELECT AVG(E2.SALARY) FROM HR.EMPLOYEES E2
                  WHERE E2.DEPARTMENT_ID = E.DEPARTMENT_ID)
  AND E.HIRE_DATE > (SELECT MIN(E3.HIRE_DATE) FROM HR.EMPLOYEES E3
                     WHERE E3.DEPARTMENT_ID = E.DEPARTMENT_ID)
  AND NOT EXISTS (SELECT 1 FROM HR.EMPLOYEES SUB
                  WHERE SUB.MANAGER_ID = E.EMPLOYEE_ID)
  AND E.SALARY < (SELECT MAX(E4.SALARY) FROM HR.EMPLOYEES E4
                  WHERE E4.DEPARTMENT_ID = E.DEPARTMENT_ID)
ORDER BY E.DEPARTMENT_ID, E.SALARY DESC;`,
        sqlExplanation:
          'Propuesta de consulta en Oracle SQL sobre HR.EMPLOYEES y HR.DEPARTMENTS que articula cuatro subconsultas correlacionadas en el WHERE (y las proyecta junto con indicadores CASE de verificación): 1) E.SALARY > AVG(SALARY) del departamento; 2) E.HIRE_DATE > MIN(HIRE_DATE) del departamento; 3) predicado NOT EXISTS para asegurar que ningún otro empleado tenga E.EMPLOYEE_ID como MANAGER_ID; y 4) E.SALARY < MAX(SALARY) del departamento.',
        sqlFileUrl: '/evidencias/sql/ejercicio-11/ejercicio-11.sql',
        sqlFileLabel: 'DESCARGAR SCRIPT (.SQL)',
        status: 'available',
      },
    ],
  },
  proyecto: {
    slug: 'proyecto',
    name: 'Proyecto',
    title: 'Proyecto · Café & Ludoteca | Bases de Datos 1',
    description:
      'Desarrollo integral del proyecto final de Bases de Datos 1 (Café & Ludoteca), articulando el levantamiento de requerimientos, el modelado conceptual y relacional, la normalización en 1FN, 2FN y 3FN, la implementación en MySQL, la arquitectura cliente-servidor en Java/Angular y las pruebas funcionales.',
    evidences: [
      {
        slug: 'cafe-y-ludoteca',
        order: 1,
        type: 'PROYECTO',
        title: 'Café & Ludoteca',
        subtitle: 'Descripción del proyecto, alcance, actores, reglas del negocio y requerimientos',
        shortDescription:
          'Formulación académica del sistema de información para la gestión de inventario de juegos de mesa, préstamos, reservas de mesas, socios, membresías y fidelización.',
        context:
          'Café & Ludoteca es un establecimiento que combina el servicio de cafetería especializada con el préstamo y alquiler de juegos de mesa tanto en las instalaciones del local como a domicilio para sus socios afiliados. El proyecto desarrolla el sistema de información transaccional que centraliza el catálogo de juegos, sus unidades físicas, expansiones, reservas de mesas temáticas, préstamos verificados por empleados y programas de membresías y fidelización.',
        statementIntro:
          'A partir del documento de propuesta académica (BASES DE DATOS-PROPUESTA), se estructuran el contexto operativo, la problemática del negocio, los objetivos, el alcance del sistema, los actores y los requerimientos funcionales y no funcionales:',
        statementBlocks: [
          {
            title: '1. Contexto del negocio y problemática',
            paragraphs: [
              'El establecimiento administra un catálogo diverso de juegos de mesa clasificados por categorías, rangos de edad, número mínimo y máximo de jugadores, reglamento, componentes internos y expansiones, además de múltiples unidades físicas por cada título con estados de conservación individuales.',
              'De forma manual o desarticulada, el negocio enfrentaba dificultades críticas: pérdida o deterioro no rastreado de piezas y componentes al retornar los préstamos, cruces de horarios en la asignación de mesas temáticas, falta de control sobre la vigencia de las membresías de los socios habilitados para préstamos a domicilio y ausencia de trazabilidad sobre el historial de préstamos para otorgar beneficios a clientes frecuentes.',
            ],
          },
          {
            title: '2. Objetivo general y objetivos específicos',
            paragraphs: [
              'Objetivo general: Diseñar, modelar, normalizar e implementar una base de datos relacional y una aplicación web multicapa para gestionar de manera íntegra el inventario de juegos de mesa, las reservas de espacios, los préstamos locales y a domicilio, las membresías de socios y el programa de fidelización de Café & Ludoteca.',
            ],
            items: [
              'Estructurar un catálogo detallado de juegos de mesa que controle tanto la ficha técnica de cada título (JUEGO_MESA, CATEGORIA, ELEMENTO_JUEGO, EXPANSION) como la disponibilidad e integridad física de cada ejemplar (UNIDAD_JUEGO).',
              'Gestionar el ciclo completo de reservas de mesas temáticas (MESA, RESERVA, RESERVA_JUEGO), permitiendo a los clientes preseleccionar los juegos que desean utilizar durante su visita.',
              'Controlar el registro de préstamos en local y a domicilio (PRESTAMO, PRESTAMO_UNIDAD_JUEGO), vinculando al cliente solicitante, al empleado responsable de verificar los componentes y a las unidades físicas entregadas.',
              'Administrar la especialización de clientes en socios afiliados con planes de membresía y beneficios (SOCIO, MEMBRESIA, BENEFICIO) y clientes frecuentes con acumulación de puntos y niveles de fidelidad (CLIENTE_FRECUENTE).',
            ],
          },
          {
            title: '3. Alcance del sistema (qué incluye y qué no incluye)',
            paragraphs: [
              'El alcance delimita con precisión los procesos cubiertos por la base de datos y la aplicación web frente a operaciones externas al dominio académico:',
            ],
            items: [
              'Incluye: Gestión CRUD de clientes, teléfonos, socios, membresías, beneficios y clientes frecuentes; administración de empleados; catálogo de juegos de mesa, categorías, elementos internos, expansiones y unidades físicas; gestión de mesas, reservas con preselección de juegos y préstamos con verificación de estado de componentes.',
              'No incluye: Facturación electrónica ante la DIAN ni pasarelas de pago bancarias en línea; control de inventario de insumos de cocina o cafetería; ni logística de transporte externo para entregas a domicilio.',
            ],
          },
          {
            title: '4. Actores del sistema',
            items: [
              'Administrador: Gestiona de forma integral el catálogo de juegos, unidades físicas, categorías, expansiones, elementos de juego, mesas, empleados, clientes, socios, membresías y parámetros de fidelización.',
              'Empleado: Atiende la operación diaria en sala, registra y audita préstamos locales y a domicilio, verifica el estado de los componentes al momento de la salida y devolución, y consulta reservas y disponibilidad del catálogo.',
              'CLIENTE (General): Persona registrada en el sistema con sus datos básicos y teléfonos de contacto; puede consultar el catálogo, solicitar préstamos en el local y realizar reservas de mesas temáticas.',
              'Socio (Subtipo de Cliente): Cliente con fecha de afiliación y membresía registrada (MEMBRESIA y BENEFICIO) que accede a beneficios exclusivos como préstamos a domicilio y descuentos según su plan.',
              'Cliente_Frecuente (Subtipo de Cliente): Cliente que acumula puntos por su actividad en la ludoteca y alcanza niveles de fidelidad (inicial, plata, oro) para obtener recompensas operativas.',
            ],
          },
          {
            title: '5. Requerimientos Funcionales (RF-01 a RF-16)',
            items: [
              'RF-01: Registrar, consultar, actualizar y eliminar juegos de mesa identificando número de serie, nombre, reglamento, cantidad mínima y máxima de jugadores, edad mínima y duración de partida.',
              'RF-02: Asociar una o varias categorías temáticas a cada juego de mesa del catálogo.',
              'RF-03: Registrar los elementos o piezas internas que componen cada juego de mesa para su verificación en préstamos.',
              'RF-04: Administrar las expansiones asociadas a un juego base, detallando nombre, descripción y contenido adicional.',
              'RF-05: Controlar las unidades físicas (ejemplares) de cada juego de mesa mediante código de ejemplar, estado operativo y observaciones.',
              'RF-06: Gestionar la información personal de los clientes y sus múltiples números telefónicos de contacto.',
              'RF-07: Registrar la afiliación de clientes como socios y administrar el historial y estado de sus membresías (plan, tarifa, fecha de inicio, fecha de fin y estado).',
              'RF-08: Definir y consultar los beneficios asociados a cada membresía.',
              'RF-09: Administrar el puntaje acumulado y el nivel de fidelidad de los clientes frecuentes.',
              'RF-10: Gestionar el registro de empleados del establecimiento (documento, nombre, apellido, correo y cargo).',
              'RF-11: Administrar las mesas disponibles en el local indicando capacidad de personas, temática y ubicación.',
              'RF-12: Registrar reservas de mesas asociando cliente, mesa, fecha y horario.',
              'RF-13: Permitir la preselección de uno o varios juegos de mesa dentro de una reserva.',
              'RF-14: Registrar préstamos de juegos de mesa especificando fecha de salida, fecha de devolución, tipo de préstamo (Local o Domicilio), estado de componentes, cliente solicitante y empleado responsable.',
              'RF-15: Vincular una o más unidades físicas específicas de juegos de mesa a cada préstamo registrado.',
              'RF-16: Consultar la trazabilidad de préstamos, reservas y estado del inventario desde las vistas operativas de cliente, empleado y administrador.',
            ],
          },
          {
            title: '6. Requerimientos No Funcionales (RNF-01 a RNF-08)',
            items: [
              'RNF-01 (Integridad referencial): El motor relacional debe garantizar la consistencia de claves primarias y foráneas en todas las tablas del esquema.',
              'RNF-02 (Normalización): El esquema de base de datos debe cumplir hasta la Tercera Forma Normal (3FN), evitando redundancias y anomalías de actualización.',
              'RNF-03 (Arquitectura en capas): El backend debe separar estrictamente las responsabilidades en capas de Controladores REST, Servicios, Mappers, Repositorios JDBC y Configuración de conexión.',
              'RNF-04 (Interoperabilidad REST): La comunicación entre el frontend y el backend debe realizarse mediante servicios web RESTful con carga útil en formato JSON.',
              'RNF-05 (Seguridad en consultas): Todas las operaciones SQL desde Java deben emplear PreparedStatement para prevenir inyección SQL.',
              'RNF-06 (Disponibilidad en red privada): El servidor de base de datos debe ser accesible de forma segura por el equipo de desarrollo mediante una red privada virtual (Tailscale).',
              'RNF-07 (Usabilidad y diseño adaptable): La interfaz web en Angular debe ofrecer vistas diferenciadas por rol (Cliente, Empleado y Administrador) con navegación clara.',
              'RNF-08 (Mantenibilidad y control de versiones): El código fuente debe gestionarse en un repositorio centralizado en GitHub bajo estándares de compilación Maven y Node.js.',
            ],
          },
        ],
        businessRules: [
          'RN-01: Todo juego de mesa se identifica por su número de serie (num_serie) y puede contar con múltiples unidades físicas diferenciadas por un código parcial (codigo) dependiente del juego.',
          'RN-02: Un cliente puede desempeñar simultáneamente o por separado los roles de Socio y Cliente Frecuente (especialización solapada y parcial respecto a CLIENTE).',
          'RN-03: Los préstamos pueden ser de tipo Local (en mesa) o a Domicilio; los préstamos a domicilio están orientados a socios con membresía activa.',
          'RN-04: Todo préstamo debe ser atendido y verificado por un único empleado responsable, quien registra el estado de los componentes al entregar y recibir las unidades.',
          'RN-05: Un préstamo puede incluir una o varias unidades físicas de juegos, y cada unidad física puede participar en distintos préstamos a lo largo del tiempo.',
          'RN-06: Una reserva se asigna a un cliente y a una mesa específica en una fecha y horario determinados, permitiendo preseleccionar uno o más títulos del catálogo.',
          'RN-07: Cada socio puede adquirir membresías a lo largo del tiempo, y cada membresía otorga uno o varios beneficios registrados individualmente.',
        ],
        assumptionsIntro:
          'El documento de propuesta establece además seis supuestos de diseño y la Estructura de Desglose del Trabajo (EDT) que guían el desarrollo académico del proyecto:',
        assumptions: [
          {
            title: 'Supuestos de diseño documentados (Supuesto 1 a Supuesto 6)',
            items: [
              'Supuesto 1: El documento de identidad (documento) es único para cada cliente y para cada empleado dentro del sistema.',
              'Supuesto 2: Las unidades físicas (UNIDAD_JUEGO) se modelan como entidad débil frente a JUEGO_MESA, identificadas por la clave compuesta (num_serie, codigo).',
              'Supuesto 3: En una reserva el cliente preselecciona títulos del catálogo (JUEGO_MESA), mientras que en el préstamo efectivo se entregan ejemplares físicos concretos (UNIDAD_JUEGO).',
              'Supuesto 4: Un cliente puede registrar múltiples números de teléfono, por lo que el atributo multivaluado se transforma en la tabla TELEFONO con clave compuesta (documento, telefono).',
              'Supuesto 5: Las categorías de un juego y los beneficios de una membresía se estructuran en tablas independientes (CATEGORIA y BENEFICIO) para garantizar atomicidad en 1FN.',
              'Supuesto 6: La verificación física de piezas y componentes al cierre del préstamo se resume en el atributo estado_componentes del préstamo junto con las observaciones de cada unidad física.',
            ],
          },
          {
            title: 'Estructura de Desglose del Trabajo (EDT)',
            paragraphs: [
              'La planificación del proyecto se organizó en cinco paquetes de trabajo representados en el diagrama EDT adjunto: 1. Gestión del proyecto (control de versiones); 2. Modelaje (Modelo Entidad-Relación, reducción a tablas, modelo relacional y normalización); 3. Documentación (implementación RDBMS, scripts SQL, presupuesto e identificación de stakeholders); 4. Desarrollo del back-end (Maven y conexión BD, entidades y DTO, Mappers, Repositorios JDBC, Servicios, Controladores REST y manejo de excepciones); y 5. Desarrollo del front-end (entorno Angular, componentes reutilizables, interfaces por rol, navegación e integración REST).',
            ],
          },
        ],
        solutionImage: '/evidencias/proyecto/edt-cafe-ludoteca.png',
        solutionAlt: 'Estructura de Desglose del Trabajo (EDT) del proyecto Café & Ludoteca',
        pdfUrl: '/evidencias/proyecto/propuesta-cafe-ludoteca.pdf',
        pdfLabel: 'PROPUESTA DEL PROYECTO (PDF)',
        complementaryFileUrl: '/evidencias/proyecto/edt-cafe-ludoteca.pdf',
        complementaryFileLabel: 'DESCARGAR EDT (.PDF)',
        status: 'available',
      },
      {
        slug: 'modelado-base-datos',
        order: 2,
        type: 'PROYECTO',
        title: 'Modelado de la base de datos',
        subtitle: 'Modelo Entidad–Relación Extendido (MER) y transformación al Modelo Relacional',
        shortDescription:
          'Diseño conceptual del dominio Café & Ludoteca y su reducción sistemática a tablas relacionales con claves primarias, foráneas y tablas asociativas.',
        context:
          'El diseño de datos del proyecto Café & Ludoteca se desarrolló en dos etapas complementarias: primero, la construcción del Modelo Entidad–Relación Extendido (MER) para capturar fielmente la semántica del negocio; y segundo, la transformación formal hacia el esquema relacional mediante las reglas de reducción a tablas.',
        statementIntro:
          'A continuación se detalla la estructura conceptual de entidades, relaciones, jerarquías de especialización y entidades débiles, así como la justificación técnica de su paso al modelo relacional:',
        statementBlocks: [
          {
            title: '1. Explicación general de entidades y relaciones en el MER original',
            paragraphs: [
              'El Modelo Entidad–Relación original estructura el dominio alrededor de tres núcleos operativos interconectados:',
            ],
            items: [
              'Núcleo de Clientes y Fidelización: La entidad fuerte CLIENTE (identificada por documento, con atributo compuesto nombre desglosado en primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, fecha_nacimiento, direccion y atributo multivaluado telefono) se especializa de forma solapada en dos subtipos: SOCIO (con fecha_afiliacion) y CLIENTE_FRECUENTE (con puntos_acumulados y nivel_fidelidad). El subtipo SOCIO se relaciona con MEMBRESIA (id_membresia, plan, tarifa, estado, fecha_inicio, fecha_fin), la cual posee la entidad débil/multivaluada BENEFICIO.',
              'Núcleo de Catálogo e Inventario de Juegos: La entidad fuerte JUEGO_MESA (identificada por num_serie, con nombre, reglamento, cantidad_minima_jugadores, cantidad_maxima_jugadores, edad_minima y duracion_partida) agrupa sus categorías temáticas (CATEGORIA), sus piezas internas (ELEMENTO_JUEGO), sus expansiones oficiales (EXPANSION) y posee como entidad débil a UNIDAD_JUEGO (identificada parcialmente por codigo, con estado y observaciones), permitiendo distinguir entre el título abstracto del catálogo y cada caja física disponible en estantería.',
              'Núcleo Operativo de Reservas y Préstamos: Por un lado, CLIENTE realiza RESERVA (id_reserva, fecha, horario), la cual ocupa una MESA (id_mesa, capacidad, tematica, ubicacion) e incluye una relación muchos a muchos con JUEGO_MESA para preseleccionar títulos. Por otro lado, PRESTAMO (id_prestamo, fecha_salida, fecha_devolucion, tipo_prestamo, estado_componentes) vincula al CLIENTE que recibe el préstamo, al EMPLEADO (documento, nombre, apellido, correo, cargo) que lo gestiona y, mediante una relación N:M, a las unidades físicas específicas (UNIDAD_JUEGO) entregadas.',
            ],
          },
          {
            title: '2. Justificación del paso del Modelo Entidad–Relación al Modelo Relacional',
            paragraphs: [
              'La transformación del MER al modelo relacional aplica rigurosamente las reglas de reducción de esquemas conceptuales para garantizar que toda la semántica quede expresada únicamente mediante tablas, claves primarias (PK) y claves foráneas (FK):',
            ],
            items: [
              'Transformación de atributos compuestos y multivaluados: El atributo compuesto nombre de CLIENTE se aplana en cuatro columnas atómicas (primer_nombre, segundo_nombre, primer_apellido, segundo_apellido), mientras que el atributo multivaluado telefono origina la tabla TELEFONO con clave primaria compuesta (documento, telefono) y clave foránea hacia CLIENTE.',
              'Transformación de entidades débiles: UNIDAD_JUEGO hereda la clave primaria de su entidad propietaria JUEGO_MESA, conformando la clave primaria compuesta (num_serie, codigo). Del mismo modo, CATEGORIA se identifica por (num_serie, num_categoria) y BENEFICIO por (id_membresia, id_beneficio).',
              'Transformación de la jerarquía de especialización (CLIENTE → SOCIO / CLIENTE_FRECUENTE): Se aplica la alternativa de tablas por subtipo vinculadas mediante la clave primaria del supertipo. Tanto SOCIO como CLIENTE_FRECUENTE utilizan documento como clave primaria y simultáneamente como clave foránea hacia CLIENTE(documento), permitiendo que un mismo cliente pueda existir en una, ambas o ninguna de las tablas especializadas sin generar valores nulos.',
              'Resolución de relaciones muchos a muchos (N:M): La relación entre RESERVA y JUEGO_MESA se materializa en la tabla asociativa RESERVA_JUEGO con clave primaria compuesta (id_reserva, num_serie). Asimismo, la relación entre PRESTAMO y la entidad débil UNIDAD_JUEGO se transforma en la tabla asociativa PRESTAMO_UNIDAD_JUEGO, cuya clave primaria compuesta (id_prestamo, num_serie, codigo) referencia tanto a PRESTAMO(id_prestamo) como a la clave compuesta de UNIDAD_JUEGO(num_serie, codigo).',
              'Relaciones uno a muchos (1:N): Se propagan como claves foráneas en el lado N: documento y documento_empleado en PRESTAMO; documento e id_mesa en RESERVA; documento en MEMBRESIA; y num_serie en EXPANSION y ELEMENTO_JUEGO.',
            ],
          },
        ],
        sections: [
          {
            title: '1. Modelo Entidad–Relación Original (MER)',
            description:
              'Diagrama conceptual original (PROYECTO FINAL_MRE.drawio.pdf) donde se representan las entidades fuertes, entidades débiles con doble rectángulo, jerarquía de especialización de clientes, atributos simples, compuestos y multivaluados, y las cardinalidades de cada relación del negocio.',
            image: '/evidencias/proyecto/mer-original.png',
            imageAlt: 'Modelo Entidad-Relación original del proyecto Café & Ludoteca',
            pdfUrl: '/evidencias/proyecto/mer-original.pdf',
            pdfLabel: 'ABRIR / DESCARGAR MER ORIGINAL (PDF)',
          },
          {
            title: '2. Modelo Relacional Transformado (Reducción a tablas)',
            description:
              'Diagrama de transformación relacional (Transformacion_ProyectoFinal.drawio.pdf) resultante de aplicar las reglas de paso a tablas sobre el MER: incluye el desglose de claves primarias simples y compuestas, propagación de claves foráneas y creación de tablas asociativas para relaciones N:M y atributos multivaluados.',
            image: '/evidencias/proyecto/mer-transformado.png',
            imageAlt: 'Modelo transformado a esquema relacional del proyecto Café & Ludoteca',
            pdfUrl: '/evidencias/proyecto/mer-transformado.pdf',
            pdfLabel: 'ABRIR / DESCARGAR MODELO TRANSFORMADO (PDF)',
          },
        ],
        resources: [
          {
            label: 'VER / DESCARGAR MER ORIGINAL (.PDF)',
            url: '/evidencias/proyecto/mer-original.pdf',
          },
          {
            label: 'VER / DESCARGAR MODELO TRANSFORMADO (.PDF)',
            url: '/evidencias/proyecto/mer-transformado.pdf',
          },
        ],
        status: 'available',
      },
      {
        slug: 'normalizacion-base-datos',
        order: 3,
        type: 'PROYECTO',
        title: 'Normalización de la base de datos',
        subtitle: 'Análisis de Primera, Segunda y Tercera Forma Normal (1FN, 2FN y 3FN) del esquema relacional',
        shortDescription:
          'Verificación formal de atomicidad, dependencias funcionales completas y ausencia de dependencias transitivas sobre las tablas del proyecto Café & Ludoteca.',
        context:
          'Con el fin de asegurar la calidad estructural del esquema relacional de Café & Ludoteca y prevenir anomalías de inserción, borrado y actualización, se realizó el estudio detallado de normalización en un libro de cálculo estructurado por hojas, evaluando cada relación frente a la Primera Forma Normal (1FN), Segunda Forma Normal (2FN) y Tercera Forma Normal (3FN).',
        statementIntro:
          'El análisis de normalización evalúa la estructura de atributos, claves primarias declaradas, claves foráneas, filas ilustrativas y justificación formal de 1FN, 2FN y 3FN:',
        statementBlocks: [
          {
            title: '1. Propósito y metodología del proceso de normalización (1FN, 2FN y 3FN)',
            items: [
              'Primera Forma Normal (1FN): Garantizar que todos los dominios sean atómicos, eliminando grupos repetitivos y atributos compuestos o multivaluados. En el proyecto, el nombre del cliente se separó en cuatro atributos individuales y los teléfonos, categorías de juegos y beneficios de membresías se ubicaron en relaciones independientes (TELEFONO, CATEGORIA, BENEFICIO).',
              'Segunda Forma Normal (2FN): Verificar que toda tabla en 1FN cuyos identificadores sean compuestos no presente dependencias funcionales parciales de atributos no primos hacia solo una fracción de la clave primaria. En las tablas con clave primaria simple, el cumplimiento de 2FN es directo por definición.',
              'Tercera Forma Normal (3FN): Comprobar que ningún atributo no clave dependa transitivamente de la clave primaria a través de otro atributo no clave, asegurando que cada atributo descriptivo dependa directa y exclusivamente de la clave de su relación.',
            ],
          },
          {
            title: '2. Catálogo de tablas normalizadas, claves primarias (PK) y claves foráneas (FK)',
            paragraphs: [
              'En el libro de Excel se encuentran desarrolladas 17 hojas de tablas individuales junto con la hoja de Índice:',
            ],
            items: [
              '1. BENEFICIO — PK compuesta: (id_membresia, id_beneficio) | FK: id_membresia → MEMBRESIA. Atributo: beneficio.',
              '2. CATEGORIA — PK compuesta: (num_serie, num_categoria) | FK: num_serie → JUEGO_MESA. Atributo: categoria.',
              '3. CLIENTE — PK simple: (documento) | Atributos: fecha_nacimiento, primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, direccion.',
              '4. CLIENTE_FRECUENTE — PK simple: (documento) | FK: documento → CLIENTE. Atributos: puntos_acumulados, nivel_fidelidad.',
              '5. ELEMENTO_JUEGO — PK simple: (id_elemento_juego) | FK: num_serie → JUEGO_MESA. Atributo: elemento_juego.',
              '6. EMPLEADO — PK simple: (documento) | Atributos: nombre, apellido, correo, cargo.',
              '7. EXPANSION — PK simple: (id_expansion) | FK: num_serie → JUEGO_MESA. Atributos: nombre, descripcion, contenido_adicional.',
              '8. JUEGO_MESA — PK simple: (num_serie) | Atributos: nombre, reglamento, cantidad_minima_jugadores, cantidad_maxima_jugadores, edad_minima, duracion_partida.',
              '9. MEMBRESIA — PK simple: (id_membresia) | FK: documento → CLIENTE. Atributos: plan, estado, fecha_inicio, tarifa, fecha_fin.',
              '10. MESA — PK simple: (id_mesa) | Atributos: capacidad, tematica, ubicacion.',
              '11. PRESTAMO — PK simple: (id_prestamo) | FK: documento → CLIENTE, documento_empleado → EMPLEADO. Atributos: fecha_salida, fecha_devolucion, tipo_prestamo, estado_componentes.',
              '12. PRESTAMO_UNIDAD_JUEGO — PK compuesta: (id_prestamo, num_serie, codigo) | FK: id_prestamo → PRESTAMO, (num_serie, codigo) → UNIDAD_JUEGO.',
              '13. RESERVA — PK simple: (id_reserva) | FK: documento → CLIENTE, id_mesa → MESA. Atributos: fecha, horario.',
              '14. RESERVA_JUEGO — PK compuesta: (id_reserva, num_serie) | FK: id_reserva → RESERVA, num_serie → JUEGO_MESA.',
              '15. SOCIO — PK simple: (documento) | FK: documento → CLIENTE. Atributo: fecha_afiliacion.',
              '16. UNIDAD_JUEGO — PK compuesta: (num_serie, codigo) | FK: num_serie → JUEGO_MESA. Atributos: observaciones, estado.',
              '17. TELEFONO — PK compuesta: (documento, telefono) | FK: documento → CLIENTE.',
            ],
          },
          {
            title: '3. Ejemplos representativos del análisis 1FN, 2FN y 3FN',
            items: [
              'UNIDAD_JUEGO (PK compuesta: num_serie, codigo): Cumple 1FN porque cada ejemplar físico ocupa una fila con valores atómicos; cumple 2FN porque tanto observaciones como estado dependen de la combinación completa del juego (num_serie) y el número de ejemplar (codigo), no solo del juego; y cumple 3FN porque estado y observaciones califican directamente al ejemplar sin dependencias transitivas.',
              'PRESTAMO_UNIDAD_JUEGO (PK compuesta: id_prestamo, num_serie, codigo): Cumple 1FN al registrar cada unidad prestada en una tupla individual; cumple 2FN y 3FN porque todos sus atributos forman parte de la clave primaria compuesta que materializa la relación N:M entre préstamos y ejemplares físicos.',
              'CLIENTE (PK simple: documento): Cumple 1FN tras descomponer el nombre completo en cuatro columnas atómicas y extraer los teléfonos a la tabla TELEFONO; cumple 2FN por poseer clave primaria simple; y cumple 3FN porque la fecha de nacimiento, nombres, apellidos y dirección dependen directamente del documento del cliente.',
            ],
          },
        ],
        assumptionsIntro:
          'Durante el análisis de normalización se documentaron criterios específicos sobre dependencias funcionales sujetas a reglas del dominio y una observación documental sobre el archivo fuente:',
        assumptions: [
          {
            title: 'Decisiones de diseño sobre dependencias en 3FN',
            items: [
              'En CLIENTE_FRECUENTE (documento, puntos_acumulados, nivel_fidelidad), la tabla cumple 3FN bajo la decisión de diseño de que el nivel de fidelidad es asignado administrativamente; se deja constancia de que, si el nivel se determinara estrictamente por una tabla fija de rangos de puntos, existiría una dependencia funcional puntos_acumulados → nivel_fidelidad susceptible de separarse en un catálogo de niveles.',
              'En MEMBRESIA (id_membresia, plan, estado, fecha_inicio, documento, tarifa, fecha_fin), cumple 3FN considerando que la tarifa puede variar por promoción o convenio en cada contrato de membresía; si la tarifa dependiera exclusivamente del nombre del plan, podría separarse en una entidad catálogo de planes.',
              'En PRESTAMO, como la relación entre cliente y préstamo es 1:N (un préstamo pertenece a un único cliente y un cliente puede solicitar múltiples préstamos), la vinculación se resuelve directamente mediante la clave foránea documento dentro de la tabla PRESTAMO, sin requerir una tabla intermedia adicional.',
            ],
          },
          {
            title: 'Nota de verificación documental sobre el libro de Excel',
            paragraphs: [
              'Al inspeccionar el archivo original Normalizacion_Cafe_y_Ludoteca_18_tablas (1) (1).xlsx, se observa que la hoja Índice enumera 18 ítems incluyendo en la posición 5 la entrada CLIENTE_PRESTAMO ("Relación entre clientes y préstamos registrados"). Sin embargo, el libro contiene exactamente 17 hojas de tablas (no existe la hoja CLIENTE_PRESTAMO), debido a que en el modelo relacional definitivo y en la base de datos MySQL la relación 1:N entre CLIENTE y PRESTAMO quedó incorporada directamente mediante la clave foránea documento en la tabla PRESTAMO. Se conserva el archivo Excel original íntegro sin alteraciones.',
            ],
          },
        ],
        complementaryFileUrl: '/evidencias/proyecto/normalizacion-cafe-ludoteca.xlsx',
        complementaryFileLabel: 'DESCARGAR MATRIZ DE NORMALIZACIÓN (.XLSX)',
        resources: [
          {
            label: 'DESCARGAR NORMALIZACIÓN EN EXCEL (.XLSX)',
            url: '/evidencias/proyecto/normalizacion-cafe-ludoteca.xlsx',
            download: true,
          },
        ],
        status: 'available',
      },
      {
        slug: 'implementacion-mysql',
        order: 4,
        type: 'PROYECTO',
        title: 'Implementación en MySQL',
        subtitle: 'Esquema físico en MySQL Server, integridad referencial, acceso JDBC y consultas SQL',
        shortDescription:
          'Implementación física de la base de datos proyecto_db1 en MySQL 8.0.46, configuración del pool de conexiones JNDI/JDBC en Java y consultas operativas.',
        context:
          'A partir del modelo relacional normalizado, se implementó la base de datos física proyecto_db1 sobre MySQL Community Server 8.0.46 administrada desde MySQL Workbench, integrándola con el backend Java mediante el driver MySQL Connector/J 9.5.0, HikariCP 7.1.0 y un DataSource JNDI gestionado en WildFly.',
        statementIntro:
          'La implementación articula la estructura física del esquema relacional en MySQL con la capa de persistencia JDBC del backend Java:',
        statementBlocks: [
          {
            title: '1. Entorno del motor relacional y estructura del esquema proyecto_db1',
            items: [
              'Motor de base de datos: MySQL Community Server 8.0.46 ejecutándose sobre el servidor Linux del proyecto.',
              'Herramienta de administración y modelado físico: MySQL Workbench.',
              'Nombre del esquema físico: proyecto_db1, conformado por las 17 tablas relacionales (BENEFICIO, CATEGORIA, CLIENTE, CLIENTE_FRECUENTE, ELEMENTO_JUEGO, EMPLEADO, EXPANSION, JUEGO_MESA, MEMBRESIA, MESA, PRESTAMO, PRESTAMO_UNIDAD_JUEGO, RESERVA, RESERVA_JUEGO, SOCIO, TELEFONO y UNIDAD_JUEGO).',
              'Claves primarias y foráneas: Implementación de claves primarias simples (como num_serie en JUEGO_MESA, documento en CLIENTE y EMPLEADO, id_prestamo en PRESTAMO, id_reserva en RESERVA) y claves primarias compuestas para entidades débiles y tablas asociativas ((num_serie, codigo) en UNIDAD_JUEGO, (id_prestamo, num_serie, codigo) en PRESTAMO_UNIDAD_JUEGO, (id_reserva, num_serie) en RESERVA_JUEGO, (documento, telefono) en TELEFONO, (num_serie, num_categoria) en CATEGORIA y (id_membresia, id_beneficio) en BENEFICIO).',
              'Restricciones de integridad: Uso de restricciones NOT NULL en atributos obligatorios, validación de dominios y tipos de datos (VARCHAR, INT, DATE, TIME, DECIMAL) e integridad referencial mediante cláusulas FOREIGN KEY entre tablas.',
            ],
          },
          {
            title: '2. Arquitectura de acceso a datos desde Java (JDBC y JNDI)',
            paragraphs: [
              'El acceso a la base de datos desde la aplicación backend sigue un flujo desacoplado de cinco niveles: Controlador REST → Servicio → Mapper (DTO ↔ Entidad) → Repositorio JDBC → ConnectionBD (DataSource JNDI / MySQL).',
            ],
            items: [
              'Clase ConnectionBD: Centraliza la obtención de conexiones invocando InitialContext.lookup("java:/jdbc/CafeLudotecaDS") sobre el pool configurado en el servidor de aplicaciones WildFly, encapsulando cualquier NamingException o SQLException en una excepción de dominio PersistenceException.',
              'Repositorios JDBC (*RepositoryJDBC): Implementan las operaciones CRUD mediante bloques try-with-resources que cierran automáticamente Connection, PreparedStatement y ResultSet, utilizando consultas parametrizadas (?) para garantizar seguridad frente a inyección SQL.',
              'Mappers y DTOs: Aíslan las entidades de persistencia (co.edu.unbosque.model.entity) de los objetos de transferencia expuestos en la API REST (co.edu.unbosque.model.dto).',
            ],
          },
        ],
        assumptionsIntro:
          'En la revisión cruzada entre la documentación técnica entregada y el código fuente final del proyecto se destacan dos precisiones importantes:',
        assumptions: [
          {
            title: 'Evolución del código fuente frente al Documento de implementación RDBMS',
            paragraphs: [
              'El archivo Documento de implementación RDBMS – CafeLudoteca.pdf corresponde a un corte intermedio del desarrollo en el que se reportaban 10 repositorios implementados y 5 entidades pendientes de repositorio (Categoria, ElementoJuego, Expansion, Prestamo y UnidadJuego). Sin embargo, la inspección del código fuente final en CafeLudoteca-main/backend confirma que las 15 entidades del modelo de dominio cuentan con su implementación completa en todas las capas: Entidad, DTOs de petición y respuesta, Mapper, interfaz de repositorio, implementación RepositoryJDBC, Servicio y Controlador REST (mientras que las 2 tablas asociativas puras PRESTAMO_UNIDAD_JUEGO y RESERVA_JUEGO operan a nivel relacional en MySQL).',
            ],
          },
          {
            title: 'Alcance de los scripts SQL incluidos en el paquete documental',
            paragraphs: [
              'La carpeta Scripts/ del paquete del proyecto contiene 40 archivos .sql correspondientes a las consultas operativas parametrizadas (INSERT, SELECT, UPDATE y DELETE) diseñadas para los repositorios JDBC de las entidades, sin incluir un archivo DDL único de creación inicial (CREATE TABLE), ya que la creación del esquema físico proyecto_db1 se efectuó directamente en el servidor MySQL a través de MySQL Workbench.',
            ],
          },
        ],
        codeBlocks: [
          {
            title: '1. Obtención de conexiones mediante DataSource JNDI en WildFly',
            subtitle: 'backend/src/main/java/co/edu/unbosque/config/ConnectionBD.java',
            badge: '.java',
            code: `package co.edu.unbosque.config;

import java.sql.Connection;
import java.sql.SQLException;
import javax.naming.InitialContext;
import javax.naming.NamingException;
import javax.sql.DataSource;
import co.edu.unbosque.exceptions.PersistenceException;

public final class ConnectionBD {

    private static final String JNDI_NAME = "java:/jdbc/CafeLudotecaDS";

    private ConnectionBD() {
    }

    public static Connection obtenerConexion() {
        try {
            InitialContext context = new InitialContext();
            DataSource dataSource = (DataSource) context.lookup(JNDI_NAME);
            context.close();
            return dataSource.getConnection();
        } catch (NamingException | SQLException e) {
            throw new PersistenceException(
                    "Error al obtener la conexion con MySQL mediante WildFly",
                    e
            );
        }
    }
}`,
            explanation:
              'La clase utilitaria ConnectionBD recupera conexiones activas del pool administrado por WildFly bajo el nombre JNDI java:/jdbc/CafeLudotecaDS hacia el esquema proyecto_db1 en MySQL 8.0.46.',
          },
          {
            title: '2. Consultas SQL parametrizadas sobre JUEGO_MESA y UNIDAD_JUEGO',
            subtitle: 'Scripts/CrearJuego.sql · ActualizarJuego.sql · CrearUnidadJuego.sql',
            badge: '.sql',
            code: `-- Inserción de un título en el catálogo (JUEGO_MESA)
INSERT INTO JUEGO_MESA (
    num_serie, reglamento, cantidad_minima_jugadores,
    cantidad_maxima_jugadores, edad_minima, nombre, duracion_partida
) VALUES (?, ?, ?, ?, ?, ?, ?);

-- Búsqueda flexible por nombre (case-insensitive)
SELECT *
FROM JUEGO_MESA
WHERE LOWER(nombre) LIKE LOWER(?);

-- Registro de una unidad física (entidad débil UNIDAD_JUEGO con PK compuesta)
INSERT INTO UNIDAD_JUEGO (
    num_serie, codigo, observaciones, estado
) VALUES (?, ?, ?, ?);

-- Actualización del estado operativo y observaciones de un ejemplar físico
UPDATE UNIDAD_JUEGO
SET observaciones = ?,
    estado = ?
WHERE num_serie = ? AND codigo = ?;`,
            explanation:
              'Consultas representativas del módulo de inventario: combinan el mantenimiento de la entidad fuerte JUEGO_MESA con la gestión de ejemplares físicos en UNIDAD_JUEGO utilizando su clave primaria compuesta (num_serie, codigo).',
          },
          {
            title: '3. Consultas SQL para Préstamos, Reservas, Socios y Membresías',
            subtitle: 'Scripts/CrearPrestamo.sql · CrearReserva.sql · CrearMembresia.sql',
            badge: '.sql',
            code: `-- Registro de un préstamo vinculando cliente solicitante y empleado responsable
INSERT INTO PRESTAMO (
    id_prestamo, fecha_salida, fecha_devolucion,
    tipo_prestamo, estado_componentes, documento, documento_empleado
) VALUES (?, ?, ?, ?, ?, ?, ?);

-- Consulta de préstamos por tipo (Local / Domicilio) o por cliente
SELECT *
FROM PRESTAMO
WHERE id_prestamo = ?;

-- Creación de una reserva de mesa temática por parte de un cliente
INSERT INTO RESERVA (
    id_reserva, fecha, horario, documento, id_mesa
) VALUES (?, ?, ?, ?, ?);

-- Registro de membresía asociada a un socio afiliado
INSERT INTO MEMBRESIA (
    id_membresia, plan, estado, fecha_inicio, documento, tarifa, fecha_fin
) VALUES (?, ?, ?, ?, ?, ?, ?);`,
            explanation:
              'Sentencias SQL empleadas por PrestamoRepositoryJDBC, ReservaRepositoryJDBC y MembresiaRepositoryJDBC, donde se aprecia el uso de las claves foráneas documento, documento_empleado e id_mesa para preservar la integridad referencial.',
          },
        ],
        resources: [
          {
            label: 'VER / DESCARGAR IMPLEMENTACIÓN RDBMS (.PDF)',
            url: '/evidencias/proyecto/implementacion-rdbms-mysql.pdf',
          },
        ],
        status: 'available',
      },
      {
        slug: 'arquitectura-tecnologica',
        order: 5,
        type: 'PROYECTO',
        title: 'Arquitectura tecnológica',
        subtitle: 'Infraestructura en servidor físico Linux, red privada Tailscale, backend Java/WildFly y frontend Angular',
        shortDescription:
          'Despliegue distribuido del motor MySQL en servidor dedicado Dell con Linux Mint 22.3 Xfce, interconexión por VPN Tailscale y arquitectura full-stack Java 21 + Angular 19.',
        context:
          'El proyecto Café & Ludoteca se implementó sobre una arquitectura cliente-servidor distribuida que integra un servidor físico dedicado para la base de datos MySQL, una red privada virtual en malla con Tailscale para la conexión remota segura de los tres equipos de desarrollo, un backend empresarial en Java desplegado sobre WildFly y un frontend moderno en Angular.',
        statementIntro:
          'A partir de los documentos de infraestructura, selección tecnológica, presupuesto y el código fuente en CafeLudoteca-main, se detallan los componentes reales de hardware y software del proyecto:',
        statementBlocks: [
          {
            title: '1. Servidor físico dedicado de base de datos y red privada Tailscale',
            paragraphs: [
              'Por autorización expresa del docente de la asignatura, en lugar de emplear una máquina virtual local se aprovisionó un computador portátil físico marca Dell dedicado exclusivamente a operar como servidor de base de datos para todo el equipo:',
            ],
            items: [
              'Hardware del servidor: Portátil Dell Inspiron 3458 con procesador Intel Core i3, 6 GB de memoria RAM y disco duro de 500.1 GB.',
              'Sistema operativo instalado: Linux Mint 22.3 con entorno de escritorio ligero Xfce (64 bits), seleccionado por su bajo consumo de memoria en reposo (~450 MB de RAM), estabilidad basada en Ubuntu LTS/Debian y facilidad de administración.',
              'Motor de base de datos en el servidor: MySQL Server 8.0.46 escuchando peticiones remotas autenticadas de los desarrolladores sobre la base de datos proyecto_db1.',
              'Conectividad privada mediante VPN Tailscale: El servidor Dell expone la dirección IP privada 100.64.242.64 dentro de la red malla cifrada (WireGuard) de Tailscale, permitiendo que los tres computadores de desarrollo (Michael, Santiago y Alejandra) se conecten de forma segura al puerto 3306 de MySQL desde distintas ubicaciones sin abrir puertos públicos en el router.',
            ],
          },
          {
            title: '2. Arquitectura del Backend (Java, Maven, Jakarta REST y WildFly)',
            paragraphs: [
              'El backend está construido como una aplicación empaquetada en formato WAR (CafeLudoteca.war) bajo el grupo co.edu.unbosque y desplegada localmente en cada estación de desarrollo sobre un servidor de aplicaciones WildFly:',
            ],
            items: [
              'Lenguaje y compilación: Java 21 configurado en maven-compiler-plugin 3.14.1 (ejecutado sobre JDK Eclipse Temurin 25 en entorno de desarrollo) y gestionado con Apache Maven (maven-war-plugin 3.4.0).',
              'Especificación de servicios web: Jakarta RESTful Web Services (jakarta.ws.rs-api 3.1.0) activado mediante la clase RestApplication anotada con @ApplicationPath("/api").',
              'Serialización y utilidades: Jackson Databind 2.20.1 para conversión JSON, Lombok 1.18.42 para reducción de código repetitivo y JUnit 4.13.2.',
              'Persistencia y pool de conexiones: Driver MySQL Connector/J 9.5.0 y HikariCP 7.1.0 integrados con el DataSource JNDI java:/jdbc/CafeLudotecaDS en WildFly 42.0.0.Final.',
              'Estructura modular completa en código fuente: 15 Entidades (Beneficio, Categoria, Cliente, ClienteFrecuente, ElementoJuego, Empleado, Expansion, JuegoMesa, Membresia, Mesa, Prestamo, Reserva, Socio, Telefono, UnidadJuego), 32 clases DTO (Request y Response), 15 Mappers, 15 interfaces de repositorio + 15 implementaciones RepositoryJDBC, 15 interfaces de servicio + 15 implementaciones de servicio, 15 interfaces de controlador + 15 Controladores REST y manejo centralizado de errores (PersistenceException, BadRequestException, ResourceNotFoundException).',
            ],
          },
          {
            title: '3. Arquitectura del Frontend (Angular 19 y Node.js) y vistas por rol',
            paragraphs: [
              'El cliente web fue desarrollado como una Single Page Application (SPA) en Angular 19.2.x sobre Node.js 24.14.0 y TypeScript 5.7, consumiendo los endpoints REST del backend y organizando la experiencia de usuario en tres layouts independientes según el rol seleccionado en la pantalla inicial (RoleSelectionPageComponent):',
            ],
            items: [
              '1. Vista Cliente (ClientLayoutComponent): Incluye las rutas /inicio (HomePageComponent), /catalogo (CatalogPageComponent con filtros de juegos), /reservas (ReservationsPageComponent para reservar mesas temáticas), /negociaciones, /contacto y /carta.',
              '2. Vista Empleado (EmployeeLayoutComponent, prefijo /empleado): Incluye /empleado/catalogo, /empleado/reservas, /empleado/prestamos (LoansPageComponent para registro y control de préstamos) y /empleado/auditoria (verificación de estado de componentes y devoluciones).',
              '3. Vista Administrador (AdminLayoutComponent, prefijo /admin): Agrupa la gestión integral en módulos de Usuarios (/admin/clientes, /admin/empleados, /admin/socios, /admin/membresias), Relaciones (/admin/relaciones/beneficios, /admin/relaciones/clientes-frecuentes, /admin/relaciones/telefonos), Inventario (/admin/inventario/juegos, /admin/inventario/categorias, /admin/inventario/expansiones, /admin/inventario/elementos, /admin/inventario/unidades) y Operación (/admin/operacion/mesas).',
              'Control de versiones colaborativo: Repositorio compartido en GitHub con flujo de ramas para integrar el trabajo de los tres integrantes del equipo.',
            ],
          },
          {
            title: '4. Análisis comparativo de tecnologías y presupuesto del proyecto',
            items: [
              'Selección del RDBMS (analisis_seleccion_rdbms.pdf): Se evaluaron MySQL, PostgreSQL, Oracle Database y Microsoft SQL Server bajo criterios de consumo de recursos en el servidor Dell de 6 GB RAM, licenciamiento libre, soporte JDBC y facilidad de administración, seleccionando MySQL Community Server 8.0.46.',
              'Selección del Sistema Operativo (Análisis de selección de Sistema Operativo.pdf): Se compararon distribuciones Linux frente a Windows Server para el portátil Dell Inspiron 3458, optando por Linux Mint 22.3 Xfce para maximizar la memoria disponible para MySQL.',
              'Presupuesto académico (presupuesto.pdf): Estimación financiera detallada del proyecto (4 meses, 3 desarrolladores) estructurada en costos de personal técnico, amortización de equipos y servidor físico, servicios de conectividad/energía, licencias de software Open Source (costo $0) e imprevistos.',
            ],
          },
        ],
        assumptionsIntro:
          'Nota de precisión documental sobre el sistema operativo del servidor físico:',
        assumptions: [
          {
            title: 'Edición Xfce confirmada frente a mención preliminar en documentos PDF',
            paragraphs: [
              'En los documentos preliminares de selección de sistema operativo e implementación del servidor se menciona textualmente "Linux Mint 22.3 Cinnamon Edition"; no obstante, durante la instalación real en el portátil Dell Inspiron 3458 se desplegó y verificó la edición Linux Mint 22.3 Xfce (como consta en las capturas de consola y especificaciones técnicas del servidor), por ser más ligera y adecuada para un equipo dedicado de 6 GB de RAM.',
            ],
          },
        ],
        resources: [
          {
            label: 'IMPLEMENTACIÓN DEL SERVIDOR FÍSICO DELL / VM (.PDF)',
            url: '/evidencias/proyecto/implementacion-servidor-dell.pdf',
          },
          {
            label: 'ANÁLISIS DE SELECCIÓN DEL RDBMS (.PDF)',
            url: '/evidencias/proyecto/analisis-seleccion-rdbms.pdf',
          },
          {
            label: 'ANÁLISIS DE SELECCIÓN DE SISTEMA OPERATIVO (.PDF)',
            url: '/evidencias/proyecto/analisis-seleccion-so.pdf',
          },
          {
            label: 'PRESUPUESTO DEL PROYECTO (.PDF)',
            url: '/evidencias/proyecto/presupuesto-proyecto.pdf',
          },
        ],
        status: 'available',
      },
      {
        slug: 'pruebas-funcionales',
        order: 6,
        type: 'PROYECTO',
        title: 'Pruebas funcionales',
        subtitle: 'Verificación de endpoints REST, operaciones CRUD con Thunder Client y registro de defectos corregidos',
        shortDescription:
          'Ejecución de pruebas de integración sobre la API REST y la base de datos MySQL utilizando Thunder Client en VS Code, validando operaciones CRUD y corrección de defectos.',
        context:
          'Para validar la correcta integración entre los Controladores REST desplegados en WildFly, la capa de Servicios y Mappers, los Repositorios JDBC y las tablas físicas de la base de datos proyecto_db1 en MySQL, se diseñó y ejecutó un plan de pruebas funcionales utilizando la extensión Thunder Client en Visual Studio Code.',
        statementIntro:
          'A partir del informe técnico de pruebas del proyecto, se documentan el propósito de la validación, los módulos y endpoints evaluados, los defectos detectados durante las pruebas iniciales y las correcciones aplicadas en el código:',
        statementBlocks: [
          {
            title: '1. Propósito, alcance y entorno de las pruebas funcionales',
            items: [
              'Propósito: Comprobar que cada endpoint expuesto bajo el prefijo /CafeLudoteca/api/* procese adecuadamente las peticiones HTTP (POST, GET, PUT y DELETE), aplique las validaciones de negocio, ejecute las sentencias PreparedStatement sobre MySQL y retorne los códigos de estado HTTP (200 OK, 201 Created, 400 Bad Request, 404 Not Found) y estructuras JSON esperadas.',
              'Herramienta de pruebas: Thunder Client (cliente REST integrado en Visual Studio Code) enviando peticiones hacia el servidor local WildFly conectado a la base de datos remota MySQL 8.0.46 vía Tailscale (100.64.242.64:3306).',
              'Criterio de verificación dual: Cada caso de prueba validó tanto la respuesta JSON del servicio REST como la persistencia real del registro en las tablas de MySQL.',
            ],
          },
          {
            title: '2. Módulos y endpoints REST evaluados en operaciones CRUD',
            paragraphs: [
              'El plan de pruebas cubrió los controladores principales del inventario de ludoteca y de la operación de clientes, préstamos y mesas:',
            ],
            items: [
              'Módulo JuegoMesa (/api/juegos): Creación de títulos en el catálogo (POST), consulta general y filtro por nombre o número de serie (GET), actualización de atributos como reglamento, rango de jugadores y duración (PUT) y eliminación por num_serie (DELETE).',
              'Módulo UnidadJuego (/api/unidades): Registro de ejemplares físicos asociados a un num_serie existente (POST), consulta por clave compuesta (num_serie, codigo) (GET), actualización de estado operativo (Disponible, Prestado, En reparación) y observaciones (PUT), y baja de unidades (DELETE).',
              'Módulo Expansion (/api/expansiones): Creación de expansiones vinculadas por clave foránea a JUEGO_MESA (POST), listado y búsqueda por id_expansion (GET), modificación de descripción y contenido adicional (PUT) y eliminación (DELETE).',
              'Módulo Categoria (/api/categorias): Asociación de categorías temáticas mediante clave compuesta (num_serie, num_categoria) (POST), consulta de categorías por juego (GET), actualización (PUT) y eliminación (DELETE).',
              'Módulo ElementoJuego (/api/elementos): Registro de piezas y componentes internos de cada juego (POST), consulta por id_elemento_juego (GET), actualización (PUT) y eliminación (DELETE).',
              'Módulos Operativos de Clientes, Empleados, Mesas y Préstamos (/api/clientes, /api/empleados, /api/mesas, /api/prestamos): Verificación del flujo de registro de actores, creación de mesas temáticas y apertura/actualización de préstamos validando la integridad referencial de documento y documento_empleado.',
            ],
          },
          {
            title: '3. Defectos encontrados durante las pruebas y correcciones realizadas',
            paragraphs: [
              'Durante la ejecución inicial de las pruebas con Thunder Client se identificaron tres defectos principales en la integración Backend–MySQL, los cuales fueron diagnosticados mediante las trazas del servidor WildFly y corregidos antes de la validación final:',
            ],
            items: [
              'DEF-01 — Error HTTP 405 Method Not Allowed al invocar endpoints REST: Al enviar peticiones POST y GET hacia las rutas del proyecto, el contenedor respondía con estado 405 porque Jakarta REST no contaba con una clase de configuración que registrara la raíz de los recursos. Corrección: Se implementó la clase RestApplication extends Application en el paquete co.edu.unbosque.config anotada con @ApplicationPath("/api"), habilitando el enrutamiento correcto de los 15 controladores.',
              'DEF-02 — Error SQL Unknown column "cantidad_minima_jugador" in field list en JuegoMesaRepositoryJDBC: Al ejecutar el método saveJuegoMesa, MySQL rechazaba el INSERT debido a una discrepancia entre el nombre de la columna escrito en la sentencia SQL (cantidad_minima_jugador en singular) y el nombre real definido en la tabla física JUEGO_MESA (cantidad_minima_jugadores en plural). Corrección: Se estandarizó el nombre de la columna a cantidad_minima_jugadores en las consultas INSERT, SELECT y UPDATE de JuegoMesaRepositoryJDBC.',
              'DEF-03 — Error SQL Column "nombre" cannot be null al insertar en JUEGO_MESA: A pesar de enviar el atributo nombre en el cuerpo JSON de la petición POST, el registro llegaba con valor nulo al PreparedStatement porque en JuegoMesaMapper.toEntity() se había omitido la asignación entidad.setNombre(dto.getNombre()). Corrección: Se completó el mapeo bidireccional del atributo nombre en JuegoMesaMapper, logrando inserciones y actualizaciones exitosas con respuesta HTTP 201/200.',
            ],
          },
          {
            title: '4. Resultados documentados tras las correcciones',
            paragraphs: [
              'Una vez aplicadas las correcciones de los defectos DEF-01, DEF-02 y DEF-03 y redesplegado el archivo CafeLudoteca.war en WildFly, la reejecución de los casos de prueba CRUD sobre los endpoints de JuegoMesa, UnidadJuego, Expansion, Categoria, ElementoJuego, Cliente, Empleado, Prestamo y Mesa arrojó resultados satisfactorios (100 % de los casos ejecutados aprobados en la iteración de cierre), confirmando el cumplimiento de las restricciones de clave primaria, clave foránea y validación de datos.',
            ],
          },
        ],
        assumptionsIntro:
          'Nota de revisión editorial sobre el documento fuente de pruebas:',
        assumptions: [
          {
            title: 'Observación sobre metadatos preliminares en Pruebas.pdf',
            paragraphs: [
              'El informe original Pruebas.pdf incluido en la carpeta Documentacion/ conserva en su portada un marcador de plantilla sin diligenciar ("Autor: [Tu nombre]") y menciona en su introducción una versión preliminar del servidor de aplicaciones (WildFly 38.0.1 frente a WildFly 42.0.0.Final documentado en la configuración final del entorno). Por rigor académico y siguiendo los criterios de curaduría del portafolio, toda la información técnica de los casos de prueba, endpoints, códigos de respuesta y defectos corregidos (DEF-01, DEF-02 y DEF-03) se ha integrado de forma completa en esta página sin modificar el archivo original ni publicar como descargable definitivo un documento con metadatos de autoría en borrador.',
            ],
          },
        ],
        status: 'available',
      },
    ],
  },
};

export const CATEGORIES_LIST = Object.values(CATEGORIES_DATA);
