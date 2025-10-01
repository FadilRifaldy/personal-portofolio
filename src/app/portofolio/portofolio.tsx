import Image from "next/image";

export default function Portofolio() {
  return (
    <section
      id="portofolio"
      className="min-h-screen bg-gradient-to-r from-[#0A0A0A] via-[#1A1A1A] to-[#2E2E2E] flex flex-col items-center px-8 py-16 font-inter-tight"
    >
      <h2 className="font-bold bg-gradient-to-r from-white via-purple-300 to-purple-400 bg-clip-text text-transparent text-center text-[52.5px] sm:mt-[65px]">
        Portofolio
      </h2>
      <div className="max-w-[1100px] text-[#EAEAEA]">
        {/* Header */}
        <div className="flex flex-col gap-2 items-center sm:mt-[20px]">
          <h3 className="text-3xl font-semibold">
            Sentiment Analysis on Nanovest Reviews
          </h3>
          <p className="text-gray-400 italic">
            Effectiveness of Word2Vec and TF-IDF in Sentiment Classification
            using Support Vector Machine
          </p>
          <p className="text-sm text-purple-300">
            Technologies: Python, Word2Vec, TF-IDF, SVM, Scikit-learn
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-8 max-w-[1300px] sm:mt-[30px] ">
        <div className="space-y-4 border border-purple-300 px-3 py-3 rounded-2xl bg-[#1E1E1E] shadow-2xl transition-transform duration-500 hover:scale-105">
          <h4 className="text-xl font-semibold text-purple-300">Situation</h4>
          <p className="text-gray-300 text-[16px]">
            Nanovest reviews from Google Play Store were analyzed to understand
            user sentiment. Aim: compare Word2Vec, TF-IDF, and Weighted Word2Vec
            for sentiment classification.
          </p>
        </div>

        <div className="space-y-4 border border-purple-300 px-3 py-3 rounded-2xl bg-[#1E1E1E] shadow-2xl transition-transform duration-500 hover:scale-105">
          <h4 className="text-xl font-semibold text-purple-300">Task</h4>
          <p className="text-gray-300 text-[16px]">
            Identify the best feature extraction method to improve sentiment
            classification accuracy with SVM across different kernels.
          </p>
        </div>

        <div className="space-y-4 border border-purple-300 px-3 py-3 rounded-2xl bg-[#1E1E1E] shadow-2xl transition-transform duration-500 hover:scale-105">
          <h4 className="text-xl font-semibold text-purple-300">Action</h4>
          <p className="text-gray-300 text-[16px]">
            Implemented text preprocessing (cleansing, tokenization, stemming,
            stopword removal). Trained models using TF-IDF, Word2Vec, and
            Weighted Word2Vec. Tuned SVM hyperparameters with RandomizedSearch
            and applied resampling for class balance.
          </p>
        </div>

        <div className="space-y-4 border border-purple-300 px-3 py-3 rounded-2xl bg-[#1E1E1E] shadow-2xl transition-transform duration-500 hover:scale-105">
          <h4 className="text-xl font-semibold text-purple-300">Result</h4>
          <p className="text-gray-300 text-[16px]">
            Word2Vec with RBF kernel SVM achieved the best performance:
            <span className="font-bold text-white"> 95.46% accuracy</span>.
            Weighted Word2Vec achieved 95.29%, while TF-IDF alone reached
            93.31%.
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-8 mt-8 w-full max-w-[1300px]">
        <div className="shadow-2xl bg-[#1E1E1E] rounded-xl flex flex-col items-center justify-center p-4 border border-purple-300 transition-transform duration-500 hover:scale-105">
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
        </div>

        <div className="shadow-2xl bg-[#1E1E1E] rounded-xl flex flex-col items-center justify-center p-4 border border-purple-300 transition-transform duration-500 hover:scale-105">
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
        </div>
      </div>
    </section>
  );
}
