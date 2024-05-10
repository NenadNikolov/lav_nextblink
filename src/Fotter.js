
import { Link } from "react-router-dom";
import slika from './logo.png';
import insta from './ig.png';
import face from './facebook.png';

const Footer = () => {
    return (
        <div className="footerglavnidiv">

          <div className="gorefooter">

          <div className="logofooter"> <img src={slika} alt="" className="slikafooter"/></div>
          <div className="prvasekcijafooter">
            <h2> Istrazi</h2>
                <Link to="/" className="footerlinks">Pocetna</Link>
                <Link to="/onama" className="footerlinks">O nama</Link>
                <Link to="/usluge" className="footerlinks">Usluge</Link>
                <Link to="/kontakt" className="footerlinks">Kontakt</Link>
                <Link to="/zaposlise" className="footerlinks">Zaposli se</Link> 
              </div>
              <div className="drugasekcijafooter">
                <h2>Usluge</h2>
                <p className="footertext">Ciscenje stambenih zgrada</p>
                <p className="footertext">Čišćenje poslovnih prostora</p>
                <p className="footertext">Mašinsko čišćenje garaža</p>
                <p className="footertext">Održavanje zelenila</p>
                <p className="footertext">Čišćenje snega</p>
              </div>
              <div className="trecasekcijafooter">
              <h2>Kontakt</h2>
                <p className="footertext"><span className="podebljantext">Adresa: </span>Stevana Nemanje 30, Niš</p>
                <p className="footertext"><span className="podebljantext">Mail: </span> tdamljanovic@yahoo.com</p>
                <p className="footertext"><span className="podebljantext">Telefon: </span> +381 62 1932980</p>
                <p className="footertext"><span className="podebljantext">Pib: </span> 112877611</p>
                <p className="footertextposeban"><span className="podebljantext">Mb: </span>66414434</p>
                <div className="socijalnediv">
                  
                <div className="socijalnemreze">
                <Link to="https://www.instagram.com/lav_agencija/" className="linkprekodiva"></Link>
                  <img src={insta} alt="" className="ikonicasocijalne" />
                </div>
                <div className="socijalnemreze">
                <Link to="https://www.facebook.com/LAVagencijazaciscenje" className="linkprekodiva"></Link>
                  <img src={face} alt="" className="ikonicasocijalne"/>
                  </div>
              </div>
              </div>
          </div>


          <div className="dolefooter">

          <p className="dolefootertext">2024 Lav, agencija za čišćenje. All rights reserved | Powered by: Nenad Nikolov</p>

          </div>

        </div>
      );
}
 
export default Footer;