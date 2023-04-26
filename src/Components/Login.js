import { signInWithEmail } from '../firebase'
//import AnimatedLetters from './AnimatedLetters'
//import { registerNewUser } from '../firebase'
import { useState } from 'react'

const Login = () => {

    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')

    function updateEmail(event){
        setEmail(event.target.value)
    }

    function updatePassword(event){
        setPassword(event.target.value)
    }

    function logUserIn(event){
        event.preventDefault();
        signInWithEmail(email, password)
    }

    return(
  

            <div className='flex flex-col gap-10 justify-center items-center h-screen'>

                <h1 className='animate__animated animate__fadeInDown text-white text-6xl'>Login</h1>
                <form className='login my-5 flex flex-col w-80'>
                    
                    
                    <input className='mb-4 text-black h-10 rounded-10 rounded-lg pl-2' type='text' placeholder="Email" value={email} onChange={updateEmail}></input>
                    <input className='mb-4 text-black h-10 rounded-10 rounded-lg pl-2' type='password' placeholder="Password" value={password} onChange={updatePassword}></input>
                    <input className='mt-4 bg-gray-400 px-3 h-10 rounded-lg' type="submit" value="submit"  onClick={logUserIn} />
                   
                </form>

                
            </div>
       
    )
}

export default Login