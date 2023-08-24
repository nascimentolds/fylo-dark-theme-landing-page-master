import Image from "next/image";
import advantages from "../../../public/data/advantages.json";

function Adavantages() {
  return (
    <section className="flex w-full justify-center bg-darkBlueMainBg">
          <div className="flex flex-wrap md:w-[950px] align-center justify-center">
            {advantages.map((item, index) => (
              <div
                className="flex flex-col items-center justify-between md:w-[400px] p-6 md:mb-8 md:mx-8 mt-8 md:mt-0"
                key={index}
              >
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={65}
                  height={65}
                />
                <h3 className="text-lg font-bold font-raleway p-2 mt-4">
                  {item.title}
                </h3>
                <p className="text-center">{item.description}</p>
              </div>
            ))}
          </div>
        </section>
  )
}

export default Adavantages;