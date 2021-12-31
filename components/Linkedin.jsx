import Image from "next/image";
import Counter from "./Counter";

const Linkedin = () => {
  return (
    <>
      <section
        className="linkedin relative my-12 mx-auto"
        style={{ width: "95%" }}
      >
        <div className="relative -top-2 md:top-2 left-4 md:-left-4 z-10">
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
          size="text-2xl md:text-6xl"
        />
        <Counter
          from="1000"
          end="4000"
          duration="2"
          suffix=" avg impressions"
          size="text-3xl md:text-5xl"
        />
      </section>
      <section className="most-read my-12 mx-auto" style={{ width: "95%" }}>
        <h2 className="title flowing-title flowing-title-red text-3xl md:text-6xl float-right mb-8">
          Most interactions
        </h2>
        <div className="flex flex-col md:flex-row mt-12 clear-right">
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
              size="text-3xl"
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
            className="w-full md:max-w-xl md:ml-8"
          ></iframe>
        </div>
      </section>
    </>
  );
};
export default Linkedin;
