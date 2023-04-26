import { React } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3, faReact, faGithub, faJsSquare } from '@fortawesome/free-brands-svg-icons'
import 'animate.css'

import 'animate.css'

const Contact = () => {
    return(
        <div className="flex flex-col gap-10 justify-center items-center h-screen">
            <h1 className="animate__animated animate__fadeInDown text-white text-6xl">Contact</h1>

            {/*form spree contact form. works as expected*/}
            <form className='flex flex-col w-80' action="https://formspree.io/f/xeqwvvpe" method="post">
                <label className='text-white text-xl flex justify-between'>
                    Name:
                    <input type='text' placeholder='' name="Name" className='mb-4 text-black h-10 rounded-10 rounded-lg pl-2' />
                </label>

                <label className='text-white text-xl flex justify-between'>
                    Email:
                    <input type='email' placeholder='' name="Email" className='mb-4 text-black h-10 rounded-10 rounded-lg pl-2' />
                </label>

                <label className='text-white text-xl flex justify-between'>
                    Phone:
                    <input type='number' placeholder='' name="Phone" className='mb-4 text-black h-10 rounded-10 rounded-lg pl-2' />
                </label>

                <textarea type='text-area' placeholder='Message' rows="4" name="Message" className='mb-4 text-black rounded-lg pl-2' />
                

                <button type='submit' className='mt-4 bg-gray-400 px-3 h-10 rounded-lg'>Submit</button>

            </form>

            {
                //some language branding icons for some visual syle
            }
             <div className='language-icons flex gap-10 mx-4 flex-wrap justify-center'>
                <FontAwesomeIcon className='text-white text-6xl animate__animated animate__fadeIn' icon={faHtml5} />
                <FontAwesomeIcon className='text-white text-6xl animate__animated animate__fadeIn' icon={faCss3} />
                <FontAwesomeIcon className='text-white text-6xl animate__animated animate__fadeIn' icon={faJsSquare} />
                <FontAwesomeIcon className='text-white text-6xl animate__animated animate__fadeIn' icon={faReact} />
                <FontAwesomeIcon className='text-white text-6xl animate__animated animate__fadeIn' icon={faGithub} />
            </div>
        </div> 
    )
}

export default Contact