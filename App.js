import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Homescreen from "./screens/Homescreen";
import Bookingscrren from "./screens/Bookingscrren";

function App() {
  return (
    <div className="App">
      <Navbar />

      <BrowserRouter>
        <Route path="/home" exact component={Homescreen} />
        <Route path="/book/:roomid" exact component={Bookingscrren} />
      </BrowserRouter>
    </div>
  );
}

export default App;
