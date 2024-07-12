import './Bar.css';
import { useEffect, useState } from 'react';
import $ from 'jquery';

function Bar() {
    // {barColor, progressColor}
    // document.getElementById("bar").style.borderColor = barColor;
    // document.getElementById("progress").style.backgroundColor = progressColor;
    const [processBar, setProcessBar] = useState(40);
    
    // useEffect serve para executar algo depois que o react renderiza o dom
    useEffect(() => {
        $('.progress').css('width', `${processBar}%`)
    })

    return (
        <div>
            {/* <div className='effects'>
                <p className='calm'>calm</p>
                <p className='energy'>energy</p>
            </div> */}
            <div 
                id='bar' 
                className='bar'
            >
                <div 
                    id='progress'
                    className='progress'>
                </div>
            </div>
        </div>    
    )
}

export default Bar;