import React, { useEffect } from 'react'
import Contenedor from './componente/Contenedor.jsx'

import { useDispatch } from 'react-redux'
import { getSemiologica } from '../../redux/actions'

const Inteligencia = ({setSemiologica, semiologica}) => {

  const dispatch = useDispatch();

  const initialStateValues = {
    inteligencia: '',
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
      titulo = "Inteligencia"
      name = "inteligencia"
      value = { values.inteligencia }
      datos = { [{ name: 'intel_normal', label: 'Inteligencia normal'}, { name: 'intel_superior', label: 'Inteligencia superior'}, { name: 'intel_insuficiente', label: 'Inteligencia insuficiente'}, { name: 'intel_deficiente', label: 'Inteligencia deficiente'}] }
      handleChange = { handleChange }
      texto = { false }
    />

  )
}

export default Inteligencia