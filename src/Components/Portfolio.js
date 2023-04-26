import { useEffect, useState } from 'react'
import { dbRef } from '../firebase'
import { getDocs } from 'firebase/firestore'
import 'animate.css'

const Portfolio = () => {
    const [portfolioData, setPortfolioData] = useState([])

    useEffect(() => {
        getPortfolioData()
    }, [])

    const getPortfolioData = async () => {
        const querySnapshot = await getDocs(dbRef)
        console.log(querySnapshot)
        setPortfolioData(querySnapshot.docs.map((doc) => {
            return(
                doc.data()
            )
        }))
    }
    

    const renderPortfolio = (portfolio) => {
        return(
            <>
                {
                    
                    portfolio.map((port, idx) => {
                        return(
                            <div key={idx} className={`card-${idx} card w-full md:w-1/2 xl:w-1/3 px-5 mb-5 animate__animated animate__fadeInUp animate__duration-0.1s `}>
                                <div className='bg-gray-600 h-full flex flex-col p-5 rounded-xl'>
                                    <img className='shadow-none' src={port.imageURL} alt={port.itemName} />
                                    <h3 className='text-white text-2xl font-bold my-2'>{port.itemName}</h3>
                                    <p className='text-white mb-4'>{port.itemDescription}</p>
                                    <button onClick={() => window.open(port.itemLink)} className='bg-gray-800 hover:bg-gray-900 px-4 mt-auto text-white'>Read More</button>
                                </div>
                            </div> 
                        )
                    })
                    
                }
            </>
        )
    }


    return(
        <div className="flex flex-col items-center gap-10 portfolio-page p-10">

            <h1 className='animate__animated animate__fadeInDown text-white text-6xl'>Portfolio</h1>

            <div className='portfolio-loop my-5 flex flex-wrap -mx-5'>
                {
                    renderPortfolio(portfolioData)
                }
            </div>

        </div>
    )
}

export default Portfolio