import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const Contact = () => {

    return (
        <MainContainer>
            <TitleContainer>
                <h1>Contact Us!</h1>
                <p>We'd love to speak to you, so we can learn exactly what you need. Feel free to email/message or call us at any time. Our customer service is at your disposal.</p>
            </TitleContainer>
            <InfoContainer>
                <h3>email</h3>
                <p>greatemail@mail.com</p>
                <h3>phone number</h3>
                <p>555-555-555</p>
                <h3>adress</h3>
                <p>36 Long Street, Atlantis</p>
            </InfoContainer>
        </MainContainer>
    )
}

//styled components

const MainContainer = styled(motion.div)`
    min-height: 88vh;
    display: flex;
    align-items: center;
    padding: 0em 10em;
    background: #DBDBDB;
    line-height: 1.6;

    @media(max-width: 1200px){
        padding: 0em 5em;
    }
    @media(max-width: 450px){
        padding: 0em 2em;
    }
`
const TitleContainer = styled(motion.div)`
    width: 60vw;
    padding-right: 5em;
    border-right: 3px solid #1C1C1C;

    h1{
        font-size: 6rem;
        letter-spacing: 1px;
        color: #1C1C1C;
    }
    p{
        font-size: 2rem;
        opacity: 0.9;
    }

    @media(max-width: 1200px){
        h1{
            font-size: 4rem;
        }
        p{
            font-size: 1.5rem
        }
    }
`
const InfoContainer = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding-left: 3em;

    h3{
        letter-spacing: 1.5px;
    }
    p{
        padding-bottom: 1em;
    }
`


export default Contact
