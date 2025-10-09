"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="h-screen bg-gradient-to-r from-[#0A0A0A] via-[#1A1A1A] to-[#2E2E2E] mx-auto w-full"
    >
      <div className="flex flex-col justify-center h-full pt-[100px]">
        <div className="mb-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
            className="flex justify-center font-inter-tight font-semibold text-white text-[52.5px]"
          >
            <div className="bg-gradient-to-r from-white via-purple-300 to-purple-400 bg-clip-text text-transparent">
              About Me
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: false, amount: 0.3 }}
            className="flex justify-center sm:mt-[30px]"
          >
            <div className="font-inter-tight text-[#F5F5F5] text-[20px] max-w-[800px] text-center">
              Fresh graduate in Computer Science from Telkom University with a
              strong passion for Fullstack Web Development and Data Science.
              Skilled in React.js, Next.js, Node.js, and databases like MySQL
              and MongoDB. Experienced in Python and machine learning frameworks
              such as scikit-learn, with strong analytical and problem-solving
              skills.
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
            className="flex justify-center sm:mt-[40px]"
          >
            <div className="transition-transform hover:scale-110 duration-500 py-[15px] px-[20px] w-fit rounded-2xl bg-purple-300 shadow-2xl hover:bg-gray-400">
              <Link
                href="https://www.linkedin.com/in/fadilrifaldy"
                target="_blank"
                className="flex items-center gap-3 font-inter-tight text-[16px] text-[#212121]"
              >
                More about me
                <Image
                  src="/images/arrow.png"
                  alt="arrow"
                  width={15}
                  height={15}
                  className="w-[15px] h-[15px]"
                />
              </Link>
            </div>
          </motion.div>

          <div className="grid grid-cols-3 gap-8 sm:mt-[60px] divide-x-3 divide-purple-300">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: false, amount: 0.3 }}
              className="transition-transform hover:scale-110 duration-500 font-inter-tight text-[16px] pl-[100px] pr-[50px]"
            >
              <div className="text-[18px] font-semibold text-purple-300">
                Core Skill:
              </div>
              <div className="text-gray-300">
                Proficient in Fullstack Web Development and Data Science,
                experienced in building responsive applications with React.js,
                Next.js, and Node.js, managing databases using MySQL and using
                Python for data analysis and machine learning.
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: false, amount: 0.3 }}
              className="transition-transform hover:scale-110 duration-500 font-inter-tight text-[16px] px-10"
            >
              <div className="text-[18px] font-semibold text-purple-300">
                Key Values:
              </div>
              <div className="text-gray-300">
                I value leadership, teamwork, and effective communication,
                supported by strong time management, critical thinking,
                creativity, and problem-solving skills, which help me
                collaborate efficiently and adapt to diverse challenges.
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: false, amount: 0.3 }}
              className="transition-transform hover:scale-110 duration-500 font-inter-tight text-[16px] pr-[80px] pl-[50px]"
            >
              <div className="text-[18px] font-semibold text-purple-300">
                Work Experience:
              </div>
              <div className="text-gray-300">
                Completed an internship at PT. Telkom Indonesia (Persero) Tbk,
                within the Managed Service Operation Division in Bandung,
                Indonesia (June 2023 – August 2023), as part of the CNOP
                (Collaborative Network Optimization Project) Assurance team
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
