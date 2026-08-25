// Datos del Ciclo de Formación Impulse.
// La página /formacion se arma con este archivo: editá acá textos, bios y fechas.

export interface Docente {
  id: string;
  nombre: string;
  rol: string;
  foto: string;
  bio: string;
}

export interface Encuentro {
  numero: number;
  titulo: string;
  docenteId: string;
  // Se muestra solo cuando tiene valor, p. ej. 'Jueves 12 de marzo, 19 h'.
  fecha: string;
  descripcion: string;
  preguntas: string[];
  objetivos: string[];
}

export const ciclo = {
  nombre: 'Ciclo de Formación Impulse',
  titulo: 'Sexualidades y Salud Comunitaria',
  subtitulo: 'Genealogías, cuidados y estrategias para la acción',
  modalidad: 'Virtual',
  costo: 'Gratuito',
  coordinan: 'Christian Torno, Sebastián Loinaz e Impulse Buenos Aires',
  inscripcionURL: 'https://forms.cloud.microsoft/r/RJs7vbGz4u',
};

export const docentes: Docente[] = [
  {
    id: 'cristian-alberti',
    nombre: 'Cristian Alberti',
    rol: 'Docente invitado',
    foto: '/images/formacion/cristian-alberti.jpg',
    bio: '(UNR-CONICET). Activista pro-sexo. Integra Yarará Club. Licenciado en Comunicación Social por la Universidad Nacional de Rosario. Docente en la Facultad de Ciencia Política y Relaciones Internacionales (UNR). Sus líneas de investigación se centran en las genealogías de los activismos seropositivos y la problematización de la relación entre el discurso social construido en torno al VIH y las disidencias sexo-genéricas. En 2020 publicó el libro Discursividades víricas: hacia una genealogía sobre los posicionamientos teórico-políticos suscitados por el VIH/sida (colección Apuntes Feministas, UNR Editora).',
  },
  {
    id: 'christian-torno',
    nombre: 'Christian Torno',
    rol: 'Docente y coordinador',
    foto: '/images/formacion/christian-torno.jpg',
    bio: 'Activista marica y militante territorial. Licenciado en Trabajo Social (FTS-UNLP). Su trabajo en investigación y docencia se centra en cuidados, políticas públicas, sexualidades, VIH y derechos humanos. Retomó sus estudios doctorales en Ciencias Sociales (FaHCE-UNLP) y actualmente trabaja en el Ministerio de Salud de la Provincia de Buenos Aires. Integra la Comisión Asesora de Feminismos y Géneros del Colegio de Trabajadorxs Sociales de PBA, el Grupo de Estudios Indisciplinados en Sexualidades Sudacas (GEISS) y la comisión de diversidad de la Asociación Argentina de Salud Pública (AASAP).',
  },
  {
    id: 'sebastian-loinaz',
    nombre: 'Sebastián Loinaz',
    rol: 'Docente y coordinador',
    foto: '/images/formacion/sebastian-loinaz.jpg',
    bio: 'Artivista. Médico (FCM-UNLP), especialista en Medicina General y/o Familiar, trabajador de la salud pública. Su labor se reparte entre la gestión, la asistencia y lo comunitario: es médico de planta en un hospital público de la Provincia de Buenos Aires, trabaja en el Ministerio de Salud bonaerense e integra el Grupo de Estudios en Sexualidades Sudaca (GEISS). Desde la dimensión colectiva y comunitaria de la salud interviene calles, congresos, facultades y fiestas con el cuerpo y el juego, usando la sexualidad y el arte para buscar puntos de fuga, enlazar mundos e interpelar a quien mira.',
  },
  {
    id: 'dener-hernandez',
    nombre: 'Dener Hernández',
    rol: 'Docente',
    foto: '/images/formacion/dener-hernandez.jpg',
    bio: 'Licenciado en Psicología (UBA), con formación de posgrado en políticas de drogas, cannabis, enteógenos y reducción de riesgos y daños. Desarrolla una práctica clínica orientada a personas LGBTIQ+ y a los consumos asociados al chemsex desde una perspectiva comunitaria y de reducción de riesgos. Participa en espacios de formación internacionales como The Loop (Reino Unido) y Acadelia (Colombia), y coordina actividades de divulgación, capacitación e intervención sobre consumos, sexualidades y salud mental. Desarrolló una campaña de concientización pública y profilaxis desde una perspectiva de reducción de riesgos y daños orientada al chemsex y las nocturnidades disidentes en redes sociales.',
  },
  {
    id: 'ian-levi-mendive',
    nombre: 'Ian Levi Mendive',
    rol: 'Docente',
    foto: '/images/formacion/ian-levi-mendive.jpg',
    bio: 'Licenciado en Psicología (UBA) y trabajador trans de la salud. Se desempeña en la gestión de políticas públicas dentro del Programa de Diversidad de la Dirección de Equidad de Género en Salud del Ministerio de Salud de la Provincia de Buenos Aires. Es tutor de la Diplomatura en Equidad de Género en Salud de la misma dirección. Articula atención clínica, formación y consultoría en torno a la salud integral del colectivo LGBT+.',
  },
];

