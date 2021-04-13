import React, { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Burger = () => {

    const [isActive, setIsActive] = useState(false)

    return (
        <MainContainer>
            {isActive &&
                <Menu initial={{ x: 400 }} animate={{ x: 0 }} transition={{ ease: 'easeIn', duration: 0.3 }}>
                    <button onClick={() => { setIsActive(!isActive) }}>X</button>
                    <Link to='popular'>
                        <h1>Most Popular</h1>
                    </Link>
                    <Link to='new'>
                        <h1>New</h1>
                    </Link>
                    <Link to='upcoming'>
                        <h1>Upcoming</h1>
                    </Link>
                    <Link to='contact'>
                        <h1>Contact</h1>
                    </Link>
                </Menu>
            }
            {!isActive &&
                <div onClick={() => { setIsActive(!isActive) }}>
                    <Line />
                    <Line />
                    <Line className='last' />
                </div>
            }
        </MainContainer>
    )
}

//styled components

const MainContainer = styled(motion.div)`
    display: none;
    .last{
        margin-bottom: 0;
    }

    @media(max-width: 600px){
        display: block;
    }
`
const Line = styled(motion.div)`
    height: 3px;
    width: 25px;
    background-color: #47DAED;
    margin-bottom: 5px;
`
const Menu = styled(motion.div)`
    min-height: 100vh;
    width: 70vw;
    position: absolute;
    top: 0;
    right: 0;
    background-color: #454545;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 8em;
    border-left: 4px solid #303030;
    button{
        align-self: flex-end; 
        font-size: 2rem;
        font-weight: bold;
        color: #47DAED;
        padding: 0.5em;
        background-color: #454545;
        border: none;
        cursor: pointer;
    }
    h1{
        font-size: 1.8rem;
        border-bottom: 2px solid;
        width: 8em;
        text-align: center;
        padding-bottom: 1em;
    }
`

export default Burger