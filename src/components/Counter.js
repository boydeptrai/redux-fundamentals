import React from 'react';
import {useSelector,useDispatch} from 'react-redux'
import { decrement, increment, set } from '../store/action';

export default function Counter() {
    const incident = "Incident";
    const count = useSelector((state) =>state.count);
    const dispatch = useDispatch();
  return (
    <main className="counter">
      <h1>Days Since Last {incident}</h1>
      <p className="count">{count}</p>
      <section className="controls">
        <button onClick={() =>dispatch(increment())}>Increment</button>
        <button onClick={() =>dispatch(set(0))}>Reset</button>
        <button onClick={() =>dispatch(decrement())}>Decrement</button>
      </section>
    </main>
  )
}
