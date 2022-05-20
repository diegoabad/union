import React, { useEffect } from 'react'
import ContenedorPaper from './componente/ContenedorPaper.jsx'

const Pensamiento = ({setSemiologica, semiologica}) => {
  
  const initialStateValues = {
    pensamientoCurso: '',
    pensamientoContenido: ''
  }

  const [values, setValues] = React.useState(initialStateValues)

  useEffect(() =>{
    if (semiologica.pensamientoCurso && semiologica.pensamientoContenido) {
      setValues({ 
        ...values,
        pensamientoCurso: semiologica.pensamientoCurso,
        pensamientoContenido: semiologica.pensamientoContenido
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

    <ContenedorPaper
      titulo = "Pensamiento" 
      datos={ [{titulo: 'Curso', name: "pensamientoCurso", value: values.pensamientoCurso ,datos: [{ name: 'pen_normal', label: 'Normal' }, { name: 'taquipsiquia', label: 'Taquipsiquia' },{ name: 'bradipsiquia', label: 'Bradipsiquia' },{ name: 'interceptado', label: 'Interceptado' },{ name: 'disgregado', label: 'Disgregado' },{ name: 'rigido', label: 'Rígido' },{ name: 'fuga_ideas', label: 'Fuga de ideas' },{ name: 'minucioso', label: 'Minucioso' },{ name: 'estereotipado', label: 'Estereotipado' }] },{ titulo: 'Contenido',name: "pensamientoContenido",value: values.pensamientoContenido ,datos: [{ name:'coherente', label: 'Coherente' },{ name: 'incoherente', label: 'Incoherente' },{ name: 'obsesivo', label: 'Obsesivo' },{ name: 'delirante', label: 'Delirante' },{ name: 'rumiacion', label: 'Rumiación'}] }] }
      handleChange = { handleChange }
    >
    
    </ContenedorPaper>

  )
}

export default Pensamiento