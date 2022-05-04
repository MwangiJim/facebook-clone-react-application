import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import SignUp from './components/SignUp';
import { useEffect } from 'react';
import React from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

function App() {
  let auth = getAuth()
  let[user,setUser] = React.useState(null)

  useEffect(()=>{
   onAuthStateChanged(auth,(AuthUser)=>{
     if(AuthUser){
       setUser(AuthUser)
       console.log('YOu are Logged in!!!!')
     }
     else{
       setUser(null)
       console.log('You are Logged out!!!!')
     }
   })
  },[])
  return (
    <div className="App">
            <Header/>
            {user? <Home/>:<SignUp/>}
    </div>
  );
}

export default App;
