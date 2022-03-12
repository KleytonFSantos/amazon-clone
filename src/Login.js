import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebase";


function Login() {
    
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signIn = e => {
        e.preventDefault();
    
        auth
        .signInWithEmailAndPassword(email, password)
       
        .then(auth => {
            navigate('/')
           // it will verify that the email and password are correct and finally login 
        })
        .catch(error => alert(error.message))
    }
    
    const register = e => {
        e.preventDefault();
         
        auth
         .createUserWithEmailAndPassword(email, password)
         .then((auth) => {
             //it will create a new user with email and password 
            console.log(auth);

            if(auth) {
                navigate('/')
            }
         })
         .catch(error => alert(error.message))
    }

  return (
    <div className="login">
      <Link to="/">
        <img
          className="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/603px-Amazon_logo.svg.png?20220213013322"
        />
      </Link>

      <div className="login__container">
           <h1>Sign-in</h1>
       
       <form>
           <h5>E-mail</h5>
           <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
           
           <h5>Password</h5>
           <input type="password"  value={password} onChange={e => setPassword(e.target.value)}/>

           <button className="login__singinButton" type="submit" onClick={signIn}>Sign in</button>

           <p> 
               By signing-in you agree to Amazon Study Clone Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest Based Ads
           </p>

           <button className="login__registerButton" onClick={register}> Create yout Amazon Account</button>
           
           <div className="login__collapse">
           <i className="collapsible" >🚩</i> 
           <span> Precisa de ajuda? </span>
           </div>

       </form>
      </div>
    </div>
  );
}

export default Login;
