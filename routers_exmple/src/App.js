import logo from './logo.svg';
import './App.css';
import Nav from './Nav';
import About from './About';
import Shop from './shop';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
    <Nav/>
    
     <Router>
      <Routes>
        <Route  path="/" element={<Home />} />
        <Route  path="/shop" element={<Shop />} />
        <Route  path="/about" element={<About />} />
      </Routes>
    </Router>  
    </div>
  );
}

export default App;
