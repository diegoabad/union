import React, { useEffect } from 'react'

import Contenido from '../evolucionpsiquiatrica/componentes/EvolucionComponente'

const Musicoterapia = ({terapias, setTerapias, paciente}) => {


  const initialStateValues = {
    evolucion: '',
  }

  const [values, setValues] = React.useState(initialStateValues)

  const handleChange = (event) => {
    const { name, value } = event.target;

    setValues({...values, [name]: value})
  }

  useEffect(() => {
    if (paciente) setValues({...values, evolucion: paciente.evolucion})
  },[]);


  useEffect(() => {
    setTerapias({...terapias,...values});
  },[values])

  return (
    <Contenido titulo = 'Evolución' handleChange = { handleChange } value = { values.evolucion } name = 'evolucion' label = 'Evolución' minRows = {12} maxRows = {12}/>
  )
}

export default Musicoterapia