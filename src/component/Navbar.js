import React, { useState } from 'react'
import { navdata } from './data/navdata'
import styled from 'styled-components'
import {Link, NavLink} from 'react-router-dom'
import {SiAltiumdesigner} from "react-icons/si"
import {FaArrowUp, FaSearch} from 'react-icons/fa'
import {GiHamburgerMenu} from 'react-icons/gi'
import './data/nav.css'
import Menucontent from './menucontent'
const Nav=styled.div`
  background-color: ${({navscroll})=>navscroll?'rgba(200,1,210,255)':'rgba(200,1,210,0.4)'};
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top:0;
  z-index: 10;
`
const Logo=styled(Link)`
color:yellow;
text-decoration: none;
margin-left: 40px;
font-size:30px;


`
const Menubar=styled(GiHamburgerMenu)`
color:#fff;
font-size:37px;
display:none;
margin-right:7px;
cursor: pointer;
@media (max-width:930px ) {
    display: block;
}


`
const Navmenu=styled.div`
display: flex;
width:468px;
@media (max-width:930px ) {
    display: none;
}

`
const Lin=styled(NavLink)`
margin-left: 40px;

text-decoration: none;
font-size: 22px;
transition:0.3s ease-in-out;
&:hover{
    color:yellow;
    transform: translateY(-2px);
}
color:#fff;
`

const Search=styled(SiAltiumdesigner)`
margin-right: 20px;
font-size: 50px;
cursor: pointer;
color:#fff;
@media (max-width:930px ) {
    display:none
}

`
const Inpt=styled.input.attrs({
    type:"text",
    placeholder:'search...'
})`

padding-left:29px;
height:30px;
&:focus{
    outline:none;
    
}
transition:0.5s ease;
&::placeholder{
    font-size:18px;
    color:#fff;
  
}
font-size:18px;
width:200px;
border-radius: 8px;
border:3px solid rgba(200,1,210,255);
background:transparent;
caret-color: white;
color:white;
`
const Iconsearch=styled(FaSearch)`
position:relative;
left:26px;
color:rgba(200,1,210,255);



`
const Opened=styled.div`
position:absolute;
top:100px;
right:${({variant})=>variant?"10px":"-10px"};
opacity:${({variant})=>variant?"1":"0"};
transition:1s ease;
@media (max-width:930px){
    opacity:1;
    left:0;
    }

`
const Boxscroll=styled.div`
position:fixed;
bottom: 100px;
right:100px;
background-color: rgba(200,1,210,255);
display: flex;
justify-content: center;
align-items: center;
width:60px;
height:60px;

`
const Arrow=styled(FaArrowUp)`
color:white;
font-size: 20px;

`
export default function Navbar() {
    const [searchisopen, setsearch] = useState(false);
    const togglesearch=()=>{
        setsearch(!searchisopen);
    }
    const [menuisopen, setmenu] = useState(false);
    const togglemenu=()=>{
        setmenu(!menuisopen);
    }
    const [navisscroll, setnavscroll] = useState(false);
    const changebackground=()=>{
        if(window.scrollY>80){
            setnavscroll(true);
            
        }else{
            setnavscroll(false) 
        }
    }
    window.addEventListener('scroll',changebackground)

    return (
       <Nav navscroll={navisscroll}>
           <Logo to='/'>Ultra Design</Logo>
           <Menubar onClick={togglemenu}/>
           <Navmenu>
               {navdata.map((item,index)=>(
                  <Lin to={item.link} exact="true" key={index} className={({isActive})=>(isActive ?'active':'inactive')}   >{item.name}</Lin>
               ))
                   
               }
           </Navmenu>
           <Search onClick={togglesearch}></Search>
           <Opened variant={searchisopen}>
           <Iconsearch/>
        <Inpt >
        
        </Inpt>
        </Opened> 
        <Menucontent menuopen={menuisopen} toglemenu={togglemenu}/>
        <Boxscroll>
            <Arrow></Arrow>
        </Boxscroll>          
       </Nav>
         
    )
}
