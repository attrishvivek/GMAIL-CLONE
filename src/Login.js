import React from 'react'
import { auth,provider } from './firebase';
import "./Login.css";
import {useDispatch} from "react-redux";
import { Button ,IconButton } from "@material-ui/core";
import {login} from "./features/userSlice";


function Login() {
    const dispatch = useDispatch();
    
    const signIn =()=> {
        auth.signInWithPopup(provider)
            .then(({user})=>{
                dispatch(login({
                displayName: user.displayName,
                email:user.email,
                photourl: user.photoURL,
                }))
            })
               .catch((error)=>alert(error.message));
    };
    
    return (
        <div className="login">
            <div className="login_container">
             <img 
            src="https://tse4.mm.bing.net/th?id=OIP.sIEFddNpxRpQr7Kji8cV0QHaD3&pid=Api&P=0&w=304&h=159" alt=""
            />
            <  Button variant="contained" colors="primary"onClick={signIn}>Login</Button>
            </div>
            
             </div>
    ) ;
}

export default Login;