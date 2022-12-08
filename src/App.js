import './App.css';
import AuthorUsmanovaSection from "./components/AuthorUsmanovaSection";
import InstaMamaa from "./components/InstaMamaa";
import UniqueProgram from "./components/UniqueProgram";
import EnrollSection from "./components/EnrollSection";
import WhatWillYouGet from "./components/WhatWillYouGet";
import WaitingForYou from "./components/WaitingForYou";
import Inventory from "./components/Inventory";
import PrepareYourBody from "./components/PrepareYourBody";
import Contraindication from "./components/Contraindication";
import Presents from "./components/Presents";
import PriceList from "./components/PriceList";
import BeforeAndAfter from "./components/BeforeAndAfter";
import Faq from "./components/Faq";

function App() {
  return (
    <div className="App">
      <AuthorUsmanovaSection/>
      <InstaMamaa/>
      <UniqueProgram/>
      <EnrollSection/>
      <WhatWillYouGet/>
      <WaitingForYou/>
      <Inventory/>
      <PrepareYourBody/>
      <Contraindication/>
      <Presents/>
      <PriceList/>
      <BeforeAndAfter/>
      <Faq/>
    </div>
  );
}

export default App;
