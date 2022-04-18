import React, { useEffect } from 'react'
import Contenedor from './componente/Contenedor.jsx'

import { useDispatch } from 'react-redux'
import { getSemiologica } from '../../redux/actions'

const Orexia = ({setSemiologica, semiologica, paciente}) => {

  const dispatch = useDispatch();

  const initialStateValues = {
    orexia: '',
  }

  const [values, setValues] = React.useState(initialStateValues)

  useEffect(() =>{
    if (paciente) {
      setValues({ 
        ...values,
        orexia: paciente.orexia 
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
      titulo = "Orexia"
      name = "orexia"
      value = { values.orexia }
      datos = { [{ name: 'orexia_normal', label: 'Orexia normal' }, { name: 'hiporexia', label: 'Hiporexia' }, { name: 'hiperorexia', label: 'Hiperorexia' }, { name: 'anorexia', label: 'Anorexia' }] }
      handleChange = { handleChange }
      texto = { false }
    />
  )
}

export default Orexia