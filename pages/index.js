import Head from "next/head";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import Hero from "../components/Hero";

export default function Home() {
  const { ref, inView } = useInView({
    threshold: 1,
  });

  return (
    <>
      <Head>
        <title>Tim Benniks 2021</title>
        <meta name="description" content="My Year In Numbers" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-6xl mx-auto">
        <Hero />
        <CountUp start={1} end={100} duration={2} useEasing={true} suffix="k">
          {({ countUpRef, start }) => (
            <div ref={ref}>
              {inView ? start() : ""}
              <h1
                className="title text-5xl flowing-title flowing-title-fancy"
                ref={countUpRef}
              />
            </div>
          )}
        </CountUp>
      </main>
    </>
  );
}
