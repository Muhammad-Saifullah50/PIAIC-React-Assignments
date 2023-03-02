import React, { useState } from "react";
const App = () => {

    const [newItem, setNewItem] = useState("");
    
    const addItem = () => {
        console.log(newItem)
    }

    return (<>
        <div className="header">
            <h1>Todo List</h1>
        </div>
        <div>
        <input
            type="text"
            placeholder="Enter a task"
            value={newItem}
            onChange={e => setNewItem(e.target.value)}
        />
        <button onClick={() => addItem} >Add Task</button>
        </div>

    </>)

    };
export default App;