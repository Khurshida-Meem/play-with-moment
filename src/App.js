import moment from 'moment';
import './App.css';
import { useState } from 'react';

function App() {

  const today = moment().format('YYYY-MM-DD');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');

  const handleFromDateChange = (event) => {
    setFromDate(event.target.value);
  };

  const handleToDateChange = (event) => {
    setToDate(event.target.value);
  };

  const calcDateDiff = (fDate, tDate) => {
    const difference  = moment(tDate).diff(moment(fDate), 'days');
    return difference;
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      console.log(calcDateDiff(fromDate ,today ))
      console.log(fromDate, today)
    }}>
      <label htmlFor="fromDate">From Date:</label>
      <input
        type="date"
        id="fromDate"
        name="fromDate"
        max={today}
        value={fromDate}
        onChange={handleFromDateChange}
      />

      <label htmlFor="toDate">To Date:</label>
      <input
        type="date"
        id="toDate"
        name="toDate"
        min={fromDate}
        max={calcDateDiff(fromDate ,today ) < 10 ? today : moment(fromDate).add(10, 'days').format('YYYY-MM-DD')}
        value={toDate}
        onChange={handleToDateChange}
      />
      <button type='submit'>submit</button>
    </form>
  );
}

export default App;
