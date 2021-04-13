import React, { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'
import { useLocation, useHistory } from 'react-router-dom'
import { getCurrentGame } from '../actions/getCurrentGame'
import { useDispatch } from 'react-redux'

const Carousel = () => {

    const dispatch = useDispatch()
    const history = useHistory()
    const location = useLocation()
    const type = location.pathname.split('/')[1]
    const games = useSelector(state => state.categoryGames)
    let [index, setIndex] = useState(1)
    let carouselGames = []

    for (let i = 0; i < 10; i++) {
        carouselGames[i] = games.category_games[i]
    }

    const nextSlide = () => {
        setIndex(index += 1)
    }

    const prevSlide = (length) => {
        setIndex(index -= 1)
        if (index < 0) { setIndex(length - 1) }
    }

    const primaryImgClick = (i) => {
        const identify = games.category_games[(index + 1) % (carouselGames.length)].id
        dispatch(getCurrentGame(identify))
        history.push(`${type}/${identify}`)
    }

    return (
        <MainContainer>
            <i onClick={() => prevSlide(carouselGames.length)} className="fas fa-chevron-left"></i>
            <img className='secondary' src={carouselGames[index % carouselGames.length].background_image} alt='yeah' />

            <PrimaryImage onClick={() => { primaryImgClick(index) }}>
                <img className='primary-img' src={carouselGames[(index + 1) % (carouselGames.length)].background_image} alt='yeah' />
                <Title>
                    <h2>{carouselGames[(index + 1) % (carouselGames.length)].name}</h2>
                </Title>
            </PrimaryImage>

            <img className='secondary' src={carouselGames[(index + 2) % carouselGames.length].background_image} alt='yeah' />
            <i onClick={() => nextSlide(carouselGames.length)} className="fas fa-chevron-right"></i>
        </MainContainer >
    )
}

//styled components

const MainContainer = styled(motion.div)`

    width: 100%;
    min-height: 45vh;
    background: black;
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    border-top: 10px solid #47DAED;
    border-bottom: 10px solid #47DAED;

    img{
        min-width: 40vw;
        width: 50%;
        height: 45vh;
        object-fit: cover;
        box-shadow: 2px 2px 3px black;
    }
    .secondary{
        opacity: 0.3;
    }
    i{
        position: absolute;
        color: #47DAED;
        font-size: 3rem;
        cursor: pointer;
        opacity: 0.8;
        z-index: 3;
    }
    i:hover{
        opacity:1;
    }
    .fa-chevron-right{
        right: 5%;
    }
    .fa-chevron-left{
        left: 5%;
    }

`
const PrimaryImage = styled(motion.div)`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    z-index: 3;
    height: 100%;
    cursor: pointer;

    &:hover{
        h2{
            color: #47DAED;
            opacity: 1;
        }
    }

    img{
        width: 100%;
    }
    
`
const Title = styled(motion.div)`
    position: absolute;
    bottom: 5%;
    left: 50%;
    transform: translateX(-50%);
    color: white;
    background: #202020;
    padding: 0.5em 1em;
    box-shadow: 2px 2px 2px black;
    border: 2px solid #47DAED;

    h2{
        opacity: 0.75;
        letter-spacing: 2px;
        text-align: center;
    }

`

export default Carousel

