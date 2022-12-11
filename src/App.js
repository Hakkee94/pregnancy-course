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
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
    return (
        <div className="App">
            <Header/>
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
            <Footer/>
        </div>
    );
}

export default App;
