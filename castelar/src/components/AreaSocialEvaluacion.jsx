import React from 'react'

import Admisiones from './Amisiones.jsx'

const AreaSocialEvaluacion = ({setOpenFiliatorio, registro}) => {
  return (
    <Admisiones 
      propiedad = 'admision_area_social'
      setOpenFiliatorio = {setOpenFiliatorio} 
      registro = {registro}
      terapia = 'Area Social'/>
  )
}

export default AreaSocialEvaluacion