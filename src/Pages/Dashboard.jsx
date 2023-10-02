import React from 'react'
import Graph from '../Components/Graph'
import Form from '../Components/Form'
import Transaction from '../Components/Transaction'

const Dashboard = () => {

  return (
    <div className='grid grid-cols-3 h-screen'>

      <div className='bg-red-300 overflow-y-none'>
        <Form />
      </div>
      
      <div className='col-span-2 grid h-screen'>
        <div className='bg-blue-300 flex justify-between items-center'>
          <Graph title="income" />
          <Graph title="expense" />
        </div>
        <div className='bg-green-300 h-[18rem] overflow-y-scroll'>
          <Transaction />
        </div>
      </div>

    </div>
  )
}
export default Dashboard