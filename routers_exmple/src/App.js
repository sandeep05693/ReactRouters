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
    
    <Router>
    <Nav/>
    
     
      <Routes>
        <Route  exact caseSensitive={false} path="/" element={<Home />} />
        <Route  caseSensitive={false} path="/shop" element={<Shop />} />
        <Route  caseSensitive={false} path="/about" element={<About />} />
      </Routes>
    </Router>  
    </div>
  );
}

export default App;
