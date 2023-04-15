import Navbar from "@/components/navbar"
import Banner from "@/components/index/banner"
import Onboarding from "@/components/index/onboarding"

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="h-screen w-full">
        <Banner />
        <Onboarding />
      </div >
    </>
  )
}