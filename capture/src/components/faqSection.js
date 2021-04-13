import React from 'react';
import styled from 'styled-components';
import { StyledAbout } from '../styles';
import Toggle from './toggle';
import { AnimateSharedLayout } from 'framer-motion';
import { useScroll } from './useScroll';
import { Fade } from '../animations';

const FaqSection = () => {
    const [element, controls] = useScroll();
    return (

        <StyledFaq variants={Fade} initial='hidden' animate={controls} ref={element}>
            <h2>Any Questions? <span>FAQ</span></h2>
            <AnimateSharedLayout>
                <Toggle title='How Do I Start?'>
                    <div className='answer'>
                        <p>Random text</p>
                        <p>Even more random text than before</p>
                    </div>
                </Toggle>
                <Toggle title='Daily Schedule'>
                    <div className='answer'>
                        <p>Random text</p>
                        <p>Even more random text than before</p>
                    </div>
                </Toggle>
                <Toggle title='Different Payment Methods'>
                    <div className='answer'>
                        <p>Random text</p>
                        <p>Even more random text than before</p>
                    </div>
                </Toggle>
                <Toggle title='What Products Do You Offer'>
                    <div className='answer'>
                        <p>Random text</p>
                        <p>Even more random text than before</p>
                    </div>
                </Toggle>
            </AnimateSharedLayout>
        </StyledFaq>
    );
}

const StyledFaq = styled(StyledAbout)`
    display: block;
    span{
        display: block;
    }
    h2{
        font-weight: lighter;
        padding-bottom: 2rem;
    }
    .faq-line{
        background: #cccccc;
        height: 0.2rem;
        margin: 2rem 0rem;
        width: 100%;
    }
    .question{
        padding: 3rem 0rem;
        cursor: pointer;
    }
    .answer{
        padding: 2rem 0rem;
        p{
            padding: 1rem 0rem;
        }
    }
`
export default FaqSection;