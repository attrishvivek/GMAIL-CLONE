import React from 'react';
import './App.css';
import Header from "./Header.js"
import Sidebar from "./Sidebar.js"
import Mail from "./Mail.js";
import  EmailList from "./EmailList.js";
import  SendMail from "./SendMail.js";
import  {useSelector} from "react-redux";
import {selectSendMessageIsOpen} from "./features/mailSlice"
import {
  BrowserRouter as Router,Switch,Route,Link
} from "react-router-dom";
import {useDispatch} from "react-redux";
import Login from "./Login"
import {useEffect} from 'react';
import  { login, selectUser } from "./features/userSlice";
import { auth } from './firebase';


function App() {
   const SendMessageIsOpen = useSelector(selectSendMessageIsOpen);
const user = useSelector(selectUser);
const dispatch = useDispatch(); 

useEffect(() => {auth.onAuthStateChanged(user => {
    if (user){
      dispatch(login({
        displayName: user.displayName,
        email:user.email,
        photoUrl: user.photoURL,
      }))
    }
  })
 
}, [])

  return (
    <Router>
{!user ?(
  <Login/>
) :  (

<div className="App">
      <Header />
      <div className="App_body">
      <Sidebar/>
<Switch>
          <Route path="/mail">
            <Mail />
          </Route>
          <Route path="/">
            <EmailList/>
          </Route>
    </Switch>     
    </div>
      {SendMessageIsOpen && <SendMail /> }
      
    </div>

  )}
 </Router>
  );
}

export default App;