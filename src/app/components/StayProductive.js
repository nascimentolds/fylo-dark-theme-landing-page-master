const { default: Image } = require("next/image");
import stayProductive from "../../../public/illustration-stay-productive.png";
import arrow from "../../../public/icon-arrow.svg";

function StayProductive() {
  return (
    <section className="flex flex-col md:flex-row md:px-20 items-center bg-darkBlueMainBg">
      <div className="flex p-8 pt-32 md:pt-16">
        <Image src={stayProductive} alt="Stay productive" />
      </div>
      <div className="md:mt-10">
        <h3 className="text-lg md:text-3xl md:w-[350px] font-bold font-raleway p-6 mt-5">
          Stay productive, wherever you are
        </h3>
        <div className="md:w-[510px] md:text-sm">
          <p className="mb-6 pl-6">
            Never let location be an issue when accessing your files. Fylo has
            you covered for all of your file storage needs.
          </p>
          <p className="mb-6 pl-6">
            Securely share files and folders with friends, family and
            colleagues for live collaboration. No email attachments required.
          </p>
        </div>
        <button className="flex items-center justify-between border-b-[1px] w-[135px] border-cyanInsideGradient hover:border-white hover:text-white pb-2 m-6 text-xs text-cyanInsideGradient">
          See how Fylo works
          <Image src={arrow} alt="arrow" width={17} height={17} />
        </button>
      </div>
    </section>
  )
}

export default StayProductive;