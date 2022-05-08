import TariffCard from "./components/Tariff"
import './App.css'


let tariffs = [
  {name: 300, price: 300, speed: 10, priceColor: "rgba(44,193,213,255)", nameColor:"rgba(34,156,171,255)"},
  
  {name: 450, price: 450, speed: 50, priceColor: "rgba(36,174,141,255)", nameColor: "rgba(32,135,114,255)"},

  {name: 550, price: 550, speed: 100, isSelected:true, isBigger:true, priceColor: "rgba(244,106,95,255)", nameColor: "rgba(196,85,78,255)"},
  
  {name: 1000, price: 1000, speed: 200, priceColor: "rgba(51,58,68,255)", nameColor: "rgba(40,47,55,255)"}

];

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        {
          tariffs.map((tariff) =>
          <TariffCard name={tariff.name} price={tariff.price} speed={tariff.speed} isSelected={tariff.isSelected} priceColor={tariff.priceColor} nameColor={tariff.nameColor}></TariffCard>
          ) 
        }
        </div>
    </div>
  );
}

export default App;