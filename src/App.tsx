//import './App.css'

import Header from "./components/Header.tsx";
import Hero from "./components/Hero.tsx";
import About from "./components/About.tsx";
import Projects from "./components/Projects.tsx";
import Contact from "./components/Contact.tsx";
import Footer from "./components/Footer.tsx";
import {Toaster} from "@/components/ui/sonner.tsx"

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
            <Toaster
                position="bottom-right"
                toastOptions={{
                    style: {
                        backgroundColor: "rgba(255, 255, 255, 0.15)",
                        backdropFilter: "blur(12px)",
                        border: "1px solid rgba(255, 255, 255, 0.05)",
                        boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.1)",
                    }
                }}
                icons={{
                    success: null,
                    error: null,
                    warning: null,
                    info: null,
                }}
            />
        </>
    )
}

export default App
