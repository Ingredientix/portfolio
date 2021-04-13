import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { MovieState } from '../movieState';
import { motion } from 'framer-motion';
import { PageTransition } from '../animations';
import ScrollTop from '../components/scrollTop';

const MovieDetails = () => {
    const history = useHistory();
    const url = history.location.pathname;
    const [movies, setMovies] = useState(MovieState);
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const currentMovie = movies.filter((current) => current.url === url);
        setMovie(currentMovie[0]);
    }, [url, movies])

    return (
        <>
            {movie && (
                <StyledDetails variants={PageTransition} initial='hidden' animate='show' exit='exit'>
                    <StyledHeadline>
                        <h2>{movie.title}</h2>
                        <img src={movie.mainImg} alt='main' />
                    </StyledHeadline>
                    <StyledAwards>
                        {movie.awards.map((award) => (
                            <Awarded title={award.title} description={award.description} key={award.title} />
                        ))}
                    </StyledAwards>
                    <StyledImage>
                        <img src={movie.secondaryImg} alt='secondary' />
                    </StyledImage>
                    <ScrollTop />
                </StyledDetails>
            )}
        </>
    );
}

const StyledDetails = styled(motion.div)` 
    color: white;
`
const StyledHeadline = styled.div` 
    min-height: 90vh;
    padding-top: 20vh;
    position: relative;
    h2{
        position: absolute;
        top: 10%;
        left: 50%;
        transform: translate(-50%,-10%);
    } 
    img{
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`
const StyledAwards = styled.div` 
    min-height: 80vh;
    display: flex;
    margin: 5rem 10rem;
    align-items: center;
    justify-content: space-around;
`
const StyledAward = styled.div` 
    padding: 5rem;
    h3{
        font-size: 2rem;
    }
    .line{
        width: 100%;
        background: #23d997;
        height: 0.5rem;
        margin: 1rem 0rem;
    }
    p{
        padding: 2rem 0rem;
    }
`
const Awarded = ({ title, description }) => {
    return (
        <StyledAward>
            <h3>{title}</h3>
            <div className='line' />
            <p>{description}</p>
        </StyledAward>
    )
}
const StyledImage = styled.div` 
    min-height: 50vh;
    img{
        width: 100%;
        height: 100vh;
        object-fit: cover;
    }
`
export default MovieDetails;