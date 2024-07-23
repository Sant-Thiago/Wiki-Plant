import './BarSocialMedia.css';
import LikeButton from '../../Buttons/LikeButton/LikeButton'
import ShareButton from '../../Buttons/ShareButton/ShareButton'

function BarSocialMedia() {
    return (
        <div className='containerBarSocialMedia'>
            <ShareButton/>
            <LikeButton/>
        </div>
    )
}

export default BarSocialMedia;