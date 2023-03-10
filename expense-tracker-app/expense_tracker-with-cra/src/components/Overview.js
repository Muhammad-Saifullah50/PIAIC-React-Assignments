import React, { useState } from "react"
const Overview = (props) => {
    const [isAddTxnVisible, toggleAddTxn] = useState(false)

    return (
        <>
            <div className="overview-cont">
                <div className="balance">
                Balance: Rs {props.income - props.expense}                </div>
                <div className="addbtn">
                    <button onClick={() => toggleAddTxn(!isAddTxnVisible)}>
                        {isAddTxnVisible ? "Cancel" : "Add"}
                        {/* if add tracsaction is visible then cancel will be rendered  */}
                        {/* isAddTxnVisible this is a state variable */}
                        {/* toggleAddTxn is a function which toggles the text of the button when it is clicked  */}
                    </button>
                    <div className="cont">
                        {isAddTxnVisible && <AddTransactionView toggleAddTxn={toggleAddTxn} addTransaction={props.addTransaction} />}

                    </div>
                </div>
                <div className="expense-info">
                    <div className="expense-tracker">
                        Expense <br /><span>{props.expense}</span>
                    </div>
                    <div className="income-info">
                        Income <br /><span>{props.income}</span>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Overview

const AddTransactionView = (props) => {

    const [amount, setAmount] = useState("");
    const [desc, setDesc] = useState("");
    const [type, setType] = useState("EXPENSE");

    const addTransaction = () => {
        props.addTransaction({ amount: Number(amount), desc, type, id: Date.now() })
        props.toggleAddTxn();

    };
    return (
        <>
            <div className="addTransactionCont">
                <input type="number" placeholder="Enter Amount" value={amount} onChange={(e) => setAmount(e.target.value)} />

                <input type="text" placeholder="Enter Description" value={desc} onChange={(e) => setDesc(e.target.value)} />

                <div className="radiobtns">
                    <input type="radio"
                        name="type"
                        id="Expense"
                        value="EXPENSE"
                        checked={type === "EXPENSE"}
                        onChange={(e) => setType(e.target.value)}
                    />

                    <label htmlFor="Expense">Expense</label>

                    <input type="radio"
                        name="type"
                        id="Income"
                        value="INCOME"
                        checked={type === "INCOME"}
                        onChange={(e) => setType(e.target.value)}
                    />

                    <label htmlFor="Income">Income</label>
                </div>
                <AddTransactionButton onClick={addTransaction} />

            </div>
        </>
    )
}


const AddTransactionButton = ({ onClick }) => {
    return (
        <button className="addtransbtn" onClick={onClick}>
            Add transaction
        </button>
    )
}

