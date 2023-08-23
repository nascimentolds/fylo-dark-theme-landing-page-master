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
    <footer className="flex flex-col bg-darkBlueFooterBg p-6">
        <div className="flex mb-8 ml-4">
          <Image src={logo} width={180} alt="Logo" />
        </div>
        <FooterDetails
          icon={location}
          description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"}
        />
        <FooterDetails
          icon={phone}
          description={"+1-543-123-4567"}
        />
        <FooterDetails
          icon={email}
          description={"example@fylo.com"}
        />
        <div className="flex flex-col mt-20">
          <FooterLinks link={"#"} desc={"About Us"} />
          <FooterLinks link={"#"} desc={"Jobs"} />
          <FooterLinks link={"#"} desc={"Press"} />
          <FooterLinks link={"#"} desc={"Blog"} />
        </div>
        <div className="flex flex-col mt-12">
          <FooterLinks link={"#"} desc={"Contact Us"} />
          <FooterLinks link={"#"} desc={"Terms"} />
          <FooterLinks link={"#"} desc={"Privacy"} />
        </div>
        <div className="flex items-center self-center justify-evenly w-[150px] mt-16 mb-8">
          <div className="border border-white p-1.5 rounded-full">
            <RiFacebookFill className="text-base" />
          </div>
          <div className="border border-white p-1.5 rounded-full">
            <RiTwitterFill />
          </div>
          <div className="border border-white p-1.5 rounded-full">
            <RiInstagramLine />
          </div>
        </div>
      </footer>
  )
}

export default Footer;