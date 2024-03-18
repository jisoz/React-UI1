import React from 'react'
import styled from 'styled-components'
import imagetwo from '../photos/wall3.jpg'
import Projects from './projects'

const Hom=styled.div`

position: absolute;
top: 0;
left: 0;
width:100%;
height:100%;

`
const Land=styled.div`
width:100vw;
position: relative;

height:100vh;



`
const Img=styled.img`
width:100%;
height: 100%;
object-fit: cover;

`
const Content=styled.div`
position: absolute;
top:140px;
left:40px;
width:500px;
object-fit: cover;
@media (max-width:930px){
  
   top:50%;
   left:50%;
   transform:translate(-50%,-50%)
    }
`
const Parag=styled.p`
color:#fff;
font-size:40px;
padding:0;
margin-top:15px;
@media (max-width:930px){
text-align: center;
font-size: 25px;
}
`
const Min=styled.p`
font-size:30px;
color:#fff;
margin-bottom:12px;
@media (max-width:930px){
    text-align: center;
    font-size: 22px;
    }
`
const Heading=styled.h1`
text-align: center;
color:white;
font-size:110px;
margin-bottom: 12px;
margin-top: 10px;
@media (max-width:768px){
    margin-top: -36px;
}
`
const Info=styled.div`
font-size:20px;
color:#ddd;`


export default function Home() {
    return (
      
        <Hom>
        <Land>
        <Img src={imagetwo}></Img>
        <Content>
            <Parag>DIGITAL PRODUCTION</Parag>
            <Min>of the</Min>
            <Heading>Future</Heading>
            <Info>With 19+ years’ experience in combining web development, design and marketing, we create award-winning projects and creative campaigns both online and offline</Info>
        </Content>

       
        
        </Land>
            
        <Projects/>
     </Hom>
        
    )
}
