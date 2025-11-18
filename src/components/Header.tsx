export default function Header() {
    return (
        <header className="px-15 py-10">
            <nav className="flex justify-center items-center">
                {/*<a href="#hero" className={"text-3xl"}> Ethan Liu </a>*/}
                <div className="flex gap-10">
                    <a href="#about" className={"text-2xl"}> About </a>
                    <a href="#projects" className={"text-2xl"}> Projects </a>
                    <a href="#contact" className={"text-2xl"}> Contact </a>
                </div>
            </nav>
        </header>
    )
}