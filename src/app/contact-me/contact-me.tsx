"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ContactMe() {
  return (
    <section
      id="contact-me"
      className="min-h-screen bg-gradient-to-r from-[#0A0A0A] via-[#1A1A1A] to-[#2E2E2E] flex flex-col items-center justify-center px-8 py-16 font-inter-tight"
    >
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
        className="font-bold bg-gradient-to-r from-white via-purple-300 to-purple-400 bg-clip-text text-transparent text-center text-[52.5px] mt-[70px] mb-3"
      >
        Contact Me
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        viewport={{ once: false, amount: 0.3 }}
        className="text-[20px] max-w-[550px] text-[#F5F5F5] text-center mb-8"
      >
        Let’s connect! Got a project, job offer, or just want to say hi? Drop me
        a message
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: false, amount: 0.3 }}
        className="max-w-[1000px] w-full grid md:grid-cols-2 gap-12 bg-[#1E1E1E] rounded-2xl shadow-2xl p-10 border border-purple-300"
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <form className="space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-purple-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-purple-300 text-gray-50 bg-transparent"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-purple-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-purple-300 text-gray-50 bg-transparent"
            />
            <textarea
              placeholder="Your Message . . ."
              className="w-full border border-purple-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-purple-300 text-gray-50 bg-transparent"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-purple-300 text-black font-semibold py-3 rounded-lg transition-transform hover:scale-105 hover:bg-gray-400 duration-500"
            >
              Send Message
            </button>
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: false, amount: 0.3 }}
          className="flex flex-col justify-center"
        >
          <h3 className="text-2xl font-semibold text-purple-300 mb-4">
            Get in Touch
          </h3>
          <p className="text-[#F5F5F5] mb-6">
            I’m always open to new ideas, opportunities, or even just a friendly
            chat. Reach out anytime!
          </p>

          <div className="space-y-4">
            <a
              href="mailto:fadilrifaldy228@gmail.com"
              className="flex items-center gap-3 text-[#F5F5F5] transition-transform hover:scale-110 duration-500"
            >
              <Image
                src="/images/email_logo.png"
                alt="email"
                width={20}
                height={20}
                className="w-[20px] h-[20px]"
              />
              fadilrifaldy228@gmail.com
            </a>
            <a
              id="ig"
              href="https://www.instagram.com/fadilrifaldyyy"
              target="_blank"
              className="flex items-center gap-3 text-[#F5F5F5] transition-transform hover:scale-110 duration-500"
            >
              <Image
                src="/images/Instagram_icon.png"
                alt="instagram"
                width={20}
                height={20}
                className="w-[20px] h-[20px]"
              />
              instagram.com/fadilrifaldyyy
            </a>
            <a
              href="https://linkedin.com/in/fadilrifaldy"
              target="_blank"
              className="flex items-center gap-3 text-[#F5F5F5] transition-transform hover:scale-110 duration-500"
            >
              <Image
                src="/images/linkedIn_logo.png"
                alt="linkedin"
                width={20}
                height={20}
                className="w-[20px] h-[20px]"
              />
              linkedin.com/in/fadilrifaldy
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
