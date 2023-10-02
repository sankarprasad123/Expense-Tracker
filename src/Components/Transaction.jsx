import React, { useContext } from 'react'
import { GlobalState } from '../Context/Context'


const Transaction = () => {

  const { state, deleteTransactions } = useContext(GlobalState)

  return (
    <div >
      <h1 className='text-2xl font-bold'>Transactions</h1>
      <div className='flex flex-col gap-3 p-6'>
        {
          state.transactions?.map(t => (
            <div key={t.id} className={
              t.type === 'income' ? "p-3 border-2 border-blue-600 rounded flex justify-between items-center"
              : "p-3 border-2 border-red-600 rounded flex justify-between items-center"
            }>
              <p>Transaction type: {t.type}</p>
              <p>Category: {t.category}</p>
              <p>Amount: {t.amount}</p>
              <p>Date: {t.date}</p>
              <button onClick={() => deleteTransactions(t.id)} className='bg-red-300 rounded px-6 py-2'>Delete</button>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Transaction