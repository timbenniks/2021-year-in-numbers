import Head from "next/head";
import Hero from "../components/Hero";
import YouTubeStats from "../components/YouTubeStats";
import MostWatched from "../components/MostWatched";

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
      </main>
    </>
  );
}
