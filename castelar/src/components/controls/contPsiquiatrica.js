export const cont_psiquiatrica = (estado) => {
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