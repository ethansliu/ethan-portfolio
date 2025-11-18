export default function Header() {
    return (
        <header className="px-15 py-10">
            <nav className="flex justify-center items-center">
                {/*<a href="#hero" className={"text-3xl"}> Ethan Liu </a>*/}
                <div className="flex gap-10 bg-white/15 border-none rounded-2xl h-24 w-xl justify-center items-center">
                    <a href="#about" className={"text-2xl rounded-2xl px-6 py-3 hover:bg-white/5"}> About </a>
                    <a href="#projects" className={"text-2xl rounded-2xl px-6 py-3 hover:bg-white/5"}> Projects </a>
                    <a href="#contact" className={"text-2xl rounded-2xl px-6 py-3 hover:bg-white/5"}> Contact </a>
                </div>
            </nav>
        </header>
    )
}