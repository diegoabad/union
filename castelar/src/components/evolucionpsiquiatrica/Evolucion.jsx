import React from 'react'

import EvolucionComponente from './componentes/EvolucionComponente'

const Evolucion = () => {

  const initialStateValues = {
    evolucion: '',
  }

  const [values, setValues] = React.useState(initialStateValues)

  const handleChange = (event) => {
    const { name, value } = event.target;

    setValues({...values, [name]: value})
  }


  return (
    <EvolucionComponente titulo = 'Evolución' handleChange = { handleChange } value = { values.evolucion } name = 'evolucion' label = 'Evolución' minRows = {12} maxRows = {12}/>
  )
}

export default Evolucion