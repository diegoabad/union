import React, { useEffect } from 'react'
import Contenedor from './componente/Contenedor.jsx'

const AspectoPsiquico = ({setSemiologica, semiologica, paciente}) => {

  const initialStateValues = {
    aspectoPsiquico: ''
  }

  const [values, setValues] = React.useState(initialStateValues)

  useEffect(() =>{
    if (paciente){
    setValues({ 
      ...values,
      aspectoPsiquico: paciente.aspectoPsiquico 
    })
    }
  },[])

  useEffect(() => {
    setSemiologica({...semiologica,...values});
  },[values])

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value })
  }

  return (
    <Contenedor 
      titulo = "Aspecto Psíquico" 
      name = "aspectoPsiquico"
      value = { values.aspectoPsiquico }
      datos = {[{ name: 'ap_normal', label: 'Normal'}, { name: 'indiferente', label: 'Indiferente'},{ name: 'excitado', label: 'Excitado'} ,{ name: 'obnubilado', label: 'Obnubilado'}, { name: 'deprimido', label: 'Deprimido'}, { name: 'adormecido', label: 'Adormecido'}]}
      handleChange = { handleChange }
      texto = { false }
    >

    </Contenedor>
  )
}

export default AspectoPsiquico