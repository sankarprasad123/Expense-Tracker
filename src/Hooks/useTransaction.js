import React, { useContext } from "react"
import { GlobalState } from "../Context/Context"
import { incomeCategories, expenseCategories } from "../Constant/Category" 

const useTransaction = (title) => {

    const {state} = useContext(GlobalState)

    const rightTransactions = state.transactions.filter((t) => t.type === title);
    const total = rightTransactions.reduce((acc, currVal) => acc += Number(currVal.amount), 0);
    const categories = title === 'income' ? incomeCategories : expenseCategories;

    rightTransactions.forEach(element => {
      const category = categories.find((c) => c.type === element.category);
      if (category) category.amount += Number(element.amount);
  });

  const filteredCategories = categories.filter((sc) => sc.amount > 0);

  const chartData = {
    datasets: [{
      data: filteredCategories.map((c) => c.amount),
      backgroundColor: filteredCategories.map((c) => c.color),
      hoverOffest:4,
      borderRadius:10,
      spacing:10
    }],
    labels: filteredCategories.map((c) => c.type),
    options: {
      cutout: 400,
      responsive: true,
      legend: {
        display: true,
        position: 'right'
      }
    }
  };


    
    return  { filteredCategories, total, chartData };
}

export default useTransaction