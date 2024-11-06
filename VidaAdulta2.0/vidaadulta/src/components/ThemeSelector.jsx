// MODO ESCURO E MODO CLARO
import { useState } from 'react';

function ThemeSelector() {
  const [theme, setTheme] = useState('light');

  return (
    <div style={{ backgroundColor: theme === 'dark' ? '#333' : '#FFF', color: theme === 'dark' ? '#FFF' : '#000' }}>
      <h2>Selecione um tema:</h2>
      <button onClick={() => setTheme('light')}>Claro</button>
      <button onClick={() => setTheme('dark')}>Escuro</button>
    </div>
  );
}

export default ThemeSelector;