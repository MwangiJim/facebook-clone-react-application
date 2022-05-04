import React from 'react'
import styled from 'styled-components'
import { db } from '../firebase'
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { AddGoogleDetails } from '../redux/reducers/reducerSlice'

function SignUp() {
    let auth = getAuth()
    let provider = new GoogleAuthProvider()
    let dispatch = useDispatch()

    const SignInWithGoogle =()=>{
        signInWithPopup(auth,provider)
        .then((result)=>{
          dispatch(AddGoogleDetails({
              Email:result.user.email,
              PhotoUrl:result.user.photoURL,
              UserName:result.user.displayName
          }))
        })
    }
  return (
    <Container>
        <Form>
            <img src='/Images/fblogo.png'/>
            <h3>facebook</h3>
            <button onClick={SignInWithGoogle}>Sign In</button>
        </Form>
    </Container>
  )
}

export default SignUp
let Container = styled.div`
 width:100%;
 height:100vh;
 background-color:#fff;
 z-index:50;
 top:0;
 left:0;
 position:fixed;
`
let Form = styled.div`
top:50%;
left:50%;
position:absolute;
transform:translate(-50%,-50%);
 width:300px;
 height:450px;
 box-shadow:3px 4px 8px #333;
 background-color:#fff;
 padding:10px 14px;
 button{
     width:100%;
     color:#fff;
     outline:none;
     border:none;
     cursor:pointer;
     border-radius:5px;
     height:35px;
     background-color:#4267b2;
     top:50%;
     position:relative;
 }
 img{
     left:26%;
     position:relative;
 }
 h3{
     color:#4267b2;
     font-weight:bold;
     font-size:30px;
     text-align:center;
 }
`