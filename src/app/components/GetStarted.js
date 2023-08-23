import Image from "next/image";
import intro from "../../../public/illustration-intro.png";
import Button from "./Button";

function GetStarted() {
  return (
    <section>
      <div className="flex items-start md:justify-center md:items-top p-8 mt-2 md:m-0 md:p-0 h-[370px] md:h-[950px] bg-bottom bg-no-repeat bg-[length:100%] bg-bgCurvyMobile md:bg-bgCurvyDesktop">
        <Image src={intro} alt="Illustration intro" className="md:w-[600px]" />
      </div>
      <div className="absolute top-[380px] md:top-[700px] md:w-full flex flex-col items-center px-6">
        <h1 className="md:w-[500px] text-2xl text-center font-raleway font-bold leading-relaxed">
          All your files in one secure location, accessible anywhere.
        </h1>
        <p className="text-center p-4 md:w-[450px]">
          Fylo stores all your most important files in one secure location.
          Access them wherever you need, share and collaborate with friends
          family, and co-workers.
        </p>
        <div className="w-[250px]">
          <Button info={"Get Started"} />
        </div>
      </div>
    </section>
  )
}

export default GetStarted;