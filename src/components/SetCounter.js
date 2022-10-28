import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { set } from '../store/action';

export default function SetCounter() {
  const countFromStore = useSelector((state) =>state.count);
  const [count, setCount] = useState(countFromStore);
  const dispatch = useDispatch();

  useEffect(() =>{
    setCount(countFromStore)
  },[countFromStore])
  return (
    <section className="controls">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          dispatch(set(count));
        }}
      >
        <label htmlFor="set-to">Set Count</label>
        <input
          type="number"
          id="set-to"
          value={count}
          onChange={(event) => setCount(event.target.value)}
        />
        <input type="submit" />
      </form>
    </section>
  );
}
