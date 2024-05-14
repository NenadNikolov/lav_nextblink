import { Link } from 'react-router-dom';
/* import slika from './naslovna.jpg' */
import slika3sekcija from './pocetna2slika.png';
import checkirano from './check.png';


const pocetna = () => {
    const vodiONama = ()=>
    {
       <Link to="/onama"></Link>
    }
    return (  
        <div className="glavniDiv">
           {/*<img src={slika} alt="" className="glavnaslika" />*/}
        
            <h1>Higijena ljudi i prostora u kojem
        živite, naš je prioritet!</h1>
        <p className="glavniTekst">
        Agencija LAV pruža usluge čišćenja stambenih i poslovnih objekata na
         teritoriji grada Niša. Tim ljudi je tu da Vam pruži prijatno 
         iskustvo uz profesionalnu uslugu čišćenja visokog kvaliteta.
         Iskustvo, kvalitet i naša oprema je ono čime možemo da se pohvalimo a na Vama je da se u to i uverite...
        </p>

        <button className="saznajButton" onClick={vodiONama}> Saznajte više </button>

        <div className="drugaboja">
            <p>
                fafsa
            </p>
        </div>

        <div className="trecideopocetna">
            <div className="desno3sekcijapocetna">
            <h2 className="naslovpocetnatrecasekcija">
            Zašto baš mi?
            </h2>
            <p className="textpocetnatrecasekcija">Za uspeh naših usluga nisu zaslužni samo visok kvalitet i ljubaznost našeg osoblja, već i preporuke naših zadovoljnih klijenata</p>
       
            <div className="chekiraneprednosti" id="deo1">
                <img src={checkirano} alt="" className="slikacheck" />
                <p className="textchekiraneprednosti">
                Naša rešenja su kompletna
                </p>
            </div>

            <div className="chekiraneprednosti">
                <img src={checkirano} alt="" className="slikacheck"/>
                <p className="textchekiraneprednosti">
                Nama se veruje
                </p>
            </div>
            <div className="chekiraneprednosti">
                <img src={checkirano} alt="" className="slikacheck"/>
                <p className="textchekiraneprednosti">
                Brza i efikasna usluga
                </p>
            </div>

            <div className="chekiraneprednosti">
                <img src={checkirano} alt="" className="slikacheck"/>
                <p className="textchekiraneprednosti">
                Zagarantovan kvalitet
                </p>
            </div>

            <div className="chekiraneprednosti">
                <img src={checkirano} alt="" className="slikacheck"/>
                <p className="textchekiraneprednosti">
                Stručno opremljeni radnici
                </p>
            </div>

            <div className="chekiraneprednosti">
                <img src={checkirano} alt="" className="slikacheck"/>
                <p className="textchekiraneprednosti">
                Profesionalna oprema
                </p>
            </div>

            <div className="chekiraneprednosti">
                <img src={checkirano} alt="" className="slikacheck" />
                <p className="textchekiraneprednosti">
                Dostupnost informacija 24/7
                </p>
            </div>



            </div>
            <div className="levo3sekcijapocetna">
                <img src={slika3sekcija } alt="" />
            </div>
            </div>
        </div>
        

    );
}
 
export default pocetna;