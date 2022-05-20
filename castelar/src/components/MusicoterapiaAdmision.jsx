import React from 'react'

import Admisiones from './Amisiones.jsx'

const MusicoterapiaAdmision = ({setOpenFiliatorio, registro}) => {
  return (
    <Admisiones 
      propiedad = 'admision_musicoterapia' 
      setOpenFiliatorio = {setOpenFiliatorio} 
      registro = {registro}
      terapia = 'Musicoterapia'/>
  )
}

export default MusicoterapiaAdmision