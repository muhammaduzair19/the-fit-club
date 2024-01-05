import React from 'react'
import './reasons.css'
import Image1 from '../../assets/image1.png'
import Image2 from '../../assets/image2.png'
import Image3 from '../../assets/image3.png'
import Image4 from '../../assets/image4.png'
import Tick from '../../assets/tick.png'
import NB from '../../assets/nb.png'
import Nike from '../../assets/nike.png'
import Adidas from '../../assets/adidas.png'

const Reasons = () => {
    return (
        <div className="reasons" id="reasons">
            <div className="left-reasons">
                <img src={Image1} alt="" />
                <img src={Image2} alt="" />
                <img src={Image3} alt="" />
                <img src={Image4} alt="" />
            </div>
            <div className="right-reasons">
                <span>Some reasons</span>
                <div>
                    <span className='stroke-text' >Why </span>
                    <span>choose us?</span>
                </div>
                <div className="details">
                    <div>
                        <img src={Tick} alt="" />
                        <span>Over 140+ coaches </span>
                    </div>
                    <div>
                        <img src={Tick} alt="" />
                        <span>get trained faster and smarter</span>
                    </div>
                    <div>
                        <img src={Tick} alt="" />
                        <span>free programs for new members</span>
                    </div>
                    <div>
                        <img src={Tick} alt="" />
                        <span>reliable trainers and partners</span>
                    </div>
                </div>
                <span>OUR PARTNERS</span>
                <div className="partners">
                    <img src={NB} alt="" />
                    <img src={Nike} alt="" />
                    <img src={Adidas} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Reasons