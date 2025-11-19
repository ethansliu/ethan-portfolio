import { Card } from "@/components/ui/card.tsx"
import { Button } from "@/components/ui/button.tsx"

interface ProjectCardProps {
    title: string
    appType: string
    description: string
    techStack: string[]
    githubLink?: string
    deployedLink?: string
    screenshot?: string
    imagePosition?: "left" | "right"
}

export default function ProjectCard({
                                        title,
                                        appType,
                                        description,
                                        techStack,
                                        githubLink,
                                        deployedLink,
                                        screenshot,
                                        // @ts-ignore
                                        imagePosition = "right",
                                    }: ProjectCardProps) {
    return (
        <Card className="gap-4 sm:gap-6 lg:gap-8 pt-6 sm:pt-10 lg:pt-15 px-10 sm:px-10 lg:px-20 w-full bg-white/40 border-white/5 shadow-2xl/30">
            <div
                className={`flex flex-col ${
                    screenshot ? "2xl:flex-row" : ""
                } gap-6 sm:gap-8 items-start ${
                    imagePosition === "left" && screenshot ? "2xl:flex-row-reverse" : ""
                }`}
            >
                <div className="flex-1 space-y-4 sm:space-y-6 lg:space-y-8 w-full">
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-5 items-center justify-center">
                        <h3 className="text-xl sm:text-2xl lg:text-3xl text-gray-800 font-jost font-semibold">
                            {title}
                        </h3>
                        <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 font-handjet font-light italic">
                            {appType}
                        </p>
                    </div>

                    <p className="text-base sm:text-lg lg:text-2xl text-gray-700 leading-relaxed font-redhat font-medium">
                        {description}
                    </p>

                    <div>
                        <p className="text-base sm:text-lg lg:text-2xl text-gray-700 leading-relaxed font-redhat font-medium">
                            Built with{" "}
                            {techStack.map((tech, index) => (
                                <span key={tech}>
                                    {tech}
                                    {index < techStack.length - 2 && ", "}
                                    {index === techStack.length - 2 && ", and "}
                                </span>
                            ))}
                        </p>
                    </div>

                    {!screenshot && (
                        <div className="flex flex-col sm:flex-row justify-evenly text-lg sm:text-xl lg:text-2xl text-gray-700 leading-relaxed pb-6 sm:pb-8 lg:pb-10 gap-4 sm:gap-8 font-jost font-light italic">
                            {githubLink && (
                                <Button className="bg-white/10 hover:bg-white/20 text-gray-800 w-auto px-6 py-5 sm:px-8 sm:py-6 items-center">
                                    <a href={githubLink} target="_blank" rel="noopener noreferrer">
                                        Github
                                    </a>
                                </Button>
                            )}

                            {deployedLink && (
                                <Button className="bg-white/10 hover:bg-white/20 text-gray-800 w-auto px-6 py-5 sm:px-8 sm:py-6 items-center">
                                    <a href={deployedLink} target="_blank" rel="noopener noreferrer">
                                        Live Site
                                    </a>
                                </Button>
                            )}
                        </div>
                    )}
                </div>

                {screenshot && (
                    <div className="flex-1 space-y-3 sm:space-y-4 w-full">
                        <img
                            src={screenshot}
                            alt={`${title} screenshot`}
                            className="rounded-xl shadow-lg w-full h-auto object-cover"
                        />

                        <div className="flex flex-col sm:flex-row justify-evenly text-lg sm:text-xl lg:text-2xl text-gray-700 leading-relaxed pb-6 sm:pb-8 lg:pb-10 gap-4 sm:gap-8 font-jost font-light italic">
                            {githubLink && (
                                <Button className="bg-white/10 hover:bg-white/20 text-gray-800 shadow-2xl w-auto px-6 py-5 sm:px-8 sm:py-6 items-center">
                                    <a href={githubLink} target="_blank" rel="noopener noreferrer">
                                        Github
                                    </a>
                                </Button>
                            )}

                            {deployedLink && (
                                <Button className="bg-white/10 hover:bg-white/20 text-gray-800 shadow-2xl w-auto px-6 py-5 sm:px-8 sm:py-6 items-center">
                                    <a href={deployedLink} target="_blank" rel="noopener noreferrer">
                                        Live Site
                                    </a>
                                </Button>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </Card>
    )
}