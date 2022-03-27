import React, { useEffect } from 'react'
import Contenedor from './componente/Contenedor.jsx'

import { useDispatch } from 'react-redux'
import { getSemiologica } from '../../redux/actions/index.js'

const Sueño = ({setSemiologica, semiologica}) => {

  const dispatch = useDispatch();

  const initialStateValues = {
    sueño: '',
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
      titulo = "Sueño"
      name = "sueño"
      value = { values.sueño }
      datos = {[{ name: 'insomnio_inicio', label: 'Insomnio de inicio' }, { name: 'insomnio_mantenimiento', label: 'Insomnio de mantenimiento' }, { name: 'disomnias', label: 'Disomnias' }]}
      handleChange = { handleChange }
      texto = { false }
    />
  )
}

export default Sueño