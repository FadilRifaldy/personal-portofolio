import { Navbar } from "@/components/navbar/navbar";
import About from "@/app/about/page";
import Skills from "@/app/skills/skills";
import Experience from "@/app/experience/experience";
import ContactMe from "@/app/contact-me/contact-me";
import Testimonials from "@/app/testimonials/testimonials";
import Portofolio from "@/app/portofolio/portofolio";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <Navbar />
      <main className="w-full overflow-hidden">
        {/* Hero Section */}
        <section className="relative h-screen pt-[100px] w-full overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/coding6.jpg" // ganti dengan path gambar Anda
              alt="Background"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/100 via-[#1A1A1A]/90 to-[#2E2E2E]/50 z-10"></div>
          <div className="relative z-20 flex h-[calc(100vh-100px)] items-center">
            <div className="flex flex-col justify-center w-1/2 pl-[100px] gap-15">
              <div className="font-semibold font-inter-tight text-[#0A0A0A] text-[15px] w-fit border px-[20px] py-[8px] rounded-2xl border-[] bg-purple-300 shadow-2xl">
                Informatics graduate 2024
              </div>
              <div className="bg-gradient-to-r from-white via-purple-300 to-purple-400 bg-clip-text text-transparent w-fit">
                <div className="font-inter-tight text-[67.22px] font-bold leading-tight">
                  Full-Stack Web
                </div>
                <div className="font-inter-tight text-[67.22px] font-bold leading-tight">
                  Developer
                </div>
              </div>
              <div className="font-inter-tight text-[18px] text-[#F5F5F5] max-w-[480px]">
                We empower individuals, families, and businesses with tailored
                financial strategies that grow wealth.
              </div>
              <div className="transition-transform hover:scale-110 duration-500 py-[20px] px-[20px] w-fit rounded-2xl bg-white border-[] hover:bg-gray-400 shadow-2xl">
                <Link
                  href="/#portofolio"
                  className="flex items-center gap-3 font-inter-tight text-[16px] text-black"
                >
                  View Portofolio
                  <Image
                    src="/images/arrow.png"
                    alt="arrow"
                    width={15}
                    height={15}
                    className="w-[15px] h-[15px]"
                  />
                </Link>
              </div>
            </div>
            <div className="w-1/2 h-full flex justify-center relative mr-[100px]">
              <div className="absolute h-[85vh] w-full bottom-0">
                {/* image */}
                <Image
                  className="transition-transform duration-500 hover:scale-110 hover:rotate-2 object-contain"
                  src="/images/fadil.png"
                  alt="fadil"
                  fill
                />
              </div>
            </div>
          </div>
        </section>
        {/* About Section */}
        <About />
        {/* Skill Section */}
        <Skills />
        {/* Portofolio Section */}
        <Portofolio />
        {/* Experience Section */}
        <Experience />
        {/* Testimonials Section */}
        <Testimonials />
        {/* Contact me Section */}
        <ContactMe />
      </main>
    </>
  );
}
