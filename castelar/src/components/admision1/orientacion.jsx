import React, { useEffect } from 'react'
import Contenedor from './componente/Contenedor.jsx'

import { useDispatch } from 'react-redux'
import { getSemiologica } from '../../redux/actions'

const orientacion = ({setSemiologica, semiologica}) => {

  const dispatch = useDispatch();

  const initialStateValues = {
    orientacion: '',
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