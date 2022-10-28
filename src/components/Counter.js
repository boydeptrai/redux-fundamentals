import React from 'react';
import { useCounter } from '../hookCustoms/useCounter';
import SetCounter from './SetCounter';

export default function Counter() {
    const incident = "Incident";
    // const count = useSelector((state) =>state.count);
    const {count, increment, decrement,set} = useCounter()
  return (
    <main className="counter">
      <h1>Days Since Last {incident}</h1>
      <p className="count">{count}</p>
      <section className="controls">
        <button onClick={() =>increment()}>Increment</button>
        <button onClick={() =>set(0)}>Reset</button>
        <button onClick={() =>decrement()}>Decrement</button>
      </section>
      <SetCounter />
    </main>
  )
}
