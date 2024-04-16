const Kontakt = () => {
    return ( 
        <div className="kontaktDiv">
            <p className="headersvih">Kljuc je u dobroj komunikaciji</p>
            
        
        <h2>Kontakt forma</h2>
        <form >
            <label className="svelabele">
                Ime
            </label>
            <input type="text" className="sviinputi" />
            <label className="svelabele">
                Prezime
            </label>
            <input type="text" className="sviinputi" />
            <label className="svelabele">
                Email
            </label>
            <input type="mail" className="sviinputi" />
            <label className="svelabele">
                Poruka
            </label>
            <textarea></textarea>
            <button>Posalji</button>
        </form>


        </div>
     );
}
 
export default Kontakt;