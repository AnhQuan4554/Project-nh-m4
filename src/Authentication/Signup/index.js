import React from 'react'
import { useState } from 'react'
import { app } from '../firebaseConfig';
import {getAuth, signInWithEmailAndPassword, GoogleAuthProvider,signInWithPopup,
    sendSignInLinkToEmail, createUserWithEmailAndPassword } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../auth.css';
const Signup = () => {
    let auth = getAuth();
    let google = new GoogleAuthProvider();
    const [data, setData] = useState({
        email: '',
        password: '',
    })
    const handleInput = (event) => {
        let newInput = {[event.target.name]: event.target.value}
        setData({...data, ...newInput})
    }
    const handleSubmit = () => {
        if (data.password === data.confirmPassword) {
            createUserWithEmailAndPassword(auth, data.email, data.password)
            .then((respone) => {
                toast.success("success");
            })
            .catch((error) => {
                toast.error(error.message);
            });
        }
        else {
            toast.error("Passwords don't match")
        }
    }
    const googleAuth = () => {
        signInWithPopup(auth, google)
        .then((respone) => {
            toast.success("success");
          
            console.log(respone.user);
            sendSignInLinkToEmail(auth, respone.user.email, actionCodeSettings)
            .then(() => {
                console.log("link sent successfully");
            })
            .catch((error) => {
                console.log(error.message);
            })
        })
        .catch((error) => {
            toast.error(error.message)
        });
    }
    const actionCodeSettings = {
        // URL you want to redirect back to. The domain (www.example.com) for this
        // URL must be in the authorized domains list in the Firebase Console.
        url: 'localhost',
        // This must be true.
        handleCodeInApp: true,
      };
      
    return (
    <div className="auth-components">
        <div className='auth-container'>
        <h1>Register</h1>
            <div className="input-container">
                <i class="fa-solid fa-user"></i>
                <input onChange={handleInput} type="text" name='email' placeholder="Email" value={data.email} />
            </div>
            <div className="input-container">
                <i class="fa-solid fa-lock"></i>
                <input onChange={handleInput} type="password" name="password" placeholder="Password" value={data.password} />
            </div>
            <div className="input-container">
                <i class="fa-solid fa-lock"></i>
                <input onChange={handleInput} type="password" name="confirmPassword" placeholder="Confirm password" value={data.confirmPassword} />
            </div>
            <button onClick={handleSubmit} type="submit">Register</button>
            <button onClick={googleAuth} >Sign in with Google</button>
            <ToastContainer />
        </div>
    </div>
    )
    }

export default Signup