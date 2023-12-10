import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Landingpage from './Pages/Landingpage';
import Home from './Pages/Home';
import Watchhistory from './Pages/Watchhistory';

function App() {
  return (
    <div className="App">
      <Header/>
      {/* //localhost:3000 - landing page*/}
      <Routes>
        <Route path='/' element={<Landingpage/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/watchhistory' element={<Watchhistory/>}/>
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
