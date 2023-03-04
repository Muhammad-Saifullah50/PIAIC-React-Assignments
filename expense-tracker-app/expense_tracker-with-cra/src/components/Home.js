import React from 'react'
import Header from './Header'
import Overview from './Overview'
import { AddTransactionView } from './Overview'
export const Home = () => {
    return ( 
    <>
        <Header />
        <Overview />
        {/* <AddTransactionView /> */}
    </>
    )
}
export default Home