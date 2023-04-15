import Customer from "./customer"
import Partner from "./partner"

export default function Onboarding() {
    return (
        <div
            id="about"
            className="w-screen z-10 absolute flex flex-wrap justify-center bg-black"
        >
            <Customer />
            <Partner />
        </div>
    )
}