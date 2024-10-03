import { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState('black');

  return (
    <div className='w-full h-screen duration-200' style={{ backgroundColor: color }}>
      <div className='fixed flex flex-wrap justify-center bottom-10 inset-x-0 px-2'>
        <button onClick={() => setColor('red')} className='m-2 p-2 bg-red-500 text-white'>
          Red</button>
        <button onClick={() => setColor('green')} className='m-2 p-2 bg-green-500 text-white'>
          Green</button>
        <button onClick={() => setColor('Violet')} className='m-2 p-2 bg-violet-500 text-white'>
          Violet</button>
        <button onClick={() => setColor('Yellow')} className='m-2 p-2 bg-yellow-500 text-white'>
          Yellow</button>
        <button onClick={() => setColor('blue')} className='m-2 p-2 bg-blue-500 text-white'>
          Blue</button>
      </div>
      <div className='fixed flex flex-wrap justify-center bottom-10 inset-x-0 px-2'>
        Hello
      </div>
    </div>
  );
}

export default App;
