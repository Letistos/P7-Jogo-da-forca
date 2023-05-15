
import { useState } from 'react';
import alfabeto from './alfabeto';
import Jogo from './Jogo'
import Letras from './Letras'
import './style.css'


export default function App() {

    let [clickedButton, setClickedButton]= useState(alfabeto);
    let [error, setError] = useState(0)
    let [sortedWord, setSortedWord] = useState([]) ;
    let [gameWord,setGameWord] = useState([]);
    let [color,setColor]=useState("start");

    return (

        <div className="app">

            <Jogo 
            setClickedButton={setClickedButton}
            setError={setError} 
            setGameWord={setGameWord} 
            error={error} 
            gameWord={gameWord}
            setSortedWord={setSortedWord} 
            sortedWord={sortedWord}
            color={color}
            setColor={setColor}
            
            
            />

            <Letras 
            clickedButton={clickedButton} 
            setClickedButton={setClickedButton}
            sortedWord={sortedWord}
            error={error}
            setError={setError}
            gameWord={gameWord}
            setGameWord={setGameWord}
            setColor={setColor}
            color={color}
            />

        </div>

    );

    
}

