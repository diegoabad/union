import React, { useEffect } from 'react'
import Contenedor from './componente/Contenedor.jsx'


const orientacion = ({setSemiologica, semiologica}) => {

  const initialStateValues = {
    orientacion: '',
  }

  const [values, setValues] = React.useState(initialStateValues)

  useEffect(() =>{
    if (semiologica) {
      setValues({ 
        ...values,
        orientacion: semiologica.orientacion
      })
    }
  },[]);

  useEffect(() => {
    setSemiologica({...semiologica,...values});
  },[values])

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value })
  }

  return (

    <Contenedor 
      titulo  = "Orientación" 
      name  = "orientacion"
      value = { values.orientacion }
      datos = { [{ name: 'en_tiempo', label: 'En tiempo' }, { name: 'en_espacio', label: 'En espacio' }] }
      handleChange = { handleChange }
      texto= { false }
    >
     
    </Contenedor>

  )
}

export default orientacion