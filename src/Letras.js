
import alfabeto from './alfabeto';

export default function Letras({props,setClickedButton,clickedButton,sortedWord,error,setError,gameWord,setGameWord,color,setColor}) {
    

    let i = 0;   

    function letterUsed(props){
        setClickedButton([...clickedButton,props])

        if(sortedWord.includes(props)){
            rightLetter(props); 
        }else{
            wrongLetter(props);
        }
    }   
    
    
   function wrongLetter(props){
    let wAnswers = error+1;
    setError(wAnswers)

    if(wAnswers === 6){
    setColor('red')
    endGame()
    }
   }
   function rightLetter(props){
    let array = [...gameWord]

    sortedWord.forEach((letra,i)=>{
        if(letra===props) {
            array[i] = props
        } 

    })
    setGameWord(array)
    if(!array.includes("_")){

    setColor('green')
    endGame()
    } 
   }
   function endGame(){
    setGameWord(sortedWord)
    setClickedButton(alfabeto)
}
    return (
       

        <div className="letter">
            {alfabeto.map((props) => (
            <button key={props[i]} 
             disabled={clickedButton.includes(props)}
             data-test="letter" 
             className="font" 
             onClick ={() =>letterUsed(props)}
             >
            {props[i].toUpperCase()}
            </button>))}

        </div>

    );
  
   

}



