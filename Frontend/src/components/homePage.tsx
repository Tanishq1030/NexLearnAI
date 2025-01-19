"use client";
import { useNavigate } from "react-router-dom";
import { VortexDemo } from "./subcomponents/vortexhome";




export function HomePage() {
    // const navigate = useNavigate();
    return (<div >
        {/* <nav className="absolute top-0 left-0 right-0 z-10 flex justify-center items-center pl-10 ">
                <div className="flex items-center gap-2 text-white pt-4 text-x">
                    <a onClick={() => navigate("/login")}>Login</a>
                    <a onClick={() => navigate("/register")}>Register</a>
                </div>
            </nav> */}
        <div >
            <div ><VortexDemo /></div>
        </div>
            
            
        </div>


    );
}
