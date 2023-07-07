import './App.css';
import Transaction from './components/Transaction';
import Budget from './components/Budget';
import Form from './components/FormTransaction';

import { useSelector } from 'react-redux';

function App() {
  const transactionDate = useSelector(state => state.transaction.transactionDate);



  // const transactionSort = data => {
  //   return data.sort((a, b) => {
  //     return a.date - b.date;
  //   });
  // }



  return (
    <div className="App">
      <div className='container pt-4'>
        <Budget />
        <Form />
        <div className='d-flex flex-column align-items-center'>
          {transactionDate.map(item => <Transaction key={item.id} id={item.id} name={item.name} sum={item.sum} operation={item.operation} date={item.date} />)}
        </div>
      </div>
    </div>
  );
}

export default App;
