import Button from "./Button";

function GetEarlyAccess() {
  return (
    <section className="relative">
          <div className="absolute bottom-[40px] flex flex-col items-center">
            <div className=" bg-darkBlueIntroemailBg text-center rounded-md shadow-lg p-6 m-5">
              <h3 className="text-lg font-bold font-raleway p-6">
                Get early access today
              </h3>
              <p>
                It only takes a minute to sign up and our free starter tier is
                extremely generous. If you have any questions, our support team
                would be happy to help you.
              </p>
              <form action="" className="flex flex-col mt-6">
                <input
                  type="text"
                  placeholder="email@example.com"
                  className="text-[10px] rounded-full p-4 px-8 border-none"
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