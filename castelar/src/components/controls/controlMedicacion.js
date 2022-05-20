export const cont_medicacion = (estado) => {
  if (!estado.medicacion || estado.medicacion.length === 0) {
    return {
      mensaje: 'Debe llenar el campo Medicación',
    }
  }
  return { mensaje: 'alta admitida' }
}