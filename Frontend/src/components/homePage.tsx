"use client";
import { useNavigate } from "react-router-dom";
import { ShinyButton } from "./ui/shiny-button";
import { SpotlightNewDemo } from "./subcomponents/spotlight";

export function HomePage() {
    const navigate = useNavigate();
    return (<div>
        <div >
            <nav className="absolute top-5 left-0 right-0 z-10 flex justify-center items-center ">
                <div className="flex items-center gap-2 text-white  font-semibold  ">
                    <ShinyButton onClick={() => navigate("/login")}>Login</ShinyButton>
                    <ShinyButton className="bg-zinc-900" onClick={() => navigate("/register")}>Register</ShinyButton>
                </div>
            </nav>
            <div >
                <SpotlightNewDemo />
            </div>
        </div>
    </div>
    );
}
