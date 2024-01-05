import React from 'react'
import './hero.css'
import Header from '../Header/Header'
import Heart from '../../assets/heart.png'
import HeroImage from '../../assets/hero_image.png'
import HeroBack from '../../assets/hero_image_back.png'
import { motion } from 'framer-motion'
import Calories from '../../assets/calories.png'
import NumberCounter from 'number-counter'

const Hero = () => {
    const transition = { type: 'spring', duration: 3 }
    const mobile = window.innerWidth <= 768 ? true : false
    return (
        <div className="hero">
            <div className="blur hero-blur"></div>
            <div className="left-hero">

                {/* header */}
                <Header />

                {/* the heading */}
                <div className="the-heading">
                    <motion.div
                        initial={{ left: mobile ? '168px' : "238px" }}
                        whileInView={{ left: '8px' }}
                        transition={{ ...transition, type: 'tween' }}
                    ></motion.div>
                    <span>the best fitness club in the town</span>
                </div>


                {/* main text */}
                <div className="hero-text">
                    <div>
                        <span className='stroke-text'>shape </span>
                        <span>Your</span>
                    </div>
                    <div>
                        <span>Ideal Body</span>
                    </div>
                    <div>
                        <span>
                            In here to we will help you to shape and build your Ideal body and live up life to fullest
                        </span>
                    </div>
                </div>



                {/* figures */}
                <div className="figures">
                    <div>
                        <span>
                            <NumberCounter
                                end={140}
                                start={100}
                                delay='2'
                                preFix='+'
                            />
                        </span>
                        <span>
                            expert coachers
                        </span>
                    </div>
                    <div>
                        <span>
                            <NumberCounter
                                end={978}
                                start={800}
                                delay='2'
                                preFix='+'
                            />
                        </span>
                        <span>
                            members joined
                        </span>
                    </div>
                    <div>
                        <span>
                            <NumberCounter
                                end={55}
                                start={10}
                                delay='2'
                                preFix='+'
                            />
                        </span>
                        <span>
                            fitness programs
                        </span>
                    </div>

                </div>

                {/* buttons */}

                <div className="buttons">
                    <button className="btn">
                        Get Started
                    </button>
                    <button className="btn">
                        Learn More
                    </button>
                </div>

            </div>
            <div className="right-hero">
                <button className="btn">Join Now</button>

                <motion.div
                    initial={{ right: '-1rem' }}
                    whileInView={{ right: '4rem' }}
                    transition={transition}
                    className="heart-rate">
                    <img src={Heart} alt="" />
                    <span className=''>Heart Rate</span>

                    <span>116 bpm</span>
                </motion.div>



                {/* hero image */}

                <div className="hero-images">
                    <img src={HeroImage} alt="" className="hero-image" />

                    <motion.img
                        initial={{ right: "11rem" }}
                        whileInView={{ right: "20rem" }}
                        transition={transition}
                        src={HeroBack} alt="" className="hero-image-back" />
                </div>


                <motion.div
                    initial={{ right: '37rem' }}
                    whileInView={{ right: '28rem' }}
                    transition={transition}

                    className="calories">
                    <img src={Calories} alt="" />
                    <div>
                        <span>Calories Burned</span>
                        <span>232 kcal</span>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Hero