export const encuentros: Encuentro[] = [
  {
    numero: 1,
    titulo: 'Genealogías LGBT+, VIH y activismo',
    docenteId: 'cristian-alberti',
    fecha: 'Martes 6 de octubre',
    descripcion:
      'Reconstruimos las genealogías de las luchas LGBT+ y de los activismos vinculados al VIH: los procesos históricos que permitieron organizarse, dar respuestas colectivas frente a la epidemia y ampliar derechos. El VIH/sida como acontecimiento social, político y cultural que dejó a la vista los mecanismos de estigma y exclusión, y también la capacidad de las comunidades afectadas para generar cuidado, solidaridad y acción política. A partir del libro de Cristian Alberti, Discursividades víricas, pensamos las disputas de sentido en torno al VIH, el papel de los activismos en la producción de saberes y políticas públicas, y qué herencias nos dejan para los desafíos de hoy.',
    preguntas: [
      '¿Qué sabemos de quienes lucharon antes?',
      '¿Qué cambió y qué permanece?',
    ],
    objetivos: [
      'Reconocer la historia política y comunitaria de la respuesta al VIH.',
      'Valorar el papel del activismo en la ampliación de derechos.',
      'Reflexionar sobre los desafíos contemporáneos de la acción comunitaria.',
    ],
  },
  {
    numero: 2,
    titulo: 'Sexualidades e interseccionalidad: una crítica radical del mundo social',
    docenteId: 'christian-torno',
    fecha: 'Martes 13 de octubre',
    descripcion:
      'Las sexualidades y los géneros como construcciones históricas, sociales y políticas: cómo las relaciones de poder producen jerarquías, desigualdades y accesos desiguales a derechos. Desde la interseccionalidad, miramos cómo la clase, la racialización, la migración, la discapacidad, el territorio, el género y la sexualidad atraviesan al mismo tiempo la experiencia de cada persona y configuran posiciones de privilegio o vulnerabilidad. Con aportes de Michel Foucault, Paul B. Preciado, Néstor Perlongher y val flores, entre otrxs, pensamos los dispositivos de regulación (heterosexualidad obligatoria, binarismo de género) y las resistencias que emergen desde las disidencias sexuales como prácticas críticas capaces de imaginar otros modos de convivencia, cuidado y organización.',
    preguntas: [
      '¿Quiénes quedan fuera de las políticas de salud?',
      '¿Cómo operan los privilegios dentro de nuestras propias comunidades?',
    ],
    objetivos: [
      'Incorporar herramientas conceptuales para el análisis crítico de las desigualdades.',
      'Comprender el impacto de múltiples formas de discriminación sobre la salud.',
      'Fortalecer perspectivas inclusivas en las prácticas de activismo comunitario.',
    ],
  },
  {
    numero: 3,
    titulo: 'Salud, territorio y salud sexual',
    docenteId: 'sebastian-loinaz',
    fecha: 'Martes 20 de octubre',
    descripcion:
      'La salud desde una perspectiva colectiva, comunitaria y situada: los procesos de salud-enfermedad-atención-cuidado están atravesados por las condiciones sociales, económicas, culturales y territoriales en las que vive la gente. Repasamos los determinantes sociales de la salud con foco en las comunidades LGBT+ y actualizamos conceptos de prevención combinada del VIH: diagnóstico, tratamientos antirretrovirales, PrEP, indetectable = intransmisible (I=I) y otras herramientas de cuidado integral, entendiendo que la prevención no depende solo de conductas individuales. Con una actividad de cartografía colectiva, mapeamos los territorios donde se produce salud: la calle, las fiestas, las canchas, los barrios.',
    preguntas: [
      '¿Dónde se produce la salud?',
      '¿Qué pueden enseñarnos los activismos comunitarios sobre el cuidado y la prevención que muchas veces no aparece en las instituciones de salud?',
    ],
    objetivos: [
      'Ampliar la comprensión de la salud desde una perspectiva comunitaria.',
      'Actualizar conocimientos sobre VIH, prevención combinada y derechos en salud.',
      'Identificar recursos y estrategias de cuidado presentes en los territorios.',
    ],
  },
  {
    numero: 4,
    titulo: 'Fiesta, sexo, drogas y reducción de daños',
    docenteId: 'dener-hernandez',
    fecha: 'Martes 27 de octubre',
    descripcion:
      'Sexualidad, placer, consumos de sustancias y prácticas de cuidado desde una perspectiva de derechos, autonomía y reducción de riesgos y daños. Lejos de enfoques moralizantes, reconocemos el placer, el deseo y la búsqueda de bienestar como dimensiones legítimas de la vida sexual y social. Trabajamos herramientas para el cuidado individual y colectivo en contextos festivos y sexuales, el acompañamiento entre pares y la construcción de entornos más seguros. Abordamos el chemsex desde una mirada integral, sin estigmas, y el papel de las organizaciones comunitarias y los equipos territoriales en intervenciones en fiestas y otros espacios de encuentro.',
    preguntas: [
      '¿Cómo construir estrategias de cuidado que reconozcan el placer, el deseo y la autonomía de las personas sin caer en discursos de estigmatización o control?',
      '¿Qué diferencias existen entre una mirada prohibicionista de los consumos y una perspectiva de reducción de riesgos y daños en los contextos de fiesta y sexualidad?',
    ],
    objetivos: [
      'Promover abordajes basados en derechos, placer y autonomía.',
      'Incorporar herramientas de reducción de riesgos y daños.',
      'Fortalecer capacidades de acompañamiento en contextos recreativos y comunitarios.',
    ],
  },
  {
    numero: 5,
    titulo: 'Territorios de acción: deporte, arte, cultura, salud mental y comunidad',
    docenteId: 'ian-levi-mendive',
    fecha: 'Martes 3 de noviembre',
    descripcion:
      'Encuentro de cierre. Los múltiples espacios donde se construyen vínculos, identidades, cuidados y participación: el deporte, las expresiones artísticas, la cultura, el espacio público y las organizaciones comunitarias como territorios estratégicos para promover derechos, producir salud y construir ciudadanía. Desde la salud mental comunitaria, trabajamos la importancia de los lazos sociales, el sentido de pertenencia y las redes de apoyo, y cómo la discriminación, el estigma, la violencia y la exclusión impactan en la salud mental de las personas LGBT+. Ponemos en valor las prácticas que fortalecen la participación, el reconocimiento mutuo y comunidades más inclusivas y cuidadoras.',
    preguntas: [
      '¿Qué relación existe entre la participación comunitaria, el sentido de pertenencia y la salud mental?',
      '¿Cómo pueden el deporte, el arte y la cultura transformarse en espacios de cuidado, inclusión y bienestar para las diversidades sexuales y de género?',
    ],
    objetivos: [],
  },
];
