// AVALIACAO DO SISTEMA

import { useState } from 'react';

function ContentRating() {
  const [rating, setRating] = useState(0);

  return (
    <div>
      <h2>Avalie este artigo:</h2>
      {[1, 2, 3, 4, 5].map(star => (
        <button key={star} onClick={() => setRating(star)}>
          {star} Estrela{star > 1 && 's'}
        </button>
      ))}
      <p>Avaliação atual: {rating}</p>
    </div>
  );
}

export default ContentRating;