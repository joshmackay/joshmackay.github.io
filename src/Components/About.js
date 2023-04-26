import TerminalWindow from "./TerminalWindow"
import info from "../info/info"

const About = () => {


    //The following 4 functions return the text content for each of the 4 temrinal window components on the about page
    //information is pulled from 'info' file
    
    function heading(){
        return(
            <>
                <span className="text-lime-500">joshmackay $</span> cd Documents/<h1 className="text-2xl my-2 inline">about</h1>
            </>
        )
    }

    function aboutText(bio){
        return(
            <>
                <p className='text-2xl'><span className="text-lime-500">joshmackay about $ </span>cd bio</p>
                <p className='text-2xl'><span className="text-lime-500">joshmackay bio $ </span><br />{bio}</p>
            </>
        )
    }

    
    function skillsText(skills) {
        return(
            <>
                
                <p className='text-2xl my-2'><span className="text-lime-500">joshmackay bio $ </span>cd ../skills</p>
                <p className='text-2xl my-2'><span className="text-lime-500">joshmackay skills $ </span></p>
                <p className="my-6">proficient:</p>
                <ul>
                    {skills.proficient.map((element, id) => {
                        return(
                            <li key={id} className='text-white text-2xl mb-2'>
                                <span className='!inline-block'>-{element}</span> 
                            </li>
                        )
                    })}
                </ul>
                <p className="my-6">exposure:</p>
                <ul className="my-6">
                    {skills.studying.map((element, id) => {
                        return(
                            <li key={id} className='text-white text-2xl mb-2'>
                                <span className='!inline-block'>-{element}</span> 
                            </li>
                        )
                    })}
                </ul>         
            </>
        )
        
    }

    function hobbiesText(hobbies){
        return(
            <>
            
                <p className='text-2xl my-2'><span className="text-lime-500">joshmackay bio $ </span>cd ../hobbies</p>
                <p className='text-2xl my-2'><span className="text-lime-500">joshmackay hobbies $ </span></p>
                <ul className="my-6">
                    {hobbies.map((element, id) => {
                        return(
                            <li key={id} className='text-white text-2xl mb-2'>
                                <span className='!inline-block'>-{element}</span> 
                            </li>
                        )
                    })}
                </ul>  
            </>
        )
        

    }

    //this function returns the about page.  All it is rendering is the 4 terminal window components where the text is generated by the above functions
    //the width is passed in as a prop for the terminal window
    return(
        <div className="home-page flex flex-col items-center gap-10 py-10 animate__animated animate__fadeInUp">
            <TerminalWindow width='w-[90%] sm:[max-width:700px]' text={heading()}/>
            <TerminalWindow width='w-[90%] sm:[max-width:700px]' text={aboutText(info.bio)}/>
            <TerminalWindow width='w-[90%] sm:[max-width:700px]' text={skillsText(info.skills)}/>
            <TerminalWindow width='w-[90%] sm:[max-width:700px]' text={hobbiesText(info.hobbies)}/>
        </div>
    )
}

export default About