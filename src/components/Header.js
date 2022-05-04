import { faBell, faComment, faDisplay, faFlag, faGift, faHome, faPeopleGroup, faPlus, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

function Header() {
    let {GoogleUser} = useSelector((state)=>state.fbReducer)
  return (
    <Container>
        <LeftSide>
          <img src='/Images/fblogo.png'/>
          <div className='input'>
              <FontAwesomeIcon icon={faSearch}/>
              <input
               placeholder='Search'
              />
          </div>
        </LeftSide>
        <Center>
            <FontAwesomeIcon icon={faHome} className='icon active'/>
            <FontAwesomeIcon icon={faFlag} className='icon'/>
            <FontAwesomeIcon icon={faDisplay} className='icon'/>
            <FontAwesomeIcon icon={faGift} className='icon'/>
            <FontAwesomeIcon icon={faPeopleGroup} className='icon'/>
        </Center>
        <RightSide>
              <img src='/Images/member-3.png' className='user'/>
              <h3>{GoogleUser.UserName}</h3>
              <FontAwesomeIcon icon={faPlus} className='rbtn'/>
              <FontAwesomeIcon icon={faComment} className='rbtn'/>
              <FontAwesomeIcon icon={faBell} className='rbtn'/>
              <img src='/Images/arrow.png' className='arrow'/>
        </RightSide>
    </Container>
  )
}

export default Header
let Container = styled.div`
 display:flex;
 justify-content:space-between;
 align-items:center;
 box-shadow:2px 2px 5px #333;
 background-color:#fff;
 width:100%;
 padding:10px 0;
`
let LeftSide = styled.div`
 display:flex;
 justify-content:space-between;
 align-items:center;
 margin: 0 1%;
 img{
     width:40px;
     object-fit:contain;
     margin: 0 1%;
 }
 .input{
     display:flex;
     justify-content:left;
     align-items:center;
     background-color:#f4f4f4;
     border-radius:20px;
     color:#000;
     width:200px;
     height:40px;
     padding:0 15px;
     input{
         width:200px;
         height:40px;
         outline:none;
         border:none;
         background:transparent;
     }
 }
`
let Center = styled.div`
 display:flex;
 justify-content:center;
 align-items:center;
`
let RightSide = styled.div`
 display:flex;
 flex-basis:20%;
 justify-content:space-between;
 align-items:center;
 margin: 0 1%;
 .user{
     height:35px;
     width:35px;
     border-radius:50%;
     border:4px solid rgb(12, 57, 180);
 }
 .rbtn{
     margin:0 2%;
     cursor:pointer;
 }
 h3{
     font-size:16px;
     font-weight:500;
     margin:0 1%;
 }
 .arrow{
     transform:rotate(90deg);
     width:6px;
     cursor:pointer;
 }
`