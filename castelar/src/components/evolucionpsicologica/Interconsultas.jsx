import React from 'react'

import EvolucionComponente from '../evolucionpsiquiatrica/componentes/EvolucionComponente'

const Interconsultas = () => {

  const initialStateValues = {
    interconsultas: '',
  }

  const [values, setValues] = React.useState(initialStateValues)

  const handleChange = (event) => {
    const { name, value } = event.target;

    setValues({...values, [name]: value})
  }



  return (
    <EvolucionComponente titulo = 'Interconsultas' handleChange = { handleChange } value = { values.interconsultas } name = 'interconsultas' label = 'Interconsultas'/>
  )
}

export default Interconsultas