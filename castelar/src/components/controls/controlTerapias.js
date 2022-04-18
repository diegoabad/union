export const cont_terapias = (estado) => {
  if (estado.evolucion === '' || estado.evolucion === undefined) {
    return {
      mensaje: 'No se ha completado el campo de evolución'
    };
  }
  return { mensaje: 'alta admitida' };
}