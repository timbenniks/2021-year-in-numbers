import Image from "next/image";
import CountUp from "react-countup";
import ScrollDown from "./ScrollDown";

const Hero = () => {
  return (
    <section className="hero relative mb-96" style={{ aspectRatio: "16/9" }}>
      <div
        className="absolute top-36 right-44"
        style={{ width: "550px", height: "320px" }}
      >
        <div className="absolute top-0 right-0">
          <Image
            alt="Tim Benniks Logo"
            src="/icon.png"
            className="rounded-full"
            width="280"
            height="280"
          />
        </div>
        <section className="absolute bottom-0 left-0">
          <div className="title-wrapper">
            <h1 className="title text-9xl flowing-title flowing-title-fancy">
              <CountUp start={2005} end={2021} duration={1} useEasing={true}>
                2021
              </CountUp>
            </h1>
          </div>
          <h2 className="title text-5xl flowing-title flowing-title-fancy">
            The year in numbers
          </h2>
        </section>
      </div>

      <ScrollDown />
    </section>
  );
};
export default Hero;
