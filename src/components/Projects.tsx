import ProjectCard from "./ProjectCard.tsx";

export default function Projects() {
    return (
        <section id="projects" className={"flex flex-col items-center justify-center px-50 py-45 pb-100 text-center"}>
            <h2 className={"text-4xl pb-15"}> My Projects </h2>
            <ProjectCard
                title="AdWorth AI"
                appType="Full Stack Web Application"
                description="Content creator deal benchmarking website that helps make creator pay more transparent.
                Creators are further empowered with AI-powered negotiation tools and brand marketplace."
                techStack={["React+Vite", "TypeScript", "Tailwind CSS", "Supabase", "Node.js", "OpenAI API"]}
                deployedLink={"https://www.adworth.ai"}
            />
            <ProjectCard
                title="SparkBytes"
                appType="Full Stack Web Application"
                description="Website to help connect BU students with events that have free food; reducing leftover food waste."
                techStack={["React+Vite", "TypeScript", "Ant Design UI Library", "Firebase", "Node.js", "MapBox API"]}
                githubLink={"https://github.com/simransingh19/sparkbytes"}
                deployedLink={"https://681421597e29406dae061f0b--chic-griffin-d3de53.netlify.app"}
            />
            <ProjectCard
                title="Wise Waste"
                appType="Android Mobile Application"
                description="Responsively designed Android Mobile Application for easy budgeting via OCR receipt scanning, bill splitting tool, and interactive visual charts."
                techStack={["Kotlin", "Jetpack Compose", "Firebase", "Verify API"]}
                githubLink={"https://github.com/aisora1222/FinalProject"}
            />
            <ProjectCard
                title="VidOwna"
                appType="Decentralized Web Application"
                description="Decentralized social media platform using Solidity smart contracts deployed on the Ethereum blockchain to guarantee that creators
                are paid what they deserve. Publicly viewable smart contract code ensures payout transparency, and view counts are tamper proof through
                a Trusted Execution Environment that provides attestation for content views."
                techStack={["React+Vite", "JavaScript", "Node.js", "Python", "Solidity", "AWS Nitro Enclave"]}
                githubLink={"https://github.com/VidOwna"}
            />
        </section>
    )
}