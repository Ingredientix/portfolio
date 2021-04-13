import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components'
import { PageTransition } from '../animations';

const ContactUs = () => {
    return (
        <Contact className='contactUs' variants={PageTransition} initial='hidden' animate='show' exit='exit' style={{ background: "#fff" }}>
            <h1>Contact Us</h1>
        </Contact>
    )
};

//styled components

const Contact = styled(motion.div)`
    min-height: 90vh;
    display: flex;
    h1{
        margin-left: 10rem;
        margin-bottom: 10rem;
        font-size: 5rem;
        align-self: center;
        cursor: pointer;
    }
    h1:hover{
        opacity: 0.8
    }
`

export default ContactUs;