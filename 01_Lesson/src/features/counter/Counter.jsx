import { useState } from "react";
import { increment, decrement, incrementByAmount, reset } from "./counterSlice";
import { useSelector, useDispatch } from "react-redux";
export const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dipatch = useDispatch();
  const [amount, setAmount] = useState(0);

  function handleReset() {
    setAmount(0);
    dipatch(reset());
  }
  return (
    <section>
      <p>count: {count}</p>
      <div>
        <button onClick={() => dipatch(increment())}>+</button>
        <button onClick={() => dipatch(decrement())}>-</button>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <div>
          <button onClick={() => dipatch(incrementByAmount(Number(amount)))}>
            add
          </button>
          <button onClick={handleReset}>reset</button>
        </div>
      </div>
    </section>
  );
};
