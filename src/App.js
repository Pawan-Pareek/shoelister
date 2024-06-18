import './App.css';
import Navbar from './Components/Navbar';
import Homepage from './Components/Homepage';
import Man from './Components/Man';
import Women from './Components/Women';
import Kids from './Components/Kids';
// import Footer from './Components/Footer';
import Coming_soon from './Components/Coming_soon';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Coming_soon from './Components/Coming_soon';


function App() {
  return (
    <>

      <Router>
      <Navbar />
        <Routes>
          <Route path='/' element={<Homepage />} />

          <Route path='/Man' element={<Man />} />
          <Route path='/Women' element={<Women />} />
          <Route path='/Kids' element={<Kids />} />
          <Route path='/Coming_soon' element={<Coming_soon />} />

        </Routes>

      {/* <Footer/> */}
      </Router>
    </>
  );
}

export default App;
