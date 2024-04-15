import myLogo from './logo.png';
const Navbar = () => {
    return (  
        <nav className="navbar">
               
            <div className="logo">
                <img src={myLogo} alt="" />
            </div>
               <div className="links">
                <a href="/">Pocetna</a>
                <a href="/">O nama</a>
                <a href="/">Usluge</a>
                <a href="/">Kontakt</a>
                <a href="/">Zaposli se</a>
               </div>
        </nav>
     
        
    );
}
 
export default Navbar;