import React, { useState } from "react";
import './Todo.css'
import { FaTrash } from "react-icons/fa";



const Todo = () => {
    const [InputData, setInputData] = useState("");

    const [Items, setItems] = useState([]);

    const addItem = () => {
        if (!InputData) {
            alert("Enter a task")
        }
        else {
            setItems([...Items, InputData]);
            setInputData('');
        }
    }

    const deleteitem = (id) => {
        console.log(id)
        const updateditems = Items.filter((elem, ind) => {
            return ind !== id;

        })
        setItems(updateditems);
    }
    return (
        <>
            <div className="main">
                <div className="header">
                    <h1>Todo List</h1>
                </div>
                <div className="form">
                    <input
                        type="text"
                        placeholder="Enter a task..."
                        value={InputData}
                        onChange={(e) => setInputData(e.target.value)}
                    />
                    <button onClick={addItem} >Add Task</button>
                </div>

                {
                    Items.map((elem, ind) => {
                        return (<>
                            <div className="showItems" key={ind} >
                                <div className="list">{elem}</div>
                                <div className="trashicon" onClick={() => deleteitem(ind)} ><FaTrash /></div>
                            </div>
                        </>)
                    })

                }

            </div>
        </>
    )
}

export default Todo
