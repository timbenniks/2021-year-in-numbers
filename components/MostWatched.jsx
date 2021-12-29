import Counter from "./Counter";

const MostWatched = () => {
  return (
    <section className="most-watched my-12" style={{ aspectRatio: "16/9" }}>
      <h2 className="title flowing-title flowing-title-red text-6xl float-right mb-8">
        Most watched video
      </h2>
      <div className="flex mt-12 clear-right">
        <div className="text-right mt-2">
          <h3 className="title flowing-title flowing-title-yellow text-3xl">
            TIM TRIES: FIGMA, ZEPLIN AND STORYBOOK. MIND IS BLOWN...
          </h3>

          <Counter
            from="10000"
            end="12934"
            duration="2"
            suffix=" views"
            size="text-4xl"
          />
          <Counter
            from="100"
            end="138"
            duration="2"
            suffix="k impressions"
            size="text-5xl"
          />
          <Counter
            from="10"
            end="97"
            duration="2"
            suffix="% unsubscribed viewers"
            size="text-3xl"
          />
        </div>
        <div
          className="image-wrapper with-fancy-bg fancy-blue-light"
          style={{
            aspectRatio: "16/9",
            width: "700px",
          }}
        >
          <div
            className="bg-no-repeat bg-contain ml-8 absolute z-10 w-full h-full"
            style={{
              backgroundImage:
                "url(https://res.cloudinary.com/dwfcofnrd/image/fetch/q_auto,w_400,f_auto/https://images.ctfassets.net/zutbjtt6qhdz/tim-tries-figma-zeplin-and-storybook-mind-is-blown/df98c5e1ff58b2460b397c2d743d0042/tim-tries-figma-zeplin-and-storybook-mind-is-blown-e1d64a02-e2eb-43df-bed0-f3f0ccfd24e8_thumbnail-tries-figma-zeplin-storybo.png)",
            }}
          ></div>
        </div>
      </div>
    </section>
  );
};
export default MostWatched;
