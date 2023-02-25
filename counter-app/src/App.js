// main logic of application is in this file. we will link external components to this.

import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0)

  return (<>
    <div className="container">

      <div className="heading">
        <h1>Counter App</h1>
      </div>

      <div className="inputfield">
        <span>{count}</span>
      </div>

      <div className="buttons">
        <button id="inc" onClick={() => setCount(count + 1)}>Increment ++</button>
        <button id="dec" onClick={() => setCount(count - 1)}
          disabled={count === 0}>Decrement --</button>
        <button id="reset" onClick={() => setCount(0)}
          disabled={count === 0}>Reset</button>
      </div>

    </div>
  </>)
};

export default App;
