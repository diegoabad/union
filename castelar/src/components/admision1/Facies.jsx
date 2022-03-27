import React, { useEffect } from 'react'
import Contenedor from './componente/Contenedor.jsx'

import { useDispatch } from 'react-redux'
import { getSemiologica } from '../../redux/actions'

const Facies = ({setSemiologica, semiologica}) => {

  const dispatch = useDispatch();

  const initialStateValues = {
    facies: ''
  }

  const [values, setValues] = React.useState(initialStateValues)

  useEffect(() => {
    setSemiologica({...semiologica,...values});
  },[values])

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value })
  }

  return (
  <Contenedor 
    titulo = "Facies" 
    name = "facies"
    value = { values.facies }
    datos={[{ name: 'compuesta', label: 'Compuesta'}, { name: 'descompuesta', label: 'Descompuesta'}]}
    handleChange = { handleChange }
    texto= { false }
  >

  </Contenedor>
  )
}

export default Facies