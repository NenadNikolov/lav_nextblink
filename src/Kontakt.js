import slikakontakt from './kontaktslika.png';
import slikakontakt2 from './kontaktplay.png';
import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';


const Kontakt = () => {

   
    const [imeK,setImeK]= useState('');
    const [prezimeK,setPrezimeK]= useState('');
    const [emailK,setEmailK]= useState('');
    const [porukaK,setPorukaK]= useState('');

    const form = useRef();

    const handleKontakt = (e) => {

        
        e.preventDefault();

        emailjs
          .sendForm('service_uphlj5e', 'template_8t5h2m3', form.current, 'soqTNlVOlV1a_3stJ')
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      
        e.target.reset()
    
    
        
        
    }

    return ( 
        <div className="kontaktDiv">
            <div className="prvideoKontakt">
                <div className="levokontakt">
            <p className="headersvih">Kljuc je u dobroj komunikaciji</p>
            <h1 className="naslovKontakt">Ostanimo u kontaktu</h1>
            <p className="textKontakt">
            Prijavite se za posao brzo, lako i jednostavno.
            Sve što je potrebno da uradite je da popunite formu koja se nalazi na stranici niže, i to je sve.
            </p>
            </div>
            <div className="desnokontakt">
                <img src={slikakontakt} alt="" className="slikakontakt"/>
            </div>
           
            </div>

            <div className="drugidivkontakt">
                <div className="drdeoKontaktlevo">
                    <img src={slikakontakt2} alt="" className="slikakontakt2"/>
                </div>
                <div className="drdeodesno">
                    <h2 className="drdeonaslov">Kontaktirajte nas</h2>
                    <p className="drdeotext">
                    Telefon:  +381 62 193 2980 <br /><br />
                    Instagram:  lav_agencija <br /><br />
                    Facebook:  LAV agencija za čišćenje <br /><br />
                    Info email:  tdamljanovic@yahoo.com <br /><br />
                    </p>
                </div>
            </div>
            <div className="prijaviseforma">

            <p className="naslovprijavise">
                    Kontakt forma
                </p>
        <form className="forma" ref={form} onSubmit={handleKontakt}>
            <label className="svelabele">
                Ime
            </label>
            <input type="text" className="sviinputi"
            name="imeK"
            value={imeK}
            onChange={(e) => setImeK(e.target.value)} />

            <label className="svelabele">
                Prezime
            </label>
            <input type="text" className="sviinputi"
            name="prezimeK"
            value={prezimeK}
            onChange={(e) => setPrezimeK(e.target.value)} />
            <label className="svelabele">
                Email
            </label>
            <input type="mail" className="sviinputi"
            name="emailK"
            value={emailK}
            onChange={(e) => setEmailK(e.target.value)} />
            <label className="svelabele">
                Poruka
            </label>
            <textarea className="textareainputi"
            name="porukaK"
            value={porukaK}
            onChange={(e) => setPorukaK(e.target.value)} />

            <button className="zaposliseButton" value="Send" type="submit">Posalji</button>
        </form>
        </div>

        </div>
     );
}
 
export default Kontakt;