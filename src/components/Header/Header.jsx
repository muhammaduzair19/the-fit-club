import React, { useState } from 'react'
import './header.css'
import Logo from '../../assets/logo.png'
import Bars from '../../assets/bars.png'
import { Link } from 'react-scroll'


const Header = () => {
    const mobile = window.innerWidth <= 768 ? true : false;
    const [open, setOpen] = useState(false)

    return (
        <div className="header">
            <img src={Logo} alt="" className="logo" />
            {
                (open === false && mobile === true) ?
                    (
                        <div
                            onClick={() => setOpen(true)}
                            style={{
                                backgroundColor: "var(--appColor)", padding: '0.5rem', borderRadius: '5px'

                            }}
                        >
                            <img
                                src={Bars}
                                alt=""
                                style={{
                                    width: '1.5rem',
                                    height: '1.5rem'
                                }}
                            />
                        </div>
                    ) : (
                        <ul>
                            <li>

                                <Link
                                    onClick={() => setOpen(false)}
                                    activeClass='active'
                                    to='header'
                                    span={true}
                                    smooth={true}
                                >
                                    Home
                                </Link>
                            </li>
                            <li>

                                <Link
                                    onClick={() => setOpen(false)}
                                    activeClass='active'
                                    to='programs'
                                    span={true}
                                    smooth={true}
                                >
                                  Programs  
                                </Link>
                            </li>
                            <li>

                                <Link
                                    onClick={() => setOpen(false)}
                                    activeClass='active'
                                    to='reasons'
                                    span={true}
                                    smooth={true}
                                >
                                    Why us
                                </Link>
                            </li>
                            <li>

                                <Link
                                    onClick={() => setOpen(false)}
                                    to='plans'
                                    span={true}
                                    smooth={true}
                                >
                                    Plans
                                </Link>
                            </li>
                            <li>

                                <Link
                                    onClick={() => setOpen(false)}
                                    to='testimonials'
                                    span={true}
                                    smooth={true}
                                >
                                    Testimonials
                                </Link>
                            </li>

                        </ul>
                    )
            }

        </div>
    )
}

export default Header