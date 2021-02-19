import React, { useState } from 'react';
import './Login.css'
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";


function Login() {
    //allows to programmatically change the url
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    //Event for signIn Function 
    const signIn = e => { 
        e.preventDefault();
        //firebase login stuff
        auth.signInWithEmailAndPassword(email, password).then(auth => {
            history.push('./')
        })
        .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();
        //firebase stuff for register
        auth.createUserWithEmailAndPassword(email, password).then((auth) => {
            //successfully created a new user with the email and the password.
            console.log(auth);
            //go to homepage if the auth field is not empty
            if(auth){
                history.push('./')
            }
        })
        .catch(error => alert(error.message))
    }
    return (
        <div className='login'>
        <Link to='/'>
             <img className = "login__logo" src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' />
        </Link>

        <div className='login__container'>
            <h1>SignIn</h1>
        <form>
            <h5>E-Mail</h5>
            <input type='text' value={email} onChange={e => setEmail(e.target.value)}/>
            <h5>Password</h5>
            <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>
            <button type='submit' onClick={signIn} className='login__signInButton'>Sign In</button>
        </form>

        <p> By signing in you agree to SilpyMeal's Conditions of Use & Sale. Please see our Privacy Policy, our Cookies Notice and our interest-based Ads </p>
        <button onClick={register} className='login__registerButton'>Create your Account</button>
        </div>
        </div>
    )
}

export default Login
