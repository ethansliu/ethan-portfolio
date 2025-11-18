import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselPrevious,
    CarouselNext,
    type CarouselApi
} from "@/components/ui/carousel.tsx";
import {Card, CardContent, CardTitle, CardHeader} from "@/components/ui/card.tsx";
import {useEffect, useState} from "react";
import {Separator} from "@/components/ui/separator.tsx";

export default function About() {
    const aboutCards: Array<{title:string, content: string | JSX.Element}> = [
        {
            title: "What Drives my Work",
            content: "I'm someone who loves to create. My whole life, the process of creating things from scratch, obsessing over details, learning how to refine my craft, and bringing joy with the things I make, has been integral to my identity. That very reason drew me toward Web and Mobile Software Development. I love software's ability to bring anything to life, and its ever-changing landscape means there is always something new to learn and things to iterate upon."
        },
        {
            title: "Tech Stack",
            content: (
        <div className={"space-y-4"}>
            <div>
                <h4 className={"font-semibold text-gray-900 mb-2"}> Web Development</h4>
                <p  className={"text-gray-800"}>React, JavaScript/TypeScript, Node.js, and HTML/CSS</p>
            </div>
            <div>
                <h4 className={"font-semibold text-gray-900 mb-2"}> Mobile Development</h4>
                <p  className={"text-gray-800"}>Kotlin and Jetpack Compose</p>
            </div>
            <div>
                <h4 className={"font-semibold text-gray-900 mb-2"}> Version Control</h4>
                <p  className={"text-gray-800"}>Github</p>
            </div>
        </div>
    )
        },
        {
            title: "Personal Interests",
            content: "Outside of coding, I find joy in leathercrafting, cooking, and staying active through the gym and playing badminton (I used to compete nationally!). In the future I would love to immerse myself in wood and metal working, as well as throwing pottery. My hope is that many things in my home are designed and made by myself."
        },
        {
            title: "What Drives my Work",
            content: "I'm someone who loves to create. My whole life, the process of creating things from scratch, obsessing over details, learning how to refine my craft, and bringing joy with the things I make, has been integral to my identity. That very reason drew me toward Web and Mobile Software Development. I love software's ability to bring anything to life, and its ever-changing landscape means there is always something new to learn and things to iterate upon."
        },
        {
            title: "Tech Stack",
            content: (
                <div className={"space-y-4"}>
                    <div>
                        <h4 className={"font-semibold text-gray-900 mb-2"}> Web Development</h4>
                        <p  className={"text-gray-800"}>React, JavaScript/TypeScript, Node.js, and HTML/CSS</p>
                    </div>
                    <div>
                        <h4 className={"font-semibold text-gray-900 mb-2"}> Mobile Development</h4>
                        <p  className={"text-gray-800"}>Kotlin and Jetpack Compose</p>
                    </div>
                    <div>
                        <h4 className={"font-semibold text-gray-900 mb-2"}> Version Control</h4>
                        <p  className={"text-gray-800"}>Github</p>
                    </div>
                </div>
            )
        },
        {
            title: "Personal Interests",
            content: "Outside of coding, I find joy in leathercrafting, cooking, and staying active through the gym and playing badminton (I used to compete nationally!). In the future I would love to immerse myself in wood and metal working, as well as throwing pottery. My hope is that many things in my home are designed and made by myself."
        }
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
        api.on('select', updateSlides)
        updateSlides()
    }, [api]);

    return (
        <section id="about" className={"py-45"}>
            <h2 className={"text-4xl font-bold text-center mb-12"}> About Me </h2>
            <Carousel className={"max-w-7xl mx-auto px-15"} opts={{align: "center", loop : true, startIndex: 0,}} setApi={setApi} >
                <CarouselContent className={"-ml-2 md:-ml-4"}>
                    {aboutCards.map((item, index) => (
                        <CarouselItem key={index} className={"pl-2 md:pl-4 md:basis-4/10"}>
                            <Card className={"h-full bg-white/55 border-none"}>
                                <CardHeader>
                                    <CardTitle className={"text-center text-xl "}>{item.title}</CardTitle>
                                </CardHeader>
                                {/*<Separator className={""}/>*/}
                                <CardContent className={"flex items-center justify-center text-center leading-relaxed px-10 min-h-48"}>
                                    {typeof item.content === 'string' ? (
                                        <p className={"text-lg text-gray-800 p-3"}>
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
                <CarouselPrevious className={"bg-white/65 border-none hover:bg-white/75 rounded-xl"}/>
                <CarouselNext className={"bg-white/65 border-none hover:bg-white/75 rounded-xl"}/>
            </Carousel>
        </section>
    )
}