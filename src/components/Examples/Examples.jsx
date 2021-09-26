import React, { useEffect, useState } from 'react';

function Examples() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    fetch('http://localhost:8080/tasks').then((e) => e.json());
  });
  return (
    <div>
      <button type="button" onClick={() => setCount(count + 1)}>
        {count}
      </button>
      <button type="button" onClick={() => setCount(count - 1)}>
        {count}
      </button>
    </div>
  );
}

export default Examples;
