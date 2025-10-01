import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="h-screen bg-gradient-to-r from-[#0A0A0A] via-[#1A1A1A] to-[#2E2E2E] mx-auto w-full"
    >
      <div className="flex flex-col justify-center h-full pt-[100px]">
        <div className="mb-8">
          <div className="flex justify-center font-inter-tight font-semibold text-white text-[52.5px]">
            <div className="bg-gradient-to-r from-white via-purple-300 to-purple-400 bg-clip-text text-transparent">
              About Me
            </div>
          </div>
          <div className="flex justify-center sm:mt-[30px]">
            <div className="font-inter-tight text-[#F5F5F5] text-[20px] max-w-[800px] text-center ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              quis animi nulla quaerat voluptas necessitatibus officiis minus
              consequatur facere molestias? Consequatur debitis possimus illo
              quae velit, nulla aliquam eligendi magni.
            </div>
          </div>
          <div className="flex justify-center sm:mt-[40px]">
            <div className="transition-transform hover:scale-110 duration-500 py-[20px] px-[20px] w-fit rounded-2xl bg-purple-300 shadow-2xl border-[] hover:bg-gray-400">
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
          </div>
          <div className="grid grid-cols-3 gap-8 sm:mt-[60px] divide-x-3 divide-purple-300">
            <div className="transition-transform hover:scale-110 duration-500 font-inter-tight text-[16px] pl-[100px] pr-[50px]">
              <div className="text-[18px] font-semibold text-purple-300">
                Core Skill:
              </div>
              <div className="text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                nemo ea laborum dolorum facere nulla repellendus aperiam odio
                quas optio quasi, suscipit corrupti quae reiciendis vitae autem
                magni! Molestiae, modi?
              </div>
            </div>
            <div className="transition-transform hover:scale-110 duration-500 font-inter-tight text-[16px] px-10">
              <div className="text-[18px] font-semibold text-purple-300">
                Key Values:
              </div>
              <div className="text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                nemo ea laborum dolorum facere nulla repellendus aperiam odio
                quas optio quasi, suscipit corrupti quae reiciendis vitae autem
                magni! Molestiae, modi?
              </div>
            </div>
            <div className="transition-transform hover:scale-110 duration-500 font-inter-tight text-[16px] pr-[100px] pl-[50px]">
              <div className="text-[18px] font-semibold text-purple-300">
                Work Experience:
              </div>
              <div className="text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                nemo ea laborum dolorum facere nulla repellendus aperiam odio
                quas optio quasi, suscipit corrupti quae reiciendis vitae autem
                magni! Molestiae, modi?
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
