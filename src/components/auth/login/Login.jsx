import React, { useState } from 'react'
import { auth } from '../../../firebase';

import { useNavigate } from "react-router-dom"

import './login.css'
function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const signIn = e =>{
        e.preventDefault();

        // firebase login
        auth.signInWithEmailAndPassword(email,password).then((auth) => {
            //console.log(auth);
            //Success Login
            if(auth){
                navigate('/')
            }

        }).catch(error => alert(error.alert));
    }

    const register = e =>{
        e.preventDefault();

        //firebase register

        auth.createUserWithEmailAndPassword(email,password).then((auth) => {
            //console.log(auth);
            //Success Login
            if(auth){
                navigate('/')
            }

        }).catch(error => alert(error.alert));
    }
  return (
    <div className='login'>
        <img className='login__logo' src="https://www.peninsulafamilyservice.org/wp-content/uploads/2019/08/amazon-logo-transparent.png" alt="" />
    
        <div className="login__container">
            <h1>Sign in</h1>
            <form action="">
                <h5>E-mail</h5>
                <input type="text" value={email} onChange={e => setEmail(e.target.value)} />

                <h5>Password</h5>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>

                <button onClick={signIn} className='login__signInButton'>Sign in</button>
            </form>

            <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>

            <button onClick={register} className='login__registerButton'>Create your Amazon Account</button>
        </div>
    </div>
  )
}

export default Login