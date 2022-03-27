export const cont_semiologica = (estado) => {
  console.log(estado)
  if (estado.actitudPsiquica === '' || !estado.actitudPsiquica){
    return {
      mensaje: 'No se ha seleccionado ninguna opción de actitud psíquica'
    };
  }
  if (estado.actividad === '' && estado.actividad_otro === '' || !estado.actividad) {
    return {
      mensaje: 'No se ha seleccionado ninguna opción de actividad'
    };
  }
  if (estado.afectividad === '' || !estado.afectividad) {
    return { 
      mensaje: 'No se ha seleccionado ninguna opción de afectividad'
    };
  }
  if (estado.aspectoFisico === '' || !estado.aspectoFisico) {
    return{
      mensaje: 'No se ha seleccionado ninguna opción de aspecto físico'
    }
  }
  if (estado.aspectoPsiquico === '' || !estado.aspectoPsiquico) {
    return {
      mensaje: 'No se ha seleccionado ninguna opción de aspecto psíquico'
    }
  }
  if (estado.atencion === '' || !estado.atencion){
    return {
      mensaje: 'No se ha seleccionado ninguna opción de atención'
    }
  }
  if (estado.conciencia === ''  && estado.conc_otros === '' || !estado.conciencia) {
    return {
      mensaje: 'No se ha seleccionado ninguna opción de conciencia'
    };
  }
  if (estado.facies === '' || !estado.facies) {
    return {
      mensaje: 'No se ha seleccionado ninguna opción de facie'
    };
  }
  if (estado.ideacion === '' || !estado.ideacion) {
    return {
      mensaje: 'No se ha seleccionado ninguna opción de ideación'
    }
  }
  if (estado.inteligencia === '' || !estado.inteligencia) {
    return {
      mensaje: 'No se ha seleccionado ninguna opción de inteligencia'
    }
  }
  if (estado.juicio === '' || !estado.juicio) {
    return {
      mensaje: 'No se ha seleccionado ninguna opción de juicio'
    }
  }
  if (estado.lenguaje === '' || !estado.lenguaje) {
    return {
      mensaje: 'No se ha seleccionado ninguna opción de lenguaje'
    }
  }
  if (estado.marcha === '' || !estado.marcha) {
    return {
      mensaje: 'No se ha seleccionado ninguna opción de marcha'
    }
  }
  if (estado.memoria === '' || !estado.memoria) {
    return {
      mensaje: 'No se ha seleccionado ninguna opción de memoria'
    }
  }
  if (estado.orexia === '' || !estado.orexia) {
    return {
      mensaje: 'No se ha seleccionado ninguna opción de orexia'
    }
  }
  if (estado.orientacion === '' || !estado.orientacion) {
    return {
      mensaje: 'No se ha seleccionado ninguna opción de orientación'
    }
  }
  if (estado.pensamientoCurso === '' || estado.pensamientoContenido === '' || !estado.pensamientoCurso) {
    return {
      mensaje: 'Debe seleccionar al menos una opción de pensamiento en Curso y Contenido'
    }
  }
  if (estado.sensopercepcion === '' && estado.senso_otras === '' || !estado.sensopercepcion) {
    return {
      mensaje: 'No se ha seleccionado ninguna opción de sensopercepción'
    }
  }
  if (estado.sexualidad === '' || !estado.sexualidad) {
    return {
      mensaje: 'No se ha seleccionado ninguna opción de sexualidad'
    }
  }
  if (estado.sueño === '' || !estado.sueño) {
    return {
      mensaje: 'No se ha seleccionado ninguna opción de sueño'
    }
  }
  return { mensaje: 'alta admitida' };
}