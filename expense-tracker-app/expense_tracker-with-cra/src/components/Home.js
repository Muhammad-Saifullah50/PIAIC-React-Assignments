import React from 'react'
import Header from './Header'
import Overview from './Overview'
import Transaction from './Transaction'

export const Home = () => {
    return ( 
    <>
        <Header />
        <Overview />
        <Transaction/>
    </>
    )
}
export default Home