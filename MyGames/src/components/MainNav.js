import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
//components
import Burger from './Burger'

const MainNav = () => {


    return (
        <Navigation>
            <NavLogo>
                <NavLink to='/'>
                    <div className='container'>
                        <i className="fas fa-gamepad"></i>
                        <h2>MyGames</h2>
                    </div>
                </NavLink>
            </NavLogo>
            <Burger />
            <ul className='NavList'>
                <NavLink activeStyle={{ color: 'white' }} to='popular'>
                    <li>Most Popular</li>
                </NavLink>
                <NavLink activeStyle={{ color: 'white' }} to='new'>
                    <li>New</li>
                </NavLink>
                <NavLink activeStyle={{ color: 'white' }} to='upcoming'>
                    <li>Upcoming</li>
                </NavLink>
                <NavLink activeStyle={{ color: 'white' }} to='contact'>
                    <li className='contact'>Contact</li>
                </NavLink>
            </ul>
        </Navigation>
    )
}

//styled components

const Navigation = styled(motion.div)`
    position: sticky;
    top: 0;
    z-index: 10;
    min-height: 12vh;
    background-color: #303030;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 10em;
    color: #47DAED;
    box-shadow: 0px 3px 3px black;
    h2{
        cursor: pointer;
        font-size: 2.2rem;
        letter-spacing: 0.8px;
    }
    ul{
        display: flex;
        font-weight: bolder;
        li{
            transition: all 0.4s ease;
            list-style: none;
            padding-left: 1em;
            margin-left: 1em;
            cursor: pointer;
            letter-spacing: 0.5px;
            font-size: 1.2rem;
        }
        .contact{
            border-left: 2px solid #787878;
        }
    }
    a{
        text-decoration: none;
        color: #47DAED;
    }
    a:hover{
        color: #87E3FF;
    }

    @media(max-width: 1200px){
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        padding: 0em 5em;
        ul{
            display: flex;
            justify-content: space-between;
            width: 100%;
            li{
                padding: 0;
                margin: 0em 0em 1em 0em;
            }
            .contact{
                border: none;
            }
        }
        
    }
    @media(max-width: 600px){
        flex-direction: row;
        ul{
            display: none;
        }
    }
    @media(max-width: 450px){
        padding: 0em 2em;
    }
`

const NavLogo = styled(motion.div)`
    padding: 1em 5em 1em 10em;
    height: 100%;
    display: flex;
    align-items: center;
    color: #47DAED;
    background: #303030;
    border-right: 10px solid #47DAED;
    border-radius: 50%;
    .container{
        display: flex;
        align-items: center;
    }
    i{
        font-size: 2.5rem;
        margin-right: 0.5em;
    }

    @media(max-width: 1200px){
        padding: 1em 0em;
        border: none;
    }

`

export default MainNav