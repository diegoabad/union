import React from 'react'

import Admisiones from './Amisiones.jsx'

const TerapiaOcupacionalEvaluacion = ({setOpenFiliatorio, registro}) => {
  return (
    <Admisiones 
      propiedad = 'admision_terapia_ocupacional' 
      setOpenFiliatorio = {setOpenFiliatorio} 
      registro = {registro}
      terapia = 'Terapia Ocupacional'/>
  )
}


export default TerapiaOcupacionalEvaluacion