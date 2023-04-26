import './index.css'

const AnimatedLetters = ({strArray}) => {
    return(
        <span>
            {
                strArray.map( (char, idx) => {
                    return(
                        <span className="text-animate" key={idx} style={{animationDelay: `${(idx/10)+1}s`}}>{char}</span>
                    )
                })
            }
        </span> 
    )
}

export default AnimatedLetters;