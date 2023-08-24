import Button from "./Button";

function GetEarlyAccess() {
  return (
    <section className="relative">
      <div className="absolute bottom-[40px] md:bottom-[100px] flex flex-col items-center md:w-full">
        <div className=" bg-darkBlueIntroemailBg text-center rounded-md shadow-lg p-6 m-5 md:w-[800px]">
          <div className="md:px-20">
            <h3 className="text-lg md:text-2xl font-bold font-raleway p-6">
              Get early access today
            </h3>
            <p>
              It only takes a minute to sign up and our free starter tier is
              extremely generous. If you have any questions, our support team
              would be happy to help you.
            </p>
          </div>
          <form action="" className="flex flex-col md:flex-row md:gap-6 md:justify-between mt-6 md:mb-6 md:mx-8">
            <input
              type="text"
              placeholder="email@example.com"
              className="text-[10px] rounded-full p-4 px-8 md:mt-4 border-none md:w-[900px]"
            />
            <Button info={"Get Started For Free"} />
          </form>
        </div>
      </div>
      <div className="bg-darkBlueFooterBg h-[260px]"></div>
    </section>
  )
}

export default GetEarlyAccess;