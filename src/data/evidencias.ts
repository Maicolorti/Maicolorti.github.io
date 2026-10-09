export type EvidenceType = 'EJERCICIO PRÁCTICO' | 'EJERCICIO CALIFICABLE' | 'PROYECTO';
export type EvidenceStatus = 'available' | 'upcoming';

export interface EvidenceSection {
  title?: string;
  description?: string;
  image?: string;
  imageAlt?: string;
}

export interface EvidenceItem {
  slug: string;
  order: number;
  type: EvidenceType;
  title: string;
  subtitle?: string;
  shortDescription: string;
  context?: string;
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
          'Taller práctico y analítico enfocado en la aplicación rigurosa de reglas de transformación desde modelos conceptuales Entidad–Relación hacia esquemas relacionales, analizando la equivalencia semántica, integridad de restricciones y optimización estructural.',
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
          'Evaluación de modelado conceptual de bases de datos basada en la solución desarrollada. Corresponde al diseño integral de un modelo Entidad–Relación para un sistema de gestión de salas de cine, exhibición de películas y administración de sedes.',
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
          'Actividad práctica desarrollada en hoja de cálculo enfocada en el análisis, diagnóstico y aplicación de principios de normalización sobre tablas no normalizadas con datos reales de proyectos, cursos y eventos.',
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
          'Taller evaluativo y material de sustentación centrado en la normalización formal de bases de datos relacionales, tomando como caso de estudio un sistema de gestión hospitalaria (pacientes, hospitalizaciones, especialidades, camas y médicos tratantes).',
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
