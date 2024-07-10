import { useState } from 'react';
import './Substances';

function Substances() {
    let thc;
    let cbd;

    function getSubstances() {
        thc = 23.4;
        cbd = 7.2;
    }

    getSubstances();
    return (
        <div>
            <h2>THC {thc}</h2>
            <h2>CBD {cbd}</h2>
        </div>
    )
}

// SE QUISER MUDAR ALGO DE ACOROD COM A INTERAÇÂO DO USUARIO SE UTILIZA O USESTATE (USAR ESTADO)

// CASO QUEIRA APENAS DEFINIR VALORES PARA UTILIZAR NA LÓGICA UTILIZE VARIAVEIS NORMAIS

export default Substances;