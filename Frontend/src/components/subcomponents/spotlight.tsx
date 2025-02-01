import { Spotlight } from "@/components/ui/spotlight-new";

export function SpotlightNewDemo() {
    return (
        <div className="h-screen w-screen  flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
            <Spotlight />
            <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
                <h1 className="pb-5 text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                    NexLearnAI <br />   Redefining the Future of Learning.
                </h1>
                <p className="mt-3  font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
                Empowering the next generation of learners with AI-driven intelligence, making education smarter, faster, and more personalized than ever before.
                </p>
            </div>
        </div>
    );
}
