import React, { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
//redux
import { useDispatch } from 'react-redux'
import { getGamesCategory } from '../actions/getGamesCategory'

const LoadMore = ({ type }) => {

    let [counter, setCounter] = useState(0)
    const dispatch = useDispatch()

    const loadMoreGames = (quantity) => {
        setCounter(counter += quantity)
        dispatch(getGamesCategory(type, counter))
    }

    return (
        <Load onClick={() => loadMoreGames(5)}>Load More</Load>
    )
}

//styled components

const Load = styled(motion.button)`
    align-self: center;
    color: #47DAED;
    background: #454545;
    border: 3px solid #47DAED;
    font-size: 2rem;
    font-weight: 700;
    padding: 0.5em 1.5em;
    margin-bottom: 1em;
    cursor: pointer;
    outline: none;
    letter-spacing: 2px;
    transition: all 0.3s ease;

    &:hover{
        color: #454545;
        background: #47DAED;
    }
`

export default LoadMore