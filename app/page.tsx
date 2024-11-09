import Image from "next/image";
import heroImage from "../Public/hero.png"
export default function Home() {
  return (
    <div className="bg-opacity-75 overflow-hidden ">
      <div className="items-center bg-white flex justify-between" >
        <div className="pt-5 h-fit w-full m-5">
          <h1 className="font-extrabold text-7xl mt-8 text-[#044E83] whitespace-nowrap" >Governor Sindh</h1>
          <h1 className="font-normal text-6xl text-[#044E83] whitespace-nowrap mt-2 ">Kamran Khan Tessori</h1>
          <h1 className="mt-7 font-sans text-2.5rem whitespace-nowrap text-5xl font-extrabold text-[#2EB6E8]">
            Certified Cloud
            <br />
            Applied Generative AI
            <br />
            Engineer(GenEng)
          </h1>
          <p className="font-extrabold text-3xl font-sans text-[#044E83] text-2rem whitespace-nowrap mt-6">Earn up to $5,000 / month</p>
          <p className="font-extrabold text-3xl font-sans text-[#044E83] text-2rem mt-6"> Now addmissions are open in <br />Hyderabad</p>

          <div className="flex-col inline-block items-center ">
            <a href="#"><button className=" mt-6 font-semibold w-200 text-white bg-[#044E83] text-center px-20 py-4">Apply Now</button></a>
          </div>
          <div className="ml-5 p-5 flex-col inline-block ">
            <div className="w-50 text-[#044E83] text-2xl text-center font-extrabold ">562,143</div>
            <div className="text-md text-normal m-2 text-[#044E83]">Accepted Applications</div>
          </div>
        </div>
        <div className="relative ">
          <Image
            alt="hero-pic"
           height={7000}
            width={1600}
            src={heroImage}
            className="pl-8 ml-40"
          >
          </Image>
        </div>
      </div>
    </div>
  );
}
