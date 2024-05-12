 
import { useState } from 'react';
import slikazaposlise from './mopovi.png'
import React, { useRef } from 'react';



 const ZaposliSe = () => {

    const [ime,setIme] = useState('');
    const [prezime,setPrezime] = useState('');
    const [telefon,setTelefon] = useState('');
    const [email,setEmail] = useState('');
    const [iskustvo,setIskustvo] = useState('');
    const [poruka,setPoruka] = useState('');
    const form = useRef();

    const handlePosao = (e)=>
    {
        e.preventDefault();

        const posao = {ime, prezime, telefon, email, iskustvo, poruka};

       {/* emailjs
        .sendForm('service_lavreact', 'template_lavreact', form.current, {
          publicKey: 'BHjaNK40fhxDNer55',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    */}
        console.log(posao);
    }


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

            <form className='formazaposlise' ref={form} onSubmit={handlePosao}>
            <label className="svelabele">
                Ime
            </label>
            <input type="text" required='required' className="sviinputi" 
                value={ime}
                onChange={(e) => setIme(e.target.value)}
            />


            <label className="svelabele">
                Prezime
            </label>
            <input type="text" required='required' className="sviinputi"
            value={prezime}
            onChange={(e) => setPrezime(e.target.value)}
             />


            <label className="svelabele">
                Telefon
            </label>
            <input type="text" required='required' className="sviinputi"
            value={telefon}
            onChange={(e) => setTelefon(e.target.value)}
            />


            <label className="svelabele">
                Email
            </label>
            <input type="mail" required='required' className="sviinputi"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />


            <label className="svelabele">
                Radno iskustvo
            </label>
            <textarea className='textareainputi' required='required'
            value={iskustvo}
            onChange={(e) => setIskustvo(e.target.value)}
            ></textarea>


            <label className="svelabele">
                Vasa poruka
            </label>
            <textarea className='textareainputi' required='required'
            value={poruka}
            onChange={(e) => setPoruka(e.target.value)}
            ></textarea>

            <button className="zaposliseButton">Prijavi se</button>

        </form>
            </div>
        <p>{ime}</p>
          
        </div>
    );
}
 
export default ZaposliSe;