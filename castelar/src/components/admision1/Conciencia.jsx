import React, { useEffect } from 'react'
import Contenedor from './componente/Contenedor.jsx'


const Conciencia = ({setSemiologica, semiologica, paciente}) => {

  const initialStateValues = {
    conciencia: '',
    conc_otros: ''
  }

  const [values, setValues] = React.useState(initialStateValues)

  useEffect(() =>{
    if (paciente) {
      setValues({ 
        ...values,
        conciencia: paciente.conciencia,
        conc_otros: paciente.conc_otros
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
      titulo = "Conciencia" 
      name = "conciencia"
      value = { values.conciencia }
      datos={[{ name: 'lucida', label: 'Lúcida'}, { name: 'obnubilada', label: 'Obnubilada'}, { name: 'somnolienta', label: 'Somnolienta'}, { name: 'de_situacion', label: 'De situación'}, { name: 'de_enfermedad', label: 'De enfermedad'}, { label: 'Vigil'}, { name: 'confusa', label: 'Confusa' }]}
      handleChange = { handleChange }
      texto = { true }
      entrada = { { label: 'Otros', name: 'conc_otros', value: values.conc_otros, input:true } }
    >
     
    </Contenedor>

  )
}

export default Conciencia