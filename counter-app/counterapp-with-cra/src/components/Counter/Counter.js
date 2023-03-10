import React, { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0)

    const Increment = () => {
        setCount(count + 1)
    }
    const Decrement = () => {
        setCount(count - 1)
    }
    const Reset = () => {
        setCount(0)
    }
    return (<>
        <div className="container">

            <div className="heading">
                <h1>Counter App</h1>
            </div>

            <div className="inputfield">
                <span>{count}</span>
            </div>

            <div className="buttons">
                <button id="inc" onClick={Increment}>Increment ++</button>
                <button id="dec" onClick={Decrement}
                    disabled={count === 0}>Decrement --</button>
                <button id="reset" onClick={Reset}
                    disabled={count === 0}>Reset</button>
            </div>

        </div>
    </>)
}

export default Counter