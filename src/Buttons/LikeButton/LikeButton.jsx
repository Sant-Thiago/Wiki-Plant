import { useState } from 'react';
import './LikeButton.css';
import '../../App.css'

function LikeButton() {
    let styleButton;
    let likesPlant;
    let typeIcon;

    const [ativo, setAtivo] = useState(false);
    const [likes, setLikes] = useState(getLikesPlant());
    
    function getLikesPlant() {
        const plant = {
            likes: 32_512
        }
        return plant.likes;
    }
    
    
    function favorite() {
        setLikes(getLikesPlant());
        if (ativo) {
            setAtivo(false);
        } else {
            setLikes(likes + 1);
            setAtivo(true);
        }
    }

    return (
        <button 
            id='bttn' 
            className='containerBttn' 
            onClick={() => favorite()}
        >    
            <i className={ativo ? 'bi-heart-fill heart' : 'bi-heart heart'}></i>
            <p className='likes'>{likes.toLocaleString()}</p>
        </button>
    )
}

export default LikeButton;