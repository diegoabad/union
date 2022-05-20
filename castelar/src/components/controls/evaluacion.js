export const evaluacion = (estado) => {
  if (estado.evaluacion === '' || estado.evaluacion === undefined) {
    return {
      mensaje: 'No se ha completado el campo de evalución'
    };
  }
  return { mensaje: 'alta admitida' };
}