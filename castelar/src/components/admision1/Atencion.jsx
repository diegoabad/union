import React, { useEffect } from 'react'
import Contenedor from './componente/Contenedor.jsx'

import { useDispatch } from 'react-redux'


const Atencion = ({setSemiologica, semiologica}) => {

  const dispatch = useDispatch();

  const initialStateValues = {
    atencion: ''
  }

  const [values, setValues] = React.useState(initialStateValues)

  useEffect(() => {
    setSemiologica({...semiologica,...values});
  },[values])

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value })
  }

  return (

    <Contenedor 
      titulo="Atención" 
      name = "atencion"
      value = { values.atencion }
      datos={[{ name: 'euprosexica', label: 'Euproséxica'}, { name: 'hiperprosexia', label: 'Hiperproséxia'}, { name: 'hipoprosexia', label: 'Hipoproséxia'}, { name: 'paraprosexia', label: 'Paraproséxia'}, ]}
      handleChange={handleChange}
      texto= {false}
    >
     
    </Contenedor>

  )
}

export default Atencion