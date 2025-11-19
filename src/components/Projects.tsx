import ProjectCard from "./ProjectCard.tsx"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible.tsx"
import { useState } from "react"
import { Button } from "@/components/ui/button.tsx"
import adworthImage from "../assets/project-images/adworth.png"
import sparkbytesImage from "../assets/project-images/sparkbytes.png"

export default function Projects() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <section
            id="projects"
            className="flex flex-col items-center justify-center px-10 sm:px-20 lg:px-50 py-16 sm:py-32 lg:py-45 pb-24 sm:pb-50 lg:pb-75 text-center"
        >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl px-6 sm:px-10 lg:px-15 bg-white/10 border-none rounded-3xl sm:rounded-4xl h-16 sm:h-20 lg:h-24 min-w-fit inline-flex items-center justify-center font-jost font-semibold">
                My Projects
            </h2>

            <div className="pt-10 sm:pt-16 lg:pt-20 pb-10 sm:pb-16 lg:pb-20 w-full">
                <div className="pb-10 sm:pb-16 lg:pb-20 w-full">
                    <ProjectCard
                        title="AdWorth AI"
                        appType="Full Stack Web Application"
                        description="Content creator deal benchmarking website that helps make creator pay more transparent. Creators are further empowered with AI-powered negotiation tools and brand marketplace."
                        techStack={["React+Vite", "TypeScript", "Tailwind CSS", "Supabase", "Node.js", "OpenAI API"]}
                        deployedLink="https://www.adworth.ai"
                        screenshot={adworthImage}
                        imagePosition="right"
                    />
                </div>

                <div className="pb-10 sm:pb-16 lg:pb-20 w-full">
                    <ProjectCard
                        title="SparkBytes"
                        appType="Full Stack Web Application"
                        description="Platform that connects BU students with campus events offering free food, helping reduce leftover waste and boost attendance. Features organizer verification, event posting tools, real-time comments, and a star-rating system that helps students quickly gauge event quality and reliability."
                        techStack={["React+Vite", "TypeScript", "Ant Design UI Library", "Firebase", "Node.js", "MapBox API"]}
                        githubLink="https://github.com/simransingh19/sparkbytes"
                        deployedLink="https://681421597e29406dae061f0b--chic-griffin-d3de53.netlify.app"
                        screenshot={sparkbytesImage}
                        imagePosition="left"
                    />
                </div>

                <Collapsible open={isOpen} onOpenChange={setIsOpen} className="mt-4 sm:mt-6 lg:mt-8">
                    <CollapsibleContent className="flex flex-col 2xl:flex-row gap-10 sm:gap-8 justify-center w-full pb-10 sm:pb-16 lg:pb-20">
                        <ProjectCard
                            title="Wise Waste"
                            appType="Android Mobile Application"
                            description="Responsive Android budgeting app featuring OCR-based receipt scanning, smart bill splitting, and interactive visual spending insights. Extracted receipt data is automatically cleaned, categorized, and mapped into customizable budget categories. The adaptive Jetpack Compose layout supports seamless use across phones and tablets."
                            techStack={["Kotlin", "Jetpack Compose", "Firebase", "Verify API"]}
                            githubLink="https://github.com/aisora1222/FinalProject"
                        />

                        <ProjectCard
                            title="VidOwna"
                            appType="Decentralized Web Application"
                            description="Decentralized social media platform using Solidity smart contracts deployed on the Ethereum blockchain to guarantee that creators are paid what they deserve. Publicly viewable smart contract code ensures payout transparency, and view counts are tamper proof through a Trusted Execution Environment that provides attestation for content views."
                            techStack={["React+Vite", "JavaScript", "Node.js", "Python", "Solidity", "AWS Nitro Enclave"]}
                            githubLink="https://github.com/VidOwna"
                        />
                    </CollapsibleContent>

                    <CollapsibleTrigger asChild>
                        <Button
                            variant="outline"
                            className="mb-4 bg-white/15 border-white/5 shadow-2xl/50 hover:bg-white/30 rounded-3xl sm:rounded-4xl font-handjet text-lg sm:text-xl font-light px-6 py-5 sm:px-8 sm:py-6"
                        >
                            {isOpen ? "Show Less" : "Show More Projects"}
                        </Button>
                    </CollapsibleTrigger>
                </Collapsible>
            </div>
        </section>
    )
}