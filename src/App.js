
import Navbar from './Navbar';
import Pocetna from './Pocetna';
import { BrowserRouter as  Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
 
    <div className="App">
        <Navbar />
        <div className="content">
       <Router>
        <Routes>
        <Route path="/" element={<Pocetna />}></Route>
        {/* <Route path="/onama" element={<ONama />}></Route>
        <Route path="/usluge" element={<Usluge />}></Route>
        <Route path="/kontakt" element={<Kontakt />}></Route> */}
        </Routes>
        </Router>
        {/* <Pocetna /> */}
      </div>
    </div>
  );
}

export default App;
