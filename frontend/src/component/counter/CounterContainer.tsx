import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { countSelector, increase, decrease } from "redux/counter";
import Counter from "./Counter";

const CounterContainer = (): JSX.Element => {
  const currentCount = useSelector(countSelector);
  const dispathcer = useDispatch();
  const handleIncrement = useCallback(() => {
    dispathcer(increase());
  }, []);

  const handleDecrement = useCallback(() => {
    dispathcer(decrease());
  }, []);

  return (
    <Counter
      value={currentCount}
      onIncrement={handleIncrement}
      onDecrement={handleDecrement}
    />
  );
};

export default CounterContainer;
