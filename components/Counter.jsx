import { useState, useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useCountUp } from "react-countup";

const Counter = (props) => {
  const { from, end, duration, suffix, size } = props;
  const [started, setStarted] = useState(false);
  const countUpRef = useRef(null);

  const { ref, inView } = useInView({
    threshold: 1,
  });

  const { start } = useCountUp({
    ref: countUpRef,
    start: from,
    end,
    duration,
    suffix,
    useEasing: true,
  });

  useEffect(() => {
    if (inView && !started) {
      setStarted(true);
      start();
    }
  }, [inView, start, started, setStarted]);

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
