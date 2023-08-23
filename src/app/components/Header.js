import HeaderLinks from "./HeaderLinks";

const { default: Image } = require("next/image");

function Header({logo}) {
  return (
    <header className="flex justify-between p-6 md:p-20">
        <div>
          <Image src={logo} alt="Logo" />
        </div>
        <nav className="w-full md:w-[230px] ml-16">
          <div className="flex justify-between text-[13px] pt-1 md:pt-5">
            <HeaderLinks link={"#"} desc={"Features"} />
            <HeaderLinks link={"#"} desc={"Team"} />
            <HeaderLinks link={"#"} desc={"Sign In"} />
          </div>
        </nav>
      </header>
  )
}

export default Header;