import Image from "next/image";
import Counter from "./Counter";

const Linkedin = () => {
  return (
    <section className="plausible relative my-12">
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
      <iframe
        src="https://www.linkedin.com/embed/feed/update/urn:li:share:6873567303645085696"
        height="628"
        width="504"
        frameBorder="0"
        allowFullScreen=""
        title="Embedded post"
      ></iframe>
    </section>
  );
};
export default Linkedin;
