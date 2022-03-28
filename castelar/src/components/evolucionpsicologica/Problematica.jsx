import React, { useEffect} from 'react'

import EvolucionComponente from '../evolucionpsiquiatrica/componentes/EvolucionComponente'

const Problematica = ({psicologica, setPsicologica}) => {

  const initialStateValues = {
    problematica: '',
  }

  const [values, setValues] = React.useState(initialStateValues)

  useEffect(() => {
    setPsicologica({ ...psicologica, ...values})
  },[values])

  const handleChange = (event) => {
    const { name, value } = event.target;

    setValues({...values, [name]: value})
  }


  return (
    <EvolucionComponente titulo = 'Problemática de la sesión' handleChange = { handleChange } value = { values.problematica } name = 'problematica' label = 'Problemática de la sesión'/>
  )
}

export default Problematica