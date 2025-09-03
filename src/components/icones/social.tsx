import facebook from '../../images/facebook.png'
import twitter from '../../images/twitter.png'
import instagram from '../../images/instagram.png'

let icones = [facebook, twitter, instagram];

function SocialIcone () {
    return (
    <div className='icone-social'>
        {icones.map((icone) => <img src={icone} />)}
    </div>
)}
export default SocialIcone;