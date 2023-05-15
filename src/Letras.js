import alfabeto from './alfabeto';

export default function Letras(props) {
    let i = 0;
    
    return (

        <div className="letter">
            {alfabeto.map((props) => (<button key={props[i]}  disabled={true}  data-test="letter" className="font">{props[i].toUpperCase()}</button>))}
        </div>

    );
}



