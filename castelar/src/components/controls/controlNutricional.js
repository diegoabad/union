export const cont_nutricional = (estado) => {

  if (estado.diagnostico_medico === '' || estado.diagnostico_medico === undefined) {
    return{
      mensaje: 'diagnóstico médico es requerido',
    }
  }
  if (estado.evaluacion_nutricional === '' || estado.evaluacion_nutricional === undefined) {
    return{
      mensaje: 'evaluación nutricional es requerido',
    }
  }
  if (estado.plan_nutricional === '' || estado.plan_nutricional === undefined) {
    return{
      mensaje: 'plan nutricional es requerido',
    }
  }
  if (estado.profesional_actuante === '' || estado.profesional_actuante === undefined) {
    return{
      mensaje: 'profesional actuante es requerido',
    }
  }
  if (estado.peso_nutricional === '' || estado.peso_nutricional === undefined) {
    return{
      mensaje: 'peso es requerido',
    }
  }
  if (estado.talla === '' || estado.talla === undefined) {
    return{
      mensaje: 'talla es requerido',
    }
  }
  if (estado.imc === '' || estado.imc === undefined) {
    return{
      mensaje: 'imc es requerido',
    }
  }
  if (estado.diagnostico_nutricional === '' || estado.diagnostico_nutricional === undefined) {
    return{
      mensaje: 'diagnóstico nutricional es requerido',
    }
  }
  return { mensaje: 'alta admitida' }
}