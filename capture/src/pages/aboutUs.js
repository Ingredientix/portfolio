import React from 'react';
import { motion } from 'framer-motion';
//components
import AboutSection from '../components/aboutSection';
import ServicesSection from '../components/servicesSection';
import FaqSection from '../components/faqSection';
import ScrollTop from '../components/scrollTop';
//animations
import { PageTransition } from '../animations';

const AboutUs = () => {
    return (

        <motion.div variants={PageTransition} initial='hidden' animate='show' exit='exit'>
            <AboutSection />
            <ServicesSection />
            <FaqSection />
            <ScrollTop />
        </motion.div>

    );
}

export default AboutUs;