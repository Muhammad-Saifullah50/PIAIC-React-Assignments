import React, { useEffect, useState } from 'react'
import Header from './Header'
import Overview from './Overview'
import Transaction from './Transaction'

const Home = (props) => {
    const [transactions, updatedTransaction] = useState([])
    const [expense, updateexpense] = useState(0);
    const [income, updateincome] = useState(0);

    const addTransaction = (payload) => {
        const transactionArray = [...transactions];
        transactionArray.push(payload);
        updatedTransaction(transactionArray);
    }
    const CalculateBalance = () => {
        let expense = 0;
        let income = 0;

        transactions.map((payload) => {
            if (payload.type === "EXPENSE") {
                expense = expense + payload.amount;
            } else {
                income = income + payload.amount;
            }
        });

        updateexpense(expense);
        updateincome(income);
    };
    useEffect(() => CalculateBalance(), [transactions]);
    return (
        <>
            <Header />
            <Overview addTransaction={addTransaction} />
            <Transaction transactions={transactions} expense={expense} income={income}/>
        </>
    )
}
export default Home