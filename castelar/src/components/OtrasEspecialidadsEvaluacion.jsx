import React from 'react'

import Admisiones from './Amisiones.jsx'

const OtrasEspecialidadsEvaluacion = ({setOpenFiliatorio, registro}) => {
  return (
    <Admisiones 
      propiedad = 'admision_especialidades' 
      setOpenFiliatorio = {setOpenFiliatorio} 
      registro = {registro}
      terapia = 'Otras Especialidades'/>
  )
}

export default OtrasEspecialidadsEvaluacion