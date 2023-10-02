import React, {useContext} from 'react'
import useTransaction from '../Hooks/useTransaction'
import { GlobalState } from '../Context/Context'
import 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2'


const Graph = ({ title }) => {

  const  { filteredCategories, total, chartData } = useTransaction(title)

  return (
    <div >
      <h1 className='text-2xl font-bold text-blue-700 text-center'>{title}</h1>
      <Doughnut data={chartData} />
    </div>
  )
}

export default Graph
