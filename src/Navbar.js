import myLogo from './logo.png';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (  
        <nav className="navbar">
               
            <div className="logo">
                <img src={myLogo} alt="" />
            </div>
               <div className="links">
                <Link to="/">Pocetna</Link>
                <Link to="/onama">O nama</Link>
                <Link to="/usluge">Usluge</Link>
                <Link to="/kontakt">Kontakt</Link>
                <Link to="/zaposlise">Zaposli se</Link>
               </div>
        </nav>
     
        
    );
}
 
export default Navbar;