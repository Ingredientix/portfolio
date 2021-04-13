import React, { useEffect } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'

const GameInfo = ({ endLocation }) => {

    const history = useHistory()
    const data = useSelector(state => state.currentGame)
    const game = data.currentGame

    const exitGameInfo = (e) => {

        if (e.target.classList.contains('shadow')) {
            history.push(endLocation)
            document.body.style.overflow = 'auto'
        }
    }

    useEffect(() => {
        document.body.style.overflow = 'hidden'
    }, [])

    return (
        <Shadow className='shadow' onClick={exitGameInfo}>
            <Info initial={{ y: 400 }} animate={{ y: 0 }} transition={{ ease: 'easeIn', duration: 0.3 }} >
                <img src={game.background_image} alt='main' />
                <div className='title'>
                    <h1>{game.name}</h1>
                    <h2>{game.rating}</h2>
                </div>
                <p>{game.description_raw}</p>
                <img src={game.background_image_additional} alt='screenshot' />
            </Info>
        </Shadow>
    )
}

//styled components

const Shadow = styled(motion.div)`
    background: rgba(0,0,0,0.5);
    width: 100%;
    min-height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    overflow-y: scroll;
`
const Info = styled(motion.div)`
    width: 60%;
    min-height: 100vh;
    background: #454545;
    margin: 3em 0em;
    box-shadow: 2px 2px 2px black;
    position: absolute;
    left: 20%;

    img{
        width: 100%;
    }
    .title{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1em 3em;
        color: #47DAED;

        h1{
            font-size: 2.5rem;
        }
        h2{
            font-size: 2rem;
        }
    }
    p{
        padding: 2em 3em;
        text-align: justify;
        color: white;
        opacity: 0.8;
        line-height: 1.6;
    }

    @media(max-width: 1200px){
        width: 80%;
        left: 10%;
    }
    @media(max-width: 450px){
        width: 90%;
        left: 5%;

        .title{
            padding: 1em 1em;
        }
        p{
            padding: 2em 1em;
        }
    }
`

export default GameInfo