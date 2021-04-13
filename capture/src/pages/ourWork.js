import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useScroll } from '../components/useScroll';
import ScrollTop from '../components/scrollTop';
//images
import athlete from '../img/athlete-small.png';
import theracer from '../img/theracer-small.png';
import goodtimes from '../img/goodtimes-small.png';
//animations
import { PageTransition, Fade, Photo, LineAnim, FrameAnim, FrameContainer } from '../animations';


const OurWork = () => {
    const [element, controls] = useScroll();
    const [element2, controls2] = useScroll();
    return (
        <Work variants={PageTransition} initial='hidden' animate='show' exit='exit' style={{ background: "#fff" }}>
            <motion.div variants={FrameContainer}>
                <Frame1 variants={FrameAnim}></Frame1>
                <Frame2 variants={FrameAnim}></Frame2>
                <Frame3 variants={FrameAnim}></Frame3>
                <Frame4 variants={FrameAnim}></Frame4>
            </motion.div>
            <Movie>
                <motion.h2 variants={Fade}>The Athlete</motion.h2>
                <motion.div className='line' variants={LineAnim} />
                <Link to='/work/the-athlete'>
                    <motion.img variants={Photo} src={athlete} alt='athlete' />
                </Link>
            </Movie>
            <Movie variants={Fade} initial='hidden' animate={controls} ref={element}>
                <motion.h2 variants={Fade}>The Racer</motion.h2>
                <motion.div className='line' variants={LineAnim} />
                <Link to='/work/the-racer'>
                    <motion.img src={theracer} alt='theracer' />
                </Link>
            </Movie>
            <Movie variants={Fade} initial='hidden' animate={controls2} ref={element2}>
                <motion.h2 variants={Fade}>Good Times</motion.h2>
                <motion.div className='line' variants={LineAnim} />
                <Link to='/work/good-times'>
                    <motion.img src={goodtimes} alt='goodtimes' />
                </Link>
            </Movie>
            <ScrollTop />
        </Work>
    )
};

const Work = styled(motion.div)`
    min-height: 100vh;
    overflow: hidden;
    padding: 5rem 10rem;
    h2{
        padding: 1rem 0rem;
    }
`;
const Movie = styled(motion.div)`
    padding-bottom: 10rem;
    .line{
        height: 0.5rem;
        background: #23d997;
        margin-bottom: 3rem;
    }
    img{
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`;
const Frame1 = styled(motion.div)`
    position: fixed;
    left: 0;
    top: 10%;
    width: 100%;
    height: 100vh;
    background: #fffebf;
    z-index: 2;
`
const Frame2 = styled(Frame1)`
    background: #ff8efb;
`
const Frame3 = styled(Frame1)`
    background: #8ed2ff;
`
const Frame4 = styled(Frame1)`
    background: #8effa0;
`
export default OurWork;