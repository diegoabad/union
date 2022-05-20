import React from 'react'

import Admisiones from './Amisiones.jsx'

const EdFisicaAdmision = ({setOpenFiliatorio, registro}) => {
  return (
    <Admisiones 
      propiedad = 'admision_edfisica' 
      setOpenFiliatorio = {setOpenFiliatorio} 
      registro = {registro}
      terapia = 'Educación Física'/>
  )
}

export default EdFisicaAdmision