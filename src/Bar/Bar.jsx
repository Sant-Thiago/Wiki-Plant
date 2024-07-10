import './Bar.css';

function Bar() {
    return (
        <div>
            <div className='effects'>
                <p className='calm'>calm</p>
                <p className='energy'>energy</p>
            </div>
            <div 
                id='bar' 
                className='bar'
            >
                <div 
                    id='progress'
                    className='progress'>
                        
                </div>
            </div>
            <span>barra</span>
        </div>    
    )
}

export default Bar;