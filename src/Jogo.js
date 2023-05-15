import forca0 from './assets/forca0.png'
import forca1 from './assets/forca1.png'
import forca2 from './assets/forca2.png'
import forca3 from './assets/forca3.png'
import forca4 from './assets/forca4.png'
import forca5 from './assets/forca5.png'
import forca6 from './assets/forca6.png'

import palavras from './palavras'

import { useState } from 'react'

const images = [forca0, forca1, forca2, forca3, forca4, forca5, forca6];

export default function Jogo() {
    let [error, setError] = useState(0)

    function startGame() {
        setError(0);
        sortWord()
    }
    
    function sortWord(){
    const i = Math.floor(Math.random() * palavras.length);
    console.log(palavras[i])
    }
    
    return(
        <div className="main">
            <div className="left">
                <img data-test="game-image" src={images[error]} alt ="forca"/>
            </div>
            <div className="right">
                
                <button data-test="choose-word" className="font" onClick={startGame}>Escolher Palavra</button>
                
                <div data-test="word" className="font escondido">_ _ abcuae_ _ _ _ _ _</div>
            </div>

        </div>
    );
}
