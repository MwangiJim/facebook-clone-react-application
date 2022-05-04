import React from 'react'
import styled from 'styled-components'

function PostReel(props) {
  return (
    <Container>
        <img src={props.reel} className='img'/>
        <img src={props.avatar} className='avatar'/>
        <h3>{props.name}</h3>
    </Container>
  )
}

export default PostReel
let Container = styled.div`
margin:0 1%;
 .img{
     width:140px;
     object-fit:cover;
     height:35vh;
     border-radius:15px;
 }
 .avatar{
     width:40px;
     height:40px;
     border-radius:50%;
     border:5px solid #4267b2;
     bottom:230px;
     left:3%;
     position:relative;
 }
 h3{
     bottom:100px;
     position:relative;
     color:#fff;
     left:5%;
     font-weight:500;
 }
 transition:0.5s;
 cursor:pointer;
 :hover{
     transform:scale(1.05);
 }
`