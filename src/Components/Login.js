import React,{useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import './Login.css'
import amazon from '../assets/amazon.png'
import { auth } from './firebase'

function Login() {
  const history=useNavigate();
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')

  const login = event => {
    event.preventDefault();// this stops refresh
      
    auth.
       signInWithEmailAndPassword(email,password)
       .then((auth) => {
         //logged in and redirect to homepage
         history('/')
       })
       .catch ((e) => alert(e.message))
  }
  const register = (event) => {
    event.preventDefault();// this stops refresh

    auth.createUserWithEmailAndPassword(email,password)
    .then((auth) => {
      history('/')
    })
    .catch ((e) => alert(e.message))
  } 

  return (
    <div className='login'>
        <Link to="/">
            <img 
              className='login__logo'
              src={amazon}
              alt=""
            />  
        </Link>
        <div className="login__container">
          <h1>sign in</h1>
          <form>
            <h5>e-mail</h5>
            <input type='email' value={email} onChange={event => setEmail(event.target.value)}/>
            <h5>password</h5>
            <input type='password'value={password} onChange={event => setPassword(event.target.value)}/>
            <button onClick={login} type='submit' className='login__signInButton'>sign in</button>
          </form>
          <p>
            by signing-in you agree
            to the terms and conditions of amazon
          </p>
          <button onClick={register} className='login__registerButton'>Create your Amazon Account</button>
        </div>
    </div>
  )
}

export default Login
