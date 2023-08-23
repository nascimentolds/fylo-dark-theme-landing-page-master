const { default: Image } = require("next/image");
import stayProductive from "../../../public/illustration-stay-productive.png";
import arrow from "../../../public/icon-arrow.svg";

function StayProductive() {
  return (
    <section className="flex flex-col items-center bg-darkBlueMainBg">
          <div className="flex p-8 pt-32">
            <Image src={stayProductive} alt="Stay productive" />
          </div>
          <div>
            <h3 className="text-lg font-bold font-raleway p-6 mt-5">
              Stay productive, wherever you are
            </h3>
            <p className="mb-6 pl-6">
              Never let location be an issue when accessing your files. Fylo has
              you covered for all of your file storage needs.
            </p>
            <p className="mb-6 pl-6">
              Securely share files and folders with friends, family and
              colleagues for live collaboration. No email attachments required.
            </p>
            <button className="flex items-center justify-between border-b-[1px] w-[135px] border-cyanInsideGradient pb-2 m-6 text-xs text-cyanInsideGradient">
              See how Fylo works
              <Image src={arrow} alt="arrow" width={17} height={17} />
            </button>
          </div>
        </section>
  )
}

export default StayProductive;