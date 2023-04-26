import AnimatedLetters from './AnimatedLetters'

const Account = () => {
    return(
        <div className="not-found-page">
        <AnimatedLetters strArray={'Sorry 404 Not Found'.split('')} customData={'404'} />
    </div>
    )
}

export default Account