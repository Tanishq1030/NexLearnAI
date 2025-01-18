
import { RegisterForm } from "@/components/RegisterPage"

export default function RegisterPage() {
    return (
        <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-background p-6 md:p-10 subpixel-antialiased text-white bg-black">
            <div className="w-full max-w-sm">
                <RegisterForm />
            </div>
        </div>
    )
}
