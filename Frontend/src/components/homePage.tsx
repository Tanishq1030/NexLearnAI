"use client";
import { useNavigate } from "react-router-dom";
import { FlipWordsDemo } from "./subcomponents/Flipword";
import { SparklesPreview } from "./subcomponents/sparklesPreview";

export function HomePage() {
    const navigate = useNavigate();
    return (<div className="bg-black">
        <nav className="absolute top-0 left-0 right-0 z-10 flex justify-center items-center pl-10 ">
                <div className="flex items-center gap-2 text-white font-bold text-xl">
                    <a onClick={() => navigate("/login")}>Login</a>
                    <a onClick={() => navigate("/register")}>Register</a>
                </div>
            </nav>
        <div className="grid grid-rows-3 grid-flow-col ">
{/* Suggested code may be subject to a license. Learn more: ~LicenseLog:3724648974. */}
            <div className="row-span-3 ..."><SparklesPreview/></div>
            <div className="col-span-2 ..."><FlipWordsDemo /></div>
            <div className="row-span-2 col-span-2 ..."><SparklesPreview /></div>
        </div>
            
            
        </div>


    );
}
