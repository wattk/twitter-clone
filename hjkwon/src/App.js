import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import User from "./pages/User";
import Search from "./pages/Search";
import Tweet from "./pages/Tweet";
import Footer from "./components/Footer";
import { TwitterProvider } from "./context/TwitterContext";

function App() {
  return (
    <TwitterProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user" element={<User />} />
            <Route path="/search" element={<Search />} />
            <Route path="/tweet" element={<Tweet />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </TwitterProvider>
  );
}

export default App;
