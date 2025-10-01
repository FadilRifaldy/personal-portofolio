import { Navlink } from "../navlink/navlink";

export function Navbar() {
  return (
    <nav className="font-inter-tight flex text-white text-[18px] items-center bg-[#0A0A0A] h-[100px] w-full fixed top-0 left-0 right-0 z-50">
      <div className="flex-1">
        <span className="text-[18px] pl-[100px] font-semibold">Fadil Rifaldy</span>
      </div>
      <ul className="flex items-center gap-2 pr-[100px]">
        <span className="transition-transform hover:scale-110 duration-500 border-[#032246] px-[20px] py-[15px] hover:bg-[#2E2E2E] rounded-[15px]">
          <Navlink linkHref="/" linkContent="Home" />
        </span>
        <span className="transition-transform hover:scale-110 duration-500 border-[#032246] px-[20px] py-[15px] hover:bg-[#2E2E2E] rounded-[15px]">
          <Navlink linkHref="/#about" linkContent="About" />
        </span>
        <span className="transition-transform hover:scale-110 duration-500 border-[#032246] px-[20px] py-[15px] hover:bg-[#2E2E2E] rounded-[15px]">
          <Navlink linkHref="/#skills" linkContent="Skills" />
        </span>
         <span className="transition-transform hover:scale-110 duration-500 border-[#032246] px-[20px] py-[15px] hover:bg-[#2E2E2E] rounded-[15px]">
          <Navlink linkHref="/#portofolio" linkContent="Portofolio" />
        </span>
         <span className="transition-transform hover:scale-110 duration-500 border-[#032246] px-[20px] py-[15px] hover:bg-[#2E2E2E] rounded-[15px]">
          <Navlink linkHref="/#experience" linkContent="Experience" />
        </span>
         <span className="transition-transform hover:scale-110 duration-500 border-[#032246] px-[20px] py-[15px] hover:bg-[#2E2E2E] rounded-[15px]">
          <Navlink linkHref="/#testimonials" linkContent="Testimonials" />
        </span>
        <span className="transition-transform hover:scale-110 duration-500 border-[#032246] px-[20px] py-[15px] hover:bg-[#2E2E2E] rounded-[15px] whitespace-nowrap">
          <Navlink linkHref="/#contact-me" linkContent="Contact Me" />
        </span>
      </ul>
    </nav>
  );
}
