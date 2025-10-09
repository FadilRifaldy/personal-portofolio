"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="font-inter-tight h-screen py-[100px] bg-gradient-to-r from-[#0A0A0A] via-[#1A1A1A] to-[#2E2E2E] mx-auto w-full"
    >
      <div className="ml-[100px] sm:mt-[25px]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-[18px] font-semibold text-purple-300"
        >
          Client Feedback
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          className="flex justify-between font-semibold text-[32px]"
        >
          <div className="bg-gradient-to-r from-white via-purple-300 to-purple-400 bg-clip-text text-transparent w-fit ">
            What they say after using our product
          </div>
          <Link
            href="/#testimonials"
            className="flex items-center gap-3 mr-[100px] text-white text-[18px] hover:text-purple-500"
          >
            View All
          </Link>
        </motion.div>
      </div>

      <div className="flex justify-center w-full mt-5">
        <div className="max-w-[1350px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full px-4">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
            className="border border-purple-300 text-white p-6 rounded-2xl h-[220px] bg-[#1E1E1E] transition-transform duration-500 hover:scale-105"
          >
            <div className="flex gap-4">
              <Image
                src="/images/client1.png"
                alt="arrow"
                width={45}
                height={45}
                className="w-[45px] h-[45px] rounded-full"
              />
              <div>
                <div className="text-[18px] font-bold text-purple-300">
                  Bimosaurus
                </div>
                <div className="text-[14px] text-gray-400 italic">
                  Graphic Designer
                </div>
              </div>
            </div>
            <div className="mt-5">
              <Image
                src="/images/Ratings.png"
                alt="arrow"
                width={45}
                height={45}
                className="w-[125px] h-[25px] rounded-full"
              />
            </div>
            <div className="mt-5">
              I’ve used other kits, but this one is the best. The attention to
              detail and usability are truly amazing.
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: false, amount: 0.3 }}
            className="border border-purple-300 text-white p-6 rounded-2xl h-[220px] bg-[#1E1E1E] transition-transform duration-500 hover:scale-105"
          >
            <div className="flex gap-4">
              <Image
                src="/images/client2.png"
                alt="arrow"
                width={45}
                height={45}
                className="w-[45px] h-[45px] rounded-full"
              />
              <div>
                <div className="text-[18px] font-bold text-purple-300">
                  Crystal Maiden
                </div>
                <div className="text-[14px] text-gray-400 italic">
                  UIUX Designer
                </div>
              </div>
            </div>
            <div className="mt-5">
              <Image
                src="/images/Ratings.png"
                alt="arrow"
                width={45}
                height={45}
                className="w-[125px] h-[25px] rounded-full"
              />
            </div>
            <div className="mt-5">
              The quality of the design is top-notch, and I love how organized
              the files are. It’s easy to find what I need.
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
            className="border border-purple-300 text-white p-6 rounded-2xl h-[220px] bg-[#1E1E1E] transition-transform duration-500 hover:scale-105"
          >
            <div className="flex gap-4">
              <Image
                src="/images/client3.png"
                alt="arrow"
                width={45}
                height={45}
                className="w-[45px] h-[45px] rounded-full"
              />
              <div>
                <div className="text-[18px] font-bold text-purple-300">
                  Dazzle Healer
                </div>
                <div className="text-[14px] text-gray-400 italic">
                  Front End Developer
                </div>
              </div>
            </div>
            <div className="mt-5">
              <Image
                src="/images/Ratings.png"
                alt="arrow"
                width={45}
                height={45}
                className="w-[125px] h-[25px] rounded-full"
              />
            </div>
            <div className="mt-5">
              This kit exceeded my expectations! The components are versatile
              and make implementation much easier.
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: false, amount: 0.3 }}
            className="border border-purple-300 text-white p-6 rounded-2xl h-[220px] bg-[#1E1E1E] transition-transform duration-500 hover:scale-105"
          >
            <div className="flex gap-4">
              <Image
                src="/images/client4.png"
                alt="arrow"
                width={45}
                height={45}
                className="w-[45px] h-[45px] rounded-full"
              />
              <div>
                <div className="text-[18px] font-bold text-purple-300">
                  Roshan Pro Max
                </div>
                <div className="text-[14px] text-gray-400 italic">
                  UIUX Designer
                </div>
              </div>
            </div>
            <div className="mt-5">
              <Image
                src="/images/Ratings.png"
                alt="arrow"
                width={45}
                height={45}
                className="w-[125px] h-[25px] rounded-full"
              />
            </div>
            <div className="mt-5">
              Perfect for quick prototyping! The designs are professional and
              work seamlessly with my workflow.
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: false, amount: 0.3 }}
            className="border border-purple-300 text-white p-6 rounded-2xl h-[220px] bg-[#1E1E1E] transition-transform duration-500 hover:scale-105"
          >
            <div className="flex gap-4">
              <Image
                src="/images/client5.png"
                alt="arrow"
                width={45}
                height={45}
                className="w-[45px] h-[45px] rounded-full"
              />
              <div>
                <div className="text-[18px] font-bold text-purple-300">
                  Mirana Marci
                </div>
                <div className="text-[14px] text-gray-400 italic">
                  3D Designer
                </div>
              </div>
            </div>
            <div className="mt-5">
              <Image
                src="/images/Ratings.png"
                alt="arrow"
                width={45}
                height={45}
                className="w-[125px] h-[25px] rounded-full"
              />
            </div>
            <div className="mt-5">
              I was blown away by how complete this UI Kit is. It has everything
              I need, from assets to components.
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: false, amount: 0.3 }}
            className="border border-purple-300 text-white p-6 rounded-2xl h-[220px] bg-[#1E1E1E] transition-transform duration-500 hover:scale-105"
          >
            <div className="flex gap-4">
              <Image
                src="/images/client6.png"
                alt="arrow"
                width={45}
                height={45}
                className="w-[45px] h-[45px] rounded-full"
              />
              <div>
                <div className="text-[18px] font-bold text-purple-300">
                  Hearts of Taras
                </div>
                <div className="text-[14px] text-gray-400 italic">
                  Logo Designer
                </div>
              </div>
            </div>
            <div className="mt-5">
              <Image
                src="/images/Ratings.png"
                alt="arrow"
                width={45}
                height={45}
                className="w-[125px] h-[25px] rounded-full"
              />
            </div>
            <div className="mt-5">
              Amazing work! The color schemes are vibrant, and the icons fit
              perfectly with all my projects.
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
