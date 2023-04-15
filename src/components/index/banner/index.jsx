import Link from "next/link"
import metro from '@/assets/metro.png'

export default function Banner() {
    return (
        <div
            className="h-screen grid place-items-center bg-no-repeat bg-fixed"
            style={{
                backgroundImage: `url('${metro.src}')`,
                backgroundSize: `100% 100%`,
            }}
        >
            <div className="z-0 fixed">
                <Link href='/' className="text-white font-extrabold md:text-4xl text-2xl">Your last mile ride partner</Link>
                <a
                    className="block mt-10 text-xl font-medium text-center my-3 px-2 py-1 text-black bg-slate-100 rounded-lg"
                    href="#about"
                >
                    Get Me Started
                </a>
            </div>
        </div>
    )
}