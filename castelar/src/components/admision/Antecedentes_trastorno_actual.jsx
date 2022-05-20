import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper } from '@material-ui/core';
import Lista from '../examen_ingreso/componentes/Lista.jsx'

import Opcion from '../admision1/componente/Opcion';
import TextoMultiline from './componentes/TextoMultiline';
import Subtitulo from '../admision1/componente/Subtitulo'
import TituloIntermedio from './componentes/TituloIntermedio'
import RadioButton from '../admision1/componente/RadioButton'
import Medicamentos from '../medicacion/componentes/Medicamentos'


const styles = makeStyles((theme) => ({
  root: {
    '& .MuiGrid-root': {
      display: 'flex',
      margin: theme.spacing(1),
      marginLeft: theme.spacing(2),
      width: '100%',   
      backgroundColor: '#FEFEFA'
    }
  }
}))

const Antecedentes_trastorno_actual = ({estado, setEstado, paciente}) => {

  const initialStateValues= {
    antecedentes_trastorno_actual: '',
    aparicion_sintomas: '',
    relacion_funcion_vital: '',
    psico_previo: 'no',
    antecedentes_psico: "",
    tratamiento: '',
    tratamiento_descripcion: '',
    internaciones_previas: 'no',
    internaciones_previas_descripcion: '',
    medicacion_previa: 'no',
    psicofarmacos: [],
    adherente_tratamiento: 'no',
    adherente_tratamiento_descripcion: '',
    intentos_suicidio: 'no',
    modalidad_intento_suicidio: '',
    antecedente_conducta_violenta: "no",
    conducta_violenta: "",
    autoagresividad: "no",
    detalle_autoagresividad: "",
    heteroagresividad: "no",
    detalle_heteroagresividad: "",
    habito_adicciones: "no",
    tabaquismo: "no",
    detalle_tabaquismo: "",
    alcoholismo: "no",
    detalle_alcoholismo: "",
    drogas: "no",
    detalle_drogas: "",
    otros: "no",
    detalle_otros: "",
  }

  const [values, setValues] = React.useState(initialStateValues);

  useEffect(() => {
    if(paciente){
      setValues({...values,
        antecedentes_trastorno_actual: paciente.antecedentes_trastorno_actual,
        aparicion_sintomas: paciente.aparicion_sintomas,
        relacion_funcion_vital: paciente.relacion_funcion_vital,
        psico_previo: paciente.psico_previo,
        antecedentes_psico: paciente.antecedentes_psico,
        tratamiento: paciente.tratamiento,
        tratamiento_descripcion: paciente.tratamiento_descripcion,
        internaciones_previas: paciente.internaciones_previas,
        internaciones_previas_descripcion: paciente.internaciones_previas_descripcion,
        medicacion_previa: paciente.medicacion_previa,
        psicofarmacos: paciente.psicofarmacos,
        adherente_tratamiento: paciente.adherente_tratamiento,
        adherente_tratamiento_descripcion: paciente.adherente_tratamiento_descripcion,
        intentos_suicidio: paciente.intentos_suicidio,
        modalidad_intento_suicidio: paciente.modalidad_intento_suicidio,
        antecedente_conducta_violenta: paciente.antecedente_conducta_violenta,
        conducta_violenta: paciente.conducta_violenta,
        autoagresividad: paciente.autoagresividad,
        detalle_autoagresividad: paciente.detalle_autoagresividad,
        heteroagresividad: paciente.heteroagresividad,
        detalle_heteroagresividad: paciente.detalle_heteroagresividad,
        habito_adicciones: paciente.habito_adicciones,
        tabaquismo: paciente.tabaquismo,
        detalle_tabaquismo: paciente.detalle_tabaquismo,
        alcoholismo: paciente.alcoholismo,
        detalle_alcoholismo: paciente.detalle_alcoholismo,
        drogas: paciente.drogas,
        detalle_drogas: paciente.detalle_drogas,
        otros: paciente.otros,
        detalle_otros: paciente.detalle_otros, 
    })}
  },[])

  useEffect(() => {
    setEstado({...estado, ...values})
  }, [values])

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  }

  const handleDelete = (event, value) => {
    const filtrado = values.psicofarmacos.filter(item => item !== value)
    setValues({...values, psicofarmacos: filtrado})
  }

  const handleAutocomple = (event, value) => {
    const encontrado = values.psicofarmacos.find(element => element === value);
    if ((value !== null) && (encontrado === undefined)) {
      setValues({
        ...values,
        psicofarmacos: [...values.psicofarmacos, value]
      });
    }
  }

  const classes = styles();

  return (
    <Paper className={classes.root} style = { {backgroundColor:'rgb(32, 135, 252)'} }>
      <Grid container spacing={3}>
        
        <Subtitulo titulo = 'Antecedentes Psicopatológicos' />       

          <Opcion titulo = 'Antecedentes de enfermedad o trastorno Actual' />
            <TextoMultiline error = { values.antecedentes_trastorno_actual === '' ? true : false } label={"Antecedentes enfermedad o trastorno actual"} name="antecedentes_trastorno_actual" value={values.antecedentes_trastorno_actual} handleChange = { handleChange } />

          <Opcion titulo = 'Momento y circunstancias en qué aparecieron los síntomas' />
            <TextoMultiline error = { values.aparicion_sintomas === "" ? true : false } label={"Circunstancia de aparición de síntomas"} name="aparicion_sintomas" value={values.aparicion_sintomas} handleChange = { handleChange } />

          <Opcion titulo = 'Relación con función (acontecimiento) vital' />
            <TextoMultiline error = {values.relacion_funcion_vital === '' ? true : false } label={"Relación con función vital"} name="relacion_funcion_vital" value={values.relacion_funcion_vital} handleChange = { handleChange } />

        <TituloIntermedio titulo = 'Otros antecedentes psicopatológicos' />
          <Opcion titulo = 'Tratamientos psicológicos/psiquiátricos previos' />

          <RadioButton name = 'psico_previo' handleChange = {handleChange} datos = {[{name: 'si', label: 'Si'}, {name: 'no', label: 'No'}]} titulo = 'Edemas Periféricos' value = {values.psico_previo} />

          {values.psico_previo === 'si' &&
          <>
            <Opcion titulo = 'Comienzo aproximado de la enfermedad o inicio del primer tratamiento' />
              <TextoMultiline error = { values.antecedentes_psico === "" ? true : false } label={"Comienzo aproximado de la enfermedad o inicio del primer tratamiento"} name="antecedentes_psico" value={values.antecedentes_psico} handleChange = { handleChange } />

            <Opcion titulo = 'Tratamiento' />
              <RadioButton name = 'tratamiento' handleChange = {handleChange} datos = {[{name: 'psiquiatrico', label: 'Psiquiátrico'}, {name: 'psicologico', label: 'Psicológico'}, { name: 'combinado', label: 'Combinado'}, { name: 'desconoce', label: 'Desconoce'}]} titulo = 'Tratamiento' value = {values.tratamiento} />

              <TextoMultiline error = { false } label={"Descripción tratamiento"} name="tratamiento_descripcion" value={values.tratamiento_descripcion} handleChange = { handleChange } />

            <Opcion titulo = 'Internaciones previas' />
              <RadioButton name = 'internaciones_previas' handleChange = {handleChange} datos = {[{name: 'si', label: 'Si'}, {name: 'no', label: 'No'}]} titulo = 'Internaciones previas' value = {values.internaciones_previas} />

              {values.internaciones_previas === 'si' &&
                <TextoMultiline error = { (values.internaciones_previas === 'si' && values.internaciones_previas_descripcion === '') ? true : false} label={"Descripción de internaciones previas"} name="internaciones_previas_descripcion" value={values.internaciones_previas_descripcion} handleChange = { handleChange } />
              }

            <Opcion titulo = 'Ha recibido medicación psiquiátrica previamente' />
              <RadioButton name = 'medicacion_previa' handleChange = {handleChange} datos = {[{name: 'si', label: 'Si'}, {name: 'no', label: 'No'}]} titulo = 'Medicación previas' value = {values.medicacion_previa} />

              {values.medicacion_previa === 'si' &&
              <>
                <Medicamentos handleAutocomple = {handleAutocomple} estado/>
              
                {values.psicofarmacos.length > 0 &&
                  <Lista lista = {values.psicofarmacos} handleDelete = {handleDelete}/>
                }
              </>
              }

          </>
          }

          <Opcion titulo = 'Paciente adherente al tratamiento' />
            <RadioButton name = 'adherente_tratamiento' handleChange = {handleChange} datos = {[{name: 'si', label: 'Si'}, {name: 'no', label: 'No'}]} titulo = 'Adherente al tratamiento' value = {values.adherente_tratamiento} />

            <TextoMultiline error = { (values.adherente_tratamiento_descripcion === '' ) ? true : false} label={"Descripción"} name="adherente_tratamiento_descripcion" value={values.adherente_tratamiento_descripcion} handleChange = { handleChange } />

          <Opcion titulo = 'Intentos de suicidio' />
            <RadioButton name = 'intentos_suicidio' handleChange = {handleChange} datos = {[{name: 'si', label: 'Si'}, {name: 'no', label: 'No'}]} titulo = 'Intentos de suicidio' value = {values.intentos_suicidio} />

            {values.intentos_suicidio === 'si' &&
              <TextoMultiline error = { ((values.intentos_suicidio === 'si') && (values.modalidad_intento_suicidio === '')) ? true : false} label={"Modalidad"} name="modalidad_intento_suicidio" value={values.modalidad_intento_suicidio} handleChange = { handleChange } />
            }

          <TituloIntermedio titulo = 'Antecedentes de conducta violenta' />  
          <Opcion titulo = 'Autoagresividad' />
            <RadioButton name = 'autoagresividad' handleChange = {handleChange} datos = {[{name: 'si', label: 'Si'}, {name: 'no', label: 'No'}]} titulo = 'Autoagresividad' value = {values.autoagresividad} />

            {values.autoagresividad === 'si' &&
              <TextoMultiline error = { ((values.autoagresividad === 'si') && (values.detalle_autoagresividad === '')) ? true : false} label={"Modalidad"} name="detalle_autoagresividad" value={values.detalle_autoagresividad} handleChange = { handleChange } />
            }

          <Opcion titulo = 'Heteroagresividad' />
            <RadioButton name = 'heteroagresividad' handleChange = {handleChange} datos = {[{name: 'si', label: 'Si'}, {name: 'no', label: 'No'}]} titulo = 'Heteroagresividad' value = {values.heteroagresividad} />

            {values.heteroagresividad === 'si' &&
              <TextoMultiline error = { ((values.heteroagresividad === 'si') && (values.detalle_heteroagresividad === '')) ? true : false} label={"Modalidad"} name="detalle_heteroagresividad" value={values.detalle_heteroagresividad} handleChange = { handleChange } />
            }

          <TituloIntermedio titulo = 'Hábitos y adicciones' />
          <Opcion titulo = 'Tabaquismo' />
            <RadioButton name = 'tabaquismo' handleChange = {handleChange} datos = {[{name: 'si', label: 'Si'}, {name: 'no', label: 'No'}]} titulo = 'tabaquismo' value = {values.tabaquismo} />

            {values.tabaquismo === 'si' &&
              <TextoMultiline error = { ((values.tabaquismo === 'si') && (values.detalle_tabaquismo === '')) ? true : false} label={"Tabaquismo"} name="detalle_tabaquismo" value={values.detalle_tabaquismo} handleChange = { handleChange } />
            }

          <Opcion titulo = 'Alcoholismo' />
            <RadioButton name = 'alcoholismo' handleChange = {handleChange} datos = {[{name: 'si', label: 'Si'}, {name: 'no', label: 'No'}]} titulo = 'alcoholismo' value = {values.alcoholismo} />

            {values.alcoholismo === 'si' &&
              <TextoMultiline error = { ((values.alcoholismo === 'si') && (values.detalle_alcoholismo === '')) ? true : false} label={"Alcoholismo"} name="detalle_alcoholismo" value={values.detalle_alcoholismo} handleChange = { handleChange } />
            }

          <Opcion titulo = 'Drogas lícitas/ilícitas' />
            <RadioButton name = 'drogas' handleChange = {handleChange} datos = {[{name: 'si', label: 'Si'}, {name: 'no', label: 'No'}]} titulo = 'drogas' value = {values.drogas} />

            {values.drogas === 'si' &&
              <TextoMultiline error = { ((values.drogas === 'si') && (values.detalle_drogas === '')) ? true : false} label={"drogas lícitas/ilícitas"} name="detalle_drogas" value={values.detalle_drogas} handleChange = { handleChange } />
            }

          <Opcion titulo = 'Otros' />
            <RadioButton name = 'otros' handleChange = {handleChange} datos = {[{name: 'si', label: 'Si'}, {name: 'no', label: 'No'}]} titulo = 'Otros' value = {values.otros} />

            {values.otros === 'si' &&
              <TextoMultiline error = { ((values.otros === 'si') && (values.detalle_otros === '')) ? true : false} label={"Detalle"} name="detalle_otros" value={values.detalle_otros} handleChange = { handleChange } />
            }
          
        </Grid>
    </Paper>
  )
}

export default Antecedentes_trastorno_actual
