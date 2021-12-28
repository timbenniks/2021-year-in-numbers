import { useState, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { useCountUp } from "react-countup";

const Counter = (props) => {
  const { end, duration, suffix, size } = props;
  const [started, setStarted] = useState(false);
  const countUpRef = useRef(null);

  const { ref, inView } = useInView({
    threshold: 1,
  });

  const { start } = useCountUp({
    ref: countUpRef,
    end,
    duration,
    suffix,
    useEasing: true,
  });

  if (inView && !started) {
    setStarted(true);
    start();
  }

  return (
    <div className="counter-wrapper inview-indicator" ref={ref}>
      <p
        className={`title flowing-title flowing-title-fancy ${size}`}
        ref={countUpRef}
      />
    </div>
  );
};

export default Counter;
