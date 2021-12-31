import Head from "next/head";
import Hero from "../components/Hero";
import YouTubeStats from "../components/YouTubeStats";
import MostWatched from "../components/MostWatched";
import MostRead from "../components/MostRead";
import Personal from "../components/Personal";
import Plausible from "../components/Plausible";
import Twitter from "../components/Twitter";
import BestTweet from "../components/BestTweet";
import Linkedin from "../components/Linkedin";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tim Benniks 2021 in numbers</title>
        <meta name="description" content="2021: My Year In Numbers" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-5xl mx-auto">
        <Hero />
        <YouTubeStats />
        <MostWatched />
        <Personal />
        <MostRead />
        <Plausible />
        <Twitter />
        <BestTweet />
        <Linkedin />
      </main>
    </>
  );
}
