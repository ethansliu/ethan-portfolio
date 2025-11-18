interface ProjectCardProps {
    title: string;
    appType: string;
    description: string;
    techStack: string[];
    githubLink?: string;
    deployedLink?: string;
}

export default function ProjectCard({
    title,
    appType,
    description,
    techStack,
    githubLink,
    deployedLink,
    }: ProjectCardProps) {
    return (
        <>
            <div className="flex gap-5 items-center justify-center pl-10">
                <h3 className={"text-2xl text-gray-800"}>{title}</h3>
                <p className={"text-md text-gray-700"}>{appType}</p>
            </div>
            <p className={"text-2xl text-gray-700 leading-relaxed max-w-4xl"}> {description}</p>
            <div>
                <p className={"text-2xl text-gray-700 leading-relaxed max-w-4xl "}>
                    Built with {techStack.map((tech, index) => (
                        <span key={tech}>
                            {tech}
                            {index < techStack.length - 2 && ", "}
                            {index === techStack.length - 2 && ", and "}
                        </span>
                    ))}
                </p>
            </div>
            <div className={"flex text-2xl text-gray-700 leading-relaxed max-w-4xl pb-10 gap-8"}>
                {githubLink && <a href={githubLink} target="_blank" rel="noopener noreferrer">Github</a>}
                {deployedLink && <a href={deployedLink} target="_blank" rel="noopener noreferrer">Live Site</a>}
            </div>
        </>
    )
}