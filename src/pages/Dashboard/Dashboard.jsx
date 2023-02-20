import React from 'react'
import { useContext } from 'react';
import { useSelector } from 'react-redux'
import { logOut } from '../../Firebase/firebase';
import { useDispatch } from 'react-redux';
import {unSetUser} from "../../reducers/user/userSlice"
import { useNavigate } from 'react-router-dom';
import {context} from "../../context/authContext"


function Dashboard() {
const {name} = useSelector(state => state.user);
const dispatch = useDispatch()
const {logInNavegate} = useContext(context)


 const handleClick = () => {
  logOut()
  dispatch(unSetUser())
  logInNavegate('/login')
 }
  return (
    <div>
        <h1>{`Bienvenido ${name}`}</h1>
        <button onClick={handleClick}>cerrar sesion</button>
    </div>
  )
}

export default Dashboard