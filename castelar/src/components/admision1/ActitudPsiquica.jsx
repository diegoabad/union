import React, { useEffect } from 'react'
import Contenedor from './componente/Contenedor.jsx'


const ActitudPsiquica = ({setSemiologica, semiologica, paciente}) => {


  const initialStateValues = {
    actitudPsiquica: '',
  }

  const [values, setValues] = React.useState(initialStateValues)

  useEffect(() => {
    if (paciente) setValues({...values, actitudPsiquica: paciente.actitudPsiquica})
  },[])

  useEffect(() => {
    setSemiologica({...semiologica,...values});
  }, [values])

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value })
  }

  return (
    <Contenedor 
      titulo = "Actitud Psíquica" 
      name = "actitudPsiquica"
      value = { values.actitudPsiquica }
      datos = { [{ name: 'activa', label: 'Activa'}, { name: 'pasiva', label: 'Pasiva'},{ name: 'indiferente', label: 'Indiferente'} ,{ name: 'amenazante', label: 'Amenazante'}, { name: 'oposicionista', label: 'Oposicionista'}, { name: 'colaborante', label: 'Colaborante'}] }
      handleChange = { handleChange }
      texto = { false }
    >

    </Contenedor>
  )
}

export default ActitudPsiquica