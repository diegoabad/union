export const cont_clinico = (estado) => {
  if (estado.maxima === '' || estado.maxima === undefined) {
    return{
      mensaje: 'Tensión maxima es requerida',
    }
  }
  if (estado.minima === '' || estado.minima === undefined) {
    return{
      mensaje: 'Tensión minima es requerida',
    }
  }
  if (estado.temp_axilar === '' || estado.temp_axilar === undefined) {
    return{
      mensaje: 'Temperatura axilar es requerida',
    }
  }
  if (estado.frec_cardiaca === '' || estado.frec_cardiaca === undefined) {
    return{
      mensaje: 'Frecuencia cardiaca es requerida',
    }
  }
  if (estado.saturacion === '' || estado.saturacion === undefined) {
    return{
      mensaje: 'Saturación es requerida',
    }
  }
  if (estado.normohidratado === '' || estado.normohidratado === undefined) {
    return{
      mensaje: 'Normohidratado es requerido',
    }
  }
  if (estado.normocoloreado === '' || estado.normocoloreado === undefined) {
    return{
      mensaje: 'Normocoloreado es requerido',
    }
  }
  if (estado.hematomas === '' || estado.hematomas === undefined) {
    return{
      mensaje: 'Hematomas es requerido',
    }
  }
  if (estado.escoriaciones === '' || estado.escoriaciones === undefined) {
    return{
      mensaje: 'Escoriaciones es requerido',
    }
  }
  if (estado.ulceras === '' || estado.ulceras === undefined) {
    return{
      mensaje: 'Ulceras es requerido',
    }
  }
  if (estado.lesiones_apoyo === '' || estado.lesiones_apoyo === undefined) {
    return{
      mensaje: 'Lesiones de apoyo es requerido',
    }
  }
  if (estado.lesiones_sujecion === '' || estado.lesiones_sujecion === undefined) {
    return{
      mensaje: 'Lesiones de sujecion es requerido',
    }
  }
  if (estado.autolesion === '' || estado.autolesion === undefined) {
    return{
      mensaje: 'Autolesion es requerido',
    }
  }
  if (estado.auscultacion === '' || estado.auscultacion === undefined) {
    return{
      mensaje: 'Auscultación es requerido',
    }
  }
  if (estado.soplos === '' || estado.soplos === undefined) {
    return{
      mensaje: 'Soplos es requerido',
    }
  }
  if ((estado.soplos === 'si') && (estado.soplos_descripcion === '' || estado.soplos_descripcion === undefined)) {
    return{
      mensaje: 'Soplos descripción es requerido',
    }
  }
  if (estado.edemas === '' || estado.edemas === undefined) {
    return{
      mensaje: 'Edemas es requerido',
    }
  }
  if ((estado.edemas === 'si') && (estado.edemas_perifericos === '' || estado.edemas_perifericos === undefined)) {
    return{
      mensaje: 'Edemas perifericos es requerido',
    }
  }
  if (estado.mv === '' || estado.mv === undefined) {
    return{
      mensaje: 'MV es requerido',
    }
  }
  if (estado.ruidos_agregados === '' || estado.ruidos_agregados === undefined) {
    return{
      mensaje: 'Ruidos agregados es requerido',
    }
  }
  if (estado.tos !== 'no' && (estado.tos_descripcion === '' || estado.tos_descripcion === undefined)) {
    return{
      mensaje: 'Tos descripción es requerido',
    }
  }
  if (estado.rha === '' || estado.rha === undefined) {
    return{
      mensaje: 'RHA es requerido',
    }
  }
  if (estado.blando === '' || estado.blando === undefined) {
    return{
      mensaje: 'Blando es requerido',
    }
  }
  if (estado.depresible === '' || estado.depresible === undefined) {
    return{
      mensaje: 'Depresible es requerido',
    }
  }
  if (estado.indoloro === '' || estado.indoloro === undefined) {
    return{
      mensaje: 'Indoloro es requerido',
    }
  }
  if (estado.visceromegalias === '' || estado.visceromegalias === undefined) {
    return{
      mensaje: 'Visceromegalias es requerido',
    }
  }
  if ((estado.alimentacion === 'si') && estado.alimentacion_descripcion === '' || estado.alimentacion_descripcion === undefined) {
    return{
      mensaje: 'Alimentación descripción es requerido',
    }
  }
  if (estado.movimientos_anormales === '' || estado.movimientos_anormales === undefined) {
    return{
      mensaje: 'Movimientos anormales es requerido',
    }
  }
  if (estado.rigidez === '' || estado.rigidez === undefined) {
    return{
      mensaje: 'Rigidez es requerido',
    }
  }
  if (estado.hemiplejias === '' || estado.hemiplejias === undefined) {
    return{
      mensaje: 'Hemiplejias es requerido',
    }
  }
  if (estado.hemiparesias === '' || estado.hemiparesias === undefined) {
    return{
      mensaje: 'Hemiparesias es requerido',
    }
  }
  if (estado.deficits_neurologicos === '' || estado.deficits_neurologicos === undefined) {
    return{
      mensaje: 'Deficits neurologicos es requerido',
    }
  }
  if (estado.enfermedades_neurologicas === '' || estado.enfermedades_neurologicas === undefined) {
    return{
      mensaje: 'Enfermedades neurologicas es requerido',
    }
  }
  return { mensaje: 'alta admitida' }
}