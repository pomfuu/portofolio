import React from "react";
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Home from "./components/home/Home";
import Sidebar from "./components/sidebar/Sidebar";
import Portfolio from "./components/portfolio/Portfolio";
import Resume from "./components/resume/Resume";
import Skill from "./components/skills/Skill";
import About from "./components/about/About";
import Contact from "./components/contact/contact";

const App = () => {
    return (
        <>
        < Sidebar />
        <main className="main container">
            <About />
            <Skill />
            <Home />
            <Resume />
            <Portfolio />
            <Contact />
        </main>
        </>
    )
}

export default App
