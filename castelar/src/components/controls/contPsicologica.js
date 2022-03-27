export const cont_psicologica = (estado) => {
  if (estado.problematica === '' || estado.problematica === undefined) {
    return{
      mensaje: 'problematica es requerida',
    }
  }
  if (estado.evolucion === '' || estado.evolucion === undefined) {
    return{
      mensaje: 'evolucion es requerida',
    }
  }
  if (estado.interconsultas === '' || estado.interconsultas === undefined) {
    return{
      mensaje: 'interconsultas es requerida',
    }
  }
  return { mensaje: 'alta admitida' }
}