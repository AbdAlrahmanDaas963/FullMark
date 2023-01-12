import Header from "./components/Header";
import Subscribe from "./components/subscribe/Subscribe";
import Welcome from "./components/welcome/Welcome";
import Asks from "./components/asks/Asks";

function App() {
  return (
    <div className="App">
      <Header />
      <Welcome />
      <Subscribe />
      <Asks />
    </div>
  );
}

export default App;
