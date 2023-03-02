import React, { useState } from "react";

const Todo = () => {
    const [InputData, setInputData] = useState("");

    return (
        <>
            <div className="main">
                <div className="header">
                    <h1>Todo List</h1>
                </div>
                <div className="form">
                    <input
                        type="text"
                        placeholder="Enter a task"
                        value={InputData}
                        onChange={(e) => setInputData(e.target.value)}
                    />
                    <button>Add Task</button>
                </div>
                <div className="showItems">
                    <h3>Dummy</h3>
                </div>
            </div>
        </>
    )
}

export default Todo

