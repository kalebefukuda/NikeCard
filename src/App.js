import './App.css';
import Red from './variationsColors/redCard/Red';
import Yellow from './variationsColors/yellowCard/Yellow';
import Blue from './variationsColors/blueCard/Blue';
import { useState } from 'react';

const states = [ 
  {id: 1, name: 'yellow'},
  {id: 2, name: 'red'},
  {id: 3, name: 'blue'},
]

function App() {
  const [currentColor, setCurrentColor] = useState('yellow'); // Estado para armazenar a cor atual

  const handleColorChange = (color) => {
    setCurrentColor(color); // Atualiza o estado com a nova cor selecionada
  };

  return (
    <div className="App ">
      {currentColor === 'yellow' && <Yellow />}
      {currentColor === 'red' && <Red />}
      {currentColor === 'blue' && <Blue />}
      <div className="color-list">
        {states.map(state => (
          <button key={state.id} onClick={() => handleColorChange(state.name)}>{state.name}</button>
        ))}
      </div>
      
    </div>
  );
}

export default App;
