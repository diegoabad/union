import React, { useEffect }from 'react'

import EvolucionComponente from '../evolucionpsiquiatrica/componentes/EvolucionComponente'

const Interconsultas = ({psicologica, setPsicologica}) => {

  const initialStateValues = {
    interconsultas: '',
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
    <EvolucionComponente titulo = 'Interconsultas' handleChange = { handleChange } value = { values.interconsultas } name = 'interconsultas' label = 'Interconsultas'/>
  )
}

export default Interconsultas