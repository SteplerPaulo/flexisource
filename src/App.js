import React from "react";
import NavBar from "./components/NavBar.js"
import Header from "./components/Header.js"
import Details from "./components/Details.js"
import Carousel from "./components/Carousel.js"
import Footer from "./components/Footer.js"
import InternationalNetwork from "./components/InternationalNetwork.js"
function App() {
  return (
    <div class="container-fluid">
      <NavBar/>
      <Header/>
      <Details/>
      <Carousel/>
      <InternationalNetwork/>
      <Footer/>
    </div>
  );
}

export default App;
