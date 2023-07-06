import { useDispatch } from 'react-redux';
import { removeTransaction, defectTransaction  } from '../store/transactionSlice';

const Transaction = ({name, sum, id, operation, date}) => {
  const dispatch = useDispatch();
  

  const dateFormatter = (date) => {
    let formatter = new Intl.DateTimeFormat("ua", {
      weekday: "short",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric"
    });
    return formatter.format(date);
  }

  const defect = (e, id) => {
    const target = e.target;
    dispatch(defectTransaction({
      name: target.name,
      val: target.value,
      operation: operation,
      id: id
    }))
  };


  return (
    <div className="border border-success rounded-2 p-3 w-50 mb-2">
      <div>Назва транзакції: <input type="text" name="name" onBlur={e => defect(e, id)} className="border-0" defaultValue={name} /></div>
      <div>Сума транзакції: <input type="number" name="sum" onBlur={e => defect(e, id)} className="border-0 w-10" defaultValue={sum} /> грн</div>
      <div>Тип транзакції: {operation === 'add' ? 'Дохід' : 'Витрата'}</div>
      <div>Час: {dateFormatter(date)}</div>
      <button onClick={() => dispatch(removeTransaction({id}))} className="btn btn-danger">Remove</button>
    </div>
  )
}

export default Transaction;