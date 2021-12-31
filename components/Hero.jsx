import Image from "next/image";
import CountUp from "react-countup";
import ScrollDown from "./ScrollDown";

const Hero = () => {
  return (
    <section className="hero relative mb-96" style={{ aspectRatio: "16/9" }}>
      <div
        className="absolute top-36 right-44"
        style={{ width: "800px", height: "420px" }}
      >
        <div className="absolute -top-4 right-24">
          <Image
            alt="Tim Benniks Logo"
            src="/icon.png"
            className="rounded-full"
            width="400"
            height="400"
          />
        </div>
        <section className="absolute bottom-0 left-0">
          <div className="title-wrapper mb-6">
            <h1
              className="title flowing-title flowing-title-fancy"
              style={{ fontSize: "10rem" }}
            >
              <CountUp start={1000} end={2021} duration={1} useEasing={true}>
                2021
              </CountUp>
            </h1>
          </div>
          <h2
            className="title flowing-title flowing-title-fancy"
            style={{ fontSize: "4rem" }}
          >
            My year in numbers
          </h2>
        </section>
      </div>

      <ScrollDown />
    </section>
  );
};
export default Hero;
