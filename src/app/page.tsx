"use client";

import { Navbar } from "@/components/navbar/navbar";
import About from "@/app/about/page";
import Skills from "@/app/skills/skills";
import Experience from "@/app/experience/experience";
import ContactMe from "@/app/contact-me/contact-me";
import Testimonials from "@/app/testimonials/testimonials";
import Portofolio from "@/app/portofolio/portofolio";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="w-full overflow-hidden">
        <section className="relative h-screen pt-[100px] w-full overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/coding6.jpg"
              alt="Background"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/100 via-[#1A1A1A]/90 to-[#2E2E2E]/50 z-10"></div>

          <div className="relative z-20 flex h-[calc(100vh-100px)] items-center">
            <div className="flex flex-col justify-center w-1/2 pl-[100px] gap-6">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false, amount: 0.3 }}
                className="font-semibold font-inter-tight text-[#0A0A0A] text-[15px] w-fit border px-[20px] py-[8px] rounded-2xl bg-purple-300 shadow-2xl"
              >
                Informatics graduate 2024
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.1 }}
                viewport={{ once: false, amount: 0.3 }}
                className="bg-gradient-to-r from-white via-purple-300 to-purple-400 bg-clip-text text-transparent w-fit"
              >
                <div className="font-inter-tight text-[67.22px] font-bold leading-tight">
                  Full-Stack Web
                </div>
                <div className="font-inter-tight text-[67.22px] font-bold leading-tight">
                  Developer
                </div>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.2 }}
                viewport={{ once: false, amount: 0.3 }}
                className="font-inter-tight text-[18px] text-[#F5F5F5] max-w-[480px]"
              >
                We empower individuals, families, and businesses with tailored
                financial strategies that grow wealth.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.3 }}
                viewport={{ once: false, amount: 0.3 }}
                className="transition-transform hover:scale-110 duration-500 py-[20px] px-[20px] w-fit rounded-2xl bg-white hover:bg-gray-400 shadow-2xl mt-3"
              >
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
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: false, amount: 0.4 }}
              className="w-1/2 h-full flex justify-center relative mr-[100px]"
            >
              <div className="absolute h-[85vh] w-full bottom-0">
                <Image
                  className="transition-transform duration-500 hover:scale-110 hover:rotate-2 object-contain"
                  src="/images/fadil.png"
                  alt="fadil"
                  fill
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Other Sections */}
        <About />
        <Skills />
        <Portofolio />
        <Experience />
        <Testimonials />
        <ContactMe />
      </main>
    </>
  );
}
