import React from 'react'
import MoreBlog from '../components/moreblog'
import ContactForm from '../components/ContactForm'
import Game1 from '../components/Game1'
import Game2 from '../components/Game2'
import Game3 from '../components/Game3'
import Game4 from '../components/Game4'
import Game5 from '../components/Game5'
import Game6 from '../components/Game6'
import Gamehero from '../components/Gamehero'

const Game = () => {
    return (
        <div>
            <Gamehero />
            <Game1 />
            <Game2 />
            <Game3 />
            <Game4 />
            <Game5 />
            <Game6 />
            <MoreBlog />
            <ContactForm />
        </div>
    )
}

export default Game
