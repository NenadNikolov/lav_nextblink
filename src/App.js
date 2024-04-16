import ONama from './ONama';
import Navbar from './Navbar';
import Pocetna from './Pocetna';
import Kontakt from './Kontakt';
import Usluge from './Usluge';
import { BrowserRouter as  Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
 
    <div className="App">
        
        <div className="content">
       <Router>
       <Navbar />
        <Routes>
        <Route path="/" element={<Pocetna />}></Route>
        <Route path="/onama" element={<ONama />}></Route>
        <Route path="/kontakt" element={<Kontakt />}></Route>
        <Route path="/usluge" element={<Usluge />}></Route>
        {/*<Route path="/usluge" element={<Usluge />}></Route>
        <Route path="/kontakt" element={<Kontakt />}></Route> */}
        </Routes>
        </Router>
        {/* <Pocetna /> */}
      </div>
    </div>
  );
}

export default App;
