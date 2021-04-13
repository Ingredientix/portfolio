import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
//Components
import List from './List'

const GrandDisplay = ({ gamesInfo, title }) => {

    return (
        <MainContainer>
            <Title>
                <div className='container'>
                    <h1>{title} Games</h1>
                </div>
                <Link to={`${title}`}>
                    <p>See More...</p>
                </Link>
            </Title>
            <List data={gamesInfo} location={'game'} />
        </MainContainer>
    )
}

//styled components

const MainContainer = styled(motion.div)`
    background: #454545;
    padding: 0em 10em 4em 10em;

    @media(max-width: 1200px){
        padding: 0em 5em 4em 5em;
    }
    @media(max-width: 450px){
        padding: 0em 2em 4em 2em;
    }
`
const Title = styled(motion.div)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2em 0em 0.5em 0em;
    margin-bottom: 2em;
    border-bottom: 0.5em solid #47DAED;

    .container{
        display: flex;
        align-items: center;
        h1{
            font-size: 4rem;
            color: #47DAED;
        }
    }
    p{
        color: #47DAED;
        font-size: 1.2rem;
        text-transform: uppercase;
        letter-spacing: 1.3px;
    }
    p:hover{
        color: #87E3FF;
    }
    a{
        text-decoration: none;
    }
    @media(max-width: 600px){
        flex-direction: column;
        text-align: center;
        h1{
            padding-bottom: 0.3em;
        }
        p{
            padding-bottom: 0.2em;
        }
    }
`

export default GrandDisplay