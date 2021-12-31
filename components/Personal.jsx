import Image from "next/image";
import Counter from "./Counter";

const Personal = () => {
  return (
    <section className="youtube relative my-12">
      <div className="relative top-2 -left-4 z-10">
        <Image
          alt="Tim Benniks Logo"
          src="/icon.png"
          className="rounded-full"
          width="150"
          height="150"
        />
      </div>
      <Counter
        from="10"
        end="18"
        duration="2"
        suffix=" CONFERENCE TALKS"
        size="text-7xl"
      />
      <Counter
        from="0"
        end="4"
        duration="2"
        suffix=" blogposts"
        size="text-5xl"
      />
      <Counter
        from="10"
        end="59"
        duration="2"
        suffix=" videos"
        size="text-6xl"
      />
      <Counter
        from="10"
        end="12"
        duration="2"
        suffix=" livestreams"
        size="text-5xl"
      />
      <div className="title-wrapper">
        <h3 className="title flowing-title flowing-title-fancy text-4xl">
          Joined MACH Alliance
        </h3>
      </div>
      <div className="title-wrapper mt-12">
        <h3 className="title flowing-title flowing-title-fancy text-4xl">
          Joined Uniform
        </h3>
      </div>
      <Counter
        from="10"
        end="28"
        duration="2"
        suffix="m series A"
        size="text-7xl"
      />
    </section>
  );
};
export default Personal;
