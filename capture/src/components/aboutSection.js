//stuff
import React from 'react';
import home1 from '../img/home1.png'
import styled from 'styled-components';
import { motion } from 'framer-motion';
//src
import { StyledAbout, StyledDescription, StyledImage, StyledHide } from '../styles';
//animations
import { TitleAnimation, Fade, Photo } from '../animations';
//components
import Wave from './wave';

const AboutSection = () => {

    return (
        <StyledAbout>
            <StyledDescription>
                <motion.div className='title'>
                    <StyledHide>
                        <motion.h2 variants={TitleAnimation}>We work to make</motion.h2>
                    </StyledHide>
                    <StyledHide>
                        <motion.h2 variants={TitleAnimation}>your <span>dreams</span> </motion.h2>
                    </StyledHide>
                    <StyledHide>
                        <motion.h2 variants={TitleAnimation}>come true.</motion.h2>
                    </StyledHide>
                </motion.div>
                <motion.p variants={Fade}>Contact us for any photography or videography ideas that you may have. We have professionals with amazing skills.</motion.p>
                <motion.button variants={Fade}>Contact Us</motion.button>
            </StyledDescription>
            <StyledImage >
                <motion.img variants={Photo} initial='hidden' animate='show' src={home1} alt='home1'></motion.img>
            </StyledImage>
            <Wave />
        </StyledAbout>
    )
}

//styled components


export default AboutSection;

