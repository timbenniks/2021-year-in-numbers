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
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tim Benniks 2021 in numbers</title>
        <meta name="description" content="2021 was a crazy year in which I switched jobs and changed up my life. This website " /shows my year in numbers.>

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />

        <meta name="viewport" content="width=device-width,initial-scale=1" />

        <meta itemprop="name" content="Tim Benniks 2021 in numbers"/>
        <meta itemprop="description" content="2021 was a crazy year in which I switched jobs and changed up my life. This website shows my year in numbers."/>
        <meta itemprop="image" content="http://res.cloudinary.com/dwfcofnrd/image/upload/q_auto/og_v4nrbq.png"/>

        <meta property="og:type" content="website" />
        <meta
          name="og:title"
          property="og:title"
          content="Tim Benniks 2021 in numbers"
        />
        <meta
          name="og:description"
          property="og:description"
          content="2021 was a crazy year in which I switched jobs and changed up my life. This website shows my year in numbers."
        />
        <meta property="og:site_name" content="Tim Benniks" />
        <meta property="og:url" content="https://2021.timbenniks.dev" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dwfcofnrd/image/upload/q_auto/og_v4nrbq.png"
        />

        <meta name="msapplication-TileColor" content="#0e274f" />
        <meta name="theme-color" content="#3671cd" />
        <meta
          data-hid="mobile-web-app-capable"
          name="mobile-web-app-capable"
          content="yes"
        />
        <meta
          data-hid="apple-mobile-web-app-title"
          name="apple-mobile-web-app-title"
          content="timbenniks"
        />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Tim Benniks 2021 in numbers" />
        <meta name="twitter:description" content="2021 was a crazy year in which I switched jobs and changed up my life. This website " /shows my year in numbers.>
        <meta name="twitter:site" content="@timbenniks" />
        <meta name="twitter:creator" content="@timbenniks" />

        <meta
          itemProp="name"
          content="Tim Benniks: developer relations, video creator..."
        />

        <link rel="preconnect" href="https://res.cloudinary.com" />
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
      <Footer />
    </>
  );
}
