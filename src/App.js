import "./App.css";
import FetchData from "./components/FetchData";
import CityProvider from "./contexts/CityProvider";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="app">
      <div className="content">
        <Header />
        <CityProvider>
          <FetchData />
        </CityProvider>
      </div>
    </div>
  );
}

export default App;
