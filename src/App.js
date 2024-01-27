import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Calculator from './Calculator/Calculator';
import History from './History/History';

function App() {

  const [tab, setTab] = useState('Calculator')

  return (
    <div className="App">
      <div className='container'>
        <div className='tabs'>
          <p style={{ backgroundColor: tab === 'Calculator' ? 'lightblue' : 'white' }} className='calculator-tab' onClick={() => setTab('Calculator')}>Calculator</p>
          <p style={{ backgroundColor: tab === 'History' ? 'lightblue' : 'white' }} className='history-tab' onClick={() => setTab('History')}>History</p>
        </div>
        {tab === 'Calculator' ?
          <Calculator />
          :
          <div className='history' style={{height:'95%'}}>
            <History />
          </div>
        }
      </div>
    </div>
  );
}

export default App;
