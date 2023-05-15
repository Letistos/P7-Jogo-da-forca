
import alfabeto from './alfabeto';

export default function Letras({props,setClickedButton,clickedButton}) {
    

    let i = 0;   

    function letterUsed(props){
        setClickedButton([...clickedButton,props])
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



