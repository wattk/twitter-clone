import Footer from "../src/components/Footer";
import { TwitterProvider } from "../src/context/TwitterContext";
import "../styles/global.css";

function App({ Component, pageProps }) {
  return (
    <TwitterProvider>
      <div className="App">
        <Component {...pageProps} />
        <Footer />
      </div>
    </TwitterProvider>
  );
}

export default App;
