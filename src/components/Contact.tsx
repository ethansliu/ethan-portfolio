import { useState, useRef } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
// import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { toast } from "sonner"

export default function Contact() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [isHolding, setIsHolding] = useState(false)
    const [holdProgress, setHoldProgress] = useState(0)

    const holdTimerRef = useRef<number | null>(null)
    const progressIntervalRef = useRef<number | null>(null)

    const handleMouseDown = () => {
        setIsHolding(true)
        let progress = 0

        progressIntervalRef.current = setInterval(() => {
            progress += 100 / 10
            setHoldProgress(progress)
        }, 100)

        holdTimerRef.current = setTimeout(() => {
            handleSubmit()
        }, 1000)
    }

    const handleMouseUp = () => {
        setIsHolding(false)
        setHoldProgress(0)
        if (holdTimerRef.current) clearTimeout(holdTimerRef.current)
        if (progressIntervalRef.current) clearInterval(progressIntervalRef.current)
    }

    const handleSubmit = async () => {
        const formData = {
            access_key: "c002f9f6-a674-4181-a6ca-08d683e4579d",
            name,
            email,
            message,
        }

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            })

            const data = await response.json()

            if (data.success) {
                toast.success("Message sent!", {
                    description: "Thanks for reaching out. I'll get back to you soon.",
                })
                setName("")
                setEmail("")
                setMessage("")
            } else {
                toast.error("Failed to send", {
                    description: "Please try again or email me directly at esliu@bu.edu.",
                })
            }
        } catch (error) {
            toast.error("Error", {
                description: "Something went wrong. Please try again or email me directly at esliu@bu.edu.",
            })
        }

        setIsHolding(false)
        setHoldProgress(0)
        if (holdTimerRef.current) clearTimeout(holdTimerRef.current)
        if (progressIntervalRef.current) clearInterval(progressIntervalRef.current)
    }

    return (
        <section id="contact" className="py-20 flex justify-center pb-50 flex-col items-center text-center">
            <h2 className={"text-4xl justify-center items-center px-15 bg-white/10 border-none rounded-4xl h-24 min-w-1/6 inline-flex font-jost font-semibold"}>
                Contact
            </h2>
            <Card className="max-w-xl w-full bg-white/40 border-white/5 shadow-2xl/30 mt-20">
                <CardHeader>
                    <CardTitle className="text-3xl text-center font-handjet font-light">Have a question? Let's chat!</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="space-y-2">
                        {/*<Label htmlFor="name">Name</Label>*/}
                        <Input
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Your name"
                            className={"border-white/20 font-redhat font-medium text-gray-800 focus-visible:ring-gray-50/10 focus-visible:border-gray-100/10"}
                        />
                    </div>

                    <div className="space-y-2">
                        {/*<Label htmlFor="email">Email</Label>*/}
                        <Input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Your email"
                            className={"border-white/20 font-redhat font-medium text-gray-800 focus-visible:ring-gray-50/10 focus-visible:border-gray-100/10"}
                        />
                    </div>

                    <div className="space-y-2">
                        {/*<Label htmlFor="message">Message</Label>*/}
                        <Textarea
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Your message..."
                            rows={6}
                            className={"border-white/20 font-redhat font-medium text-gray-800 focus-visible:ring-gray-50/10 focus-visible:border-gray-100/10"}
                        />
                    </div>

                    <Button
                        className="w-1/3 relative overflow-hidden bg-white/10 hover:bg-white/15 font-redhat font-medium text-gray-800 shadow-2xl border border-white/5 "
                        onMouseDown={handleMouseDown}
                        onMouseUp={handleMouseUp}
                        onMouseLeave={handleMouseUp}
                        onTouchStart={handleMouseDown}
                        onTouchEnd={handleMouseUp}
                        disabled={!name || !email || !message}
                    >
            <span className="relative z-10">
              {isHolding ? "Keep holding to submit..." : "Hold to Submit"}
            </span>
                        <div
                            className="absolute left-0 top-0 h-full bg-black/15 transition-all duration-100 "
                            style={{ width: `${holdProgress}%` }}
                        />
                    </Button>
                </CardContent>
            </Card>
        </section>
    )
}
