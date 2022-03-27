import React, { useEffect } from 'react'
import Contenedor from './componente/Contenedor.jsx'

import { useDispatch } from 'react-redux'


const Marcha = ({setSemiologica, semiologica}) => {

  const dispatch = useDispatch();

  const initialStateValues = {
    marcha: ''
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
      titulo = "Marcha"
      name = "marcha"
      value = { values.marcha } 
      datos = {[{ name: 'marcha_normal', label: 'Normal'}, { name: 'ataxica', label: 'Atáxica'},{ name: 'parquinsoniana', label: 'Parquinsoniana'} ,{ name: 'coreotetosica', label: 'Coreotetósica'}, { name: 'paretica', label: 'Parética'}, { name: 'hemiparetica', label: 'Hemiparética'}]}
      handleChange = { handleChange }
      texto = { false }
    >

    </Contenedor>
  )
}


export default Marcha