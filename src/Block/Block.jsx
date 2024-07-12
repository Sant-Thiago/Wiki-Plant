import { useState } from 'react';
import './Block.css';
import '../App.css'

function Block() {

    const [blocks, setBlocks] = useState([0, 1, 2, 3]);

    return (
        <div className='containerBlock'>
            {
                blocks.map((index, valor) => (
                    <p className='block' key={index}>{valor}</p>
                ))
            }
        </div>
    )
}

export default Block;
