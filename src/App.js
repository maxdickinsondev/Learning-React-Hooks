import React, { useState } from 'react';

function App() {
  const [tech, setTech] = useState(['React Native', 'ReactJS']);
  const [newTech, setNewTech] = useState('');


  function handleAdd() {
    setTech([...tech, newTech]);
  }
  
  return (
    <>
      <ul>
        {tech.map(t => (
          <li key={t}>{t}</li>
        ))}
      </ul>
    
      <input type="text" onChange={e => setNewTech(e.target.value)}></input>
      <button onClick={handleAdd}>Adicionar</button>
    </>
  );
}

export default App;
