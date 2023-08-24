import Image from "next/image";
import FooterDetails from "../components/FooterDetails"
import FooterLinks from "../components/FooterLinks";
import { RiFacebookFill, RiTwitterFill, RiInstagramLine } from "react-icons/ri";

import logo from "../../../public/logo.svg";
import location from "../../../public/icon-location.svg";
import phone from "../../../public/icon-phone.svg";
import email from "../../../public/icon-email.svg";

function Footer() {
  return (
    <footer className="flex flex-col bg-darkBlueFooterBg p-6 md:p-0 md:w-full md:pl-28">
      <div className="flex mb-8 ml-4 md:w-[130px]">
        <Image src={logo} width={180} alt="Logo" />
      </div>
      <div className="md:flex md:items-start md:w-full md:gap-20 md:mb-[80px]">
        <div className="w-[300px]">
          <FooterDetails
            icon={location}
            description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"}
          />
        </div>
        <div>
          <FooterDetails
            icon={phone}
            description={"+1-543-123-4567"}
          />
          <FooterDetails
            icon={email}
            description={"example@fylo.com"}
          />
        </div>
        <div className="flex flex-col mt-20 md:m-0">
          <FooterLinks link={"#"} desc={"About Us"} />
          <FooterLinks link={"#"} desc={"Jobs"} />
          <FooterLinks link={"#"} desc={"Press"} />
          <FooterLinks link={"#"} desc={"Blog"} />
        </div>
        <div className="flex flex-col mt-12 md:m-0">
          <FooterLinks link={"#"} desc={"Contact Us"} />
          <FooterLinks link={"#"} desc={"Terms"} />
          <FooterLinks link={"#"} desc={"Privacy"} />
        </div>
        <div className="flex justify-center md:justify-normal">
          <div className="flex items-center align-middle md:align-top self-center justify-evenly w-[150px] mt-16 mb-8 md:m-0">
            <a href="#" className="border border-white p-1.5 rounded-full hover:text-cyanInsideGradient hover:border-cyanInsideGradient">
              <RiFacebookFill className="text-base" />
            </a>
            <a href="#" className="border border-white p-1.5 rounded-full hover:text-cyanInsideGradient hover:border-cyanInsideGradient">
              <RiTwitterFill />
            </a>
            <a href="#" className="border border-white p-1.5 rounded-full hover:text-cyanInsideGradient hover:border-cyanInsideGradient">
              <RiInstagramLine />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;