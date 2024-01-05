import React from 'react'
import './programs.css'
import { programsData } from '../../data/programsData'
import RightArrow from '../../assets/rightArrow.png'

const Programs = () => {
    return (
        <div className="programs" id="programs">
            <div className="programs-header">
                <span className='stroke-text'>explore</span>
                <span>our programs</span>
                <span className='stroke-text'> to shape you</span>
            </div>

            <div className="programs-card">
                {
                    programsData.map((program, i) => (


                        <div key={i} className="program-card">
                            {program.image}
                            <span>{program.heading}</span>
                            <span>{program.details}</span>
                            <div className='join-now'>
                                <span>Join Now</span>
                                <img src={RightArrow} alt="" />
                            </div>
                        </div>


                    ))
                }
            </div>
        </div>
    )
}

export default Programs