import React, { useEffect } from 'react'
import Contenedor from './componente/Contenedor.jsx'

const Sexualidad = ({setSemiologica, semiologica, paciente}) => {

  const initialStateValues = {
    sexualidad: '',
  }

  const [values, setValues] = React.useState(initialStateValues)

  useEffect(() =>{
    if (paciente) {
      setValues({ 
        ...values,
        sexualidad: paciente.sexualidad
      })
    }
  },[]);

  useEffect(() => {
    setSemiologica({...semiologica,...values});
  },[values])

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value })
  }

  return (
    <Contenedor 
      titulo = "Sexualidad"
      name = "sexualidad"
      value = { values.sexualidad } 
      datos = { [{ name: 'sex_normal', label: 'Sexualidad normal'}, { name: 'abulica', label: 'Abulica'}, { name: 'anhedonia', label: 'Anhedonia'}] }
      handleChange = { handleChange }
      texto = { false }
    >

    </Contenedor>
  )
}

export default Sexualidad