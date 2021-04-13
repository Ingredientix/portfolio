import React, { useEffect } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'
//redux
import { useSelector, useDispatch } from 'react-redux'
import { getGamesCategory } from '../actions/getGamesCategory'
//components
import Carousel from '../components/Carousel'
import List from '../components/List'
import GameInfo from '../components/GameInfo'
import LoadMore from '../components/LoadMore'

const Categories = ({ type }) => {

    const dispatch = useDispatch()
    const location = useLocation()
    const path = location.pathname.split('/')[2]

    useEffect(() => {
        dispatch(getGamesCategory(type))
    })

    const { isLoading, category_games } = useSelector(state => state.categoryGames)

    return (
        <>
            {path && <GameInfo endLocation={`/${type}`} />}
            {!isLoading &&
                <MainContainer>
                    <Carousel />
                    <Title>
                        <h1>{type} games</h1>
                    </Title>
                    <ListContainer>
                        <List data={category_games} location={type} />
                    </ListContainer>
                    <LoadMore type={type} />
                </MainContainer>
            }
        </>
    )
}

//styled components

const MainContainer = styled(motion.div)`
    min-height: 100vh;
    width: 100%;
    background: #454545;
    display: flex;
    flex-direction: column;
`
const ListContainer = styled(motion.div)`
    padding: 5em 10em;

    @media(max-width: 1200px){
        padding: 5em 5em;
    }
    @media(max-width: 450px){
        padding: 5em 2em;
    }
`
const Title = styled(motion.div)`
    text-transform: capitalize;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2em 0em;
    margin: 3rem 10rem 0rem 10rem;
    border-bottom: 10px solid #47DAED;
    color: #47DAED;
    font-size: 2.5rem;
    text-align: center;
    min-width: 300px;
    letter-spacing: 3px;

    @media(max-width: 1200px){
        margin: 3rem 5rem 0rem 5rem;
    }
    @media(max-width: 1200px){
        margin: 3rem 2rem 0rem 2rem;
    }
`

export default Categories
