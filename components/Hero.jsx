import Image from "next/image";
import CountUp from "react-countup";
import ScrollDown from "./ScrollDown";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-wrap">
        <div className="hero-image">
          <Image
            alt="Tim Benniks Logo"
            src="/icon.png"
            className="rounded-full"
            width="400"
            height="400"
          />
        </div>
        <section className="hero-titles">
          <div className="title-wrapper md:mb-6">
            <h1 className="title flowing-title flowing-title-fancy year">
              <CountUp start={1000} end={2021} duration={1} useEasing={true}>
                2021
              </CountUp>
            </h1>
          </div>
          <h2 className="title flowing-title flowing-title-fancy tagline">
            My year in numbers
          </h2>
        </section>
      </div>

      <ScrollDown />
    </section>
  );
};
export default Hero;
