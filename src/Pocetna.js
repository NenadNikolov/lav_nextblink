import slika from './naslovna.jpg'
const pocetna = () => {
    const vodiONama = ()=>
    {
        console.log('odveo me jedan mangup')
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
        </div>
        

    );
}
 
export default pocetna;