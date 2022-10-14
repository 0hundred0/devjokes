import Header from "./components/header/Header";
import Joke from "./components/joke/Joke";
import Footer from "./components/footer/Footer";
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

function App() {
	const client = new QueryClient({defaultOptions: {
		queries: {refetchOnWindowFocus: false}
	}});

  return (
    <QueryClientProvider client={client}>
      <div className="App">
        <Header />
        <Joke />
        <Footer />
      </div>
    </QueryClientProvider>
  );
}

export default App;
