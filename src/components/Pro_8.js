import React, { useState } from 'react'

export default function Pro_8() {

    const [count, setCounter] = useState(0);
    // useState(0) returns a tuple where the first parameter count is the current state of the counter 
    // and setCounter is the method that will allow us to update the counter's state.

    const setCount = () => {
        setCounter(count + 1);
    }

    return (
        <div>
            <button onClick={setCount}>Add { count ? count : 'Zero' }</button>
        </div>
    )
}
