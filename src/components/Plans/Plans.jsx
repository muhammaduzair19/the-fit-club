import React from 'react'
import './plans.css'
import WhiteTick from '../../assets/whiteTick.png'
import { plansData } from '../../data/plansData.js'

const Plans = () => {
    return (
        <div className="plans-container">
            <div className="blur plans-blur-1"></div>
            <div className="blur plans-blur-2"></div>
            <div className="programs-header">
                <span className='stroke-text'>ready to start</span>
                <span>your journey</span>
                <span className='stroke-text'>now with us</span>
            </div>
            <div className="plans">
                {
                    plansData.map((plan, i) => (
                        <div key={i} className="plan">
                            {plan.icon}
                            <span>{plan.name}</span>
                            <span>$ {plan.price}</span>

                            <div className="features">
                                {
                                    plan.features.map((feature, i) => (
                                        <div key={i} className="feature">
                                            <img src={WhiteTick} alt="" />
                                            <span>{feature}</span>
                                        </div>
                                    ))
                                }
                            </div>
                            <div>
                                <div>
                                    <span>See more benefits -></span>

                                </div>
                            </div>
                            <button className="btn">
                                Join Now
                            </button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Plans