import React, { useEffect } from 'react'
import Contenedor from './componente/Contenedor.jsx'

const Afectividad = ({setSemiologica, semiologica, paciente}) => {

  const initialStateValues = {
    afectividad: '',
  }

  const [values, setValues] = React.useState(initialStateValues)
  const [datos, setDatos] = React.useState([])

  useEffect(() => {
    setDatos( [{name: 'eutimia', label: 'Eutimia'}, {name: 'atimia', label: 'Atímia'}, {name: 'melancolico', label: 'Melancólico'}, {name: 'depresivo', label: 'Depresivo'}, {name: 'labilidad', label: 'Labilidad'}, {name: 'incontinencia', label: 'Incontinencia'}, {name: 'ambivalencia', label: 'Ambivalencia'}, {name: 'neotimia', label:'Neotímia'}, {name: 'catatimia', label: 'Catatímia'}, { name: 'hipotimia', label: 'Hipotimia'}, { name: 'hiper_placent', label: 'Hiper Placent.'}, {name: 'hiper_displacent', label: 'Hiper displacent.'}, {name: 'maniaco', label: 'Maníaco'}, {name: 'hipomaniaco', label: 'Hipomaníaco'}, {name: 'aplanado', label: 'Aplanado'}, {name: 'af_anhedonico', label: 'Anhedónico'}, {name: 'euforico', label: 'Eufórico'}, {name: 'disforico', label: 'Disfórico'}].sort((a, b) =>{
      if(a.label < b.label) return -1;
      if(a.label > b.label) return 1;
      return 0;
    }) )
  }, [])

  useEffect(() => {
    if (paciente) setValues({...values, afectividad: paciente.afectividad})
  },[])

  useEffect(() => {
    setSemiologica({...semiologica,...values});
  },[values])

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value })
  }

  return (

  <Contenedor 
      titulo = "Afectividad" 
      name = "afectividad"
      value = { values.afectividad }
      datos = { datos }
      handleChange = { handleChange }
      texto = { false }
    >
     
  </Contenedor>

  )
}

export default Afectividad