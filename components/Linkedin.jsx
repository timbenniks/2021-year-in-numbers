import Image from "next/image";
import Counter from "./Counter";

const Linkedin = () => {
  return (
    <>
      <section className="plausible relative mt-48">
        <div className="relative top-3 -left-4 z-10">
          <Image
            alt="LinkedIn Logo"
            src="/Linkedin.png"
            width="268"
            height="65"
          />
        </div>

        <Counter
          from="1000"
          end="1200"
          duration="2"
          suffix=" new followers"
          size="text-6xl"
        />
        <Counter
          from="1000"
          end="4000"
          duration="2"
          suffix=" avg impressions"
          size="text-5xl"
        />
      </section>
      <section className="most-read mt-12 mb-48">
        <h2 className="title flowing-title flowing-title-red text-6xl float-right mb-8">
          Post with most interactions
        </h2>
        <div className="flex mt-12 clear-right">
          <div className="text-right mt-2">
            <Counter
              from="1000"
              end="6555"
              duration="2"
              suffix=" views"
              size="text-4xl"
            />
            <Counter
              from="10"
              end="83"
              duration="2"
              suffix=" reactions"
              size="text-5xl"
            />
            <Counter
              from="10"
              end="11"
              duration="2"
              suffix=" comments"
              size="text-3xl"
            />
          </div>
          <iframe
            src="https://www.linkedin.com/embed/feed/update/urn:li:share:6873567303645085696"
            height="628"
            width="504"
            frameBorder="0"
            allowFullScreen=""
            title="Embedded post"
            className="ml-8"
          ></iframe>
        </div>
      </section>
    </>
  );
};
export default Linkedin;
