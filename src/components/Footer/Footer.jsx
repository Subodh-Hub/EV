import React from "react";
import logo from "@/assets/images/footer_logo.png";
import { Icon } from "@iconify/react";
const Footer = () => {
  return (
    <div className="xl:px-30 lg:px-5 px-[16px] mt-10 py-10">
      <hr className="w-[95%] m-auto border-[#DBDBDB]" />
      <div className="flex flex-col mt-10">
        {/* Upper section of footer */}
        <div className="flex flex-col md:flex-row md:justify-between items-center w-full">
          <div className="w-[160px] h-[110px]">
            <img src={logo} alt="" className="h-full w-full object-cover" />
          </div>


            <ul className="flex md:gap-10 gap-[3px] text-[#444] md:text-lg text-sm font-Poppins md:justify-end justify-between w-full" >
              <li>About Us </li>
              <li>Services</li>
              <li>Our Conditions</li>
              <li>Policy</li>
              <li>Contact</li>
            </ul>

        </div>

        <hr className="w-[95%] m-auto border-[#DBDBDB]" />
        {/* Lower section of footer */}
        <div className="flex justify-between mt-10">
          <p className="text-[#000] text-lg font-Poppins flex imtes-center gap-2">
            <span>
              <Icon icon="mdi:copyright" width="30" height="30" />
            </span>
            2025 Electric Scooter
          </p>
          <div className="flex gap-5 text-[#000] text-lg font-Poppins">
            <button>
              <Icon icon="mdi:facebook" width="30" height="30" />
            </button>
            <button>
              <Icon icon="mdi:youtube" width="30" height="30" />
            </button>
            <button>
              <Icon icon="mdi:instagram" width="30" height="30" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
