import { Vortex } from "../ui/vortex";
import { useNavigate } from "react-router-dom";

export function VortexDemo() {
    const navigate = useNavigate();
    return (
        <div className="w-screen mx-auto rounded-md  h-screen overflow-hidden">
            <Vortex
                backgroundColor="black"
                className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
            >
                <h2 className="text-white text-6xl md:text-9xl  font-bold text-center">
                    NexLearnAI
                </h2>
                <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
                &quot;Empowering Minds, Transforming Education &ndash; Experience the Future with NexLearn AI.&quot;
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
                    <button onClick={() => navigate("/login")} className="px-4 py-2 bg-white hover:bg-gray-300 transition duration-200 rounded-lg text-black ">
                        Login
                    </button>
                    <button className="px-4 py-2  text-white ">Team</button>
                </div>
            </Vortex>
        </div>
    );
}
