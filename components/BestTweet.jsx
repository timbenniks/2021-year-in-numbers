import Counter from "./Counter";

const BestTweet = () => {
  return (
    <section className="most-watched mt-12 mb-24">
      <h2 className="title flowing-title flowing-title-red text-6xl float-right mb-8">
        Most engagements
      </h2>
      <div className="flex mt-12 clear-right">
        <div className="text-right mt-2">
          <Counter
            from="100"
            end="100"
            duration="2"
            suffix=" likes"
            size="text-4xl"
          />
          <Counter
            from="10000"
            end="13176"
            duration="2"
            suffix=" impressions"
            size="text-5xl"
          />
          <Counter
            from="10"
            end="34"
            duration="2"
            suffix=" comments"
            size="text-3xl"
          />
        </div>
        <div
          className="image-wrapper with-fancy-bg fancy-blue-light"
          style={{
            aspectRatio: "500/481",
            width: "500px",
          }}
        >
          <div
            className="bg-no-repeat bg-contain ml-8 absolute z-10 w-full h-full"
            style={{
              backgroundImage:
                "url(https://res.cloudinary.com/dwfcofnrd/image/upload/q_auto,f_auto,w_1000/tweet_kcv8ud.png)",
            }}
          ></div>
        </div>
      </div>
    </section>
  );
};
export default BestTweet;
