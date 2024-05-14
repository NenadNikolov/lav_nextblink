
import slikazausluge from './uslugeslika.png';
import prvausluge from './prvausluge.png';
import drugausluge from './drugausluge.png';
import trecausluge from './trecausluge.png';
import cetvrtausluge from './cetvrtausluge.png';
import petausluge from './petausluge.png';


const Usluge = () => {
    return (  
        <div className="uslugeDiv">
        
        <div className="prvidivusluge">
            <div className="desnouslugediv">
                <p className="headersvih">ZADOVOLJSTVO KAO PARAMETAR USPEHA</p>
                <h1 className="naslovUsluge">Usluge koje nudimo</h1>
                    <p className="textUsluge">
                    Agencija LAV je posvećena pružanju usluga visokog kvaliteta u polju čišćenja objekata sa posebnim uslugama koje 
                    nudimo i po tome znamo da smo <span className="blue-text">JEDINSTVENI</span>.Usluge čišćenja su Vam na raspolaganju 365 dana godišnje.
                    </p>
            </div>
             <div className="levouslugediv">
                    <img src={slikazausluge} alt="" className="slikausluge" />
            </div>
        </div>

        <div className="sekcijausluga">

            <div className="neparnasekcija">
                <div className="desnodrugasekcijausluge">
                    <p className="naslovuslugedrugasekcija">
                    Čišćenje stambenih zgrada
                    </p>
                    <p className="textispodnaslovadrugesekcije">
                    Prvi utisak o zgradi ostavlja čistoća samog objekta.
    LAV pruža profesionalnu uslugu čišćenja i našu listu usluga prilagodjavamo Vašim potrebama i zahtevima. Izlazimo na teren sa svom opremom i svim sredstvima potrebnim za čišćenje. Zgrade koje su nam pružile poverenje se razlikuju po sledećem:<br />
    *brzina,kvalitet,profesionalnost i iskustvo u čišćenju je ono što nas izdvaja<br />
    *aparati za dezinfekciju-u cilju sprečavanja širenja zaraznih bolesti<br />
    *osveživači prostora jer želimo mirišljavu zgradu bez neprijatnih mirisa<br />
    *povoljne cene<br />
    *redovna kontrola<br />
    *dostupnost informacija i primedbi 24/7 <br />
                    </p>
                </div>
                <div className="levodrugasekcijausluge">
                    <img src={prvausluge} alt="" />
                </div>
                
            </div>
            
{/* -------------druga sekcija -------------------- */}

    <div className="parnasekcija">
                    <div className="drugasekcijaceo">
                        <img src={drugausluge} alt="" className="parneslike" />
                  

                    <div className="levodrugasekcijauslugeparna">
                        <p className="naslovuslugedrugasekcija">
                        Čišćenje stambenih zgrada
                        </p>
                        <p className="textispodnaslovadrugesekcijeparna">
                        Prvi utisak o zgradi ostavlja čistoća samog objekta.
        LAV pruža profesionalnu uslugu čišćenja i našu listu usluga prilagodjavamo Vašim potrebama i zahtevima. Izlazimo na teren sa svom opremom i svim sredstvima potrebnim za čišćenje. Zgrade koje su nam pružile poverenje se razlikuju po sledećem:<br />
        *brzina,kvalitet,profesionalnost i iskustvo u čišćenju je ono što nas izdvaja<br />
        *aparati za dezinfekciju-u cilju sprečavanja širenja zaraznih bolesti<br />
        *osveživači prostora jer želimo mirišljavu zgradu bez neprijatnih mirisa<br />
        *povoljne cene<br />
        *redovna kontrola<br />
        *dostupnost informacija i primedbi 24/7 <br />
                        </p>
                    </div>
                    
                    
                     </div>
            </div>

            
{/* -------------treca sekcija -------------------- */}

            <div className="neparnasekcija">
                <div className="desnodrugasekcijausluge">
                    <p className="naslovuslugedrugasekcija">
                    Mašinsko čišćenje garaža
                    </p>
                    <p className="textispodnaslovadrugesekcije">
                    Agencija LAV nudi detaljno čišćenje podzemnih garaža. To je zahtevan i važan deo poslova čišćenja iz razloga što direktno utiče na sigurnost odvijanja prometa u garažu,pa je vrlo važan segment u svakodnevnom kvalitetu života u jednoj modernoj stambenoj zgradi.
Vozila prilikom ulaska u garažu svakoga dana donesu određenu količinu prljavštine, masnoće i bakterija koja se tamo cedi i taloži, s vremenom se stvara masni sloj na podu garaže i nečistoća ulazi u pore betona. Drugi veliki problem je što kroz garažu prljavština ulazi u zgradu, jer se nečistoća iz garaže razvlači u liftove, hodnike i na kraju u stanove gde živimo.
Usluga čišćenje garaža se sastoji iz sledećih koraka:<br />
*Obavestimo stanare o datumu i periodu čišćenja garaže
*Ometemo garažu<br />
*Pod operemo mašinski sa odgovarajućim hemijskim sredstvima<br />
*Uklonimo paučinu sa zidova<br />
*Prebrišemo sve prekidače i lampe<br />
*Prebrišemo vatrogasne aparate i ostalo<br />
                    </p>
                </div>
                <div className="levodrugasekcijausluge">
                    <img src={trecausluge} alt="" />
                </div>

            </div>

            
{/* -------------cetvrta sekcija -------------------- */}



<div className="parnasekcija">
                    <div className="drugasekcijaceo">
                        <img src={cetvrtausluge} alt="" className="parneslike" />
                  

                    <div className="levodrugasekcijauslugeparna">
                        <p className="naslovuslugedrugasekcija">
                        Održavanje zelenila
                        </p>
                        <p className="textispodnaslovadrugesekcijeparna">
                        Redovno održavanje zelenih površina jedan je od načina da Vaše dvorište uvek izgleda lepo i uredno.Raskošan i dobar travnjak ujedno podiže i vrednost Vašeg doma ali i čini Vaš prostor prijatnijim i prijemčivim na oko.Agencija LAV pruža kvalitetnu uslugu u održavanju Vaših dvorišta i zelenih površina,i vrši sledeće usluge:
                        <br />  1.košenje trave,<br />
                            2.čišćenje lišća,<br />
                            3.otklanjanje korova,<br />
                            4.orezivanje živih ograda.<br />
                            ***Usluge vršimo isključivo u objektima koje su nam poverile održavanje istih.<br />
                        </p>
                    </div>
                    
                    
                     </div>
            </div>





{/* -------------peta sekcija -------------------- */}

<div className="neparnasekcija">
                <div className="desnodrugasekcijausluge">
                    <p className="naslovuslugedrugasekcija">
                    Čišćenje stambenih zgrada
                    </p>
                    <p className="textispodnaslovadrugesekcije">
                    Prvi utisak o zgradi ostavlja čistoća samog objekta.
    LAV pruža profesionalnu uslugu čišćenja i našu listu usluga prilagodjavamo Vašim potrebama i zahtevima. Izlazimo na teren sa svom opremom i svim sredstvima potrebnim za čišćenje. Zgrade koje su nam pružile poverenje se razlikuju po sledećem:<br />
    *brzina,kvalitet,profesionalnost i iskustvo u čišćenju je ono što nas izdvaja<br />
    *aparati za dezinfekciju-u cilju sprečavanja širenja zaraznih bolesti<br />
    *osveživači prostora jer želimo mirišljavu zgradu bez neprijatnih mirisa<br />
    *povoljne cene<br />
    *redovna kontrola<br />
    *dostupnost informacija i primedbi 24/7 <br />
                    </p>
                </div>
                <div className="levodrugasekcijausluge">
                    <img src={petausluge} alt="" />
                </div>
                
            </div>


        </div>

        






        </div>
    );
}
 
export default Usluge;