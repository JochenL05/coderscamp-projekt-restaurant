import './App.css';
import Footer from './components/footer/Footer'
import Form from './components/Form';
import Topbar from './components/Topbar/Topbar'

function App() {
  return (
    <div className="App">
      <Topbar/>
      <Form/>
      <Footer/>
    </div>
  );
}

export default App;
