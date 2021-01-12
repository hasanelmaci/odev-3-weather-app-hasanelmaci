import './App.css';
import FetchData from './components/FetchData'
import CityProvider from './contexts/CityProvider'


function App() {

  
  return (
    <div className="App">
      <CityProvider>
      <FetchData />
      </CityProvider>

    </div>
  );
}

export default App;
