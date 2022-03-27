import React, { useEffect } from 'react'
import Contenedor from './componente/Contenedor.jsx'

import { useDispatch } from 'react-redux'
import { getSemiologica } from '../../redux/actions'

const Ideacion = ({setSemiologica, semiologica}) => {

  const dispatch = useDispatch();

  const initialStateValues = {
    ideacion: '',
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
      titulo = "Ideación" 
      name = "ideacion"
      value = { values.ideacion }
      datos = {[{ name: 'id_normales', label: 'Ideas normales'}, { name: 'id_fijas', label: 'Ideas fijas'},{ name: 'id_obsesivas', label: 'Ideas obsesivas'} ,{ name: 'id_delirantes', label: 'Ideas delirantes'}, { name: 'id_ruina', label: 'Ideas de ruina'}, { name: 'id_autoeliminación', label: 'Ideas de autoeliminación'}]}
      handleChange = { handleChange }
      texto = { false }
    >

    </Contenedor>
  )
}

export default Ideacion