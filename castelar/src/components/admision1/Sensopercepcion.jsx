import React, { useEffect } from 'react'
import Contenedor from './componente/Contenedor.jsx'

const Sensopercepcion = ({setSemiologica, semiologica, paciente}) => {

  const initialStateValues = {
    sensopercepcion: '',
    senso_otras: ''
  }

  const [values, setValues] = React.useState(initialStateValues)

  useEffect(() =>{
    if (paciente) {
      setValues({ 
        ...values,
        sensopercepcion: paciente.sensopercepcion,
        senso_otras: paciente.senso_otras
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
      titulo = "Sensopercepción" 
      name = "sensopercepcion"
      value = { values.sensopercepcion }
      datos={ [{ name: 'sin_alteraciones', label: 'Sin alteraciones'}, { name: 'ilusiones', label: 'Ilusiones'}, { name: 'aluc_cenestesicas', label: 'Aluciones cenestésicas'}, { name: 'aluc_auditivas', label: 'Aluciones auditivas'}, { name: 'aluc_visuales', label: 'Aluciones visuales'}, { name: 'aluc_olfativas', label: 'Aluciones olfativas'}, { name: 'senso_otras', label: 'Otras'}] }
      handleChange={handleChange}
      texto= {true}
      entrada={{label: 'Otras', name: 'senso_otras', value: values.senso_otras, input:true}}
    >
     
    </Contenedor>

  )
}

export default Sensopercepcion