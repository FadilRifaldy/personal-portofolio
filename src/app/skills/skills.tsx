"use client";

import {
  FaPython,
  FaDatabase,
  FaReact,
  FaDocker,
  FaChartBar,
} from "react-icons/fa";
import { SiTensorflow } from "react-icons/si";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <section
      id="skills"
      className="font-inter-tight h-screen bg-gradient-to-r from-[#0A0A0A] via-[#1A1A1A] to-[#2E2E2E] mx-auto w-full"
    >
      <div className="flex flex-col justify-center items-center h-full pt-[100px]">
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
            className="font-semibold flex justify-center text-[52.5px] sm:mt-[25px]"
          >
            <div className="bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
              My Technical Skills
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            className="flex justify-center sm:mt-[20px] text-[#F5F5F5]"
          >
            <div className="max-w-[800px] text-center text-[20px]">
              The following are the technical skills I have mastered, covering
              various technologies and tools that support the development and
              implementation of solutions in the field of information technology
            </div>
          </motion.div>

          <div className="sm:mt-[30px] gap-5 grid grid-cols-3 grid-rows-2 place-items-center h-auto">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
              className="border-1 border-purple-300 bg-[#1E1E1E] rounded-2xl transition-transform hover:scale-104 duration-500 py-[12px] px-[20px] shadow-2xl w-[400px] h-[150px]"
            >
              <div className="flex items-center gap-3 text-[18px] font-semibold text-purple-300">
                <FaPython className="text-[#3776AB]" size={20} />
                Programming & Scripting
              </div>
              <ul className="text-[16px] text-gray-300 list-disc list-outside pl-6">
                <li>
                  Python (pandas, NumPy, matplotlib, scikit-learn, TensorFlow,
                  Keras)
                </li>
                <li>SQL (querying & data manipulation)</li>
                <li>JavaScript (the basis for interactive front-end)</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: false, amount: 0.3 }}
              className="border-1 border-purple-300 bg-[#1E1E1E] rounded-2xl transition-transform hover:scale-104 duration-500 py-[12px] px-[20px] shadow-2xl w-[400px] h-[150px]"
            >
              <div className="flex items-center gap-3 text-[18px] font-semibold text-purple-300">
                <SiTensorflow className="text-orange-500" size={20} />
                Data Science & Machine Learning
              </div>
              <ul className="text-[16px] text-gray-300 list-disc list-outside pl-6">
                <li>Supervised Learning</li>
                <li>
                  Model Evaluation (cross-validation, confusion matrix,
                  accuracy, precision, recall, F1-score)
                </li>
                <li>Feature Engineering & Data Preprocessing</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: false, amount: 0.3 }}
              className="border-1 border-purple-300 bg-[#1E1E1E] rounded-2xl transition-transform hover:scale-104 duration-500 py-[12px] px-[20px] shadow-2xl w-[400px] h-[150px]"
            >
              <div className="flex items-center gap-3 text-[18px] font-semibold text-purple-300">
                <FaChartBar className="text-yellow-500" size={20} />
                Visualization & Reporting
              </div>
              <ul className="text-[16px] text-gray-300 list-disc list-outside pl-6">
                <li>Python (Matplotlib, Seaborn)</li>
                <li>Power BI (interactive dashboard)</li>
                <li>Google Looker Studio (web-based data visualization)</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: false, amount: 0.3 }}
              className="border-1 border-purple-300 bg-[#1E1E1E] rounded-2xl transition-transform hover:scale-104 duration-500 py-[12px] px-[20px] shadow-2xl w-[400px] h-[150px]"
            >
              <div className="flex items-center gap-3 text-[18px] font-semibold text-purple-300">
                <FaReact className="text-blue-400" size={20} />
                Front-End Development
              </div>
              <ul className="text-[16px] text-gray-300 list-disc list-outside pl-6">
                <li>HTML, CSS</li>
                <li>Tailwind CSS</li>
                <li>React.js, Next.js</li>
                <li>JavaScript</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: false, amount: 0.3 }}
              className="border-1 border-purple-300 bg-[#1E1E1E] rounded-2xl transition-transform hover:scale-104 duration-500 py-[12px] px-[20px] shadow-2xl w-[400px] h-[150px]"
            >
              <div className="flex items-center gap-3 text-[18px] font-semibold text-purple-300">
                <FaDatabase className="text-green-500" size={20} />
                Back-End Development
              </div>
              <ul className="text-[16px] text-gray-300 list-disc list-outside pl-6">
                <li>Node.js</li>
                <li>API Development</li>
                <li>Database (MySQL, PostgreSQL, MongoDB)</li>
                <li>Authentication & Security</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: false, amount: 0.3 }}
              className="border-1 border-purple-300 bg-[#1E1E1E] rounded-2xl transition-transform hover:scale-104 duration-500 py-[12px] px-[20px] shadow-2xl w-[400px] h-[150px]"
            >
              <div className="flex items-center gap-3 text-[18px] font-semibold text-purple-300">
                <FaDocker className="text-blue-500" size={20} />
                DevOps & Tools
              </div>
              <ul className="text-[16px] text-gray-300 list-disc list-outside pl-6">
                <li>Git & GitHub (version control)</li>
                <li>Jupyter Notebook & Google Colab</li>
                <li>Docker (basics for environment & deployment)</li>
                <li>Cloud & Hosting</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
