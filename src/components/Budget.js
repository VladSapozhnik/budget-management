import { useSelector } from 'react-redux';

const Budget = () => {
  const budget = useSelector(state => state.transaction.budget);

  return (
    <>
      <h3>Бюджет: {budget} грн</h3>
    </>
  )
} 

export default Budget;