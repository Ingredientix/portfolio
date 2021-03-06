import React from 'react';
import clock from '../img/clock.svg';
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';
import home2 from '../img/home2.png';
import { StyledAbout, StyledDescription, StyledImage } from '../styles';
import { useScroll } from './useScroll';
import { Fade } from '../animations';
import styled from 'styled-components';

const ServicesSection = () => {
    const [element, controls] = useScroll();
    return (
        <StyledServices variants={Fade} animate={controls} initial='hidden' ref={element}>
            <StyledDescription>
                <h2>High <span>quality</span> services</h2>
                <Cards>
                    <Card>
                        <div className='icon'>
                            <img src={clock} alt='clock' />
                            <h3>Efficient</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet</p>
                    </Card>
                    <Card>
                        <div className='icon'>
                            <img src={teamwork} alt='teamwork' />
                            <h3>Teamwork</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet</p>
                    </Card>
                    <Card>
                        <div className='icon'>
                            <img src={diaphragm} alt='diaphragm' />
                            <h3>Diaphragm</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet</p>
                    </Card>
                    <Card>
                        <div className='icon'>
                            <img src={money} alt='money' />
                            <h3>Affordable</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet</p>
                    </Card>
                </Cards>
            </StyledDescription>
            <StyledImage>
                <img src={home2} alt='home2' />
            </StyledImage>

        </StyledServices>
    );
}

const StyledServices = styled(StyledAbout)`
    h2{
        padding-bottom: 5rem;
    }
    p{
        width: 70%;
        padding: 2rem 0rem 4rem 0rem;
    }
`
const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
`
const Card = styled.div`
    flex-basis: 20rem;
    .icon{
        display: flex;
        align-items: center;
        h3{
            margin-left: 1rem;
            padding: 1rem;
            background: white;
            color: black;
        }
    }
`


export default ServicesSection;
