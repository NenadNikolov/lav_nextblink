import slika from './onamakrug.png'

const ONama = () => {
    return ( 
        <div className="onamaDiv">
        <p className="headersvih">Deo nase price</p>
        <h1>O nama</h1>
        <p className="glavniTekst">
        Agencija <span className="blue-text">LAV </span>pruža usluge čišćenja stambenih i poslovnih objekata na teritoriji grada Niša. 
        Tim ljudi je tu da Vam pruži prijatno iskustvo<span className="blue-text"> uz profesionalnu uslugu </span> čišćenja visokog kvaliteta. 
        Iskustvo, kvalitet i naša oprema je ono čime možemo da se pohvalimo a na Vama je da se u to i uverite.
         Agencija LAV je posvećena pružanju usluga visokog kvaliteta u polju čišćenja objekata sa posebnim uslugama koje nudimo 
         i po tome znamo da smo<span className="blue-text"> JEDINSTVENI</span>.
         Usluge čišćenja su Vam na raspolaganju <span className="blue-text">365 dana godišnje </span> .
        </p>
        <div className="onamaDrugidiv">
            <img src={slika} alt="" className="krugslika"/>
            <div className="sekcijaTextONama">
        <p className="onamaDrugiTekst">
        Potrebno je samo da nas pozovete i ukažete nam Vaše poverenje, 
        a mi ćemo umesto Vas učiniti da Vaš prostor bude čist i blistav. 
        Pružanjem kvalitenih usluga pridobili smo poverenje velikog broja klijenata kako kod fizičkih tako i kod pravnih lica. 
        Zadovoljni klijenti su naš prioritet.
        </p>
        <p className="boldovaniText">Budite i vi deo njih</p>
        <button className="uslugeOnamabutton">Usluge</button>
        </div>
        </div>
       
        </div>
     );
}
 
export default ONama;