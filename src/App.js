import React from "react";
import NavBar from "./components/NavBar.js"
import Header from "./components/Header.js"
import Body from "./components/Body.js"
import Carousel from "./components/Carousel.js"
import Footer from "./components/Footer.js"
function App() {
  return (
    <div class="container-fluid">
      <NavBar/>
      <Header/>
      <Body/>
      <Carousel/>
      <Footer/>
    </div>
  );
}

export default App;
