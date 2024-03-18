import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { navdata } from './data/navdata'
import {AiOutlineClose} from 'react-icons/ai'
import './data/nav.css'
const Mencnt=styled.div`
position:absolute;
top:0;
top:${({menuopen})=>(menuopen?'0':"-100%")};
transition: 0.3s ease-in-out;
left:0;
width:100vw;
height:100vh;
background-color: rgba(200,1,210,255);
z-index: 1000;
display:${({menuopen})=>menuopen?'block':'none'}
`
const Itms=styled.div`
position: absolute;
top:50%;
left:50%;
transform:translate(-50%,-50%);
display:flex;
flex-direction:column;
justify-content: space-between;
height:300px;
align-items: center;
`
const Lin=styled(NavLink)`
margin-left: 40px;
font-size:39px;
text-decoration: none;
font-size: 22px;
transition:0.3s ease-in-out;
&:hover{
    color:yellow;
    transform: translateY(-2px);
}
color:#fff;
`
const Iconclose=styled(AiOutlineClose)`
position:absolute;
right: 6px;
    top: 23px;
font-size: 40px;
cursor: pointer;
`
export default function Menucontent({menuopen,toglemenu}) {
    return (
        <Mencnt menuopen={menuopen} >
            <Iconclose onClick={toglemenu}/> 
         <Itms>
       {navdata.map((item,index)=>(
                  <Lin to={item.link} exact="true" key={index} className={({isActive})=>(isActive ?'active':'inactive')}   >{item.name}</Lin>
               ))
       }
       </Itms>
        </Mencnt>
    )
}
