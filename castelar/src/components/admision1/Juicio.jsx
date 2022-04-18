import React, { useEffect } from 'react'
import Contenedor from './componente/Contenedor'

import { useDispatch } from 'react-redux'
import { getSemiologica } from '../../redux/actions'

const Juicio = ({setSemiologica, semiologica, paciente}) => {

  const dispatch = useDispatch();

  const initialStateValues = {
    juicio: '',
  }

  const [values, setValues] = React.useState(initialStateValues)

  useEffect(() =>{
    if (paciente) {
      setValues({ 
        ...values,
        juicio: paciente.juicio
      })
    }
  },[]);

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value })
  }

  useEffect(() => {
    setSemiologica({...semiologica,...values});
  },[values])

  return (
    <Contenedor 
      titulo = "Juicio"
      name = "juicio"
      value = { values.juicio }
      datos = { [{ name: 'conservado', label: 'Conservado'}, { name: 'juicio_insuficiente', label: 'Juicio insuficiente'}, { name: 'juicio_debilitado', label: 'Juicio debilitado'}, { name: 'juicio_suspendido', label: 'Juicio suspendido'}, {name: 'juicio_desviado', label: 'Juicio desviado'}] }
      handleChange = { handleChange }
      texto = { false }
    />
  )
}

export default Juicio