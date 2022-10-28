import React from 'react'

export default function SetCounter() {
  return (
    <section className="controls">
        <form onSubmit={(event) =>{event.preventDefault()}}>
            <label htmlFor="set-to">Set Count</label>
            <input type="number" id="set-to" />
            <input type="submit" />
        </form>
    </section>
  )
}
