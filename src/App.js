import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Game from './Data/Game'
import Result from './Data/Result';
import { useState } from 'react';


function App() {
  let [score, setscore] = useState(0);
  let [remarks, setremarks] = useState('');
  let [result, setresult] = useState('')

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Game setscore={setscore} setremarks={setremarks} setresult={setresult} score={score} />} path='/' />
          <Route element={<Result score={score} remarks={remarks} result={result} setscore={setscore} setremarks={setremarks} />} path='/result' />
        </Routes>
      </BrowserRouter>
      //change syntax
    </div>
  );
}

export default App;