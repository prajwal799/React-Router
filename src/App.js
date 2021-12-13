import './App.css';
import Card from './card/card';
import Navbar from './Navbar/navbar';

import AllRoute from './routes/Allroute';


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
