import Image from "next/image";
import testimonials from "../../../public/data/testimonials.json";

function Testimunials() {
  return (
    <section className="bg-darkBlueMainBg p-12 pt-32 md:p-36 md:pt-16">
          <div className="md:flex md:justify-between bg-bgQuotes bg-no-repeat bg-left-top bg-[length:25px] md:bg-[length:45px] pt-5 md:pt-7 md:pl-2">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className=" bg-darkBlueTestimonialsBg p-5 md:py-8 rounded-md mb-6 shadow-lg md:w-[320px]"
              >
                <p className="text-[10px] md:text-[13px]">{item.testimony}</p>
                <div className="flex items-center mt-4">
                  <Image
                    src={item.pic}
                    alt={item.name}
                    width={25}
                    height={25}
                    className="rounded-full"
                  />
                  <div className="flex flex-col ml-2">
                    <span className="text-xs font-bold">{item.name}</span>
                    <span className="text-[9px]">{item.position}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
  )
}

export default Testimunials;