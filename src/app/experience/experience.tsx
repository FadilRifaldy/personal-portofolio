import Image from "next/image";

export default function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen bg-gradient-to-r from-[#0A0A0A] via-[#1A1A1A] to-[#2E2E2E] flex items-center justify-center"
    >
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-10 bg-[#1E1E1E] rounded-2xl shadow-2xl px-[70px] py-[50px] mt-[100px] border-1 border-purple-300">
        <div className="flex-1 border border-purple-300 px-8 py-8 rounded-2xl shadow-2xl bg-gradient-to-r from-[#0A0A0A] via-[#1A1A1A] to-[#2E2E2E] transition-transform hover:scale-105 duration-500 ">
          <div className="bg-gradient-to-r from-white via-purple-300 to-purple-400 bg-clip-text text-transparent font-bold text-[52.5px] mt-[-20px] mb-3">
            Work Experience
          </div>
          <div className="inline-block text-black font-semibold text-[16px] px-5 py-2 rounded-full bg-purple-300 mb-3">
            PT. Telkom Indonesia (Persero)
          </div>

          <div className="space-y-3">
            <div className="text-[18px] text-[#F5F5F5] font-semibold">
              Managed Service Operation division
            </div>
            <div className="text-[16px] text-gray-400 italic">
              June 2023 – August 2023 | Bandung, Indonesia
            </div>
            <div className="text-[18px] text-[#F5F5F5] font-semibold">
              CNOP (Collaborative Network Optimization Project) Assurance
              Internship
            </div>
            <div className="text-[16px] text-gray-400">
              PT. Telkom is a State-Owned Enterprise (SOE) engaged in
              information and communication technology services and digital
              telecommunications in Indonesia.
            </div>
            <div className="text-[16px] text-[#F5F5F5]">
              Monitored customer networks, especially in completing CNOP
              (Collaborative Network Optimization Project) orders from Telkomsel
              of more than 1000 orders at Telkom Regional III West Java Witel
              Tasikmalaya using Engineering Network Order Management (ENOM)
              technology.
            </div>
          </div>
        </div>

        {/* Right Side - Images */}
        <div className="flex-1 grid grid-rows-2">
          <Image
            src="/images/dokumentasi2.jpg"
            alt="Telkom Internship 1"
            width={450}
            height={300}
            className="rounded-2xl shadow-2xl transition-transform duration-500 hover:scale-105 object-cover border-1 border-purple-300"
          />
          <Image
            src="/images/dokumentasi.jpg"
            alt="Telkom Internship 2"
            width={450}
            height={300}
            className="rounded-2xl shadow-2xl transition-transform duration-500 hover:scale-105 object-cover border-1 border-purple-300"
          />
        </div>
      </div>
    </section>
  );
}
