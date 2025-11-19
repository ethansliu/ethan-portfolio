import {Card} from "@/components/ui/card.tsx";
import {Button} from "@/components/ui/button.tsx";

interface ProjectCardProps {
    title: string;
    appType: string;
    description: string;
    techStack: string[];
    githubLink?: string;
    deployedLink?: string;
    screenshot?: string;
    imagePosition?: "left" | "right";
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
        <>
            <Card className="gap-8 pt-15 px-20 w-full bg-white/40 border-white/5 shadow-2xl/30">
                <div className={`flex gap-8 items-start ${imagePosition === "left" ? "flex-row-reverse" : ""}`}>
                    <div className={"flex-1 space-y-8"}>
                        <div className="flex gap-5 items-center justify-center pl-10">
                            <h3 className={"text-3xl text-gray-800 font-jost font-semibold"}>{title}</h3>
                            <p className={"text-2xl text-gray-700 font-handjet font-light italic"}>{appType}</p>
                        </div>
                        <p className={"text-2xl text-gray-700 leading-relaxed max-w-4xl font-redhat font-medium"}> {description}</p>
                        <div>
                            <p className={"text-2xl text-gray-700 leading-relaxed max-w-4xl font-redhat font-medium"}>
                                Built with {techStack.map((tech, index) => (
                                    <span key={tech}>
                                        {tech}
                                        {index < techStack.length - 2 && ", "}
                                        {index === techStack.length - 2 && ", and "}
                                    </span>
                                ))}
                            </p>
                        </div>
                        {!screenshot && (
                            <div className={"flex justify-evenly text-2xl text-gray-700 leading-relaxed max-w-4xl pb-10 gap-8 font-jost font-light italic"}>
                                {githubLink &&
                                    <Button className={"bg-white/10 hover:bg-white/20 text-gray-800"}>
                                        <a href={githubLink} target="_blank" rel="noopener noreferrer">Github</a>
                                    </Button>
                                }
                                {deployedLink &&
                                    <Button className={"bg-white/10 hover:bg-white/20 text-gray-800"}>
                                        <a href={deployedLink} target="_blank" rel="noopener noreferrer">Live Site</a>
                                    </Button>
                                }
                            </div>
                        )}
                    </div>


                {screenshot && (
                    <div className={"flex-1 space-y-4"}>
                        <img
                            src={screenshot}
                            alt={`${title} screenshot`}
                            className={"rounded-xl shadow-lg w-full h-auto object-cover"}
                            />
                        <div className={"flex justify-evenly text-2xl text-gray-700 leading-relaxed max-w-4xl pb-10 gap-8 font-jost font-light italic"}>
                            {githubLink &&
                                <Button className={"bg-white/10 hover:bg-white/20 text-gray-800 shadow-2xl"}>
                                    <a href={githubLink} target="_blank" rel="noopener noreferrer">Github</a>
                                </Button>}
                            {deployedLink &&
                                <Button className={"bg-white/10 hover:bg-white/20 text-gray-800 shadow-2xl "}>
                                    <a href={deployedLink} target="_blank" rel="noopener noreferrer">Live Site</a>
                                </Button>}
                        </div>
                    </div>

                )}
                </div>
            </Card>
        </>
    )
}