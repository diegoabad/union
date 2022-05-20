import React, { useEffect } from 'react'

import Contenido from '../evolucionpsiquiatrica/componentes/EvolucionComponente'

const EvaluacionTerapia = ({terapias, setTerapias, paciente, nombreTerapia}) => {


  const initialStateValues = {
    evaluacion: '',
  }

  const [values, setValues] = React.useState(initialStateValues)

  const handleChange = (event) => {
    const { name, value } = event.target;

    setValues({...values, [name]: value})
  }

  useEffect(() => {
    if (paciente) setValues({...values, evaluacion: paciente.evaluacion})
  },[]);


  useEffect(() => {
    setTerapias({...terapias,...values});
  },[values])

  return (
    <Contenido titulo = {`Evaluación inicial ${nombreTerapia}`} handleChange = { handleChange } value = { values.evaluacion } name = 'evaluacion' label = 'Evaluación' minRows = {12} maxRows = {12}/>
  )
}

export default EvaluacionTerapia