import './App.css';
import Square from './components/square/Square.js';
import Board from './components/Board/Board.js';
import { Rectangle } from 'react-shapes';
function App() {
  return (
    <div className="App">
      <div className="center">
        <h1>Minesweeper</h1>
        <Board />
      </div>
    </div>
  );
}

export default App;
