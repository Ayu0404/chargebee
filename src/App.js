import './App.css';
import NavBar from './NavBar/NavBar'
import FixedBar from './Footer/FixedBar'
import Section1 from './body/Section1'
import Section2 from './body/Section2'

function App() {

   return (
    <div className="App">
        <NavBar />
        <Section1 />
        <Section2 />
        <FixedBar />
    </div>
  );
}

export default App;
