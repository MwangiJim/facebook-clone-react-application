import { faFlag, faGift, faMessage, faPeopleGroup, faPlusSquare, faVideo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

function LeftSideBar() {
    let {GoogleUser} = useSelector((state)=>state.fbReducer)
  return (
    <Container>
        <div className='top__section'>
            <img src='/Images/member-3.png'/>
             <h3>{GoogleUser.UserName}</h3>
        </div>
        <Line>
           <FontAwesomeIcon icon={faPlusSquare} className='sideicons'/>
           <h3>COVID 19 information<br/> Center</h3>
        </Line>
        <Line>
           <FontAwesomeIcon icon={faFlag} className='sideicons'/>
           <h3>Pages</h3>
        </Line>
        <Line>
           <FontAwesomeIcon icon={faPeopleGroup} className='sideicons'/>
           <h3>Friends</h3>
        </Line>
        <Line>
           <FontAwesomeIcon icon={faMessage} className='sideicons'/>
           <h3>Messenger</h3>
        </Line>
        <Line>
           <FontAwesomeIcon icon={faGift} className='sideicons'/>
           <h3>Marketplace</h3>
        </Line>
        <Line>
           <FontAwesomeIcon icon={faVideo} className='sideicons'/>
           <h3>Videos</h3>
        </Line>
        <Line>
            <img src='/Images/arrow.png'/>
            <h3>Marketplace</h3>
        </Line>
    </Container>
  )
}

export default LeftSideBar
let Container = styled.div`
 flex-basis:17%;
 .top__section{
     display:flex;
     justify-content:left;
     align-items:center;
     img{
         width:30px;
         height:30px;
         border-radius:50%;
         margin-right:3%;
     }
     margin:1% 0;
     padding:10px 13px;
 }
 h3{
     font-weight:500;
 }
`
let Line = styled.div`
 display:flex;
 justify-content:left;
 align-items:center;
 padding:10px 14px;
 h3{
     font-size:17px;
     margin-left:5%;
 }
 .sideicons{
     color:#4267b2;
 }
 img{
     width:8px;
     transform:rotate(90deg);
 }
`