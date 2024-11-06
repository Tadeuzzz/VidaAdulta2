// COMPONENTE DE PROCURA

import { useState } from 'react';

function AdvancedSearch({ data }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    const filtered = data.filter(item =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filtered);
  };

  return (
    <div>
      <h2>Busca Avançada</h2>
      <input
        type="text"
        placeholder="Digite sua pesquisa"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Buscar</button>
      <ul>
        {results.map((result, index) => (
          <li key={index}>{result.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default AdvancedSearch;