import React, { useEffect } from 'react'
import Contenedor from './componente/Contenedor.jsx'

import { useDispatch } from 'react-redux'
import { getSemiologica } from '../../redux/actions'

const Memoria = ({setSemiologica, semiologica}) => {

  const dispatch = useDispatch();

  const initialStateValues = {
    memoria: '',
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
      titulo = "Memoria" 
      name = "memoria"
      value = { values.memoria }
      datos={[{ name: 'eumnesia', label: 'Eumnésia'}, { name: 'amnesia', label: 'Amnesia'}, { name: 'amnesia_lacunar', label: 'Amnesia lacunar'}, { name: 'falla_global', label: 'Falla global'}, { name: 'falla_anterograda', label: 'Falla anterógrada'}, { name: 'falla_retrograda', label: 'Falla retrógrada'}, { name: 'paramnesia', label: 'Paramnesia'}, ]}
      handleChange = { handleChange }
      texto = { false }
    >
     
    </Contenedor>

  )
}

export default Memoria