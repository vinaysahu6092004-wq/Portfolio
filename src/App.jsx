import React from "react";
import Navbar from "./Components/navbar.jsx";
import Hero from "./Components/hero.jsx";
import About from "./Components/about.jsx";
import Services from "./Components/services.jsx";
import Work from "./Components/mywork.jsx";
import Contact from "./Components/contact.jsx";
import Footer from "./Components/footer.jsx";
const App = () =>{
return (
  <>
<Navbar></Navbar>
<Hero></Hero>
<About></About>
<Services></Services>
  <Work></Work>
<Contact></Contact>
<Footer></Footer>
</>
)
}

export default App;
