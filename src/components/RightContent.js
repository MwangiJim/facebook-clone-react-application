import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import SetEvents from './SetEvents'

function RightContent() {
  let{events}=useSelector((state)=>state.fbReducer)
  let[Event,setEvent] = useState(false)
  const ShowEvent =()=>{
    setEvent((PrevEvent)=>!PrevEvent)
  }
  console.log(events)
  return (
    <Container>
        <FirstSection>
          <h2>Events</h2>
          <img src='/Images/upload.png' onClick={ShowEvent}/>
          <p>See All</p>
        </FirstSection>
        {events.length === 0?<h4 className='spam'>Click icon To Add Events</h4>:''}
        {events.map((event)=>{
          return(
            <Events>
                <Left>
                  <h4>{event.Eventdate}</h4>
                  <small>March</small>
                </Left>
                <div className='right'>
                  <h3>{event.EventName}</h3>
                  <Location>
                    <img src='/Images/location.png'/>
                    <p>{event.Location}</p>
                  </Location>
                  <small>More Info</small>
                </div>
          </Events>
          )
        })}
        <Advert>
          <First>
            <h3>Advertisement</h3>
            <small>Close</small>
          </First>
          <img src='/Images/advertisement.png'/>
          <First>
            <h3>Conversation</h3>
            <small>Hide Chat</small>
          </First>
          <Convo>
            <img src='/Images/member-1.png'/>
            <span></span>
            <h5>Alisson Mino</h5>
          </Convo>
          <Convo>
            <img src='/Images/member-2.png'/>
            <span></span>
            <h5>John Doe</h5>
          </Convo>
          <Convo>
            <img src='/Images/member-3.png'/>
            <span></span>
            <h5>Megan Boone</h5>
          </Convo>
        </Advert>
       {Event? <SetEvents/>:''}
    </Container>
  )
}

export default RightContent
let Container = styled.div`
 flex-basis:21%;
 height:max-content;
 border-radius:15px;
 padding:5px 13px;
 background-color:#fff;
 .spam{
   text-align:center;
   font-weight:400;
 }
`
let FirstSection = styled.div`
 display:flex;
 justify-content:space-between;
 align-items:center;
 p{
   color:#4267b2;
 }
 img{
   width:20px;
   cursor:pointer;
   objject-fit:cover;
 }
`
let Events = styled.div`
 display:flex;
 justify-content:left;
 margin:8% 0;
 align-items:center;
 .right{
   text-align:left;
   margin:0 5%;
   small{
     color:#4267b2;
   }
 }
`
let Left = styled.div`
 background:#fff;
 border-radius:15px;
 overflow:hidden;
 box-shadow:0 0 4px 4px #333;
 h4{
   padding:10px 0;
   text-align:center;
 }
 small{
   background-color:#4267b2;
   color:#fff;
   width:100px;
   display:block;
   height:30px;
   text-align:center;
 }
`
let Location = styled.div`
 display:flex;
 justify-content:left;
 align-items:center;
 img{
   width:15px;
   margin: 0 1%;
 }
`
let Advert = styled.div`
 img{
   width:100%;
   height:30vh;
   border-radius:5px;
   object-fit:cover;
 }
`
let First = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
small{
  color:#4267b2;
}
h3{
  font-weight:400;
}
margin:3% 0;
`
let Convo = styled.div`
 display:flex;
 justify-content:left;
 align-items:baseline;
 img{
   width:35px;
   height:35px;
   border-radius:50%;
 }
 span{
   background-color:green;
   height:6px;
   width:6px;
   bottom:5px;
   position:relative;
   right:1.4%;
   border:1px solid #fff;
   border-radius:50%;
   display:block;
 }
 margin:2% 0;
`