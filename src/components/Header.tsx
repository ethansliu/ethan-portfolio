import { FaGithub, FaRegFileAlt } from "react-icons/fa"

export default function Header() {
    return (
        <header className="px-4 py-6 sm:px-6 sm:py-8 lg:px-10 lg:py-10">
            <nav className="flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-0 lg:relative">

                {/* Main navigation */}
                <div className="flex gap-3 sm:gap-6 lg:gap-10 bg-white/15 border border-white/10 shadow-xl rounded-2xl sm:rounded-3xl h-14 sm:h-20 lg:h-24 sm:w-auto justify-center items-center font-jost font-medium px-2 sm:px-4">
                    <a
                        href="#about"
                        className="text-base sm:text-xl lg:text-2xl rounded-2xl sm:rounded-3xl px-3 py-2 sm:px-5 sm:py-2.5 lg:px-6 lg:py-3 hover:bg-white/5 transition-all"
                    >
                        About
                    </a>
                    <a
                        href="#projects"
                        className="text-base sm:text-xl lg:text-2xl rounded-2xl sm:rounded-3xl px-3 py-2 sm:px-5 sm:py-2.5 lg:px-6 lg:py-3 hover:bg-white/5 transition-all"
                    >
                        Projects
                    </a>
                    <a
                        href="#contact"
                        className="text-base sm:text-xl lg:text-2xl rounded-2xl sm:rounded-3xl px-3 py-2 sm:px-5 sm:py-2.5 lg:px-6 lg:py-3 hover:bg-white/5 transition-all"
                    >
                        Contact
                    </a>
                </div>

                {/* Icons */}
                <div className="flex gap-4 lg:absolute lg:right-0">
                    <a
                        href="/Ethan-Liu-Resume.pdf"
                        className="rounded-full px-4 py-4 sm:px-5 sm:py-5 lg:px-6 lg:py-3 hover:bg-white/10 bg-white/5 border border-white/10 shadow-xl transition-all"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="View Resume"
                    >
                        <FaRegFileAlt className="w-5 h-5 lg:w-6 lg:h-6" />
                    </a>

                    <a
                        href="https://github.com/ethansliu"
                        className="rounded-full px-4 py-4 sm:px-5 sm:py-5 lg:px-6 lg:py-3 hover:bg-white/10 bg-white/5 border border-white/10 shadow-xl transition-all"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit GitHub Profile"
                    >
                        <FaGithub className="w-5 h-5 lg:w-6 lg:h-6" />
                    </a>
                </div>

            </nav>
        </header>
    )
}
