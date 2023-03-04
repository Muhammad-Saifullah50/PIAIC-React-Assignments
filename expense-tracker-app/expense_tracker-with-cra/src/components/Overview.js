import React, { useState } from "react"
const Overview = () => {
    const [isAddTxnVisible, toggleAddTxn] = useState(false)

    return (
        <>
            <div className="balance-button">
                <div className="balance">
                    Rs 10000
                </div>
                <div className="addbtn">
                    <button onClick={() => toggleAddTxn(!isAddTxnVisible)}>
                        {isAddTxnVisible ? "Cancel" : "Add"}
                        {/* if add tracsaction is visible then cancel will be rendered  */}
                        {/* isAddTxnVisible this is a state variable */}
                        {/* toggleAddTxn is a function which toggles the text of the button when it is clicked  */}
                        {isAddTxnVisible && <AddTransactionView />}
                    </button>
                </div>
            </div>
        </>
    )
}

export default Overview

const AddTransactionView = () => {
    return (
        <>
            <div className="addTransactionCont">
                <input type="text" placeholder="Enter Amount" />
                <input type="text" placeholder="Enter Description" />
                <div className="radiobtns">
                    <input type="radio" name="transactionType" id="Expense" value="EXPENSE" />
                    <label htmlFor="Expense">Expense</label>

                    <input type="radio" name="transactionType" id="Income" value="INCOME" />
                    <label htmlFor="Income">Income</label>
                </div>
            </div>
        </>
    )
}





