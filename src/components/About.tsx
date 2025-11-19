import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselPrevious,
    CarouselNext,
    type CarouselApi,
} from "@/components/ui/carousel.tsx"
import { Card, CardContent, CardTitle, CardHeader } from "@/components/ui/card.tsx"
import { type JSX, useEffect, useState } from "react"
// import { Separator } from "@/components/ui/separator.tsx"

export default function About() {
    const aboutCards: Array<{ title: string; content: string | JSX.Element }> = [
        {
            title: "What Drives My Work",
            content:
                "I'm someone who loves to create. My whole life, the process of creating things from scratch, obsessing over details, learning how to refine my craft, and bringing joy with the things I make, has been integral to my identity. That very reason drew me toward Web and Mobile Software Development. I love software's ability to bring anything to life, and its ever-changing landscape means there is always something new to learn and things to iterate upon.",
        },
        {
            title: "Tech Stack",
            content: (
                <div className="space-y-3 sm:space-y-4">
                    <div>
                        <h4 className="text-lg sm:text-xl font-handjet font-medium text-gray-900 mb-1 sm:mb-2">
                            Web Development
                        </h4>
                        <p className="text-sm sm:text-base text-gray-800 font-redhat font-normal">
                            React, JavaScript/TypeScript, Node.js, and HTML/CSS
                        </p>
                    </div>
                    <div>
                        <h4 className="text-lg sm:text-xl font-handjet font-medium text-gray-900 mb-1 sm:mb-2">
                            Mobile Development
                        </h4>
                        <p className="text-sm sm:text-base text-gray-800 font-redhat font-normal">
                            Kotlin and Jetpack Compose
                        </p>
                    </div>
                    <div>
                        <h4 className="text-lg sm:text-xl font-handjet font-medium text-gray-900 mb-1 sm:mb-2">
                            Version Control
                        </h4>
                        <p className="text-sm sm:text-base text-gray-800 font-redhat font-normal">Github</p>
                    </div>
                </div>
            ),
        },
        {
            title: "Personal Interests",
            content:
                "Outside of coding, I find joy in leathercrafting, cooking, and staying active through the gym and playing badminton (I used to compete nationally!). In the future I would love to immerse myself in wood and metal working, as well as throwing pottery. My hope is that many things in my home are designed and made by myself.",
        },
        {
            title: "What Drives My Work",
            content:
                "I'm someone who loves to create. My whole life, the process of creating things from scratch, obsessing over details, learning how to refine my craft, and bringing joy with the things I make, has been integral to my identity. That very reason drew me toward Web and Mobile Software Development. I love software's ability to bring anything to life, and its ever-changing landscape means there is always something new to learn and things to iterate upon.",
        },
        {
            title: "Tech Stack",
            content: (
                <div className="space-y-3 sm:space-y-4">
                    <div>
                        <h4 className="text-lg sm:text-xl font-handjet font-medium text-gray-900 mb-1 sm:mb-2">
                            Web Development
                        </h4>
                        <p className="text-sm sm:text-base text-gray-800 font-redhat font-normal">
                            React, JavaScript/TypeScript, Node.js, and HTML/CSS
                        </p>
                    </div>
                    <div>
                        <h4 className="text-lg sm:text-xl font-handjet font-medium text-gray-900 mb-1 sm:mb-2">
                            Mobile Development
                        </h4>
                        <p className="text-sm sm:text-base text-gray-800 font-redhat font-normal">
                            Kotlin and Jetpack Compose
                        </p>
                    </div>
                    <div>
                        <h4 className="text-lg sm:text-xl font-handjet font-medium text-gray-900 mb-1 sm:mb-2">
                            Version Control
                        </h4>
                        <p className="text-sm sm:text-base text-gray-800 font-redhat font-normal">Github</p>
                    </div>
                </div>
            ),
        },
        {
            title: "Personal Interests",
            content:
                "Outside of coding, I find joy in leathercrafting, cooking, and staying active through the gym and playing badminton (I used to compete nationally!). In the future I would love to immerse myself in wood and metal working, as well as throwing pottery. My hope is that many things in my home are designed and made by myself.",
        },
    ]

    const [api, setApi] = useState<CarouselApi>()

    useEffect(() => {
        if (!api) return

        const updateSlides = () => {
            const slides = api.slideNodes()
            slides.forEach((slide, index) => {
                if (index === api.selectedScrollSnap()) {
                    slide.style.filter = "blur(0px)"
                    slide.style.opacity = "1"
                } else {
                    slide.style.filter = "blur(3px)"
                    slide.style.opacity = "0.5"
                }
            })
        }

        api.on("select", updateSlides)
        updateSlides()
    }, [api])

    const [currentSlide, setCurrentSlide] = useState(0)

    useEffect(() => {
        if (!api) return

        const updateSlides = () => {
            const slides = api.slideNodes()
            const activeIndex = api.selectedScrollSnap()

            setCurrentSlide(activeIndex % 3) // Modulo 3 since you have 3 unique cards

            slides.forEach((slide, index) => {
                if (index === activeIndex) {
                    slide.style.filter = "blur(0px)"
                    slide.style.opacity = "1"
                } else {
                    slide.style.filter = "blur(3px)"
                    slide.style.opacity = "0.5"
                }
            })
        }

        api.on("select", updateSlides)
        updateSlides()
    }, [api])


    return (
        <section
            id="about"
            className="flex flex-col items-center justify-center px-10 sm:px-20 lg:px-50 py-40 sm:py-32 lg:py-45 pb-80 sm:pb-60 lg:pb-100 text-center"
        >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl px-6 sm:px-10 lg:px-15 bg-white/10 border-none rounded-3xl sm:rounded-4xl h-16 sm:h-20 lg:h-24 min-w-fit inline-flex items-center justify-center font-jost font-semibold">
                About Me
            </h2>

            <Carousel
                className="pt-10 sm:pt-16 lg:pt-20 w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-15"
                opts={{ align: "center", loop: true, startIndex: 0 }}
                setApi={setApi}
            >
                <CarouselContent className="-ml-2 md:-ml-4">
                    {aboutCards.map((item, index) => (
                        <CarouselItem key={index} className="pl-2 md:pl-4 basis-full 2xl:basis-4/10">

                        <Card className="h-full bg-white/40 border-white/5 shadow-2xl py-6 sm:py-8 lg:py-10">
                                <CardHeader>
                                    <CardTitle className="text-center text-xl sm:text-2xl lg:text-3xl font-jost font-medium italic">
                                        {item.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="flex items-center justify-center text-center leading-relaxed px-4 sm:px-6 lg:px-10 min-h-48">
                                    {typeof item.content === "string" ? (
                                        <p className="text-sm sm:text-base lg:text-lg text-gray-800 p-2 sm:p-3 font-redhat font-normal">
                                            {item.content}
                                        </p>
                                    ) : (
                                        item.content
                                    )}
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>

                <CarouselPrevious className="hidden lg:flex bg-white/50 border-none hover:bg-white/60 rounded-xl" />
                <CarouselNext className="hidden lg:flex bg-white/50 border-none hover:bg-white/60 rounded-xl" />

            </Carousel>

            <div className="flex justify-center gap-2 mt-6 2xl:hidden">
                {[0, 1, 2].map((index) => (
                    <button
                        key={index}
                        onClick={() => api?.scrollTo(index)}
                        className={`h-2 rounded-full transition-all ${
                            currentSlide === index
                                ? "w-8 bg-white/60"
                                : "w-2 bg-white/30"
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

        </section>
    )
}
