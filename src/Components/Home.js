import 'animate.css'
import profileImg from '../images/profile-img.jpg'
import info from '../info/info.js'
import TerminalWindow from './TerminalWindow'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { type } from './TerminalWindow'

const Home = () => {

    
    //this function pulls the data from the info.js file
    //i have included a map() function to render the list items
    //these elements are sent back to the terminalWindow component
    function introBio() {
        return(
            <>
                <h1 className='text-white text-2xl sm:text-3xl my-4'>{type(info.homeIntro[0].h1)}</h1>
                <h2 className='text-white text-xl sm:text-2xl my-4'>{type(info.homeIntro[0].h2)}</h2>

                <ul>
                    {info.homeIntro[1].map((element, id) => {
                        return( 
                            
                                <li key={id} className='text-white text-xl mb-2'>
                                    <hr className=' h-[2px] sm:hidden' />
                                    <FontAwesomeIcon icon={element.emoji} className="hidden sm:inline sm:ml-4" fixedWidth /> 
                                    <span className='!inline-block sm:ml-4'>{type(element.info)}</span> 
                                </li>
                            
                        )
                    })}
                </ul>
            </>
        )
    }

    //home returns a div with the image and border gradient effect, and the terminal window component
    
    return(
        <div className="flex flex-col w-full gap-10 justify-center items-center gap-x-10 h-[100vh] box-border
                        sm:max-[1200px]:flex-col sm:min-[1201px]:flex-row ">
            
            
            <div className='m-10 bg-gradient-to-bl from-teal-400 to-pink-500 rounded-full p-4 shadow-2xl shadow-slate-950 animate__animated animate__fadeIn'>
                <img src={profileImg} alt="" className="rounded-full " />
            </div>
            
            <div className="w-full animate__animated animate__fadeInRight mb-10 px-2
                            sm:w-auto">
                <TerminalWindow width="min-w-full m-auto sm:w-[520px]" text={introBio()} />     
            </div>
                  
        </div>
        
    )
}


export default Home