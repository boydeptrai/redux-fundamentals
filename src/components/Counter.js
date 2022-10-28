import React from 'react';
import {useSelector,useDispatch} from 'react-redux'
import { bindActionCreators } from 'redux';
import { decrement, increment, set } from '../store/action';

export default function Counter() {
    const incident = "Incident";
    const count = useSelector((state) =>state.count);
    const dispatch = useDispatch();

    const actions = bindActionCreators({increment,decrement,set},dispatch)
  return (
    <main className="counter">
      <h1>Days Since Last {incident}</h1>
      <p className="count">{count}</p>
      <section className="controls">
        <button onClick={() =>actions.increment()}>Increment</button>
        <button onClick={() =>actions.set(0)}>Reset</button>
        <button onClick={() =>actions.decrement()}>Decrement</button>
      </section>
    </main>
  )
}
