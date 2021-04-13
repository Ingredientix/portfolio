import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
//components
import Game from './Game'

const List = ({ data, location }) => {

    return (
        <MainContainer>
            {data.map(info => {
                return <Game key={info.id} game={info} location={location} />
            })}
        </MainContainer>
    )
}

//styled components

const MainContainer = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px,1fr));
    grid-gap: 2em;
`

export default List