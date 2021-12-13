import './App.css';
import Card from './card/card';
import Navbar from './Navbar/navbar';
import Navbar2 from './Navbar/navbar2';
import AllRoute from './routes/Allroute';
import Routes from './routes/routes';

function App() {
  return (
    <div className="App">
     <Navbar /><br /><br/><br />
     <AllRoute />
     {/* <Navbar2 />
     <Routes /> */}
     {/* <Card /> */}
    </div>
  );
}

export default App;
