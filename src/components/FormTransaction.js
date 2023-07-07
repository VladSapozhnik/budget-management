import { useDispatch} from 'react-redux';
import { addTransaction, management } from '../store/transactionSlice';

const Form = () => {
  const dispatch = useDispatch();

  const validate = value => {
    if (value.trim() !== '') return true;
    else return false;
  }

  const transaction = e => {
    e.preventDefault();
    const target = e.target;

    if (validate(target[0].value) && validate(target[1].value) && validate(target[2].value)) {
      dispatch(addTransaction({
        name: target[0].value, 
        sum: target[1].value, 
        operation: target[2].value,
      }));

      dispatch(management({
        operation: target[2].value,
        sum: target[1].value
      }));

      // localStorage.setItem('budget', budget);
      // localStorage.setItem('transactionDate', JSON.stringify(transactionDate));
    }
  }


  return (
    <form className='d-flex flex-column align-items-start' onSubmit={transaction}>
        <label className='d-flex w-25 flex-column align-items-start mb-1' >
          Назва транзакції:
          <input className="form-control" type='text' name='name' placeholder='Назва транзакції:' />
        </label> 
        <label className='d-flex w-25 flex-column align-items-start mb-1'>
          Сума транзакції:
          <input className="form-control" type='number' name='sum' placeholder='Сума транзакції:' />
        </label>
        <label className='d-flex w-25 flex-column align-items-start mb-1'>
          Тип транзакції:
          <select className="form-select mb-1">
            <option disabled>Тип транзакції:</option>
            <option value={'add'}>дохід</option>
            <option value={'remove'}>витрата</option>
          </select>
        </label>
        <button className='btn btn-primary mb-3' type='submit'>Відправити</button>
    </form>
  )
}

export default Form;