import { faMessage, faPaperPlane, faPerson, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'
import { Fade,Zoom } from 'react-reveal'
import { useSelector } from 'react-redux'


function FacebookPost(props) {
    let {GoogleUser} = useSelector((state)=>state.fbReducer)
  return (
      <Zoom center>
    <Container>
        <FirstSection>
            <Left>
                <img src='/Images/profile-pic.png'/>
                <div className='details'>
                    <h3>{GoogleUser.UserName}</h3>
                    <small>{props.Date}<p>{props.Time}CAT</p></small>
                </div>
            </Left>
            <img src='/Images/more.png' className='more'/>
        </FirstSection>
       {props.ImageUrl? <img src= {props.postImage} className='PostImage'/>:null}
        <h3 className='Post'>{props.Message}</h3>
        <hr/>
        <div className='row'>
            <Box>
                <FontAwesomeIcon icon={faThumbsUp}/>
                <small>Like</small>
            </Box>
            <Box>
                <FontAwesomeIcon icon={faMessage}/>
                <small>Comment</small>
            </Box>
            <Box>
                <FontAwesomeIcon icon={faPaperPlane}/>
                <small>Share</small>
            </Box>
            <Box>
                <FontAwesomeIcon icon={faPerson}/>
                <img src='/Images/arrow.png'/>
            </Box>
        </div>
    </Container>
    </Zoom>
  )
}

export default FacebookPost
let Container = styled.div`
 width:100%;
 margin: 3% 0;
 box-shadow:3px 3px 7px #333;
 height:max-content;
 background-color:#fff;
 border-radius:5px;
 padding:10px 14px;
 .row{
     display:flex;
     justify-content:space-between;
     align-items:center;
     margin:1% 8%;
 }
 hr{
     margin-top:5%;
     margin-bottom:3%;
 }
 .Post{
     font-weight:500;
     margin-top:20px;
 }
 .PostImage{
     width:100%;
     height:40vh;
     border-radius:5px;
     object-fit:cover;
     margin-top:5%;
 }
`
let Box=styled.div`
 display:flex;
 justify-content:center;
 align-items:center;
 color:gray;
 img{
     width:7px;
     transform:rotate(90deg);
     margin: 0 9%;
 }
 small{
     margin:0 9%;
 }
`
let FirstSection = styled.div`
 display:flex;
 justify-content:space-between;
 .more{
     width:20px;
     height:5px;
 }
`
let Left = styled.div`
display:flex;
img{
    width:40px;height:40px;
    border-radius:50%;
}
.details{
    text-align:left;
    margin: 0 3px;
    small{
        margin-top:-3px;
        display:flex;
    }
}
`