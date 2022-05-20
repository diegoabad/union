import React from 'react'

import Admisiones from './Amisiones.jsx'

const TerapiasContextualesAmision = ({setOpenFiliatorio, registro}) => {
  return (
    <Admisiones 
      propiedad = 'admision_terapias_contextuales' 
      setOpenFiliatorio = {setOpenFiliatorio} 
      registro = {registro}
      terapia = 'Terapias Contextuales'/>
  )
}

export default TerapiasContextualesAmision