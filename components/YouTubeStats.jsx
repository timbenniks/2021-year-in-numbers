import Image from "next/image";
import Counter from "./Counter";

const YouTube = () => {
  return (
    <section className="youtube relative my-12" style={{ aspectRatio: "16/9" }}>
      <div className="my-12">
        <Image alt="YouTube Logo" src="/yt.png" width="301" height="68" />
      </div>
      <Counter end="32000" duration="2" suffix=" views" size="text-7xl" />
      <Counter end="1015" duration="2" suffix=" likes" size="text-4xl" />
      <Counter
        end="1100"
        duration="2"
        suffix=" new subscribers"
        size="text-4xl"
      />
      <Counter
        end="21"
        duration="2"
        suffix=" personal videos created"
        size="text-6xl"
      />
      <Counter
        end="38"
        duration="2"
        suffix=" work videos created"
        size="text-4xl"
      />
    </section>
  );
};
export default YouTube;
