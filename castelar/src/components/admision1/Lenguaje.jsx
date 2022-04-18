import React, { useEffect } from 'react'
import Contenedor from './componente/Contenedor.jsx'

import { useDispatch } from 'react-redux'


const Lenguaje = ({setSemiologica, semiologica, paciente}) => {

  const dispatch = useDispatch();

  const initialStateValues = {
    lenguaje: ''
  }

  const [values, setValues] = React.useState(initialStateValues)

  useEffect(() => {
    if (paciente) {
      setValues({ 
        ...values,
        lenguaje: paciente.lenguaje
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
      titulo = "Lenguaje" 
      name = "lenguaje"
      value = { values.lenguaje }
      datos = {[{ name: 'leng_normal', label: 'Normal'}, { name: 'afasia', label: 'Afasia'},{ name: 'alogia', label: 'Alógia'} ,{ name: 'agramatismo', label: 'Agramatismo'}, { name: 'anatria', label: 'Anatría'}, { name: 'aprosodia', label: 'Aprosodía'}, { name: 'asonancia', label: 'Asonancia'}, { name: 'mudez', label: 'Mudez'}]}
      handleChange = { handleChange }
      texto = { false }
    >

    </Contenedor>
  )
}

export default Lenguaje