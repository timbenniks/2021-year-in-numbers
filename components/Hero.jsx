import Image from "next/image";
import CountUp from "react-countup";

const Hero = () => {
  return (
    <section className="hero relative bg-blue-darker bg-cover	" style={{aspectRatio: '16/8', backgroundImage: "url(/hero-bg.png)"}}>
      <div className="absolute top-36 right-44" style={{width: "450px", height: "360px"}}>
        <div className="absolute top-0 right-0">
          <Image alt="Tim Benniks Logo" src="/icon.png" className="rounded-full" width="280" height="280" />
        </div>
        <section className="absolute bottom-0 left-0">
          <div className="title-wrapper">
            <h1 className="title text-8xl flowing-title flowing-title-fancy">
              <CountUp start={2005} end={2021} duration={1} useEasing={true}>2021</CountUp>
            </h1>
          </div>
          <h2>
            <div className="title-wrapper">
              <span className="title text-5xl flowing-title flowing-title-fancy">The year that</span>
            </div>
            <div className="title-wrapper">
              <span className="title text-5xl flowing-title flowing-title-fancy">changed my life</span>
            </div>
          </h2>
        </section>
      </div>
    </section>
  )
}
export default Hero;
