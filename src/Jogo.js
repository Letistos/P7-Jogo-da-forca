export default function Jogo(){
    return(
        <div class="main">
            <div class="left">
                <img data-test="game-image" src="/assets/forca0.png" alt ="forca"/>
            </div>
            <div class="right">
                
                <button data-test="choose-word" class="font">Escolher Palavra</button>
                
                <div data-test="word" class="font">_ _ abcuae_ _ _ _ _ _</div>
            </div>

        </div>
    );
}