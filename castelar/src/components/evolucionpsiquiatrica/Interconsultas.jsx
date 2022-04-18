import React, {useEffect} from 'react'

import EvolucionComponente from './componentes/EvolucionComponente'

const Interconsultas = ({psiquiatria, setPsiquiatria, paciente}) => {

  const initialStateValues = {
    interconsultas: '',
  }

  const [values, setValues] = React.useState(initialStateValues)

  useEffect(() =>{
    if (paciente) {
      setValues({...values, interconsultas: paciente.interconsultas})
    }
  },[])

  useEffect(() => {
    setPsiquiatria({...psiquiatria,...values});
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