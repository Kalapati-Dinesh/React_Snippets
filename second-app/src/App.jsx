import { Component } from "react";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Welcome</h1>
        <Home/>
        <About></About>
        <Contact></Contact>
      </div>
    )
  }
} export default App;