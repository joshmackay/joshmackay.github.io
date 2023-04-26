import { faIgloo, faAddressCard, faBookJournalWhills, faEnvelopeOpenText, faUser} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Link, NavLink} from 'react-router-dom'
import { faDev } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin, faTwitter, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'

const Navigation = () => {
    return(
        <div className="hidden
                        sm:flex sm:h-[100vh] sm:w-14 sm:fixed sm:top-0 sm:left-0 sm:p-3 sm:flex-col sm:justify-center sm:shadow-xl sm:shadow-teal-400 sm:z-90">
            <Link className="logo mb-auto" to="/">
                <FontAwesomeIcon icon={faDev} className="text-teal-400 text-4xl w-full"/>
            </Link>
            <nav  className="   mb-auto flex 
                                sm:flex-col">
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

            <ul className='flex flex-row 
                            sm:flex-col'>
                <li>
                    <a href="https:www.linkedin.com">
                        <FontAwesomeIcon icon={faLinkedin} className="text-white hover:text-teal-400 my-4 w-full" />
                    </a>
                </li>
                <li>
                    <a href="https:www.twitter.com">
                        <FontAwesomeIcon icon={faTwitter} className="text-white hover:text-teal-400 my-4 w-full" />
                    </a>
                </li>
                <li>
                    <a href="https:www.instagram.com">
                        <FontAwesomeIcon icon={faInstagram} className="text-white hover:text-teal-400 my-4 w-full" />
                    </a>
                </li>
                <li>
                    <a href="https:www.github.com/joshmackay">
                        <FontAwesomeIcon icon={faGithub} className="text-white hover:text-teal-400 my-4 w-full" />
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Navigation