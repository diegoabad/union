export const admision = (estado) => {
  if (estado.consulta === '' || estado.consulta === undefined) {
    return {
      mensaje: 'Consulta es requerida',
    }
  }
  if (estado.tratamientos_psicologicos === 'si' && (estado.tratamiento_descripcion === '' || !estado.tratamiento_descripcion)) {
    return {
      mensaje: 'Tratamiento descripción es requerido',
    }
  }
  if (estado.diagnostico_actual === '' || estado.diagnostico_actual === undefined) {
    return {
      mensaje: 'Diagnóstico actual es requerido',
    }
  }
  if (estado.frecuencia === '' || estado.frecuencia === undefined) {
    return {
      mensaje: 'Frecuencia es requerido',
    }
  }
  if (estado.duracion === '' || estado.duracion === undefined) {
    return {
      mensaje: 'Duración es requerido',
    }
  }
  if (estado.dispositivo === '' || estado.dispositivo === undefined) {
    return {
      mensaje: 'Dispositivo es requerido',
    }
  }
  return { mensaje: 'alta admitida' }
}