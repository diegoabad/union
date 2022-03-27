import React, { useState} from 'react'

import { useNavigate } from 'react-router-dom'

import { db } from '../firebase/credentials'
import { collection, getDocs, query, where } from "firebase/firestore";



import {getDbDocuments} from '../redux/actions'

import { useDispatch } from 'react-redux';



const Home = (props) => {

  const dispatch = useDispatch();
  const [datos, setDatos] = useState(null)
  const [fil, setFil] = useState(props.control)
  const [dni, setDni] = useState('')



  const navigate = useNavigate()


  
  function handleInput(evt){
    evt.preventDefault();
    setDni(evt.target.value);
  }

  const handleSubmit = async (evt) =>{
    evt.preventDefault();
    if(dni !== ''){
      const citiesRef = collection(db, "filiatorios");

      const q = query(citiesRef, where("dni", "==", dni.toString()));

      const querySnapshot = await getDocs(q);

      setDatos(querySnapshot.docs)
      setDni('')
    }
} 

  const handleClick = async (evt, pacient) => {
    evt.preventDefault();
    dispatch(getDbDocuments(pacient))
    setFil(pacient)
    navigate(`/filiatorios`)
  }

  const handleAdmision = (event, dni) => {
    event.preventDefault();
    navigate(`/familiares/${dni}`)
  }

  const handleSemiologica = (event, dni) => {
    event.preventDefault();
    navigate(`/semiologica/${dni}`)
  }

  const handleClickAdd = async (evt) => {
    evt.preventDefault();
    dispatch(getDbDocuments('nuevo'))
    navigate(`/filiatorios`)
  
  }


  return (
    <div>

        {/* <Admision /> */}
        <div>
            <input
            type = 'number'
            placeholder = 'Buscar DNI  ...'
            onChange={evt => handleInput(evt)}
            />
            <button className='searchButton' type ='submit' onClick={ evt => handleSubmit(evt)}>Buscar</button>
        </div>
      {fil === false &&
      <>
      {datos && datos.map((element, index) => <div key = {index}>
        <h1>{element.id}</h1>
        <h1>{element.data().nombre}</h1>
        <h1>{element.data().apellido}</h1>
        <p  >{new Date(element.data().fechaNacimiento.seconds * 1000).toLocaleDateString()}</p>
        <button onClick = {(evt) => handleClick(evt, element)}>Editar</button>
        
          <button onClick = {(evt) => handleAdmision(evt, element.data().dni)}>Admision</button>

          <button onClick = {(evt) => handleSemiologica(evt, element.data().dni)}>Evaluación semiológica</button>
        </div>)
        }

      </>}
      
      <button onClick = {(evt) => handleClickAdd(evt)}>Nuevo</button>
    </div>
  )
}

export default Home
