import { faTimesCircle, faTimesRectangle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { Createevent } from '../redux/reducers/reducerSlice'

function SetEvents() {
    let dispatch = useDispatch()
    let[Form,setForm] = React.useState({
        date:'',
        location:'',
        event:''
    })
    const HandleInput = (e) =>{
       setForm((prevForm)=>{
           return{
               ...prevForm,
               [e.target.name]:e.target.value
           }
       })
    }
    //console.log(Events)
    const CreateEvent =()=>{
        if(Form.date,Form.event,Form.location){
           // console.log(Form)
            setEvent((prevState)=>!prevState)
            dispatch(Createevent({
                Eventdate:Form.date,
                Location:Form.location,
                EventName:Form.event
            }))
        }
    }
    let[Event,setEvent] = useState(false);
    let styles = {
        display:Event?'none':'block'
    }
  return (
    <Container style={styles}>
        <h2>Events Section</h2>
     <label>Date and Time</label>
      <input
       type='date'
       onChange={HandleInput}
       name='date'
       value={Form.date}
      />
      <input
       type='text'
       placeholder='Enter Location'
       onChange={HandleInput}
       name='location'
       value={Form.location}
      />
      <input
       type='text'
       placeholder='Event Type'
       onChange={HandleInput}
       name='event'
       value={Form.event}
      />
      <button onClick={CreateEvent}>Create Event</button>
    </Container>
  )
}

export default SetEvents
let Container = styled.div`
 width:300px;
 height:max-content;
 background-color:#fff;
 border-radius:5px;
 box-shadow:0 0 3px 3px #333;
 top:5%;
 right:5%;
 position:absolute;
 padding:10px 14px;
 input{
    width:92%;
    margin:3% 0;
    height:35px;
    border-radius:8px;
    border:none;
    outline:none;
    background-color:#f4f4f4;
    padding:0 15px;
}
button{
    background-color:#4267b2;
    width:100%;
    height:40px;
    color:#fff;
    outline:none;
    border:none;
    border-radius:6px;
    cursor:pointer;
}
.close{
    font-size:18px;
    left:96%;
    color:#4267b2;
    position:relative;
    bottom:35px;
    cursor:pointer;
}
`