"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Portofolio() {
  return (
    <section
      id="portofolio"
      className="min-h-screen bg-gradient-to-r from-[#0A0A0A] via-[#1A1A1A] to-[#2E2E2E] flex flex-col items-center px-8 py-16 font-inter-tight"
    >
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
        className="font-bold bg-gradient-to-r from-white via-purple-300 to-purple-400 bg-clip-text text-transparent text-center text-[52.5px] sm:mt-[65px]"
      >
        Portofolio
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
        className="max-w-[1100px] text-[#EAEAEA]"
      >
        <div className="flex flex-col gap-2 items-center sm:mt-[20px]">
          <h3 className="text-3xl font-semibold">
            Sentiment Analysis on Nanovest Reviews
          </h3>
          <p className="text-gray-400 italic text-center">
            Effectiveness of Word2Vec and TF-IDF in Sentiment Classification
            using Support Vector Machine
          </p>
          <p className="text-sm text-purple-300">
            Technologies: Python, Word2Vec, TF-IDF, SVM, Scikit-learn
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
        className="grid md:grid-cols-2 gap-8 max-w-[1300px] sm:mt-[30px]"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="space-y-4 border border-purple-300 px-3 py-3 rounded-2xl bg-[#1E1E1E] shadow-2xl"
        >
          <h4 className="text-xl font-semibold text-purple-300">Situation</h4>
          <p className="text-gray-300 text-[16px]">
            Nanovest reviews from Google Play Store were analyzed to understand
            user sentiment. Aim: compare Word2Vec, TF-IDF, and Weighted Word2Vec
            for sentiment classification.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="space-y-4 border border-purple-300 px-3 py-3 rounded-2xl bg-[#1E1E1E] shadow-2xl"
        >
          <h4 className="text-xl font-semibold text-purple-300">Task</h4>
          <p className="text-gray-300 text-[16px]">
            Identify the best feature extraction method to improve sentiment
            classification accuracy with SVM across different kernels.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="space-y-4 border border-purple-300 px-3 py-3 rounded-2xl bg-[#1E1E1E] shadow-2xl"
        >
          <h4 className="text-xl font-semibold text-purple-300">Action</h4>
          <p className="text-gray-300 text-[16px]">
            Implemented text preprocessing (cleansing, tokenization, stemming,
            stopword removal). Trained models using TF-IDF, Word2Vec, and
            Weighted Word2Vec. Tuned SVM hyperparameters with RandomizedSearch
            and applied resampling for class balance.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="space-y-4 border border-purple-300 px-3 py-3 rounded-2xl bg-[#1E1E1E] shadow-2xl"
        >
          <h4 className="text-xl font-semibold text-purple-300">Result</h4>
          <p className="text-gray-300 text-[16px]">
            Word2Vec with RBF kernel SVM achieved the best performance:
            <span className="font-bold text-white"> 95.46% accuracy</span>.
            Weighted Word2Vec achieved 95.29%, while TF-IDF alone reached
            93.31%.
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
        className="grid md:grid-cols-2 gap-8 mt-8 w-full max-w-[1300px]"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="shadow-2xl bg-[#1E1E1E] rounded-xl flex flex-col items-center justify-center p-4 border border-purple-300"
        >
          <div className="relative w-full h-[300px] mb-2">
            <Image
              src="/images/akurasi.png"
              alt="Accuracy Comparison"
              fill
              className="rounded-2xl shadow-2xl object-cover"
            />
          </div>
          <span className="text-gray-400 text-sm text-center">
            📊 Accuracy Comparison Chart
          </span>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="shadow-2xl bg-[#1E1E1E] rounded-xl flex flex-col items-center justify-center p-4 border border-purple-300"
        >
          <div className="relative w-full h-[300px] mb-2">
            <Image
              src="/images/skor.png"
              alt="Confusion Matrix"
              fill
              className="rounded-2xl shadow-2xl object-cover"
            />
          </div>
          <span className="text-gray-400 text-sm text-center">
            🧩 Confusion Matrix
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}
