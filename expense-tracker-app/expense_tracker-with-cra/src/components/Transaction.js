import React from 'react'

const TransactionCell = (props) => {
    return (
        <>
            <div className="list" isExpense={props.payload?.type === "EXPENSE"}>
                <div className="desc">
                    {props.payload.desc}
                </div>
                <div className="amount">
                    {props.payload.amount}
                </div>
            </div>
        </>
    )
}


const Transaction = (props) => {
    return (
        <>
            <div className="transactions">
                {props.transactions?.length ? props.transactions.map((payload) => (<TransactionCell payload={payload} />
                )) : ""}
            </div>

        </>
    )

}

export default Transaction