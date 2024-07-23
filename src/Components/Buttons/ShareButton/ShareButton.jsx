import './ShareButton.css';

function ShareButton() {
    return (
        <div className='containerShareButton'>
            <i className='bi-send-arrow-down share'></i>
            {/* <p className='likes'>{likes.toLocaleString()}</p> */}
        </div>
    )
}

export default ShareButton;