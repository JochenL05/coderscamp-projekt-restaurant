import logo from './logo.svg';
import './App.css';
import Homepage from './views/Homepage/Homepage';
import Footer from './components/footer/Footer'
import Register from './components/register/Register';

function App() {
  return (
    <div className="App">
      <Homepage />
      <Footer/>
      <Register/>
    </div>
  );
}

export default App;
