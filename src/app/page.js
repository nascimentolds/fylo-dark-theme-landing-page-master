import logo from "../../public/logo.svg";
import Header from "./components/Header";
import Adavantages from "./components/Advantages";
import StayProductive from "./components/StayProductive";
import Testimunials from "./components/Testimunials";
import Footer from "./components/Footer";
import GetStarted from "./components/GetStarted";
import GetEarlyAccess from "./components/GetEarlyAccess";

export default function Home() {
  return (
    <div className="min-w-[375px] md:w-full mx-auto text-white bg-darkBlueIntroemailBg">
      <Header logo={logo} />
      <main className="static">
        <GetStarted />
        <div className="bg-darkBlueMainBg h-[300px] md:h-[0px]"></div>
        <Adavantages />
        <StayProductive />
        <Testimunials />
        <div className="bg-darkBlueMainBg h-[250px] md:h-[140px]"></div>
        <GetEarlyAccess />
      </main>
      <Footer />
    </div>
  );
}
