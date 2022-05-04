import React from 'react'
import styled from 'styled-components'
import LeftSideBar from './LeftSideBar'
import MainSection from './MainSection'
import RightContent from './RightContent'

function Home() {
  return (
   <Container>
     <LeftSideBar/>
     <MainSection/>
     <RightContent/>
   </Container>
  )
}

export default Home
let Container = styled.div`
 display:flex;
 justify-content:space-between;
 margin:2% 0;
`