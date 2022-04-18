import React, { useEffect} from 'react'

import EvolucionComponente from '../evolucionpsiquiatrica/componentes/EvolucionComponente'

const Evolucion = ({psicologica, setPsicologica, paciente}) => {

  const initialStateValues = {
    evolucion: '',
  }

  const [values, setValues] = React.useState(initialStateValues)

  useEffect(() =>{
    if (paciente) {
      setValues({...values, evolucion: paciente.evolucion})
    }
  },[])

  useEffect(() => {
    setPsicologica({ ...psicologica, ...values})
  },[values])

  const handleChange = (event) => {
    const { name, value } = event.target;

    setValues({...values, [name]: value})
  }


  return (
    <EvolucionComponente titulo = 'Evolución' handleChange = { handleChange } value = { values.evolucion } name = 'evolucion' label = 'Evolución' minRows = {12} maxRows = {12}/>
  )
}

export default Evolucion