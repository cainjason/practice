import './App.css';
import Sidebar from './Components/Sidebar';
import { useState } from 'react';

function App() {
  const [show, setShow] = useState(true);
  return (
    <>
      <div 
      className="app">
        <h2> Practice! </h2>
        <button 
        className='button'
        onClick={() => setShow
        (!show)}>
          {show ? 'Close' : 'Open'}
        </button>
        {show && <Sidebar />}
        
      </div>
    </>
  );
}

export default App;
