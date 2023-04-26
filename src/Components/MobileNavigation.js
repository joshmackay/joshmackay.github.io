import { useState } from 'react'
import { faIgloo, faAddressCard, faBookJournalWhills, faEnvelopeOpenText, faUser} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Link, NavLink} from 'react-router-dom'
import { faDev } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin, faTwitter, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const MobileNavigation = () => {


    let [menuIsOpen, setMenuIsOpen] = useState(false)

    function toggleMenu(){
        menuIsOpen ? setMenuIsOpen(false) : setMenuIsOpen(true)
        }
    

    //i created an addition mobile navigation component for mobile devices, it's the same as the main one with different styling
    //the hamburger icon toggles the menuIsOpen variable and toggles class name on line 29 with the toggleMenu function
    //I have also applied a transition for a slide in effect
    return(
        <div className='z-30 relative sm:hidden'>
            <div className="z-20 relative nav-bar-mobile px-4 h-12 w-full bg-gray-900 flex justify-between
                            sm:hidden">
                <Link className="logo-mobile my-auto" to="/">
                    <FontAwesomeIcon icon={faDev} className="text-teal-400 text-4xl w-full"/>
                </Link>
                
                <FontAwesomeIcon icon={faBars} onClick={toggleMenu} className=' burger text-white hover:text-teal-400 my-auto text-2xl'/>
            </div>

            <div className={`${menuIsOpen ? 'top-[48px]' : '-top-[144px]'} absolute z-10 mobile-menu w-full transition-all`}>

                <nav  className="  bg-gray-900 mb-auto flex w-full h-12 justify-around">
                    <NavLink exact="true" activeclassname="active" to="./">
                        <FontAwesomeIcon icon={faIgloo} className="text-white hover:text-teal-400 my-4 text-2xl w-full"/>
                    </NavLink>

                    <NavLink exact="true" activeclassname="active" to="./about">
                        <FontAwesomeIcon icon={faAddressCard} className="text-white hover:text-teal-400 my-4 text-2xl w-full" />
                    </NavLink>

                    <NavLink exact="true" activeclassname="active" to="./portfolio">
                        <FontAwesomeIcon icon={faBookJournalWhills}  className="text-white hover:text-teal-400 my-4 text-2xl w-full" />
                    </NavLink>

                    <NavLink exact="true" activeclassname="active" to="./contact">
                        <FontAwesomeIcon icon={faEnvelopeOpenText}  className="text-white hover:text-teal-400 my-4 text-2xl w-full" />
                    </NavLink>
                    <NavLink exact="true" activeclassname="active" to="./dashboard">
                        <FontAwesomeIcon icon={faUser}  className="text-white hover:text-teal-400 my-4 text-2xl w-full" />
                    </NavLink>
                </nav>

                <ul className='z-10 flex flex-row bg-gray-900 w-full justify-around h-12'>
                    <li>
                        <a href="https:www.linkedin.com">
                            <FontAwesomeIcon icon={faLinkedin} className="text-white hover:text-teal-400 my-4 w-full text-2xl" />
                        </a>
                    </li>
                    <li>
                        <a href="https:www.twitter.com">
                            <FontAwesomeIcon icon={faTwitter} className="text-white hover:text-teal-400 my-4 w-full text-2xl" />
                        </a>
                    </li>
                    <li>
                        <a href="https:www.instagram.com">
                            <FontAwesomeIcon icon={faInstagram} className="text-white hover:text-teal-400 my-4 w-full text-2xl" />
                        </a>
                    </li>
                    <li>
                        <a href="https:www.github.com/joshmackay">
                            <FontAwesomeIcon icon={faGithub} className="text-white hover:text-teal-400 my-4 w-full text-2xl" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default MobileNavigation