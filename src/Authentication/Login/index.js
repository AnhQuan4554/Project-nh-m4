import React from 'react'
import { useState } from 'react'
import { app } from '../firebaseConfig';
import {getAuth, signInWithEmailAndPassword, GoogleAuthProvider,signInWithPopup,
    sendSignInLinkToEmail } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../auth.css';
import { useNavigate } from "react-router-dom";
const Login = ({checkLogin,setCheckLogin,setUser} ) => {
    let navigate = useNavigate();//quay về trang chủ
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
        signInWithEmailAndPassword(auth, data.email, data.password)
        .then((respone) => {
            toast.success("Login successfully!!!");
            setCheckLogin(true)//đăng nhập được cái này có nhiệm vụ check để thay hiện thông tin người dung
            setUser(respone.user)
            navigate("../", { replace: true });//nếu đăng nhập được quay về trang chủ

        })
        .catch((error) => {
            toast.error(error.message);
        });
    }
    const googleAuth = () => {
        signInWithPopup(auth, google)
        .then((respone) => {
            toast.success("Login successfully!!!");
             console.log(`đây là USEr trong`,respone.user.displayName);
             setUser(respone.user)
            setCheckLogin(true)//đăng nhập được cái này có nhiệm vụ check để thay hiện thông tin người dung
             navigate("../", { replace: true });// nếu đăng nhập được quay về trang chủ 
            // console.log('okokokokoko')
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
        <h1>Login</h1>
            <div className="input-container">
                <i class="fa-solid fa-user"></i>
                <input onChange={handleInput} type="text" name='email' placeholder="Email" value={data.email} />
            </div>
            <div className="input-container">
                <i class="fa-solid fa-lock"></i>
                <input onChange={handleInput} type="password" name="password" placeholder="Password" value={data.password} />
            </div>
            <button onClick={handleSubmit} type="submit">Login</button>
            <button onClick={googleAuth} >Sign in with Google</button>
            <ToastContainer />
        </div>
    </div>
    )
    }

export default Login