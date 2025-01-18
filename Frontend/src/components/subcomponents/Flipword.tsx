import { FlipWords } from "../ui/flip-words";

export function FlipWordsDemo() {
    const words = ["better", "cute", "beautiful", "modern"];

    return (
        <div className="h-[40rem] bg-black flex justify-center items-center px-4">
            <div className="text-6xl mx-auto  font-bold text-neutral-400 dark:text-neutral-100">
                Build
                <FlipWords words={words} /> <br />
                websites with Aceternity UI
            </div>
        </div>
    );
}
