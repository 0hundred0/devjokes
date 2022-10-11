import AppState from "./context/AppState";
import Header from "./components/header/Header";
import Joke from "./components/joke/Joke";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <AppState>
      <div className="App">
        <Header />
        <Joke />
        <Footer />
      </div>
    </AppState>
  );
}

export default App;
