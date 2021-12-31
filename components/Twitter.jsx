import Image from "next/image";
import Counter from "./Counter";

const Twitter = () => {
  return (
    <section
      className="plausible  relative my-12 mx-auto"
      style={{ width: "95%" }}
    >
      <div className="relative -top-2 md:top-2 left-4 md:-left-4 z-10">
        <Image alt="Twitter Logo" src="/Twitter.png" width="116" height="95" />
      </div>

      <Counter
        from="1000"
        end="1325"
        duration="2"
        suffix="k impressions"
        size="text-4xl md:text-7xl"
      />
      <Counter
        from="1000"
        end="1521"
        duration="2"
        suffix=" retweets"
        size="text-4xl md:text-5xl"
      />

      <Counter
        from="100"
        end="533"
        duration="2"
        suffix=" new followers"
        size="text-3xl"
      />
    </section>
  );
};
export default Twitter;
