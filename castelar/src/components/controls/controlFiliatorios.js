export const controles = (estado) => {
  console.log(estado)
  if ( estado.nombre === '') {
    return {
      mensaje: 'El nombre del paciente es requerido',
    };
  }
  if ( estado.apellido === '') {
    return {
      mensaje: 'El apellido del paciente es requerido',
    };
  }
  if ( estado.fechaNacimiento === '') {
    return {
      mensaje: 'La fecha de nacimiento del paciente es requerida',
    };
  }
  if ( estado.fechaNacimiento.getFullYear() === 1900) {
    return {
      mensaje: 'La fecha de nacimiento del paciente es incorrecta',
    };
  }
  if ( estado.sexo === '') {
    return {
      mensaje: 'El sexo del paciente es requerido',
    };
  }
  if ( estado.dni === '' || estado.dni < 999999) {
    return {
      mensaje: 'El dni del paciente es requerido',
    };
  }
  if ( estado.nacionalidad === '') {
    return {
      mensaje: 'La nacionalidad del paciente es requerida',
    };
  }
  if ( estado.calle === '') {
    return{
      mensaje: 'La calle del paciente es requerida',
    }
  };
  if ( estado.numero < 0) {
    return{
      mensaje: 'El número del domicilio no puede ser negativo',
    }
  } 
  if (estado.localidad === '') {
    return{
      mensaje: 'La localidad del paciente es requerida',
    }
  }
  if (estado.cod_post === '') {
    return{
      mensaje: 'El código postal del paciente es requerido',
    }
  }
  if (estado.provincia === '') {
    return{
      mensaje: 'La provincia del paciente es requerida',
    }
  }
  if (estado.tel !== '' && (estado.tel < 0 || (estado.tel).toString().length < 10)) {
    return{
      mensaje: 'El teléfono del paciente es incorrecto',
    }
  }
  if (estado.email !== '' &&  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(estado.email)){
    console.log('email correcto');
  }else if (estado.email !== ''){
    return{
      mensaje: 'El email del paciente es incorrecto',
    }
  }
  if ((estado.ob_social !== '') && ((estado.nro_afiliado === '') || (estado.oficio === '') || (estado.cuit === ''))) {
    return{
      mensaje: 'complete todos los datos de la obra social',
    }
  }
  if ((estado.tratamiento === 'SI') && ((estado.profesionale === '') || (estado.calle_prof === '') || (estado.localidad_prof === '') || (estado.cod_post_prof === '') || (estado.provincia_prof === '') )) {
    return{
      mensaje: 'Complete todos los datos del tratamiento médico',
    }
  }
  if (estado.email_prof !== '' &&  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(estado.email_prof)){
    console.log('email correcto');
  }else if (estado.email_prof !== ''){
    return{
      mensaje: 'El email del profesional es incorrecto',
    }
  }
  if ((estado.judicial === 'SI') && ((estado.juez=== '')|| (estado.juzgado_nro === '') || (estado.calle_juz === '') || (estado.localidad_juz === '') || (estado.cod_post_juz === '') || (estado.provincia_juz === '') )) {
    return{
      mensaje: 'Complete todos los datos del estado judicial',
    }
  }
  if (estado.email_juz !== '' &&  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(estado.email_juz)){
    console.log('email correcto');
  }else if (estado.email_juz !== ''){
    return{
      mensaje: 'El email del curado/juez es incorrecto',
    }
  }
  if ((estado.nombre_ac !== '') && ((estado.apellido_ac === '') || (estado.dni_ac === '') || (estado.rel_ac === '') || (estado.calle_ac === '') || (estado.localidad_ac === '') || (estado.cod_post_ac === '') || (estado.provincia_ac === '') )) {
    return{
      mensaje: 'Complete todos los datos del acompañante',
    }
  }
  if ((estado.nombre_ac === '') && ((estado.apellido_ac !== '') || (estado.dni_ac !== '') || (estado.rel_ac !== '') || (estado.calle_ac !== '') || (estado.localidad_ac !== '') || (estado.cod_post_ac !== '') || (estado.provincia_ac !== '') )) {
    return{
      mensaje: 'Complete todos los datos del acompañante',
    }
  }
  if (estado.email_ac !== '' &&  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(estado.email_ac)){
    console.log('email correcto');
  }else if (estado.email_ac !== ''){
    return{
      mensaje: 'El email del acompañante es incorrecto',
    }
  }
  if ((estado.nombre_ref !== '') && ((estado.apellido_ref === '') || (estado.calle_ref === '') || (estado.localidad_ref === '') || (estado.cod_post_ref === '') || (estado.provincia_ref === '') )) {
    return{
      mensaje: 'Complete todos los datos del referente',
    }
  }
  if ((estado.nombre_ref === '') && ((estado.apellido_ref !== '') || (estado.calle_ref !== '') || (estado.localidad_ref !== '') || (estado.cod_post_ref !== '') || (estado.provincia_ref !== '') )) {
    return{
      mensaje: 'Complete todos los datos del referente',
    }
  }
  if (estado.email_ref !== '' &&  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(estado.email_ref)){
    console.log('email correcto');
  }else if (estado.email_ref !== ''){
    return{
      mensaje: 'El email de la persona de referencia es incorrecto',
    }
  }
  return {mensaje: 'alta admitida'}
}