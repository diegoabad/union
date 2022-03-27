export const cont_admision = (estado) => {
  if (estado.motivo_consulta === '') {
    return {
      mensaje: 'Debe llenar el campo Motivo de consulta'
    }
  }
  if (estado.antecedentes_trastorno_actual === '') {
    return {
      mensaje: 'se requiere descripción de antecedente',
    };
  }
  if (estado.aparicion_sintomas === '') {
    return {
      mensaje: 'se requiere llenar el campo Aparición de síntomas',
    };
  }
  if (estado.relacion_funcion_vital === '') {
    return {
      mensaje: 'se requiere llenar el campo Relación funcion vital',
    }
  }

  if (estado.psico_previo === 'si' && estado.antecedentes_psico === '') {
    return {
      mensaje: 'se requiere llenar el campo Antecedentes psico',
    }
  }

  if (estado.psico_previo === 'si' && estado.tratamiento_descripcion === '') {
    {
      return {
        mensaje: 'se requiere llenar el campo Tratamiento',
      }
    }
  }

  if (estado.internaciones_previas === 'si' && estado.internaciones_descripcion === '') {
    return {
      mensaje: 'se requiere llenar el campo Internaciones',
    }
  }

  if (estado.medicacion_previa === 'si' && estado.psicofarmacos.length === 0) {
    return {
      mensaje: 'se requiere que seleccione al menos una medicación previa',
    }
  }

  if (estado.adherente_tratamiento === 'si' && estado.adherente_tratamiento_descripcion === '') {
    return {
      mensaje: 'se requiere completar el campo Descripción del tratamiento',
    }
  }

  if ((estado.intentos_suicidio=== 'si') && (estado.modalidad_intento_suicidio === '')) {
    return{
      mensaje: 'se requiere modalidad de intento de suicidio'
    }
  }
  if ((estado.autoagresividad === 'si') && (estado.detalle_autoagresividad === '')) {
    return{
      mensaje: 'se requiere detalle de autoagresividad'
    }
  }

  if ((estado.heteroagresividad === 'si') && (estado.detalle_heteroagresividad === '')) {
    return{
      mensaje: 'se requiere detalle de heteroagresividad'
    }
  }
  if ((estado.tabaquismo === 'si') && (estado.detalle_tabaquismo === '')) {
    return{
      mensaje: 'se requiere detalle de tabaquismo'
    }
  }
  if ((estado.alcoholismo === 'si') && (estado.detalle_alcoholismo === '')) {
    return{
      mensaje: 'se requiere detalle de alcoholismo'
    }
  }
  if ((estado.drogas === 'si') && (estado.detalle_drogas === '')) {
    return{
      mensaje: 'se requiere detalle de drogas'
    }
  }
  if ((estado.otros === 'si') && (estado.detalle_otros === '')) {
    return{
      mensaje: 'se requiere detalle de otros antecedentes psicopatológicos'
    }
  }
  if (((estado.edad_padre === '') && (estado.padre !== 'ignora')) || ((estado.edad_madre === '') && (estado.madre !== 'ignora')) || ((estado.edad_hijo === '') && (estado.hijo !== 'ignora')) || ((estado.edad_hermano === '') && (estado.hermano !== 'ignora')) || ((estado.edad_familiares === '') && (estado.familiares !== 'ignora'))) {
    return{
      mensaje: 'se requiere edad de padre, madre, hijo, hermanos y familiares'
    }
  }

  if ((estado.antecedentes_psiquiatricos === 'si') && ((estado.detalle_antecedentes_psiquiatricos === '') )) {
    return{
      mensaje: 'se requiere detalle de antecedente psiquiatrico'
    }
  }  
  if ((estado.antecedentes_adicciones === 'si') && (estado.detalle_antecedentes_adicciones === '')){
    return {
      mensaje: 'se requiere detalle de antecedente de adicciones'
    }
  }
  if ((estado.antecedentes_enfermedades_somaticas === 'si') && (estado.detalle_antecedentes_enfermedades_somaticas ===''
  )) {
    return {
      mensaje: 'se requiere antecedentes de enfermedades somáticas'
    }
  }
  if ((estado.habitos_alimentacion === 'si') && (estado.detalle_habitos_alimentacion === '')) {
    return {
      mensaje: 'se requiere detalle de Hábitos de alimentación'
    }
  }
  if ((estado.experiencias === 'SI') && (estado.detalle_experiencias === '')) {
    return {
      mensaje: 'se requiere detalle de Experiencias lúdicas, hobbies'
    }
  }
  if (estado.parto === '') {
    return {
      mensaje: 'se requiere llenar el campo Parto'
    }
  }
  if (estado.lenguaje === 'si' && estado.detalle_lenguaje === '') {
    return {
      mensaje: 'se requiere detalle de Trastorno de lenguaje'
    }
  }
  if (estado.enfermedades === 'si' && estado.detalle_enfermedades === '') {
    return {
      mensaje: 'se requiere detalle de Antecedentes personales de enfermedades'
    }
  }
  if (estado.traumatismo === 'si' && estado.detalle_traumatismo === '') {
    return {
      mensaje: 'se requiere detalle de Traumatismo'
    }
  }
  if (estado.convulsiones === 'si' && estado.detalle_convulsiones === '') {
    return {
      mensaje: 'se requiere detalle de Convulsiones'
    }
  }
  if (estado.experiencia_directa === 'si' && estado.detalle_experiencia_directa === '') {
    return {
      mensaje: 'se requiere detalle de Experiencia directa al suceso traumático'
    }
  }
  if (estado.presencia_directa === 'si' && estado.detalle_presencia_directa === '') {
    return {
      mensaje: 'se requiere detalle de Presencia directa al suceso traumático'
    }
  }
  if (estado.sucesos_traumaticos === 'si' && estado.detalle_sucesos_traumaticos === '') {
    return {
      mensaje: 'se requiere detalle de Sucesos traumáticos'
    }
  }

  if (estado.infancia === '' || estado.pubertad === '' || estado.adolescencia === '' || estado.juventud === '' ||estado.adultez === '') {
    return {
      mensaje: 'se requiere llenar los campos de infancia, pubertad, adolescencia, juventud y adultez'
    }
  }
  if (estado.enfermedades_comunes === 'si' && estado.desc_enfermedades_comunes === '') {
    return {
      mensaje: 'se requiere detalle de Enfermedades comunes de la adultez'
    }
  }
  if (estado.cirugias_adultez === 'si' && estado.desc_cirugias_adultez === '') {
    return {
      mensaje: 'se requiere detalle de Cirugías de la adultez'
    }
  }
  if (estado.otros_adultez === 'si' && estado.desc_otros_adultez === '') {
    return {
      mensaje: 'se requiere detalle de Otros de la adultez'
    }
  }
  if (estado.trabajo === 'si' && estado.detalle_trabajo === '') {
    return {
      mensaje: 'se requiere detalle de Trabajo'
    }
  }
  if (estado.estudio === 'si' && estado.detalle_estudio === '') {
    return {
      mensaje: 'se requiere detalle de Estudios de la adultez'
    }
  }
  if (estado.socializacion === '' ) {
    return {
      mensaje: 'se requiere llenar el campo de Socialización'
    }
  }
  if (estado.diagnostico_actual.length === 0) {
    return {
      mensaje: 'se requiere seleccionar al menos una opción de Diagnóstico Actual'
    }
  }
  if (estado.indicadores_riesgo === 'si' && estado.detalle_indicadores_riesgo === '') {
    return {
      mensaje: 'se requiere detalle de Indicadores de riesgo'
    }
  }
  if (estado.necesidad_internacion === 'si' && estado.detalle_necesidad_internacion === '' && estado.voluntaria === '') {
    return {
      mensaje: 'se seleccionar si la internación es voluntaria o involuntaria y su detalle'
    }
  }

  return {
    mensaje: 'alta admitida',
  }

}