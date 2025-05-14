import React from 'react'
import Header from "./components/Header";
import Hero from './components/Hero'
import Skills from "./components/Skills";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import OpenSource from "./components/OpenSource";
import Footer from "./components/Footer";


const App = () => {
    return (
        <div>
            <Header/>
            <Hero/>
            <Skills/>
            <Services/>
            <Projects/>
            <OpenSource/>
            <Certifications/>
            <Footer/>
        </div>
    )
}
export default App
