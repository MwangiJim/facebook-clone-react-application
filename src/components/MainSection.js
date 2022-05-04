import { faPhotoFilm } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { AddPost } from '../redux/reducers/reducerSlice'
import FacebookPost from './FacebookPost'
import PostReel from './PostReel'

function MainSection() {
    let {GoogleUser} = useSelector((state)=>state.fbReducer)
    let dispatch = useDispatch()
    let{ Posts} = useSelector((state)=>state.fbReducer)
    console.log(Posts)
    let name = 'Jimmy'
    let date = new Date()
    let adate = date.toLocaleDateString()
    let atime = date.toLocaleTimeString()
    let[Post,setPost] = React.useState({
        input:'',
        url:''
    })
    const HandleInput =(e)=>{
        setPost((prevPost)=>{
            return{
                ...prevPost,
                [e.target.name]:e.target.value
            }
        })
    }
    const SendPost =()=>{
        if(Post.input){
            dispatch(AddPost({
                post:Post.input,
                time:atime,
                date:adate,
                imagepath:Post.url
            }))
        }
    }
    let styles  = {
        display:Post.input === ''?'none':'block'
    }
  return (
    <Container>
       <Row>
         <PostReel
          avatar='/Images/photo2.png'
          reel='/Images/status-1.png'
          name='Arnold'
         />
         <PostReel
          avatar="/Images/photo3.png"
          reel='/Images/status-2.png'
          name='Vishnu'
         />
         <PostReel
           avatar="/Images/photo4.png"
           reel='/Images/status-3.png'
           name='Gardner'
         />
         <PostReel
            avatar="/Images/member-3.png"
            reel='/Images/status-4.png'
            name='Elena'
         />
         <PostReel
            avatar="/Images/profile.png"
            reel='/Images/status-5.png'
            name='Omar Abdi'
         />
       </Row>
       <PostContainer>
           <First>
               <img src='/Images/status-1.png'/>
              <div className='inputsection'>
                <input
                    placeholder={`Whats on Your Mind ${GoogleUser.UserName}`}
                    type='text'
                    className='input'
                    name='input'
                    value={Post.input}
                    onChange={HandleInput}
                />
                <button onClick={SendPost} style={styles}>send</button>
              </div>
               <input
               placeholder='Image Url(Optional)'
                type='url'
                className='url'
                name='url'
                value={Post.url}
                onChange={HandleInput}
               />
           </First>
           <Second>
               <div className='section'>
                   <img src='/Images/live-video.png'/>
                   <p>Live Video</p>
               </div>
               <div className='section'>
                   <FontAwesomeIcon icon={faPhotoFilm}/>
                   <p>Photo/Video</p>
               </div>
               <div className='section'>
                   <img src='/Images/feeling.png'/>
                   <p>Feeling/Activity</p>
               </div>
           </Second>
       </PostContainer>
      {Posts.map((data)=>{
          return(
            <FacebookPost
             ImageUrl = {Post.url}
             postImage={data.imagepath}
             Time={data.time}
             Date={data.date}
             Message={data.post}
            />
          )
      })}
    </Container>
  )
}

export default MainSection
let Container = styled.div`
 flex-basis:40%;
`
let Row = styled.div`
 display:flex;
 justify-content:space-between;
 align-items:center;
 margin:1% 0;
`
let First = styled.div`
 display:flex;
 justify-content:space-between;
 align-items:center;
 img{
     width:30px;
     height:30px;
     border-radius:50%;
     border:5px solid #4267b2;
     object-fit:cover;
 }
 .inputsection{
    width:450px;
    height:40px;
    border-radius:20px;
    padding:0 15px;
    background-color:#f4f4f4;
    display:flex;
    justify-content:space-between;
    align-items:center;
    button{
        outline:none;
        border:none;
        padding:10px 30px;
        cursor:pointer;
        background:transparent;
        color:#000;
    }
 }
 .input{
   width:450px;
   height:40px;
   border-radius:20px;
   padding:0 15px;
   background-color:transparent;
   outline:none;
   border:none;
 }
 .url{
     width:170px;
     height:40px;
    border-radius:20px;
    padding:0 15px;
    background-color:#f4f4f4;
    outline:none;
    border:none;
 }
`
let PostContainer = styled.div`
 background-color:#fff;
 box-shadow:3px 3px 7px #333;
 margin-top:-7%;
 height:max-content;
 padding:20px 12px;
 width:100%;
 border-radius:10px;
`
let Second = styled.div`
 padding:0px 35px;
 margin-top:4%;
 display:flex;
 justify-content:space-between;
 align-items:center;
 .section{
     display:flex;
     justify-content:center;
     align-items:center;
     cursor:pointer;
     img{
         width:25px;
     }
     p{
         margin-left:6px;
         font-size:14px;
     }
 }
`