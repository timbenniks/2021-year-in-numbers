import Image from "next/image";
import Counter from "./Counter";

const YouTube = () => {
  return (
    <section
      className="youtube relative my-12 mx-auto"
      style={{ width: "95%" }}
    >
      <div className="relative -top-2 md:top-2 left-4 md:-left-4 z-10">
        <Image alt="YouTube Logo" src="/yt.png" width="301" height="68" />
      </div>
      <Counter
        from="10000"
        end="32000"
        duration="2"
        suffix=" views"
        size="text-5xl md:text-7xl"
      />
      <Counter
        from="1000"
        end="1015"
        duration="2"
        suffix=" likes"
        size="text-4xl md:text-4xl"
      />
      <Counter
        from="1000"
        end="1100"
        duration="2"
        suffix=" new subscribers"
        size="text-3xl md:text-4xl"
      />
      <Counter
        from="10"
        end="21"
        duration="2"
        suffix=" personal videos"
        size="text-2xl md:text-6xl"
      />
      <Counter
        from="10"
        end="38"
        duration="2"
        suffix=" work videos"
        size="text-2xl md:text-5xl"
      />
    </section>
  );
};
export default YouTube;
