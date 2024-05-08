 
import slikazaposlise from './mopovi.png'
 const ZaposliSe = () => {
    return (  
        <div className="zaposlisediv">
            <div className="prvidivzaposlise">
            <div className="levozaposlise">
            <p className="headersvih">POTREBAN VAM JE POSAO?</p>
            <h1 className="naslovZaposlise">Budite deo LAV tima</h1>
            <p className="textzaposlise">
            Prijavite se za posao brzo, lako i jednostavno.
            Sve što je potrebno da uradite je da popunite formu koja se nalazi na stranici niže, i to je sve.
            </p>
            </div>
            <div className="desnozaposlise">
                <img src={slikazaposlise} alt="" className="slikazaposlise" />
            </div>
            </div>
            <div className="prijaviseforma">

                <p className="naslovprijavise">
                    Prijava za posao
                </p>

            <form className='formazaposlise'>
            <label className="svelabele">
                Ime
            </label>
            <input type="text" className="sviinputi" />
            <label className="svelabele">
                Prezime
            </label>
            <input type="text" className="sviinputi" />
            <label className="svelabele">
                Telefon
            </label>
            <input type="text" className="sviinputi" />
            <label className="svelabele">
                Email
            </label>
            <input type="mail" className="sviinputi" />
         
            <button>Posalji</button>
        </form>
            </div>

          
        </div>
    );
}
 
export default ZaposliSe;