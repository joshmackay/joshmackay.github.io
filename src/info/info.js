import { faLocationDot, faCode, faPaintBrush, faAt } from '@fortawesome/free-solid-svg-icons'


const info = {
    firstName: 'Josh',
    lastName: 'MacKay',
    profession: 'Font-end developer',

    homeIntro: [
        { 
            h1: `Hi, I'm Josh `,
            h2: 'I\'m a front-end developer.'
        },
        [
            {
                emoji: faLocationDot ,
                info: 'based in Geelong, Australia'
            },
            {
                emoji: faCode,
                info: 'front-end developer'
            },
            {
                emoji: faPaintBrush,
                info: 'airbrush artist'
            },
            {
                emoji: faAt,
                info: 'let\'s chat!'
            }
        ]
    ],

    bio: 'Hello! I\'m Josh, a front-end developer based in Geelong, Australia.  I love learning web based languages and I am currently studying JS, React and Tailwind CSS.',

    skills: {
        proficient: ['html', 'css', 'js'],
        studying: ['js', 'react', 'tailwind css']
    },

    hobbies: ['airbrushing', 'motorcycles', 'coding', 'movies', 'gaming', 'travel', 'spanish'],

    portfolio: [
        {
            title: '',
            image: '',
            source: '',
            live: ''
        },
        {
            title: '',
            image: '',
            source: '',
            live: ''
        },
        {
            title: '',
            image: '',
            source: '',
            live: ''
        },
        {
            title: '',
            image: '',
            source: '',
            live: ''
        },
        {
            title: '',
            image: '',
            source: '',
            live: ''
        },
        {
            title: '',
            image: '',
            source: '',
            live: ''
        },
    ]
}

export default info