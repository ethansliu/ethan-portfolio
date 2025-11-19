export default function Hero() {
    return (
        <section
            id="hero"
            className="flex flex-col items-center justify-center px-4 sm:px-6 lg:px-10 py-40 sm:py-32 lg:py-45 pb-60 sm:pb-60 lg:pb-100 text-center"
        >
            <p className="text-3xl sm:text-3xl lg:text-4xl pb-3 sm:pb-4 font-handjet font-light-300">
                Welcome to my Portfolio!
            </p>

            <p className="text-5xl sm:text-6xl lg:text-8xl pb-3 sm:pb-4 font-jost-medium font-semibold italic">
                I'm Ethan Liu
            </p>

            <p className="text-2xl sm:text-2xl lg:text-3xl pb-3 sm:pb-4 font-handjet font-light-300">
                Full Stack Software Developer
            </p>
        </section>
    )
}
