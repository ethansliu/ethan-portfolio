import {FaGithub, FaRegFileAlt} from "react-icons/fa"

export default function Header() {
    return (
        <header className="px-10 py-10">
            <nav className="flex justify-center items-center relative">
                {/*<a href="#hero" className={"text-3xl"}> Ethan Liu </a>*/}
                <div className="flex gap-10 bg-white/15 border-white/10 shadow-xl rounded-3xl h-24 w-xl justify-center items-center font-jost font-medium">
                    <a href="#about" className={"text-2xl rounded-3xl px-6 py-3 hover:bg-white/5"}> About </a>
                    <a href="#projects" className={"text-2xl rounded-3xl px-6 py-3 hover:bg-white/5"}> Projects </a>
                    <a href="#contact" className={"text-2xl rounded-3xl px-6 py-3 hover:bg-white/5"}> Contact </a>
                </div>

                <div className="flex gap-4 absolute right-0">
                    <a
                        href="https://www.linkedin.com/in/ethan-liu-51a91921b/"
                        className={"text-2xl rounded-4xl px-6 py-3 hover:bg-white/10 bg-white/5 shadow-2xl/30"}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaRegFileAlt className="w-6 h-6" />
                    </a>
                    <a
                        href="https://github.com/ethansliu"
                        className={"text-2xl rounded-4xl px-6 py-3 hover:bg-white/10 bg-white/5 shadow-2xl/30"}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaGithub className="w-6 h-6" />
                    </a>
                </div>
            </nav>
        </header>
    )
}