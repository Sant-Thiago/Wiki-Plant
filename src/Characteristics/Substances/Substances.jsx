import './Substances.css';

function Substances() {
    let thc;
    let cbd;

    function getSubstances() {
        thc = 23.4;
        cbd = 3.2;
    }

    getSubstances();
    return (
        <div className='containerSubstance'>
            <h2>{thc}% <span className='percent'>THC</span></h2>
            <h2>{cbd}% <span className='percent'>CBD</span></h2>
        </div>
    )
}

// SE QUISER MUDAR ALGO DE ACOROD COM A INTERAÇÂO DO USUARIO SE UTILIZA O USESTATE (USAR ESTADO)

// CASO QUEIRA APENAS DEFINIR VALORES PARA UTILIZAR NA LÓGICA UTILIZE VARIAVEIS NORMAIS

export default Substances;