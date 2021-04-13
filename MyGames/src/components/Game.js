import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getCurrentGame } from '../actions/getCurrentGame'

const Game = ({ game, location }) => {

    const dispatch = useDispatch()

    const updateCurrentGame = () => {
        dispatch(getCurrentGame(game.id))
    }

    return (
        <Container onClick={updateCurrentGame}>
            <Link to={`/${location}/${game.id}`}>
                <img src={game.background_image} alt='background'></img>
                <GameInfo>
                    <h2>{game.name}</h2>
                </GameInfo>
            </Link>
        </Container>
    )
}

//styled components

const Container = styled(motion.div)`
    width: 100%;
    position: relative;
    height: 15rem;
    cursor: pointer;
    box-shadow: 2px 2px 2px black;
    transition: all 0.6s ease;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    
    &:hover{
        transform: scale(1.1);

        h2{
            color: #19E5F7;
        }
    }
`
const GameInfo = styled(motion.div)`
    position: absolute;
    bottom: 0;
    background: #303030;
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 2px solid #47DAED;

    h2{
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        letter-spacing: 1px;
        font-weight: 400;
        color: white;
        opacity: 0.8;
        transition: all 0.3s ease;
        padding: 0.5em;
    }
`

export default Game