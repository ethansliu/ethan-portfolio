//import './App.css'

import Header from "./components/Header.tsx";
import Hero from "./components/Hero.tsx";
import About from "./components/About.tsx";
import Projects from "./components/Projects.tsx";
import Contact from "./components/Contact.tsx";
import Footer from "./components/Footer.tsx";

function App() {
    return (
        <>
            {/*<div className={"wave"}></div>*/}
            {/*<div className={"wave"}></div>*/}
            {/*<div className={"wave"}></div>*/}
            <div className="min-h-screen relative z-10">
                <Header/>
                <main>
                    <Hero />
                    <About/>
                    <Projects />
                    <Contact />
                </main>
                <Footer/>
            </div>
        </>
    )
}

export default App
