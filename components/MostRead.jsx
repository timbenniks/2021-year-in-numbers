import Counter from "./Counter";

const MostRead = () => {
  return (
    <section className="most-read mt-12 mb-48">
      <h2 className="title flowing-title flowing-title-red text-6xl float-right mb-8">
        Most read post
      </h2>
      <div className="flex mt-12 clear-right">
        <div className="text-right mt-2">
          <h3 className="title flowing-title flowing-title-yellow text-3xl">
            HOW TO GET YOUR WEBCAM TO LOOK DECENT IN A FEW SIMPLE STEPS
          </h3>

          <Counter
            from="10000"
            end="31004"
            duration="2"
            suffix=" pageviews"
            size="text-4xl"
          />
          <Counter
            from="0"
            end="7"
            duration="2"
            suffix=" mins on page"
            size="text-5xl"
          />
          <Counter
            from="10"
            end="96"
            duration="2"
            suffix="% bounce rate"
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
                "url(https://res.cloudinary.com/dwfcofnrd/image/fetch/f_auto,q_auto,w_400/https://images.ctfassets.net/zutbjtt6qhdz/how-to-get-your-webcam-to-look-decent-in-a-few-simple-steps/50a4e6778ea51f170e33012bfa53db92/how-to-get-your-webcam-to-look-decent-in-a-few-simple-steps-3c83ea67-36df-446b-b3fe-57bc110cef13_vcf1xfoegwmhd.jpg)",
            }}
          ></div>
        </div>
      </div>
    </section>
  );
};
export default MostRead;
