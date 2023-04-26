import { signOutUser, dbRef, storage } from '../firebase'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import{ addDoc } from 'firebase/firestore'
import { useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

const Account = () => {

    const form = useRef([])//destructures URL query string form form into a JS array for use

    const [progress, setProgress] = useState('');
    const [disabled, setDisabled] = useState('');

    const submitPortfolio = (event) => {
        event.preventDefault()
        
        setDisabled(true)
        setProgress('')

        const image = form.current[0].files[0]

        const storageRef = ref(storage, `portfolio/${image.name}`)

        setProgress('Uploading image...')
        

        //wait for return URL
        uploadBytes(storageRef, image)
            .then((snapshot) => {
                console.log(snapshot.ref)
                getImageURLFromUpload(snapshot.ref)
            })
            .catch((error) => {
                setProgress('Storage error: '+error)
                console.log(error)
            })
            
    }

    const getImageURLFromUpload = (snapRef) => {
        getDownloadURL(snapRef)
            .then((downloadURL) => {
                savePortfolioToDatabase(downloadURL)
            })
            .catch((error) => {
                setProgress('Storage error: '+error)
                setDisabled(false)
            })
    }

    const savePortfolioToDatabase = (imageURL) => {
        const portfolioItem = {
            imageURL: imageURL,
            itemName: form.current[1].value,
            itemDescription: form.current[2].value,
            itemLink:form.current[3].value
        }

        setProgress('Saving data...')

        addDoc(dbRef, portfolioItem)
            .then((documentRef) => {
                form.current.reset()
                setDisabled(false)
                setProgress('')
                console.log('Document has been created', documentRef)
            })
            .catch((error) => {
                console.log(error)
                setProgress('Database error: '+error)
                setDisabled(false)
            }) 

    }

        
    

    return(
        <div className='flex flex-col gap-10 justify-center items-center h-screen'>
            <h1 className="animate__animated animate__fadeInDown text-white text-6xl">Account</h1>
            
        
            <form className='my-5 flex flex-col w-80' ref={form} onSubmit={submitPortfolio}>
                <input type='file' placeholder='Image'  className='mb-4 text-black h-10 rounded-10 rounded-lg pl-2'/>
                <input type='text' placeholder='Project Name'  className='mb-4 text-black h-10 rounded-10 rounded-lg pl-2' />
                <input type='text' placeholder='Description'  className='mb-4 text-black h-10 rounded-10 rounded-lg pl-2' />
                <input type='text' placeholder='Link URL'  className='mb-4 text-black h-10 rounded-10 rounded-lg pl-2' />

                <button type='submit' className='mt-4 bg-gray-400 px-3 h-10 rounded-lg'>Submit</button>
            </form>
            <button className='mt-20 bg-gray-400 px-3' onClick={signOutUser}>Logout</button>

            <div>
                <FontAwesomeIcon icon={faSpinner} className={`${disabled ? 'inline' : 'hidden'} animate-spin w-5`}/>
                <span className='ml-3'>{ progress }</span>
            </div>
        </div>
    )
}

export default Account