import React, { useState } from 'react'
import Header from './Header'
import Overview from './Overview'
import Transaction from './Transaction'

const Home = (props) => {
const [transactions, updatedTransaction] = useState([])

const addTransaction = (payload) => {
const transactionArray = [...transactions];
transactionArray.push(payload);
updatedTransaction(transactionArray)

} 
    return (
        <>
            <Header />
            <Overview  addTransaction={addTransaction}/>
            <Transaction transactions={transactions}/>
        </>
    )
}
export default Home