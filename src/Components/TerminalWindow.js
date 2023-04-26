import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import Typewriter from 'typewriter-effect'


//this function creates the typewriter function sen on the home page.
//decided to make this a funciton for export as i didn't want it on every terminalwindow component
//this is an API, I have set the methods and options to my desired settings
//had trouble getting the effect going line by line within the terminal window, something for another time
export function type(text) {
    return(
        <Typewriter 
            onInit={(typewriter) => {
                typewriter.typeString(`${text}`)
                .pauseFor(500)
                .callFunction(function(state) {
                    state.elements.cursor.style.display = 'none';
                })
                .start();
            }}
            options={
                {
                    skipAddStyles: true,
                    delay: 90
                }
            }
        />
    )
}

//returns the terminal window component.
//2 props are passed, one is the width of the component and one is the text to be displayed.
const TerminalWindow = (props) => {

    return(
        <div className={`shadow-2xl shadow-slate-950 ${props.width}`}>
            <div className="bg-neutral-500 px-2 rounded-t-lg w-full">
                <FontAwesomeIcon icon={faCircle} color='#FF605C' className='mr-2 py-3'/>
                <FontAwesomeIcon icon={faCircle} color='#FFBD44' className='mr-2 py-3'/>
                <FontAwesomeIcon icon={faCircle} color='#00CA4E' className='mr-2 py-3'/>
            </div>
            <div className='bg-zinc-800 overflow-auto p-6'>
                <span className='font-[monospace] text-white text-2xl'>
                    {props.text}
                </span>
            </div>
        </div>
    )
}

export default TerminalWindow