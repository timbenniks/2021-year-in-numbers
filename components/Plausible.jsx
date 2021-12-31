import Image from "next/image";
import Counter from "./Counter";

const Plausible = () => {
  return (
    <section
      className="plausible relative my-12 mx-auto"
      style={{ width: "95%" }}
    >
      <div className="relative -top-2 md:top-2 left-4 md:-left-4 z-10">
        <Image
          alt="plausible Logo"
          src="/plausible.png"
          width="303"
          height="80"
        />
      </div>
      <Counter
        from="10000"
        end="52302"
        duration="2"
        suffix=" unique visitors"
        size="text-2xl md:text-7xl"
      />
      <Counter
        from="10"
        end="87"
        duration="2"
        suffix="% bounce rate"
        size="text-4xl"
      />
      <Counter
        from="10"
        end="69"
        duration="2"
        suffix="% chrome browser"
        size="text-2xl md:text-5xl"
      />
      <Counter
        from="10"
        end="57"
        duration="2"
        suffix="% desktop"
        size="text-4xl"
      />
      <Counter
        from="10"
        end="20"
        duration="2"
        suffix="% mobile"
        size="text-4xl"
      />
      <Counter
        from="1000"
        end="7214"
        duration="2"
        suffix=" US visitors"
        size="text-3xl"
      />
      <Counter
        from="1000"
        end="2206"
        duration="2"
        suffix=" UK visitors"
        size="text-3xl"
      />
    </section>
  );
};
export default Plausible;
