import {NavLink } from 'react-router-dom';
import SairIcone from '../icones/Sair';

function SairButton () {
    return (
    <div className='w-8 flex mr-2'>
        <nav>
        <NavLink to="/app/dashboards" className="settingsSair text-2xl flex"><SairIcone/>Sair</NavLink>
        </nav>
    </div>
)}
export default SairButton;