import React from 'react'
import Header from "./components/Header";
import Hero from './components/Hero'
import Skills from "./components/Skills";
import Services from "./components/Services";
import Projects from "./components/Projects";
const App = () => {
    return (
        <div>
            <Header/>
            <Hero/>
            <Skills/>
            <Services/>
            <Projects/>
        </div>
    )
}
export default App
